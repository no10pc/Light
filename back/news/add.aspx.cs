using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;


public partial class news_add : PageBase
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (Page.IsPostBack)
        {
            doPost();
        }
    }

    private void doPost()
    {
        light.Model.news model = new light.Model.news();
        model.addtime = DateTime.Now;
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
        light.BLL.news bll = new light.BLL.news();
        bll.Add(model);
        light.Common.WebMessageBox.ShowMessageBox("添加成功", this);
    }
}

