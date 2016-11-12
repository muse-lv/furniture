(function(){
	$(function(){
		var	$mobile_search = $("#mobile-search"),
		    $search_box = $("#search-box"),	
		    $mobile_menu = $("#mobile-menu"),
		    $main_menu = $(".main-menu"),
		    $topbar = $(".topbar"),
		    $menu_item_has_children = $(".menu-item-has-children"),
		    $secondary_menu_item_has_children = $(".secondary-menu-item-has-children"),
		    $header_inner = $(".header-inner"),
		    scrollTop = $(window).scrollTop();


		if($(window).width()>769){
			$(window).on("scroll",function(){
				var $logo = $(".logo"),
					scrollTop = $(window).scrollTop(),
					topbarHeight = $topbar.outerHeight(),
					logoHeight = $logo.outerHeight(),
					height = topbarHeight+logoHeight;
				if(scrollTop>height){
					$header_inner.css({"position":"fixed","top":"0","backgroundColor":"#fff","borderTop":"none"});

				}else{
					$header_inner.css("position","relative");
				}
			});  
		}else{

			$mobile_search.on("click",function(){
				$search_box.slideToggle(300);
				$main_menu.css("display","none");
			});
			$mobile_menu.on("click",function(){
				$main_menu.slideToggle(300);
				$search_box.css("display","none");
			});

			mouse($menu_item_has_children);
			mouse($secondary_menu_item_has_children);
		}

		function mouse(element){
			var len = element.length;
			for (var i = len - 1; i >= 0; i--) {
				element.eq(i).on("mouseover",function(){
					$(this).children(".sub-menu").css("maxHeight","500px");
				});
				element.eq(i).on("mouseout",function(){
					$(this).children(".sub-menu").css("maxHeight","0");
				})
			}
		}
		
	});
})();