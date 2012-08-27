<%@ Page Language="C#" AutoEventWireup="true" CodeFile="del.aspx.cs" Inherits="category_del" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>删除分类</title>
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
                    <strong>确认删除:</strong>
                </td>
                <td style="text-align: left">
                    <input id="cname" name="cname" type="text" class="w100" />输入OK，确认删除
                </td>
            </tr>
            <tr align="left">
                <td colspan="2" style="text-align: center">
                    <input id="Submit1" type="submit" value="删除" onclick="return validate();" />
                    <script language="javascript" type="text/javascript">
                        function validate() {
                            if ($("#cname").val() == "") {
                                alert("输入OK确认删除");
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
