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

});