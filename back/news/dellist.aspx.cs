using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class news_dellist : PageBase
{
    protected void Page_Load(object sender, EventArgs e)
    {
        int nid = light.Common.DNTRequest.GetQueryInt("nid", 0);
        if (nid > 0)
        {
            light.BLL.news bll = new light.BLL.news();
            bll.safe(nid);
            light.Common.WebMessageBox.ShowMessageBox("恢复成功", this);

        }
    }
}
