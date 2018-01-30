	// JavaScript Document

$(document).ready(function(){
	$("#service-carousel").owlCarousel({
		loop:true,
		autoplay:false,
		autoplayHoverPause:true,
		navigation : true,
		//slideSpeed: 300,
		//autoPlay: 3000, //Set AutoPlay to 3 seconds
		navigationText: [
       "<i class='fa fa-chevron-left'></i>",
       "<i class='fa fa-chevron-right'></i>"],
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		itemsTablet: [768,2],
		itemsMobile: [480,1]		
	});
	$('#slider-with-blocks-1').owlCarousel({        
        autoPlay: false,
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        singleItem:true,
        navigationText: [
       "<i class='fa fa-chevron-left'></i>",
       "<i class='fa fa-chevron-right'></i>"]
    });
});
    

