using System;
using System.Collections.Generic;
using System.Web;

/// <summary>
///UploadHelper 的摘要说明
/// </summary>
public class  UploadHelper
{
    public UploadHelper()
    {
        //
        //TODO: 在此处添加构造函数逻辑
        //
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="control"></param>
    /// <returns>1图片格式错误，2图片大小错误</returns>
    public static string UploadImg(System.Web.UI.HtmlControls.HtmlInputFile control)
    {
        string returnReasult = "0";
        //文件保存目录路径
        string save_path = "/Kinde/UploadImg/" + DateTime.Now.ToString("yyyyMM") + "/";
        //文件保存目录URL
        string save_url = "/Kinde/UploadImg/" + DateTime.Now.ToString("yyyyMM") + "/";
        //最大文件大小
        int max_size = 102400*3;
        HttpPostedFile imgFile = control.PostedFile;
        string fileType = imgFile.ContentType;
        int fileLength = imgFile.ContentLength;

        if (fileType == "image/bmp" || fileType == "image/gif" || fileType == "image/jpeg" || fileType == "image/pjpeg" || fileType == "image/png")
        {
            string name = imgFile.FileName;
            Random r = new Random(DateTime.Now.Millisecond);
            string randname = DateTime.Now.ToString("yyyyMhhHHmmss") + r.Next();
            System.IO.FileInfo file = new System.IO.FileInfo(name);
            string fileName = randname + file.Name.Substring(file.Name.IndexOf("."));// 文件名称
            string sourcepath = System.Web.HttpContext.Current.Server.MapPath(save_path + "s_" + fileName);
            string webFilePath = System.Web.HttpContext.Current.Server.MapPath(save_path + fileName);

            string createPath = webFilePath.Substring(0, webFilePath.LastIndexOf("\\"));
            if (!System.IO.Directory.Exists(createPath))
            {
                System.IO.Directory.CreateDirectory(createPath);
            }

           
                imgFile.SaveAs(webFilePath);
          

            // homeworld.Common.Utility.GetConfigSet("domain") + 
            returnReasult =save_path + fileName;
        }
        else
        {
            returnReasult = "1"; //图片格式不正确！
        }
        if (fileLength > max_size)
        {
            returnReasult = "2";//图片不能超过100K!
        }
        return returnReasult;
    }
}
