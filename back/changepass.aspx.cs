using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class changepass : PageBase
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Page.IsPostBack)
        {
            doPost();
        }
    }
    private void doPost()
    {
        light.BLL.backtools bll = new light.BLL.backtools();
        light.Model.backtools model = bll.GetModel(UserState.UserName);
        if (Request["oldpassword"] == model.password)
        {
            model.password = Request["passwordagain"];
            model.username = UserState.UserName;
            bll.UpdatePsw(model);
            Response.Redirect("/back/login.aspx");
        }
        else
        {
            light.Common.WebMessageBox.ShowMessageBox("原密码不正确", this);
        }
    }
}
