<%@ Page Language="C#" AutoEventWireup="true" CodeFile="main.aspx.cs" Inherits="mall_info_mall_prolist" validateRequest="false" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>产品列表</title>
    <link href="css/skin/red/common.css" rel="stylesheet" type="text/css" />
    <link href="css/skin/red/user_userinfo.css" rel="stylesheet" type="text/css" />
    <link href="css/skin/red/userhome.css" rel="stylesheet" type="text/css" />
    <link href="css/skin/red/pagination.css" rel="stylesheet" type="text/css" />

    <script src="js/jquery-1.3.2.js" type="text/javascript"></script>
    <script src="/Kinde/kindeditor.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
        KE.show({
        id: 'csiteinfo',
            cssPath: '../kindeditor/skins/tinymce.css'
        });
        KE.show({
        id: 'esiteinfo',
            cssPath: '../kindeditor/skins/tinymce.css'
        });
        KE.show({
        id: 'ksiteinfo',
            cssPath: '../kindeditor/skins/tinymce.css'
        });
    </script>
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
                <ul class="Tab" id="menu">
                    <li id="O1" class="curr"><em>中文网站</em></li>
                    <li id="O2"><em>英文网站</em></li>
                    <li id="O3"><em>韩文网站</em></li>
                </ul>
                <div id="list1">
                    <table class="table_a marginb10">
                        <tr>
                            <td align="center" width="12%">
                                中文名称：
                            </td>
                            <td>
                                <input name="csitename" type="text" id="csitename" class="w400" value="<%= model.csitename %>" />
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                中文地址：
                            </td>
                            <td>
                                <input name="caddress" type="text" id="caddress" class="w400" value="<%= model.caddress %>" />
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                中文版权：
                            </td>
                            <td>
                                <input name="ccopyright" type="text" id="ccopyright" class="w400" value="<%= model.ccopyright %>"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                中文介绍：
                            </td>
                            <td>
                                <textarea id="csiteinfo" name="csiteinfo" cols="20" rows="2" class="w400" style="width: 100%; height: 400px; visibility: hidden;"><%= model.csiteinfo%></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="list2" style="display: none;">
                    <table class="table_a marginb10">
                        <tr>
                            <td align="center" width="12%">
                                英文名称：
                            </td>
                            <td>
                                <input name="esitename" type="text" id="esitename" class="w400"  value="<%= model.esitename %>"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                英文地址：
                            </td>
                            <td>
                                <input name="eaddress" type="text" id="eaddress" class="w400" value="<%= model.eaddress %>" />
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                英文版权：
                            </td>
                            <td>
                                <input name="ecopyright" type="text" id="ecopyright" class="w400" value="<%= model.ecopyright %>" />
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                英文介绍：
                            </td>
                            <td>
                                <textarea id="esiteinfo" name="esiteinfo" cols="20" rows="2" class="w400" style="width: 100%; height: 400px; visibility: hidden;"><%= model.esiteinfo%></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="list3" style="display: none;">
                    <table class="table_a marginb10">
                        <tr>
                            <td align="center" width="12%">
                                韩文名称：
                            </td>
                            <td>
                                <input name="ksitename" type="text" id="ksitename" class="w400" value="<%= model.ksitename %>" />
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                韩文地址：
                            </td>
                            <td>
                                <input name="kaddress" type="text" id="kaddress" class="w400" value="<%= model.kaddress %>" />
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                韩文版权：
                            </td>
                            <td>
                                <input name="kcopyright" type="text" id="kcopyright" class="w400" value="<%= model.kcopyright %>" />
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                英文介绍：
                            </td>
                            <td>
                                <textarea id="ksiteinfo" name="ksiteinfo" cols="20" rows="2" class="w400" style="width: 100%; height: 400px; visibility: hidden;"><%= model.ksiteinfo%></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="clear">
                </div>
                <div class="user_cpfx_box" id="list4" style="display: none;">
                    <table class="table_a marginb10">
                        <tr>
                            <td colspan="2" align="left">
                                <b>网站联系信息</b>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                网站电话：
                            </td>
                            <td>
                                <input name="phone" type="text" id="phone" class="w400" value="<%= model.phone %>"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                联系手机：
                            </td>
                            <td>
                                <input name="mobile" type="text" id="mobile" class="w400"  value="<%= model.mobile %>"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                网站传真：
                            </td>
                            <td>
                                <input name="fax" type="text" id="fax" class="w400"  value="<%= model.fax %>"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                网站域名：
                            </td>
                            <td>
                                <input name="url" type="text" id="url" class="w400"  value="<%= model.url %>"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                邮编：
                            </td>
                            <td>
                                <input name="postcode" type="text" id="postcode" class="w400"  value="<%= model.postcode %>"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                电子邮件：
                            </td>
                            <td>
                                <input name="email" type="text" id="email" class="w400"  value="<%= model.email %>"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" width="12%">
                                备案号：
                            </td>
                            <td>
                                <input name="beian" type="text" id="beian" class="w400"  value="<%= model.beian %>"/>
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
    </div>

    <script language="javascript" type="text/javascript">
        $('#menu li').click(function() {
            var id = $(this).attr("id").replace("O", "");
            switchPanel(id);
        });
        function switchPanel(obj) {
//            for (var i = 1; i <= 3; i++) {
//                $("#list" + i).hide();
//                $("#O" + i).removeClass("curr");
            //            }
            $("#menu li").each(function() {
            $("#list" + $(this).attr("id").replace("O","")).hide();
                $(this).removeClass("curr");
            });
            $("#list" + obj).show();
            $("#O" + obj).addClass("curr");
            $("#typeid").val(obj);
        }
        $("#list4").show();
        function validate() {
            var typeid = $("#typeid").val();
            if (typeid == "1") {
                if ($("#csitename").val() == "") {
                    alert("网站中文名不能为空");
                    $("#csitename").focus();
                    return false;
                }
                if ($("#caddress").val() == "") {
                    alert("网站中文地址不能为空");
                    $("#caddress").focus();
                    return false;
                }
                if ($("#ccopyright").val() == "") {
                    alert("网站中文版权信息不能为空");
                    $("#ccopyright").focus();
                    return false;
                }
                if ($("#csiteinfo").val() == "") {
                    alert("网站中文介绍信息不能为空");
                    $("#csiteinfo").focus();
                    return false;
                }
            } else if (typeid == "2") {
                if ($("#esitename").val() == "") {
                    alert("网站英文名不能为空");
                    $("#esitename").focus();
                    return false;
                }
                if ($("#eaddress").val() == "") {
                    alert("网站英文地址不能为空");
                    $("#eaddress").focus();
                    return false;
                }
                if ($("#ecopyright").val() == "") {
                    alert("网站英文版权信息不能为空");
                    $("#ecopyright").focus();
                    return false;
                }
                if ($("#esiteinfo").val() == "") {
                    alert("网站英文介绍信息不能为空");
                    $("#esiteinfo").focus();
                    return false;
                }
            } else if (typeid == "3") {
                if ($("#ksitename").val() == "") {
                    alert("网站韩文名不能为空");
                    $("#ksitename").focus();
                    return false;
                }
                if ($("#kaddress").val() == "") {
                    alert("网站韩文地址不能为空");
                    $("#kaddress").focus();
                    return false;
                }
                if ($("#kcopyright").val() == "") {
                    alert("网站韩文版权信息不能为空");
                    $("#kcopyright").focus();
                    return false;
                }
                if ($("#ksiteinfo").val() == "") {
                    alert("网站韩文介绍信息不能为空");
                    $("#ksiteinfo").focus();
                    return false;
                }
            }
            if ($("#phone").val() == "") {
                alert("联系电话不能为空");
                $("#phone").focus();
                return false;
            }
            if ($("#mobile").val() == "") {
                alert("联系手机不能为空");
                $("#mobile").focus();
                return false;
            }
            if ($("#fax").val() == "") {
                alert("传真不能为空");
                $("#fax").focus();
                return false;
            }
            if ($("#beian").val() == "") {
                alert("备案号不能为空");
                $("#beian").focus();
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
