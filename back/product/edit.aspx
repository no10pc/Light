<%@ Page Language="C#" AutoEventWireup="true" CodeFile="edit.aspx.cs" Inherits="product_edit"
    ValidateRequest="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>添加网站产品</title>
    <link href="../css/skin/red/common.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/user_userinfo.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/userhome.css" rel="stylesheet" type="text/css" />

    <script src="/Kinde/kindeditor.js" type="text/javascript" charset="utf-8"></script>

    <script src="../js/jquery-1.3.2.js" type="text/javascript"></script>

       <script type="text/javascript">
        KE.show({
            id: 'pinfo',
            cssPath: '../kindeditor/skins/tinymce.css'
        });
        KE.show({
            id: 'eninfo',
            cssPath: '../kindeditor/skins/tinymce.css'
        });
        KE.show({
            id: 'krinfo',
            cssPath: '../kindeditor/skins/tinymce.css'
        });
    </script>
</head>
<body>
    <form id="myform" enctype="multipart/form-data" runat="server">
    <div class="Header">
        <div class="Header">
            <%=new MallWebService().SiteHead()%>
        </div>
        <div class="Main">
            <div class="left">
                <%=new MallWebService().SubMenu()%>
            </div>
            <div class="right1">
                <table class="user_info_table table_a">
                    <tr>
                        <th colspan="3" align="left">
                            <strong>添加网站产品</strong>
                        </th>
                    </tr>
                    <tr>
                        <td align="center" width="12%">
                            产品分类：
                        </td>
                        <td>
                            <select id="pcateid1" name="pcateid1" class="w130" runat="server">
                            </select>

                        </td>
                        <td rowspan="3" width="20%" style="overflow: hidden">
                            <img src="<%=model.plogo %>" style="width: 155px; height: 80px;" />
                        </td>
                    </tr>
                     <tr>
                        <td align="center">
                            产品中文名称：
                        </td>
                        <td>
                            <input name="pname" type="text" id="pname" class="w300"  value="<%=model.pname %>" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            产品英文名称：
                        </td>
                        <td>
                            <input name="enpname" type="text" id="enpname" class="w300"  value="<%=model.enpname %>" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            产品韩文名称：
                        </td>
                        <td>
                            <input name="krpname" type="text" id="krpname" class="w300" value="<%=model.krpname %>" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            产品图片：
                        </td>
                        <td>
                            <input name="oldplogo" type="text" id="oldplogo" class="w400" value="<%=model.plogo %>" />
                            <input name="newplogo" runat="server" type="file" id="newplogo" class="w400" style="display: none" />
                            <input type="button" value="修改" id="mybtn" />
                            <input type="hidden" value="0" id="btnmodify" name="btnmodify" />

                            <script language="javascript" type="text/javascript">
                                $("#mybtn").click(function() {
                                    if ($("#mybtn").val() == "修改") {
                                        $("#oldplogo").hide();
                                        $("#newplogo").show();
                                        $("#mybtn").val("取消");
                                        $("#btnmodify").val("1");
                                    }
                                    else {
                                        $("#newplogo").hide();
                                        $("#oldplogo").show();
                                        $("#mybtn").val("修改");
                                        $("#btnmodify").val("0");
                                    }
                                });
                            </script>

                        </td>
                    </tr>
                    <tr>
                        <th align="left" colspan="2">
                            <strong>产品中文描述</strong>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea id="pinfo" name="pinfo" style="width: 100%; height: 300px; visibility: hidden;"><%=model.pinfo %></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th align="left" colspan="2">
                            <strong>产品英文描述</strong>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea id="eninfo" name="eninfo" style="width: 100%; height: 300px; visibility: hidden;"><%=model.eninfo %></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th align="left" colspan="2">
                            <strong>产品韩文描述</strong>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea id="krinfo" name="krinfo" style="width: 100%; height: 300px; visibility: hidden;"><%=model.krinfo %></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" align="center">
                            <input type="submit" class="submit" name="btnSubmit" id="btnSubmit" onclick="return validate();" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <script language="javascript" type="text/javascript">
            function validate() {
                if ($("#pcateid2").val() == "0") {
                    alert("请选择子类");
                    $("#pcateid2").focus();
                    return false;
                }
                if ($("#pname").val() == "") {
                    alert("产品中文名称不能为空");
                    $("#pname").focus();
                    return false;
                }
                if ($("#enpname").val() == "") {
                    alert("产品英文名称不能为空");
                    $("#enpname").focus();
                    return false;
                }
                if ($("#krpname").val() == "") {
                    alert("产品韩文名称不能为空");
                    $("#krpname").focus();
                    return false;
                }
                if ($("#plogo").val() == "") {
                    alert("产品图片不能为空");
                    $("#plogo").focus();
                    return false;
                }
            }
        </script>

        <div class="Footer">
            <%=new MallWebService().SiteFoot()%>
        </div>
    </div>
    </form>
</body>
</html>
