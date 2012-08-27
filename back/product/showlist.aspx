<%@ Page Language="C#" AutoEventWireup="true" CodeFile="showlist.aspx.cs" Inherits="product_showlist" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>产品列表</title>
    <link href="../css/skin/red/common.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/user_userinfo.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/userhome.css" rel="stylesheet" type="text/css" />
    <link href="../css/skin/red/pagination.css" rel="stylesheet" type="text/css" />

    <script src="../js/jquery-1.3.2.js" type="text/javascript"></script>

</head>
<body>
    <form id="form1" runat="server">
    <div id="upload_Tip" class="Tip360">
    </div>
    <div id="divload" style="top: 50%; right: 50%; position: absolute; padding: 0px;
        margin: 0px; z-index: 999; display: none;">
        <img src="../images/spinner3-greenie.gif" />
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
                        <th align="left" colspan="3">
                            <strong>产品列表<a href="add.aspx">【添加新产品】</a></strong>
                        </th>
                    </tr>
                    <tr align="center">
                        <td width="12%">
                            序号
                        </td>
                        <td width="*">
                            名称
                        </td>
                        <td width="12%">
                            操作
                        </td>
                    </tr>
                    <%
                        System.Data.DataTable dt = new light.BLL.product().GetList(" 1=1 ").Tables[0];
                        foreach (System.Data.DataRow dr in dt.Rows)
                        {
                    %>
                    <tr>
                        <td width="12%" align="center">
                            <%= dr["pkid"].ToString() %>
                        </td>
                        <td width="*">
                            <%= dr["pname"].ToString()%>
                        </td>
                        <td width="12%" align="center">
                            <a style="cursor:pointer;" href="edit.aspx?pid=<% = dr["pkid"].ToString() %>" >修改</a>&nbsp;
                            <a style="cursor:pointer;" onclick="del(<% = dr["pkid"].ToString() %>);">删除</a>
                        </td>
                    </tr>
                    <%
                        }
                    %>
                </table>
                <div id="productlist">
                </div>
            </div>
        </div>
    </div>

    <script src="/back/js/popup.js" type="text/javascript"></script>

    <script language="javascript" type="text/javascript">
        function del(obj) {
            var url = "showlist.aspx?pid=" + obj;
            var isSure = confirm("真的删除吗?");
            if (isSure) {
                window.location.href = url;
            }
            }
           
    </script>

    <div class="Footer">
        <%=new MallWebService().SiteFoot()%>
    </div>
    </form>
</body>
</html>
