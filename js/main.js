$(function(){
	// 左右栏高度一致
	var left = $(".products-left");
	var right = $(".products-right");
	if(left.length>0 && right.length>0) {
		var rightHeight = right.outerHeight();
		left.outerHeight(rightHeight);
		$(window).resize(function(){
			rightHeight = right.outerHeight();
			left.outerHeight(rightHeight);
		})
	}
	
	// 弹窗
	var cart = $(".icon-car");
	var login = $(".topbar-login-login");
	var register = $(".topbar-login-register");
	var single_add_to_cart_button = $(".single_add_to_cart_button");
	cart.on("click",function(){
		layer.open({
		  type: 2,
		  title: "carts",
		  closeBtn: 1,
		  shadeClose: true,
		  content: 'buy.html',
		  skin: 'layui-layer-rim',
		  area:['910px', '500px']
		});
	})

	login.on("click",function(){
		layer.open({
		  type: 2,
		  title: "login",
		  closeBtn: 1,
		  shadeClose: true,
		  content: 'login.html',
		  skin: 'layui-layer-rim',
		  area:['600px', '350px']
		});		
	})

	register.on("click",function(){
		layer.open({
		  type: 2,
		  title: "register",
		  closeBtn: 1,
		  shadeClose: true,
		  content: 'register.html',
		  skin: 'layui-layer-rim',
		  area:['500px', '425px']
		});				
	});

	if(single_add_to_cart_button.length>0) {
		single_add_to_cart_button.on("click",function(){
			layer.open({
			  type: 2,
			  title: "carts",
			  closeBtn: 1,
			  shadeClose: true,
			  content: 'buy.html',
			  skin: 'layui-layer-rim',
			  area:['900px', '500px']
			});				
		});
	}

	// 导航悬浮
	var main_menu = $(".main-menu");
	var scrollTop = 0;
	$(window).on("scroll",function(){
		scrollTop = $(document).scrollTop();
		if(scrollTop>125){
			main_menu.addClass("show");
		}else{
			main_menu.removeClass("show");
		}
	});

})