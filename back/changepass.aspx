<%@ Page Language="C#" AutoEventWireup="true" CodeFile="changepass.aspx.cs" Inherits="changepass" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>产品列表</title>
    <link href="css/skin/red/common.css" rel="stylesheet" type="text/css" />
    <link href="css/skin/red/user_userinfo.css" rel="stylesheet" type="text/css" />
    <link href="css/skin/red/userhome.css" rel="stylesheet" type="text/css" />
    <link href="css/skin/red/pagination.css" rel="stylesheet" type="text/css" />

    <script src="js/jquery-1.3.2.js" type="text/javascript"></script>

</head>
<body>
    <form id="form1" runat="server">
    <div id="upload_Tip" class="Tip360">
    </div>
    <div id="divload" style="top: 50%; right: 50%; position: absolute; padding: 0px;
        margin: 0px; z-index: 999; display: none;">
        <img src="/back/images/spinner3-greenie.gif" />
    </div>
    <div class="Header">
        <div class="Header">
            <%=new MallWebService().SiteHead()%>
        </div>
        <div class="Main">
            <div class="left">
                <%=new MallWebService().SubMenu()%>
            </div>
            <div class="right1">
               
                    <table class="table_a marginb10">
                        <tr>
                            <td>
                                原 密 码：
                            </td>
                            <td>
                                <input name="oldpassword" type="password" id="oldpassword" class="w200"  />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                新 密 码：
                            </td>
                            <td>
                                <input name="newpassword" type="password" id="newpassword" class="w200"  />
                            </td>
                        </tr>
                        <tr>
                            <td >
                                确认密码：
                            </td>
                            <td>
                                <input name="passwordagain" type="password" id="passwordagain" class="w200"  />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                                <input type="hidden" id="typeid" name="typeid" value="1" />
                                <input type="submit" class="submit" name="btnSubmit" value="确认修改" id="btnSubmit" onclick="return validate();" />
                            </td>
                        </tr>
                    </table>
               
            </div>
        </div>
    </div>

    <script language="javascript" type="text/javascript">
        function validate() {
            if ($("#oldpassword").val() == "") {
                alert("原密码不能为空");
                $("#oldpassword").focus();
                return false;
            }
            if ($("#newpassword").val() == "") {
                alert("新密码不能为空");
                $("#newpassword").focus();
                return false;
            }
            if ($("#passwordagain").val() == "") {
                alert("重复密码不能为空");
                $("#passwordagain").focus();
                return false;
            }
            if ($("#passwordagain").val() != $("#newpassword").val()) {
                alert("重复密码与新密码不一致");
                $("#passwordagain").focus();
                return false;
            }
        }
    </script>

    <div class="Footer">
        <%=new MallWebService().SiteFoot()%>
    </div>
    </form>
</body>
</html>
