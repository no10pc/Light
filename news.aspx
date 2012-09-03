<%@ Page Language="C#" AutoEventWireup="true" CodeFile="news.aspx.cs" Inherits="_news" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title><%= pageModel._企业名称 %></title>
    <meta http-equiv="Page-Enter" content="revealTrans(duration=2, transition=23)">
    <meta http-equiv="Page-Exit" content="revealTrans(duration=1, transition=23)">
    <link href="/css/common.css" rel="stylesheet" type="text/css">
    <style type="text/css">
        body {
            background-image: url(/images/bj.jpg);
        }

        .syCss_200882114553127 a:link {
            color: #FFF8F8;
            font-family: 宋体;
            font-size: 14px;
            font-weight: bold;
        }

        .syCss_200882114553127 a:visited {
            color: #ffffff;
            font-family: 宋体;
            font-size: 14px;
            font-weight: bold;
        }

        .syCss_200882114553127 a:hover {
            color: #000;
            font-family: 宋体;
            font-size: 14px;
            font-weight: bold;
        }

        .syCss_200882114553127 a:active {
            color: #000000;
            font-family: 宋体;
            font-size: 14px;
            font-weight: bold;
        }

        a.h {
            display: block;
            background: url(/images/dh1.jpg) 0 0 no-repeat;
            width: 99px;
            height: 32px;
            border: none;
            font: 14px/25px "宋体";
            color: #fff;
            text-decoration: none;
            text-align: center;
            padding-top: 3px;
        }

            a.h:hover {
                background: url(/images/dh2.jpg) 0 0 no-repeat;
            }
    </style>
    <bgsound src="#" loop="-1" id="BgSound">
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <form runat="server">

        <script language="javascript" src="/js/fkcel.js"></script>

        <script language="javascript" src="/js/fkcelmenu.js"></script>

        <link rel="stylesheet" type="text/css" href="/css/style.css">
        <table border="0" cellspacing="0" cellpadding="0" width="951" bgcolor="#ffffff" align="center">
            <tbody>
                <tr>
                    <td valign="top">
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tbody>
                                <tr>
                                    <td bgcolor="#eaf3e0" width="77%">&nbsp;
                                    </td>
                                    <% = new myBase().outLanguageUrl(pageVal) %>
                                </tr>
                            </tbody>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%" bgcolor="#eaf3e0">
                            <tbody>
                                <tr>
                                    <td style="padding-bottom: 1px; padding-left: 50px; padding-right: 50px; padding-top: 5px"
                                        width="18%">
                                        <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td align='left' valign='middle'>
                                                    <img src='/images/20073123552820.gif' width='100' height='50' alt='LOGO标志' border='0'>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="82%">
                                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style="color: #000000; font-size: 30px; font-weight: bold">
                                                        <%= pageModel._企业名称 %>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tbody>
                                <tr>
                                    <td bgcolor="#eaf3e0" height="2"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tbody>
                                <tr>
                                    <td style="padding-left: 10px; padding-right: 10px" height="32" background="/images/dh1.jpg">

                                        <div class="syCss_200882114553127">
                                            <% = base.topnav(pageVal)%>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td background="#" align='left' valign='middle'>
                                                    <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="950" height="245">
                                                        <param name="movie" value="h/images/banner.swf" />
                                                        <param name="quality" value="high" />
                                                        <embed src="/images/banner.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="950" height="245"></embed>
                                                        <param name="wmode" value="transparent">
                                                    </object>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <table style="z-index: 100" border="0" cellspacing="0" cellpadding="0" width="951"
            bgcolor="#ffffff" align="center">
            <tbody>
                <tr>
                    <td valign="top">&nbsp;
                    </td>
                    <td valign="top" width="219">
                       
                        <% = leftString %>

                        <table style="z-index: 100; margin-top: 5px" border="0" cellspacing="0" cellpadding="0"
                            width="217" align="center">
                            <tbody>
                                <tr>
                                    <td style="padding-left: 13px; color: #ffffff; font-size: 13px; font-weight: bold; padding-top: 3px"
                                        height="32" background="/images/lxtop.jpg"><% = pageModel._联系我们 %>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 2px; padding-left: 10px; padding-right: 5px; padding-top: 2px"
                                        background="/images/lxmid.jpg">
                                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style="line-height: 150%">
                                                        <%=base.address(pageVal) %>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="8" background="/images/lxb.jpg"></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td style="border-right: #d7d7d7 1px dashed" valign="top">&nbsp;
                    </td>
                    <td valign="top">&nbsp;
                    </td>
                    <td valign="top" width="720">
                        <table style="z-index: 100" border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tbody>
                                <tr>
                                    <td height="39" background="/images/title.jpg">
                                        <table style="z-index: 100" border="0" cellspacing="0" cellpadding="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style="padding-left: 35px; color: #ffffff; font-size: 14px; font-weight: bold">
                                                        <% =pageModel._详细信息 %>
                                                    </td>
                                                    <td style="padding-right: 10px; color: #ffffff" align="right">
                                                        <a href="index-20.html">
                                                            <img alt="<% =pageModel._详细信息 %>" border="0" src="/images/more1.png" width="38" height="17" /></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 2px; padding-left: 10px; padding-right: 10px; padding-top: 2px">
                                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style="line-height: 150%; color: #000000">
                                                        <% = description %>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <table border="0" cellspacing="0" cellpadding="0" width="951" bgcolor="#ffffff" align="center">
            <tbody>
                <tr>
                    <td valign="top">
                        <table style="margin-top: 3px" border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tbody>
                                <tr>
                                    <td bgcolor="#28463f" height="3"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tbody>
                                <tr>
                                    <td style="text-align: center; padding-bottom: 5px; padding-left: 5px; padding-right: 5px; padding-top: 5px"
                                        bgcolor="#d3e3be">
                                        <p align="center">
                                            <font face="Verdana">
                                                <%=base.copyright(pageVal) %>
                                            </font>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</body>
</html>
