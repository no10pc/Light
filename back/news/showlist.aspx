<%@ Page Language="C#" AutoEventWireup="true" CodeFile="showlist.aspx.cs" Inherits="news_showlist" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>新闻列表</title>
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
        <div id="divload" style="top: 50%; right: 50%; position: absolute; padding: 0px; margin: 0px; z-index: 999; display: none;">
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
                    <div id="productlist">
                        <table class="table_a marginb10">
                            <tr>
                                <th align="left" colspan="5">
                                    <strong>网站新闻列表<a href="add.aspx">【添加新闻】</a></strong>
                                </th>

                            </tr>
                            <tr>
                                <td align="left" colspan="5">
                                    分类:<asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged"></asp:DropDownList>
                                </td>

                            </tr>
                            <tr align="center">
                                <td width="12%">序号
                                </td>
                                <td width="*">名称
                                </td>
                                <td width="20%" align="center">分类
                                </td>
                                <td width="12%">操作
                                </td>
                            </tr>
                            <% = newlist %>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <script src="/back/js/popup.js" type="text/javascript"></script>

        <script language="javascript" type="text/javascript">
            function del(obj) {
                var url = "showlist.aspx?nid=" + obj;
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
