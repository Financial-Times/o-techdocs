/*global require*/
/**
 * Add a second navigation menu to quickly navigate to
 * anchors in the page.
 *
 */
 /* jshint browser:true */

'use strict';

var getCurrentLayout = require('o-grid').getCurrentLayout;

var oViewport = require('o-viewport');
oViewport.listenTo('scroll');
oViewport.listenTo('resize');

document.addEventListener('o.DOMContentLoaded', function() {
	var list = '', lis = [], scrollmargin, scrolltimer, resizetimer, dockpoint, dockmargin, headings = [], currentheading;
	var qsa = document.querySelectorAll, qs = document.querySelector;

	// Find heading 2s and build a link list.  Only proceed if there would be more than one item in the list
	Array.of(qsa('.o-techdocs-content h2[id]')).forEach(function(el) {
		headings.push({id:el.id, pos:offset(el)});
		lis.push('<li id="o-techdocs-pagenav-'+el.id+'"><a href="#'+el.id+'">'+el.innerHTML+'</a></li>');
	});
	if (lis.length < 2) return;
	list = document.createElement('UL');
	list.className = "o-techdocs-nav o-techdocs-nav--page";
	list.setAttribute('data-o-grid-colspan', '12');
	list.innerHTML = lis.join('');

	// Insert the new nav list after the existing one
	qs('.o-techdocs-sidebar').appendChild(list);

	// Determine border tolerance for highlighting nav sections (once immediately, and then on resize)
	calcScrollMargin();

	function calcScrollMargin() {
		scrollmargin = viewportHeight() / 8;
	}

	function viewportHeight() {
		return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	}

	function offset(el) {
		var os = 0;
		while (el.offsetParent) {
			os += el.offsetTop;
			el = el.offsetParent;
		}
	}

	function showHideMenu() {
		var isOneCol = offset(qs('.o-techdocs-content')) > offset(qs('.o-techdocs-nav'));
		if (isOneCol && list.getAttribute('aria-hidden') !== 'true') {
			list.setAttribute('aria-hidden', true);
		} else if (!isOneCol && list.getAttribute('aria-hidden') === 'true') {
			list.setAttribute('aria-hidden', false);
		}
	}

	// On scroll, determine which section is in view, and highlight it
	document.addEventListener('oViewport.scroll', function() {
		var affixInCurrentLayout = /^(L|XL)$/.test(getCurrentLayout());
		var scrolltop = document.scrollTop;
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
			Array.of(list.querySelectorAll('li')).forEach(function(el) {
				el.setAttribute('aria-selected', 'false');
			});
			document.getElementById('o-techdocs-pagenav-'+candidate.id).setAttribute('aria-selected', 'true');
			currentheading = candidate.id;
		} else if (!candidate) {
			Array.of(list.querySelectorAll('li')).forEach(function(el) {
				el.setAttribute('aria-selected', 'false');
			});
		}

		// Dock or undock the navigation menu
		var docked = list.classList.contains('o-techdocs-nav--affix');
		if (!docked && (scrolltop+dockmargin) > dockpoint) {
			list.classList.add('o-techdocs-nav--affix');
			list.style.width = qs('.o-techdocs-nav').offsetWidth + 'px';
		} else if (docked && (scrolltop+dockmargin) < dockpoint) {
			list.classList.remove('o-techdocs-nav--affix');
			list.style.width = 'auto';
		}
	}, false);

	// On resize, reconsider boundary tolerance for section highlighting
	document.addEventListener('oViewport.resize', function() {
		calcScrollMargin();
		showHideMenu();
	});

	// On window load, recache all the heading positions as they may have moved since DOMReady, due to images being loaded in
	// REVIEW: This ought to be o.load, but I don't think we reliably fire that...
	window.addEventListener('load', function() {
		headings = [];
		Array.of(qsa('.o-techdocs-content h2[id]')).forEach(function(el) {
			headings.push({id:el.id, pos:offset(el)});
		});

		// Calculate the dock point for the menu
		dockpoint = offset(list);
		dockmargin = 50;
	}, false);
}, false);
