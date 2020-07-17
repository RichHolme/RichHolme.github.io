// $("html").css("overflow","hidden");
$(document).ready(function(){

	// $("#mida_profile").hide();
	// $("#cat_profile").hide();
	// $("#apps").hide();

	$("#about").addClass('selected_nav');
	// $("html").css("overflow","hidden");

	$("#work").on("click",function(){
		$("#mida_profile").show();
		$("#cat_profile").show();
		$("#apps").hide();
		$("#profile").hide();

		$("#about").removeClass('selected_nav');
		$("#bootcamp").removeClass('selected_nav');
		$("#work").addClass('selected_nav');

		$(".img").removeClass('animated');
		$(".img").removeClass('fadeInUp');
	});

	$("#about").on("click",function(){
		$("#mida_profile").hide();
		$("#cat_profile").hide();
		$("#apps").hide();
		$("#profile").show();

		$("#about").addClass('selected_nav');
		$("#bootcamp").removeClass('selected_nav');
		$("#work").removeClass('selected_nav');

		$(".img").removeClass('animated');
		$(".img").removeClass('fadeInUp');
	})

	$("#bootcamp").on("click",function(){
		$("#mida_profile").hide();
		$("#cat_profile").hide();
		$("#apps").show();
		$("#profile").hide();

		$("#about").removeClass('selected_nav');
		$("#bootcamp").addClass('selected_nav');
		$("#work").removeClass('selected_nav');

		// $("html").css("overflow","visible");
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
		// $("." + id).show(function(this){
		// 	remove_class(this)
		// });
	})	

	// function remove_class(elm){
	// 	let id = $(this).attr("id");
	// 	id = id.substring(0, id.length - 5);
	// 	$("." + id).removeClass("animated");
	// 	$("." + id).removeClass("fadeInUp");
	// }

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