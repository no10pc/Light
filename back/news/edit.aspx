<%@ Page Language="C#" AutoEventWireup="true" CodeFile="edit.aspx.cs" Inherits="news_edit"
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
        id: 'description',
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
                        <th colspan="2" align="left">
                            <strong>添加网站新闻</strong>
                        </th>
                    </tr>
                    <tr>
                        <td align="center" width="12%">
                            新闻分类：
                        </td>
                        <td>
                            <select id="categoryid" name="categoryid" class="w130">
                                <%
                                    System.Data.DataTable dt = new light.BLL.newscategory().GetList(" parentid=0 ").Tables[0];
                                    foreach (System.Data.DataRow dr in dt.Rows)
                                    {
                                        if (dr["pkid"].ToString() == model.categoryid.ToString())
                                        {
                                            Response.Write("<option selected value=\"" + dr["pkid"].ToString() + "\">" + dr["cname"].ToString() + "</option>");
                                        }
                                        else
                                        {
                                            Response.Write("<option value=\"" + dr["pkid"].ToString() + "\">" + dr["cname"].ToString() + "</option>");
                                        }
                                    }
                                %>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            新闻标题：
                        </td>
                        <td>
                        
                            <input name="title" type="text" id="title" class="w300" value="<% = model.title %>" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            新闻选项：
                        </td>
                        <td>
                            显示：<input id="isopen" name="isopen"<% if (model.isopen == 1) { Response.Write("checked"); }%>   type="checkbox" checked="checked" />&nbsp;&nbsp;推荐:<input id="isrecommend" <% if (model.isrecommend == 1) { Response.Write("checked"); }%> name="isrecommend" type="checkbox" checked="checked" />
                        </td>
                    </tr>
                    <tr>
                        <th align="left" colspan="2">
                            <strong>正文：</strong>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea id="description" name="description" style="width: 100%; height: 400px; visibility: hidden;"><% = model.description%></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <input type="submit" class="submit" value="提交" name="btnSubmit" id="btnSubmit" onclick="return validate();" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <script language="javascript" type="text/javascript">
            function validate() {
                if ($("#categoryid").val() == "0") {
                    alert("请选择新闻分类");
                    $("#categoryid").focus();
                    return false;
                }
                if ($("#title").val() == "") {
                    alert("新闻标题不能为空");
                    $("#title").focus();
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
