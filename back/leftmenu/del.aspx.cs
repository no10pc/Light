using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using light.Common;

public partial class leftmenu_del : PageBase
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            int pid = light.Common.DNTRequest.GetQueryInt("pid", 0);
            if (pid > 0)
            {
                ViewState["pid"] = pid.ToString();
            }
        }
        else
        {
            doPost();
        }
    }

    private void doPost()
    {
        string cname = Request["cname"];
        int cid = int.Parse(ViewState["pid"].ToString());
        if (cname.ToLower() == "ok")
        {
            new light.BLL.leftmenu().Delete(cid);
            WebMessageBox.ShowMessageBox("该分类已被成功删除", this);
        }
    }
}
