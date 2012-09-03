using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using System.Text;
using light.Common;
using System.Data;
using System.Data.SqlClient;
using Maticsoft.DBUtility;
using System.Collections;
using System.Linq;


/// <summary>
///MallWebService 的摘要说明
/// </summary>
[WebService(Namespace = "uCenter")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
//若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消对下行的注释。 

[System.ComponentModel.ToolboxItem(false)]
public class MallWebService : System.Web.Services.WebService
{

    #region 导航菜单
    /// <summary>
    /// 左SUB导航
    /// </summary>
    /// <returns></returns>
    [WebMethod]
    public string SubMenu()
    {
        StringBuilder sb = new StringBuilder();
        sb.Append("<h2>网站管理中心</h2>");
        sb.Append("<div class=\"left_box1\">");
        sb.Append("<h3>产品管理</h3>");
        sb.Append("<ul class=\"margin_b6\">");
       
        sb.Append("<li><a href=\"/back/product/showlist.aspx\">网站产品列表</a></li>");
        //sb.Append("<li><a href=\"/back/product/dellist.aspx\">被删除的产品</a></li>");
        sb.Append("<li><a href=\"/back/product/add.aspx\">添加网站产品</a></li>");
        sb.Append("<li><a href=\"/back/category/showlist.aspx\">产品分类管理</a></li>");
        sb.Append("</ul>");
        sb.Append("<h3>新闻管理</h3>");
        sb.Append("<ul class=\"margin_b6\">");
        sb.Append("<li><a href=\"/back/news/showlist.aspx\">网站新闻列表</a></li>");
        //sb.Append("<li><a href=\"/back/news/dellist.aspx\">被删除的新闻</a></li>");
        sb.Append("<li><a href=\"/back/news/add.aspx\">添加网站新闻</a></li>");
        sb.Append("</ul>");
        sb.Append("<h3>栏目管理</h3>");
        sb.Append("<ul class=\"margin_b6\">");

        DataTable dt = new light.BLL.leftmenu().GetList(" 1=1 ").Tables[0];
        foreach (DataRow dr in dt.Rows)
        {
            sb.Append("<li><a href=\"/back/leftmenu/menuedit.aspx?pid=" + dr["pkid"].ToString() + "\">【" + dr["cname"].ToString() + "】</a></li>");
        }
        sb.Append("</ul>");
        sb.Append("<h3>站点管理</h3>");
        sb.Append("<ul class=\"margin_b6\">");
        sb.Append("<li><a href=\"/back/main.aspx\">网站基本信息</a></li>");
        sb.Append("<li><a href=\"/back/changepass.aspx\">修改密码</a></li>");
        sb.Append("<li><a href=\"/logout.aspx\">安全退出系统</a></li>");
        sb.Append("</ul>");
        sb.Append("</div>");
        return sb.ToString();
    }

    /// <summary>
    /// 左导航
    /// </summary>
    /// <returns></returns>
    [WebMethod]
    public string MainMenu()
    {
        StringBuilder sb = new StringBuilder();
        sb.Append("<h2>网站管理中心</h2>");
        sb.Append("<div class=\"left_box1\">");
        sb.Append("<ul class=\"margin_b6\">");
        sb.Append("<li><a href=\"mall_info.aspx\">品牌网店管理</a></li>");
        sb.Append("<li><a href=\"mall_create.aspx\">创建品牌网店</a></li>");
        sb.Append("<li><a href=\"mall_baseInfo.aspx\">企业信息管理</a></li>");
        sb.Append("<li><a href=\"user_changepwd.aspx\">修改密码</a></li>");
        sb.Append("<li><a href=\"/logout.aspx\">安全退出</a></li>");
        sb.Append("</ul>");
        sb.Append("<h3>帮助中心</h3>");
        sb.Append("<ul class=\"margin_b6\">");
        sb.Append("<li><a href=\"help_create.aspx\">如何创建网店</a></li>");
        sb.Append("<li><a href=\"help_mulistore.aspx\">多个店铺如何管理</a></li>");
        sb.Append("</ul>");
        sb.Append("</div>");
        return sb.ToString();
    }
    #endregion

    #region 导航菜单
    /// <summary>
    /// 左导航
    /// </summary>
    /// <returns></returns>
    [WebMethod]
    public string LeftMenu()
    {
        StringBuilder sb = new StringBuilder();
        sb.Append("<h2>我的网众</h2>");
        sb.Append("<div class=\"left_box1\">");
        sb.Append("<h3>管理中心</h3>");
        sb.Append("<ul class=\"margin_b6\">");
        sb.Append("<li><a href=\"user_home.aspx\">会员首页</a></li>");
        sb.Append("<li><a href=\"user_fov.aspx\">我的收藏</a></li>");
        sb.Append("<li><a href=\"user_mess.aspx\">论坛短信</a></li>");
        sb.Append("<li><a href=\"user_order.aspx\">查看订单</a></li>");
        sb.Append("<li><a href=\"user_note.aspx\">店铺留言</a></li>");
        //sb.Append("<li><a href=\"user_mytg.aspx\">我的团购会</a></li>");
        sb.Append("</ul>");
        sb.Append("<h3>网众卡中心</h3>");
        sb.Append("<ul class=\"margin_b6\">");
        sb.Append("<li><a href=\"http://vip.wzcbd.com/vipapply.aspx\" target='_blank'>申请网众卡</a></li>");
        sb.Append("<li><a href=\"http://vip.wzcbd.com/vipbind.aspx\" target='_blank'>激活网众卡</a></li>");
        sb.Append("</ul>");
        sb.Append("<h3>客户服务</h3>");
        sb.Append("<ul class=\"margin_b6\">");
        sb.Append("<li><a href=\"http://www.wzcbd.com/help/01/help_02.aspx\" target='_blank'>帮助</a></li>");
        sb.Append("<li><a href=\"http://bbs.wzcbd.com/showforum-140.aspx\" target='_blank'>投诉/举报</a></li>");
        sb.Append("</ul>");
        sb.Append("<h3>安全设置</h3>");
        sb.Append("<ul class=\"margin_b6\">");
        sb.Append("<li><a href=\"user_userinfo.aspx\">修改个人信息</a></li>");
        sb.Append("<li><a href=\"user_changepwd.aspx\">修改密码</a></li>");
        sb.Append("<li><a href=\"/logout.aspx\">退出登录</a></li>");
        sb.Append("</ul>");
        //sb.Append("<h3>帮助中心</h3>");
        //sb.Append("<ul class=\"margin_b6\">");
        //sb.Append("<li><a href=\"user_home.aspx\">会员首页</a></li>");
        //sb.Append("<li><a href=\"user_fov.aspx\">我的收藏</a></li>");
        //sb.Append("<li><a href=\"user_mess.aspx\">论坛短信</a></li>");
        //sb.Append("<li><a href=\"user_order.aspx\">查看订单</a></li>");
        //sb.Append("<li><a href=\"user_note.aspx\">店铺留言</a></li>");
        //sb.Append("<li><a href=\"user_mytg.aspx\">我的团购会</a></li>");
        //sb.Append("</ul>");
        //sb.Append("<h3>网众卡中心</h3>");
        //sb.Append("<ul class=\"margin_b6\">");
        //sb.Append("<li><a href=\"http://vip.wzcbd.com/vipapply.aspx\" target='_blank'>申请网众卡</a></li>");
        //sb.Append("<li><a href=\"http://vip.wzcbd.com/vipbind.aspx\" target='_blank'>激活网众卡</a></li>");
        //sb.Append("</ul>");
        //sb.Append("<h3>客户服务</h3>");
        //sb.Append("<ul class=\"margin_b6\">");
        //sb.Append("<li><a href=\"http://bbs.wzcbd.com/showforum-140.aspx\">我的建议</a></li>");
        //sb.Append("<li><a href=\"http://www.wzcbd.com/help/01/help_02.aspx\">帮助</a></li>");
        //sb.Append("<li><a href=\"http://bbs.wzcbd.com/showforum-140.aspx\">投诉/举报</a></li>");
        //sb.Append("</ul>");
        //sb.Append("<h3>安全设置</h3>");
        //sb.Append("<ul class=\"margin_b6\">");
        //sb.Append("<li><a href=\"user_userinfo.aspx\">修改个人信息</a></li>");
        //sb.Append("<li><a href=\"user_changepwd.aspx\">修改密码</a></li>");
        //sb.Append("<li><a href=\"/logout.aspx\">退出登录</a></li>");
        //sb.Append("</ul>");
        sb.Append("</div>");
        return sb.ToString();
    }
    /// <summary>
    /// 通用头
    /// </summary>
    /// <returns></returns>
    [WebMethod]
    public string SiteHead()
    {
        string login = string.Empty;
        if (1 > 0)
        {
            login = "您好，！欢迎您来到管理中心！<a href='/logout.aspx'>[退出]</a>";
        }
        StringBuilder myStringBuilder = new StringBuilder();
        myStringBuilder.AppendFormat(@"<div class=""Header"">");
        myStringBuilder.AppendFormat(@"    <div id=""Logo"">");
        myStringBuilder.AppendFormat(@"        <a href=""/"">");
        myStringBuilder.AppendFormat(@"            <img src=""/images/20073123552820.gif"" width=""167"" height=""46"" /></a></div>");
        myStringBuilder.AppendFormat(@"");
        myStringBuilder.AppendFormat(@"    <div class=""head_box1"">");
        myStringBuilder.AppendFormat(@"        <div id=""Tip"">" + login + "</div>");
        myStringBuilder.AppendFormat(@"");
        //myStringBuilder.AppendFormat(@"        <div id=""MiniToolBar"">");
        //myStringBuilder.AppendFormat(@"            <ul>");
        //myStringBuilder.AppendFormat(@"                <li class=""hsub"">");
        //myStringBuilder.AppendFormat(@"                    <dl id=""My360buy"">");
        //myStringBuilder.AppendFormat(@"                        <dt><a href=""http://jd2008.360buy.com/user_home.aspx"">我的网众</a><dt><dd><a ");
        //myStringBuilder.AppendFormat(@"href=""http://jd2008.360buy.com/user_order.aspx"">订单中心</a></dd><dd><a");
        //myStringBuilder.AppendFormat(@"                            ");
        //myStringBuilder.AppendFormat(@"href=""http://jd2008.360buy.com/user_fov.aspx"">收&nbsp;藏&nbsp;夹</a></dd><dd><a ");
        //myStringBuilder.AppendFormat(@"href=""#"">我的评价</a></dd><dd><a");
        //myStringBuilder.AppendFormat(@"                                ");
        //myStringBuilder.AppendFormat(@"href=""http://jd2008.360buy.com/user_dzgl.aspx"">收货地址</a></dd><dd><a ");
        //myStringBuilder.AppendFormat(@"href=""http://jd2008.360buy.com/user_userinfo.aspx"">个人资料</a></dd></dl>");
        //myStringBuilder.AppendFormat(@"                </li>");
        //myStringBuilder.AppendFormat(@"                <li class=""line"">|</li><li class=""hsub"">");
        //myStringBuilder.AppendFormat(@"                    <dl id=""ServiceCenter"">");
        //myStringBuilder.AppendFormat(@"                        <dt><a href=""#"">客服中心</a><dt><dd><a href=""#"">售前咨询</a></dd><dd><a ");
        //myStringBuilder.AppendFormat(@"href=""#"">返修中心</a></dd><dd><a");
        //myStringBuilder.AppendFormat(@"                            href=""#"">投诉中心</a></dd><dd><a href=""#"">我的建议</a></dd></dl>");
        //myStringBuilder.AppendFormat(@"                </li>");
        //myStringBuilder.AppendFormat(@"                <li class=""line"">|</li><li><a href=""#"">帮助中心</a></li></ul>");
        //myStringBuilder.AppendFormat(@"        </div>");
        //myStringBuilder.AppendFormat(@" ");
        myStringBuilder.AppendFormat(@"        <div class=""clear"">");
        myStringBuilder.AppendFormat(@"        </div>");
        myStringBuilder.AppendFormat(@"<ul id=""Nav"" style='backgournd:null;' >");
        myStringBuilder.AppendFormat(@"<li class=""curr""><span class=""Nav_first""><a href=""/default.aspx"">网站首页</a></span></li>");
        myStringBuilder.AppendFormat(@"<li><span><a href=""/default.aspx?lng=en"">英文首页</a></span></li>");
        myStringBuilder.AppendFormat(@"<li><span><a href=""/default.aspx?lng=kr"">韩文首页</a></span></li>");
        myStringBuilder.AppendFormat(@"</ul></div>");
        myStringBuilder.AppendFormat(@"    <div class=""clear"">");
        myStringBuilder.AppendFormat(@"    </div>");
        myStringBuilder.AppendFormat(@"    <div class=""head_box2"" style='height:2px;' >");
        //myStringBuilder.AppendFormat(@"        <div class=""head_box2_left"">");
        //myStringBuilder.AppendFormat(@"        </div>");
        //myStringBuilder.AppendFormat(@"        <div class=""head_box2_right"">");
        //myStringBuilder.AppendFormat(@"        </div>");
        //myStringBuilder.AppendFormat(@"        <div id=""temp"">");
        myStringBuilder.AppendFormat(@"     </div>");
        //myStringBuilder.AppendFormat(@"        <ul id=""Search"">");
        //myStringBuilder.AppendFormat(@"            <li><strong>商品搜索</strong></li><li>");
        //myStringBuilder.AppendFormat(@"                <input type=""text"" class=""S_input1"" /></li><li class=""S_go""><a ");
        //myStringBuilder.AppendFormat(@"href=""psearch.html"">");
        //myStringBuilder.AppendFormat(@"                    <img src=""images/search_submit.gif"" width=""42"" height=""42"" /></a></li><li ");
        //myStringBuilder.AppendFormat(@"class=""S_adv"">");
        //myStringBuilder.AppendFormat(@"                        <a href=""advancedsearch.html"">高级搜索</a></li></ul>");
        //myStringBuilder.AppendFormat(@"        <ul id=""Cart"">");
        //myStringBuilder.AppendFormat(@"            <li class=""C_num"">");
        //myStringBuilder.AppendFormat(@"                <div id=""CartSwitch"">");
        //myStringBuilder.AppendFormat(@"                    <img src=""images/head3_18.gif"" width=""14"" height=""15"" ");
        //myStringBuilder.AppendFormat(@"/>购物车<strong>300</strong>件商品</div>");
        //myStringBuilder.AppendFormat(@"            </li>");
        //myStringBuilder.AppendFormat(@"            <li class=""C_fov""><a href=""#"">我的收藏夹</a></li></ul>");
        myStringBuilder.AppendFormat(@"    </div>");

        return myStringBuilder.ToString();
    }
    /// <summary>
    /// 通用脚
    /// </summary>
    /// <returns></returns>
    [WebMethod]
    public string SiteFoot()
    {
        StringBuilder myStringBuilder = new StringBuilder();
        //myStringBuilder.AppendFormat(@" <div class='clear' style='height:5px;'></div><div id=""a_d""><script type=""text/javascript"" src=""/user_info/AD.aspx""></script></div>");
        myStringBuilder.AppendFormat(@"<div class=""Help"">");
        myStringBuilder.AppendFormat(@"<dl>");
        myStringBuilder.AppendFormat(@"<dt class=""Help_b1"">网站功能:</dt><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://shop.wzcbd.com/about/index.htm"">关于网众</a></dd><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/01/help_02.aspx"">网众商城</a></dd><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/01/help_03.aspx"">网众论坛</a></dd><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/01/help_04.aspx"">家居大学堂</a></dd><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/02/help_01.aspx"">交易条款</a></dd>");
        myStringBuilder.AppendFormat(@"</dl>");
        myStringBuilder.AppendFormat(@"<dl>");
        myStringBuilder.AppendFormat(@"<dt class=""Help_b2"">订购指南:</dt><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/02/help_02.aspx"">订购流程</a></dd><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/02/help_03.aspx"">支付/配送/售后</a></dd>");
        myStringBuilder.AppendFormat(@"</dl>");
        myStringBuilder.AppendFormat(@"<dl>");
        myStringBuilder.AppendFormat(@"<dt class=""Help_b3"">团购促销:</dt><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/03/help_01.aspx"">团购会入门</a></dd><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/03/help_02.aspx"">团购会必读</a></dd><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/03/help_03.aspx"">团购会热点话题</a></dd><dd><a ");
        myStringBuilder.AppendFormat(@"href=""http://www.wzcbd.com/help/03/help_04.aspx"">团购会说明</a></dd>");
        myStringBuilder.AppendFormat(@"</dl>");
        myStringBuilder.AppendFormat(@"<dl>");
        myStringBuilder.AppendFormat(@"<dt class=""Help_b4"">特色服务:</dt>");
        myStringBuilder.AppendFormat(@"<dd><a href=""http://vip.wzcbd.com/"">网众卡</a></dd>");
        myStringBuilder.AppendFormat(@"<dd><a href=""http://www.wzcbd.com/help/04/help_03.aspx"">电子优惠券</a></dd>");
        myStringBuilder.AppendFormat(@"<dd><a href=""http://www.wzcbd.com/help/04/help_03.aspx"">网众活动</a></dd>");
        myStringBuilder.AppendFormat(@"</dl>");
        myStringBuilder.AppendFormat(@"<dl>");
        myStringBuilder.AppendFormat(@"<dt class=""Help_b4"">商家服务:</dt>");
        myStringBuilder.AppendFormat(@"<dd><a href=""http://shop.wzcbd.com/member/register.aspx"">商家入驻</a></dd>");
        myStringBuilder.AppendFormat(@"<dd><a href=""http://www.wzcbd.com/help/05/help_01.aspx"">如何注册申请</a></dd>");
        myStringBuilder.AppendFormat(@"<dd><a href=""http://www.wzcbd.com/help/05/help_04.aspx"">如何创建网店</a></dd>");
        myStringBuilder.AppendFormat(@"</dl>");
        myStringBuilder.AppendFormat(@"</div><br/>");
        myStringBuilder.AppendFormat(@"<!--COPYRIGHT-->");
        myStringBuilder.AppendFormat(@"<div class=""Copyright""><a href=""http://www.wzcbd.com/bbs.html"" target=""_blank"">电信业务审批[2004]字第1365号</a>&nbsp;&nbsp;&nbsp;&nbsp;京ICP证");
        myStringBuilder.AppendFormat(@"<a href=""http://www.hd315.gov.cn/beian/view.asp?bianhao=010202005060700530"">041038号<a><br/>");
        myStringBuilder.AppendFormat(@"Copyright&copy;&nbsp;&nbsp;&nbsp;&nbsp;2004-2008&nbsp;&nbsp;&nbsp;&nbsp;中国网众商城 ");
        myStringBuilder.AppendFormat(@"版权所有</div><div class=""Footer_Link""><a href=""http://www.hd315.gov.cn/beian/view.asp?bianhao=010202005060700530""  target=""_blank""><img src=""http://www.wzcbd.com/images/wzhome_wscfy_031.gif""   alt=""经营性网站备案信息""/></a>");
        myStringBuilder.AppendFormat(@"<a href=""http://www.bj.cyberpolice.cn/index.htm""  target=""_blank""><img src=""http://www.wzcbd.com/images/wzhome_ws_035.gif""  alt=""网络110报警服务""/></a> </div>");
        return myStringBuilder.ToString();
    }
    /// <summary>
    /// 用户帮助
    /// </summary>
    /// <returns></returns>
    [WebMethod]
    public string userHelp()
    {
        StringBuilder myStringBuilder = new StringBuilder();
        myStringBuilder.AppendFormat(@"<ul>");
        myStringBuilder.AppendFormat(@"<li>·<a href=""#"" target=""_blank"">help</a></li>");
        myStringBuilder.AppendFormat(@"</ul>");
        return myStringBuilder.ToString();
    }
    /// <summary>
    /// 常见问题 
    /// </summary>
    /// <returns></returns>
    [WebMethod]
    public string userProblem()
    {
        StringBuilder myStringBuilder = new StringBuilder();
        myStringBuilder.AppendFormat(@"<ul>");
        myStringBuilder.AppendFormat(@"<li>·<a href=""#"">help</a></li>");
        myStringBuilder.AppendFormat(@"</ul>");
        return myStringBuilder.ToString();
    }
    #endregion
}

