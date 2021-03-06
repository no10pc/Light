﻿using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using light.Common;

public partial class mall_info_add : PageBase
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            int pid = light.Common.DNTRequest.GetQueryInt("pid", 0);
            if (pid > 0)
            {
                ViewState["pid"] = pid.ToString();
            }
        }
        else
        {
            doPost();
        }
    }

    private void doPost()
    {
        string cname = Request["cname"];
        light.BLL.category bll = new light.BLL.category();
        if (!bll.Exists(cname))
        {
            light.Model.category model = new light.Model.category();
            model.addtime = DateTime.Now;
            model.cname = cname;
            model.ename = light.Common.Hz2Py.Convert(cname);
            model.isopen = 1;
            model.parentid = int.Parse(ViewState["pid"].ToString());
            bll.Add(model);
            WebMessageBox.ShowMessageBox("添加成功", this);
        }
        else
        {
            WebMessageBox.ShowMessageBox("该分类名已经存在", this);
        }
    }
}
