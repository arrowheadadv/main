$(document).ready(function(){

	$('#mycarousel').jcarousel({
		visible: 4,
		scroll: 1
	});


	$('.mobile-nav-button').on('click', function(event){
		event.preventDefault();
		
		$(this).toggleClass('active');
		$('nav.mobile').toggle('slide');

	}); // end function

	/***
		Portfolio WEB Img Slider
	***/

	$('#slide-img1').on('click', function() {
	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
			$(".desktop-port li.port-featured img").attr('src',"img/web/1-big.jpg");
			$(".desktop-port li.port-featured img").fadeIn();
	  });
	});
	  
	$('#slide-img2').on('click', function() {
	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
			$(".desktop-port li.port-featured img").attr('src',"img/web/2-big.jpg");
			$(".desktop-port li.port-featured img").fadeIn();
	  });
	});

	$('#slide-img3').on('click', function() {
	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
			$(".desktop-port li.port-featured img").attr('src',"img/web/3-big.jpg");
			$(".desktop-port li.port-featured img").fadeIn();
	  });
	});

	$('#slide-img4').on('click', function() {
  	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
		$(".desktop-port li.port-featured img").attr('src',"img/web/4-big.jpg");
		$(".desktop-port li.port-featured img").fadeIn();
	  });
	});

	/***
		END Portfolio WEB Img Slider
	***/
				
	/***
		Portfolio PRINT Img Slider
	***/

	$('#slide-print-img1').on('click', function() {
	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
			$(".desktop-port li.port-featured img").attr('src',"img/print/1-big.jpg");
			$(".desktop-port li.port-featured img").fadeIn();
	  });
	});
	  
	$('#slide-print-img2').on('click', function() {
	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
			$(".desktop-port li.port-featured img").attr('src',"img/print/2-big.jpg");
			$(".desktop-port li.port-featured img").fadeIn();
	  });
	});

	$('#slide-print-img3').on('click', function() {
	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
			$(".desktop-port li.port-featured img").attr('src',"img/print/3-big.jpg");
			$(".desktop-port li.port-featured img").fadeIn();
	  });
	});

	$('#slide-print-img4').on('click', function() {
  	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
		$(".desktop-port li.port-featured img").attr('src',"img/print/4-big.jpg");
		$(".desktop-port li.port-featured img").fadeIn();
	  });
	});

	/***
		END Portfolio PRINT Img Slider
	***/

		/***
		Portfolio VIDEO Img Slider
	***/

	$('#slide-video-img1').on('click', function() {
	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
			$(".desktop-port li.port-featured img").attr('src',"img/video/1-big.jpg");
			$(".desktop-port li.port-featured img").fadeIn();
	  });
	});
	  
	$('#slide-video-img2').on('click', function() {
	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
			$(".desktop-port li.port-featured img").attr('src',"img/video/2-big.jpg");
			$(".desktop-port li.port-featured img").fadeIn();
	  });
	});

	$('#slide-video-img3').on('click', function() {
	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
			$(".desktop-port li.port-featured img").attr('src',"img/video/3-big.jpg");
			$(".desktop-port li.port-featured img").fadeIn();
	  });
	});

	$('#slide-video-img4').on('click', function() {
  	  $('.desktop-port li.port-featured img').fadeOut('fast', function() {
		$(".desktop-port li.port-featured img").attr('src',"img/video/4-big.jpg");
		$(".desktop-port li.port-featured img").fadeIn();
	  });
	});

	/***
		END Portfolio VIDEO Img Slider
	***/
		
});