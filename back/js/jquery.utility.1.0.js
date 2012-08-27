//	Version: 1.0
//	Author: Spring.Cheung(spring.cheung@163.com)
//	LastChangedDate: 2008-09-25
//	Requires: jquery.1.2.6.js

Function.prototype.overwrite = function(f)
{
	var result = f;
	if (!result.original)
	{
		result.original = this;
	}
	
	return result;
}

Date.prototype.toString = Date.prototype.toString.overwrite(
	function(format)
	{
		var result = new String();
		if (typeof(format) == "string")
		{
			result = format;
			result = result.replace(/yyyy|YYYY/, this.getFullYear());
			result = result.replace(/yy|YY/, this.getFullYear().toString().substr(2, 2));
			result = result.replace(/MM/, this.getMonth() >= 9 ? this.getMonth() + 1 : "0" + (this.getMonth() + 1));
			result = result.replace(/M/, this.getMonth());
			result = result.replace(/dd|DD/, this.getDate() > 9 ? this.getDate() : "0" + this.getDate());
			result = result.replace(/d|D/, this.getDate());
			result = result.replace(/hh|HH/, this.getHours() > 9 ? this.getHours() : "0" + this.getHours());
			result = result.replace(/h|H/, this.getHours());
			result = result.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes() : "0" + this.getMinutes());
			result = result.replace(/m/, this.getMinutes());
			result = result.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds() : "0" + this.getSeconds());
			result = result.replace(/s|S/, this.getSeconds());
		}
		
		return result;
	});

String.prototype.format = function()
{
	var result = this;
	if (arguments.length > 0)
	{
		parameters = $.makeArray(arguments);
		$.each(
			parameters,
			function(i, n)
			{
				result = result.replace(new RegExp("\\{" + i + "\\}", "g"), n);
			});
	}
	
	return result;
}

function StringBuilder()
{
	this.strings = new Array();
	this.length = 0;
}
StringBuilder.prototype.append = function(string)
{
	this.strings.push(string);
	this.length += string.length;
}
StringBuilder.prototype.toString = function()
{
	return this.strings.join("");
}
StringBuilder.prototype.toString = function(start, length)
{
	return this.strings.join("").substr(start, length);
}
