using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class mall_info_mall_prolist : PageBase
{
    protected light.Model.backtools model = new light.Model.backtools();
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!Page.IsPostBack)
        {
                showinfo();
        }
        else
        {
            doPost();
        }
    }

    private void showinfo()
    {
        light.BLL.backtools bll = new light.BLL.backtools();
        model = bll.GetModel(UserState.UserName);
    }

    private void doPost()
    {
        light.BLL.backtools bll = new light.BLL.backtools();
        model = bll.GetModel(UserState.UserName);
        int typeid = int.Parse(Request["typeid"].ToString());
        switch (typeid)
        {
            case 1:
                {
                    model.csitename = Request["csitename"];
                    model.caddress = Request["caddress"];
                    model.ccopyright = Request["ccopyright"];
                    model.csiteinfo = Request["csiteinfo"];
                    break;
                }
            case 2:
                {
                    model.esitename = Request["esitename"];
                    model.eaddress = Request["eaddress"];
                    model.ecopyright = Request["ecopyright"];
                    model.esiteinfo = Request["esiteinfo"];
                    break;
                }
            case 3:
                {
                    model.ksitename = Request["ksitename"];
                    model.kaddress = Request["kaddress"];
                    model.kcopyright = Request["kcopyright"];
                    model.ksiteinfo = Request["ksiteinfo"];
                    break;
                }
        }
        model.phone = Request["phone"];
        model.mobile = Request["mobile"];
        model.fax = Request["fax"];
        model.beian = Request["beian"];
        model.postcode = Request["postcode"];
        model.email = Request["email"];
        model.url = Request["url"];
        bll.Update(model);
        Response.Redirect("main.aspx");
    }
}
