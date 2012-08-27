<%@ WebHandler Language="C#" Class="getcategory" %>

using System;
using System.Web;
using System.Text;
using System.Threading;
using System.Data;

public class getcategory : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.Buffer = true;
        context.Response.ExpiresAbsolute = DateTime.Now.AddDays(-1);
        context.Response.AddHeader("pragma", "no-cache");
        context.Response.AddHeader("cache-control", "");
        context.Response.CacheControl = "no-cache";
        context.Response.ContentType = "text/plain";

        string strMsg = string.Empty;
        StringBuilder sb = new StringBuilder();
        string id = string.Empty;
        string isopen = string.Empty;

        if (context.Request["id"] != null)
        {
            id = context.Request["id"].ToString().Trim();
        }
        StringBuilder myStringBuilder = new StringBuilder();
        try
        {
            if (id != "0")
            {
                light.BLL.category bll = new light.BLL.category();
                DataTable dt = bll.GetList(" parentid =" + id).Tables[0];
                int i = 0;
                foreach (DataRow dr in dt.Rows)
                {
                    if (i == 0)
                    {
                        sb.Append("<option value='0'>请选择</option>");
                    }
                    sb.Append("<option value='" + dr["pkid"].ToString() + "'>" + dr["cname"].ToString() + "</option>");
                    i++;
                }
            }
            else
            {
                sb.Append("<option value='0'>请选择</option>");
            }
            strMsg = sb.ToString();
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