(function($) {
	$.extend({
		_jsonp : {
			scripts: {},
			//charset: 'utf-8',
			counter: 1,
			head: document.getElementsByTagName("head")[0],
			name: function( callback ) {
				var name = '_jsonp_' +  (new Date).getTime()
					+ '_' + this.counter;
				this.counter++;
				var cb = function( json ) {
					eval( 'delete ' + name );
					callback( json );
					$._jsonp.head.removeChild( $._jsonp.scripts[ name ] );
					delete $._jsonp.scripts[ name ];
				};
				eval( name + ' = cb' );
				return name;
			},
			load: function( url, name ) {
				var script = document.createElement( 'script' );
				script.type    = 'text/javascript';
				script.charset = this.charset;
				script.src     = url;
				this.head.appendChild( script );
				this.scripts[ name ] = script;
			}
		},
		getJSONP : function ( url, callback ){
			var name = $._jsonp.name( callback );
			var url = url.replace( /{callback}/, name );
			$._jsonp.load( url, name );
			return this;
		}
	});
})(jQuery);

$(
	function()
	{
		$.fn.pagination.options =
			{
				items_per_page: 20,
				num_display_entries: 2,
				current_page: 0,
				num_edge_entries: 2,
				link_to: "javascript:void(0)",
				prev_text: "上一页",
				next_text: "下一页",
				ellipse_text: "...",
				prev_show_always: false,
				next_show_always: false,
				callback: pageSelected
			};
		
		function pageSelected(page_id, jq)
		{
			$.fn.pagination.options.current_page = page_id;
			refreshMessages();
		}
		
		function refreshMessages()
		{
			$.login(
				{
					automatic: false,
					complete:
						function(result)
						{
							if (result.IsAuthenticated)
							{
								$.getJSONP(
									"../services/clubservice.aspx?callback=getMyMessages&method=GetMyMessages&pageIndex={0}&pageSize={1}&pin={2}".format($.fn.pagination.options.current_page, $.fn.pagination.options.items_per_page, result.Name),
									getMyMessages);
							}
						}
				});
		}
		
		refreshMessages();
		
		$("a[id^=R]").livequery(
			"click",
			function()
			{
				var current = $(this);
				$.getJSON(
					"../services/clubservice.aspx?callback=?",
					{
						method: "SaveMessage",
						id: $(current).attr("id").replace("R", ""),
						state: -1
					},
					function(result)
					{
						if (result.Result)
						{
							$(current).parents("tr").remove();
							$("#mess_M{0}".format($(current).attr("id").replace("R", ""))).remove();
						}
					});
			});
		
		$("a[id^=V]").livequery(
			"click",
			function()
			{
				var current = $(this);
				getMess("mess_M{0}".format($(current).attr("id").replace("V", "")));
				if ($(current).attr("class") != "")
				{
					$.getJSON(
						"../services/clubservice.aspx?callback=?",
						{
							method: "SaveMessage",
							id: $(current).attr("id").replace("V", ""),
							state: 1
						},
						function(result)
						{
							if (result.Result)
							{
								$(current).removeClass("link_005AA0");
								$(current).css("color", "#666666");
							}
						});
				}
			});
	});

function getMyMessages(result)
{
	if (result != null)
	{
		$(".right1").html(result.GetMyMessages.process(result));
		$("#pager").pagination(result.Parameter.Count, $.fn.pagination.options);
	}
}
