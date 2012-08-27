using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

public partial class _index : myBase
{
    protected int pageVal = 1;
    protected int navid = 1;
    protected string leftString = string.Empty;
    protected PageModel pageModel = new PageModel();
    protected string description = string.Empty;
    protected string description_title = string.Empty;
    protected void Page_Load(object sender, EventArgs e)
    {
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

        navid = light.Common.DNTRequest.GetQueryInt("id", 0);
        if (navid > 0)
        {
            leftString = getLeftString(navid);
        }






    }

    private string getLeftString(int navid)
    {
        StringBuilder sb = new StringBuilder();

        string title = string.Empty;
        string list = string.Empty;
        if (navid == 1)
        {
            title = pageModel._企业介绍;
            list = base.leftnav(pageVal);
            description = base.getCompanyInfi(pageVal);
        }
        else if (navid == 2)
        {
            title = pageModel._新闻分类;
            list = base.newsCategory(pageVal);
        }
        else if (navid == 3)
        {
            title = pageModel._产品分类;
            list = base.procategoryList(pageVal);
        }
        else if (navid == 4)
        {
            title = pageModel._企业介绍;
            list = base.leftnav(pageVal);
        }
        else if (navid == 5)
        {
            title = pageModel._企业介绍;
            list = base.leftnav(pageVal);
        }

        sb.AppendLine(@" <table style=""z-index: 100"" border=""0"" cellspacing=""0"" cellpadding=""0"" width=""100%"">");
        sb.AppendLine(@"                            <tbody>");

        sb.AppendLine(@"                                <tr>");
        sb.AppendLine(@"                                    <td style=""padding-left: 45px; color: #ffffff; font-size: 14px; font-weight: bold""");

        sb.AppendLine(@"                                        height=""39"" background=""/images/title.jpg"">" + title);
        sb.AppendLine(@"                                    </td>");
        sb.AppendLine(@"                                </tr>");
        sb.AppendLine(@"                                <tr>");
        sb.AppendLine(@"                                    <td style=""padding-bottom: 2px; padding-left: 5px; padding-right: 5px; padding-top: 2px""");
        sb.AppendLine(@"                                        valign=""top"">");
        sb.AppendLine(@"                                        " + list);
        sb.AppendLine(@"                                    </td>");
        sb.AppendLine(@"                                </tr>");
        sb.AppendLine(@"                            </tbody>");
        sb.AppendLine(@"                        </table>");



        return sb.ToString();
    }
}
