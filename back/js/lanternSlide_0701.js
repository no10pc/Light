var F_delay=5;
var F_timer=null;
var F_img=null;
var F_temp_count=1;
var F_photos=[
	["http://www.360buy.com/images/pic/Jd_157.jpg","","http://www.360buy.com/union/union_default.aspx?union_Id=193&website_id=110011&eu_id=dddssede&Pagetype=8&directtype=751&union_mon=100",
"http://www.360buy.com/images/pic/Jd_w_157.jpg"],
	["http://www.360buy.com/images/pic/Jd_155.jpg","","http://www.360buy.com/union/union_default.aspx?union_Id=192&website_id=110011&eu_id=dddssede&Pagetype=8&directtype=733&union_mon=100",
"http://www.360buy.com/images/pic/Jd_w_155.jpg"],
	["http://www.360buy.com/images/pic/Jd_161.jpg","","http://market.360buy.com/ShopCampaign/Activities.aspx?hid=760",
"http://www.360buy.com/images/pic/Jd_w_161.jpg"],
	["http://www.360buy.com/images/pic/Jd_162.jpg","","http://market.360buy.com/ShopCampaign/Activities.aspx?hid=759",
"http://www.360buy.com/images/pic/Jd_w_162.jpg"],
	["http://www.360buy.com/images/pic/Jd_160.jpg","","http://market.360buy.com/ShopCampaign/Activities.aspx?hid=757",
"http://www.360buy.com/images/pic/Jd_w_160.jpg"],
	["http://www.360buy.com/images/pic/Jd_159.jpg","","http://market.360buy.com/ShopCampaign/Activities.aspx?hid=753",
"http://www.360buy.com/images/pic/Jd_w_159.jpg"]
];
var preload=new Array();
for (var i=0;i<F_photos.length;i++){
	preload[i]=new Image();
	if (Swidth>=1280){preload[i].src=F_photos[i][3];}
	else{preload[i].src=F_photos[i][0];}
	preload[i].alt=F_photos[i][1];
}
function strartSlideshow(){
	var imgbarHTML="";
	imgbarHTML+="<ul id='button_image'>";
	for (var i=0;i<F_photos.length;i++){imgbarHTML+="<li id='i"+ i +"'><a href='"+ F_photos[i][2] +"' target='_blank'>"+ (i+1) +"</a></li>"}
	imgbarHTML+="</ul>";
	$("#Focus_Img").get(0).innerHTML+=imgbarHTML;
	$("#Curr_image").get(0).innerHTML="<a href='"+ F_photos[0][2] +"' target='_blank'><img src='"+ preload[0].src +"' alt='"+ preload[0].alt +"' class='photo' style='filter:revealtrans(duration=2,transition=23)' /></a>";
	$("#button_image li").get(0).className="curr";
	F_img=$("#Curr_image img").get(0);
	F_timer=setTimeout("cueNextSlide(1)",F_delay*1000);
	for (var i=0;i<F_photos.length;i++){$("#button_image li").get(i).onmouseover=function(){clearTimeout(F_timer);cueNextSlide(this.id.substr(1,1));clearTimeout(F_timer);};$("#button_image li").get(i).onmouseout=function(){F_timer=setTimeout("cueNextSlide("+F_temp_count+")",F_delay*1000);};};
	F_img.onmouseover=function(){clearTimeout(F_timer)};
	F_img.onmouseout=function(){F_timer=setTimeout("cueNextSlide("+F_temp_count+")",F_delay*1000);};
}
function cueNextSlide(F_count){
	clearTimeout(F_timer);
	if ($.browser.msie&&$.browser.version<="7.0"){F_img.filters.revealtrans.transition=23;F_img.filters.revealtrans.Apply();}
	F_img.src=preload[F_count].src;
	if ($.browser.msie&&$.browser.version<="7.0"){F_img.filters.revealtrans.Play();}
	F_img.alt=preload[F_count].alt;
	$("#Curr_image a").get(0).href=F_photos[F_count][2];
	for (var i=0;i<F_photos.length;i++){$("#button_image li").get(i).className="";}
	$("#button_image li").get(F_count).className="curr";
	if (++F_count==F_photos.length){F_count=0;}
	F_timer=setTimeout("cueNextSlide("+F_count+")",F_delay*1000);
	F_temp_count=F_count;
}