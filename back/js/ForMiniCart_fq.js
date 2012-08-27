var isIe = (window.ActiveXObject) ? true : false;

var display4 = false;
function showTip100(proobj) {
    var TipDivW = $(proobj).width();
    var TipDivH = $(proobj).height();
    var TipDiv = $("<div id='c04tip' style='z-index:20000;position:absolute;width:" + eval(TipDivW + 5) + "px;height:" + eval(TipDivH + 5) + "px;'><div style='position:absolute;margin:5px 0 0 5px;width:" + TipDivW + "px;height:" + TipDivH + "px;background:#BCBEC0;z-index:20001;'></div></div>")
    if (display4 == false) {
        TipDiv.append($(proobj));
        $(document.body).prepend(TipDiv);
        $(proobj).show();
        display4 = true;
    } else {
        $("#c04tip").show();
    }
    $("#c04tip").css({ top: parseInt(document.documentElement.scrollTop + (document.documentElement.clientHeight - $("#c04tip").height()) / 2) + "px", left: (document.documentElement.clientWidth - $("#c04tip").width()) / 2 + "px" })
    $("#Tip_continue,.Tip_Close").click(function() {
        $("#c04tip").fadeOut();
    });
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






function showTipPrice(obj) {
    var t = document.getElementById('upload_Tip');
    t.style.width = "200px";
    var str = "";
    str += "<div class='Tip_Title'><em><img src='/images/tip_close.jpg' class='Tip_Close'/></em>报价状态</div>";
    str += "<div class='Tip_Content'><div style='text-align:left;'><select id='openprice' name='openprice' class='w70'><option value='999'>请选择报价状态</option><option value='1'>无限制</option><option value='0'>凭网众卡查看</option>/select><input id='okprice' type='button' onclick='UpdatePrice(" + obj + ");' value='确定' /></div><div>";
    t.innerHTML = str;
    showTip100('#upload_Tip');
}
function showTipVisible(obj) {
    var t = document.getElementById('upload_Tip');
    t.style.width = "200px";
    var str = "";
    str += "<div class='Tip_Title'><em><img src='/images/tip_close.jpg' class='Tip_Close'/></em>产品状态</div>";
    str += "<div class='Tip_Content'><div style='text-align:left;'><select id='openvisible' name='openvisible' class='w70'><option value='999'>请选择产品状态</option><option value='1'>放开</option><option value='0'>关闭</option>/select><input id='okvisible' type='button' onclick='UpdateVisible(" + obj + ");' value='确定' /></div><div>";
    t.innerHTML = str;
    showTip100('#upload_Tip');
}
function showUpload(obj) {
    var t = document.getElementById('upload_Tip');
    t.style.width = "500px";
    var str = "";
    str += "<div class='Tip_Title'><em><img src='/images/tip_close.jpg' class='Tip_Close'/></em>上传系列图片</div>";
    str += "<div class='Tip_Content'><div style='text-align:left;'><iframe src='/mall_info/uploadSingle.html' id='ifUpload' frameborder=0 scrolling=no height=35 width=480></iframe></div></div>";
    str += "<div class='Tip_Submit'><a href='#' id='Tip_apply' onclick='UpdateImg(" + $(obj).attr("id") + ");' ><span>确认</span></a></div>";
    t.innerHTML = str;
    showTip100('#upload_Tip');
}

function showChangePrice(obj) {
    var t = document.getElementById('Price_Tip');
    t.style.width = "500px";
    var str = "";
    str += "<div class='Tip_Title'><em><img src='/images/tip_close.jpg' class='Tip_Close'/></em>系列报价批量修改</div>";
    str += "<div class='Tip_Content'><div style='text-align:left;'><span>" + $(obj).attr("id").split("_")[0] + "：</span><input name='txtprice' type='text' id='txtprice' class='w200' />&nbsp;<input type='button' name='btnprice' value='修改报价' id='btnprice' onclick='changePriceMet(" + $(obj).attr("id").split("_")[1] + ")'  /></div></div>";
    str += "<div class='Tip_Content'><div style='text-align:left;'>提示: 修改后，该系列下的所有产品优惠价格都会改变，请慎重使用</div></div>";
    str += "<div class='Tip_Submit'><a href='#' id='Tip_apply' onclick='Close();' ><span>关闭</span></a></div>";
    t.innerHTML = str;
    showTip3('#Price_Tip');
}

function changePriceMet(obj) {
    var pkid = obj;
    var price = $("#txtprice").val();
    if (price == "") {
        alert("请输入价格");
    }
    else {
        var isSure = confirm("本次操作为不可逆转，是否真的执行？");
        if (isSure) {
            var val = $("#txtprice").val();
            $.ajax({
                type: "POST",
                url: "../services/MallWebService.asmx/updateProPriceBySeriseId",
                data: "{pkid:" + obj + ",val:'" + val + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(msg) {
                    //                if (msg.d == 1) {
                    //                    $("更新成功");
                    //                }
                    //                else {
                    //alert("更新失败,请重试");
                    alert(msg.d + "条记录被更新");
                    //                }
                }
            });
        }
    }
}



function UpdatePrice(obj) {
    var val = $("#openprice").val();
    var text = $("#openprice option:selected").text();
    if (val == 999) {
        alert("请选择报价类型");
    }
    else {
        $.ajax({
            type: "POST",
            url: "../services/MallWebService.asmx/updateProPriceType",
            data: "{pkid:" + obj + ",val:" + val + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                if (msg.d == 1) {
                    $("#p" + obj).text(text);
                    $("#c03tip").fadeOut();
                }
                else {
                    alert("更新失败,请重试");
                }
            }
        });
    }

}
function UpdateVisible(obj) {
    var val = $("#openvisible").val();
    var text = $("#openvisible option:selected").text();
    if (val == 999) {
        alert("请选择产品状态");
    }
    else {
        $.ajax({
            type: "POST",
            url: "../services/MallWebService.asmx/updateProVisibleType",
            data: "{pkid:" + obj + ",val:" + val + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                if (msg.d == 1) {
                    $("#v" + obj).text(text);
                    $("#c04tip").fadeOut();
                }
                else {
                    alert("更新失败,请重试");
                }
            }
        });
    }

}
function UpdateImg(obj) {
    var val = $("iframe").contents().find("#SubmitUpload").html();
    var i = val.lastIndexOf(".");
    var ext = val.substring(i + 1);
    if (val == "") {
        alert("请上传图片");
    }
    else if (ext != "jpg" || i < 0) {
        alert("只能上传jpg文件!!");
    }
    else {
        var tag = $(obj).attr("id");
        $.ajax({
            type: "POST",
            url: "../services/MallWebService.asmx/updateMallseriseImg",
            data: "{pkid:" + tag.replace("uploadPanel_", "") + ",img:'" + val + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                if (msg.d == 1) {
                    $("#" + tag).html("<div class='img'><img style='height:50px;width:178px;' src='" + val + "'/></div>");
                    $("#c04tip").fadeOut();
                }
                else {
                    alert("添加失败,请重试");
                }
            }
        });

    }
}
function Close() {
    //$("#c04tip").fadeOut();
    window.location.reload();
}

