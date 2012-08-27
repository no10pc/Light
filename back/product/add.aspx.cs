using System;
using System.Collections.Generic;
using System.Data;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;


public partial class product_add : PageBase
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (Page.IsPostBack)
        {
            doPost();
        }
        else
        {
            bingCategory();
        }


    }

    private void bingCategory()
    {
        DataTable dt = new light.BLL.category().GetList(" 1=1 ").Tables[0];
        foreach (DataRow dr in dt.Rows)
        {
            pcateid1.Items.Add(new ListItem(dr["cname"].ToString(), dr["pkid"].ToString()));
        }

    }

    private void doPost()
    {
        light.Model.product model = new light.Model.product();
        model.addtime = DateTime.Now;
        model.isopen = 1;
        model.pcateid = int.Parse(pcateid1.Value);
        model.pinfo = Request["pinfo"];
        //model.plogo = Request["plogo"];
        model.plogo = UploadHelper.UploadImg(this.plogo);
        model.pname = Request["pname"];
        model.enpname = Request["enpname"];
        model.krpname = Request["krpname"];
        model.eninfo = Request["eninfo"];
        model.krinfo = Request["krinfo"];
        light.BLL.product bll = new light.BLL.product();
        if (model.plogo.Length > 1)
        {
            bll.Add(model);
            light.Common.WebMessageBox.ShowMessageBox("添加成功!", this);
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

