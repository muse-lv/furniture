$(function(){
	    var mainSwiper = new Swiper('.main-swiper-container', {
	    	autoplay:2000,
	    	loop : true,
	    	speed:1000,
			prevButton:'.main-button-prev',
			nextButton:'.main-button-next',	
		});

	    var bestSwiper = new Swiper('.best-swiper-container', {
	    	autoplay:1500,
	    	loop : true,
	    	speed:1000, 
	    	slidesPerView: 1,
	    	mousewheelControl : true,
	    	height: 330,
	    	grabCursor : true,
	    	autoplayDisableOnInteraction : false,
	    	direction : 'vertical',
		});

		var productsSwiper = new Swiper('.products-swiper-container', {	
	        slidesPerView: 4,
	        // spaceBetween: 100,
			prevButton:'.pageprev',
			nextButton:'.pagenext',	
		});

		var productsSwiper2 = new Swiper('.products2-swiper-container', {
	    	autoplay:2000,
	    	loop : true,
	    	speed:1000,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',	
		});

		 var customerSwiper = new Swiper('.customer-swiper-container', {
	    	autoplay:2000,
	    	loop : true,
	    	speed:1000,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',	
		});

	    var productSwiper = new Swiper('.product-swiper-container', {
	    	autoplay:2000,
	    	loop : true,
	    	speed:1000,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',	
		});

		var pageSwiper = new Swiper('.page-swiper-container', {	
	        slidesPerView: 4,
			prevButton:'.pageprev',
			nextButton:'.pagenext',	
		});
})
