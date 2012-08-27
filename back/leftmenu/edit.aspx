<%@ Page Language="C#" AutoEventWireup="true" CodeFile="edit.aspx.cs" Inherits="leftmenu_edit" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>修改分类</title>
    <link href="../css/skin/red/common.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/user_userinfo.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/userhome.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="myform" runat="server">
    <div class="Main" style="width: 452px;">
        <table class="user_info_table table_a" style="width: 450px;">
            <tr align="left">
                <td width="30%">
                    <strong>菜单名称:</strong>
                </td>
                <td style="text-align: left">
                
                    <input id="cname" name="cname" type="text" class="w200" value="<% = model.cname %>" />
                </td>
            </tr>
            <tr align="left">
                <td colspan="2" style="text-align: center">
                    <input id="Submit1" type="submit" value="修改" onclick="return validate();" />
                    <script language="javascript" type="text/javascript">
                        function validate() {
                            if ($("#cname").val() == "") {
                                alert("菜单名不能为空");
                                $("#cname").focus();
                                return false;
                            }
                        }
                    </script>
                </td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
