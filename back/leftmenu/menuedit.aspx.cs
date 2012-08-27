using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Text;

public partial class leftmenu_menuedit : PageBase
{
    protected string topmenu;
    protected string currentid;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            int pid = light.Common.DNTRequest.GetQueryInt("pid", 0);
            if (pid > 0)
            {
                ViewState["pid"] = pid.ToString();
                topmenu = getMenu(pid);
            }
            else
            {
                ViewState["pid"] = "2";
                Response.Redirect("menuedit.aspx?pid=2");
            }
        }
        else
        {
            doPost();
        }
    }

    private string getMenu(int pid)
    {
        DataTable dt = new light.BLL.leftmenu().GetList(" parentid=" + pid.ToString()).Tables[0];
        StringBuilder sb = new StringBuilder();
        sb.Append("<ul class=\"Tab\" id=\"menu\">");
        int i = 0;
        foreach (DataRow dr in dt.Rows)
        {
            if (i==0)
            {
                sb.Append("<li class='curr' id=\"O" + dr["pkid"].ToString() + "\"><em>" + dr["cname"].ToString() + "正文</em></li>");
                currentid = dr["pkid"].ToString();
            }
            else
            {
                sb.Append("<li id=\"O" + dr["pkid"].ToString() + "\"><em>" + dr["cname"].ToString() + "正文</em></li>");
            }
            i++;
        }
        sb.Append("</ul>");
        return sb.ToString();

    }

    private void doPost()
    {
        int typeid = int.Parse(Request["typeid"].ToString());
        if (typeid > 0)
        {
            light.BLL.leftmenu bll = new light.BLL.leftmenu();
            light.Model.leftmenu model = bll.GetModel(typeid);
            model.ename = Request["description"];
            bll.Update(model);
            light.Common.WebMessageBox.ShowMessageBoxRedirect("修改成功!", "menuedit.aspx?pid=" + ViewState["pid"].ToString(), Page);
        }
        
    }
}
