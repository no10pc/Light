using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using light.Common;

public partial class back_login : USPageBase
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (Page.IsPostBack)
        {
            string uname = Request["username"];
            string psw = Request["password"];
            string verify = Request["verifycode"];
            checklogin(uname, psw);
        }
        else
        {
            ViewState["ReturnUrl"] = light.Common.DNTRequest.GetQueryString("ReturnUrl");
        }

    }

    private void checklogin(string uname, string psw)
    {
        light.BLL.backtools bll = new light.BLL.backtools();
        light.Model.backtools model = bll.GetModel(uname);
        if (model != null)
        {
            if (model.password == psw)
            {
                UserSessionState uss = UserState;
                uss.IsPassed = true;
                uss.UserName = model.username;
                if (!String.IsNullOrEmpty(ViewState["ReturnUrl"].ToString()))
                {
                    Response.Redirect(ViewState["ReturnUrl"].ToString());
                }
                else
                {
                    Response.Redirect("main.aspx");
                }
            }
            else
            {
                Response.Redirect("login.aspx");

            }
        }
        else
        {
            Response.Redirect("login.aspx");
        }

    }
}
