

var pageLinkUrl = "";
var ajaxUrl = "user_orderEditService.aspx";
var ffAlertTxt = '您的输入含有非法字符，请检查！';


window.onresize = function() { reSizeBackWindow() }
//控制分块闭合
function setPartState(obj) {
    var setObj = obj.parentNode.parentNode.parentNode.parentNode.parentNode;
    if (setObj.nextSibling.style.display == '') {
        obj.innerHTML = '↓';
        setObj.nextSibling.style.display = 'none';
    } else {
        obj.innerHTML = '↑';
        setObj.nextSibling.style.display = '';

    }
}
//修改用户的收货人信息
function editOrderAddr(orderId, obj) {

    var runCode = "var p=new getPos(curBtn);showMessageBox(backValue,p,670,true);setDrag(g('mesTitle'),g('mesWindow'));";
    setAjax_runCodeAndBtn("action=editOrderAddr&orderUserId=" + orderId, obj, runCode);
}
//更新收货人地址信息
function saveOrderAddr(obj) {
    g("submitWaitInfo").innerHTML = '';
    if (!check_con()) {
        showAlert("<span class='errorInfo'>您的输入有误，请检查！</span>", g("submitWaitInfo"), "");
        return;
    }

    //收货人信息
    var x = getFormXmlBySign('consignee_') + '<addressAll><![CDATA[' + g('consigneeShow_addressName').innerHTML + g('consignee_address').value + ']]></addressAll>';

    showWaitInfoOnInner("正在提交信息，请等待！", g("submitWaitInfo"));
    var runCode = "alert('订单收货人信息修改成功！');closeWindow();reloadPage();";
    setAjax("POST", "action=saveOrderAddr", '<table>' + x + '</table>', true, obj, null, runCode);

}
//保存收货人信息时的检查
function check_con() {
    var res = true;
    if (!check_addressName()) { res = false; }
    //if(!check_con_area()){res=false;}
    if (!check_address()) { res = false; }
    if (!check_postcode()) { res = false; }
    if (!check_phone()) { res = false; }
    if (!check_message()) { res = false; }
    if (!check_email()) { res = false; }

    return res;
}

//修改用户的优惠券信息
function editOrderCoupon(orderId, obj) {

    var runCode = "var p=new getPos(curBtn);showMessageBox(backValue,p,730,true);setDrag(g('mesTitle'),g('mesWindow'));";
    setAjax_runCodeAndBtn("action=editOrderCoupon&orderUserId=" + orderId, obj, runCode);
}




//重新读取页面信息
function reloadPage() {
    window.location = window.location.pathname + window.location.search; //+"#linkEditOrder"
}
//显示提示
function showAlert_shoppingCart(message, obj) {
    alert(message);
}
//---------------------------------订单信息填写---------------------------


//检查收货人姓名
function check_addressName() {
    removeAlert('addressName_empty');
    removeAlert('addressName_ff');

    var pNode = g('consignee_addressName').parentNode;
    if (isEmpty('consignee_addressName')) { showAlert('收货人姓名不能为空！', pNode, 'addressName_empty'); return false; }
    if (!is_forbid(g('consignee_addressName').value)) { showAlert(ffAlertTxt, pNode, 'addressName_ff'); return false; }
    return true;
}
//检查省市区
function check_con_area() {
    removeAlert('area_check');
    if (g('consignee_arae').childNodes[2].value == '-22') {
        showAlert('*地区信息不完整！', g('consignee_arae').parentNode, 'area_check')
        return false;
    }
    return true;
}
//检查收货人地址
function check_address() {
    removeAlert('address_empty');
    removeAlert('address_ff');

    var pNode = g('consignee_address').parentNode;
    if (isEmpty('consignee_address')) { showAlert('收货地址不能为空！', pNode, 'address_empty'); return false; }
    if (!is_forbid(g('consignee_address').value)) { showAlert(ffAlertTxt, pNode, 'address_ff'); return false; }
    return true;
}
//检查邮政编码
function check_postcode() {
    removeAlert('postcode_ff');
    if (g('consignee_postcode').value != '') {
        var pNode = g('consignee_postcode').parentNode;
        var myReg = /(^\s*)\d{6}(\s*$)/;
        if (!myReg.test(g('consignee_postcode').value)) { showAlert('邮编格式不正确', pNode, 'postcode_ff'); return false; }
    }
    return true;
}
//检查联系电话
function check_phone() {
    removeAlert('phone_empty');
    removeAlert('phone_ff');

    var pNode = g('consignee_phone').parentNode;
    if (isEmpty('consignee_phone')) { showAlert('联系电话不能为空！', pNode, 'phone_empty'); return false; }
    var myReg = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
    if (!myReg.test(g('consignee_phone').value)) { showAlert('联系电话格式不正确', pNode, 'phone_ff'); return false; }
    return true;
}
//检查手机号
function check_message() {
    removeAlert('message_ff');
    if (g('consignee_message').value != '') {
        var pNode = g('consignee_message').parentNode;
        var myReg = /(^\s*)(((\(\d{3}\))|(\d{3}\-))?13\d{9}|15[8903]\d{8})(\s*$)/;
        if (!myReg.test(g('consignee_message').value)) { showAlert('手机号格式不正确', pNode, 'message_ff'); return false; }
    }
    return true;
}
//检查Email
function check_email() {
    var iSign = 'email';
    removeAlert(iSign + '_ff');
    if (g('consignee_' + iSign).value != '') {
        var pNode = g('consignee_' + iSign).parentNode;
        var myReg = /(^\s*)\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*(\s*$)/;
        if (!myReg.test(g('consignee_' + iSign).value)) { showAlert('电子邮件格式不正确', pNode, iSign + '_ff'); return false; }
    }
    return true;
}




//----------------------------优惠券--------------------------
function showTicket() {
    if (g('part_ticket').style.display == 'none') {
        g('part_ticket').style.display = '';
    } else {
        g('part_ticket').style.display = 'none';
    }
}
//添加实体卷
function addShiTiCoupon(obj) {
    var couponKey = g('txtInputKey').value;
    if (couponKey == "") { alert('请输入实体卷密码！'); return; }
    showWaitInfo('正在提交实体卷信息，请等待。。。', obj);
    setAjax_getResAndRunCode("action=addShiTiCoupon&key=" + couponKey, "shitiList", "g('txtInputKey').value='';showOrderInfo();");
}
//清空实体卷
function clearShiTiCoupon(obj) {
    showWaitInfo('正在清空实体卷信息，请等待。。。', obj);
    setAjax_getResAndRunCode("action=clearShiTiCoupon", "shitiList", "showOrderInfo()");
}
//删除实体卷
function removeShiTi(id, obj) {
    showWaitInfo('正在删除实体卷信息，请等待。。。', obj);
    setAjax_getResAndRunCode("action=removeShiTi&id=" + id, "shitiList", "showOrderInfo()");
}
//添加电子京卷
function selectJing(obj, couponKey) {
    var runCode = "if(backValue=='ok'){";
    runCode += "showOrderInfo();";
    runCode += "}else{";
    runCode += "alert(backValue.substr(7));";
    runCode += "curBtn.checked=!curBtn.checked;";
    runCode += "}";
    runCode += "setDianZiStyle();";
    var actionStr = (!obj.checked) ? "removeDianZiCoupon" : "addDianZiCoupon";
    setAjax_runCodeAndBtn("action=" + actionStr + "&key=" + couponKey + "&cType=jing", obj, runCode);
}

var selectedDong;
//选择东卷
function selectDong(obj, couponKey) {
    var runCode = "if(backValue=='ok'){";
    runCode += "showOrderInfo();";
    //清空实体卷
    runCode += "g('shitiList').innerHTML='';";
    //清空电子京卷
    runCode += "var sList=document.getElementsByName('jingCheckBox');";
    runCode += "for(var i=0;i<sList.length;i++)";
    runCode += "{sList[i].checked=false;}";

    runCode += "if(selectedDong==curBtn){curBtn.checked=false;selectedDong=null;}else{selectedDong=curBtn;}";
    runCode += "}else{";
    runCode += "alert(backValue.substr(7));";
    runCode += "if(selectedDong!=null){selectedDong.checked=true;}else{curBtn.checked=false;}";
    runCode += "}";
    runCode += "setDianZiStyle();";
    var actionStr = (selectedDong == obj) ? "removeDianZiCoupon" : "addDianZiCoupon";
    setAjax_runCodeAndBtn("action=" + actionStr + "&key=" + couponKey + "&cType=dong", obj, runCode);
}
function setDianZiStyle() {
    var sList = document.getElementsByName('jingCheckBox');
    for (var i = 0; i < sList.length; i++) {
        if (sList[i].checked) { sList[i].parentNode.className = 'couponSelect'; }
        else { sList[i].parentNode.className = ''; }
    }
    sList = document.getElementsByName('rbtnlDong');
    for (var i = 0; i < sList.length; i++) {
        if (sList[i].checked) { sList[i].parentNode.className = 'couponSelect'; }
        else { sList[i].parentNode.className = ''; }
    }
}

//初始化东卷选择
function setDongSelected() {
    var dongList = document.getElementsByName('rbtnlDong');
    for (var i = 0; i < dongList.length; i++) {
        if (dongList[i].checked) { selectedDong = dongList[i]; return; }
    }
}
//将实体券转为电子券
function changeShitiToDianZi(couponId) {
    if (confirm('确定转化吗？')) {
        setAjax_runCode("action=changeShitiToDianZi&couponId=" + couponId, "reShowCouponInfo();");
    }
}
//刷新券的显示
function reShowCouponInfo() {
    setAjax_getRes("action=reShowCouponInfo", "couponInfoShow");
}

//-------------------订单备注-------------------
function check_remark() {
    removeAlert('remark_Ff');
    var pNode = g('remark_remark').parentNode;
    if (!is_forbid(g('remark_remark').value)) { showAlert(ffAlertTxt, pNode, 'remark_Ff'); return false; }
    return true;
}

//-------------------订单信息-------------------

function showOrderInfo() {
    setAjax_getRes("action=showOrderInfo", "part_info");
}
function useBalance(obj) {
    setAjax_getRes("action=useBalance&isUsed=" + ((obj.checked) ? "1" : "0"), "part_info");
}

//-------------------------提交订单信息-----------------
//-------------------------提交订单信息-----------------

function submitOrder(obj) {

    g("submitWaitInfo").innerHTML = '';
    showWaitInfoOnInner("正在提交订单，请等待！", g("submitWaitInfo"));
    setAjax_runCode("action=submitOrder", "alert('订单修改成功！');closeWindow();reloadPage();");

}







