using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Linq;

public partial class _CompanyInfo : myBase
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


        light.Model.leftmenu model = new light.BLL.leftmenu().GetModel(id);

        StringBuilder sb = new StringBuilder();

        string title = string.Empty;
        string list = string.Empty;

        if (pageVal == 1)
        {
            title = model.cnname;
            description = model.c_description;
        }
        else if (pageVal == 2)
        {
            title = model.enname.Split('|')[1];
            description = model.k_description;
        }
        else
        {
            title = model.enname.Split('|')[0];
            description = model.e_description;
        }
       
        list = base.leftnav(pageVal);
      


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
