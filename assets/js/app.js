$(document).ready(function(){

	$("#mida_profile").hide();
	$("#cat_profile").hide();
	$("#apps").hide();

	$("#about").addClass('selected_nav');

	$("#work").on("click",function(){
		$("#mida_profile").show();
		$("#cat_profile").show();
		$("#apps").hide();
		$("#profile").hide();

		$("#about").removeClass('selected_nav');
		$("#bootcamp").removeClass('selected_nav');
		$("#work").addClass('selected_nav');
	});

	$("#about").on("click",function(){
		$("#mida_profile").hide();
		$("#cat_profile").hide();
		$("#apps").hide();
		$("#profile").show();

		$("#about").addClass('selected_nav');
		$("#bootcamp").removeClass('selected_nav');
		$("#work").removeClass('selected_nav');
	})

	$("#bootcamp").on("click",function(){
		$("#mida_profile").hide();
		$("#cat_profile").hide();
		$("#apps").show();
		$("#profile").hide();

		$("#about").removeClass('selected_nav');
		$("#bootcamp").addClass('selected_nav');
		$("#work").removeClass('selected_nav');
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

	var ctx = $('#mida_pie_chart');

	data = {

		// These labels appear in the legend and in the tooltips when hovering different arcs
	    labels: [
	        'JavaScript', // 15
	        'React', // 25
	        'PostgreSQL', // 30
	        'Node.js', // 25
	        'Express.js' // 15
	    ],

	    datasets: [{
	        data: [15, 25, 40, 15, 10],
            backgroundColor: [
                '#f7df1e',
                '#00d8ff',
                '#336791',
                '#6cc24a',
                'rgba(153, 102, 255, 0.2)'
            ],
	    }],

	};

	var myPieChart = new Chart(ctx, {
	    type: 'pie',
	    data: data,
	    options: {
	        legend: {
	            display: true,
	            position: 'right',
	            // labels: {
	            //     fontColor: '#333'
	            // }
	        },
	    }
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