//	Version: 1.0
//	Author: Spring.Cheung(spring.cheung@163.com)
//	LastChangedDate: 2008-09-18
//	Requires: jquery.1.2.6.js

$.login = function(options)
	{
		options = $.extend(
			{
				loginService: "http://passport.360buy.com/loginservice.aspx?callback=?",
				loginMethod: "Login",
				loginUrl: "http://passport.360buy.com/login.aspx",
				returnUrl: location.href,
				automatic: true,
				complete: null
			},
			options || {});
		
		if (options.loginService != "" && options.loginMethod != "")
		{
			$.getJSON(
				options.loginService,
				{
					method: options.loginMethod
				},
				function(result)
				{
					if (result != null)
					{
						if (options.complete != null)
						{
							options.complete(result.Identity);
						}
						if (!result.Identity.IsAuthenticated && options.automatic && options.loginUrl != "")
						{
							location.href = options.loginUrl + "?ReturnUrl=" + escape(options.returnUrl);
						}
					}
				});
		}
	};
