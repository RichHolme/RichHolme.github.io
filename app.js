$(document).ready(function(){
	AOS.init({
	  startEvent: 'load',
	});

	$(".info").hide();
	// $(".mainProjectInfo").hide();
	$(".slick-arrow").hide();
	$(".slick-next").hide()

	// $(window).on('scroll', function() {
	//     $(".navbar").addClass("navbar-scroll");
	// });

	function removeNavShadow() {
	  var scroll = $(window).scrollTop();
	  if (scroll === 0) {
	    
	    $(".navbar").removeClass("navbar-scroll");
	  } else {
	    $(".navbar").addClass("navbar-scroll");
	  }
	}
	removeNavShadow();
	$(window).scroll(function() {
	  removeNavShadow();
	});

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
	  slidesToShow: 13,
	  slidesToScroll: 1,
	  arrows: false
	});


})