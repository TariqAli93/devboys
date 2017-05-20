jQuery(document).ready(function($) {
	sidebar();
	function sidebar() {
		'use strict';

		var isOpen = false;
		$('.__navbar .navbar-toggle').on('click' , function(e) {
			if (!isOpen) {
				$('.__navbar .nav-container').addClass('open');
				$('body').append('<div class="sidebar_overlay"></div>');
				isOpen = true;
			} 

			else {
				$('.__navbar .nav-container').removeClass('open');
				$('.sidebar_overlay').remove();
				isOpen = false;
			}
		});
	}
});