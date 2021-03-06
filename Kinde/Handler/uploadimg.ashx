﻿<%@ WebHandler Language="C#" Class="upload" %>

using System;
using System.Web;
using System.IO;
public class upload : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        //文件保存目录路径
        string save_path = "/Kinde/UploadImg/" + DateTime.Now.ToString("yyyyMM") + "/";
        //文件保存目录URL
        string save_url = "/Kinde/UploadImg/" + DateTime.Now.ToString("yyyyMM") + "/";
        //最大文件大小
        int max_size = 102400 * 3;
        HttpPostedFile imgFile = HttpContext.Current.Request.Files["imgFile"];
        string fileType = imgFile.ContentType;
        int fileLength = imgFile.ContentLength;

        if (fileType == "image/bmp" || fileType == "image/gif" || fileType == "image/jpeg" || fileType == "image/pjpeg" || fileType == "image/png")
        {
            string name = imgFile.FileName;
            Random r = new Random(DateTime.Now.Millisecond);
            string randname = DateTime.Now.ToString("yyyyMhhHHmmss") + r.Next();
            FileInfo file = new FileInfo(name);
            string fileName = randname + file.Name.Substring(file.Name.IndexOf("."));// 文件名称

            string sourcepath = System.Web.HttpContext.Current.Server.MapPath(save_path + "s_" + fileName);
            string webFilePath = System.Web.HttpContext.Current.Server.MapPath(save_path + fileName);

            string createPath = webFilePath.Substring(0, webFilePath.LastIndexOf("\\"));
            if (!Directory.Exists(createPath))
            {
                Directory.CreateDirectory(createPath);
            }

           
            
                imgFile.SaveAs(webFilePath);
        

            context.Response.ContentType = "text/html";
            alert("0", save_path + fileName);
        }
        else
        {
            alert("图片格式不正确！");
        }
        if (fileLength > max_size)
            alert("上传文件大小超过限制！");


    }
    public void alert(string msg)
    {
        HttpContext.Current.Response.Write("{\"error\":1,\"message\":\"" + msg + "\"}");
        HttpContext.Current.Response.End();
    }
    public void alert(string type, string msg)
    {
        HttpContext.Current.Response.Write("{\"error\":" + type + ",\"url\":\"" + msg + "\"}");
        HttpContext.Current.Response.End();
    }
    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}