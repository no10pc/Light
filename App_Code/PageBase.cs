using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using light.Common;


/// <summary>
///PageBase 的摘要说明
/// </summary>
public class PageBase : Page
{
    private const String Key_UserSessionState = "Cache:UserSessionState";
    protected override void OnInit(EventArgs e)
    {
        //base.OnInit(e);
        CustomerValidate();
    }

    private void CustomerValidate()
    {
        //try
        //{
        //    if (UserState == null)
        //    {
        //        UserState = new UserSessionState();
        //    }

        //    bool Pass = UserState.IsPassed;
        //    if (!Pass)
        //    {
        //        Response.Redirect("/back/login.aspx?ReturnUrl=" + Request.Url);
        //    }
        //}
        //catch
        //{
        //    Response.Redirect("/back/login.aspx?ReturnUrl=" + Request.Url);
        //}
    }

    public UserSessionState UserState
    {
        get
        {
            try
            {
                return (UserSessionState)(Session[Key_UserSessionState]);
            }
            catch
            {
                return null;
            }
        }
        set
        {
            if (null == value)
            {
                Session.Remove(Key_UserSessionState);
            }
            else
            {
                Session[Key_UserSessionState] = value;
            }
        }
    }
}
