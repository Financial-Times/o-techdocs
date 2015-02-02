/*global require*/
/**
 * Add a second navigation menu to quickly navigate to
 * anchors in the page.
 */
'use strict';

var $ = require('jquery');
var getCurrentLayout = require('o-grid').getCurrentLayout;

$(function() {
	var list = '', lis = [], scrollmargin, scrolltimer, resizetimer, dockpoint, dockmargin, headings = [], currentheading;

	// Find heading 2s and build a link list.  Only proceed if there would be more than one item in the list
	$('.o-techdocs-content h2[id]').each(function() {
		headings.push({id:this.id, pos:$(this).offset().top});
		lis.push('<li id="o-techdocs-pagenav-'+this.id+'"><a href="#'+this.id+'">'+this.innerHTML+'</a></li>');
	});
	if (lis.length < 2) return;
	list = $('<ul class="o-techdocs-nav o-techdocs-nav--page" data-o-grid-colspan="12">'+lis.join('')+'</ul>');

	// Insert the new nav list after the existing one
	$('.o-techdocs-sidebar').append(list);

	// Determine border tolerance for highlighting nav sections (once immediately, and then on resize)
	calcScrollMargin();

	function calcScrollMargin() {
		scrollmargin = $(window).height() / 8;
	}

	function showHideMenu() {
		var onecol = $('.o-techdocs-content:eq(0)').offset().top > $('.o-techdocs-nav:eq(0)').offset().top;
		if (onecol && list.is(':visible')) {
			list.hide();
		} else if (!onecol && !list.is(':visible')) {
			list.show();
		}
	}

	// On scroll, determine which section is in view, and highlight it
	$(document).on('scroll', function() {
		if (scrolltimer) return;

		// Fix navigation only in large layouts
		var affixInCurrentLayout = /^(L|XL)$/.test(getCurrentLayout());

		scrolltimer = setTimeout(function() {
			scrolltimer = null;
			var scrolltop = $(document).scrollTop();
			var scrollos = scrolltop + scrollmargin;
			var candidate;
			headings.forEach(function(heading) {

				// Heading is before current scroll position, so might be the current heading
				if (heading.pos <= scrollos) {
					candidate = heading;

				// Heading is after current scroll position, can't be the current or any future one
				} else if (heading.pos > scrollos) {
					return false;
				}
			});
			if (candidate && candidate.id !== currentheading) {
				list.find('li').removeAttr('aria-selected');
				$('#o-techdocs-pagenav-'+candidate.id).attr('aria-selected', 'true');
				currentheading = candidate.id;
			} else if (!candidate) {
				list.find('li').removeAttr('aria-selected');
			}

			// Dock or undock the navigation menu
			var docked = list.hasClass('o-techdocs-nav--affix');
			if (!docked && (scrolltop+dockmargin) > dockpoint) {
				if (affixInCurrentLayout) {
					list.addClass('o-techdocs-nav--affix');
					list.width($('.o-techdocs-nav').eq(0).width());
				}
			} else if (docked && (scrolltop+dockmargin) < dockpoint) {
				list.removeClass('o-techdocs-nav--affix');
				list.width('auto');
			}
		}, 100);
	});

	// On resize, reconsider boundary tolerance for section highlighting
	$(window).on('resize', function() {
		if (resizetimer) return;
		resizetimer = setTimeout(function() {
			resizetimer = null;
			calcScrollMargin();
			showHideMenu();
		}, 1000);
	});

	// On window load, recache all the heading positions as they may have moved since DOMReady, due to images being loaded in
	$(window).on('load', function() {
		headings = [];
		$('.o-techdocs-content h2[id]').each(function() {
			headings.push({id:this.id, pos:$(this).offset().top});
		});

		// Calculate the dock point for the menu
		dockpoint = list.offset().top;
		dockmargin = 50;
	});
});
