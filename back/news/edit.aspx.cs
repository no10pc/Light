using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;


public partial class news_edit : PageBase
{
    protected light.Model.news model = new light.Model.news();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            int nid = light.Common.DNTRequest.GetQueryInt("nid", 0);
            if (nid > 0)
            {
                model = new light.BLL.news().GetModel(nid);
                ViewState["nid"] = nid.ToString();
            }
        }
        else
        {
            doPost();
        }
    }

    private void doPost()
    {
        light.BLL.news bll = new light.BLL.news();
        model = bll.GetModel(int.Parse(ViewState["nid"].ToString()));
        model.categoryid =int.Parse(Request["categoryid"].ToString());
        model.description =Request["description"];
        if(Request["isopen"]=="on")
        {
            model.isopen =1;
        }
        else
        {
            model.isopen = 0;
        }
                if(Request["isrecommend"]=="on")
        {
            model.isrecommend =1;
        }
        else
        {
            model.isrecommend = 0;
        }
        model.title = Request["title"];
        bll.Update(model);
        Response.Redirect("edit.aspx?nid=" + ViewState["nid"].ToString());
    }
}

