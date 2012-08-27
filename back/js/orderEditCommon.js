
var isIe = (window.ActiveXObject) ? true : false;
var pageLinkUrl = "";
var ajaxUrl = "";
var isReloadPage = false;
function g(nodeId) {
    return document.getElementById(nodeId);
}
function setInnerHtml(objName, dcontent) {
    if (g(objName) != null)
    { g(objName).innerHTML = dcontent; }
}
function getPos(obj) {
    this.Left = 0;
    this.Top = 0;
    this.Height = obj.offsetHeight;
    this.Width = obj.offsetWidth;
    var tempObj = obj;
    while (tempObj.tagName.toLowerCase() != "body" && tempObj.tagName.toLowerCase() != "html") {
        this.Left += tempObj.offsetLeft;
        this.Top += tempObj.offsetTop;
        tempObj = tempObj.offsetParent;
    }
}
function getNullPos() {
    return { Left: 0, Top: 0 }
}
function getMousePos(ev) {
    if (ev.pageX || ev.pageY) {
        return { Left: ev.pageX, Top: ev.pageY };
    }
    return {
        Left: ev.clientX + document.documentElement.scrollLeft, Top: ev.clientY + document.documentElement.scrollTop
    };
}
function clearWaitInfo() {
    var newd = g("waitInfo");
    if (newd != null) {
        newd.parentNode.removeChild(newd);
    }
}
function reSizeBackWindow() {
    var bWidth = parseInt(document.documentElement.scrollWidth);
    var bHeight = parseInt(document.documentElement.scrollHeight);
    if (g('back') != null) {
        g('back').style.width = bWidth + "px";
        g('back').style.height = bHeight + "px";
    }
}
function setSelectState(state) {
    var objl = document.getElementsByTagName('select');
    for (var i = 0; i < objl.length; i++) {
        objl[i].style.visibility = state;
    }
}
function showMessageBox(content, pos, wWidth, isModel) {
    closeWindow();
    var bWidth = parseInt(document.documentElement.scrollWidth);
    var bHeight = parseInt(document.documentElement.scrollHeight);
    if (isModel) {
        if (isIe) { setSelectState('hidden'); }
        var back = document.createElement("div");
        back.id = "back";
        var styleStr = "top:0px;left:0px;position:absolute;background:#cccccc;width:" + bWidth + "px;height:" + bHeight + "px;";
        styleStr += (isIe) ? "filter:alpha(opacity=40);" : "opacity:0.4;";
        back.style.cssText = styleStr;
        document.body.appendChild(back);
    }

    var mesW = document.createElement("div");
    mesW.id = "mesWindow";
    mesW.innerHTML = content;
    //		if(bWidth-pos.Left<wWidth)
    //		{
    //		   styleStr="left:"+(pos.Left-wWidth)+"px;";
    //		}
    //		else
    //		{
    //		   styleStr="left:"+(pos.Left)+"px;";
    //		}
    styleStr = "left:" + (bWidth - wWidth) / 2 + "px;"
    styleStr += "top:" + pos.Top + "px;position:absolute;width:" + wWidth + "px;background:#fff;";
    mesW.style.cssText = styleStr;
    document.body.appendChild(mesW);

}
function closeWindow() {
    if (g('back') != null) {
        g('back').parentNode.removeChild(g('back'));
    }
    if (g('mesWindow') != null) {
        g('mesWindow').parentNode.removeChild(g('mesWindow'));
    }
    if (isReloadPage) {
        reloadPage();
        isReloadPage = false;
    }
    if (isIe) { setSelectState(''); }
}
//页面定位
function setScroll(objId) {
    if (g(objId)) {

        var objPos = new getPos(g(objId));
        scroll(0, objPos.Top);
    }
}
//ajax通用方法
function createXmlHttp() {
    var ajaxObj = null;
    if (window.ActiveXObject) {
        ajaxObj = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        if (window.XMLHttpRequest) {
            ajaxObj = new XMLHttpRequest();
        }
    }
    return ajaxObj;
}
function setAjax_getRes(requst, resObjId) {
    setAjax("GET", requst, null, false, null, resObjId, null);
}
function setAjax_getResAndBtn(requst, curBtn, resObjId) {
    setAjax("GET", requst, null, false, curBtn, resObjId, null);
}
function setAjax_runCode(requst, runCode) {
    setAjax("GET", requst, null, false, null, null, runCode);
}
function setAjax_runCodeAndBtn(requst, curBtn, runCode) {
    setAjax("GET", requst, null, false, curBtn, null, runCode);
}
function setAjax_getResAndRunCode(requst, resObjId, runCode) {
    setAjax("GET", requst, null, false, null, resObjId, runCode);
}
function setAjax(postType, requst, postXml, isXml, curBtn, resObjId, runCode) {

    if (curBtn != null) { curBtn.disabled = true; }
    var xmlHttp = createXmlHttp();
    xmlHttp.onreadystatechange = function() { backAjaxValue(xmlHttp, curBtn, resObjId, runCode) };
    if (postType == "GET") {

        xmlHttp.open(postType, pageLinkUrl + ajaxUrl + '?roid=' + Math.random() + '&' + requst);
        xmlHttp.send(null);
    } else {
        xmlHttp.open(postType, pageLinkUrl + ajaxUrl + '?roid=' + Math.random() + '&' + requst, true);
        if (!isXml) { xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); }
        xmlHttp.send(postXml);
    }
}
function backAjaxValue(xmlHttp, curBtn, resObjId, runCode) {

    if (xmlHttp.readyState == 4) {
        clearWaitInfo();
        if (curBtn != null) { curBtn.disabled = false; }
        if (xmlHttp.status == 200) {
            var backValue = xmlHttp.responseText;
            if (!checkErrorFromBackValue(backValue)) {
                return;
            }
            if (resObjId != null) {
                g(resObjId).innerHTML = xmlHttp.responseText;
            }
            if (runCode != null) {
                var backValue = xmlHttp.responseText;
                eval(runCode);
            }

        }
    }
}
function checkErrorFromBackValue(bakValue) {
    if (bakValue != null) {
        if (bakValue.indexOf('error_') == 0) {
            if (bakValue.length > 6)
            { bakValue = bakValue.substr(6); }
            else { bakValue = '程序发生了未知错误，请再次尝试！'; }
            alert(bakValue);
            return false;
        }
        return true;
    }
    return true;
}








function getFormXmlBySign(sign) {
    var xmlDoc = "";
    var eList = document.getElementsByTagName("input");
    for (var i = 0; i < eList.length; i++) {
        if (isDataControl(eList[i].id, sign)) {
            var columnName = getDataColumnName(eList[i].id, sign);
            if (eList[i].type == "checkbox" || eList[i].type == "radio") {
                if (eList[i].checked) {
                    xmlDoc += "<" + columnName + ">1</" + columnName + ">";
                } else
                { xmlDoc += "<" + columnName + ">0</" + columnName + ">"; }
            } else {

                xmlDoc += "<" + columnName + "><![CDATA[" + eList[i].value + "]]></" + columnName + ">";
                columnName = null;
            }
        }
    }
    eList = document.getElementsByTagName("select");
    for (var i = 0; i < eList.length; i++) {
        if (isDataControl(eList[i].id, sign)) {
            var columnName = getDataColumnName(eList[i].id, sign);
            xmlDoc += "<" + columnName + "><![CDATA[" + eList[i].value + "]]></" + columnName + ">";
            columnName = null;
        }
    }
    eList = document.getElementsByTagName("textarea");
    for (var i = 0; i < eList.length; i++) {
        if (isDataControl(eList[i].id, sign)) {
            var columnName = getDataColumnName(eList[i].id, sign);
            xmlDoc += "<" + columnName + "><![CDATA[" + eList[i].value + "]]></" + columnName + ">";
            columnName = null;
        }
    }
    return xmlDoc;
}
function getFormXml() {
    return getFormXmlBySign('t_');
}
function isDataControl(controlId, sign) { if (controlId.substring(0, sign.length) == sign) { return true; } else { return false; } }
function getDataColumnName(controlId, sign) { return controlId.substr(sign.length); }

//非法字符过滤
function is_forbid(temp_str) {
    temp_str = trimTxt(temp_str);
    temp_str = temp_str.replace('*', "@");
    temp_str = temp_str.replace('-', "@");
    temp_str = temp_str.replace('/', "@");
    temp_str = temp_str.replace('+', "@");
    temp_str = temp_str.replace('\'', "@");
    temp_str = temp_str.replace('\\', "@");
    temp_str = temp_str.replace('$', "@");
    temp_str = temp_str.replace('^', "@");
    temp_str = temp_str.replace('.', "@");
    temp_str = temp_str.replace('(', "@");
    temp_str = temp_str.replace(')', "@");
    temp_str = temp_str.replace(',', "@");
    temp_str = temp_str.replace(';', "@");
    temp_str = temp_str.replace('<', "@");
    temp_str = temp_str.replace('>', "@");
    temp_str = temp_str.replace('?', "@");
    temp_str = temp_str.replace('"', "@");
    temp_str = temp_str.replace('{', "@");
    temp_str = temp_str.replace('}', "@");
    temp_str = temp_str.replace('[', "@");
    temp_str = temp_str.replace(']', "@");
    var forbid_str = new String('@,#,%,!,~,&');
    var forbid_array = new Array();
    forbid_array = forbid_str.split(',');
    for (i = 0; i < forbid_array.length; i++) {
        if (temp_str.search(new RegExp(forbid_array[i])) != -1)
            return false;
    }
    return true;
}
function checknumber(String) {
    var Letters = "1234567890";
    var i;
    var c;
    for (i = 0; i < String.length; i++) {
        c = String.charAt(i);
        if (Letters.indexOf(c) == -1) {
            return false;
        }
    }
    return true;
}
function trimTxt(txt) {
    return txt.replace(/(^\s*)|(\s*$)/g, "");
}
//检查是否为空
function isEmpty(inputId) {
    if (trimTxt(g(inputId).value) == '') { return true }
    return false;
}
//设置是否可显示
function setDisplay(nodeId, state) {
    if (g(nodeId) != null) { g(nodeId).style.display = state; }
}
//删除元素
function removeNode(nodeId) {
    if (g(nodeId) != null) { g(nodeId).parentNode.removeChild(g(nodeId)); }
}

//显示提示信息
function showAlert(info, obj, infoSign) {
    if (g(infoSign) != null) { return; }
    var newd = document.createElement("span");
    newd.id = infoSign;
    newd.className = 'alertInfo';
    newd.innerHTML = info;
    obj.appendChild(newd);
}
//删除提示信息
function removeAlert(infoSign) {
    if (g(infoSign) == null) { return; }
    g(infoSign).parentNode.removeChild(g(infoSign));
}
//显示等待信息
function showWaitInfo(info, obj) {
    try {
        if (obj == null) return;
        clearWaitInfo();
        var newd = document.createElement("span");
        newd.className = 'waitInfo';
        newd.id = 'waitInfo';
        newd.innerHTML = info;
        obj.parentNode.appendChild(newd);
    } catch (e) { }
}
function showWaitInfoOnInner(info, obj) {
    try {
        if (obj == null) return;
        clearWaitInfo();
        var newd = document.createElement("span");
        newd.className = 'waitInfo';
        newd.id = 'waitInfo';
        newd.innerHTML = info;
        obj.innerHTML = '';
        obj.appendChild(newd);
    } catch (e) { }
}
function clearWaitInfo() {
    try {
        if (g('waitInfo') != null) { g('waitInfo').parentNode.removeChild(g('waitInfo')); }
    } catch (e) { }
}
//设置radio的默认值
function setRadioDefaultItem(radioName, valueId) {
    var rList = document.getElementsByName(radioName);
    if (rList.length == 0) { return; }
    for (var i = 0; i < rList.length; i++) {
        if (rList[i].checked) {
            return;
        }
    }
    rList[0].click();
    g(valueId).value = rList[0].value;
}





//Drag
var dragObj;
var isDraging = false;
var changeX = 0;
var changeY = 0;
function StartDrag(eventTag) {
    var ev = eventTag || window.event;
    isDraging = true;
    dragObj.style.position = 'absolute';
    var pos = new getPos(dragObj);
    dragObj.style.left = pos.Left + "px";
    dragObj.style.top = pos.Top + "px";
    try {
        if (isIe) { dragObj.style.filter = 'alpha(opacity=80)'; }
        else { dragObj.style.opacity = 0.8; }
    } catch (e) { }
    changeX = parseInt(document.body.scrollLeft) + parseInt(ev.clientX) - parseInt(dragObj.style.left);
    changeY = parseInt(document.body.scrollTop) + parseInt(ev.clientY) - parseInt(dragObj.style.top);
    if (!document.all) {
        document.addEventListener('mousemove', Draging, false);
    } else {
        document.attachEvent('onmousemove', Draging);
    }
}
function Draging(eventTag) {
    if (dragObj == null) { return; }
    var ev = eventTag || window.event;
    if (!isDraging) {
        return;
    }
    dragObj.style.left = (parseInt(document.body.scrollLeft) + parseInt(ev.clientX) - changeX) + 'px';
    dragObj.style.top = (parseInt(document.body.scrollTop) + parseInt(ev.clientY) - changeY) + 'px';
    if (parseInt(dragObj.style.top) < 0) { dragObj.style.top = '0px'; }
}
function EndDrag() {
    isDraging = false;
    try {
        if (isIe) { dragObj.style.filter = 'alpha(opacty=100)'; }
        else { dragObj.style.opacity = 1; }
    } catch (e) { }

    if (!document.all) {
        document.removeEventListener('mousemove', Draging, true);
    } else {
        document.detachEvent('onmousemove', Draging);
    }
}
//设定拖拽对象 objTag:引发拖拽的对象，obj:要移动的对象
function setDrag(objTag, obj) {
    dragObj = obj;
    objTag.onmousedown = StartDrag;
    objTag.onmouseup = EndDrag;
}