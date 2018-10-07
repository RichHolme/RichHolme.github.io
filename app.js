$(document).ready(function(){
	AOS.init();
	$(".info").hide();
	$(".mainProjectInfo").hide();
	$(".slick-arrow").hide();
	$(".slick-next").hide()

	$(".infoBtn").on('click', function(){
		event.preventDefault();
		let id = $(this).attr("id");
		$("." + id + "Info").show();
		$("." + id).hide();
	})

	$(".close").on('click', function(){
		event.preventDefault();
		let id = $(this).attr("id");
		id = id.substring(0, id.length - 5);
		$("." + id + "Info").hide();
		$("." + id).addClass("animated");
		$("." + id).addClass("fadeInUp");
		$("." + id).show();
	})

	$('.autoplay').slick({
	  slidesToShow: 10,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 1250,
	  arrows: false
	});


})