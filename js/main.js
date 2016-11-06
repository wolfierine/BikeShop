$(document).ready(function(){

	//smooth links scrolling 
	smoothScroll();


	// variables
	var bike_img = $("#bike-zoom"),
		nav = $(".page-nav");


	//zoom plugin
	bike_img.zoom({
		on:'grab',
	});


	//zoom icons
	var up = 1;
	$(".fa-search-plus").on("click", function(){
		up += .2;
		$(".zoom-bike").css({
			'transform': 'scale(' + up + ')'
		});
	});

	$(".fa-search-minus").on("click", function(){
		up -= .2;
		if(up > 1){
			$(".zoom-bike").css({
				'transform': 'scale(' + up + ')'
			})
		}else{
			$(".zoom-bike").css({
				'transform': 'scale(1)'
			});
			up = 1;
		}			
	});

	$(".fa-undo").on("click", function(){
		$(".zoom-bike").css({
			'transform': 'scale(1)'
		});
		up = 1;
	});


	//zoom thumbnails
	$(".zoom-img").on("mouseover", function(){
		bike_img.find("img").css({
			'opacity':"0",
		});
	});

	$(".thumbnail-1").on("mouseover", function(){
		bike_img.css({
			"background-image":"url('images/bicycle.jpg')",
			"background-position": "right top"
		})
	});

	$(".thumbnail-2").on("mouseover", function(){
		bike_img.css({
			"background-image":"url('images/bicycle.jpg')",
			"background-position": "center bottom"
		})
	});

	$(".thumbnail-3").on("mouseover", function(){
		bike_img.css({
			"background-image":"url('images/bicycle.jpg')",
			"background-position": "left bottom"
		})
	});

	$(".zoom-img").on("mouseout", function(){
		bike_img.find("img").css({
			'opacity':"1",
		});
		bike_img.css({
			"background-image":"none",
			"background-position": "center center"
		})
	});


	//sticky nav
	$(document).on("scroll", function(){
		var scrollTop = $(this).scrollTop();

		if(scrollTop > nav.height()){
			nav.addClass("active").animate({
				top: 0
			});
		}
		else{
			nav.removeClass("active");
		}
	});


	//show active link
	$("nav a").on("click", function(){
		$("nav a").removeClass("active");
		$(this).addClass("active");
	});


	//shop
	var buy_click = $(".buy-btn"),
		basket_items = $(".basket-items")
		i = 0;
	buy_click.on("click", function(e){
		e.preventDefault();
		i++;
		basket_items.text(" ( " + i + " )");
	});

});

function smoothScroll(){
	$("header a").click(function(e){
		e.preventDefault();
		var target = $(this).data("target");
		
		$("html body").animate({
			scrollTop: $("#" + target).offset().top}, 1000);
	});
}	