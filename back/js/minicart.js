$(
	function()
	{
		var miniCartServiceUrl = "http://jd2008.360buy.com/purchase/minicartservice.aspx?callback=?";
		
		refreshMiniCart();
		
		function refreshMiniCart()
		{
			$.login(
				{
					automatic: false,
					complete:
						function(result)
						{
							var isRetrievable = $.cookie("IsRetrievable") == null || $.cookie("IsRetrievable") == "true";
							if (result.IsAuthenticated && isRetrievable)
							{
								$.getJSON(
									miniCartServiceUrl,
									{
										method: "RetrieveCart"
									},
									function(result)
									{
										$.cookie(
											"IsRetrievable",
											false,
											{
												domain: ".360buy.com"
											});
										if (result.Cart != null && result.GetCart != null)
										{
											$("#ProductNum").text(result.Cart.Num);
											$("#MyCart").html(result.GetCart.process(result));
										}
									});
							}
							else
							{
								$.getJSON(
									miniCartServiceUrl,
									{
										method: "GetCart"
									},
									function(result)
									{
										if (result.Cart != null && result.GetCart != null)
										{
											$("#ProductNum").text(result.Cart.Num);
											$("#MyCart").html(result.GetCart.process(result));
										}
									});
							}
						}
				});
		}
		
		$("#MyCart .MyCart_List a[id][name]").livequery(
			"click",
			function()
			{
				var cartId = parseInt($(this).attr("id"));
				var cartType = $(this).attr("name");
				if (cartId > 0 && cartType != "")
				{
					$.getJSON(
						miniCartServiceUrl,
						{
							method: cartType,
							cartId: cartId
						},
						function(result)
						{
							if (result.Result)
							{
								refreshMiniCart();
							}
						});
				}
			});
		
		$("#Product_Intro_Right img[id^=buy], #View_List img[id^=buy], #View_List :image[id^=buy], #p_Button img[id^=buy], :button[name^=buy], .productCompare img[id^=buy], #Fittings img[id^=pt]").livequery(
			"click",
			function()
			{
				var productId = parseInt($(this).attr("id").replace("buy", "").replace("pt", ""));
				if (isNaN(productId) || productId == 0)
				{
					var productId = parseInt($(this).attr("name").replace("buy", "").replace("pt", ""));
				}
				var count = parseInt($("#Product_Intro_Right .Pro_links :text").val(), 10);
				count = count > 0 ? count : 1;
				if (productId > 0 && count > 0)
				{
					window.open("http://jd2008.360buy.com/purchase/InitCart.aspx?pid={0}&pcount={1}&ptype=1".format(productId, count), "_blank");
				}
			});
		
		$("#saveCart").livequery(
			"click",
			function()
			{
				$.login(
					{
						complete:
							function(result)
							{
								if (result.IsAuthenticated)
								{
									$.getJSON(
										miniCartServiceUrl,
										{
											method: "SaveCart"
										},
										function(result)
										{
											if (result.Result)
											{
												alert("寄存购物车成功");
											}
										});
								}
							}
					});
			});
	});
