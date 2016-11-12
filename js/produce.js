$(function(){
	var size = $(".size");
	var main_size = $(".main-size");
	var return_size = $(".return-size");
	var model_main = $(".model-main");
	var model_return = $(".model-return");
	var color_left = $(".color-left");
	var color_right = $(".color-right");
	var single_add_to_cart_button = $(".single_add_to_cart_button");

	function addCurr(element){
		var _element = element;
		if(element.find("dd").length > 0){
			var _elementLis = element.find("dd");
		}else if(element.find("li").length > 0) {
			var _elementLis = element.find("li");
		}
		
		for(var i = _elementLis.length-1 ; i>=0 ;i--){
			var _elementLi = _elementLis.eq(i);
			_elementLi.on("click",function(){
				var _this = $(this);
				_elementLis.removeClass("current");
				_this.addClass("current");
			})
		}
	}

	function model(element){
		var _element = element;
		var _elementLis = element.find("li");
		for(var i = _elementLis.length-1 ; i>=0 ;i--){
			var _elementLi = _elementLis.eq(i);
			_elementLi.on("click",function(){
				var _this = $(this);
				var size = _this.find("span").html();
				if(_this.attr("data") == "main"){
					if(model_main.length>0){
						model_main.html(size);
					}
					return false;
				}
				if(_this.attr("data") == "return"){
					if(model_return.length>0){
						model_return.html(size);
					}
					return false;
				}
			})
		}
	}
	
	addCurr(main_size);
	addCurr(return_size);
	addCurr(color_left);
	addCurr(color_right);
	model(main_size);
	model(return_size);

	if(single_add_to_cart_button.length>0) {
		single_add_to_cart_button.on("click",function(){
			layer.open({
			  type: 2,
			  title: "购物车",
			  closeBtn: 1,
			  shadeClose: true,
			  content: 'buy.html',
			  skin: 'layui-layer-rim',
			  area:['900px', '500px']
			});				
		});
	}
})