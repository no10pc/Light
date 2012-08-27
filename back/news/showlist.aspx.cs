using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class news_showlist : PageBase
{
    protected string newlist = string.Empty;
    protected void Page_Load(object sender, EventArgs e)
    {
        int nid = light.Common.DNTRequest.GetQueryInt("nid", 0);
        if (nid > 0)
        {
            light.BLL.news bll = new light.BLL.news();
            bll.Delete(nid);
            light.Common.WebMessageBox.ShowMessageBox("删除成功", this);
        }
        if (!Page.IsPostBack)
        {
            bindcategory();
            newlist = bindlist(0);
        }
    }
    protected void bindcategory()
    {
        this.DropDownList1.DataSource = new light.BLL.newscategory().GetList(" 1=1 ").Tables[0];
        this.DropDownList1.DataTextField = "cname";
        this.DropDownList1.DataValueField = "pkid";
        this.DropDownList1.DataBind();
        DropDownList1.Items.Insert(0, new ListItem("-全部-","0"));
    }
    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        newlist = bindlist(int.Parse(DropDownList1.SelectedValue));
    }
    protected string bindlist(int cateid)
    {
        string strWhere=" 1=1 ";
        if (cateid != 0)
            strWhere = " categoryid="+cateid.ToString()+" ";
        DataTable dt = new light.BLL.news().GetList(strWhere).Tables[0];
        StringBuilder sb = new StringBuilder();
        foreach (DataRow dr in dt.Rows)
        {
           
            sb.AppendLine(@" <tr>");
            sb.AppendLine(@"                                <td align=""center"">");
            sb.AppendLine(@"                                    "+dr["id"].ToString());
            sb.AppendLine(@"                                </td>");
            sb.AppendLine(@"");
            sb.AppendLine(@"                                <td width=""*"">");
            sb.AppendLine(@"                                    "+light.Common.Utility.CutString(dr["title"].ToString(),0,15));
            sb.AppendLine(@"                                </td>");
            sb.AppendLine(@"                                <td width=""20%"" align=""center"">");
            sb.AppendLine(@"                                    "+ new light.BLL.newscategory().GetModel(int.Parse(dr["categoryid"].ToString())).cname);
            sb.AppendLine(@"                                </td>");
            sb.AppendLine(@"                                <td align=""center"">");
            sb.AppendLine(@"                                    <a style=""cursor: pointer;"" href='edit.aspx?nid="+dr["id"].ToString() +"'>修改</a>&nbsp;");
            sb.AppendLine(@"                                    <a style=""cursor: pointer;"" onclick='del("+dr["id"].ToString()+");'>删除</a>");
            sb.AppendLine(@"                                </td>");
            sb.AppendLine(@"                            </tr>");
        }
        return sb.ToString();

    }
}
