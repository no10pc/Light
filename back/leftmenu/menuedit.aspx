<%@ Page Language="C#" AutoEventWireup="true" CodeFile="menuedit.aspx.cs" Inherits="leftmenu_menuedit"
    ValidateRequest="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>产品列表</title>
    <link href="../css/skin/red/common.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/user_userinfo.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/userhome.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/pagination.css" rel="stylesheet" type="text/css" />

    <<script src="/back/js/jquery-1.3.2.js" type="text/javascript"></script>
    <script src="/Kinde/kindeditor.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
        KE.show({
            id: 'c_description',
            cssPath: '/kindeditor/skins/tinymce.css'
        });
        KE.show({
            id: 'k_description',
            cssPath: '/kindeditor/skins/tinymce.css'
        });
        KE.show({
            id: 'e_description',
            cssPath: '/kindeditor/skins/tinymce.css'
        });
    </script>

    <style type="text/css">
        textarea {
            display: block;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div id="upload_Tip" class="Tip360">
        </div>
        <div id="divload" style="top: 50%; right: 50%; position: absolute; padding: 0px; margin: 0px; z-index: 999; display: none;">
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
                    <% = topmenu %>
                    <div id="list1">
                        <table class="table_a marginb10">
                            <tr>
                                <td align="center" width="12%">中文：
                                </td>
                                <td>
                                    <textarea id="c_description" name="c_description" cols="20" rows="2" class="w400" style="width: 100%; height: 400px; visibility: hidden;"><%= model.c_description%></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" width="12%">韩文：
                                </td>
                                <td>
                                    <textarea id="k_description" name="k_description" cols="20" rows="2" class="w400" style="width: 100%; height: 400px; visibility: hidden;"><%= model.k_description%></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" width="12%">英文：
                                </td>
                                <td>
                                    <textarea id="e_description" name="e_description" cols="20" rows="2" class="w400" style="width: 100%; height: 400px; visibility: hidden;"><%= model.e_description%></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="hidden" id="typeid" name="typeid" value="0" />
                                    <input type="submit" class="submit" name="btnSubmit" value="确认修改" id="btnSubmit" />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>


        <div class="Footer">
            <%=new MallWebService().SiteFoot()%>
        </div>
    </form>
</body>
</html>
