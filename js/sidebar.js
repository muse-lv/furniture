$(function(){
	var $close = $(".siderbar-btn");
	var $closeBtn = $(".siderbar-btn").find(".button");
	var $sidebar = $(".product-menu");
	var flag ="closed";

	$close.on("touchend",function(){
		if(flag === "closed"){
			open();
		}else if(flag === "opened"){
			close();
		}
	});
	$close.on("click",function(){
		if(flag === "closed"){
			open();
		}else if(flag === "opened"){
			close();
		}
	});

	function open(){
		$sidebar.css({"opacity":"1","transform":"translateX(0)"});
		$closeBtn.css("transform","rotate(405deg)");
		$closeBtn.css("-webkit-transform","rotate(405deg)");
		flag = "opened";
	}

	function close(){
		$sidebar.css({"opacity":"0","transform":"translateX(-100%)"});
		$closeBtn.css("-webkit-transform","rotate(0)");
		flag = "closed";
	}

});