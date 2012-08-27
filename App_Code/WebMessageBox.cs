using System;
using System.Data;
using System.Configuration;
using System.Text;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
namespace light.Common
{
    /// <summary>
    /// MessageBox 的摘要说明
    /// </summary>
    public class WebMessageBox
    {
        #region 提示消息函数

        #region 显示提示消息
        /// <summary>
        /// 显示提示消息(非AJAX)
        /// </summary>
        /// <param name="str_Message">要显示得数据</param>
        /// <param name="page">页面类</param>
        public static void ShowMessageBox(string str_Message, Page page)
        {
            Type cstype = page.GetType();
            ClientScriptManager cs = page.ClientScript;
            cs.RegisterStartupScript(cstype, "", "alert('" + str_Message + "');", true);

        }
        #endregion

        #region 显示消息并导向到目标页面
        /// <summary>
        /// 显示消息并导向到目标页面(非AJAX)
        /// </summary>
        /// <param name="str_Message">显示数据</param>
        /// <param name="url">目标路径</param>
        /// <param name="page">页面类</param>
        public static void ShowMessageBoxRedirect(string str_Message, string url, Page page)
        {
            Type cstype = page.GetType();
            ClientScriptManager cs = page.ClientScript;
            cs.RegisterStartupScript(cstype, "", "alert('" + str_Message + "');window.location.href='" + url + "';", true);
        }
        #endregion

        #region 显示信息并关闭本窗口
        /// <summary>
        /// 显示信息并关闭本窗口(非AJAX)
        /// </summary>
        /// <param name="str_Message">显示数据</param>
        /// <param name="page">页面类</param>
        public static void ShowMessageBoxAndCloseWindow(string str_Message, Page page)
        {
            Type cstype = page.GetType();
            ClientScriptManager cs = page.ClientScript;
            cs.RegisterStartupScript(cstype, "", "alert('" + str_Message + "');window.close();", true);
        }
        #endregion

        #region 显示信息窗口并后退一步
        /// <summary>
        /// 显示信息窗口并后退一步(非AJAX)
        /// </summary>
        /// <param name="str_Message">显示数据</param>
        /// <param name="page">页面类</param>
        public static void ShowMessageBoxGoBack(string str_Message, Page page)
        {
            Type cstype = page.GetType();
            ClientScriptManager cs = page.ClientScript;
            cs.RegisterStartupScript(cstype, "", "alert('" + str_Message + "');window.history.go(-1);", true);
        }

        #endregion

        public static void IframeRedirectUrl(string url, Page page)
        {
            Type cstype = page.GetType();
            ClientScriptManager cs = page.ClientScript;
            cs.RegisterStartupScript(cstype, "", "window.parent.location='" + url + "'", true);

            //Page.ClientScript.RegisterStartupScript(this.GetType(), "Close&RefreshOpener", "window.opener.location = 'TwoHouseList.aspx';window.close();", true);
        }

        #endregion

    }
}