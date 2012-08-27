function OOO(obj,ele){
	if (obj&&!ele){return document.getElementById(obj);}
	else if (obj&&ele){return document.getElementById(obj).getElementsByTagName(ele);}
	else {return false;}
}
function showRefer(obj){
	OOO(obj).style.display=(OOO(obj).style.display=="")?"none":"";
}
function getMess(obj,status){
	if (!status){
		OOO(obj).style.display=(OOO(obj).style.display=="")?"none":"";
	}else if(status=="close"){
		OOO(obj).style.display="none";
	}
}
function shoppingList(obj1,obj2){
	var openhtml="[查看套装商品]";
	var closehtml="[收缩套装商品]";
	obj1.innerHTML=obj1.innerHTML==openhtml?closehtml:openhtml;
	obj1.parentNode.className=obj1.parentNode.className=="bag_close"?"bag_open":"bag_close";
	$(".Table tr[@title*="+ obj2 +"]").each(function(){
		this.style.display=this.style.display=="none"?"":"none"
	})
}
function showDetail(obj1,obj2){
	var openhtml="[Open]";
	var closehtml="[Close]";
	if (OOO(obj2).style.display==""){
		OOO(obj2).style.display="none";
		obj1.innerHTML=openhtml;
	}else{
		OOO(obj2).style.display="";
		obj1.innerHTML=closehtml;
	}
}
function showAll(obj1,obj2,obj3){
	var openhtml="[全部展开]";
	var closehtml="[全部收缩]";
	var openhtml2="[展开]";
	var closehtml2="[收缩]";
	if (obj1.innerHTML==openhtml){
		$("."+obj2).each(function(){this.innerHTML=closehtml2;});
		$("."+obj3).each(function(){this.style.display="";});
		obj1.innerHTML=closehtml;
	}else{
		$("."+obj2).each(function(){this.innerHTML=openhtml2;	});
		$("."+obj3).each(function(){this.style.display="none";});
		obj1.innerHTML=openhtml;	
	}
}

function showSplitOrder(obj1,obj2){
	if (document.getElementById(obj2).style.display=="none"){
		document.getElementById(obj1).className="split_title1";
		document.getElementById(obj2).style.display="";
	}else{
		document.getElementById(obj1).className="split_title";
		document.getElementById(obj2).style.display="none";
	}
}
