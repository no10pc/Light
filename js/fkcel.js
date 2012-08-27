//公共的函数
function UrlEncode(str)
{
	str = escape(str);
	return str;
}

//justify a string is integer or not
function IsInt(objStr,sign,zero)
{
    var reg;    
    var bolzero;    
    if(Trim(objStr)=="")
    {
        return false;
    }
    else
    {
        objStr=objStr.toString();
    }    
    if((sign==null)||(Trim(sign)==""))
    {
        sign="+-";
    }
    if((zero==null)||(Trim(zero)==""))
    {
        bolzero=false;
    }
    else
    {
        zero=zero.toString();
        if(zero=="0")
        {
            bolzero=true;
        }
        else
        {
            alert("检查是否包含0参数，只可为(空、0)");
        }
    }
    switch(sign)
    {
        case "+-":
            //整数
            reg=/(^-?|^\+?)\d+$/;            
            break;
        case "+": 
            if(!bolzero)           
            {
                //正整数

               reg=/^\+?[0-9]*[1-9][0-9]*$/;
            }
            else
            {
                //正整数+0
                //reg=/^\+?\d+$/;
                reg=/^\+?[0-9]*[0-9][0-9]*$/;
            }
            break;
        case "-":
            if(!bolzero)
            {
                //负整数

                reg=/^-[0-9]*[1-9][0-9]*$/;
            }
            else
            {
                //负整数+0
                //reg=/^-\d+$/;
               reg=/^-[0-9]*[0-9][0-9]*$/;
            }            
            break;
        default:
            alert("检查符号参数，只可为(空、+、-)");
            return false;
            break;
    }

    var r=objStr.match(reg);
    if(r==null)
    {
        return false;
    }
    else
    {        
       return true;     
   }
}

// Sets cookie values. Expiration date is optional 

function setCookie(name, value, expire)
{ 
  document.cookie = name + "=" + escape(value) 
  + ((expire == null) ? "" : ("; expires=" + expire.toGMTString())) 
} 

function getCookie(Name)
{ 
  var search = Name + "=" 
  if (document.cookie.length > 0) { // if there are any cookies 
     offset = document.cookie.indexOf(search) 
     if (offset != -1) { // if cookie exists 
        offset += search.length 
        // set index of beginning of value 
        end = document.cookie.indexOf(";", offset) 
        // set index of end of cookie value 
        if (end == -1) 
           end = document.cookie.length 
        return unescape(document.cookie.substring(offset, end)) 
     } 
  } 
} 

function deleteCookie(name,path,domain)
{ 
   if (getCookie(name)) document.cookie = name + "=" + 
      ( (path) ? ";path=" + path : "") + 
      ( (domain) ? ";domain=" + domain : "") + 
      ";expires=Thu, 01-Jan-70 00:00:01 GMT"; 
} 


function LTrim(str)
{
    var whitespace = new String(" \t\n\r");
    var s = new String(str);

    if (whitespace.indexOf(s.charAt(0)) != -1)
    {
        var j=0, i = s.length;
        while (j < i && whitespace.indexOf(s.charAt(j)) != -1)
        {
            j++;
        }
        s = s.substring(j, i);
    }
    return s;
}


function RTrim(str)
{
    var whitespace = new String(" \t\n\r");
    var s = new String(str);
    if (whitespace.indexOf(s.charAt(s.length-1)) != -1)
    {
        var i = s.length - 1;
        while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1)
        {
            i--;
        }
        s = s.substring(0, i+1);
    }
    return s;
}


function Trim(str)
{
   return RTrim(LTrim(str));
}

//有用的函数

//不明的函数
function gowhere1(formname)
{
	var url;
	if (formname.myselectvalue.value == "0")
	{
		url = "http://www.baidu.com/baidu";
		document.search_form1.tn.value = "baidu";
		formname.method = "get";
	}
	if (formname.myselectvalue.value == "1")
	{
		url = "http://mp3.baidu.com/m";
		document.search_form1.tn.value = "baidump3";
		document.search_form1.ct.value = "134217728";
		document.search_form1.lm.value = "-1";
	}
	
	if (formname.myselectvalue.value == "4")
	{ 
		document.search_form1.tn.value = "news";
		document.search_form1.cl.value = "2";
		document.search_form1.rn.value = "20";
		url = "http://news.baidu.com/ns";  
	} 
	if (formname.myselectvalue.value == "5")
	{ 
		document.search_form1.tn.value = "baiduiamge";
		document.search_form1.ct.value = "201326592";
		document.search_form1.cl.value = "2";
		document.search_form1.lm.value = "-1";  
		url = "http://image.baidu.com/i";  
	}
	if (formname.myselectvalue.value == "6")
	{ 
		url = "http://post.baidu.com/f";
		document.search_form1.tn.value = "baiduPostSearch";
		document.search_form1.ct.value = "352321536";
		document.search_form1.rn.value = "10";
		document.search_form1.lm.value = "65536";  
	} 	
	formname.action = url;
	return true;
}

function g_baidu(formname)
{
	var url = "http://www.baidu.com/baidu";
	if (formname.s[1].checked)
	{
		formname.ct.value = "2097152";
	}
	else
	{
		formname.ct.value = "0";
	}
	formname.action = url;
	return true;
}

String.prototype.getBytes = function()
{
    var cArr = this.match(/[^\x00-\xff]/ig);
    return this.length + (cArr == null ? 0 : cArr.length);
}

// Initializes a new instance of the StringBuilder class
// and appends the given value if supplied
function StringBuilder(value)
{
    this.strings = new Array("");
    this.Append(value);
}

// Appends the given value to the end of this instance.
StringBuilder.prototype.Append = function(value)
{
    if (value)
    {
        this.strings.push(value);
    }
}

// Clears the string buffer
StringBuilder.prototype.clear = function ()
{
    this.strings.length = 1;
}

// Converts this instance to a String.
StringBuilder.prototype.ToString = function ()
{
    return this.strings.join("");
}

// see http://groups.google.com/group/comp.lang.javascript/browse_frm/thread/23ddbc2448fef853/4a0123c93965eef5?lnk=st&q=XHTML+scrollTOP&rnum=7&hl=zh-CN#4a0123c93965eef5
function getScrollTop(target)
{
    if(target==null)
        target = window;
    var doc = target.document;
    var ret = (typeof doc.compatMode != 'undefined' && doc.compatMode != 'BackCompat')
        ? doc.documentElement.scrollTop
        : doc.body.scrollTop;
    return ret;
}
        
function getScrollLeft(target)
{
    if(target==null)
        target = window;
    var doc = target.document;
    var ret = (typeof doc.compatMode != 'undefined' && doc.compatMode != 'BackCompat')
        ? doc.documentElement.scrollLeft
        : doc.body.scrollLeft;
    return ret;
}



function fkcelResizeTheme()
{
	var panel = document.getElementById('fkcelAspectPanel');
	if(panel==null)
	{
		panel = document.getElementById('fkcelAspectPanelResize');
		if(panel==null)
		return;
	}
	var aspects = panel.childNodes;	
	var div = document.getElementById('fkcelAspectPanelDiv');
	if(div==null)
	div = panel;
	
	var divHeight = document.getElementById('fkcelAspectPanelHeight');
	if(divHeight==null)
	{
		divHeight = document.createElement('div');
		divHeight.id = 'fkcelAspectPanelHeight';
		div.insertBefore(divHeight, ((aspects.length==0) ? null : aspects[0]));
	}
	divHeight.style.height = '0px';
	
	var minTop = null;
	try { minTop = Fkcel_ObjectTop(document.getElementById('spanThemeBegin')) - Fkcel_ObjectTop(panel); } catch(e) {}
	
	var height = 200; //panel.offsetHeight;
	for(var i=0; i<aspects.length; i++)
	{
		var one = aspects[i];
		if(minTop!=null && minTop<0 && one.style.pixelTop < minTop)
		one.style.top = minTop;
		if(one.offsetTop + one.offsetHeight + 0 > height)
		height = one.offsetTop + one.offsetHeight + 0;
	}	
	//div.style.pixelHeight = height;	
	divHeight.style.height = height;
	
	if(document.getElementById('spanMasterTemplateBackgroundBody')!=null)
	{
		var spanBg = document.getElementById('spanMasterRepeat');
		var index1 = spanBg.style.backgroundImage.indexOf('.');
		var index2 = spanBg.style.backgroundImage.indexOf(')');
		var extName = spanBg.style.backgroundImage.substr(index1+1, index2-index1-1);
		
		var bodyHeight = document.getElementById('tdMasterTemplateBackgroundBody').offsetHeight;
		var url = 'url(_m_masterpagebackground_body_' + bodyHeight + "." + extName + ')';
		if(spanBg.style.backgroundImage != url)
		{
			spanBg.style.backgroundImage = url;
		}
	}
}

function ShowModalDialogInFrame(Url,arg,post)
{
	var ret;	
	if(arg!=null)
	{
    	var now = new Date();
	    Url = UrlEncode(Url);
	    var isPost = (post!=null && post==true) ? '&postdialogarguments=1' : '';
    	ret = window.showModalDialog(
	    	"~/web/modaldialoginframe.aspx?t="+now.toTimeString()+ isPost + "&url=" + Url,
		    arg,
		    "unadorned:1; dialogWidth:1px; dialogHeight:1px; status:0; resizable:1");
    }
    else
    {
        var dialog = "~/web/modaldialoginframe2.aspx?13";
        try
        {
        if(window.location.href.substr(window.location.href.lastIndexOf('index.html')-6,7).toLocaleLowerCase()=='index-23.html')
            dialog = '..' + dialog.substr(1);
        } catch(e) {}
    	ret = window.showModalDialog(
    	    dialog,
	        Url,
	        "unadorned:1; dialogWidth:1px; dialogHeight:1px; status:0; resizable:1");
    }
	
	// Modified by yifan at 2005-11-28
	// If window return an object, it might cause an unknown exception
	// right in the comparation ret=="____fkcel_closeforlogin".
	try
	{	
	    if(ret!=null && ret=="____fkcel_closeforlogin")
	    {
	        Url = window.location.href;
	        window.navigate("~/web/login.aspx?ReturnUrl=" + Url);
	        ret = null;
	    }
	}
	catch(e)
	{
	}
	
	return ret;
}


function centerSize(w,h)
{
	if(window.location.href.indexOf("noresize")!=-1)
		return;

    var sLeft = (window.screen.availWidth - w) / 2 + "px";
    var sTop = (window.screen.availHeight - h) / 2 + "px";
    var sWidth = w + "px";
    var sHeight = h + "px";

    dialogLeft = sLeft;
    dialogWidth = sWidth;
    dialogTop = sTop;
    dialogHeight = sHeight;
}

function removeOptions(obj)
{
	var len = obj.options.length;
	for(var i=0;i<len;i++)
	{
		obj.options.remove(0);
	}
}
function AddToCar(SiteId,PageId,StandardInputName)
{
	ShowOrderCar(SiteId);
}

function ShowOrderCar()
{
	window.alert("点击这里，将显示购物车。");
}

function XmlDoc(){
  var tXmlDoc = false;
  if (window.ActiveXObject){
      var tMsXmlDomType = [/*"Msxml2.DOMDocument.5.0",*/ "Msxml2.DOMDocument.4.0", "Msxml2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"];
	  for(var i=0;i<tMsXmlDomType.length;i++){
	    try{
		  tXmlDoc = new ActiveXObject(tMsXmlDomType[i]);
		  tXmlDoc.setProperty("SelectionLanguage", "XPath");
		  break;
	    }catch(ex){}
	  }	
  }else if(document.implementation && document.implementation.createDocument){
    tXmlDoc = document.implementation.createDocument("","",null);         
	if(!tXmlDoc.load){  // for safari
	  tXmlDoc.hp = new XMLHttpRequest();
	  tXmlDoc.hp.hpOwner = tXmlDoc;
	  tXmlDoc.hp.load = function(sUrl){
	    try{ 
		  this.open("GET", sUrl, this.async);
		  this.send(null);	 
		}catch(ex){
		  throw "you can't connect the page using different domain,if you not config the Server-Side code";
		}   		     		
		if (this.readyState == 4){
		  var _result = this.responseXML;
		  while (this.hpOwner.hasChildNodes())
			 this.hpOwner.removeChild(this.hpOwner.lastChild);           
		  for (var i = 0; i < _result.childNodes.length; i++) {
			 this.hpOwner.appendChild(this.hpOwner.importNode(_result.childNodes[i], true));
		  }
		}		
	  }	
	  tXmlDoc.load = function(sUrl){
	  	tXmlDoc.hp.load(sUrl);
	  }
	  tXmlDoc.selectNodes = function(sXPath){// tagName/[@]
	    //var _all = sXPath.split("//")
	    this.getElementsByTagName();
	  }
	}    
  }
  if(!tXmlDoc){
	  throw ("Can not create xml doc object!");
  }
  return tXmlDoc;
}
function reloadPage()
{
	window.location.reload();
}

function reloadDialog()
{
	var url = window.location.href;
	if(url.indexOf("noresize=1")<0)
	{
		if(url.indexOf('?')==-1)
			url = url + '?';
		else
			url = url + '&';
		url = url + "noresize=1";
	}
	window.navigate(url);
}

var windowLoadedFuncArray = new Array();

function addWindowLoadedFunc(func)
{
    windowLoadedFuncArray[windowLoadedFuncArray.length] = func;
}

function windowLoaded()
{
    //window.alert('windowLoadedFuncArray.length=' + windowLoadedFuncArray.length);
    for(var i=0; i<windowLoadedFuncArray.length; i++)
    {
        var func = windowLoadedFuncArray[i];
        func();
    }
    bodyHeight= Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    annimations();
}

function Fkcel_ObjectLeft(o)
{
	var x = 0;
	while (o != null && o.tagName.toUpperCase()!="HTML")
	{
		
		if(o.tagName.toUpperCase()!="HTML" && o.style.position !="absolute")
	    {
	      x += o.offsetLeft;
	      x = x -o.scrollLeft;
		}
		o = o.offsetParent;
	}
	return x;
}

function Fkcel_ObjectTop(o)
{
	var y = 0;
	while (o != null && o.tagName.toUpperCase()!="HTML" )
	{
		
		if(o.tagName.toUpperCase()!="HTML")
	    {
	      y += o.offsetTop;
	      y = y -o.scrollTop;
		}
		o = o.offsetParent;
	}
	return y;
}

function getElementPos(el) 
{   
var ua = navigator.userAgent.toLowerCase(); 
var isOpera = (ua.indexOf('opera') != -1);
var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof      
// var el = document.getElementById(elementId);      
if(el.parentNode === null || el.style.display == 'none') 
{ 
  return false; 
}
var parent = null;
var pos = []; 
var box; 
if(el.getBoundingClientRect)    //IE     
{   
   box = el.getBoundingClientRect();
   var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
   var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
   return {x:box.left + scrollLeft, y:box.top + scrollTop}; 
}
else if(document.getBoxObjectFor)    // gecko     
{    
   box = document.getBoxObjectFor(el); 
   var borderLeft = (el.style.borderLeftWidth)?parseInt(el.style.borderLeftWidth):0; 
   var borderTop = (el.style.borderTopWidth)?parseInt(el.style.borderTopWidth):0;
	pos = [box.x - borderLeft, box.y - borderTop]; 
}     
else    // safari & opera     
{   
	pos = [el.offsetLeft, el.offsetTop]; 
	parent = el.offsetParent; 
	if (parent != el) 
	{   
	  while (parent) {  
		pos[0] += parent.offsetLeft; 
		pos[1] += parent.offsetTop;  
		parent = parent.offsetParent;
		} 
	 }        
	 if (ua.indexOf('opera') != -1 || ( ua.indexOf('safari') != -1 && el.style.position == 'absolute' )) 
	 {    
		pos[0] -= document.body.offsetLeft;pos[1] -= document.body.offsetTop;  
	 } 
  } 
  if (el.parentNode)
  { 
	parent = el.parentNode; 
  } 
  else 
  { 
	parent = null; 
  } 
  
  while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML')
  { // account for any scrolled ancestors         
  pos[0] -= parent.scrollLeft; 
  pos[1] -= parent.scrollTop;  
	  if (parent.parentNode) 
	  { parent = parent.parentNode; }
	  else { parent = null; } 
  } 
	return {x:pos[0], y:pos[1]
}; 
} 


function fkcelVoteOpenWin(opertype,openpath,voteguid)
{

  var frmvote = document.getElementById('frmvote_'+voteguid);
  
  if(frmvote == null) return;

 var radios =frmvote.getElementsByTagName("input");
 var selecvalue="";
 if(radios != null && radios.length > 0)
 {
     for(var i = 0 ;i<radios.length;i++)
     {
     if((radios[i].type=="radio" ||radios[i].type=="checkbox")&& radios[i].checked )
       {
       selecvalue=selecvalue+radios[i].value+"|";
       if(opertype==1)
         radios[i].checked = false;
       }
     }
     if(selecvalue != "")
       selecvalue=selecvalue.substr(0, selecvalue.length - 1); 
}  
if(opertype==1 && selecvalue=="" )
{
     alert('没有选择！');
     return false; 
 }
 window.open(openpath+"?t="+opertype+"&QuestionId="+voteguid+"&qContent="+selecvalue,"kk","top=200,left=300,width=450,height=300;toolbar=no, menubar=no,scrollbars=yes, resizable=yes,location=no, status=no");
 return false;    
}

function setFkcelCopyrightYear(item)
{
    setCopyrightYear(item, "2005");
}

function setCopyrightYear(item, startYear)
{
	if (item == null) return;
	if (item.constructor==String)
	{
	item = document.getElementById(item);
	}
	if (item == null) return;
	var thisYear = new Date();
	thisYear = thisYear.getYear().toString();
	if (thisYear == startYear)
	{
	item.innerHTML = startYear;
	}
	else
	{
	item.innerHTML = startYear + "-" + thisYear;
	}
}

function fkcelAddBookmark(title)
{
    if(title==null)
        title="Fkcel.cn我的空间";

  var url = document.location.href;
  if (window.sidebar)
  { 
    window.sidebar.addPanel(title, url,""); 
  }
  else if(document.all)
  {
    window.external.AddFavorite( url, title);
  }
  else if( window.opera && window.print )
  {
    return true;
  }
}

function fkcelSetCopy(_sTxt)
{
    try
    {
        clipboardData.setData('Text',_sTxt)
        window.alert('您已经把该网址（' + _sTxt +'）复制到系统剪贴板，您可以使用（Ctrl+V或鼠标右键）粘贴功能，通过QQ、MSN或其他聊天工具发送给您的朋友。');
    }
    catch(e)
    {
    }
}

//通用函数，将某个字符从通过逗号分割的字符串中移出
function RemoveStrFromIds(strIds,strCategoryId)
{
	 if(strIds.indexOf(","+strCategoryId+",")!=-1)
	 {
	   strIds = strIds.replace("," + strCategoryId + ",",",");	   
	 }
	 else if(strIds.indexOf(strCategoryId+",") == 0 )//第一个栏目
	 {
	   strIds  = strIds.replace(strCategoryId+",","");
	 }
	 else if(strIds.indexOf(","+strCategoryId)== (strIds.length - strCategoryId.length-1) && (strIds.length - strCategoryId.length-1)>-1)//最后一个
	 {
	   strIds = strIds.replace(","+strCategoryId,"");	  
	 }
	 else if(strIds.indexOf(strCategoryId)== 0 && strCategoryId.length==strIds.length)//只有一个
	 {	   
		strIds = "";
	 }	 
	 return strIds;
}
  
//判断一个字符串是否在另外一个字符串中
function IsIdInStrIds(id,strIds)
{
	var IsAuto = false;
	var arrIntAuto = strIds.split(",");
	var arrIntAutoLen = arrIntAuto.length;
	for(var i=0;i<arrIntAutoLen;i++)
	{	
		if(arrIntAuto[i] == id)
		{
			IsAuto = true;
			break;
		}
	}
	return IsAuto;
}
  
//替换字符串中的某个Id
function ReplaceId(strIds,newId,oldId)
{
	var arrIntAuto = strIds.split(",");
	var arrIntAutoLen = arrIntAuto.length;
	for(var i=0;i<arrIntAutoLen;i++)
	{	
		if(arrIntAuto[i] == oldId)
		{
			arrIntAuto[i] = newId;
			break;
		}
	}
	var newStrIds = "";
	for(var k=0;k<arrIntAutoLen;k++)
	{
		if(newStrIds!="")
		{
			newStrIds +=",";
		}
		newStrIds += arrIntAuto[k];
	}
	return newStrIds;
}
  

var DS_x,DS_y;

function dateSelector()  //构造dateSelector对象，用来实现一个日历形式的日期输入框。
{
  var myDate=new Date();
  this.year=myDate.getFullYear();  //定义year属性，年份，默认值为当前系统年份。
  this.month=myDate.getMonth()+1;  //定义month属性，月份，默认值为当前系统月份。
  this.date=myDate.getDate();  //定义date属性，日，默认值为当前系统的日。
  this.inputName='';  //定义inputName属性，即输入框的name，默认值为空。注意：在同一页中出现多个日期输入框，不能有重复的name！
  this.display=display;  //定义display方法，用来显示日期输入框。
  this.evalStr ='';
  this.docId ='0';
}

function display()  //定义dateSelector的display方法，它将实现一个日历形式的日期选择框。
{
var week=new Array('日','一','二','三','四','五','六');

document.write("<style type=text/css>");
document.write("  .ds_font td,span  { font: normal 12px 宋体; color: #000000; }");
document.write("  .ds_border  { border: 1px solid #000000; cursor: hand; background-color: #DDDDDD }");
document.write("  .ds_border2  { border: 1px solid #000000; cursor: hand; background-color: #DDDDDD }");
document.write("</style>");

document.write("<input style='border:solid 1px silver;border-right:none 0px white;width:85px;height:18px;'  id='txt_"+this.inputName+"' name='"+this.inputName+"' value='"+this.year+"-"+this.month+"-"+this.date+"' title='双击可进行编缉' ondblclick='this.readOnly=false;this.focus();' onblur='this.readOnly=true;' readonly>");
document.write("<img style='cursor:hand;' align='absmiddle' src='res/calendar.gif' onclick=\"this.nextSibling.style.display='block';\" onfocus=\"this.blur()\"/>");

document.write("<div style='position:absolute;display:none;text-align:center;width:0px;height:0px;overflow:visible' onselectstart='return false;'>");
document.write("  <div style='position:absolute;left:-60px;top:20px;width:142px;height:165px;background-color:#F6F6F6;border:1px solid #245B7D;' class=ds_font>");
document.write("    <table cellpadding=0 cellspacing=1 width=140 height=20 bgcolor=#CEDAE7 onmousedown='DS_x=event.x-parentNode.style.pixelLeft;DS_y=event.y-parentNode.style.pixelTop;setCapture();' onmouseup='releaseCapture();' onmousemove='dsMove(this.parentNode)' style='cursor:move;'>");
document.write("      <tr align=center>");
document.write("        <td width=12% onmouseover=this.className='ds_border' onmouseout=this.className='' onclick=subYear(this) title='减小年份'><<</td>");
document.write("        <td width=12% onmouseover=this.className='ds_border' onmouseout=this.className='' onclick=subMonth(this) title='减小月份'><</td>");
document.write("        <td width=52%><b>"+this.year+"</b><b>年</b><b>"+this.month+"</b><b>月</b></td>");
document.write("        <td width=12% onmouseover=this.className='ds_border' onmouseout=this.className='' onclick=addMonth(this) title='增加月份'>></td>");
document.write("        <td width=12% onmouseover=this.className='ds_border' onmouseout=this.className='' onclick=addYear(this) title='增加年份'>>></td>");
document.write("      </tr>");
document.write("    </table>");

document.write("    <table cellpadding=0 cellspacing=0 width=140 height=20 onmousedown='DS_x=event.x-parentNode.style.pixelLeft;DS_y=event.y-parentNode.style.pixelTop;setCapture();' onmouseup='releaseCapture();' onmousemove='dsMove(this.parentNode)' style='cursor:move;'>");
document.write("      <tr align=center>");
for(i=0;i<7;i++)
document.write("      <td>"+week[i]+"</td>");
document.write("      </tr>");
document.write("    </table>");

document.write("    <table cellpadding=0 cellspacing=2 width=140 bgcolor=#EEEEEE>");
for(i=0;i<6;i++)
{
document.write("    <tr align=center>");
for(j=0;j<7;j++)
  document.write("    <td width=10% height=16 onmouseover=if(this.innerText!=''&&this.className!='ds_border2')this.className='ds_border' onmouseout=if(this.className!='ds_border2')this.className='' onclick=getvalue(this,document.all('txt_"+this.inputName+"'))></td>");
document.write("    </tr>");
}
document.write("    </table>");

document.write("    <span style=cursor:hand onclick=this.parentNode.parentNode.style.display='none'>【关闭】</span>");
document.write("  </div>");
document.write("</div>");

dateShow(document.all("txt_"+this.inputName).nextSibling.nextSibling.childNodes[0].childNodes[2],this.year,this.month)
}

function subYear(obj)  //减小年份
{
  var myObj=obj.parentNode.parentNode.parentNode.cells[2].childNodes;
  myObj[0].innerHTML=eval(myObj[0].innerHTML)-1;
  dateShow(obj.parentNode.parentNode.parentNode.nextSibling.nextSibling,eval(myObj[0].innerHTML),eval(myObj[2].innerHTML))
}

function addYear(obj)  //增加年份
{
  var myObj=obj.parentNode.parentNode.parentNode.cells[2].childNodes;
  myObj[0].innerHTML=eval(myObj[0].innerHTML)+1;
  dateShow(obj.parentNode.parentNode.parentNode.nextSibling.nextSibling,eval(myObj[0].innerHTML),eval(myObj[2].innerHTML))
}

function subMonth(obj)  //减小月份
{
  var myObj=obj.parentNode.parentNode.parentNode.cells[2].childNodes;
  var month=eval(myObj[2].innerHTML)-1;
  if(month==0)
  {
    month=12;
    subYear(obj);
  }
  myObj[2].innerHTML=month;
  dateShow(obj.parentNode.parentNode.parentNode.nextSibling.nextSibling,eval(myObj[0].innerHTML),eval(myObj[2].innerHTML))
}

function addMonth(obj)  //增加月份
{
  var myObj=obj.parentNode.parentNode.parentNode.cells[2].childNodes;
  var month=eval(myObj[2].innerHTML)+1;
  if(month==13)
  {
    month=1;
    addYear(obj);
  }
  myObj[2].innerHTML=month;
  dateShow(obj.parentNode.parentNode.parentNode.nextSibling.nextSibling,eval(myObj[0].innerHTML),eval(myObj[2].innerHTML))
}

function dateShow(obj,year,month)  //显示各月份的日
{
  var myDate=new Date(year,month-1,1);
  var today=new Date();
  var day=myDate.getDay();
  var selectDate=obj.parentNode.parentNode.previousSibling.previousSibling.value.split('-');
  var length;
  switch(month)
  {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      length=31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      length=30;
      break;
    case 2:
      if((year%4==0)&&(year%100!=0)||(year%400==0))
        length=29;
      else
        length=28;
  }
  for(i=0;i<obj.cells.length;i++)
  {
    obj.cells[i].innerHTML='';
    obj.cells[i].style.color='';
    obj.cells[i].className='';
  }
  for(i=0;i<length;i++)
  {
    obj.cells[i+day].innerHTML=(i+1);
    if(year==today.getFullYear()&&(month-1)==today.getMonth()&&(i+1)==today.getDate())
      obj.cells[i+day].style.color='red';
    if(year==eval(selectDate[0])&&month==eval(selectDate[1])&&(i+1)==eval(selectDate[2]))
      obj.cells[i+day].className='ds_border2';
  }
}

function getvalue(obj,inputObj)  //把选择的日期传给输入框
{
  var myObj=inputObj.nextSibling.nextSibling.childNodes[0].childNodes[0].cells[2].childNodes;
  if(obj.innerHTML)
  {
    inputObj.value=myObj[0].innerHTML+"-"+myObj[2].innerHTML+"-"+obj.innerHTML;
    var arr = inputObj.id.split("_");
    var strFun ="setAnswerText_"+arr[1]+"("+arr[2]+",'"+inputObj.value+"')";
   
    eval(strFun);
  }
  inputObj.nextSibling.nextSibling.style.display='none';
  for(i=0;i<obj.parentNode.parentNode.parentNode.cells.length;i++)
    obj.parentNode.parentNode.parentNode.cells[i].className='';
  obj.className='ds_border2'
}

function dsMove(obj)  //实现层的拖移
{
  if(event.button==1)
  {
    var X=obj.clientLeft;
    var Y=obj.clientTop;
    obj.style.pixelLeft=X+(event.x-DS_x);
    obj.style.pixelTop=Y+(event.y-DS_y);
  }
}

function httpRequest(url)
{
	var objHttpRequest=null;
	try {
		objHttpRequest = new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {
		try {
		objHttpRequest = new ActiveXObject('Microsoft.XMLHTTP');
		} catch (E) {
		objHttpRequest = new XMLHttpRequest();
		}
	}
	
	if (objHttpRequest==null)
	return null;	
	objHttpRequest.open('Get', url, false);
	objHttpRequest.send(null);
	var retvalue = objHttpRequest.responseText;
	return retvalue;
}

function fkcelSelectAllCheckBox(boxName,isChecked)
{
  var chkFeedCates = document.getElementsByName(boxName);
   var len = chkFeedCates.length;
   for(var i=0;i<len;i++)
   {
     chkFeedCates[i].checked= isChecked;
   }
}

function getEmailFeed(url,aspectUID,act)
{
   var strEmail =document.getElementById("txtFeedEmail_"+aspectUID).value;
   if(strEmail=="")
   {
     alert("请输入电子邮件地址");
     return;
   }
   if(act=="add")
   {
       var strIds = "";
       var strFeederType = "";
       if(document.getElementById("selFeed_"+aspectUID)!=null)
       {
         strFeederType = document.getElementById("selFeed_"+aspectUID).value;
       }
       var chkFeedCates = document.getElementsByName("chkFeedCate_"+aspectUID);
       var len = chkFeedCates.length;
       for(var i=0;i<len;i++)
       {
         if(chkFeedCates[i].checked== true && chkFeedCates[i].value!="00")
         {
              if(strIds!="")
              {
                strIds+=",";
              }
              strIds += chkFeedCates[i].value;
         }
       }
       if(strIds=="")
       {
          alert("请选择新闻分类");
       }
       else
       {
         var strQuery = "";
         strQuery ="?act="+act+"&em="+escape(strEmail)+"&ft="+escape(strFeederType)+"&ids="+strIds;
         var strUrl = url+strQuery;
         
         var retValue = httpRequest(strUrl);
         var objDic = document.getElementById("divAspectFeed_"+aspectUID);
         objDic.innerHTML = retValue;
       }
   }
   else
   {	
	var strQuery ="?act="+act+"&em="+escape(strEmail);
	var strUrl = url+strQuery;
	var retValue = httpRequest(strUrl);
	var objDic = document.getElementById("divAspectFeed_"+aspectUID);
	objDic.innerHTML = retValue;
   }
}

function showColorDlg(obj,objHidden)
{
	var ret =ShowModalDialogInFrame("colorselector.htm",obj.style.backgroundColor);
	if(ret!=null)
	{
		if(ret =="#808080")
		{
			obj.style.backgroundColor="";
			objHidden.value ="";
		}
		else
		{
			obj.style.backgroundColor = ret;
			objHidden.value = ret;
		}    
	}
}


var arrFloats = new Array();
function annimations()
{
	var len = arrFloats.length;
	for(var i=0;i<len;i++)
	{
	  arrFloats[i].fkcelFlow();
	}
}

function getFirstParent(obj,tagName)
{
	var objtmp =obj.parentNode;
	while (objtmp !=null)
	{
		if(objtmp.tagName==tagName)
		{
		return objtmp;
		}
		else
		{
		objtmp = objtmp.parentNode;
		}
	}
}

var bodyHeight;
//�悬浮对象
function pensileElement(oTarget,delay,position,showClose)
{
	this.oHtml = oTarget;
	this.oHtml.refFloatElement = this;
	
	this.x = parseInt(this.oHtml.style.left);
	this.y = parseInt(this.oHtml.style.top);
	this.startY = parseInt(this.oHtml.style.top);
	
	this.position = position;
	this.fkcelFlow =function()
	{
	var obj = this;
	this.IntervalObj = setInterval(
	function()
	{
		var ns = (navigator.appName.indexOf("Netscape") != -1);
		if (obj.position=="fromtop")
		{
		var pY = parseInt(ns ? pageYOffset : getScrollTop(obj.ohtml));
		obj.y += (pY + obj.startY - obj.y)/4;
		}
		else
		{
		var pY = ns ? parseInt(pageYOffset) + parseInt(innerHeight) :parseInt(getScrollTop(obj.ohtml)) + parseInt(window.document.body.parentNode.clientHeight);
		obj.y += (pY - obj.startY - obj.y)/4;
		}		
		obj.oHtml.style.left = obj.x+"px";
		if(obj.y<bodyHeight)
		obj.oHtml.style.top = obj.y+"px";		
		}
		,delay
		)
		}
		if(showClose== true)
		{
		this.oHtml.onmouseover = function() 
		{
		showCloseSign(this);
		}
		this.oHtml.onmouseout = function() 
		{
		var closeSign = document.getElementById("fkcelCloseSign");
		if(closeSign!=null)
		{
		closeSign.style.display="none";
		}
		}
	}
	this.stopFlow = function()
	{
	}
}
 
//让某个对象由小变大
function smallToLargeElement(oTarget,delay,speed,showClose)
{
	this.oHtml = oTarget;
	this.oHtml.refFloatElement = this;
	this.width = parseInt(this.oHtml.width);
	this.height = parseInt(this.oHtml.height);
	this.fkcelFlow = function()
	{
	var obj = this;
	var x=0;
	var y=0;
	this.IntervalObj = setInterval(
	function()
	{
	x+=speed;
	y+=speed;
	if(x<obj.width)
	{
	obj.oHtml.style.width = x+"px";
	}
	if(y<obj.height)
	{
	obj.oHtml.style.height= y+"px";
	}
	
	if(y>obj.height && x>obj.width)
	{
	obj.stopFlow();
	}
	}
	,
	delay
	)
	}	
	this.stopFlow = function()
	{
	}
	if(showClose==true)
	{
	this.oHtml.onmouseover = function() 
	{
	showCloseSign(this);
	}
	this.oHtml.onmouseout = function() 
	{
	var closeSign = document.getElementById("fkcelCloseSign");
	if(closeSign!=null)
	{
	closeSign.style.display="none";
	}
	}
	}    
}
  
function showCloseSign(obj)
{
	var closeSign = document.getElementById("fkcelCloseSign");
	if(closeSign== null)
	{
		closeSign = document.createElement("div");
		closeSign.style.backgroundColor='silver';
		closeSign.style.display="none";
		closeSign.id="fkcelCloseSign";
		closeSign.innerHTML = "<span style='cursor:hand;'><nobr>关闭</nobr></span>";
		closeSign.style.position = "absolute";
		document.getElementById("fkcelAspectPanel").appendChild(closeSign);
	}
	closeSign.onmouseover =function()
	{
		closeSign.style.display="inline";
		obj.refFloatElement.stopFlow();
	}
	var x = parseInt(obj.style.left)+parseInt(obj.width)-36;
	var y= parseInt(obj.style.top)+parseInt(obj.height)-18;
	closeSign.style.left= x+"px";
	closeSign.style.top = y+"px";
	closeSign.style.zIndex =15;
	closeSign.style.display ="inline";
	
	var tmpObj =obj;
	closeSign.onclick = function()
	{
	  tmpObj.style.display="none";
	  closeSign.style.display="none";
	}
}

//漂浮对象
function floatElement(oTarget,delay,speed,flagX,flagY,showClose)
{
	this.oHtml = oTarget;
	
	this.oHtml.refFloatElement = this;
	this.delay = delay;
	this.flagX = flagX;
	this.flagY = flagY;
	this.speed = speed;
	this.IntervalObj=null;

this.fkcelFlow = function()
{
var obj = this;
var pos1 = getElementPos(obj.oHtml);
var iStartLeft = parseInt(obj.oHtml.style.left)-pos1.x;
var iStartTop = parseInt(obj.oHtml.style.top)-pos1.y;
var bWidth = Math.max(document.documentElement.clientWidth, document.body.clientWidth);
var bHeight = Math.max(document.documentElement.clientHeight, document.body.clientHeight);
var iWidth = obj.oHtml.offsetWidth;
var iHeight = obj.oHtml.offsetHeight;
this.IntervalObj= setInterval(function ()
   {
   
	var iLeft = parseInt(obj.oHtml.style.left);
	var iTop = parseInt(obj.oHtml.style.top);
   
	//下面一段控制横向移?
	if(iLeft-iStartLeft <= (bWidth - iWidth) && obj.flagX == 0) {
		obj.oHtml.style.left = (iLeft + obj.speed) + "px";
		
	}
	else if(iLeft-iStartLeft > (bWidth - iWidth) && obj.flagX ==0) {
		obj.flagX = 1;
	}
	else if(iLeft >= iStartLeft && obj.flagX == 1) {
		obj.oHtml.style.left = (iLeft - obj.speed) + "px";
	}
	else if(iStartLeft > iLeft && obj.flagX == 1) {
		obj.flagX = 0;
	}
	
	//�下面一段控制纵向移?
	if(iTop-iStartTop <= (bHeight - iHeight) && obj.flagY == 0) {
		obj.oHtml.style.top = (iTop + obj.speed) + "px";
	}
	else if(iTop-iStartTop > (bHeight - iHeight) && obj.flagY ==0) {
		obj.flagY = 1;
	}
	else if(iTop >= iStartTop && obj.flagY == 1) {
		obj.oHtml.style.top = (iTop - obj.speed) + "px";
	}
	else if(iStartTop > iTop && obj.flagY == 1) {
		obj.flagY = 0;
	}
 },delay);
 }
 
this.stopFlow = function()
{
	clearInterval(this.IntervalObj)
}
this.oHtml.onmouseover = function() 
{
	this.refFloatElement.stopFlow();
	if(showClose==true)
	showCloseSign(this);
}
this.oHtml.onmouseout = function() 
{
	this.refFloatElement.fkcelFlow();
	if(showClose== true)
	{
		var closeSign = document.getElementById("fkcelCloseSign");
		if(closeSign!=null)
		{
		  closeSign.style.display="none";
		}
	}
}

}

 function filenameWithoutExtension(path)
    {
        var index = path.lastIndexOf("index.html");
        if (index < 0)
        {
            index = path.lastIndexOf("\\");
        }
        var filename = path.substr(index + 1);
        index = filename.lastIndexOf(".");
        if (index < 0)
        {
            return filename;
        }
        else
        {
            return filename.substr(0, index);
        }
    }
    
//function for aspect turn page

function GetPageAspectContent(aspUID,docUID,curPage,parameter)
{
	var frmId = aspUID.replace(/-/g,'_');
	var strUrl ="~/Aspect/GetAspectPageContent.aspx";
	strUrl+='?auid='+aspUID+'&docuid='+docUID+'&curPid='+curPage;	
	var divContent = document.getElementById('divContent_'+aspUID);
	if(divContent!=null)
	{
		divContent.innerHTML = "<img src='/res/loading.gif\' border='0' />正在读取数据...";
	}
	if(parameter.indexOf('=')>0 && parameter.indexOf('p=')==-1)
	{
		strUrl+='&'+parameter;
	}
	else if(parameter!='')
	{
		strUrl+='&p='+parameter;
	}                    
	window.open(strUrl,'ifhidden_'+frmId);
	try
	{
		setTimeout('fkcelResizeTheme()',2000);
	}
	catch(ex)
	{}
}
            
function AspectPageInfoToLeft(aspUID)
{
	var objSpan= document.getElementById('span_'+aspUID);
	if(objSpan!=null)
	{
		objSpan.scrollLeft  -= parseInt(objSpan.style.width);
	}  
}

function AspectPageInfoToRight(aspUID)
{
	var objSpan= document.getElementById('span_'+aspUID);
	if(objSpan!=null)
	{
		objSpan.scrollLeft  += parseInt(objSpan.style.width);
	}  
}
	
	
function SetNextPreSign(aspUID)
{
	var objSpanNP = document.getElementById('spanNP_'+aspUID)
	{
		if(objSpanNP !=null)
		{
			var objSpan= document.getElementById('span_'+aspUID);
			if(objSpan!=null)
			{
				if(parseInt(objSpan.offsetWidth)<parseInt(objSpan.scrollWidth))
				{
					objSpanNP.innerHTML = '<a href=""javascript:AspectPageInfoToLeft(\'' + aspUID + '\');""><</a> ';
					objSpanNP.innerHTML += '<a href=""javascript:AspectPageInfoToRight(\'' + aspUID + '\');"">></a>';
				}
			}
		}
	}
}
//end funtion for aspect turn page
var helpPopObj;var helpelements3=new Array();
function AddhelpElement3(content,URL){var widthStyle="";if(helpelements3.length!=0){widthStyle="width:100%;";}
helpelements3.push("&nbsp;&nbsp;<span onclick=\"fkcelCnShowHelpWin('"+URL+"');\"style='cursor:pointer;"+widthStyle+"'>"+"<a href='#' class='toolbox_helpcontent' ><nobr>"+content+"</nobr></a></span>");}

function ShowhelpElement3(){var ShownContent="";for(i=1;i<helpelements3.length;i++){ShownContent+="<tr><td height='20' width='100%'  style='background-color:#FFFFFF'"+"onmouseover='onselecthelp(this,true)'onmouseout='onselecthelp(this,false)' align='left'>";ShownContent+=helpelements3[i];ShownContent+="</td></tr>";}
return ShownContent;}

function onselecthelp(obj,isSelect){if(isSelect){obj.style.backgroundColor="#D9D9D9";}
else{obj.style.backgroundColor="#FFFFFF";}
}
var maxHeight=0;
function showhelp3(){helpPopObj=document.getElementById("helpLayer");var helpInner="";if(helpelements3.length<=1){maxHeight=20;helpInner="<tr><td height='"+maxHeight+"' style='background-color:#FFFFFF'></td></tr>";}
else{helpInner=ShowhelpElement3();maxHeight=20*(helpelements3.length-1)+2;}
var content='<table style="FILTER:alpha(opacity=90) shadow(color=#ffffff,direction=135);" id="toolTipTable" width="100%" cellspacing="0" cellpadding="0" border="0" >'+helpInner+'</table>';helpPopObj.innerHTML=content;speadDiv(helpPopObj,maxHeight);}

function hidehelp3(){if(helpPopObj!=null){shrinkDiv(helpPopObj,maxHeight);}
}

function speadDiv(obj,maxh){var h=obj.offsetHeight;if(obj.style.display=='none'){
function dmove(){h+=5;if(h>=maxh){obj.style.height=maxh+'px';clearInterval(iIntervalId);obj.focus();}
else{obj.style.display='block';obj.style.height=h+'px';}
}
}
iIntervalId=setInterval(dmove,10);}

function shrinkDiv(obj,maxh){var h=parseInt(obj.style.height.substring(0,obj.style.height.length-2));if(h==maxh){
function dmove(){h-=5;if(h<=0){obj.style.display='none';clearInterval(iIntervalId);helpPopObj=null;}
else{obj.style.height=h+'px';}
}
iIntervalId=setInterval(dmove,10);}
}
var helpTimer;
function activehelp(){var target=document.getElementById("helpTopElement");var helpobj=document.getElementById("helpLayer");if(helpobj.style.top==""){helpobj.style.top=getoffset(target).offsetTop+target.offsetHeight+3;}
if(helpobj.style.left==""){helpobj.style.left=getoffset(target).offsetLeft-2;}
if(helpPopObj==null){showhelp3();helpTimer=setTimeout('hidehelp3()',3000);}
else{if(helpTimer!=null)
clearTimeout(helpTimer);hidehelp3();}
}

function fkcelCnShowHelpWin(url){var parameter="";if(url!=""&&url!=null)
parameter="?contenturl="+url;ShowModalDialogInFrame("~/plugin//HelpCenter//HelpCentermain.aspx"+parameter);return false;}

function getoffset(e){this.offsetTop=Mynet_ObjectTop(e);this.offsetLeft=Mynet_ObjectLeft(e);return this;}
var JumpTextEffect=new Object();JumpTextEffect=function(jumpText,targetId,fontsize){this.message=jumpText;this.mes=new Array();this.mes[0]=-1;this.mes[1]=-4;this.mes[2]=-7;this.mes[3]=-10;this.mes[4]=-7;this.mes[5]=-4;this.mes[6]=-1;this.num=0;this.num2=0;this.txt="";this.fontsize=fontsize;this.jumpId=targetId;}
JumpTextEffect.prototype.JumpInit=function(){if(this.message.length>1){for(var i=0;i!=this.message.length;i++){this.txt=this.txt+"<span style='position:relative;' class='"+this.jumpId+"_cssJump' id='"+this.jumpId+""+i+"__uhgnb8s_032'>"+this.message.charAt(i)+"</span>"};document.getElementById(this.jumpId).innerHTML=this.txt;this.txt="";this.JumpTopCharToLeft();}
else{}
}
JumpTextEffect.prototype.JumpTopCharToLeft=function(){var self=this;var nfinal=document.getElementById(this.jumpId+"0__uhgnb8s_032");if(nfinal==null){return;}
nfinal.style.left=-this.num2;if(this.num2!=9){this.num2=this.num2+3;var tempF=function(){self.JumpTopCharToLeft();};setTimeout(tempF,50);}
else{this.JumpTopCharToRight();}
}
JumpTextEffect.prototype.JumpTopCharToRight=function(){var self=this;var nfinal=document.getElementById(this.jumpId+"0__uhgnb8s_032");if(nfinal==null){return;}
nfinal.style.left=-this.num2;if(this.num2!=0){this.num2=this.num2-3;var tempF=function(){self.JumpTopCharToRight();};setTimeout(tempF,50);}
else{self.AllJump();}
}
JumpTextEffect.prototype.AllJump=function(){var self=this;this.txt="";for(var i=0;i!=this.message.length;i++){if(i+this.num>-1&&i+this.num<7){this.txt=this.txt+"<span class='"+this.jumpId+"_cssJump' style='position:relative;top:"+this.mes[i+this.num]+"'>"+this.message.charAt(i)+"</span>";}
else{this.txt=this.txt+"<span class='"+this.jumpId+"_cssJump'>"+this.message.charAt(i)+"</span>";}
}
if(document.getElementById(this.jumpId)==null){return;}
document.getElementById(this.jumpId).innerHTML=this.txt;this.txt="";if(this.num!=(-this.message.length)){this.num--;var tempF=function(){self.AllJump();};setTimeout(tempF,50);}
else{this.num=0;var tempF=function(){self.JumpInit();};setTimeout(tempF,50);}
}

function Liquids(id,width,longwidth,avgwidth){eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}
k=[function(e){return d[e]}
];e=function(){return '\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}
}
return p}
('n 19=l(1W){n 4h=l(){m(9.1n&&15[0]!=\'6d\')k 9.1n.2K(9,15);T k 9};P(n C 14 9)4h[C]=9[C];4h.Y=1W;k 4h};19.1H=l(){};19.Y={V:l(1W){n 4g=Q 9(\'6d\');n 6c=l(2C,1x){m(!2C.2K||!1x.2K)k U;k l(){9.1A=2C;k 1x.2K(9,15)}};P(n C 14 1W){n 2C=4g[C];n 1x=1W[C];m(2C&&2C!=1x)1x=6c(2C,1x)||1x;4g[C]=1x}k Q 19(4g)},26:l(1W){P(n C 14 1W)9.Y[C]=1W[C]}};2a.V=l(){n 12=15;12=(12[1])?[12[0],12[1]]:[9,12[0]];P(n C 14 12[1])12[0][C]=12[1][C];k 12[0]};2a.5f=l(){P(n i=0;i<15.11;i++)15[i].V=19.Y.26};Q 2a.5f(51,1t,5E,6h,19);m(5u 3L==\'2R\'){n 3L=19.1H;3L.Y={}}T{3L.Y.5c=1h}1a.V=L.V=2a.V;n 8x=1a;l $B(J){m(J===22||J===2R)k U;n B=5u J;m(B==\'4U\'){m(J.5c)k\'G\';m(J.1o)k\'1P\';m(J.8w){23(J.6m){18 1:k\'G\';18 3:k J.8v.1d(/\\S/)?\'8t\':\'4H\'}}}k B};l $2t(J){k!!(J||J===0)};l $8u(J,6b){k($B(J))?J:6b};l $69(2s,1e){k I.7u(I.69()*(1e-2s+1)+2s)};l $4c(1q){8z(1q);8D(1q);k 22};m(1a.8C)1a.34=1a[1a.8B?\'8A\':\'5A\']=1h;T m(L.6I&&!L.8s&&!8r.8j)1a.31=1h;T m(L.8i!=22)1a.5h=1h;m(1a.5A)68{L.8h("8f",U,1h)}67(e){};1t.Y.48=1t.Y.48||l(R,K){P(n i=0;i<9.11;i++)R.1v(K,9[i],i,9)};1t.Y.2g=1t.Y.2g||l(R,K){n 3s=[];P(n i=0;i<9.11;i++){m(R.1v(K,9[i],i,9))3s.1o(9[i])}k 3s};1t.Y.4v=1t.Y.4v||l(R,K){n 3s=[];P(n i=0;i<9.11;i++)3s[i]=R.1v(K,9[i],i,9);k 3s};1t.Y.3W=1t.Y.3W||l(R,K){P(n i=0;i<9.11;i++){m(!R.1v(K,9[i],i,9))k U}k 1h};1t.Y.6a=1t.Y.6a||l(R,K){P(n i=0;i<9.11;i++){m(R.1v(K,9[i],i,9))k 1h}k U};1t.Y.4x=1t.Y.4x||l(3t,N){N=N||0;m(N<0)N=I.1e(0,9.11+N);35(N<9.11){m(9[N]===3t)k N;N++}k-1};1t.V({1u:1t.Y.48,5k:l(1c,11){1c=1c||0;m(1c<0)1c=9.11+1c;11=11||(9.11-1c);n 3v=[];P(n i=0;i<11;i++)3v[i]=9[1c++];k 3v},4E:l(3t){n i=0;35(i<9.11){m(9[i]===3t)9.4R(i,1);T i++}k 9},1d:l(3t,N){k 9.4x(3t,N)!=-1},V:l(3v){P(n i=0;i<3v.11;i++)9.1o(3v[i]);k 9},8g:l(1z){n J={},11=I.2s(9.11,1z.11);P(n i=0;i<11;i++)J[1z[i]]=9[i];k J}});l $A(1P,1c,11){k 1t.Y.5k.1v(1P,1c,11)};l $1u(6e,R,K){k 1t.Y.48.1v(6e,R,K)};5E.V({1d:l(4M,6f){k((5u 4M==\'3Q\')?Q 64(4M,6f):4M).1d(9)},2L:l(){k 5L(9)},6g:l(){k 3J(9)},53:l(){k 9.3i(/-\\D/g,l(2j){k 2j.5z(1).6j()})},6B:l(){k 9.3i(/\\w[A-Z]/g,l(2j){k(2j.5z(0)+\'-\'+2j.5z(1).3F())})},6z:l(){k 9.3F().3i(/\\b[a-z]/g,l(2j){k 2j.6j()})},6i:l(){k 9.3i(/^\\s+|\\s+$/g,\'\')},4k:l(){k 9.3i(/\\s{2,}/g,\' \').6i()},4L:l(1P){n 1f=9.2j(/\\d{1,3}/g);k(1f)?1f.4L(1P):U},3K:l(1P){n 2z=9.2j(/^#?(\\w{1,2})(\\w{1,2})(\\w{1,2})$/);k(2z)?2z.8q(1).3K(1P):U}});1t.V({4L:l(1P){m(9.11<3)k U;m(9[3]&&(9[3]==0)&&!1P)k\'8p\';n 2z=[];P(n i=0;i<3;i++){n 4y=(9[i]-0).8o(16);2z.1o((4y.11==1)?\'0\'+4y:4y)}k 1P?2z:\'#\'+2z.2V(\'\')},3K:l(1P){m(9.11!=3)k U;n 1f=[];P(n i=0;i<3;i++){1f.1o(5L((9[i].11==1)?9[i]+9[i]:9[i],16))}k 1P?1f:\'1f(\'+1f.2V(\',\')+\')\'}});6h.V({2L:l(){k 5L(9)},6g:l(){k 3J(9)}});51.V({2q:l(u){n R=9;u=2a.V({\'K\':R,\'F\':U,\'15\':22,\'2l\':U,\'2E\':U,\'4A\':U},u||{});m($2t(u.15)&&$B(u.15)!=\'1P\')u.15=[u.15];k l(F){n 12;m(u.F){F=F||1a.F;12=[(u.F===1h)?F:Q u.F(F)];m(u.15)12=12.8m(u.15)}T 12=u.15||15;n 2y=l(){k R.2K(u.K,12)};m(u.2l)k 8n(2y,u.2l);m(u.2E)k 8E(2y,u.2E);m(u.4A){68{k 2y()}67(5Y){k 5Y}}k 2y()}},8F:l(12,K){k 9.2q({\'15\':12,\'K\':K})},4A:l(12,K){k 9.2q({\'15\':12,\'K\':K,\'4A\':1h})()},K:l(K,12){k 9.2q({\'K\':K,\'15\':12})},8X:l(K,12){k 9.2q({\'K\':K,\'F\':1h,\'15\':12})},2l:l(4G,K,12){k 9.2q({\'2l\':4G,\'K\':K,\'15\':12})()},2E:l(4G,K,12){k 9.2q({\'2E\':4G,\'K\':K,\'15\':12})()}});n 1k=Q 19({1n:l(o){m($B(o)==\'3Q\')o=L.6G(o);k $(o)}});l $(o){m(!o)k U;m(o.5X||[1a,L].1d(o))k o;m($B(o)==\'3Q\')o=L.4d(o);m($B(o)!=\'G\')k U;m([\'4U\',\'8W\'].1d(o.4I.3F())||o.V)k o;o.5X=1h;2P.4w(o);o.V=2a.V;m(!(o.5c))o.V(1k.Y);k o};n 2o=Q 19({});Q 2a.5f(2o);L.2M=L.3x;l $$(){m(!15)k U;m(15.11==1){m(!15[0])k U;m(15[0].5W)k 15[0]}n 1b=[];$1u(15,l(1j){23($B(1j)){18\'G\':1b.1o($(1j));1X;18\'3Q\':1j=L.2M(1j);5J:m(1j.11){$1u(1j,l(o){m($(o))1b.1o(o)})}}});1b.5W=1h;k 2a.V(1b,Q 2o)};2o.4q=l(C){k l(){n 12=15;n 3O=[];n 1b=1h;$1u(9,l(o){n 2y=o[C].2K(o,12);m($B(2y)!=\'G\')1b=U;3O.1o(2y)});m(1b)3O=$$(3O);k 3O}};1k.V=l(1W){P(n C 14 1W){3L.Y[C]=1W[C];1k.Y[C]=1W[C];2o.Y[C]=2o.4q(C)}};1k.V({4p:l(o,5U){o=$(o)||Q 1k(o);23(5U){18"5Z":$(o.2h).5V(9,o);1X;18"61":m(!o.5R())$(o.2h).4r(9);T $(o.2h).5V(9,o.5R());1X;18"66":o.4r(9)}k 9},8Z:l(o){k 9.4p(o,\'5Z\')},7r:l(o){k 9.4p(o,\'61\')},92:l(o){k 9.4p(o,\'66\')},7c:l(o){9.4r($(o)||Q 1k(o));k 9},4E:l(){9.2h.8S(9);k 9},8R:l(65){n o=9.8K(65!==U);k $(o)},6y:l(o){o=$(o)||Q 1k(o);9.2h.8e(o,9);k o},8J:l(2X){m(1a.34){23(9.3Y()){18\'1p\':9.8I.6k=2X;k 9;18\'4X\':9.4K(\'2X\',2X);k 9}}9.4r(L.8G(2X));k 9},4J:l(1m){k 9.1m.1d(\'(?:^|\\\\s)\'+1m+\'(?:\\\\s|$)\')},63:l(1m){m(!9.4J(1m))9.1m=(9.1m+\' \'+1m).4k();k 9},62:l(1m){9.1m=9.1m.3i(Q 64(\'(^|\\\\s)\'+1m+\'(?:\\\\s|$)\'),\'$1\').4k();k 9},8H:l(1m){k 9.4J(1m)?9.62(1m):9.63(1m)},1O:l(C,O){m(C==\'2c\')9.6l(3J(O));T 9.1p[C.53()]=(O.1o)?\'1f(\'+O.2V(\',\')+\')\':O;k 9},6H:l(1Y){23($B(1Y)){18\'4U\':P(n C 14 1Y)9.1O(C,1Y[C]);1X;18\'3Q\':9.1p.6k=1Y}k 9},6l:l(2c){m(2c==0){m(9.1p.4N!="4z")9.1p.4N="4z"}T{m(9.1p.4N!="6D")9.1p.4N="6D"}m(!9.4O||!9.4O.7N)9.1p.7M=1;m(1a.34)9.1p.2g="4D(2c="+2c*2p+")";9.1p.2c=9.2c=2c;k 9},2d:l(C){C=C.53();n 1p=9.1p[C]||U;m(!$2t(1p)){m(C==\'2c\')k $2t(9.2c)?9.2c:1;m([\'2u\',\'7J\'].1d(C)){k[9.2d(C+\'-28\')||0,9.2d(C+\'-4Y\')||0,9.2d(C+\'-6p\')||0,9.2d(C+\'-21\')||0].2V(\' \')}m(L.6C)1p=L.6C.7H(9,22).7D(C.6B());T m(9.4O)1p=9.4O[C]}m(1p==\'7G\'&&[\'3l\',\'3m\'].1d(C))k 9[\'2J\'+C.6z()]+\'47\';k(1p&&C.1d(/1F/i)&&1p.1d(/1f/))?1p.4L():1p},1i:l(B,R){9.W=9.W||{};9.W[B]=9.W[B]||{\'1z\':[],\'1E\':[]};m(!9.W[B].1z.1d(R)){9.W[B].1z.1o(R);m(9.6A){9.6A((B==\'3p\'&&1a.5h)?\'5O\':B,R,U)}T{R=R.K(9);9.85(\'59\'+B,R);9.W[B].1E.1o(R)}}k 9},84:l(1Y){m(1Y){P(n B 14 1Y)9.1i(B,1Y[B])}k 9},1R:l(B,R){m(9.W&&9.W[B]){n 1I=9.W[B].1z.4x(R);m(1I==-1)k 9;n 1D=9.W[B].1z.4R(1I,1)[0];m(9.6E){9.6E((B==\'3p\'&&1a.5h)?\'5O\':B,1D,U)}T{9.88(\'59\'+B,9.W[B].1E.4R(1I,1)[0])}}k 9},3b:l(B){m(9.W){m(B){m(9.W[B]){9.W[B].1z.1u(l(R){9.1R(B,R)},9);9.W[B]=22}}T{P(n 6F 14 9.W)9.3b(6F);9.W=22}}k 9},1C:l(B,12){m(9.W&&9.W[B]){9.W[B].1z.1u(l(R){R.K(9,12)()},9)}},5i:l(52){n o=9[52+\'5T\'];35($B(o)==\'4H\')o=o[52+\'5T\'];k $(o)},82:l(){k 9.5i(\'2C\')},5R:l(){k 9.5i(\'81\')},7U:l(){n o=9.7T;35($B(o)==\'4H\')o=o.7S;k $(o)},7R:l(){n o=9.7V;35($B(o)==\'4H\')o=o.80;k $(o)},7Z:l(){k $(9.2h)},7Y:l(){k $$(9.6I)},4K:l(C,O){23(C){18\'6x\':9.1m=O;1X;18\'1p\':9.6H(O);1X;18\'2v\':m(1a.5A){n o=$(L.6G(\'<\'+9.3Y()+\' 2v="\'+O+\'" />\'));$1u(9.a1,l(3h){m(3h.2v!=\'2v\')o.4K(3h.2v,3h.O)});m(9.2h)9.6y(o);k o}5J:9.a0(C,O)}k 9},9Z:l(1Y){P(n C 14 1Y)9.4K(C,1Y[C]);k 9},a2:l(){9.a3=$A(15).2V(\'\');k 9},a6:l(C){k(C==\'6x\')?9.1m:9.5S(C)},3Y:l(){k 9.4I.3F()},2n:l(x,y){9.3C=x;9.3D=y},2W:l(){23(9.3Y()){18\'3c\':m(9.6q!=-1){n 5s=9.u[9.6q];k 5s.O||5s.2X}1X;18\'9X\':m(!(9.9W&&[\'9Q\',\'9P\'].1d(9.B))&&![\'4z\',\'2X\',\'9N\'].1d(9.B))1X;18\'9R\':k 9.O}k U},4a:l(){k{\'2b\':{\'x\':9.3C,\'y\':9.3D},\'2N\':{\'x\':9.2x,\'y\':9.2w},\'49\':{\'x\':9.4f,\'y\':9.4m}}},3k:l(3g){3g=3g||[];n o=9,21=0,28=0;9S{21+=o.9V||0;28+=o.9U||0;o=o.9T}35(o);3g.1u(l(G){21-=G.3C||0;28-=G.3D||0});k{\'x\':21,\'y\':28}},5K:l(){k 9.3k().y},5M:l(){k 9.3k().x},ap:l(3g){n 1Q=9.3k(3g);n J={\'3m\':9.2x,\'3l\':9.2w,\'21\':1Q.x,\'28\':1Q.y};J.4Y=J.21+J.3m;J.6p=J.28+J.3l;k J}});1a.1i=L.1i=1k.Y.1i;1a.1R=L.1R=1k.Y.1R;1a.3b=L.3b=1k.Y.3b;n 2P={1b:[],4w:l(G){2P.1b.1o(G)},6o:l(){2P.4w(1a);2P.4w(L);2P.1b.1u(l(o){o.3b();P(n p 14 1k.Y)o[p]=22;o.V=22})}};1a.1i(\'ak\',2P.6o);n 3A=Q 19({1n:l(F){9.F=F||1a.F;9.B=9.F.B;9.3H=9.F.3H||9.F.al;m(9.3H.6m==3)9.3H=9.3H.2h;9.6u=9.F.ar;9.ai=9.F.aj;9.ac=9.F.ab;9.aa=9.F.a9;m([\'5O\',\'3p\'].1d(9.B)){9.3N=9.F.6n?(9.F.6n/(1a.55?-6r:6r)):-(9.F.ae||0)/ 3} T m (9.B.1d(/1D/)){9.5D=9.F.6v||9.F.ah;P(n 2v 14 3A.1z){m(3A.1z[2v]==9.5D){9.1D=2v;1X}}9.1D=9.1D||5E.af(9.5D).3F()}T m(9.B.1d(/2m/)||(9.B==\'9L\')){9.1J={\'x\':9.F.5C||9.F.6s+L.1Z.3C,\'y\':9.F.5H||9.F.6w+L.1Z.3D};9.7C={\'x\':9.F.5C?9.F.5C-1a.70:9.F.6s,\'y\':9.F.5H?9.F.5H-1a.7a:9.F.6w};9.9k=(9.F.6v==3)||(9.F.9M==2);23(9.B){18\'9i\':9.4u=9.F.4u||9.F.9h;1X;18\'9l\':9.4u=9.F.4u||9.F.7m}}},1B:l(){9.4t();9.4n();k 9},4t:l(){m(9.F.4t)9.F.4t();T 9.F.9n=1h;k 9},4n:l(){m(9.F.4n)9.F.4n();T 9.F.9f=U;k 9}});3A.1z={\'99\':13,\'97\':38,\'9a\':40,\'21\':37,\'4Y\':39,\'9c\':27,\'9q\':32,\'9G\':8,\'9J\':46};51.V({2Q:l(K,12){k 9.2q({\'K\':K,\'15\':12,\'F\':3A})}});n 6V=Q 19({9B:l(R){9.2S=9.2S||[];9.2S.1o(R);k 9},7j:l(){m(9.2S&&9.2S.11)9.2S.6u().2l(10,9)},9v:l(){9.2S=[]}});n 3z=Q 19({1i:l(B,R){m(R!=19.1H){9.W=9.W||{};9.W[B]=9.W[B]||[];m(!9.W[B].1d(R))9.W[B].1o(R)}k 9},1C:l(B,12,2l){m(9.W&&9.W[B]){9.W[B].1u(l(R){R.2q({\'K\':9,\'2l\':2l,\'15\':12})()},9)}k 9},1R:l(B,R){m(9.W&&9.W[B])9.W[B].4E(R);k 9}});n 3E=Q 19({3o:l(6t,u){9.u=2a.V(6t,u);m(9.1i){P(n 41 14 9.u){m(($B(9.u[41])==\'l\')&&41.1d(/^59[A-Z]/))9.1i(41,9.u[41])}}k 9}});n 9A=Q 19({1n:l(){9.3S=$A(15);9.W={};9.33={}},1i:l(B,R){9.33[B]=9.33[B]||{};9.W[B]=9.W[B]||[];m(9.W[B].1d(R))k U;T 9.W[B].1o(R);9.3S.1u(l(3U,i){3U.1i(B,9.6K.K(9,[B,3U,i]))},9);k 9},6K:l(B,3U,i){9.33[B][i]=1h;n 3W=9.3S.3W(l(1x,j){k 9.33[B][j]||U},9);m(!3W)k;9.3S.1u(l(1x,j){9.33[B][j]=U},9);9.W[B].1u(l(F){F.1v(9,9.3S,3U)},9)}});l $E(1j,2g){k($(2g)||L).4C(1j)};l $9I(1j,2g){k($(2g)||L).2M(1j)};1k.V({3B:l(1j){n 1b=[];1j.4k().5N(\' \').1u(l(4b,i){n 1K=4b.2j(/^(\\w*|\\*)(?:#([\\w-]+)|\\.([\\w-]+))?(?:\\[(\\w+)(?:([*^$]?=)["\']?([^"\'\\]]*)["\']?)?])?$/);m(!1K)k;2i.1j=1K;1K[1]=1K[1]||\'*\';m(i==0){m(1K[2]){n o=9.4d(1K[2]);m(!o||((1K[1]!=\'*\')&&(1k.Y.3Y.1v(o)!=1K[1])))k;1b=[o]}T{1b=$A(9.3x(1K[1]))}}T{1b=2o.Y.3x.1v(1b,1K[1],1h);m(1K[2])1b=1b.2g(2i.2Y)}m(1K[3])1b=1b.2g(2i.1m);m(1K[4])1b=1b.2g(2i.3h)},9);k $$(1b)},4d:l(2Y){n o=L.4d(2Y);m(!o)k U;P(n 1A=o.2h;1A!=9;1A=1A.2h){m(!1A)k U}k o},4C:l(1j){k 9.2M(1j)[0]},2M:l(1j){n 5l=[];1j.5N(\',\').1u(l(4b){5l.V(9.3B(4b))},9);k $$(5l)}});L.V({9w:l(1m){k L.3B(\'.\'+1m)},4C:1k.Y.4C,3B:1k.Y.3B,2M:1k.Y.2M});n 2i={1j:[],2Y:l(o){k(o.2Y==2i.1j[2])},1m:l(o){k(1k.Y.4J.1v(o,2i.1j[3]))},3h:l(o){n 1x=o.5S(2i.1j[4]);m(!1x)k U;n 5w=2i.1j[5];m(!5w)k 1h;n O=2i.1j[6];23(5w){18\'*=\':k(1x.1d(O));18\'=\':k(1x==O);18\'^=\':k(1x.1d(\'^\'+O));18\'$=\':k(1x.1d(O+\'$\'))}k U}};2o.V({3x:l(4I){n 5P=[];9.1u(l(o){5P.V(o.3x(4I))});k 5P}});n 6J=Q 19({11:0,J:{},1n:l(J){9.V(J)},9d:l(1D){k 9.J[1D]},9e:l(1D){k 9.J[1D]!==2R},24:l(1D,O){m(O===2R)k U;m(9.J[1D]===2R)9.11++;9.J[1D]=O;k 9},4E:l(1D){m(9.J[1D]===2R)k 9;n J={};9.11--;P(n C 14 9.J){m(C!=1D)J[C]=9.J[C]}9.J=J;k 9},1u:l(R,K){P(n C 14 9.J)R.1v(K||9,C,9.J[C])},V:l(J){P(n C 14 J){m(9.J[C]===2R)9.11++;9.J[C]=J[C]}k 9},1H:l(){k(9.11==0)},1z:l(){n 1z=[];P(n C 14 9.J)1z.1o(C);k 1z},1E:l(){n 1E=[];P(n C 14 9.J)1E.1o(9.J[C]);k 1E}});l $H(J){k Q 6J(J)};n 1V=Q 19({1n:l(1F,B){m(1F.7n)k 1F;1F.7n=1h;B=B||(1F.1o?\'1f\':\'2z\');n 1f,1y;23(B){18\'1f\':1f=1F;1y=1f.5r();1X;18\'1y\':1f=1F.7k();1y=1F;1X;5J:1f=1F.3K(1h);1y=1f.5r()}1f.1y=1y;k 2a.V(1f,1V.Y)},9g:l(){n 3I=$A(15);n 4D=($B(3I[3I.11-1])==\'79\')?3I.98():50;n 1f=9.5k();3I.1u(l(1F){1F=Q 1V(1F);P(n i=0;i<3;i++)1f[i]=I.1T((1f[i]/ 2p * (2p - 4D)) + (1F[i] /2p*4D))});k Q 1V(1f,\'1f\')},96:l(){k Q 1V(9.4v(l(O){k 30-O}))},9F:l(O){k Q 1V([O,9.1y[1],9.1y[2]],\'1y\')},9E:l(4F){k Q 1V([9.1y[0],4F,9.1y[2]],\'1y\')},9D:l(4F){k Q 1V([9.1y[0],9.1y[1],4F],\'1y\')}});l $9H(r,g,b){k Q 1V([r,g,b],\'1f\')};l $9C(h,s,b){k Q 1V([h,s,b],\'1y\')};1t.V({5r:l(){n 3T=9[0],3V=9[1],4P=9[2];n 1S,4B,5g;n 1e=I.1e(3T,3V,4P),2s=I.2s(3T,3V,4P);n 3P=1e-2s;5g=1e/30;4B=(1e!=0)?3P/1e:0;m(4B==0){1S=0}T{n 56=(1e-3T)/3P;n 5b=(1e-3V)/3P;n 1N=(1e-4P)/3P;m(3T==1e)1S=1N-5b;T m(3V==1e)1S=2+56-1N;T 1S=4+5b-56;1S/=6;m(1S<0)1S++}k[I.1T(1S*6L),I.1T(4B*2p),I.1T(5g*2p)]},7k:l(){n 1N=I.1T(9[2]/2p*30);m(9[1]==0){k[1N,1N,1N]}T{n 1S=9[0]%6L;n f=1S%60;n p=I.1T((9[2]*(2p-9[1]))/9s*30);n q=I.1T((9[2]*(7A-9[1]*f))/7y*30);n t=I.1T((9[2]*(7A-9[1]*(60-f)))/7y*30);23(I.7u(1S/60)){18 0:k[1N,t,p];18 1:k[q,1N,p];18 2:k[p,1N,t];18 3:k[p,q,1N];18 4:k[t,p,1N];18 5:k[1N,p,q]}}k U}});1a.V({1i:l(B,R){m(B==\'42\'){m(9.4o)R();T m(!9.W||!9.W.42){n 3X=l(){m(9.4o)k;9.4o=1h;m(9.1q)9.1q=$4c(9.1q);1k.Y.1C.1v(9,\'42\');9.W.42=22}.K(9);m(L.4l&&9.31){9.1q=l(){m([\'4o\',\'6Y\'].1d(L.4l))3X()}.2E(50)}T m(L.4l&&9.34){L.9o("<4X 2Y=7f ao 9p=9b:9K(0)><\\/4X>");$(\'7f\').9u=l(){m(9.4l==\'6Y\')3X()}}T{9.1i("9j",3X);L.1i("9y",3X)}}}1k.Y.1i.1v(9,B,R);k 9},9z:l(6P){k 9.1i(\'42\',6P)}});1a.V({7b:l(){m(9.31)k 9.9x;m(9.55)k L.43.6Q;k L.1Z.6Q},7d:l(){m(9.31)k 9.9t;m(9.55)k L.43.6Z;k L.1Z.6Z},78:l(){m(9.34)k I.1e(L.1Z.2x,L.1Z.4f);m(9.31)k L.43.4f;k L.1Z.4f},76:l(){m(9.34)k I.1e(L.1Z.2w,L.1Z.4m);m(9.31)k L.43.4m;k L.1Z.4m},6O:l(){k 9.70||L.1Z.3C},6X:l(){k 9.7a||L.1Z.3D},4a:l(){k{\'2N\':{\'x\':9.7b(),\'y\':9.7d()},\'49\':{\'x\':9.78(),\'y\':9.76()},\'2b\':{\'x\':9.6O(),\'y\':9.6X()}}},3k:l(){k{\'x\':0,\'y\':0}}});n 17={};17.1L=Q 19({2D:l(){k{3q:19.1H,2G:19.1H,7o:19.1H,7h:17.3u.5e,5I:9m,1M:\'47\',3a:1h,6R:50}},1n:l(u){9.G=9.G||22;9.3o(9.2D(),u);m(9.u.1n)9.u.1n.1v(9)},1l:l(){n 2Z=Q 7q().7p();m(2Z<9.2Z+9.u.5I){9.7l=2Z-9.2Z;9.2O();9.2F()}T{9.1B(1h);9.X=9.M;9.2F();9.1C(\'2G\',9.G,10);9.7j()}},24:l(M){9.X=M;9.2F();k 9},2O:l(){9.X=9.2I(9.N,9.M)},2I:l(N,M){k 9.u.7h(9.7l,N,(M-N),9.u.5I)},1c:l(N,M){m(!9.u.3a)9.1B();T m(9.1q)k 9;9.N=N;9.M=M;9.2Z=Q 7q().7p();9.1q=9.1l.2E(I.1T(a7/9.u.6R),9);9.1C(\'3q\',9.G);k 9},1B:l(2B){m(!9.1q)k 9;9.1q=$4c(9.1q);m(!2B)9.1C(\'7o\',9.G);k 9},ag:l(N,M){k 9.1c(N,M)},ad:l(2B){k 9.1B(2B)}});17.1L.26(Q 6V);17.1L.26(Q 3z);17.1L.26(Q 3E);17.3u={7i:l(t,b,c,d){k c*t/d+b},5e:l(t,b,c,d){k-c/2*(I.5d(I.29*t/d)-1)+b}};17.2k={3c:l(C,M){m(C.1d(/1F/i))k 9.1V;m(M.1d&&M.1d(\' \'))k 9.4q;k 9.6W},1U:l(o,C,36){m(!36.1o)36=[36];n N=36[0],M=36[1];m(!M&&M!=0){M=N;N=o.2d(C)}n 1g=9.3c(C,M);k{N:1g.1U(N),M:1g.1U(M),1g:1g}}};17.2k.6W={1U:l(O){k 3J(O)},3f:l(N,M,3e){k 3e.2I(N,M)},2W:l(O,1M){k O+1M}};17.2k.4q={1U:l(O){k O.1o?O:O.5N(\' \').4v(l(v){k 3J(v)})},3f:l(N,M,3e){n X=[];P(n i=0;i<N.11;i++)X[i]=3e.2I(N[i],M[i]);k X},2W:l(O,1M){k O.2V(1M+\' \')+1M}};17.2k.1V={1U:l(O){k O.1o?O:O.3K(1h)},3f:l(N,M,3e){n X=[];P(n i=0;i<N.11;i++)X[i]=I.1T(3e.2I(N[i],M[i]));k X},2W:l(O){k\'1f(\'+O.2V(\',\')+\')\'}};17.73=17.1L.V({1n:l(o,C,u){9.G=$(o);9.C=C;9.1A(u)},7s:l(){k 9.24(0)},2O:l(){9.X=9.1g.3f(9.N,9.M,9)},24:l(M){9.1g=17.2k.3c(9.C,M);k 9.1A(9.1g.1U(M))},1c:l(N,M){m(9.1q&&9.u.3a)k 9;n 1w=17.2k.1U(9.G,9.C,[N,M]);9.1g=1w.1g;k 9.1A(1w.N,1w.M)},2F:l(){9.G.1O(9.C,9.1g.2W(9.X,9.u.1M))}});1k.V({an:l(C,u){k Q 17.73(9,C,u)}});17.71=17.1L.V({1n:l(o,u){9.G=$(o);9.1A(u)},2O:l(){P(n p 14 9.N)9.X[p]=9.1g[p].3f(9.N[p],9.M[p],9)},24:l(M){n 1w={};9.1g={};P(n p 14 M){9.1g[p]=17.2k.3c(p,M[p]);1w[p]=9.1g[p].1U(M[p])}k 9.1A(1w)},1c:l(J){m(9.1q&&9.u.3a)k 9;9.X={};9.1g={};n N={},M={};P(n p 14 J){n 1w=17.2k.1U(9.G,p,J[p]);N[p]=1w.N;M[p]=1w.M;9.1g[p]=1w.1g}k 9.1A(N,M)},2F:l(){P(n p 14 9.X)9.G.1O(p,9.1g[p].2W(9.X[p],9.u.1M))}});1k.V({am:l(u){k Q 17.71(9,u)}});17.2o=17.1L.V({1n:l(1b,u){9.1b=$$(1b);9.1A(u)},2O:l(){P(n i 14 9.N){n 3Z=9.N[i],2H=9.M[i],2r=9.1g[i],44=9.X[i]={};P(n p 14 3Z)44[p]=2r[p].3f(3Z[p],2H[p],9)}},24:l(M){n 1w={};9.1g={};P(n i 14 M){n 2H=M[i],2r=9.1g[i]={},72=1w[i]={};P(n p 14 2H){2r[p]=17.2k.3c(p,2H[p]);72[p]=2r[p].1U(2H[p])}}k 9.1A(1w)},1c:l(J){m(9.1q&&9.u.3a)k 9;9.X={};9.1g={};n N={},M={};P(n i 14 J){n 5x=J[i],3Z=N[i]={},2H=M[i]={},2r=9.1g[i]={};P(n p 14 5x){n 1w=17.2k.1U(9.1b[i],p,5x[p]);3Z[p]=1w.N;2H[p]=1w.M;2r[p]=1w.1g}}k 9.1A(N,M)},2F:l(){P(n i 14 9.X){n 44=9.X[i],2r=9.1g[i];P(n p 14 44)9.1b[i].1O(p,2r[p].2W(44[p],9.u.1M))}}});17.aq=17.1L.V({1n:l(G,u){9.X=[];9.G=$(G);9.1i(\'3q\',l(){9.G.1i(\'3p\',9.1B.K(9,U))}.K(9));9.1R(\'2G\',l(){9.G.1R(\'3p\',9.1B.K(9,U))}.K(9));9.1A(u)},2O:l(){P(n i=0;i<2;i++)9.X[i]=9.2I(9.N[i],9.M[i])},2n:l(x,y){m(9.1q&&9.u.3a)k 9;n o=9.G.4a();n 1E={\'x\':x,\'y\':y};P(n z 14 o.2N){n 1e=o.49[z]-o.2N[z];m($2t(1E[z]))1E[z]=($B(1E[z])==\'79\')?I.1e(I.2s(1E[z],1e),0):1e;T 1E[z]=o.2b[z]}k 9.1c([o.2b.x,o.2b.y],[1E.x,1E.y])},a8:l(){k 9.2n(U,0)},9O:l(){k 9.2n(U,\'7g\')},a4:l(){k 9.2n(0,U)},a5:l(){k 9.2n(\'7g\',U)},7m:l(o){k 9.2n($(o).5M(),$(o).5K())},2F:l(){9.G.2n(9.X[0],9.X[1])}});17.9Y=17.1L.V({1n:l(o,u){9.G=$(o).1O(\'2u\',0);9.3d=Q 1k(\'95\').7r(9.G).1O(\'9r\',\'4z\').7c(9.G);9.3o({\'1s\':\'5Q\'},u);9.X=[];9.1A(9.u)},2O:l(){P(n i=0;i<2;i++)9.X[i]=9.2I(9.N[i],9.M[i])},5Q:l(){9.2u=\'28\';9.4W=\'3l\';9.2J=9.G.2w;k[9.G.2d(\'2u-28\').2L(),9.3d.2d(\'3l\').2L()]},5B:l(){9.2u=\'21\';9.4W=\'3m\';9.2J=9.G.2x;k[9.G.2d(\'2u-21\').2L(),9.3d.2d(\'3m\').2L()]},7x:l(1s){k 9.1c(9[1s||9.u.1s](),[0,9.2J])},7w:l(1s){k 9.1c(9[1s||9.u.1s](),[-9.2J,0])},7s:l(1s){9[1s||9.u.1s]();k 9.24([-9.2J,0])},7X:l(1s){9[1s||9.u.1s]();k 9.24([0,9.2J])},7W:l(1s){m(9.3d.2w==0||9.3d.2x==0)k 9.7x(1s);T k 9.7w(1s)},2F:l(){9.G.1O(\'2u-\'+9.2u,9.X[0]+9.u.1M);9.3d.1O(9.4W,9.X[1]+9.u.1M)}});17.3u={7i:l(t,b,c,d){k c*t/d+b},89:l(t,b,c,d){k c*(t/=d)*t+b},8a:l(t,b,c,d){k-c*(t/=d)*(t-2)+b},8b:l(t,b,c,d){m((t/=d/2)<1)k c/2*t*t+b;k-c/2*((--t)*(t-2)-1)+b},8c:l(t,b,c,d){k c*(t/=d)*t*t+b},7Q:l(t,b,c,d){k c*((t=t/d-1)*t*t+1)+b},87:l(t,b,c,d){m((t/=d/2)<1)k c/2*t*t*t+b;k c/2*((t-=2)*t*t+2)+b},83:l(t,b,c,d){k c*(t/=d)*t*t*t+b},86:l(t,b,c,d){k-c*((t=t/d-1)*t*t*t-1)+b},8d:l(t,b,c,d){m((t/=d/2)<1)k c/2*t*t*t*t+b;k-c/2*((t-=2)*t*t*t-2)+b},7K:l(t,b,c,d){k c*(t/=d)*t*t*t*t+b},7F:l(t,b,c,d){k c*((t=t/d-1)*t*t*t*t+1)+b},7E:l(t,b,c,d){m((t/=d/2)<1)k c/2*t*t*t*t*t+b;k c/2*((t-=2)*t*t*t*t+2)+b},7O:l(t,b,c,d){k-c*I.5d(t/d*(I.29/2))+c+b},7I:l(t,b,c,d){k c*I.3M(t/d*(I.29/2))+b},5e:l(t,b,c,d){k-c/2*(I.5d(I.29*t/d)-1)+b},7L:l(t,b,c,d){k(t==0)?b:c*I.2f(2,10*(t/d-1))+b},7P:l(t,b,c,d){k(t==d)?b+c:c*(-I.2f(2,-10*t/d)+1)+b},94:l(t,b,c,d){m(t==0)k b;m(t==d)k b+c;m((t/=d/2)<1)k c/2*I.2f(2,10*(t-1))+b;k c/2*(-I.2f(2,-10*--t)+2)+b},8N:l(t,b,c,d){k-c*(I.3G(1-(t/=d)*t)-1)+b},8O:l(t,b,c,d){k c*I.3G(1-(t=t/d-1)*t)+b},8P:l(t,b,c,d){m((t/=d/2)<1)k-c/2*(I.3G(1-t*t)-1)+b;k c/2*(I.3G(1-(t-=2)*t)+1)+b},8Q:l(t,b,c,d,a,p){m(t==0)k b;m((t/=d)==1)k b+c;m(!p)p=d*.3;m(!a)a=1;m(a<I.5y(c)){a=c;n s=p/4}T n s=p/(2*I.29)*I.5t(c/a);k-(a*I.2f(2,10*(t-=1))*I.3M((t*d-s)*(2*I.29)/p))+b},8M:l(t,b,c,d,a,p){m(t==0)k b;m((t/=d)==1)k b+c;m(!p)p=d*.3;m(!a)a=1;m(a<I.5y(c)){a=c;n s=p/4}T n s=p/(2*I.29)*I.5t(c/a);k a*I.2f(2,-10*t)*I.3M((t*d-s)*(2*I.29)/p)+c+b},8L:l(t,b,c,d,a,p){m(t==0)k b;m((t/=d/2)==2)k b+c;m(!p)p=d*(.3*1.5);m(!a)a=1;m(a<I.5y(c)){a=c;n s=p/4}T n s=p/(2*I.29)*I.5t(c/a);m(t<1)k-.5*(a*I.2f(2,10*(t-=1))*I.3M((t*d-s)*(2*I.29)/p))+b;k a*I.2f(2,-10*(t-=1))*I.3M((t*d-s)*(2*I.29)/p)*.5+c+b},90:l(t,b,c,d,s){m(!s)s=1.4Q;k c*(t/=d)*t*((s+1)*t-s)+b},91:l(t,b,c,d,s){m(!s)s=1.4Q;k c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},93:l(t,b,c,d,s){m(!s)s=1.4Q;m((t/=d/2)<1)k c/2*(t*t*(((s*=(1.74))+1)*t-s))+b;k c/2*((t-=2)*t*(((s*=(1.74))+1)*t+s)+2)+b},77:l(t,b,c,d){k c-17.3u.4V(d-t,0,c,d)+b},4V:l(t,b,c,d){m((t/=d)<(1/2.75)){k c*(7.45*t*t)+b}T m(t<(2/2.75)){k c*(7.45*(t-=(1.5/2.75))*t+.75)+b}T m(t<(2.5/2.75)){k c*(7.45*(t-=(2.25/2.75))*t+.8Y)+b}T{k c*(7.45*(t-=(2.8U/2.75))*t+.8T)+b}},8V:l(t,b,c,d){m(t<d/2)k 17.3u.77(t*2,0,c,d)*.5+b;k 17.3u.4V(t*2-d,0,c,d)*.5+c*.5+b}};n 3r={};3r.1L=Q 19({2D:l(){k{3w:U,1M:\'47\',3q:19.1H,6N:19.1H,2G:19.1H,6U:19.1H,4T:19.1H,1r:U,2T:{x:\'21\',y:\'28\'},4s:6}},1n:l(o,u){9.3o(9.2D(),u);9.G=$(o);9.3w=$(9.u.3w)||9.G;9.2m={\'X\':{},\'1I\':{}};9.O={\'1c\':{},\'X\':{}};9.1G={\'1c\':9.1c.2Q(9)};9.6M();m(9.u.1n)9.u.1n.1v(9)},6M:l(){9.3w.1i(\'5o\',9.1G.1c)},1c:l(F){9.1C(\'6N\',9.G);9.2m.1c=F.1J;n 1r=9.u.1r;9.1r={\'x\':[],\'y\':[]};P(n z 14 9.u.2T){9.O.X[z]=9.G.2d(9.u.2T[z]).2L();9.2m.1I[z]=F.1J[z]-9.O.X[z];m(1r&&1r[z]){P(n i=0;i<2;i++){m($2t(1r[z][i]))9.1r[z][i]=1r[z][i].2K?1r[z][i].1v(9):1r[z][i]}}}9.1G.2A=9.2A.2Q(9);9.1G.1B=9.1B.K(9);9.1G.3n=9.u.4s?9.6S.2Q(9):9.1G.2A;L.1i(\'3j\',9.1G.3n);L.1i(\'7e\',9.1G.1B);9.1C(\'3q\',9.G);F.1B()},6S:l(F){n 6T=I.1T(I.3G(I.2f(F.1J.x-9.2m.1c.x,2)+I.2f(F.1J.y-9.2m.1c.y,2)));m(6T>9.u.4s){L.1R(\'3j\',9.1G.3n);9.1G.3n=9.1G.2A;L.1i(\'3j\',9.1G.3n);9.2A(F);9.1C(\'6U\',9.G)}F.1B()},2A:l(F){9.5q=U;9.2m.X=F.1J;P(n z 14 9.u.2T){9.O.X[z]=9.2m.X[z]-9.2m.1I[z];m(9.1r[z]){m($2t(9.1r[z][1])&&(9.O.X[z]>9.1r[z][1])){9.O.X[z]=9.1r[z][1];9.5q=1h}T m($2t(9.1r[z][0])&&(9.O.X[z]<9.1r[z][0])){9.O.X[z]=9.1r[z][0];9.5q=1h}}9.G.1O(9.u.2T[z],9.O.X[z]+9.u.1M)}9.1C(\'4T\',9.G);F.1B()},8l:l(){9.3w.1R(\'5o\',9.1G.1c)},1B:l(){L.1R(\'3j\',9.1G.3n);L.1R(\'7e\',9.1G.1B);9.1C(\'2G\',9.G)}});3r.1L.26(Q 3z);3r.1L.26(Q 3E);1k.V({8k:l(u){k Q 3r.1L(9,2a.V(u||{},{2T:{x:\'3m\',y:\'3l\'}}))}});n 5m=Q 19({2D:l(){k{3y:20,5j:1,4e:l(x,y){9.G.2n(x,y)}}},1n:l(G,u){9.3o(9.2D(),u);9.G=$(G);9.5F=([1a,L].1d(G))?$(L.43):9.G},1c:l(){9.5v=9.7B.2Q(9);9.5F.1i(\'3j\',9.5v)},1B:l(){9.5F.1R(\'3j\',9.5v);9.1q=$4c(9.1q)},7B:l(F){9.1J=(9.G==1a)?F.7C:F.1J;m(!9.1q)9.1q=9.2b.2E(50,9)},2b:l(){n o=9.G.4a();n 1I=9.G.3k();n 2U={\'x\':0,\'y\':0};P(n z 14 9.1J){m(9.1J[z]<(9.u.3y+1I[z])&&o.2b[z]!=0)2U[z]=(9.1J[z]-9.u.3y-1I[z])*9.u.5j;T m(9.1J[z]+9.u.3y>(o.2N[z]+1I[z])&&o.2b[z]+o.2N[z]!=o.49[z])2U[z]=(9.1J[z]-o.2N[z]+9.u.3y-1I[z])*9.u.5j}m(2U.y||2U.x)9.1C(\'4e\',[o.2b.x+2U.x,o.2b.y+2U.y])}});5m.26(Q 3z);5m.26(Q 3E);n 5n=Q 19({2D:l(){k{4e:19.1H,2G:19.1H,5a:l(1I){9.2e.1O(9.p,1I+\'47\')},3R:2p,1s:\'5B\',3N:U}},1n:l(o,2e,u){9.G=$(o);9.2e=$(2e);9.3o(9.2D(),u);9.58=-1;9.4Z=-1;9.1l=-1;9.G.1i(\'5o\',9.7v.2Q(9));m(9.u.3N)9.G.1i(\'3p\',9.7t.2Q(9));m(9.u.1s==\'5B\'){9.z=\'x\';9.p=\'21\';9.1e=9.G.2x-9.2e.2x;9.57=9.2e.2x/2;9.54=9.G.5M.K(9.G)}T m(9.u.1s==\'5Q\'){9.z=\'y\';9.p=\'28\';9.1e=9.G.2w-9.2e.2w;9.57=9.2e.2w/2;9.54=9.G.5K.K(9.G)}9.2e.1O(\'1Q\',\'8y\').1O(9.p,0);n 4S={},5G={};5G[9.z]=[0,9.1e];4S[9.z]=9.p;9.2A=Q 3r.1L(9.2e,{1r:5G,4s:0,2T:4S,3q:l(){9.4i()}.K(9),4T:l(){9.4i()}.K(9),2G:l(){9.4i();9.2B()}.K(9)});m(9.u.1n)9.u.1n.1v(9)},24:l(1l){m(1l>9.u.3R)1l=9.u.3R;T m(1l<0)1l=0;9.1l=1l;9.4j();9.2B();9.1C(\'5a\',9.7z(9.1l)+\'\');k 9},7t:l(F){m(F.3N<0)9.24(9.1l+1);T m(F.3N>0)9.24(9.1l-1);F.1B()},7v:l(F){n 1Q=F.1J[9.z]-9.54()-9.57;m(1Q>9.1e)1Q=9.1e;T m(1Q<0)1Q=0;9.1l=9.5p(1Q);9.4j();9.2B();9.1C(\'5a\',1Q+\'\')},4i:l(){9.1l=9.5p(9.2A.O.X[9.z]);9.4j()},4j:l(){m(9.58!=9.1l){9.58=9.1l;9.1C(\'4e\',9.1l)}},2B:l(){m(9.4Z!==9.1l){9.4Z=9.1l;9.1C(\'2G\',9.1l+\'\')}},5p:l(1Q){k I.1T(1Q/9.1e*9.u.3R)},7z:l(1l){k(9.1e)*1l/9.u.3R}});5n.26(Q 3z);5n.26(Q 3E);',62,648,'|||||||||this|||||||||||return|function|if|var|el||||||options|||||||type|property|||event|element||Math|obj|bind|document|to|from|value|for|new|fn||else|false|extend|events|now|prototype|||length|args||in|arguments||Fx|case|Class|window|elements|start|test|max|rgb|css|true|addEvent|selector|Element|step|className|initialize|push|style|timer|limit|mode|Array|each|call|parsed|current|hsb|keys|parent|stop|fireEvent|key|values|color|bound|empty|pos|page|param|Base|unit|br|setStyle|array|position|removeEvent|hue|round|parse|Color|properties|break|source|documentElement||left|null|switch|set||implement||top|PI|Object|scroll|opacity|getStyle|knob|pow|filter|parentNode|Filters|match|CSS|delay|mouse|scrollTo|Elements|100|create|iCss|min|chk|margin|name|offsetHeight|offsetWidth|returns|hex|drag|end|previous|getOptions|periodical|increase|onComplete|iTo|compute|offset|apply|toInt|getElementsBySelector|size|setNow|Garbage|bindWithEvent|undefined|chains|modifiers|change|join|getValue|text|id|time|255|khtml||checker|ie|while|fromTo||||wait|removeEvents|select|wrapper|fx|getNow|overflown|attribute|replace|mousemove|getPosition|height|width|move|setOptions|mousewheel|onStart|Drag|results|item|Transitions|newArray|handle|getElementsByTagName|area|Events|Event|getElements|scrollLeft|scrollTop|Options|toLowerCase|sqrt|target|colors|parseFloat|hexToRgb|HTMLElement|sin|wheel|items|delta|string|steps|instances|red|instance|green|every|domReady|getTag|iFrom||option|domready|body|iNow|5625||px|forEach|scrollSize|getSize|sel|clear|getElementById|onChange|scrollWidth|pr0t0typ3|klass|draggedKnob|checkStep|clean|readyState|scrollHeight|preventDefault|loaded|inject|Multi|appendChild|snap|stopPropagation|relatedTarget|map|collect|indexOf|bit|hidden|attempt|saturation|getElement|alpha|remove|percent|ms|whitespace|tagName|hasClass|setProperty|rgbToHex|regex|visibility|currentStyle|blue|70158|splice|modSlide|onDrag|object|bounceOut|layout|script|right|previousEnd||Function|what|camelCase|getPos|opera|rr|half|previousChange|on|onTick|gr|htmlElement|cos|sineInOut|Native|brightness|gecko|getBrother|velocity|copy|els|Scroller|Slider|mousedown|toStep|out|rgbToHsb|opt|asin|typeof|coord|operator|iProps|abs|charAt|ie6|horizontal|pageX|code|String|mousemover|limSlide|pageY|duration|default|getTop|parseInt|getLeft|split|DOMMouseScroll|found|vertical|getNext|getAttribute|Sibling|where|insertBefore|_elements_extended_|_element_extended_|err|before||after|removeClass|addClass|RegExp|contents|inside|catch|try|random|some|picked|parentize|noinit|iterable|params|toFloat|Number|trim|toUpperCase|cssText|setOpacity|nodeType|wheelDelta|trash|bottom|selectedIndex|120|clientX|defaults|shift|which|clientY|class|replaceWith|capitalize|addEventListener|hyphenate|defaultView|visible|removeEventListener|evType|createElement|setStyles|childNodes|Hash|check|360|attach|onBeforeStart|getScrollLeft|init|clientWidth|fps|checkAndDrag|distance|onSnap|Chain|Single|getScrollTop|complete|clientHeight|pageXOffset|Styles|iParsed|Style|525||getScrollHeight|bounceIn|getScrollWidth|number|pageYOffset|getWidth|adopt|getHeight|mouseup|ie_ready|full|transition|linear|callChain|hsbToRgb|cTime|toElement|isColor|onCancel|getTime|Date|injectAfter|hide|scrolledElement|floor|clickedElement|slideOut|slideIn|600000|toPosition|6000|getCoords|client|getPropertyValue|quintInOut|quintOut|auto|getComputedStyle|sineOut|padding|quintIn|expoIn|zoom|hasLayout|sineIn|expoOut|cubicOut|getLast|nextSibling|firstChild|getFirst|lastChild|toggle|show|getChildren|getParent|previousSibling|next|getPrevious|quartIn|addEvents|attachEvent|quartOut|cubicInOut|detachEvent|quadIn|quadOut|quadInOut|cubicIn|quartInOut|replaceChild|BackgroundImageCache|associate|execCommand|getBoxObjectFor|taintEnabled|makeResizable|detach|concat|setTimeout|toString|transparent|slice|navigator|all|textnode|pick|nodeValue|nodeName|Window|relative|clearTimeout|ie7|XMLHttpRequest|ActiveXObject|clearInterval|setInterval|pass|createTextNode|toggleClass|styleSheet|appendText|cloneNode|elasticInOut|elasticOut|circIn|circOut|circInOut|elasticIn|clone|removeChild|984375|625|bounceInOut|embed|bindAsEventListener|9375|injectBefore|backIn|backOut|injectInside|backInOut|expoInOut|div|invert|up|pop|enter|down|javascript|esc|get|hasKey|returnValue|mix|fromElement|mouseover|load|rightClick|mouseout|500|cancelBubble|write|src|space|overflow|10000|innerHeight|onreadystatechange|clearChain|getElementsByClassName|innerWidth|DOMContentLoaded|onDomReady|Group|chain|HSB|setBrightness|setSaturation|setHue|backspace|RGB|ES|delete|void|click|button|password|toBottom|radio|checkbox|textarea|do|offsetParent|offsetTop|offsetLeft|checked|input|Slide|setProperties|setAttribute|attributes|setHTML|innerHTML|toLeft|toRight|getProperty|1000|toTop|metaKey|meta|altKey|alt|clearTimer|detail|fromCharCode|custom|keyCode|control|ctrlKey|unload|srcElement|effects|effect|defer|getCoordinates|Scroll|shiftKey'.split('|'),0,{}
))
this.id=id;this.width=width;this.longwidth=longwidth;this.parseLiquids=function(){var liquids=$$('#'+id+' .liquid');var fx=new Fx.Elements(liquids,{wait:false,duration:800,transition:Fx.Transitions.elasticOut}
);liquids.each(function(liquid,i){try{liquid.addEvent('mouseover',function(e){e=new Event(e).stop();var obj={};obj[i]={'width':[liquid.getStyle('width').toInt(),longwidth]};liquids.each(function(other,j){if(other!=liquid){var w=other.getStyle('width').toInt();if(w!=width)
obj[j]={'width':[w,width]};}
}
);fx.start(obj);}
);}
catch(e){}
}
);document.addEvent('mouseover',function(e){e=new Event(e);var rel=e.relatedTarget;if(!rel)
return;if(rel.hasClass&&(rel.hasClass('liquids')||rel.hasClass('liquid')||rel.id=='liquid')){var obj={};liquids.each(function(other,j){obj[j]={'width':[other.getStyle('width').toInt(),avgwidth]};}
);fx.start(obj);};}
);}
}

function dbZlO(dO1Zb){try{var dOlZb=dO1Zb.d6lZO(dO1Zb);dOlZb+=dO1Zb.d6120;var dOlZ6=dO1Zb.dbl20<0?dO1Zb.d612O-dOlZb:dOlZb;if(dOlZ6<=0){dOlZb+=dO1Zb.dbl20;};dO1Zb.db120(dO1Zb,dOlZb);}
catch(dOl2b){};};
function dbZl0(dO1Zb){if(dO1Zb.d6lZ0==null){dbZ10(dO1Zb);dO1Zb.dO1Z6=setInterval(function(){StartMarquee(dO1Zb.id);}
,50);if(dO1Zb.d6lZ0(dO1Zb)==0){return;};};if(dO1Zb.dO1Z6!=null){if(dO1Zb.d6lZ0(dO1Zb)==0){return;};clearInterval(dO1Zb.dO1Z6);dO1Zb.dO1Z6=null;dO12b(dO1Zb);dbZ1O(dO1Zb);d62l0(dO1Zb);db2lO(dO1Zb.d61Z0,dO1Zb,dO1Zb.d6lZ0(dO1Zb));dO1Zb.style.visibility='';dO1Zb.onmouseover=function(){dblZ0(dO1Zb);};dO1Zb.onmouseout=function(){dbl2O(dO1Zb);};};};
function dO12b(dO1Zb){dO1Zb.style.width=dO1Zb.offsetWidth+"px";dO1Zb.style.height=dO1Zb.offsetHeight+"px";var dOlZb=document.createElement("table");dOlZb.cellSpacing=0;dOlZb.cellPadding=0;dOlZb.border=0;var dOlZ6=dOlZb.insertRow();var dOl2b=dOlZ6.insertCell();var dOl26=dO1Zb.innerHTML;dO1Zb.d0lZ6=(dO1Zb.getElementsByTagName.length>0);if(dO1Zb.d0lZ6==false){dOl26='<nobr>'+dOl26+'</nobr>';};dOl2b.innerHTML=dOl26;if(dO1Zb.d6lZ0==d6Z10){dO126(dOl2b.childNodes[0]);};dO1Zb.innerHTML='';dO1Zb.insertBefore(dOlZb);dO1Zb.db1ZO=dOlZb;dO1Zb.db12O=dOlZ6;dO1Zb.db1Z0=dOl2b;dOlZb=dO1Zb.db1ZO;dO1Zb.db1Z0.style.width=dOlZb.offsetWidth+"px";dO1Zb.db1Z0.style.height=dOlZb.offsetHeight+"px";dOlZb.style.position='relative';dOlZb.style.tableLayout='fixed';dOlZb.style.width='100%';dOlZb.style.height='100%';};
function dO126(dO1Zb){for(var dOlZb=0;dOlZb<dO1Zb.childNodes.length;dOlZb++){var dOlZ6=dO1Zb.childNodes[dOlZb];if(dOlZ6!=null&&dOlZ6.tagName!=null&&dOlZ6.tagName.toLowerCase()=='table'){dOlZ6.style.tableLayout='';dOlZ6.style.height='';dOlZ6.style.width='';dOlZ6.width='';dOlZ6.height='';};};};
function dbZ1O(dO1Zb){dO1Zb.d6120=Math.abs(parseInt(dO1Zb.scrollAmount));if(isNaN(dO1Zb.d6120)){dO1Zb.d6120=6;};dO1Zb.scrollDelay=Math.abs(parseInt(dO1Zb.scrollDelay));if(isNaN(dO1Zb.scrollDelay)){dO1Zb.scrollDelay=85;};switch(dO1Zb.d61Z0){case "right":dO1Zb.dbl20=dO1Zb.db1Z0.offsetWidth;break;case "up":dO1Zb.dbl20=-dO1Zb.db1Z0.offsetHeight;break;case "down":dO1Zb.dbl20=dO1Zb.db1Z0.offsetHeight;break;case "left":default:dO1Zb.dbl20=-dO1Zb.db1Z0.offsetWidth;break;};};
function dbZ10(dO1Zb){try{dO1Zb.d61Z0=dO1Zb.direction.toLowerCase();}
catch(dOlZb){dO1Zb.d61Z0="left";};switch(dO1Zb.d61Z0){case "right":dO1Zb.d6lZ0=d6Z10;dO1Zb.d6l2O=d6Zl0;dO1Zb.d6l20=d621O;dO1Zb.db120=db2l0;dO1Zb.d6lZO=db210;break;case "up":dO1Zb.d6lZ0=d62lO;dO1Zb.d6l2O=d6Z1O;dO1Zb.d6l20=dblZO;dO1Zb.db120=db21O;dO1Zb.d6lZO=d6ZlO;break;case "down":dO1Zb.d6lZ0=d62lO;dO1Zb.d6l2O=d6Z1O;dO1Zb.d6l20=dblZO;dO1Zb.db120=db21O;dO1Zb.d6lZO=d6ZlO;break;case "left":default:dO1Zb.d6lZ0=d6Z10;dO1Zb.d6l2O=d6Zl0;dO1Zb.d6l20=d621O;dO1Zb.db120=db2l0;dO1Zb.d6lZO=db210;break;};};
function db2lO(dOlZb,dO1Zb,dOlZ6){var dOl2b=dO1Zb.db1ZO;var dOl26;switch(dOlZb){case "right":dOl26=dO1Zb.db12O.insertCell();dOl26.style.width=dOlZ6+"px";dO1Zb.d6120=-dO1Zb.d6120;dO1Zb.scrollLeft=dO1Zb.scrollWidth;break;case "up":dOl2b.style.top=dOlZ6+"px";dO1Zb.scrollTop=0;break;case "down":dOl26=dOl2b.insertRow().insertCell();dOl26.style.height=dOlZ6+"px";dO1Zb.d6120=-dO1Zb.d6120;dO1Zb.scrollTop=dO1Zb.scrollHeight;break;case "left":default:dOl2b.style.left=dOlZ6+"px";dO1Zb.scrollLeft=0;break;};};
function db2l0(dO1Zb,dOlZb){dO1Zb.scrollLeft=dOlZb;};
function db21O(dO1Zb,dOlZb){dO1Zb.scrollTop=dOlZb;};
function db210(dO1Zb){return dO1Zb.scrollLeft;};
function d6ZlO(dO1Zb){return dO1Zb.scrollTop;};
function d6Zl0(dO1Zb){return dO1Zb.db1ZO.offsetWidth;};
function d6Z1O(dO1Zb){return dO1Zb.db1ZO.offsetHeight;};
function d6Z10(dO1Zb){return dO1Zb.offsetWidth;};
function d62lO(dO1Zb){return dO1Zb.offsetHeight;};
function d62l0(dO1Zb){var dOlZb=0;var dOlZ6=dO1Zb.d6l2O(dO1Zb);while(dOlZb!=dOlZ6&&dOlZ6<=dO1Zb.d6lZ0(dO1Zb)+Math.abs(dO1Zb.d6120)+Math.abs(dO1Zb.dbl20)){dO1Zb.d6l20(dO1Zb);dOlZb=dOlZ6;dOlZ6=dO1Zb.d6l2O(dO1Zb);};dO1Zb.d612O=dO1Zb.d6l2O(dO1Zb);};
function d621O(dO1Zb){return d6210(dO1Zb,dO1Zb.db12O);};
function d6210(dO1Zb,dOlZb){var dOl2b=dOlZb.insertCell();dOl2b.innerHTML=dO1Zb.db1Z0.innerHTML;dOl2b.style.width=dO1Zb.db1Z0.style.width;dOl2b.style.height=dO1Zb.db1Z0.style.height;return dOl2b;};
function dblZO(dO1Zb){var dOlZb=dO1Zb.db1ZO.insertRow();return d6210(dO1Zb,dOlZb);};
function dblZ0(dO1Zb){if(dO1Zb.d61ZO!=null){clearInterval(dO1Zb.d61ZO);dO1Zb.d61ZO=null;};};
function dbl2O(dO1Zb){if(dO1Zb.d61ZO==null){dO1Zb.d61ZO=setInterval(function(){dbZlO(dO1Zb);}
,dO1Zb.scrollDelay);};};
function StartMarquee(dOlZb){try{var dO1Zb=document.getElementById(dOlZb);if(dO1Zb!=null){if(dO1Zb.childNodes.length==0){return;};dbZl0(dO1Zb);if(dO1Zb.d6lZ0(dO1Zb)==0){return;};dbl2O(dO1Zb);};}
catch(e){};};
function RebuildMarquee(dOlZb){try{var dO1Zb=document.getElementById(dOlZb);if(dO1Zb!=null&&dO1Zb.db1ZO!=null){var dOl2b=dO1Zb.d6lZO(dO1Zb);if(dO1Zb.dbl20>0){if(dO1Zb.d6lZO==db210){dOl2b-=dO1Zb.scrollWidth;}
else{dOl2b-=dO1Zb.scrollHeight;};dOl2b+=dO1Zb.d6lZ0(dO1Zb);};dblZ0(dO1Zb);var dOlZ6=dO1Zb.db1Z0.innerHTML;if(dO1Zb.d0lZ6==false){dOlZ6=dOlZ6.substr(6,dOlZ6.length-13);};dO1Zb.innerHTML=dOlZ6;dO1Zb.d6lZ0=null;dO1Zb.style.width='100%';dO1Zb.style.height='100%';StartMarquee(dOlZb);dO1Zb.db120(dO1Zb,dO1Zb.d6lZO(dO1Zb)+dOl2b);};}
catch(dOlZ6){};};if(typeof(fkcelMenuData)!='object'){fkcelMenuData=new Array;fkcelMenuTimeout=null;fkcelMenuTarget=window;fkcelMenuSource=window;fkcelMenuObjects=new Array;fkcelMenuTopDiv=null;MenuStyle="border:solid 1px #B9B9B9;background-color:#FFFFFF;";MenuItemStyle="cursor:pointer;height:20px;font-size:12px;background-color:#FFFFFF;color:#000000;";MenuItemOverStyle="cursor:pointer;height:20px;font-size:12px;background-color:silver;color:#000000;";BtnBgImg="btn_black.gif,btn_black_blue.gif";ArrImg="arr_black.gif,arr_white.gif";MynetcssToJsMap=new Array;MynetcssToJsMap["background"]="background";MynetcssToJsMap["background-attachment"]="backgroundAttachment";MynetcssToJsMap["background-color"]="backgroundColor";MynetcssToJsMap["background-image"]="backgroundImage";MynetcssToJsMap["background-position"]="backgroundPosition";MynetcssToJsMap["background-position-x"]="backgroundPositionX";MynetcssToJsMap["background-position-y"]="backgroundPositionY";MynetcssToJsMap["background-repeat"]="backgroundRepeat";MynetcssToJsMap["behavior"]="behavior";MynetcssToJsMap["border"]="border";MynetcssToJsMap["border-bottom"]="borderBottom";MynetcssToJsMap["border-bottom-color"]="borderBottomColor";MynetcssToJsMap["border-bottom-style"]="borderBottomStyle";MynetcssToJsMap["border-bottom-width"]="borderBottomWidth";MynetcssToJsMap["border-color"]="borderColor";MynetcssToJsMap["border-left"]="borderLeft";MynetcssToJsMap["border-left-color"]="borderLeftColor";MynetcssToJsMap["border-left-style"]="borderLeftStyle";MynetcssToJsMap["border-left-width"]="borderLeftWidth";MynetcssToJsMap["border-right"]="borderRight";MynetcssToJsMap["border-right-color"]="borderRightColor";MynetcssToJsMap["border-right-style"]="borderRightStyle";MynetcssToJsMap["border-right-width"]="borderRightWidth";MynetcssToJsMap["border-style"]="borderStyle";MynetcssToJsMap["border-top"]="borderTop";MynetcssToJsMap["border-top-color"]="borderTopColor";MynetcssToJsMap["border-top-style"]="borderTopStyle";MynetcssToJsMap["border-top-width"]="borderTopWidth";MynetcssToJsMap["border-width"]="borderWidth";MynetcssToJsMap["bottom"]="bottom";MynetcssToJsMap["clear"]="clear";MynetcssToJsMap["clip"]="clip";MynetcssToJsMap["color"]="color";MynetcssToJsMap["cursor"]="cursor";MynetcssToJsMap["direction"]="direction";MynetcssToJsMap["display"]="display";MynetcssToJsMap["filter"]="filter";MynetcssToJsMap["font"]="font";MynetcssToJsMap["font-family"]="fontFamily";MynetcssToJsMap["font-size"]="fontSize";MynetcssToJsMap["font-style"]="fontStyle";MynetcssToJsMap["font-variant"]="fontVariant";MynetcssToJsMap["font-weight"]="fontWeight";MynetcssToJsMap["height"]="height";MynetcssToJsMap["layout-flow"]="layoutFlow";MynetcssToJsMap["layout-grid"]="layoutGrid";MynetcssToJsMap["layout-grid-char"]="layoutGridChar";MynetcssToJsMap["layout-grid-line"]="layoutGridLine";MynetcssToJsMap["layout-grid-mode"]="layoutGridMode";MynetcssToJsMap["layout-grid-type"]="layoutGridType";MynetcssToJsMap["left"]="left";MynetcssToJsMap["letter-spacing"]="letterSpacing";MynetcssToJsMap["line-break"]="lineBreak";MynetcssToJsMap["line-height"]="lineHeight";MynetcssToJsMap["overflow"]="overflow";MynetcssToJsMap["overflow-x"]="overflowX";MynetcssToJsMap["overflow-y"]="overflowY";MynetcssToJsMap["padding"]="padding";MynetcssToJsMap["padding-bottom"]="paddingBottom";MynetcssToJsMap["padding-left"]="paddingLeft";MynetcssToJsMap["padding-right"]="paddingRight";MynetcssToJsMap["padding-top"]="paddingTop";MynetcssToJsMap["right"]="right";MynetcssToJsMap["scrollbar-3dlight-color"]="scrollbar3dLightColor";MynetcssToJsMap["scrollbar-arrow-color"]="scrollbarArrowColor";MynetcssToJsMap["scrollbar-base-color"]="scrollbarBaseColor";MynetcssToJsMap["scrollbar-darkshadow-color"]="scrollbarDarkShadowColor";MynetcssToJsMap["scrollbar-face-color"]="scrollbarFaceColor";MynetcssToJsMap["scrollbar-highlight-color"]="scrollbarHighlightColor";MynetcssToJsMap["scrollbar-shadow-color"]="scrollbarShadowColor";MynetcssToJsMap["scrollbar-track-color"]="scrollbarTrackColor";MynetcssToJsMap["float"]="styleFloat";MynetcssToJsMap["text-align"]="textAlign";MynetcssToJsMap["text-align-last"]="textAlignLast";MynetcssToJsMap["text-autospace"]="textAutospace";MynetcssToJsMap["text-decoration"]="textDecoration";MynetcssToJsMap["text-indent"]="textIndent";MynetcssToJsMap["text-justify"]="textJustify";MynetcssToJsMap["text-kashida-space"]="textKashidaSpace";MynetcssToJsMap["text-overflow"]="";MynetcssToJsMap["text-transform"]="textTransform";MynetcssToJsMap["text-underline-position"]="textUnderlinePosition";MynetcssToJsMap["top"]="top";MynetcssToJsMap["unicode-bidi"]="unicodeBidi";MynetcssToJsMap["visibility"]="visibility";MynetcssToJsMap["white-space"]="whiteSpace";MynetcssToJsMap["width"]="width";MynetcssToJsMap["z-index"]="zIndex";MynetcssToJsMap["zoom"]="zoom";
function setDivPaddingTop(obj){try{var fontSizePx=parseInt(obj.style.fontSize);var height=parseInt(obj.clientHeight);if(height<=0){try{height=parseInt(obj.style.height);}
catch(ex){height=22;}
}
var paddingTop=(height-fontSizePx)/2;if(paddingTop<0)
paddingTop=4;var menuText=obj.getElementsByTagName("span")[0];menuText.style.paddingTop=paddingTop+"px";menuText.style.display="inline-block";obj.getElementsByTagName("img")[0].style.width=obj.clientWidth+"px";}
catch(e){}
}

function setTargetCss(oTarget,cssStr){if(cssStr==null||cssStr=='')
return;var arrCss=cssStr.split(';');var len=arrCss.length;for(var i=0;i<len;i++){var cssName=arrCss[i].split(':')[0];var cssValue=arrCss[i].substring(cssName.length+1);if(cssName!=''&&cssValue!='')
oTarget.style[MynetcssToJsMap[cssName]]=cssValue;}
}

function fkcelMenuRootOver(id,rootObj){var menuImgs=null;if(fkcelMenuData[id]["btnBgImg"]!=null&&fkcelMenuData[id]["btnBgImg"].length>1){menuImgs=fkcelMenuData[id]["btnBgImg"].split(',');var img=rootObj.getElementsByTagName('img');if(img.length>0){if(menuImgs[1].length>0){img[0].src=menuImgs[1];img[0].style.visibility='visible';}
else{img[0].style.visibility='hidden';}
}
}
var menuStyle='';if(fkcelMenuData[id]["menuRootItemOverStyle"]!=null&&fkcelMenuData[id]["menuRootItemOverStyle"]!='')
menuStyle=fkcelMenuData[id]["menuRootItemOverStyle"];if(menuStyle!='')
setTargetCss(rootObj,menuStyle);}

function fkcelMenuSetCurrent(id,rootObj){var data=fkcelMenuData[id];if(data!=null&&data["CurrentSelectRootItem"]!=null){fkcelMenuRootOut(id,data["CurrentSelectRootItem"],true);}
fkcelMenuRootOver(id,rootObj);if(data!=null){data["CurrentSelectRootItem"]=rootObj;}
}

function fkcelMenuRootOut(id,rootObj,forceToDo){var data=fkcelMenuData[id];if(data!=null&&data["CurrentSelectRootItem"]!=null&&data["CurrentSelectRootItem"]==rootObj&&!forceToDo){return;}
var menuImgs=null;if(fkcelMenuData[id]["btnBgImg"]!=null&&fkcelMenuData[id]["btnBgImg"].length>1){menuImgs=fkcelMenuData[id]["btnBgImg"].split(',');var img=rootObj.getElementsByTagName('img');if(img.length>0){if(menuImgs[0].length>0){img[0].src=menuImgs[0];img[0].style.visibility='visible';}
else{img[0].style.visibility='hidden';}
}
}
var menuStyle='';if(fkcelMenuData[id]["menuRootItemStyle"]!=null&&fkcelMenuData[id]["menuRootItemStyle"]!='')
menuStyle=fkcelMenuData[id]["menuRootItemStyle"];if(menuStyle!='')
setTargetCss(rootObj,menuStyle);}

function fkcelMenuObject(id,target){if(target==null)
target=window;var body=target.document.body;this.borderStyle='';if(fkcelMenuTopDiv==null){fkcelMenuTopDiv=document.createElement('DIV');if(body.childNodes.length<=0)
body.insertBefore(fkcelMenuTopDiv,null);else
body.insertBefore(fkcelMenuTopDiv,body.childNodes[0]);}
var data=fkcelMenuData[id];var div=target.document.createElement('DIV');fkcelMenuTopDiv.insertBefore(div,null);var menuStyle=MenuStyle;var menuWidthHtml='';if(data!=null){if(data["menuStyle"]!=null&&data["menuStyle"]!='')
menuStyle=data["menuStyle"];var menuWidth=data["width"];menuWidthHtml=(menuWidth==null||menuWidth=='')?'':('width='+menuWidth);}
div.innerHTML="<iframe src='' FRAMEBORDER='no' scrolling='no' style='visibility:hidden;moz-opacity:0.0;filter:alpha(opacity=0);position:absolute;z-index:10000000'></iframe>"+"<table onmousemove='fkcelMenuSetTimeout(100000)' onmouseout='fkcelMenuSetTimeout(1000)'  onblur='fkcelMenuBlur()'"+menuWidthHtml+" style='"+menuStyle+";visibility:hidden;position:absolute;left:0px;top:0px;z-index:10000000;border-collapse:collapse;' cellpadding=4>"+"<tr valign=top><td width='100%'>"+"</td></tr>"+"</table>";this.id=id;this.div=div;this.data=data;this.iframe=this.div.getElementsByTagName('IFRAME')[0];this.table=this.div.getElementsByTagName('TABLE')[0];this.td=this.table.rows[0].cells[0];this.selectedItemId=null;}

function fkcelMenuSetTimeout(millisecond){fkcelMenuSource.fkcelMenuTimeout=new Date();fkcelMenuSource.fkcelMenuTimeout.setTime(fkcelMenuSource.fkcelMenuTimeout.getTime()+millisecond);}

function fkcelMenuEnter(tr,menuId,itemId){fkcelMenuSetTimeout(100000);var data=fkcelMenuData[menuId];var table=tr.offsetParent;while(table!=null&&!fkcelMenuTableInArray(table))
table=table.offsetParent;var obj,objIndex;for(var objIndex=0;objIndex<fkcelMenuObjects.length;objIndex++){obj=fkcelMenuObjects[objIndex];if(obj.table==table)
break;}
if(obj.selectedItemId==itemId)
return;obj.selectedItemId=itemId;var menuItemStyle=MenuItemStyle;if(data["menuItemStyle"]!=''&&data["menuItemStyle"]!=null)
menuItemStyle=data["menuItemStyle"];for(var i=0;i<tr.offsetParent.rows.length;i++){var a=tr.offsetParent.rows[i];if(a.style.display!='none'&&a.innerText!=''){setTargetCss(a.childNodes[0].childNodes[0],menuItemStyle);}
}
var curItem=getMenueItemById(data,itemId);var menuItemOverStyle=MenuItemOverStyle;if(data["menuItemOverStyle"]!=null&&data["menuItemOverStyle"]!='')
menuItemOverStyle=data["menuItemOverStyle"];if(tr.style.display!='none'&&tr.innerText!=''&&(curItem.url!=''||curItem.hasChild!=false))
setTargetCss(tr.childNodes[0].childNodes[0],menuItemOverStyle);while(fkcelMenuObjects.length>objIndex+1){fkcelMenuObjects.pop().div.removeNode(true);}
if(curItem.hasChild){var obj=fkcelMenuGenerateTable2(menuId,curItem.id,window);if(obj==null)
return;var x=fkcelMenuObjectLeft(tr)+tr.offsetWidth+4;var y=fkcelMenuObjectTop(tr);if(x>document.body.offsetWidth-obj.table.offsetWidth-20)
x=fkcelMenuObjectLeft(tr)-obj.table.offsetWidth-5;fkcelMenuSetPos(obj,x,y,window);}
}

function fkcelMenuRemoveItemById(data,itemId){var index=fkcelMenuGetItemIndexById(data,itemId);if(index>=0)
data.splice(index,1);}

function fkcelMenuGetItemIndexById(data,itemId){var len=data.length;for(var i=0;i<len;i++){if(data[i].id==itemId){return i;}
}
return-1;}

function getMenueItemById(data,itemId){var index=fkcelMenuGetItemIndexById(data,itemId);if(index>=0)
return data[index];return null;}

function fkcelMenuLeave(){fkcelMenuSetTimeout(200);}

function fkcelMenuStartsWith(str,word){if(str!=null&&word!=null&&str.length>=word.length&&str.substr(0,word.length)==word)
return true;return false;}

function fkcelMenuTableInArray(table){for(var i=0;i<fkcelMenuObjects.length;i++){var obj=fkcelMenuObjects[i];if(obj.table==table){return true;}
}
return false;}

function fkcelMenuBlur(){var obj=document.activeElement;while(obj!=null&&!fkcelMenuTableInArray(obj))
obj=obj.offsetParent;if(obj==null){fkcelMenuHide();}
else{obj.focus();}
}

function fkcelMenuGenerateTable(id,target,srcElement,parentId){if(parentId!=null&&parentId!=''){var data=fkcelMenuData[id];if(data==null)
return null;var menuItem=getMenueItemById(data,parentId);if(menuItem==null||!menuItem.hasChild)
return null;}
var obj=fkcelMenuGenerateTable2(id,parentId,target);return obj;}

function fkcelMenuGenerateTable2(id,parentId,target){if(target==null)
target=window;var doc=target.document;fkcelMenuTarget=target;target.fkcelMenuSource=window;var obj=new fkcelMenuObject(id);fkcelMenuObjects[fkcelMenuObjects.length]=obj;var data=obj.data;if(data==null)
return obj;var html='';html+='<table width=100% cellpadding=0 cellspacing=0 >';for(var i=0;i<data.length;i++){if(data[i].parentId==parentId){html+=data[i].getHtml(obj);}
}
html+='</table>';obj.td.innerHTML=html;return obj;}

function fkcelMenuSkip(data,index,subItemCount){while(subItemCount-->0){index+=5;index=fkcelMenuSkip(data,index,data[index-1]);}
return index;}

function fkcelMenuPopup(id,srcElement,elementPoint,menuAlign,target,hide,menuItemId){var x=fkcelMenuObjectLeft(srcElement);var y=fkcelMenuObjectTop(srcElement);if(elementPoint==0){x+=srcElement.offsetWidth;y+=srcElement.offsetHeight;}
else
if(elementPoint==1){y+=srcElement.offsetHeight;}
else
if(elementPoint==2){x+=srcElement.offsetWidth;}
else
if(elementPoint==3){}
return fkcelMenuPopupXY(id,x,y,srcElement,menuAlign,target,hide,menuItemId,srcElement.offsetWidth);}

function fkcelMenuPopupXY(id,x,y,srcElement,align,target,hide,menuItemId,srcElementWidth){if(hide==null||hide)
fkcelMenuHide();if(menuItemId==null)
menuItemId='';var obj=fkcelMenuGenerateTable(id,target,srcElement,menuItemId);if(obj==null)
return null;if(align==null||align==0){}
else
if(align==1)
x-=obj.table.offsetWidth;else
if(align==2)
y-=obj.table.offsetHeight;else
if(align==3){x-=obj.table.offsetWidth;;y-=obj.table.offsetHeight;}
if(srcElementWidth==null){srcElementWidth=0;}
if((align==1||align==3)&&x-document.body.scrollLeft<0){x+=obj.table.offsetWidth+srcElementWidth;}
if((align==0||align==2)&&eval(x)-document.body.scrollLeft>document.body.offsetWidth-obj.table.offsetWidth-20){x-=obj.table.offsetWidth+eval(srcElementWidth);}
fkcelMenuSetPos(obj,x,y,target);fkcelMenuSetTimeout(1000);return obj;}

function fkcelMenuSetPos(obj,x,y,target){if(target==null)
target=window;var doc=target.document;var table=obj.table;if(y+table.offsetHeight+30>doc.body.offsetHeight+getScrollTop(target))
y=doc.body.offsetHeight+getScrollTop(target)-table.offsetHeight-30;if(y<0)
y=0;table.style.left=x+'px';table.style.top=y+'px';table.style.visibility='visible';table.focus();var iframe=obj.iframe;iframe.style.pixelLeft=table.style.pixelLeft;iframe.style.pixelTop=table.style.pixelTop;iframe.width=table.offsetWidth;iframe.height=table.offsetHeight;iframe.style.visibility='visible';}

function fkcelMenuHide(){while(fkcelMenuObjects.length>0){var obj=fkcelMenuObjects.pop();obj.div.parentNode.removeChild(obj.div);}
}

function fkcelMenuIsShowing(){return fkcelMenuObjects.length>0;}

function fkcelMenuGetShowingId(){if(fkcelMenuObjects.length>0)
return fkcelMenuObjects[0].id;return null;}

function fkcelMenuObjectLeft(o){var x=0;while(o!=null){x+=o.offsetLeft;o=o.offsetParent;}
return x;}

function fkcelMenuObjectTop(o){var y=0;while(o!=null){y+=o.offsetTop;o=o.offsetParent;}
return y;}

function fkcelMenuInterval(){var now=new Date();if(fkcelMenuTimeout!=null&&now.getTime()>fkcelMenuTimeout.getTime()){fkcelMenuTimeout=null;fkcelMenuHide();}
}

function fkcelMenueItem(id,parentId,leftText,text,url,rightText,hasChild){this.id=id;this.leftText=leftText;this.text=text;this.url=url;this.rightText=rightText;this.hasChild=hasChild;this.parentId=parentId;this.getHtml=function(objM){var html="";html+="<tr ";html+=" onmouseover=fkcelMenuEnter(this,'"+objM.id+"','"+this.id+"') onmouseout='fkcelMenuLeave()'";if(url!=''){html+=this.url;}
html+="><td width='100%'>";html+="<table width='100%' style='"+fkcelMenuData[objM.id]["menuItemStyle"]+"' cellpadding=4 cellspacing=0><tr>";if(text=='---'){html+="<td colspan=3 height=5><table width=100% height=1 cellpadding=0 cellspacing=0 bgcolor=gray><tr><td></td></tr></table></td>";}
else{html+="<td style='width:1px;'><nobr>"+this.leftText+"</nobr></td>";html+='<td width=100%><nobr>'+this.text+'</nobr></td>';html+="<td width=1 style='width:1px;'align=right><nobr>"+this.rightText;if(this.hasChild){html+="<img src='/res/menu_expand.gif' width=15 height=15 border='0'/>";}
html+='</nobr></td>';}
html+='</tr></table></td></tr>';return html;}
}
window.setInterval(fkcelMenuInterval,200);}
if(typeof(HTMLElement)!="undefined"){HTMLElement.prototype.contains=function(obj){while(obj!=null&&typeof(obj.tagName)!="undefind"){if(obj==this)
return true;obj=obj.parentNode;}
return false;};}
var RandomFilterText=new Object();RandomFilterText=function(targetId,textArray,colorArray){clearTimeout(this.timer);this.textArray=textArray;this.targetId=targetId;this.colorArray=colorArray;this.timer="";}
RandomFilterText.prototype.Ran=function(seed){return Math.floor((seed+1)*Math.random());}
RandomFilterText.prototype.Play=function(){if(this.timer+""!=""){clearTimeout(this.timer);}
var rt1=document.getElementById(this.targetId);if(rt1==null){return;}
rt1.style.filter="revealTrans(Duration=1.5,Transition="+this.Ran(22)+")";rt1.filters.revealTrans.apply();rt1.style.background=this.colorArray[this.Ran(this.colorArray.length-1)];rt1.innerHTML=this.textArray[this.Ran(this.textArray.length-1)];rt1.filters.revealTrans.play();var self=this;var tempF=function(){self.Play();};this.timer=setTimeout(tempF,3500);}
RandomFilterText.prototype.ChangeArray=function(newArray){this.textArray=newArray;}
RollingImage=function(speed,prefix,width){if(speed>90)
speed=90;if(speed<0)
speed=0;this.tick=100-speed;this.width=width;this.obj1=document.getElementById(prefix+"_RollingImg_1");this.obj2=document.getElementById(prefix+"_RollingImg_2");this.obj3=document.getElementById(prefix+"_RollingImg_3");this.obj3.innerHTML=this.obj2.innerHTML;var obj=this;var totalWidth=obj.obj2.offsetWidth*2;this.count=0;this.Marquee=function(){if(obj.obj2.offsetWidth>0&&2*obj.width>totalWidth){obj.AddCells();}
try{if(obj.obj1.scrollLeft>=obj.obj2.offsetWidth)
obj.obj1.scrollLeft=0;else
obj.obj1.scrollLeft++;}
catch(e){}
}
var MyMar=setInterval(this.Marquee,this.tick)
this.obj1.onmouseover=function(){clearInterval(MyMar);}
this.obj1.onmouseout=function(){MyMar=setInterval(obj.Marquee,obj.tick);}
this.AddCells=function(){while(2*obj.width>totalWidth){var newCell=obj.obj3.parentElement.insertCell();newCell.innerHTML=obj.obj2.innerHTML;totalWidth+=obj.obj2.offsetWidth;}
}
}
RotatingBox=function(prefix,width,imgs,urls,titles,speed){var speed=20;var img1=document.getElementById(prefix+"_RotatingBox_1");var img2=document.getElementById(prefix+"_RotatingBox_2");var timer;var currentIndex=0;var step=3;if(speed<1)
step=1;else
if(speed>10)
step=10;else
step=speed;var obj=this;this.Play=function(){if(img1.clientWidth<=0){var nextIndex;currentIndex+=1;nextIndex=currentIndex+1;if(currentIndex==imgs.length-1){nextIndex=0;}
else
if(currentIndex>=imgs.length){currentIndex=0;nextIndex=1;}
try{img1.style.width=width;img2.style.width=0;img1.title=titles[currentIndex];img2.title=titles[nextIndex];img1.childNodes[0].src=imgs[currentIndex];img2.childNodes[0].src=imgs[nextIndex];}
catch(e){}
}
if(img1.clientWidth>0){var finalStep=step;if(img1.clientWidth<=step||img2.clientWidth<=step)
finalStep=1;img1.style.width=img1.clientWidth-finalStep;img2.style.width=img2.clientWidth+finalStep;}
clearTimeout(timer);timer=setTimeout(obj.Play,speed);}
this.Stop=function(){clearTimeout(timer);}
img1.onmouseout=obj.Play;img2.onmouseout=obj.Play;img1.onmouseover=obj.Stop;img2.onmouseover=obj.Stop;}
RotatingImages=function(prefix,Car_Image_Sources,size){var Car_Image_Width=size;var Car_Image_Height=size;var Car_Border=true;var Car_Border_Color="white";var Car_Speed=4;var Car_Direction=true;var Car_NoOfSides=12;var obj=this;var CW_I=new Array(Car_NoOfSides/2+1);var C_ClcW=new Array(Car_NoOfSides/2);var C_Coef=new Array(3*Math.PI/2,0,3*Math.PI/2,11*Math.PI/6,Math.PI/6,3*Math.PI/2,7*Math.PI/4,0,Math.PI/4,3*Math.PI/2,5*Math.PI/3,11*Math.PI/6,0,Math.PI/6,Math.PI/3);var C_CoefOf=Car_NoOfSides==4?0:Car_NoOfSides==6?2:Car_NoOfSides==8?5:9;var C_Pre_Img=new Array(Car_Image_Sources.length);var C_Angle=Car_Direction?Math.PI/(Car_NoOfSides/2):0,C_CrImg=Car_NoOfSides,C_MaxW,C_TotalW,C_Stppd=false,i,C_LeftOffset,C_HalfNo=Car_NoOfSides/2;this.Play=function(){if(document.getElementById){for(i=0;i<Car_Image_Sources.length;i+=2){C_Pre_Img[i]=new Image();C_Pre_Img[i].src=Car_Image_Sources[i];}
C_MaxW=Car_Image_Width/Math.sin(Math.PI/Car_NoOfSides)+C_HalfNo+1;Car_Div=document.getElementById(prefix+"_rotatingImgsDiv");for(i=0;i<C_HalfNo;i++){CW_I[i]=document.createElement("img");Car_Div.appendChild(CW_I[i]);CW_I[i].style.position="absolute";CW_I[i].style.top=0+"px";CW_I[i].style.height=Car_Image_Height+"px";if(Car_Border){CW_I[i].style.borderStyle="solid";CW_I[i].style.borderWidth=1+"px";CW_I[i].style.borderColor=Car_Border_Color;}
CW_I[i].src=Car_Image_Sources[2*i];CW_I[i].lnk=Car_Image_Sources[2*i+1];CW_I[i].onclick=obj.C_LdLnk;CW_I[i].onmouseover=obj.C_Stp;CW_I[i].onmouseout=obj.C_Rstrt;}
obj.CarImages();}
}
this.CarImages=function(){if(!C_Stppd){C_TotalW=0;for(i=0;i<C_HalfNo;i++){C_ClcW[i]=Math.round(Math.cos(Math.abs(C_Coef[C_CoefOf+i]+C_Angle))*Car_Image_Width);C_TotalW+=C_ClcW[i];}
C_LeftOffset=(C_MaxW-C_TotalW)/2;for(i=0;i<C_HalfNo;i++){CW_I[i].style.left=C_LeftOffset+"px";CW_I[i].style.width=C_ClcW[i]+"px";C_LeftOffset+=C_ClcW[i];}
C_Angle+=Car_Speed/720*Math.PI*(Car_Direction?-1:1);if((Car_Direction&&C_Angle<=0)||(!Car_Direction&&C_Angle>=Math.PI/C_HalfNo)){if(C_CrImg==Car_Image_Sources.length)
C_CrImg=0;if(Car_Direction){CW_I[C_HalfNo]=CW_I[0];for(i=0;i<C_HalfNo;i++){CW_I[i]=CW_I[i+1];}
CW_I[C_HalfNo-1].src=Car_Image_Sources[C_CrImg];CW_I[C_HalfNo-1].lnk=Car_Image_Sources[C_CrImg+1];}
else{for(i=C_HalfNo;i>0;i--){CW_I[i]=CW_I[i-1];}
CW_I[0]=CW_I[C_HalfNo];CW_I[0].src=Car_Image_Sources[C_CrImg];CW_I[0].lnk=Car_Image_Sources[C_CrImg+1]}
C_Angle=Car_Direction?Math.PI/C_HalfNo:0;C_CrImg+=2}
}
setTimeout(obj.CarImages,50);}
this.C_LdLnk=function(){if(this.lnk){window.location.href=this.lnk;}
}
this.C_Stp=function(){this.style.cursor=this.lnk?"pointer":"default";C_Stppd=true;}
this.C_Rstrt=function(){C_Stppd=false}
}
SliderObject=new Object();SliderObject=function(targetId,maxItems,itemsWidth){this.targetX=0;this.targetY=0;this.targetId=targetId;this.currentTarget=0;this.targetSpeed=30;this.maxTarget=maxItems;this.slowSpeed=70;this.quickSpeed=170;this.timed="";this.itemsWidth=itemsWidth;}
SliderObject.prototype.retrieveComputedStyle=function(element,styleProperty){var computedStyle=null;if(typeof
element.currentStyle!="undefined"){computedStyle=element.currentStyle;}
else{computedStyle=document.defaultView.getComputedStyle(element,null);}
return computedStyle[styleProperty];}
SliderObject.prototype.moveObject=function(target,destinationLeft,destinationTop,maxSpeed){var currentLeft=parseInt(this.retrieveComputedStyle(target,"left"));var currentTop=parseInt(this.retrieveComputedStyle(target,"top"));if(isNaN(currentLeft)){currentLeft=0;}
if(isNaN(currentTop)){currentTop=0;}
if(currentLeft<destinationLeft){currentLeft+=maxSpeed;if(currentLeft>destinationLeft){currentLeft=destinationLeft;}
}
else{currentLeft-=maxSpeed;if(currentLeft<destinationLeft){currentLeft=destinationLeft;}
}
if(currentTop<destinationTop){currentTop+=maxSpeed;if(currentTop>destinationTop){currentTop=destinationTop;}
}
else{currentTop-=maxSpeed;if(currentTop<destinationTop){currentTop=destinationTop;}
}
target.style.left=currentLeft+"px";target.style.top=currentTop+"px";var self=this;if(currentLeft==destinationLeft&&currentTop==destinationTop){if(typeof
this.timed!=undefined){clearTimeout(this.timed);}
}
else{var tempF=function(){self.moveObject(target,destinationLeft,destinationTop,maxSpeed);};this.timed=setTimeout(tempF,50);}
}
SliderObject.prototype.moveIt=function(){this.targetX=this.currentTarget*(-(this.itemsWidth));this.clearAllClickStyle();this.setClickStyle(document.getElementById(this.targetId+'_title_'+(this.currentTarget)));if(this.currentTarget==0){this.endSideStyle(document.getElementById(this.targetId+"SiderLeft"));this.clearSideStyle(document.getElementById(this.targetId+"SiderRight"));}
else
if(this.currentTarget==this.maxTarget-1){this.endSideStyle(document.getElementById(this.targetId+"SiderRight"));this.clearSideStyle(document.getElementById(this.targetId+"SiderLeft"));}
else{if(document.getElementById(this.targetId+"SiderLeft").className+""!=this.targetId+"SideOnMouseOver"){this.clearSideStyle(document.getElementById(this.targetId+"SiderLeft"));}
if(document.getElementById(this.targetId+"SiderRight").className+""!=this.targetId+"SideOnMouseOver"){this.clearSideStyle(document.getElementById(this.targetId+"SiderRight"));}
}
this.moveObject(document.getElementById(this.targetId),this.targetX,this.targetY,this.targetSpeed);}
SliderObject.prototype.moveNext=function(){this.targetSpeed=this.slowSpeed;if(this.currentTarget<this.maxTarget-1){this.currentTarget++;this.moveIt();}
}
SliderObject.prototype.movePre=function(){this.targetSpeed=this.slowSpeed;if(this.currentTarget>0){this.currentTarget--;this.moveIt();}
}
SliderObject.prototype.moveFirst=function(){this.targetSpeed=this.quickSpeed;this.currentTarget=0;this.moveIt();}
SliderObject.prototype.moveLast=function(){this.targetSpeed=this.quickSpeed;this.currentTarget=this.maxTarget-1;this.moveIt();}
SliderObject.prototype.moveHere=function(index){this.targetSpeed=this.quickSpeed;if((index>this.maxTarget-1)&&(index<0)){return;}
if(((index)-this.currentTarget==1)||(this.currentTarget-(index)==1)){this.targetSpeed=this.slowSpeed;}
this.currentTarget=index;this.moveIt();}
SliderObject.prototype.setClickStyle=function(target){var tid=this.targetId;if(target.className+""==tid+"TitleOnSelected"){return;}
target.className=this.targetId+"TitleOnSelected";}
SliderObject.prototype.clearClickStyle=function(target){var tid=this.targetId;if(target.className+""==tid+"TitleNormal"){return;}
target.className=this.targetId+"TitleNormal";}
SliderObject.prototype.mouseOutChange=function(target){var tid=this.targetId;if(target.className+""==tid+"TitleNormal"){return;}
if(target.className+""==tid+"TitleOnSelected"){return;}
target.className=this.targetId+"TitleNormal";}
SliderObject.prototype.mouseMoveChang=function(target){var tid=this.targetId;if(target.className+""==tid+"TitleOnMouseOver"){return;}
if(target.className+""==tid+"TitleOnSelected"){return;}
target.className=this.targetId+"TitleOnMouseOver";}
SliderObject.prototype.sideMoveChange=function(target){var tid=this.targetId;if(target.className+""==tid+"SideEnd"){return;}
target.className=this.targetId+"SideOnMouseOver";}
SliderObject.prototype.clearSideMoveStyle=function(target){var tid=this.targetId;if(target.className+""==tid+"SideEnd"){return;}
this.clearSideStyle(target);}
SliderObject.prototype.clearSideStyle=function(target){var tid=this.targetId;if(target.className+""==tid+"SideNormal"){return;}
if(((this.currentTarget==0)&&(target.id==this.TargetId+"SiderLeft"))||((this.currentTarget==this.maxTarget-1)&&(target.id==this.TargetId+"SiderRight"))){if(target.className+""==tid+"SideEnd"){return;}
}
target.className=this.targetId+"SideNormal";}
SliderObject.prototype.endSideStyle=function(target){target.className=this.targetId+"SideEnd";}
SliderObject.prototype.clearAllClickStyle=function(){for(var i=0,j=this.maxTarget;i<j;i++){this.clearClickStyle(document.getElementById(this.targetId+'_title_'+(i)));}
}
SloshingImage=function(prefix,length,speed,imgWidth){this.prefix=prefix;if(speed>90)
speed=90;if(speed<0)
speed=0;this.tick=100-speed;this.step=0;this.img=document.images[this.prefix+'_SlosingImg'];this.imgWidth=imgWidth;this.length=length;this.x_max=this.length-this.imgWidth;this.x=0;var obj=this;var timeId;clearTimeout(timeId);this.Run=function(){obj.img.style.marginLeft=obj.x;if(obj.x>=obj.x_max/2){obj.step--;if(obj.x<obj.x_max&&obj.step==0)
obj.step=1;}
else{obj.step++;if(obj.x>0&&obj.step==0)
obj.step=-1;}
obj.x+=obj.step;if(obj.x>=obj.x_max)
obj.x=obj.x_max;if(obj.x<=0)
obj.x=0;timeId=setTimeout(obj.Run,obj.tick);}
}
var SnakeTextEffect=new Object();SnakeTextEffect=function(textArray,pathArray,fontSize,fontColor,identityId,maxLength){this.mes=textArray;this.maxtextlength=maxLength;this.path=pathArray;this.stoptime=5;this.textfont="宋体";this.textsize=fontSize;this.textcolor=fontColor;this.letterspace=fontSize;this.tickerleft=this.path[this.path.length-2];this.tickertop=this.path[this.path.length-1];this.timer;this.finalxpos=this.tickerleft;this.i_mes=0;this.message="";this.i_path=0;this.stoptimemilli=this.stoptime*this.stoptime+1000;this.pathx=new Array();this.identityId=identityId;this.timer="";if(document.layers){if(this.textsize>20){this.textsize=6;}
else
if(this.textsize>20){this.textsize=5;}
else
if(this.textsize>14){this.textsize=4;}
else
if(this.textsize>10){this.textsize=3;}
else
if(this.textsize>8){this.textsize=2;}
else
if(this.textsize<=7){this.textsize=1;}
}
this.ii=0;for(var i=0;i<=this.path.length-1;i=i+2){this.pathx[this.ii]=this.path[i];this.ii++;}
this.ii=0;this.pathy=new Array();for(var i=1;i<=this.path.length-1;i=i+2){this.pathy[this.ii]=this.path[i];this.ii++;}
this.xpos=new Array();for(i=0;i<=this.maxtextlength;i++){this.xpos[i]=5000;}
this.ypos=new Array();for(i=0;i<=this.maxtextlength;i++){this.ypos[i]=5000;}
}
SnakeTextEffect.prototype.MakeSnake=function(){if(this.i_path<=this.pathx.length-1){for(i=this.message.length-1;i>=1;i--){this.xpos[i]=this.xpos[i-1];this.ypos[i]=this.ypos[i-1];}
this.xpos[0]=this.pathx[this.i_path];this.ypos[0]=this.pathy[this.i_path];for(var i=0;i<this.message.length-1;i++){if(document.getElementById(this.identityId+i)!=null){var thisspan=document.getElementById(this.identityId+i).style;thisspan.posLeft=this.xpos[i];thisspan.posTop=this.ypos[i];}
}
this.i_path++;var self=this;var tempF=function(){self.MakeSnake();};this.timer=setTimeout(tempF,20);}
else{clearTimeout(this.timer);this.EndPosition();}
}
SnakeTextEffect.prototype.EndPosition=function(){for(var i=0;i<this.message.length-1;i++){if(document.getElementById(this.identityId+i)!=null){var thisspan=document.getElementById(this.identityId+i).style;thisspan.left=this.tickerleft+this.finalxpos;thisspan.top=this.tickertop;this.finalxpos=this.finalxpos+this.letterspace;}
}
var self=this;var tempF=function(){self.ClearMessage();};timer=setTimeout(tempF,this.stoptimemilli);}
SnakeTextEffect.prototype.ClearMessage=function(){this.finalxpos=this.tickertop;this.i_path=0;for(var i=0;i<this.maxtextlength;i++){this.xpos[i]=5000;}
for(i=0;i<this.maxtextlength;i++){var thisspan=document.getElementById(this.identityId+i)
if(thisspan!=null){thisspan.innerHTML=" ";var thisspanStyle=thisspan.style;thisspanStyle.posLeft=this.xpos[i]=5000;}
}
var self=this;var tempF=function(){self.ChangeMessage();};timer=setTimeout(tempF,2000);}
SnakeTextEffect.prototype.ChangeMessage=function(){var messa=this.mes[this.i_mes];this.message=messa.split("");for(var i=0;i<this.message.length-1;i++){if(document.getElementById(this.identityId+i)!=null){var thisspan=document.getElementById(this.identityId+i);thisspan.innerHTML="<p>"+this.message[i]+"</p>";}
}
this.i_mes++;if(this.i_mes>=this.mes.length){this.i_mes=0;}
this.finalxpos=this.tickertop;this.i_path=0;var self=this;var tempF=function(){self.MakeSnake();};timer=setTimeout(tempF,10);}
SnakeTextEffect.prototype.Start=function(){for(var i=0;i<=this.maxtextlength;i++){document.write("<span id='"+(this.identityId+i)+"' class='spanstyle'>");document.write(this.message);document.write("</span>");}
this.ChangeMessage();}

function enHex(aDigit){return("0123456789ABCDEF".substring(aDigit,aDigit+1));}

function deHex(aDigit){return("0123456789ABCDEF".indexOf(aDigit));}

function toHex(n){return(enHex((0xf00000&n)>>20)+enHex((0x0f0000&n)>>16)+enHex((0x00f000&n)>>12)+enHex((0x000f00&n)>>8)+enHex((0x0000f0&n)>>4)+enHex((0x00000f&n)>>0));}

function toDecimal(hexNum){var tmp=""+hexNum.toUpperCase();while(tmp.length<6)
tmp="0"+tmp
return((deHex(tmp.substring(0,1))<<20)+(deHex(tmp.substring(1,2))<<16)+(deHex(tmp.substring(2,3))<<12)+(deHex(tmp.substring(3,4))<<8)+(deHex(tmp.substring(4,5))<<4)+(deHex(tmp.substring(5,6))));}

function initArray(theArray,length,val){for(i=0;i<length;i++){theArray[i]=val;}
}
var TransitColorEffect=new Object();TransitColorEffect=function(linkname,mouseOverColour,numberOfLinks,fadeOutColour){this.name="TransitColorEffect";this.linkname=linkname;this.rate=1;this.numFadeLevels=30;this.hoverColour=mouseOverColour;this.numLinks=numberOfLinks;this.bgR='0000'+fadeOutColour.substring(1,3);this.bgG='0000'+fadeOutColour.substring(3,5);this.bgB='0000'+fadeOutColour.substring(5,7);this.currR=new Array(this.numLinks);this.currG=new Array(this.numLinks);this.currB=new Array(this.numLinks);this.count=new Array(this.numLinks);this.fadeOut=new Array(this.numLinks);this.continuous=new Array(this.numLinks);this.newColour=new Array(this.numLinks);this.tID=new Array(this.numLinks);this.redInterval=this.toDecimal(this.bgR)/this.numFadeLevels;this.greenInterval=this.toDecimal(this.bgG)/this.numFadeLevels;this.blueInterval=this.toDecimal(this.bgB)/this.numFadeLevels;this.initArray(this.currR,this.numLinks,0);this.initArray(this.currG,this.numLinks,0);this.initArray(this.currB,this.numLinks,0);this.initArray(this.count,this.numLinks,0);this.initArray(this.fadeOut,this.numLinks,true);this.initArray(this.continuous,this.numLinks,true);this.timeId="";}
TransitColorEffect.prototype.enHex=enHex;TransitColorEffect.prototype.deHex=deHex;TransitColorEffect.prototype.toHex=toHex;TransitColorEffect.prototype.toDecimal=toDecimal;TransitColorEffect.prototype.initArray=initArray;TransitColorEffect.prototype.startFade=function(id){var self=this;if(this.fadeOut[id]==true){this.currR[id]+=this.redInterval;this.currG[id]+=this.greenInterval;this.currB[id]+=this.blueInterval;this.newColour[id]='#'+(this.toHex(this.currR[id])).substring(4,6)+(this.toHex(this.currG[id])).substring(4,6)+(this.toHex(this.currB[id])).substring(4,6);if(++this.count[id]==this.numFadeLevels){this.fadeOut[id]=false;}
}
else{this.currR[id]-=this.redInterval;this.currG[id]-=this.greenInterval;this.currB[id]-=this.blueInterval;this.newColour[id]='#'+(this.toHex(this.currR[id])).substring(4,6)+(this.toHex(this.currG[id])).substring(4,6)+(this.toHex(this.currB[id])).substring(4,6);if(--this.count[id]==0){this.fadeOut[id]=true;}
}
var linkid=this.linkname+id;if(document.getElementById(linkid)==null){return;}
if(linkid!=TranColorwhichCheck___){document.getElementById(linkid).style.color=this.newColour[id];}
else{document.getElementById(linkid).style.color=this.hoverColour;}
var tempF=function(){self.startFade(id);};if(this.tID[id]==null){}
this.tID[id]=setTimeout(tempF,self.rate);}
TransitColorEffect.prototype.Start=function(){var self=this;if(this.timeId+""!=""){clearTimeout(this.timeId);for(var i=0,j=this.tID.length;i<j;i++){clearTimeout(self.tID[i]);}
}
var tempFa;for(var i=0;i<self.numLinks;i++){self.SetTimeStart(i,i*120);}
}
TransitColorEffect.prototype.SetTimeStart=function(index,rate){var self=this;var tempF=function(){self.startFade(index);};this.timeId=setTimeout(tempF,rate);}
TransitColorEffect.prototype.ChangeState=function(mouseOverColour,numberOfLinks,fadeOutColour){this.hoverColour=mouseOverColour;this.numLinks=numberOfLinks;this.bgR='0000'+fadeOutColour.substring(1,3);this.bgG='0000'+fadeOutColour.substring(3,5);this.bgB='0000'+fadeOutColour.substring(5,7);this.currR=new Array(this.numLinks);this.currG=new Array(this.numLinks);this.currB=new Array(this.numLinks);this.count=new Array(this.numLinks);this.fadeOut=new Array(this.numLinks);this.continuous=new Array(this.numLinks);this.newColour=new Array(this.numLinks);this.tID.length=this.numLinks;this.redInterval=this.toDecimal(this.bgR)/this.numFadeLevels;this.greenInterval=this.toDecimal(this.bgG)/this.numFadeLevels;this.blueInterval=this.toDecimal(this.bgB)/this.numFadeLevels;this.initArray(this.currR,this.numLinks,0);this.initArray(this.currG,this.numLinks,0);this.initArray(this.currB,this.numLinks,0);this.initArray(this.count,this.numLinks,0);this.initArray(this.fadeOut,this.numLinks,true);this.initArray(this.continuous,this.numLinks,true);}
TransitColorEffect.prototype.ClearTimeOut=function(){for(var i=0,j=this.tID.length;i<j;i++){if(this.tID[i]!=null){clearTimeout(this.tID[i]);}
else{alert(this.tID[i]);}
}
}
var TranColorwhichCheck___="";
function stopFade(id){TranColorwhichCheck___=id;}

function continueFade(Trs,id){TranColorwhichCheck___="";}