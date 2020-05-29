$(document).ready(function(){

	$("#mida_profile").hide();
	$("#cat_profile").hide();
	$("#apps").hide();

	$("#work").on("click",function(){
		$("#mida_profile").show();
		$("#cat_profile").show();
		$("#apps").hide();
		$("#profile").hide();
	});

	$("#about").on("click",function(){
		$("#mida_profile").hide();
		$("#cat_profile").hide();
		$("#apps").hide();
		$("#profile").show();
	})

	$("#bootcamp").on("click",function(){
		$("#mida_profile").hide();
		$("#cat_profile").hide();
		$("#apps").show();
		$("#profile").hide();
	})

	// adjust height on page load 
	// let height = $( window ).height();
	// height = height - $(".navbar").height();
	// $("#mida_profile").height(height);
	// $("#cat_profile").height(height);

	//adjust height when screen resized 
	// $( window ).resize(function() {
	//  	let height = $( window ).height();
	// 	height = height - $(".navbar").height();
	// 	$("#mida_profile").height(height);
	// 	$("#cat_profile").height(height);
	// });

	AOS.init({
	  startEvent: 'load',
	});

	$(".info").hide();
	$(".slick-arrow").hide();
	$(".slick-next").hide()

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

	$("#name").on('click', function(){
		event.preventDefault();
		$('html,body').animate({
          scrollTop: $('#profile').position().top-100
        }, 1000);
	})

	$("#midaScroll").on('click', function(){
		event.preventDefault();
		$('html,body').animate({
          scrollTop: $('#mida_profile').position().top - $(".navbar").height()
        }, 1000);
	})

	$("#catScroll").on('click', function(){
		event.preventDefault();
		$('html,body').animate({
          scrollTop: $('#cat_profile').position().top - $(".navbar").height()
        }, 1000);
	})

	$("#bootcampScroll").on('click', function(){
		event.preventDefault();
		$('html,body').animate({
          scrollTop: $('#apps').position().top - $(".navbar").height()
        }, 1000);
	})

	$("#midaScroll").mouseenter(function(){
		console.log('showing')
		$(this).tooltip({disabled: false, placement: "bottom"});
	});

	$("#midaScroll").mouseleave(function(){
		console.log('hiding')
		$(this).tooltip({disabled: false});
	});
	

	// let height = $( window ).height();
	// height = height - $(".navbar").height();
	// $("#mida_profile").height(height);
	// $("#cat_profile").height(height);
// 	#mida_profile,
// #cat_profile
// {
// 	height: 90vh;
// 	border: 1px solid black;
// }

})