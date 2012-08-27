using System;
using System.Collections.Generic;
using System.Data;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;


public partial class product_edit : PageBase
{
    protected light.Model.product model = new light.Model.product();
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!Page.IsPostBack)
        {
            int pid = light.Common.DNTRequest.GetQueryInt("pid", 0);
            if (pid > 0)
            {
                model = new light.BLL.product().GetModel(pid);
                bingCategory(model.pcateid);
                ViewState["pid"] = pid.ToString();
            }
        }
        else
        {
            doPost();
        }

    }
    private void bingCategory(int pcateid)
    {
        
        DataTable dt = new light.BLL.category().GetList(" 1=1 ").Tables[0];
        foreach (DataRow dr in dt.Rows)
        {
            pcateid1.Items.Add(new ListItem(dr["cname"].ToString(), dr["pkid"].ToString()));
        }
        pcateid1.Value = pcateid.ToString();

    }
    protected void doPost()
    {
        light.BLL.product bll = new light.BLL.product();
        light.Model.product model = bll.GetModel(int.Parse(ViewState["pid"].ToString()));
        model.addtime = DateTime.Now;
        model.isopen = 0;
        model.pcateid = int.Parse(this.pcateid1.Value);
        model.pinfo = Request["pinfo"];
        //model.plogo = Request["plogo"];
        if (Request["btnmodify"] == "1")
        {
            model.plogo = UploadHelper.UploadImg(this.newplogo);
        }
        else
        {
            model.plogo = Request["oldplogo"].ToString();
        }
        model.pname = Request["pname"];
        model.enpname = Request["enpname"];
        model.krpname = Request["krpname"];
        model.eninfo = Request["eninfo"];
        model.krinfo = Request["krinfo"];
        if (model.plogo.Length > 1)
        {
            bll.Update(model);
            Response.Redirect("edit.aspx?pid=" + ViewState["pid"].ToString());
        }
        else
        {
            if (model.plogo == "1")
            {
                light.Common.WebMessageBox.ShowMessageBox("图片格式错误！", this);
            }
            else
            {
                light.Common.WebMessageBox.ShowMessageBox("图片超过300K！", this);
            }
        }

    }
}

