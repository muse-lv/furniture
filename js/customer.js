$(function(){
	//各种情况下改变右边栏高度
	function action(){		
		var items = $(".customer-item");
		var imgs = items.find("img");
		for(i = imgs.length-1 ; i>=0 ; i--){
			imgs.eq(i).one("load",function(){
				var _this = $(this);
				setHeight(_this);
			}).each(function(){
				if(this.complete){
					var _this = $(this);
					setHeight(_this);
				}
			})
				
			$(window).resize(function(){
				imgs.each(function(){					
					var _this = $(this);
					setHeight(_this);
				});
			})
		}
	}
	// 设置右边栏高度方法
	function setHeight(element){
		var left = element.parents(".customer-left");
		var right = left.siblings(".customer-right");
		var leftHeight = left.outerHeight();
		right.css("height",leftHeight+'px')
	}
	
	action();
})