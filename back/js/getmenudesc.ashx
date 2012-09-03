<%@ WebHandler Language="C#" Class="getmenudesc" %>

using System;
using System.Web;
using System.Text;
using System.Threading;
using System.Data;

public class getmenudesc : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.Buffer = true;
        context.Response.ExpiresAbsolute = DateTime.Now.AddDays(-1);
        context.Response.AddHeader("pragma", "no-cache");
        context.Response.AddHeader("cache-control", "");
        context.Response.CacheControl = "no-cache";
        context.Response.ContentType = "text/plain";

        string strMsg = "还未填写数据";
        string id = string.Empty;
        string isopen = string.Empty;

        if (context.Request["id"] != null)
        {
            id = context.Request["id"].ToString().Trim();
        }
        try
        {
            light.BLL.leftmenu bll = new light.BLL.leftmenu();
            light.Model.leftmenu model = new light.Model.leftmenu();
            model = bll.GetModel(int.Parse(id));
            if (model != null)
            {
                strMsg = model.enname;
            }
        }
        catch
        { strMsg = ""; }

        context.Response.Write(strMsg);
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}