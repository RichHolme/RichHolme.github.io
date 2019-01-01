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
	$('a.rps').click(function(e) {
	    e.preventDefault();
	    window.open('https://richholme.github.io/RPS-Game/');
	    window.open('https://richholme.github.io/RPS-Game/');
	});

	$('a').click(function(e) {
	    // e.preventDefault();
	});

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

	$("#projectScroll").on('click', function(){
		$('html,body').animate({
          scrollTop: $('#apps').offset().top-100
        }, 1000);
	})

	$("#contactScroll").on('click', function(){
		event.preventDefault();
		$('html,body').animate({
          scrollTop: $('#contact').position().top-100
        }, 1000);
	})

	


})