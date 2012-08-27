using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

public partial class _Default : myBase
{
    protected int pageVal = 1;
    protected PageModel pageModel = new PageModel();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            UserState.lng = light.Common.DNTRequest.GetQueryString("lng");

            switch (UserState.lng)
            {
                case "cn":
                    pageVal = 1;
                    break;
                case "kr":
                    pageVal = 2;
                    break;
                case "en":
                    pageVal = 3;
                    break;
                default:
                    pageVal = 1;
                    break;
            }

            pageModel = new myBase().initpage(pageVal);

        }


    }
}
