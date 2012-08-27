/*
cookie
*/
function createCookie(name, value, days, Tdom) {
    var Tdom = (Tdom) ? Tdom : "/";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=" + Tdom;
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') { c = c.substring(1, c.length); }
        if (c.indexOf(nameEQ) == 0) { return c.substring(nameEQ.length, c.length); }
    }
    return null;
}
/*
marquee
*/
var timera = null;
var tag = 1;
var Stag = "stop";
var marqueeHeight;
var maxTop;
var minTop;
var marqueeObj;
var dpps;
var originalObj;
var cloneObj;
function marquee(Mtimes, mH, dP) {
    marqueeHeight = mH;
    dpps = dP;
    clearTimeout(timera);
    Mtimes = Mtimes ? Mtimes : 2;
    marqueeObj = document.getElementById("NewProduct").getElementsByTagName("ul");
    maxTop = -marqueeHeight * Mtimes;
    minTop = marqueeHeight * Mtimes;
    if (marqueeObj.length == 1) {
        originalObj = marqueeObj[0];
        cloneObj = originalObj.cloneNode(true);
        originalObj.parentNode.appendChild(cloneObj);
        marqueeObj[0].style.top = 0 + "px";
        marqueeObj[1].style.top = minTop + "px";
    }
    if ((tag == 0 && marqueeObj[0].offsetTop == 0) || marqueeObj[0].offsetTop / tag == -marqueeHeight) {
        tag++;
        Stag = "stop";
        clearTimeout(timera);
        timera = setTimeout("marquee(" + Mtimes + "," + mH + "," + dP + ")", 5000);
    } else {
        Stag = "continue";
        marqueeObj[0].style.top = marqueeObj[0].offsetTop - dpps + "px"
        marqueeObj[1].style.top = marqueeObj[1].offsetTop - dpps + "px"
        if (marqueeObj[0].offsetTop == maxTop) {
            marqueeObj[0].style.top = minTop + "px";
            tag = -Mtimes; ;
        }
        if (marqueeObj[1].offsetTop == maxTop) {
            marqueeObj[1].style.top = minTop + "px";
        }
        timera = setTimeout("marquee(" + Mtimes + "," + mH + "," + dP + ")", 30)
    }
}
/*
SwitchTab
*/
function SwitchTab(IDprefix, order, TagAmount, status) {
    switch (status) {
        case "S1":
            var TagObj = OOO(IDprefix + "Option", "li");
            var TagArr = new Array();
            for (var i = 0; i < TagObj.length; i++) {
                TagArr.push(TagObj[i].id.split("_Option_")[1]);
            }
            for (var i = 0; i < TagArr.length; i++) {
                OOO(IDprefix + "Option_" + TagArr[i]).className = (TagArr[i] == order) ? "curr" : "";
                //OOO(IDprefix+"Con_"+TagArr[i]).className=(TagArr[i]==order)?"default":"disNone";
                OOO(IDprefix + "Con_" + TagArr[i]).style.display = (TagArr[i] == order) ? "" : "none";
            }
            break;
        default:
            for (var i = 0; i < TagAmount; i++) {
                OOO(IDprefix + "Option_" + i).className = (i == order) ? "curr" : "";
                OOO(IDprefix + "Con_" + i).className = (i == order) ? "default" : "disNone";
            }
            //rankEffect();
            return;
    }
}
/*
showSort
*/
function showSort(obj) {
    $("#" + obj + " h3").click(function() {
        this.className = (this.className == "open") ? "" : "open";
        $("#EFF_ul_" + this.id.substr(7)).get(0).className = (this.className == "open") ? "open" : "";
    });
}
/*
OOO
*/
function OOO(obj, ele) {
    if (obj && !ele) { return document.getElementById(obj); }
    else if (obj && ele) { return document.getElementById(obj).getElementsByTagName(ele); }
    else { return false; }
}
/*
MyCart
*/
//var Dtimeout;
//var Dspeed;
var Dtimer = null;
var Dtimer2 = null;
var Mdisplay = false;
var hideDiv;
var Container;
var button;
var jqShowObj;
var offset;
var height;
var width;
var btnHeight;
var btnWidth;
function initDMenu(obj, showobj, Dtimeout, Dspeed) {
    //	Dtimeout=Dtimeout?Dtimeout:300;
    //	Dspeed=Dspeed?Dspeed:100;
    hideDiv = $("<div style='z-index:10000;'></div>");
    Container = $("<div id=\"Container\"></div>");
    hideDiv.append(Container);
    button = $(obj);
    jqShowObj = $(showobj);
    offset = button.offset();
    height = jqShowObj.height();
    width = jqShowObj.width();
    btnHeight = button.height();
    btnWidth = button.width();
    $(document.body).prepend(hideDiv);
}
function showDMenu() {
    if (Mdisplay == true) {
        return false;
    } else {
        Mdisplay = true;
        Container.css({ margin: "0 auto", width: btnWidth + "px", height: btnHeight + "px" });
        hideDiv.css({ position: "absolute", top: offset.top + 16 + "px", left: button.offset().left - 35 + "px", height: height + "px", width: width + "px" }).show();
        Container.css({ border: "1px solid #666666" });
        Container.animate({ marginTop: 10, height: height + 4, width: width + 4, opacity: '100' }, 100, function() {
            jqShowObj.show();
            Container.append(jqShowObj);
            Container.css({ border: "0px" });
            jqShowObj.mouseover(function() {
                clearTimeout(Dtimer); clearTimeout(Dtimer2);
            }).mouseout(function() {
                hideDMenu();
            });
        });
    }
}
function hideDMenu() {
    clearTimeout(Dtimer);
    clearTimeout(Dtimer2);
    Dtimer = setTimeout(function() {
        Container.css({ border: "1px solid #666666" });
        $(document.body).prepend(jqShowObj);
        jqShowObj.hide();
        Container.empty();
        Container.animate({ width: btnWidth, height: btnHeight, marginTop: '0', opacity: '0' }, 100, function() {
            Container.hide();
            hideDiv.hide();
            Mdisplay = false;
        });
    }, 100);
}
/*
showTip
*/
var display = false;
var display2 = false;
var display3 = false;
function showTip(proobj) {
    var TipDivW = $(proobj).width();
    var TipDivH = $(proobj).height();
    var TipDiv = $("<div id='c01tip' style='z-index:20000;position:absolute;width:" + eval(TipDivW + 5) + "px;height:" + eval(TipDivH + 5) + "px;'><div style='position:absolute;margin:5px 0 0 5px;width:" + TipDivW + "px;height:" + TipDivH + "px;background:#BCBEC0;z-index:20001;'></div></div>")
    if (display == false) {
        TipDiv.append($(proobj));
        $(document.body).prepend(TipDiv);
        $(proobj).show();
        display = true;
    } else {
        $("#c01tip").show();
    }
    $("#c01tip").css({ top: parseInt(document.documentElement.scrollTop + (document.documentElement.clientHeight - $("#c01tip").height()) / 2) + "px", left: (document.documentElement.clientWidth - $("#c01tip").width()) / 2 + "px" })
    $("#Tip_viewCart,#Tip_continue,.Tip_Close").click(function() {
        $("#c01tip").fadeOut();
    });
}
function showTip2(proobj) {
    var TipDivW = $(proobj).width();
    var TipDivH = $(proobj).height();
    var TipDiv = $("<div id='c02tip' style='z-index:20000;position:absolute;width:" + eval(TipDivW + 5) + "px;height:" + eval(TipDivH + 5) + "px;'><div style='position:absolute;margin:5px 0 0 5px;width:" + TipDivW + "px;height:" + TipDivH + "px;background:#BCBEC0;z-index:20001;'></div></div>")
    if (display2 == false) {
        TipDiv.append($(proobj));
        $(document.body).prepend(TipDiv);
        $(proobj).show();
        display2 = true;
    } else {
        $("#c02tip").show();
    }
    $("#c02tip").css({ top: parseInt(document.documentElement.scrollTop + (document.documentElement.clientHeight - $("#c02tip").height()) / 2) + "px", left: (document.documentElement.clientWidth - $("#c02tip").width()) / 2 + "px" })
    $(".Tip_Close").click(function() {
        $("#c02tip").fadeOut();
    });
    timer_5 = setTimeout("showTime()", 1000);
}
function showTip3(proobj) {
    var TipDivW = $(proobj).width();
    var TipDivH = $(proobj).height();
    var TipDiv = $("<div id='c03tip' style='z-index:20000;position:absolute;width:" + eval(TipDivW + 5) + "px;height:" + eval(TipDivH + 5) + "px;'><div style='position:absolute;margin:5px 0 0 5px;width:" + TipDivW + "px;height:" + TipDivH + "px;background:#BCBEC0;z-index:20001;'></div></div>")
    if (display3 == false) {
        TipDiv.append($(proobj));
        $(document.body).prepend(TipDiv);
        $(proobj).show();
        display3 = true;
    } else {
        $("#c03tip").show();
    }
    $("#c03tip").css({ top: parseInt(document.documentElement.scrollTop + (document.documentElement.clientHeight - $("#c03tip").height()) / 2) + "px", left: (document.documentElement.clientWidth - $("#c03tip").width()) / 2 + "px" })
    $("#Tip_notice,.Tip_Close").click(function() {
        $("#c03tip").fadeOut();
    });
}
function showTime() {
    clearTimeout(timer_5);
    var overtime = parseInt($("#timer_5").html()) - 1;
    if (overtime == 0) {
        $("#c02tip").fadeOut();
        //clearTimeout(timer_5);
        return;
    }
    $("#timer_5").html(overtime);
    timer_5 = setTimeout("showTime()", 1000)
}
/*
showNotice
*/
//var noticedisplay=false;
function showNotice(obj, noticetype, offX, offY) {
    //alert(obj.name)
    var noticeX = $(obj).offset().left;
    var noticeT = $(obj).offset().top;
    var noticeW = $(obj).width();
    var noticeH = $(obj).height();
    var offX = (!offX) ? 60 : offX;
    var offY = (!offY) ? 2 : offY;
    //alert(noticeX)
    if ($("#" + noticetype).get(0) == null) {
        var newNotice = document.createElement("span");
        $(newNotice).attr("id", noticetype)
        $(newNotice).css({ position: "absolute", top: noticeT + noticeH + offY + "px", left: noticeX - offX + "px", background: "#FFF9D9", "z-index": "50000", padding: "5px", border: "1px solid #F88E00" });
        $(document.body).prepend($(newNotice));
        $(newNotice).html(obj.name);
        //noticedisplay=true;
    } else {
        $("#" + noticetype).css({ top: noticeT + noticeH + offY + "px", left: noticeX - offX + "px" });
        $("#" + noticetype).show();
    }
}
/*
openwin
*/
function opennewWin(url, newwinT, newwinW, newwinH) {
    window.open(url, newwinT, "width=" + newwinW + ",height=" + newwinH + ",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");
}
/*
pshow.0.1.js
*/
function defineW(i) {
    if ($("#suitP" + i).width() > $("#suitPWrap" + i).width()) {
        $("#suitPWrap" + i).get(0).style.overflowX = "scroll";
    }
    var suitW = (Swidth >= 1280) ? 708 : 472;
    if ($("#suitP" + i).width() < suitW) {
        $("#suitPWrap" + i).get(0).style.width = $("#suitP" + i).width() + "px";
    }
}
function buyFitting(obj) {
    var newHref = obj.href;
    obj.getElementsByTagName("img")[0].src = "http://www.360buy.com/images/appendToCart_4.gif";
    obj.parentNode.innerHTML = obj.innerHTML;
    if ($.browser.msie) {
        window.open(newHref);
        return false;
    }
}
function gotop() {
    window.onscroll = function() {
        if (document.documentElement.scrollTop == 0 && document.body.scrollTop == 0) {
            $("#gotop").get(0).style.display = "none";
        } else {
            $("#gotop").get(0).style.display = "";
            if ($.browser.msie && $.browser.version < "7.0") {
                $("#gotop").get(0).style.position = "absolute";
                $("#gotop").get(0).style.top = getPosition(180);
            }
        }
    }
}
function getPosition(currObjH) {
    return document.documentElement.scrollTop + document.documentElement.clientHeight - currObjH + "px";
}
/*-----------------------------*/
$(function() {
    $("#My360buy,#ServiceCenter").mouseover(function() {
        this.className = "dis";
    }).bind("mouseleave", function() {
        this.className = "";
    })
    $("#Nav li").click(function() {
        $(this).siblings().removeClass("curr");
        this.className = "curr";
    });
    initDMenu("#CartSwitch_wrap", "#MyCart");
    $("#CartSwitch_wrap").mouseover(function() {
        clearTimeout(Dtimer);
        height = $("#MyCart").height();
        Dtimer = setTimeout("showDMenu()", 100);
    }).bind("mouseleave", function() {
        clearTimeout(Dtimer);
        if (Mdisplay == true) {
            Dtimer2 = setTimeout("hideDMenu()", 100);
        }
    });
})
/*ResumeError*/
function ResumeError() { return true; }
window.onerror = ResumeError;
if ($.browser.msie && $.browser.version < "7.0") {
    try { document.execCommand("BackgroundImageCache", false, true); }
    catch (err) { }
}
/*
ShipmentBar
*/
//服务页地址
var serverPage = 'http://jd2008.360buy.com/purchase/ShipmentBarService.aspx';
//显示区域ID
var ShipmentBarPanel = 'shipBarPanel';
//等待提示
var ShipM_wait = '正在查询...';

var ShipM_Sign = "<div style=\"margin:5px 0 0 54px;\">加“*”号地区支持货到付款</div>";
//表单模板
var ShipM_template = "<a href=\"javascript:\" style=\"font-size:10px;position:absolute;right:5px;top:0;\" onclick=\"$('#shipBarPanel').hide()\">关闭</a><div style='padding:5px 10px;'>";
//省市区
ShipM_template += "<div id='sb_area'>送货至：&nbsp;<span id='sb_area_level0'>{ddlAreaLevel0}</span>&nbsp;&nbsp;&nbsp;<span id='sb_area_level1'>{ddlAreaLevel1}</span>&nbsp;&nbsp;&nbsp;<span id='sb_area_level2'>{ddlAreaLevel2}</span></div>";
//配送显示区
ShipM_template += "<div id='sb_shipItems'>" + ShipM_Sign + "</div>";
ShipM_template += "</div>";
//配送显示区-表单
var ShipM_template_ship = "<table width='100%' cellspacing='0' style='margin-top:8px;'><tr style='color:#999;'><td style='width:180px;border-bottom:1px solid #DDE5EF;' align='left'>配送方式</td><td style='width:100px;border-bottom:1px solid #DDE5EF;'>运费</td><td style='border-bottom:1px solid #DDE5EF;'>预计送达时间</td></tr>";
ShipM_template_ship += "{Items}</table><div style='margin-top:5px;'>{message}<p>该运费只适用于当前商品，购买多个商品以最终下单为准。</p></div>";
//配送显示区-表单-项
var ShipM_template_shipItem = "<tr><td><b>{Name}</b></td><td>{Fee}</td><td>出库后{Days}送达</td></tr>";


var ShipmentBar_skuId = 0;
function g(nodeId) {
    return document.getElementById(nodeId);
}
function AjaxJson() {
    this.url = '';
    this.param = '';
    this.process = function() {
        var js = document.createElement('script');
        js.type = 'text/javascript';
        js.src = this.url + '?roid=' + Math.random() + '&' + this.param;
        //js.charset='UTF-8';
        js.charset = 'GB2312';
        document.getElementsByTagName('head')[0].appendChild(js);
    }
}
function ShipmentBar() {
    this.skuId = 0;
    this.show = function() {
        ShipmentBar_skuId = this.skuId;
        g(ShipmentBarPanel).innerHTML = ShipM_wait;
        var a = new AjaxJson();
        a.url = serverPage;
        a.param = 'action=showShipmentBar&skuId=' + this.skuId + '&callBack=ShipmentBar_callBack({obj})';
        a.process();
    }
}
function ShipmentBar_callBack(obj) {
    var html = ShipM_template.replace(/{ddlAreaLevel0}/i, showAreaSelect(0, obj));
    html = html.replace(/{ddlAreaLevel1}/i, showAreaSelect(1, null));
    html = html.replace(/{ddlAreaLevel2}/i, showAreaSelect(2, null));
    g(ShipmentBarPanel).innerHTML = html;
}


//显示配送方式选择
function showShipBar(skuId) {
    var s = new ShipmentBar();
    s.skuId = skuId;
    s.show();
    document.getElementById("shipBarPanel").style.display = "";
}
//显示某级下拉
function showAreaSelect(level, obj) {
    if (Swidth >= 1280) {
        var _w_ = (level == 2) ? 140 : 100;
    } else {
        var _w_ = (level == 2) ? 100 : 80;
    }
    var html = "<select id='sb_area_select" + level + "' onchange=\"selectArea('" + level + "',this.value);\" style=\"width:" + _w_ + "px;\">";
    html += "<option value='-1'>请选择</option>";
    if (obj != null) {
        if (obj.json != null) { obj = obj.json; }
        for (var i = 0; i < obj.length; i++) {
            html += "<option value='" + obj[i].Id + "'>" + obj[i].Name
            if (obj[i].IsCod == '1') {
                html += "*";
            }
            html += "</option>";
        }
    }
    html += "</select>";
    return html;
}

//地区连动
function selectArea(level, idArea) {
    if (level < 2) {
        if (idArea < 0) {
            selectArea_callback(++level, null);
        } else {
            var pLevel = ++level;
            var a = new AjaxJson();
            a.url = serverPage;
            a.param = "action=selectArea&parentId=" + idArea + "&level=" + pLevel + "&provinceId=" + g('sb_area_select0').value + "&callBack=selectArea_callback('" + pLevel + "',{obj})";
            a.process();
        }
        while (level < 2) {
            level++;
            selectArea_callback(level, null);
        }
        g('sb_shipItems').innerHTML = ShipM_Sign;
    } else {
        showShipmentTypes(ShipmentBar_skuId);
    }


}
function selectArea_callback(level, obj) {
    g('sb_area_level' + level).innerHTML = showAreaSelect(level, obj);
}


//显示配送
function showShipmentTypes(skuId) {

    var idArea = g('sb_area_select2').value;

    if (idArea < 0) { g('sb_shipItems').innerHTML = ''; return; }
    var idProvince = g('sb_area_select0').value;
    var idCity = g('sb_area_select1').value;


    var a = new AjaxJson();
    a.url = serverPage;
    a.param = "action=showShipmentTypes&idArea=" + idArea + "&idProvince=" + idProvince + "&idCity=" + idCity + "&skuId=" + skuId + "&callBack=showShipmentTypes_callback({obj})";
    a.process();
    g('sb_shipItems').innerHTML = ShipM_wait;
}
function showShipmentTypes_callback(obj) {
    var message = "<p style='color:red;'>提示:</p>";
    var html = "";
    if (obj != null) {
        if (obj.json != null) { obj = obj.json; }
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].Id == "-1") {
                if (obj[i].Name == "djd") {
                    message += "<p>此商品属于大家电，只能选择“京东快递”或是“快递运输”；</p>";
                }
                if (obj[i].Name == "weight") {
                    message += "<p>此商品重量大于10公斤，不适用于<a href='http://www.360buy.com/help/kdexpress.aspx#kdmyf' target='_blank' class='link_1'>免运费规则</a>，请您谅解；</p>";
                }
                continue;
            }
            html += ShipM_template_shipItem;
            var name = obj[i].Name;
            if (name == '京东快递') name += "<span style='font-weight:normal;'>(支持货到付款)</span>";
            html = html.replace(/{Name}/i, name);
            var tFee = obj[i].Fee;
            if (tFee == '0.00') tFee += "<span style='color:red'>(免运费)</span>";
            html = html.replace(/{Fee}/i, tFee);
            html = html.replace(/{Days}/i, obj[i].Days);
        }
    }
    g('sb_shipItems').innerHTML = ShipM_template_ship.replace(/{Items}/i, html).replace(/{message}/i, message);
}
