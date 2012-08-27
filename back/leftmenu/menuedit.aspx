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

    <script src="/Kinde/kindeditor.js" type="text/javascript" charset="utf-8"></script>

    <script src="../js/jquery-1.3.2.js" type="text/javascript"></script>

    <script language="javascript" type="text/javascript">
        //        KE.show({
        //            id: 'description',
        //            cssPath: '../kindeditor/skins/tinymce.css'
        //        });
        var editor_id = 'kindeditor_description';
        KE.init({
            id: editor_id,
            width: '100%',
            height: '400px'
        });
        KE.event.ready(function() {
            var textarea = document.createElement('textarea');
            textarea.id = editor_id;
            textarea.name = "description";
            document.getElementById('editor_area').appendChild(textarea);
            KE.create(editor_id);
             getdesc(<%=currentid %>);
        });

        
    </script>

    <style>
        textarea
        {
            display: block;
        }
    </style>
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
                <% = topmenu %>
                <div id="list1">
                    <table class="table_a marginb10">
                        <tr>
                            <td>
                                <%--<textarea id="description" name="description" cols="20" rows="2" class="w400" style="width: 100%;
                                    height: 400px; visibility: hidden;"></textarea>--%>
                                <div id="editor_area">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="hidden" id="typeid" name="typeid" value="0" />
                                <input type="submit" class="submit" name="btnSubmit" value="确认修改" id="btnSubmit"
                                    onclick="return validate();" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script language="javascript" type="text/javascript">
        function validate() {
            if ($("#typeid").val() == "0") {
                alert("未填写介绍信息");
                return false;
            }
        }
        $('#menu li').click(function() {
            var id = $(this).attr("id").replace("O", "");
            switchPanel(id);
            getdesc(id);
        });
        function switchPanel(obj) {
            $("#menu li").each(function() {
                $("#list" + $(this).attr("id").replace("O", "")).hide();
                $(this).removeClass("curr");
            });
            $("#list" + obj).show();
            $("#O" + obj).addClass("curr");
            $("#typeid").val(obj);
        }
        function getdesc(obj) {
            $.ajax({
                url: "/back/js/getmenudesc.ashx?id=" + obj,
                success: function(msg) {
                    if (msg != "") {
                        KE.util.setFullHtml("kindeditor_description", msg);
                        //KE.insertHtml('kindeditor_description', msg);
                    }
                }
            });
        }

    </script>
    <div class="Footer">
        <%=new MallWebService().SiteFoot()%>
    </div>
    </form>
</body>
</html>
