using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

public partial class _news : myBase
{
    protected int pageVal = 1;
    protected int navid = 1;
    protected string leftString = string.Empty;
    protected PageModel pageModel = new PageModel();
    protected string description = string.Empty;
    protected string description_title = string.Empty;
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!Page.IsPostBack)
        {
            int id = light.Common.DNTRequest.GetQueryInt("id", 0);
            if (id > 0)
            {
                showinfo(id);
            }
        }



    }

    private void showinfo(int id)
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
        }


      
        StringBuilder sb = new StringBuilder();

        light.Model.news model = new light.BLL.news().GetModel(id);

        string title = "公司动态";
        string list = base.newsCategory(pageVal);
        description = model.description;


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

        leftString = sb.ToString();
    }


}
