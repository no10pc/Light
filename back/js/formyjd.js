//�ҵľ���֧��
var jsonServiceUrl="http://jd2008.360buy.com/purchase/orderflowservice.aspx";
//var jsonServiceUrl="orderflowservice.aspx";

function g(objId)
{
   return document.getElementById(objId);
}
var pageOrderId=null;
var delKey=null;
//ɾ��
function removeOrder(orderId,key)
{
      if(!confirm('����ȡ�����޷��ָ�����ȷ��Ҫȡ��������'))return false;
       pageOrderId=orderId;
       delKey=key;
       var js=document.createElement('script');
       js.type='text/javascript';
       js.src=jsonServiceUrl+'?roid='+Math.random()+'&action=removeOrder&orderId='+pageOrderId;
       document.getElementsByTagName('head')[0].appendChild(js);
	  
}
function voteSuc_64()
{
//   try{
//    closeVote();
//   }catch(e){}
//   var js=document.createElement('script');
//       js.type='text/javascript';
//       js.src=jsonServiceUrl+'?roid='+Math.random()+'&action=removeOrder&orderId='+pageOrderId;
//       document.getElementsByTagName('head')[0].appendChild(js);
   //alert('��л��������飡');
   window.location.reload();
}
function removeOrder_callback(obj)
{
  
   if(obj!=null){
     if(obj.json.length==0){
        alert('ɾ��ʧ�ܣ�');return;
     }else{
        
        if(obj.json[0].result=="0")
        {
           alert(obj.json[0].message);
           return;
        }
         if(obj.json[0].result=="1")
        {
          var v=new Vote(); 
          v.id=64;
          v.key=delKey;
          v.ruleId=pageOrderId;
          v.width=720;
          v.height=400;
          v.show();
           //alert(obj.json[0].message);
           //window.location.reload();
           
        }
        
     }
   }
}

//����
function deferOrder(orderId)
{
     var js=document.createElement('script');
       js.type='text/javascript';
       js.src=jsonServiceUrl+'?roid='+Math.random()+'&action=checkDeferOrderByUser&orderId='+orderId;
       document.getElementsByTagName('head')[0].appendChild(js);
}

function deferOrder_callback(obj)
{
   if(obj!=null){
     if(obj.json.length==0){
        alert('����ʧ�ܣ�');return;
     }else{
        
        if(obj.json[0].result=="0")
        {
           alert(obj.json[0].message);
           return;
        }
        
        if(obj.json[0].result=="1")
        {
            var str="<select id='sele'>";
            var tempI=1;
            for(var i=1;i<obj.json.length-1;i++)
            {
                str+="<option value='"+obj.json[i].date+"'>"+obj.json[i].date+"</option>";
                tempI=tempI+1;
            }
            str+="</select><input type='button' id='deferBtnSubmit' value='��������' onclick='updateDefer(" + obj.json[tempI].orderid + ");'/>";
            
            g("defer_item").innerHTML=str;
        showTip3('#ddyq');        
        }
        
     }
   }
}

function updateDefer(orderId)
{
 var objSelect=g("sele");
 var str="";
     for(var i=0;i<objSelect.options.length;i++)
     {
         if(objSelect.options[i].selected)
         {
            str=objSelect.options[i].value
         }
     }
      var js=document.createElement('script');
       js.type='text/javascript';
       js.src=jsonServiceUrl+'?roid='+Math.random()+'&action=updateDeferOrderByUser&orderId='+orderId+'&date='+str;
       document.getElementsByTagName('head')[0].appendChild(js);

}

function updateDeferOrder_callback(obj)
{
   if(obj!=null){
     if(obj.json.length==0){
        alert('����ʧ�ܣ�');return;
     }else{
        
//        if(obj.json[0].result=="0")
//        {
//           alert(obj.json[0].message);
//           return;
//        }
         if(obj.json[0].result=="1")
        {        
           alert(obj.json[0].message);
           g('defercloseBtn').click();
          // window.location.reload();
           
        }
        
     }
   }
}

//����
function unLockOrder(orderId)
{
  
   var js=document.createElement('script');
   js.type='text/javascript';
   js.src=jsonServiceUrl+'?roid='+Math.random()+'&action=unLockOrder&orderId='+orderId;
   document.getElementsByTagName('head')[0].appendChild(js);

}
function unLockOrder_callback(obj)
{
  
   if(obj!=null){
     if(obj.json.length==0){
        alert('����ʧ�ܣ�');return;
     }else{
        
        if(obj.json[0].result=="0")
        {
           alert(obj.json[0].message);
           return;
        }
        if(obj.json[0].result=="1")
        {
           alert(obj.json[0].message);
           window.location.reload();
        }
        
     }
   }
}

function combinOrder(orderId,obj)
{
   var js=document.createElement('script');
   js.type='text/javascript';
   js.src=jsonServiceUrl+'?roid='+Math.random()+'&action=GetCanCombinByOrderId&orderId='+orderId;
   document.getElementsByTagName('head')[0].appendChild(js);
}
function combin_callback(obj)
{
  
   if(obj!=null){
     if(obj.json.length==0){
        alert('����ʧ�ܣ�');return;
     }else{
        
        if(obj.json[0].result!=null)
        {
           alert(obj.json[0].message);
           return;
        }
        if(obj.json.length==1)
        {
            alert('û�ж���������֮�ϲ���');
           return;
        }
        var html="<table width='100%' cellpadding='0' cellspacing='0' class='table_1'>";
			html+="<tr>";
			html+="<th width='10%'>&nbsp;</th>";
			html+="<th width='15%'>���</th>";
			html+="<th width='15%'>�ջ�������</th>";
			html+="<th width='15%'>֧����ʽ</th>";
			html+="<th width='15%'>�µ�ʱ��</th>";
			html+="<th width='17%'>״̬</th>";
			html+="<th>���</th>";
			html+="</tr>";
			
			html+="<tr bgcolor='#FCEA89'>";
			html+="<td width='10%'><strong>������</strong></td>";
			html+="<td width='15%'><span id='mainOrderId'>"+obj.json[0].OrderId+"</span></td>";
			html+="<td width='15%'>"+obj.json[0].Name+"</td>";
			html+="<td width='15%'>"+obj.json[0].Payment+"</td>";
			html+="<td width='15%'>"+obj.json[0].Date+"</td>";
			html+="<td width='17%'>"+obj.json[0].State+"</td>";
			html+="<td><font color='#FF6600'>"+obj.json[0].Price+"</font></td>";
			html+="</tr>";
		    html+="</table>";
		    g("combin_main").innerHTML=html;
		    //alert(g("combin_main").innerHTML);
		html="<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" class=\"table_1\">";
        for(var i=1;i<obj.json.length;i++)
        {
            //if(i>5)continue;
            html+="<tr>";
			html+="<td width='10%'><input name='chk_combinItem' type='checkbox' value='"+obj.json[i].OrderId+"' onclick='setCombinLink();' /></td>";
			html+="<td width='15%'>"+obj.json[i].OrderId+"</td>";
			html+="<td width='15%'>"+obj.json[i].Name+"</td>";
			html+="<td width='15%'>"+obj.json[i].Payment+"</td>";
			html+="<td width='15%'>"+obj.json[i].Date+"</td>";
			html+="<td width='17%'>"+obj.json[i].State+"</td>";
			html+="<td><font color='#FF6600'>"+obj.json[i].Price+"</font></td>";
			html+="</tr>";
        }
        g("combin_item").innerHTML=html;
        showTip3('#hbdd');
        
     }
   }
}

function setCombinLink()
{
   var items=document.getElementsByName('chk_combinItem');
   var checkedIds="";
   for(var i=0;i<items.length;i++)
   {
      if(items[i].checked)
      {
         checkedIds+=items[i].value+",";
      }
   }
   if(checkedIds=="")
   {
      g("combinBtn").href="javascript:alert('��ѡ��Ҫ�ϲ��Ķ�����')";
      g("combinBtn").target='_self';
   }else{
      g("combinBtn").href=jsonServiceUrl+"?action=combinOrderByUser&mainOrderId="+g('mainOrderId').innerHTML+"&orderid="+checkedIds;
      g("combinBtn").target='_blank';
   }
}

var display4=false;
function showTip3(proobj){
	var TipDivW=$(proobj).width();
	var TipDivH=$(proobj).height();
	var TipDiv=$("<div id='c04tip' style='z-index:20000000;position:absolute;width:"+ eval(TipDivW+5) +"px;height:"+ eval(TipDivH+5) +"px;'><div style='position:absolute;margin:5px 0 0 5px;width:"+ TipDivW +"px;height:"+ TipDivH +"px;background:#BCBEC0;z-index:20001;'></div></div>")
	if (display4==false){
		TipDiv.append($(proobj));
		$(document.body).prepend(TipDiv);
		$(proobj).show();
		display4=true;
	}else{
		$("#c04tip").show();
	}
	$("#c04tip").css({top:parseInt(document.documentElement.scrollTop + (document.documentElement.clientHeight-$("#c04tip").height())/2 )+"px",left:(document.documentElement.clientWidth-$("#c04tip").width())/2 +"px"})
	$("#Tip_apply,#Tip_continue,.Tip_Close").click(function(){
		$("#c04tip").fadeOut();
	});
}
