/*
	Project Name : Pool Cleaning
	Author Company : Ewebcraft
	Project Date: 5 April, 2017
	Author Website : http://www.ewebcraft.com
	Author Email : ewebcraft@gmail.com
*/

(function ($) {
	"use strict";

	var $window = $(window);

	$window.on('load', function () {
		"use strict";
		$('#loader-body').fadeOut("slow");
	});

	/* ----___ Initialize wow ___ ---- */

	new WOW().init();

	/* ----___ Dropdown ___ ---- */

	if ($window.width() < 767) {
		$(".drop-dropdown").on('click', function (event) {
			event.stopPropagation();
			$(this).find(".drop-dropdown").removeClass('open');
			$(this).parents(".drop-dropdown").addClass('open');
			$(this).toggleClass('open');
		});
	}

	/* ----___ Back To Top Button ___ ---- */
	var backtoTop= $('.back-to-top');
	backtoTop.css('display', 'none');
	
	$window.scroll(function () {
		if ($(this).scrollTop() >= 50) {
			backtoTop.fadeIn(200);
		} else {
			backtoTop.fadeOut(200);
		}
	});

	/* ----___ Smoth Scroll ___ ---- */

	$(".scroll").on('click', function (event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 2000);
	});

	/* ----___ Search Box ___ ---- */

	$(".searchbox-icon").on('click', function () {
		$("#search-form .search-group").toggleClass("search-group-active");
		$(this).toggleClass('searchbox-icon-closed');
	});

	/* ----___ Sticky Header ___ ---- */

	$window.scroll(function () {
		var topHeight;
		var header = $("#header");
		var navigation = $('.navigation');
		if ($window.width() > 640) {
			topHeight = header.outerHeight(true);
		} else {
			topHeight = header.outerHeight(true) + 90;
		}
		if ($window.scrollTop() > topHeight) {
			navigation.addClass('navbar-fixed');
		}
		if ($window.scrollTop() < topHeight) {
			navigation.removeClass('navbar-fixed');
		}
	});

	$(".toggle-arrow").on("click", function () {
		$(this).toggleClass("active");
		$("#estimation").slideToggle("slow");
		$("#about").toggleClass('gray-bg');
	});

	/* ----___ Testimonial ___ ---- */

	$('.testimonial-slider').bxSlider({
		pagerCustom: '#bx-pager',
		mode: 'horizontal',
		startSlide: 1,
		auto: 'true',
		controls: false
	});
	$('li.disable a').on('click', function (event) {
		event.preventDefault();
	});

	/* ----___ Master Slider ___ ---- */

	var total_masterSlider = $('#masterslider').length;
	if(total_masterSlider >= 1) {
		var slider = new MasterSlider();
		slider.control('arrows', {
			insertTo: '#masterslider'
		});
		slider.control('bullets');
		slider.control('timebar', {
			color: "#da1c22"
		});
		slider.setup('masterslider', {
			width: 1170,
			height: 800,
			autoplay: false,
			loop: true,
			space: 5,
			hideLayers: true,
			view: 'basic',
			overPause: true,
			layout: 'fullwidth',
			speed: 15
		});
	}

	/* ----___ Form Scripts ___ ---- */		

	$('#estimation-form').validate({
		submitHandler: function () {
			var curForm = $('#estimation-form');
			$("<div />").addClass("formOverlay").appendTo(curForm);
			$.ajax({
				url: 'mail.php',
				type: 'POST',
				data: curForm.serialize(),
				success: function (data) {
					var res = data.split("::");
					curForm.find("div.formOverlay").remove();
					curForm.prev('.expMessage').html(res[1]);
					if (res[0] == 'Success') {
						curForm.remove();
						curForm.prev('.expMessage').html('');
					}
				}
			});
			return false;
		}
	});
	$('#our-form').validate({
		submitHandler: function () {
			var curForm = $('#our-form');
			$("<div />").addClass("formOverlay").appendTo(curForm);
			$.ajax({
				url: 'mail.php',
				type: 'POST',
				data: curForm.serialize(),
				success: function (data) {
					var res = data.split("::");
					curForm.find("div.formOverlay").remove();
					curForm.prev('.expMessage').html(res[1]);
					if (res[0] == 'Success') {
						curForm.remove();
						curForm.prev('.expMessage').html('');
					}
				}
			});
			return false;
		}
	});
	$('#subscribe-form').validate({
		submitHandler: function () {
			var curForm = $('#subscribe-form');
			$("<div />").addClass("formOverlay").appendTo(curForm);
			$.ajax({
				url: 'mail.php',
				type: 'POST',
				data: curForm.serialize(),
				success: function (data) {
					var res = data.split("::");
					curForm.find("div.formOverlay").remove();
					curForm.prev('.expMessage').html(res[1]);
					if (res[0] == 'Success') {
						curForm.remove();
						curForm.prev('.expMessage').html('');
					}
				}
			});
			return false;
		}
	});

	/* ----___ Initialize Mix it up ___ ---- */	

	$(function () {
		$('#Container').mixItUp();
	});

	/* ----___ Initialize Pretty Photo ___ ---- */	

	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		hook: 'data-gal'
	});

	var total_map = $('#map').length;	
	if(total_map >= 1) { 
		google.maps.event.addDomListener(window, 'load', initmap);
	}

})(jQuery);

function initmap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 10,
		scrollwheel: false,
		center: new google.maps.LatLng(40.6700, -73.9400),
		styles: [{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#46bcec"
			}, {
				"lightness": 17
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f5f5f5"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#ffffff"
			}, {
				"lightness": 17
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#ffffff"
			}, {
				"lightness": 29
			}, {
				"weight": 0.2
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#ffffff"
			}, {
				"lightness": 18
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [{
				"color": "#ffffff"
			}, {
				"lightness": 16
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f5f5f5"
			}, {
				"lightness": 21
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dedede"
			}, {
				"lightness": 21
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#ffffff"
			}, {
				"lightness": 16
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"saturation": 36
			}, {
				"color": "#434242"
			}, {
				"lightness": 40
			}]
		}, {
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f2f2f2"
			}, {
				"lightness": 19
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#fefefe"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#fefefe"
			}, {
				"lightness": 17
			}, {
				"weight": 1.2
			}]
		}]
	});
	setMarkers(map);
}
var item_location = [
	['New York', 'Lorem ipsum dolor sit amet, consectet adipisicing elit consectetur.', 40.6700, -73.9400, 4, 'map-icon.png'],
	['New Rochelle', 'Lorem ipsum dolor sit amet, consectet adipisicing elit consectetur.', 40.9114882, -73.7823549, 5, 'map-icon.png'],
];

function setMarkers(map) {
	var shape = {
		coords: [1, 1, 1, 60, 68, 60, 68, 1],
		type: 'poly'
	};
	for (var i = 0; i < item_location.length; i++) {
		var item = item_location[i];
		var image = {
			url: 'images/' + item[5],
			size: new google.maps.Size(60, 68),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(0, 68)
		};
		var infoWindow = new google.maps.InfoWindow({
			content: item[0],
		});
		var marker = new google.maps.Marker({
			position: {
				lat: item[2],
				lng: item[3]
			},
			animation: google.maps.Animation.DROP,
			map: map,
			icon: image,
			shape: shape,
			title: item[0],
			zIndex: item[4]
		});
		(function (marker, item) {
			google.maps.event.addListener(marker, "click", function (e) {
				infoWindow.setContent("<div style = 'width:220px;min-height:40px' id='m-info-window'> <h6 class='info-window-hding'>" + item[0] + "</h6> <p class='info-window-desc'>" + item[1] + "</p> </div>");
				infoWindow.open(map, marker);
			});
		})(marker, item);
	}
}
