using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class product_showlist : PageBase
{
    protected void Page_Load(object sender, EventArgs e)
    {
        int pid = light.Common.DNTRequest.GetQueryInt("pid", 0);
        if (pid > 0)
        {
            light.BLL.product bll = new light.BLL.product();
            bll.Delete(pid);
            light.Common.WebMessageBox.ShowMessageBoxRedirect("删除成功","showlist.aspx", this);

        }
    }
}
