function dis_fz()
{
	document.getElementById("g_fz").style.display="block";
}
function dis_fz_1()
{
	document.getElementById("g_fz").style.display="none";
}    
function dis_fy()
{
	document.getElementById("g_fy").style.display="block";
}
function dis_fy_1()
{
	document.getElementById("g_fy").style.display="none";
}
			
function Utf8ToGb2312(str1){
        var substr = "";
        var a = "";
        var b = "";
        var c = "";
        var i = -1;
        i = str1.indexOf("%");
        if(i==-1){
          return str1;
        }
        while(i!= -1){
    if(i<3){
                substr = substr + str1.substr(0,i-1);
                str1 = str1.substr(i+1,str1.length-i);
                a = str1.substr(0,2);
                str1 = str1.substr(2,str1.length - 2);
                if(parseInt("0x" + a) & 0x80 == 0){
                  substr = substr + String.fromCharCode(parseInt("0x" + a));
                }
                else if(parseInt("0x" + a) & 0xE0 == 0xC0){ //two byte
                        b = str1.substr(1,2);
                        str1 = str1.substr(3,str1.length - 3);
                        var widechar = (parseInt("0x" + a) & 0x1F) << 6;
                        widechar = widechar | (parseInt("0x" + b) & 0x3F);
                        substr = substr + String.fromCharCode(widechar);
                }
                else{
                        b = str1.substr(1,2);
                        str1 = str1.substr(3,str1.length - 3);
                        c = str1.substr(1,2);
                        str1 = str1.substr(3,str1.length - 3);
                        var widechar = (parseInt("0x" + a) & 0x0F) << 12;
                        widechar = widechar | ((parseInt("0x" + b) & 0x3F) << 6);
                        widechar = widechar | (parseInt("0x" + c) & 0x3F);
                        substr = substr + String.fromCharCode(widechar);
                }
     }
     else {
      substr = substr + str1.substring(0,i);
      str1= str1.substring(i);
     }
              i = str1.indexOf("%");
        }

        return substr+str1;
}

function getCookie(cookie_name)
{
        var allcookies = document.cookie;
        var cookie_pos = allcookies.indexOf(cookie_name);

        // 如果找到了索引，就代表cookie存在，
        // 反之，就说明不存在。
        if (cookie_pos != -1)
        {
        // 把cookie_pos放在值的开始，只要给值加1即可。
        cookie_pos += cookie_name.length + 1;
        var cookie_end = allcookies.indexOf("&", cookie_pos);

        if (cookie_end == -1)
        {
        cookie_end = allcookies.length;
        }

        var value = unescape(allcookies.substring(cookie_pos, cookie_end));
        }

        return value;
}


        // 调用函数
        var cookie_val = document.cookie;
        cookie_val = cookie_val.substring(0,cookie_val.length);
        var cookie_val2 = getCookie("username");
        if(cookie_val2 == "" || cookie_val2 == null)
        {
            document.write("<p>您好，欢迎来中国网众！</p><a href=\"http://login.wzcbd.com/\"><img class=\"denglu\" src=\"http://img1.pic.wzcbd.com/images/common/head_denglu.jpg\" /></a><a href=\"http://login.wzcbd.com/register.aspx\" target=\"_blank\"><img class=\"zhuce\" src=\"http://pic.wzcbd.com/images/common/head_zhuce.jpg\" /></a>");
        }
        else
        {
            document.write("<p>您好,"+ Utf8ToGb2312(escape(cookie_val2))+"</p><a href=\"http://shop.wzcbd.com/logout.aspx\"><img class=\"denglu\" src=\"http://img1.pic.wzcbd.com/images/common/head_tuichu.jpg\" /></a><a id=\"head_hyzx\" href=\"#\" target=\"_blank\"><img class=\"zhuce\" src=\"http://pic.wzcbd.com/images/common/head_hyzx.jpg\" /></a>");
        
            var groupid = getCookie("groupid");
            var head_hyzx = document.getElementById("head_hyzx");
            if(groupid == "24" || groupid == 24)
            {
            head_hyzx.href = "http://shop.wzcbd.com/VipStoreList.aspx";
            }
            else
            {
            head_hyzx.href = "http://shop.wzcbd.com/UserHome.aspx";
            }
        }
        
