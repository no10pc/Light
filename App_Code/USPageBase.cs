using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
namespace light.Common
{
    /// <summary>
    /// Summary description for USPageBase
    /// </summary>
    public class USPageBase : Page
    {
        private const String Key_UserSessionState = "Cache:UserSessionState";
        public USPageBase()
        {
            //
            // TODO: Add constructor logic here
            //
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
}