using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class product_dellist : PageBase
{
    protected void Page_Load(object sender, EventArgs e)
    {
        int pid = light.Common.DNTRequest.GetQueryInt("pid", 0);
        if (pid > 0)
        {
            light.BLL.product bll = new light.BLL.product();
            bll.safe(pid);
            light.Common.WebMessageBox.ShowMessageBox("恢复成功", this);

        }
    }
}
