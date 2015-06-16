$(document).ready(function() {
	$("#owl-demo").owlCarousel({

	navigation : true,
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem : true

	// "singleItem:true" is a shortcut for:
	// items : 1, 
	// itemsDesktop : false,
	// itemsDesktopSmall : false,
	// itemsTablet: false,
	// itemsMobile : false

	});
	
	$('#nav').onePageNav({
		filter: ':not(.external)',
	});


	$(function() {
		$('#sti-menu').iconmenu({
			animMouseenter	: {
				'mText' : {speed : 400, easing : 'easeOutExpo', delay : 140, dir : -1},
				'sText' : {speed : 400, easing : 'easeOutExpo', delay : 280, dir : -1},
				'icon'  : {speed : 400, easing : 'easeOutExpo', delay : 0, dir : -1}
			},
			animMouseleave	: {
				'mText' : {speed : 400, easing : 'easeInExpo', delay : 140, dir : -1},
				'sText' : {speed : 400, easing : 'easeInExpo', delay : 0, dir : -1},
				'icon'  : {speed : 400, easing : 'easeInExpo', delay : 280, dir : -1}
			}
		});
	});
});