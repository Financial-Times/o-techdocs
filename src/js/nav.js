/**
 * Add a second navigation menu to quickly navigate to
 * anchors in the page.
 */

var $ = require('jquery');

$(function() {
	var list = '', lis = [], scrollmargin, scrolltimer, resizetimer, dockpoint, dockmargin;

	// Find heading 2s and build a link list.  Only proceed if there would be more than one item in the list
	$('.o-techdocs-content h2[id]').each(function() {
		lis.push('<li id="o-techdocs-pagenav-'+this.id+'"><a href="#'+this.id+'">'+this.innerText+'</a></li>');
	});
	if (lis.length < 2) return;
	list = $('<ul class="o-techdocs-nav o-techdocs-nav--page o-grid-col|12|">'+lis.join('')+'</ul>');

	// Insert the new nav list after the existing one
	$('.o-techdocs-sidebar').append(list);

	// Determine border tolerance for highlighting nav sections (once immediately, and then on resize)
	calcScrollMargin();

	// Calculate the dock point for the menu
	dockpoint = list.offset().top;
	dockmargin = 50;

	function calcScrollMargin() {
		scrollmargin = $(window).height() / 5;
	}

	// On scroll, determine which section is in view, and highlight it
	$(document).on('scroll', function() {
		if (scrolltimer) return;
		scrolltimer = setTimeout(function() {
			scrolltimer = null;
			var scrolltop = $(document).scrollTop(); scrollos = scrolltop + scrollmargin;
			var candidate;
			$('.o-techdocs-content').find('h2, h3, h4').each(function() {
				var thisos = $(this).offset().top;
				if (thisos <= scrollos && $('#o-techdocs-pagenav-'+this.id).length) {
					candidate = $('#o-techdocs-pagenav-'+this.id);
				} else if (thisos > scrollos && candidate) {
					return false;
				}
			});
			console.log(candidate);
			if (candidate && !candidate.hasClass('o-techdocs-nav__item--active')) {
				list.find('li').removeClass('o-techdocs-nav__item--active');
				candidate.addClass('o-techdocs-nav__item--active');
			} else if (!candidate) {
				list.find('li').removeClass('o-techdocs-nav__item--active');
			}

			// Dock or undock the navigation menu
			var docked = list.hasClass('o-techdocs-nav--affix');
			if (!docked && (scrolltop+dockmargin) > dockpoint) {
				list.addClass('o-techdocs-nav--affix');
				list.width($('.o-techdocs-nav').eq(0).width());
			} else if (docked && (scrolltop+dockmargin) < dockpoint) {
				list.removeClass('o-techdocs-nav--affix');
				list.width('auto');
			};
		}, 100);
	});

	// On resize, reconsider boundary tolerance for section highlighting and dock/undock menu
	$(window).on('resize', function() {
		if (resizetimer) return;
		resizetimer = setTimeout(function() {
			resizetimer = null;
			calcScrollMargin();
		}, 1000);
	});
});
