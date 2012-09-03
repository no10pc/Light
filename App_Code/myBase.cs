using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using light.Common;
using System.Text;
using System.Data;
using System.Linq;

/// <summary>
///PageBase 的摘要说明
/// </summary>
public class myBase : PageBase
{
    public light.Model.backtools model = new light.BLL.backtools().GetModel("admin");

    protected override void OnInit(EventArgs e)
    {
        //base.OnInit(e);
        init();
    }

    private void init()
    {

    }

    public string outLanguageUrl(int type)
    {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine(@"                                    <td style=""padding-bottom: 1px; padding-top: 5px"" bgcolor=""#eaf3e0"" width=""8%"">");
        if (type == 1)
            sb.AppendLine(@"                                        <span style=""cursor: pointer""><font color=red>中文首页</font></span>");
        else
            sb.AppendLine(@"                                        <a href=""default.aspx"">中文</a>");
        sb.AppendLine(@"                                    </td>");
        sb.AppendLine(@"                                    <td style=""padding-bottom: 1px; padding-top: 5px"" bgcolor=""#eaf3e0"" width=""8%"">");
        if (type == 2)
            sb.AppendLine(@"                                        <span style=""cursor: pointer""><font color=red>KOREA</font></span>");
        else
            sb.AppendLine(@"                                        <a href=""default.aspx?lng=kr"">KOREA</a>");
        sb.AppendLine(@"                                    </td>");
        sb.AppendLine(@"                                    <td style=""padding-bottom: 1px; padding-top: 5px"" bgcolor=""#eaf3e0"" width=""8%"">");
        if (type == 3)
            sb.AppendLine(@"                                        <span style=""cursor: pointer""><font color=red>English</font></span>");
        else
            sb.AppendLine(@"                                        <a href=""default.aspx?lng=en"">English</a>");
        sb.AppendLine(@"                                    </td>");
        return sb.ToString();
    }
    public string topnav(int type)
    {
        StringBuilder myStringBuilder = new StringBuilder();
        switch (type)
        {
            case 1:
                myStringBuilder.Append(@"<table class=""Board_Tab"" width=""100%"" border=""0"" cellspacing=""0"" cellpadding=""0"">" + Environment.NewLine);
                myStringBuilder.Append(@"                                            <tr>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""default.aspx"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">网站首页</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=1"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">企业简介</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=2"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">公司动态</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=3"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">产品信息</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=4"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">资质荣誉</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                //myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                //myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                //myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=5"" target=""_self"" ");
                //myStringBuilder.Append(@"class=""h"">成功案例</a>" + Environment.NewLine);
                //myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);

                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);

                myStringBuilder.Append(@"<a target=""_self"" class=""h"" href=""http://wpa.qq.com/msgrd?v=3&uin=578528433&site=qq&menu=yes"">联系我们</a>");

                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                            </tr>" + Environment.NewLine);
                myStringBuilder.Append(@"                                        </table>");
                break;
            case 2:
                myStringBuilder.Append(@"<table class=""Board_Tab"" width=""100%"" border=""0"" cellspacing=""0"" cellpadding=""0"">" + Environment.NewLine);
                myStringBuilder.Append(@"                                            <tr>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""default.aspx"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">웹 사이트</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=1"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">회사 소개</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=2"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">기업 뉴스</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=3"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">제품 정보</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=4"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">영예로운</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                //myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                //myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                //myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=5"" target=""_self"" ");
                //myStringBuilder.Append(@"class=""h"">성공 사례</a>" + Environment.NewLine);
                //myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);

                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"<a target=""_self"" class=""h"" href=""http://wpa.qq.com/msgrd?v=3&uin=578528433&site=qq&menu=yes"">고객 문의</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                            </tr>" + Environment.NewLine);
                myStringBuilder.Append(@"                                        </table>");
                break;
            case 3:
                myStringBuilder.Append(@"<table class=""Board_Tab"" width=""100%"" border=""0"" cellspacing=""0"" cellpadding=""0"">" + Environment.NewLine);
                myStringBuilder.Append(@"                                            <tr>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""default.aspx"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">Home</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=1"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">Corporate Profile</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=2"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">Company News</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=3"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">Product Information</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=4"" target=""_self"" ");
                myStringBuilder.Append(@"class=""h"">Honors</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                //myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                //myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                //myStringBuilder.Append(@"                                                    <a href=""index.aspx?id=5"" target=""_self"" ");
                //myStringBuilder.Append(@"class=""h"">Success Stories</a>" + Environment.NewLine);
                //myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                ;
                myStringBuilder.Append(@"                                                <td align=""center"" height=""32"" bgcolor="""" ");
                myStringBuilder.Append(@"background="" "">" + Environment.NewLine);
                myStringBuilder.Append(@" <a target=""_self"" class=""h"" href=""http://wpa.qq.com/msgrd?v=3&uin=578528433&site=qq&menu=yes"">Contact Us</a>" + Environment.NewLine);
                myStringBuilder.Append(@"                                                </td>" + Environment.NewLine);
                myStringBuilder.Append(@"                                            </tr>" + Environment.NewLine);
                myStringBuilder.Append(@"                                        </table>");
                break;
        }

        return myStringBuilder.ToString();
    }
    public string leftnav(int type)
    {
        StringBuilder myStringBuilder = new StringBuilder();
        myStringBuilder.Append("<div class='syCss_2010461021968'>");
        myStringBuilder.Append("<table class='Board_Tab' width='100%' border='0' cellspacing='0' cellpadding='0'>");
        //DataTable dt = new light.BLL.leftmenu().GetList(" parentid=0 ").Tables[0];
        DataTable dt = new light.BLL.leftmenu().GetList(" 1=1 ").Tables[0];
        foreach (DataRow dr in dt.Rows)
        {
            myStringBuilder.Append("<tr>");
            myStringBuilder.Append("<td align='center' height='39'  background='/images/left.jpg'>");
            if (type == 1)
            {
                myStringBuilder.Append("<a href='CompanyInfo.aspx?id=" + dr["pkid"].ToString() + "' target='_self'>[" + dr["cname"].ToString() + "]</a>");
            }
            else if (type == 2)
            {
                myStringBuilder.Append("<a href='CompanyInfo.aspx?id=" + dr["pkid"].ToString() + "' target='_self'>[" + dr["ename"].ToString().Split('|')[1] + "]</a>");
            }
            else
            {
                myStringBuilder.Append("<a href='CompanyInfo.aspx?id=" + dr["pkid"].ToString() + "' target='_self'>[" + dr["ename"].ToString().Split('|')[0] + "]</a>");

            }

            myStringBuilder.Append("</td>");
            myStringBuilder.Append("</tr>");
        }
        myStringBuilder.Append("</table>");
        myStringBuilder.Append("</div>");
        return myStringBuilder.ToString();
    }

    public string procategoryList(int type)
    {
        StringBuilder myStringBuilder = new StringBuilder();
        myStringBuilder.Append("<div class='syCss_2010461021968'>");
        myStringBuilder.Append("<table class='Board_Tab' width='100%' border='0' cellspacing='0' cellpadding='0'>");

        DataTable dt = new light.BLL.category().GetList(" parentid=0 ").Tables[0];
        if (type == 1)
        {
            foreach (DataRow dr in dt.Rows)
            {
                myStringBuilder.Append("<tr>");
                myStringBuilder.Append("<td align='center' height='39'  background='/images/left.jpg'>");
                myStringBuilder.Append("<a href='productlist.aspx?id=" + dr["pkid"].ToString() + "' target='_self'>[" + dr["cname"].ToString() + "]</a>");
                myStringBuilder.Append("</td>");
                myStringBuilder.Append("</tr>");
            }
        }
        else if (type == 2)
        {
            foreach (DataRow dr in dt.Rows)
            {
                myStringBuilder.Append("<tr>");
                myStringBuilder.Append("<td align='center' height='39'  background='/images/left.jpg'>");
                myStringBuilder.Append("<a href='productlist.aspx?id=" + dr["pkid"].ToString() + "' target='_self'>[" + dr["ename"].ToString().Split('|')[1] + "]</a>");
                myStringBuilder.Append("</td>");
                myStringBuilder.Append("</tr>");
            }
        }
        else
        {
            foreach (DataRow dr in dt.Rows)
            {
                myStringBuilder.Append("<tr>");
                myStringBuilder.Append("<td align='center' height='39'  background='/images/left.jpg'>");
                myStringBuilder.Append("<a href='productlist.aspx?id=" + dr["pkid"].ToString() + "' target='_self'>[" + dr["ename"].ToString().Split('|')[0] + "]</a>");
                myStringBuilder.Append("</td>");
                myStringBuilder.Append("</tr>");
            }
        }
        myStringBuilder.Append("</table>");
        myStringBuilder.Append("</div>");
        return myStringBuilder.ToString();
    }

    public string address(int type)
    {
        StringBuilder myStringBuilder = new StringBuilder();
        light.Model.backtools model = new light.BLL.backtools().GetModel("admin");
        switch (type)
        {
            case 1:
                {
                    myStringBuilder.Append("地址：" + model.caddress + "<br>");
                    myStringBuilder.Append("邮编：" + model.postcode + "<br>");
                    myStringBuilder.Append("电话：" + model.phone + "<br>");
                    myStringBuilder.Append("传真：" + model.mobile + "<br>");
                    myStringBuilder.Append("网址：" + model.url + "<br>");
                    myStringBuilder.Append("邮箱：" + model.email);
                    break;
                }
            case 2:
                {
                    myStringBuilder.Append("주소：" + model.kaddress + "<br>");
                    myStringBuilder.Append("우편 번호：" + model.postcode + "<br>");
                    myStringBuilder.Append("전화：" + model.phone + "<br>");
                    myStringBuilder.Append("팩스：" + model.mobile + "<br>");
                    myStringBuilder.Append("웹사이트：" + model.url + "<br>");
                    myStringBuilder.Append("Email：" + model.email);
                    break;
                }
            case 3:
                {
                    myStringBuilder.Append("Address：" + model.eaddress + "<br>");
                    myStringBuilder.Append("Post：" + model.postcode + "<br>");
                    myStringBuilder.Append("Phone：" + model.phone + "<br>");
                    myStringBuilder.Append("Email：" + model.mobile + "<br>");
                    myStringBuilder.Append("URL：" + model.url + "<br>");
                    myStringBuilder.Append("Email：" + model.email);
                    break;
                }

            default:
                {
                    myStringBuilder.Append("地址：" + model.caddress + "<br>");
                    myStringBuilder.Append("邮编：" + model.postcode + "<br>");
                    myStringBuilder.Append("电话：" + model.phone + "<br>");
                    myStringBuilder.Append("传真：" + model.mobile + "<br>");
                    myStringBuilder.Append("网址：" + model.url + "<br>");
                    myStringBuilder.Append("邮箱：" + model.email);
                    break;
                }
        }
        return myStringBuilder.ToString();

    }

    public string copyright(int type)
    {
        StringBuilder myStringBuilder = new StringBuilder();
        light.Model.backtools model = new light.BLL.backtools().GetModel("admin");
        switch (type)
        {
            case 1:
                {
                    myStringBuilder.Append("地址：" + model.caddress + "&nbsp;");
                    myStringBuilder.Append("邮编：" + model.postcode + "<br>");
                    myStringBuilder.Append("电话：" + model.phone + "&nbsp;");
                    myStringBuilder.Append("传真：" + model.mobile + "&nbsp;");
                    myStringBuilder.Append("网址：" + model.url + "&nbsp;");
                    myStringBuilder.Append("邮箱：" + model.email);
                    break;
                }
            case 3:
                {
                    myStringBuilder.Append("Address：" + model.eaddress + "&nbsp;");
                    myStringBuilder.Append("Post：" + model.postcode + "<br>");
                    myStringBuilder.Append("Phone：" + model.phone + "&nbsp;");
                    myStringBuilder.Append("Email：" + model.mobile + "&nbsp;");
                    myStringBuilder.Append("URL：" + model.url + "&nbsp;");
                    myStringBuilder.Append("Email：" + model.email);
                    break;
                }
            case 2:
                {
                    myStringBuilder.Append("주소：" + model.kaddress + "&nbsp;");
                    myStringBuilder.Append("우편 번호：" + model.postcode + "<br>");
                    myStringBuilder.Append("전화：" + model.phone + "&nbsp;");
                    myStringBuilder.Append("팩스：" + model.mobile + "&nbsp;");
                    myStringBuilder.Append("웹사이트：" + model.url + "&nbsp;");
                    myStringBuilder.Append("Email：" + model.email);
                    break;
                }
            default:
                {
                    myStringBuilder.Append("地址：" + model.caddress + "&nbsp;");
                    myStringBuilder.Append("邮编：" + model.postcode + "<br>");
                    myStringBuilder.Append("电话：" + model.phone + "&nbsp;");
                    myStringBuilder.Append("传真：" + model.mobile + "&nbsp;");
                    myStringBuilder.Append("网址：" + model.url + "&nbsp;");
                    myStringBuilder.Append("邮箱：" + model.email);
                    break;
                }
        }
        return myStringBuilder.ToString();

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="cateid">咨询分类</param>
    /// <param name="type">语言分类</param>
    /// <returns></returns>
    public string news(int cateid, int type)
    {
        StringBuilder myStringBuilder = new StringBuilder();
        myStringBuilder.Append("<table width=\"100%\" class=\"Board_Tab\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">");
        string catestr = " categoryid=1 or categoryid=2 ";
        if (cateid == 1)
        {
            if (type == 2)
                catestr = " categoryid=3  ";
            else if (type == 3)
                catestr = "  categoryid=5 ";
            else
                catestr = " categoryid=1  ";
        }
        else
        {
            if (type == 2)
                catestr = " categoryid=4  ";
            else if (type == 3)
                catestr = " categoryid=6 ";
            else
                catestr = " categoryid=2  ";
        }
        DataTable dt = new light.BLL.news().GetList(catestr + " ").Tables[0];
        int i = 0;
        foreach (DataRow dr in dt.Rows)
        {

            myStringBuilder.Append("<tr>");
            myStringBuilder.Append("<td height=\"22\">");
            myStringBuilder.Append("<img src=\"/images/li.jpg\" width=\"12\" height=\"12\" hspace=\"6\" border=\"0\">");
            myStringBuilder.Append(" <a href=\"news.aspx?id=" + dr["id"].ToString() + "\" >" + Utility.CutString(dr["title"].ToString(), 0, 22) + "</a>");
            myStringBuilder.Append("</td>");
            myStringBuilder.Append("<td>");
            myStringBuilder.Append("</td>");
            myStringBuilder.Append("</tr>");
            i++;
            if (i == 5)
                break;

        }
        myStringBuilder.Append("</table>");
        return myStringBuilder.ToString();
    }
    public string getproducts(int type)
    {
        StringBuilder myStringBuilder = new StringBuilder();
        DataTable dt = new light.BLL.product().GetList(" 1=1 ").Tables[0];
        foreach (DataRow dr in dt.Rows)
        {

            if (type == 1)
            {
                myStringBuilder.AppendLine("             <td align='center' bgcolor='' background='#' >");
                myStringBuilder.AppendLine("                <div>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?lng=cn&id=" + dr["pkid"].ToString() + "\" >");
                myStringBuilder.AppendLine("                        <img src=\"" + dr["plogo"].ToString() + "\" width=\"100\" height=\"100\" border=\"0\">");
                myStringBuilder.AppendLine("                    </a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("                <div style='line-height: 200%'>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?lng=cn&id=" + dr["pkid"].ToString() + "\" >" + dr["pname"].ToString() + "</a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("             </td>");
            }
            else if (type == 2)
            {
                myStringBuilder.AppendLine("             <td align='center' bgcolor='' background='#' >");
                myStringBuilder.AppendLine("                <div>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?lng=kr&id=" + dr["pkid"].ToString() + "\" >");
                myStringBuilder.AppendLine("                        <img src=\"" + dr["plogo"].ToString() + "\" width=\"100\" height=\"100\" border=\"0\">");
                myStringBuilder.AppendLine("                    </a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("                <div style='line-height: 200%'>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?lng=kr&id=" + dr["pkid"].ToString() + "\" >" + dr["krpname"].ToString() + "</a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("             </td>");
            }
            else
            {
                myStringBuilder.AppendLine("             <td align='center' bgcolor='' background='#' >");
                myStringBuilder.AppendLine("                <div>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?lng=en&id=" + dr["pkid"].ToString() + "\" >");
                myStringBuilder.AppendLine("                        <img src=\"" + dr["plogo"].ToString() + "\" width=\"100\" height=\"100\" border=\"0\">");
                myStringBuilder.AppendLine("                    </a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("                <div style='line-height: 200%'>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?lng=en&id=" + dr["pkid"].ToString() + "\" >" + dr["enpname"].ToString() + "</a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("             </td>");
            }
        }
        return myStringBuilder.ToString();
    }



    public PageModel initpage(int type)
    {
        PageModel model = new PageModel();
        light.Model.backtools back = new light.BLL.backtools().GetModel("admin");
        switch (type)
        {
            case 1:
                model._企业名称 = back.csitename;
                model._产品分类 = "产品分类";
                model._公司简介 = "公司简介";
                model._联系我们 = "联系我们";
                model._企业新闻 = "企业新闻";
                model._新闻关注 = "新闻关注";
                model._产品展示 = "产品展示";
                model._企业介绍 = "企业介绍";
                model._新闻分类 = "新闻分类";
                model._资质荣誉 = "资质荣誉";
                model._详细信息 = "详细信息";
                break;
            case 2:

                model._企业名称 = back.ksitename;
                model._产品分类 = "제품 범주";
                model._公司简介 = "회사 소개";
                model._联系我们 = "고객 문의";
                model._企业新闻 = "기업 뉴스";
                model._新闻关注 = "뉴스보기";
                model._产品展示 = "제품 정보";
                model._企业介绍 = "회사 소개";
                model._新闻分类 = "카테고리";
                model._资质荣誉 = "영예로운";
                model._详细信息 = "상세한";
                break;
            case 3:
                model._企业名称 = back.csitename;
                model._产品分类 = "Product Category";
                model._公司简介 = "Company Profile";
                model._联系我们 = "Contact Us";
                model._企业新闻 = "Company News";
                model._新闻关注 = "News Watch";
                model._产品展示 = "Products";
                model._企业介绍 = "Introduction";
                model._新闻分类 = "News Category";
                model._资质荣誉 = "Honors";
                model._详细信息 = "Description";
                break;

        }
        return model;
    }
    public string getCompanyInfi(int type)
    {
        string result = string.Empty;
        light.Model.backtools model = new light.BLL.backtools().GetModel("admin");
        if (type == 2)
            result = model.ksiteinfo;
        else if (type == 3)
            result = model.esiteinfo;
        else
            result = model.csiteinfo;
        return result;
    }



    public string newsCategory(int type)
    {

        StringBuilder myStringBuilder = new StringBuilder();
        myStringBuilder.Append("<div class='syCss_2010461021968'>");
        myStringBuilder.Append("<table class='Board_Tab' width='100%' border='0' cellspacing='0' cellpadding='0'>");
        string catestr = " pkid=1 or pkid =2 ";
        if (type == 1)
            catestr = " pkid=1 or pkid = 2  ";
        else if (type == 2)
            catestr = " pkid=3 or pkid = 4  ";
        else
            catestr = " pkid=5 or pkid = 6  ";


        DataTable dt = new light.BLL.newscategory().GetList(catestr + " ").Tables[0];
        foreach (DataRow dr in dt.Rows)
        {
            myStringBuilder.Append("<tr>");
            myStringBuilder.Append("<td align='center' height='39'  background='/images/left.jpg'>");
            if (type == 1)
            {
                myStringBuilder.Append("<a href='newslist.aspx?id=" + dr["pkid"].ToString() + "' target='_self'>[" + dr["ename"].ToString() + "]</a>");
            }
            else if (type == 2)
            {
                myStringBuilder.Append("<a href='newslist.aspx?id=" + dr["pkid"].ToString() + "' target='_self'>[" + dr["ename"].ToString() + "]</a>");

            }
            else
            {
                myStringBuilder.Append("<a href='newslist.aspx?id=" + dr["pkid"].ToString() + "' target='_self'>[" + dr["ename"].ToString() + "]</a>");

            }

            myStringBuilder.Append("</td>");
            myStringBuilder.Append("</tr>");
        }
        myStringBuilder.Append("</table>");
        myStringBuilder.Append("</div>");
        return myStringBuilder.ToString();
    }
    /// <summary>
    /// 产品页中的产品列表
    /// </summary>
    /// <param name="pageVal"></param>
    /// <returns></returns>
    public string prodouctList(int type)
    {

        StringBuilder myStringBuilder = new StringBuilder();
        DataTable dt = new light.BLL.product().GetList(" 1=1 ").Tables[0];
        myStringBuilder.AppendLine(" <table width=\"100%\" class=\"Board_Tab\" border=\"0\" cellspacing=\"5\" cellpadding=\"0\">");
        int td = 1;
        int closespan = dt.Rows.Count % 4;
        myStringBuilder.AppendLine("           <tr>");
        foreach (DataRow dr in dt.Rows)
        {


            if (type == 1)
            {
                myStringBuilder.AppendLine("             <td align='center' bgcolor='' background='#' >");
                myStringBuilder.AppendLine("                <div>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >");
                myStringBuilder.AppendLine("                        <img src=\"" + dr["plogo"].ToString() + "\" width=\"100\" height=\"100\" border=\"0\">");
                myStringBuilder.AppendLine("                    </a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("                <div style='line-height: 200%'>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >" + dr["pname"].ToString() + "</a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("             </td>");
            }
            else if (type == 2)
            {
                myStringBuilder.AppendLine("             <td align='center' bgcolor='' background='#' >");
                myStringBuilder.AppendLine("                <div>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >");
                myStringBuilder.AppendLine("                        <img src=\"" + dr["plogo"].ToString() + "\" width=\"100\" height=\"100\" border=\"0\">");
                myStringBuilder.AppendLine("                    </a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("                <div style='line-height: 200%'>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >" + dr["krpname"].ToString() + "</a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("             </td>");
            }
            else
            {
                myStringBuilder.AppendLine("             <td align='center' bgcolor='' background='#' >");
                myStringBuilder.AppendLine("                <div>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >");
                myStringBuilder.AppendLine("                        <img src=\"" + dr["plogo"].ToString() + "\" width=\"100\" height=\"100\" border=\"0\">");
                myStringBuilder.AppendLine("                    </a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("                <div style='line-height: 200%'>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >" + dr["enpname"].ToString() + "</a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("             </td>");
            }

            if ((td % 4) == 0)
            {
                myStringBuilder.AppendLine("           </tr>");

                if (td != dt.Rows.Count)

                    myStringBuilder.AppendLine("           <tr>");

            }
            td++;

        }

        myStringBuilder.AppendLine("</table>");
        return myStringBuilder.ToString();
    }

    public string prodouctList(int type, int categoryid)
    {

        StringBuilder myStringBuilder = new StringBuilder();
        DataTable dt = new light.BLL.product().GetList(" pcateid= " + categoryid.ToString()).Tables[0];
        myStringBuilder.AppendLine(" <table width=\"100%\" class=\"Board_Tab\" border=\"0\" cellspacing=\"5\" cellpadding=\"0\">");
        int td = 1;
        int closespan = dt.Rows.Count % 4;
        myStringBuilder.AppendLine("           <tr>");
        foreach (DataRow dr in dt.Rows)
        {


            if (type == 1)
            {
                myStringBuilder.AppendLine("             <td align='center' bgcolor='' background='#' >");
                myStringBuilder.AppendLine("                <div>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >");
                myStringBuilder.AppendLine("                        <img src=\"" + dr["plogo"].ToString() + "\" width=\"100\" height=\"100\" border=\"0\">");
                myStringBuilder.AppendLine("                    </a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("                <div style='line-height: 200%'>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >" + dr["pname"].ToString() + "</a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("             </td>");
            }
            else if (type == 2)
            {
                myStringBuilder.AppendLine("             <td align='center' bgcolor='' background='#' >");
                myStringBuilder.AppendLine("                <div>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >");
                myStringBuilder.AppendLine("                        <img src=\"" + dr["plogo"].ToString() + "\" width=\"100\" height=\"100\" border=\"0\">");
                myStringBuilder.AppendLine("                    </a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("                <div style='line-height: 200%'>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >" + dr["krpname"].ToString() + "</a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("             </td>");
            }
            else
            {
                myStringBuilder.AppendLine("             <td align='center' bgcolor='' background='#' >");
                myStringBuilder.AppendLine("                <div>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >");
                myStringBuilder.AppendLine("                        <img src=\"" + dr["plogo"].ToString() + "\" width=\"100\" height=\"100\" border=\"0\">");
                myStringBuilder.AppendLine("                    </a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("                <div style='line-height: 200%'>");
                myStringBuilder.AppendLine("                    <a href=\"product.aspx?id=" + dr["pkid"].ToString() + "\" >" + dr["enpname"].ToString() + "</a>");
                myStringBuilder.AppendLine("                </div>");
                myStringBuilder.AppendLine("             </td>");
            }

            if ((td % 4) == 0)
            {
                myStringBuilder.AppendLine("           </tr>");

                if (td != dt.Rows.Count)

                    myStringBuilder.AppendLine("           <tr>");

            }
            td++;

        }

        myStringBuilder.AppendLine("</table>");
        return myStringBuilder.ToString();
    }

    public string leftInfo(int pageVal)
    {
        return "info";
    }

    public string newsAllList(int pageVal)
    {
        StringBuilder sb = new StringBuilder();

        string strwhere = " categoryid=1 or categoryid=2 ";
        if (pageVal == 2)
        {
            strwhere = " categoryid=3 or categoryid=4 ";
        }
        else if (pageVal == 3)
        {
            strwhere = " categoryid=5 or categoryid=6 ";
        }

        DataTable dt = new light.BLL.news().GetList(strwhere).Tables[0];

        sb.AppendLine(@"<table width=""100%"" class=""Board_Tab"" border=""0"" cellspacing=""0"" cellpadding=""0"">");
        foreach (DataRow dr in dt.Rows)
        {
            sb.AppendLine(@"<tr>");
            sb.AppendLine(@"  <td height=""25"" BgColor="""" background=""#""><img src=""queryli.gif"" width=""7"" height=""7"" hspace=""6"">");
            sb.AppendLine(@"     <a href='news.aspx?id=" + dr["id"].ToString() + "' target='_blank'>" + dr["title"].ToString() + "</a></td>");
            sb.AppendLine(@"  <td BgColor="""" background=""#"">" + Convert.ToDateTime(dr["addtime"]).ToShortDateString() + "</td>");
            sb.AppendLine(@"</tr>");
        }
        sb.AppendLine(@"</table>");

        return sb.ToString();
    }

    public string newsCategoryById(int id)
    {
        StringBuilder myStringBuilder = new StringBuilder();
        
        myStringBuilder.AppendLine("<table width='100%' class='Board_Tab' border='0' cellspacing='0' cellpadding='0'>");



        DataTable dt = new light.BLL.news().GetList(" categoryid= " + id).Tables[0];
        foreach (DataRow dr in dt.Rows)
        {
            myStringBuilder.AppendLine("<tr>");
            myStringBuilder.AppendLine(@"<td height=""25"" BgColor="""" background=""#""><img src=""queryli.gif"" width=""7"" height=""7"" hspace=""6"">");
            myStringBuilder.AppendLine(@"<a href='news.aspx?id="+dr["id"].ToString()+"' target='_self'>"+dr["title"].ToString()+"</a></td>");
            myStringBuilder.AppendLine(@"<td BgColor="""" background=""#"">"+dr["addtime"].ToString()+"</td>");

            myStringBuilder.AppendLine("</tr>");
        }
        myStringBuilder.AppendLine("</table>");
       
        return myStringBuilder.ToString();
    }
}
