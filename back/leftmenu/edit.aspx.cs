using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using light.Common;

public partial class leftmenu_edit : PageBase
{
    protected light.Model.leftmenu model = new light.Model.leftmenu();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            int pid = light.Common.DNTRequest.GetQueryInt("pid", 0);
            if (pid > 0)
            {
                ViewState["pid"] = pid.ToString();
                model = new light.BLL.leftmenu().GetModel(pid);
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
        light.BLL.leftmenu bll = new light.BLL.leftmenu();
        if (!bll.Exists(cname))
        {
            model = bll.GetModel(int.Parse(ViewState["pid"].ToString()));
            model.cname = cname;
            bll.Update(model);
            WebMessageBox.ShowMessageBox("修改成功", this);
        }
        else
        {
            WebMessageBox.ShowMessageBox("该菜单名已经存在", this);
        }
    }
}
