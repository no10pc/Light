<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="back_login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<title>网站管理员登陆</title>
<style type="text/css">
    <!
    -- body
    {
        margin-left: 0px;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        background-color: #1D3647;
    }
    -- ></style>

<script src="js/jquery-1.2.6.pack.js" type="text/javascript"></script>

<script src="js/jquery.cookie.1.0.js" type="text/javascript"></script>

<link href="images/skin.css" rel="stylesheet" type="text/css">
<body>
    <table width="100%" height="166" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td height="42" valign="top">
                <table width="100%" height="42" border="0" cellpadding="0" cellspacing="0" class="login_top_bg">
                    <tr>
                        <td width="1%" height="21">
                            &nbsp;
                        </td>
                        <td height="42">
                            &nbsp;
                        </td>
                        <td width="17%">
                            &nbsp;
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <table width="100%" height="532" border="0" cellpadding="0" cellspacing="0" class="login_bg">
                    <tr>
                        <td width="49%" align="right">
                            <table width="91%" height="532" border="0" cellpadding="0" cellspacing="0" class="login_bg2">
                                <tr>
                                    <td height="138" valign="top">
                                        <table width="89%" height="427" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td height="149">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="80" align="right" valign="top">
                                                    <img src="images/logo.png" width="279" height="68">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="198" align="right" valign="top">
                                                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td width="35%">
                                                                &nbsp;
                                                            </td>
                                                            <td height="25" colspan="2" class="left_txt">
                                                                <p>
                                                                    1- 没有密码无法登陆...</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &nbsp;
                                                            </td>
                                                            <td height="25" colspan="2" class="left_txt">
                                                                <p>
                                                                    2- 请不要尝试非法登陆...</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &nbsp;
                                                            </td>
                                                            <td height="25" colspan="2" class="left_txt">
                                                                <p>
                                                                    3- 系统会记录您的登陆日志...</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &nbsp;
                                                            </td>
                                                            <td width="30%" height="40">
                                                                <img src="images/icon-demo.gif" width="16" height="16"><a href="#" target="_blank"
                                                                    class="left_txt3"> 使用说明</a>
                                                            </td>
                                                            <td width="35%">
                                                                <img src="images/icon-login-seaver.gif" width="16" height="16"><a href="#" class="left_txt3">
                                                                    在线客服</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td width="1%">
                            &nbsp;
                        </td>
                        <td width="50%" valign="bottom">
                            <table width="100%" height="59" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="4%">
                                        &nbsp;
                                    </td>
                                    <td width="96%" height="38">
                                        <span class="login_txt_bt">登陆信息网后台管理</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                    <td height="21">
                                        <table cellspacing="0" cellpadding="0" width="100%" border="0" id="table211" height="328">
                                            <tr>
                                                <td height="164" colspan="2" align="middle">
                                                    <form name="myform" runat="server" action="login.aspx" method="post">
                                                    <table cellspacing="0" cellpadding="0" width="100%" border="0" height="143" id="table212">
                                                        <tr>
                                                            <td width="13%" height="38" class="top_hui_text">
                                                                <span class="login_txt">管理员：&nbsp;&nbsp; </span>
                                                            </td>
                                                            <td height="38" colspan="2" class="top_hui_text" style="text-align:left;">
                                                                <input name="username" id="username" class="editbox4" value="" size="20">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="13%" height="35" class="top_hui_text">
                                                                <span class="login_txt">密 码： &nbsp;&nbsp; </span>
                                                            </td>
                                                            <td height="35" colspan="2" class="top_hui_text" style="text-align:left;">
                                                                <input class="editbox4" type="password" size="20" name="password" id="password">
                                                                <img src="images/luck.gif" width="19" height="18">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="13%" height="35">
                                                                <span class="login_txt">验证码：</span>
                                                            </td>
                                                            <td height="35" colspan="2" class="top_hui_text" style="text-align:left;">
                                                                <input class="wenbenkuang" name="verifycode" type="text" value="" id="verifycode"
                                                                    maxlength="5" size="10">
                                                                <span>
                                                                    <img src="js/validatecode.aspx" alt="点击刷新验证码" onclick="javascript:this.src='js/validatecode.aspx?t='+Math.random()+new Date().getMilliseconds;" /></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="35">
                                                                &nbsp;
                                                            </td>
                                                            <td width="20%" height="35">
                                                                <input name="Submit" type="submit" onclick="return checkinput();" class="button"
                                                                    id="Submit" value="登 陆">
                                                            </td>
                                                            <td width="67%" class="top_hui_text">
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <br>
                                                    </form>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="433" height="164" align="right" valign="bottom">
                                                    <img src="images/login-wel.gif" width="242" height="138">
                                                </td>
                                                <td width="57" align="right" valign="bottom">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td height="20">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="login-buttom-bg">
                    <tr>
                        <td align="center">
                            <span class="login-buttom-txt">Copyright &copy; 2009-2010 </span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <script type="text/javascript" language="javascript">
        $(function() {
            $("#verifycode").val($.cookie("checkcode"));
            $("#Submit").click(function() {
                if ($("#username").val() == "") {
                    alert("用户名不能为空");
                    $("#username").focus();
                    return false;
                }
                if ($("#password").val() == "") {
                    alert("密码能为空");
                    $("#password").focus();

                    return false;
                }
                if ($("#verifycode").val() == "") {
                    alert("验证码不能为空");
                    $("#verifycode").focus();
                    return false;
                }
                if ($("#verifycode").val().toLowerCase() != $.cookie("checkcode").toLowerCase()) {
                    alert("验证码输入错误");
                    $("#verifycode").focus();
                    return false;
                }

            })
        });
    </script>

</body>
</html>
