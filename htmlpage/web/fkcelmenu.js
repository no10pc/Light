var fkcelMenuData = new Array; // 存放菜单数据
var fkcelMenuTimeout = null; // 存放超时数据
var fkcelMenuTarget = window; // 存放显示的窗口
var fkcelMenuSource = window; // 存放当前在本窗口显示的菜单数据存放窗口
var fkcelMenuObjects = new Array; // 存放菜单对应的对象, array of fkcelMenuObject
var fkcelMenuTopDiv = null; // the parent of all menu div
var MenuStyle = "border:solid 1px #B9B9B9;background-color:#FFFFFF;";
var MenuItemStyle="cursor:pointer;height:20px;font-size:12px;background-color:#FFFFFF;color:#000000;";
var MenuItemOverStyle="cursor:pointer;height:20px;font-size:12px;background-color:silver;color:#000000;";
var BtnBgImg="btn_black.gif,btn_black_blue.gif";
var ArrImg ="arr_black.gif,arr_white.gif";

MynetcssToJsMap = new Array;
MynetcssToJsMap["background"]	=	"background";
MynetcssToJsMap["background-attachment"]	=	"backgroundAttachment";
MynetcssToJsMap["background-color"]	=	"backgroundColor";
MynetcssToJsMap["background-image"]	=	"backgroundImage";
MynetcssToJsMap["background-position"]	=	"backgroundPosition";
MynetcssToJsMap["background-position-x"]	=	"backgroundPositionX";
MynetcssToJsMap["background-position-y"]	=	"backgroundPositionY";
MynetcssToJsMap["background-repeat"]	=	"backgroundRepeat";
MynetcssToJsMap["behavior"]	=	"behavior";
MynetcssToJsMap["border"]	=	"border";
MynetcssToJsMap["border-bottom"]	=	"borderBottom";
MynetcssToJsMap["border-bottom-color"]	=	"borderBottomColor";
MynetcssToJsMap["border-bottom-style"]	=	"borderBottomStyle";
MynetcssToJsMap["border-bottom-width"]	=	"borderBottomWidth";
MynetcssToJsMap["border-color"]	=	"borderColor";
MynetcssToJsMap["border-left"]	=	"borderLeft";
MynetcssToJsMap["border-left-color"]	=	"borderLeftColor";
MynetcssToJsMap["border-left-style"]	=	"borderLeftStyle";
MynetcssToJsMap["border-left-width"]	=	"borderLeftWidth";
MynetcssToJsMap["border-right"]	=	"borderRight";
MynetcssToJsMap["border-right-color"]	=	"borderRightColor";
MynetcssToJsMap["border-right-style"]	=	"borderRightStyle";
MynetcssToJsMap["border-right-width"]	=	"borderRightWidth";
MynetcssToJsMap["border-style"]	=	"borderStyle";
MynetcssToJsMap["border-top"]	=	"borderTop";
MynetcssToJsMap["border-top-color"]	=	"borderTopColor";
MynetcssToJsMap["border-top-style"]	=	"borderTopStyle";
MynetcssToJsMap["border-top-width"]	=	"borderTopWidth";
MynetcssToJsMap["border-width"]	=	"borderWidth";
MynetcssToJsMap["bottom"]	=	"bottom";
MynetcssToJsMap["clear"]	=	"clear";
MynetcssToJsMap["clip"]	=	"clip";
MynetcssToJsMap["color"]	=	"color";
MynetcssToJsMap["cursor"]	=	"cursor";
MynetcssToJsMap["direction"]	=	"direction";
MynetcssToJsMap["display"]	=	"display";
MynetcssToJsMap["filter"]	=	"filter";
MynetcssToJsMap["font"]	=	"font";
MynetcssToJsMap["font-family"]	=	"fontFamily";
MynetcssToJsMap["font-size"]	=	"fontSize";
MynetcssToJsMap["font-style"]	=	"fontStyle";
MynetcssToJsMap["font-variant"]	=	"fontVariant";
MynetcssToJsMap["font-weight"]	=	"fontWeight";
MynetcssToJsMap["height"]	=	"height";
MynetcssToJsMap["layout-flow"]	=	"layoutFlow";
MynetcssToJsMap["layout-grid"]	=	"layoutGrid";
MynetcssToJsMap["layout-grid-char"]	=	"layoutGridChar";
MynetcssToJsMap["layout-grid-line"]	=	"layoutGridLine";
MynetcssToJsMap["layout-grid-mode"]	=	"layoutGridMode";
MynetcssToJsMap["layout-grid-type"]	=	"layoutGridType";
MynetcssToJsMap["left"]	=	"left";
MynetcssToJsMap["letter-spacing"]	=	"letterSpacing";
MynetcssToJsMap["line-break"]	=	"lineBreak";
MynetcssToJsMap["line-height"]	=	"lineHeight";
MynetcssToJsMap["overflow"]	=	"overflow";
MynetcssToJsMap["overflow-x"]	=	"overflowX";
MynetcssToJsMap["overflow-y"]	=	"overflowY";
MynetcssToJsMap["padding"]	=	"padding";
MynetcssToJsMap["padding-bottom"]	=	"paddingBottom";
MynetcssToJsMap["padding-left"]	=	"paddingLeft";
MynetcssToJsMap["padding-right"]	=	"paddingRight";
MynetcssToJsMap["padding-top"]	=	"paddingTop";
MynetcssToJsMap["right"]	=	"right";
MynetcssToJsMap["scrollbar-3dlight-color"]	=	"scrollbar3dLightColor";
MynetcssToJsMap["scrollbar-arrow-color"]	=	"scrollbarArrowColor";
MynetcssToJsMap["scrollbar-base-color"]	=	"scrollbarBaseColor";
MynetcssToJsMap["scrollbar-darkshadow-color"]	=	"scrollbarDarkShadowColor";
MynetcssToJsMap["scrollbar-face-color"]	=	"scrollbarFaceColor";
MynetcssToJsMap["scrollbar-highlight-color"]	=	"scrollbarHighlightColor";
MynetcssToJsMap["scrollbar-shadow-color"]	=	"scrollbarShadowColor";
MynetcssToJsMap["scrollbar-track-color"]	=	"scrollbarTrackColor";
MynetcssToJsMap["float"]	=	"styleFloat";
MynetcssToJsMap["text-align"]	=	"textAlign";
MynetcssToJsMap["text-align-last"]	=	"textAlignLast";
MynetcssToJsMap["text-autospace"]	=	"textAutospace";
MynetcssToJsMap["text-decoration"]	=	"textDecoration";
MynetcssToJsMap["text-indent"]	=	"textIndent";
MynetcssToJsMap["text-justify"]	=	"textJustify";
MynetcssToJsMap["text-kashida-space"]	=	"textKashidaSpace";
MynetcssToJsMap["text-overflow"]	=	"";
MynetcssToJsMap["text-transform"]	=	"textTransform";
MynetcssToJsMap["text-underline-position"]	=	"textUnderlinePosition";
MynetcssToJsMap["top"]	=	"top";
MynetcssToJsMap["unicode-bidi"]	=	"unicodeBidi";
MynetcssToJsMap["visibility"]	=	"visibility";
MynetcssToJsMap["white-space"]	=	"whiteSpace";
MynetcssToJsMap["width"]	=	"width";
MynetcssToJsMap["z-index"]	=	"zIndex";
MynetcssToJsMap["zoom"]	=	"zoom";

function setDivPadingTop(obj)
{
	try
	{
	var fontSizePx = parseInt(obj.style.fontSize);
	var height = parseInt(obj.clientHeight);
	var paddingTop =(height-fontSizePx)/2;
	obj.getElementsByTagName("div")[0].style.paddingTop = paddingTop+"px";
	obj.width=90 + "px"; 
	}
	catch(e)
	{}
}

function setTargetCss(oTarget,cssStr)
{
   if(cssStr==null || cssStr=='')
	return;
   var arrCss = cssStr.split(';');
   var len = arrCss.length;
   for(var i=0;i<len;i++)
   {
	  var cssName = arrCss[i].split(':')[0];
	  var cssValue = arrCss[i].substring(cssName.length+1);
	  if(cssName!='' && cssValue!='')
	  oTarget.style[MynetcssToJsMap[cssName]] = cssValue;
   }
}
function fkcelMenuRootOver(id,rootObj)
{
  var menuImgs =null;
  if(fkcelMenuData[id]["btnBgImg"]!=null && fkcelMenuData[id]["btnBgImg"].length > 1)
  {
	menuImgs= fkcelMenuData[id]["btnBgImg"].split(',');
	var img = rootObj.getElementsByTagName('img');
	if(img.length>0)
	{
		if(menuImgs[1].length > 0)
		{
			img[0].src= menuImgs[1];
			img[0].style.visibility = 'visible';
		}
		else
		{
			img[0].style.visibility = 'hidden';
		}
	}
	if(id.indexOf("Preview")>-1)
	{
		rootObj.style.backgroundImage = "url(" + menuImgs[1] + ")";
	}
   }

  var menuStyle ='';
  if(fkcelMenuData[id]["menuRootItemOverStyle"]!=null && fkcelMenuData[id]["menuRootItemOverStyle"]!='')
	 menuStyle=fkcelMenuData[id]["menuRootItemOverStyle"];
  if(menuStyle!='')
  setTargetCss(rootObj,menuStyle);
}
function fkcelMenuRootOut(id,rootObj)
{
  var menuImgs =null;
  if(fkcelMenuData[id]["btnBgImg"]!=null && fkcelMenuData[id]["btnBgImg"].length > 1)
  {
	menuImgs= fkcelMenuData[id]["btnBgImg"].split(',');
	var img = rootObj.getElementsByTagName('img');
	if(img.length>0)
	{
		if(menuImgs[0].length > 0)
		{
			img[0].src= menuImgs[0];
			img[0].style.visibility = 'visible';
		}
		else
		{
			img[0].style.visibility = 'hidden';
		}
	}
	if(id.indexOf("Preview")>-1)
	{
		rootObj.style.backgroundImage = "url(" + menuImgs[0] + ")";
	}
   }

   var menuStyle ='';
  if(fkcelMenuData[id]["menuRootItemStyle"]!=null && fkcelMenuData[id]["menuRootItemStyle"]!='')
	 menuStyle=fkcelMenuData[id]["menuRootItemStyle"];
  if(menuStyle!='')
  setTargetCss(rootObj,menuStyle);
}
function fkcelMenuObject(id, target)
{
	if(target==null)
		target = window;
	var body = target.document.body;
	this.borderStyle='';
	if(fkcelMenuTopDiv==null)
	{
		fkcelMenuTopDiv = document.createElement('DIV');
		
		if(body.childNodes.length<=0)
			body.insertBefore(fkcelMenuTopDiv, null);
		else
			body.insertBefore(fkcelMenuTopDiv, body.childNodes[0]);
	}

	this.div = target.document.createElement('DIV');
	
	fkcelMenuTopDiv.insertBefore(this.div, null);
	var menuStyle = MenuStyle;
	if(fkcelMenuData[id]["menuStyle"]!=null && fkcelMenuData[id]["menuStyle"]!='')
	 menuStyle=fkcelMenuData[id]["menuStyle"];
	this.div.innerHTML = 
		"<iframe src='' FRAMEBORDER='no' scrolling='no' style='visibility:hidden;position:absolute;z-index:10000000'></iframe>" +
		"<table  onblur='fkcelMenuBlur()'" +
		" style='"+menuStyle+";visibility:hidden;position:absolute;left:0px;top:0px;z-index:10000000;border-collapse:collapse;' cellpadding=4>" +
		"<tr valign=top><td width='100%'>" +
		"</td></tr>" +
		"</table>";
	//this.div.style.display = 'inline';

	this.id = id;
	this.iframe = this.div.getElementsByTagName('IFRAME')[0];
	this.table = this.div.getElementsByTagName('TABLE')[0];
	this.td = this.table.rows[0].cells[0];
}
function fkcelMenuSetTimeout(millisecond)
{
	fkcelMenuSource.fkcelMenuTimeout = new Date();
	fkcelMenuSource.fkcelMenuTimeout.setTime(fkcelMenuSource.fkcelMenuTimeout.getTime() + millisecond);
}
function fkcelMenuEnter(tr,menuId, itemId)
{
	var data = fkcelMenuData[menuId];
	// Get current table and tr
	var table = tr.offsetParent;
	while(table!=null && !fkcelMenuTableInArray(table))
		table = table.offsetParent;

	// set all other tr color
	var menuItemStyle = MenuItemStyle;
	if(data["menuItemStyle"]!='' && data["menuItemStyle"]!=null)
	  menuItemStyle=data["menuItemStyle"];
	
	for(var i=0; i<tr.offsetParent.rows.length; i++)
	{
		var a = tr.offsetParent.rows[i];
		if(a.style.display!='none'&& a.innerText!='')
		{
		setTargetCss(a.childNodes[0].childNodes[0],menuItemStyle);
		}
	}
	var curItem =getMenueItemById(data,itemId);
	var menuItemOverStyle = MenuItemOverStyle;
	if(data["menuItemOverStyle"]!=null && data["menuItemOverStyle"]!='')
	   menuItemOverStyle= data["menuItemOverStyle"];
	if(tr.style.display!='none'&& tr.innerText!=''&& (curItem.url!=''|| curItem.hasChild!=false))
	  setTargetCss(tr.childNodes[0].childNodes[0],menuItemOverStyle);
	fkcelMenuSetTimeout(100000);

	// 隐藏子菜单
	for(var i=0; i<fkcelMenuObjects.length; i++)
	{
		var obj = fkcelMenuObjects[i];
		if(obj.table!=table)
			continue;

		while(fkcelMenuObjects.length > i + 1)
			fkcelMenuObjects.pop().div.removeNode(true);
		break;
	}
	
   
	// 判断是否有子菜单
	if(curItem.hasChild) // has sub menu
	{
		var obj = fkcelMenuGenerateTable2(menuId,1,curItem.id, window);
		if(obj==null)
			return;

		var x = fkcelMenuObjectLeft(tr) + tr.offsetWidth + 4; // 准确距离是5, 用4使二级菜单压在一级菜单一个像数
		var y = fkcelMenuObjectTop(tr);

		// 如果菜单太靠右，则显示在左边
		if(x > document.body.offsetWidth - obj.table.offsetWidth - 20)
			x = fkcelMenuObjectLeft(tr) - obj.table.offsetWidth - 5;
		fkcelMenuSetPos(obj, x, y, window);
	}
}



function getMenueItemById(data,itemId)
{
  var len= data.length;
	for(var i=0;i<len;i++)
	{
	   if(data[i].id==itemId)
	   {
		 return data[i];
	   }
	}
	return null;
}
function fkcelMenuLeave()
{
	//var tr = event.srcElement;
	//tr.style.backgroundColor = 'white';
	//tr.style.color = 'black';

	fkcelMenuSetTimeout(0);
}
function fkcelMenuStartsWith(str, word)
{
	if(str!=null && word!=null && str.length>=word.length && str.substr(0,word.length)==word)
		return true;
	return false;
}
function fkcelMenuTableInArray(table)
{
	for(var i=0; i<fkcelMenuObjects.length; i++)
	{
		var obj = fkcelMenuObjects[i];
		if(obj.table==table)
		{
			return true;
		}
	}
	return false;
}
function fkcelMenuBlur()
{
	var obj = document.activeElement;
	while(obj!=null && !fkcelMenuTableInArray(obj))
		obj = obj.offsetParent;
	if(obj==null)
	{
		fkcelMenuHide();
	}
	else
	{
		obj.focus();
	}
}
function fkcelMenuGenerateTable(id, target,srcElement,parentId)
{
	var data = fkcelMenuData[id];
	if(data==null)
		return null;
	var menuItem = getMenueItemById(data,parentId);
	if((parentId==''||menuItem!=null && menuItem.hasChild))
	{
	  var obj = fkcelMenuGenerateTable2(id, 1,parentId, target);
	  return obj;
	}
	else
	{
	  return null;
	}
}

function fkcelMenuGenerateTable2(id, i,parentId, target)
{
	// Get the document of target window
	if(target==null)
		target = window;
	var doc = target.document;
	fkcelMenuTarget = target;
	target.fkcelMenuSource = window;

	// get the element of table
	var obj = new fkcelMenuObject(id);
	fkcelMenuObjects[fkcelMenuObjects.length] = obj;
	var table = obj.table;
	var td = obj.td;
	var data = fkcelMenuData[id];
	if(data==null) // not found the menu data define
		return null;
	var html = '';
	html += '<table width=100% cellpadding=0 cellspacing=0 >';
	var len= data.length;
	for(var i=0;i<len;i++)
	{
	   if(data[i].parentId==parentId)
	   {
		 html+= data[i].getHtml(obj);
	   }
	}
	html += '</table>';
	td.innerHTML = html;
	return obj;
}
function fkcelMenuSkip(data, index, subItemCount)
{
	while(subItemCount-->0)
	{
		index += 5;
		index = fkcelMenuSkip(data, index, data[index-1]);
	}
	return index;
}
function fkcelMenuPopup(id, srcElement, elementPoint, menuAlign, target, hide,menuItemId)
{
	var x = fkcelMenuObjectLeft(srcElement);
	var y = fkcelMenuObjectTop(srcElement);
	
	if(elementPoint==0) // RightBottom
		{ x += srcElement.offsetWidth; y += srcElement.offsetHeight; }
	else if(elementPoint==1) // LeftBottom
		{ y += srcElement.offsetHeight; }
	else if(elementPoint==2) // RightTop
		{ x += srcElement.offsetWidth; }
	else if(elementPoint==3) // LeftTop
		{ }

	fkcelMenuPopupXY(id, x, y,srcElement, menuAlign, target, hide,menuItemId);
}
function fkcelMenuPopupXY(id, x, y,srcElement, align, target, hide,menuItemId)
{
	if(hide==null || hide)
		fkcelMenuHide();
	if(menuItemId==null)
		menuItemId ='';
	var obj = fkcelMenuGenerateTable(id, target,srcElement,menuItemId);
	if(obj==null)
		return;

	if(align==null || align==0) // RightBottom
		{}
	else if(align==1) // LeftBottom
		x -= obj.table.offsetWidth;
	else if(align==2) // RightTop
		y -= obj.table.offsetHeight;
	else if(align==3) // LeftTop
		{ x -= obj.table.offsetWidth;; y -= obj.table.offsetHeight; }

	fkcelMenuSetPos(obj, x, y, target);
	//obj.div.style.display = 'inline';
	fkcelMenuSetTimeout(1000);
}
function fkcelMenuSetPos(obj, x, y, target)
{
	if(target==null)
		target = window;
	var doc = target.document;
	var table = obj.table;

	if(y + table.offsetHeight + 30 > doc.body.offsetHeight + getScrollTop(target))
		y = doc.body.offsetHeight + getScrollTop(target) - table.offsetHeight - 30;
	if(y < 0)
		y = 0;

	table.style.left = x + 'px';
	table.style.top = y + 'px';

	table.style.visibility = 'visible';
	table.focus();

	var iframe = obj.iframe;
	iframe.style.pixelLeft = table.style.pixelLeft;
	iframe.style.pixelTop = table.style.pixelTop;
	iframe.width = table.offsetWidth;
	iframe.height = table.offsetHeight;
	iframe.style.visibility = 'visible';
}
function fkcelMenuHide()
{
	while(fkcelMenuObjects.length > 0)
	{
		var obj = fkcelMenuObjects.pop();
		obj.div.parentNode.removeChild(obj.div);
	}
}
function fkcelMenuIsShowing()
{
	return fkcelMenuObjects.length > 0;
}

function fkcelMenuGetShowingId()
{
	if(fkcelMenuObjects.length > 0)
		return fkcelMenuObjects[0].id;
	return null;
}

function fkcelMenuObjectLeft(o)
{
	var x = 0;
	while (o != null)
	{
		x += o.offsetLeft;
		o = o.offsetParent;
	}
	return x;
}

function fkcelMenuObjectTop(o)
{
	//return Mynet_ObjectTop(o);
	var y = 0;
	while (o != null)
	{
		y += o.offsetTop;
		o = o.offsetParent;
	}
	return y;
}
function fkcelMenuInterval()
{
	var now = new Date();
	if(fkcelMenuTimeout!=null && now.getTime() > fkcelMenuTimeout.getTime())
	{
		fkcelMenuTimeout = null;
		fkcelMenuHide();
	}
}
function fkcelMenueItem(id,parentId,leftText,text,url,rightText,hasChild)
{
  this.id=id;
  this.leftText=leftText;
  this.text= text;
  this.url=url;
  this.rightText = rightText;
  this.hasChild = hasChild;
  this.parentId=parentId;
  
  this.getHtml=function(objM)
  {
	  var html ="";
	   html += "<tr ";
	   html += " onmouseover=fkcelMenuEnter(this,'"+objM.id+"','"+this.id+"') onmouseout='fkcelMenuLeave()'" ;
	   if(url!='')
	   {
		 html+=this.url;
	   }
		html += "><td width='100%'>";
		html+="<table width='100%' style='"+fkcelMenuData[objM.id]["menuItemStyle"]+"' cellpadding=4 cellspacing=0><tr>";
		if(text=='---')
		{
			html +="<td colspan=3 height=5><table width=100% height=1 cellpadding=0 cellspacing=0 bgcolor=gray><tr><td></td></tr></table></td>";
		}
		else
		{
			html+="<td style='width:1px;'><nobr>" + leftText + "</nobr></td>";
			html += '<td width=100%><nobr>' + text + '</nobr></td>';
			html += "<td width=1 style='width:1px;'align=right><nobr>" + rightText;
			if(this.hasChild)
			{
			  //html+="<img src='/res/menu_expand.gif' width=15 height=15 border='0'/>";
			  html+="<span style=\"font-family:'webdings'; font-size:12px;\">4</span>";
			}
			html+='</nobr></td>';
		}
		html += '</tr></table></td></tr>';
		
		return html;
  }
}

window.setInterval(fkcelMenuInterval, 200);