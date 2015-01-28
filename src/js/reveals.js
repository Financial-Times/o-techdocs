/*global require*/
/**
 * Support displaying additional content on clicking reveal links
 */
'use strict';

var $ = require('jquery');

$(function() {
	$('.o-techdocs-content').on('click', 'a', function(e) {
		if ($(this).attr('href').indexOf('#') === 0) {
			var el = $($(this).attr('href'));
			if (el.length && el.hasClass('o-techdocs__aside--toggleable')) {
				el.toggle();
				e.preventDefault();

				// Avoid triggering on higher level o-techdocs-content containers
				e.stopPropagation();
			}
		}
	});
});
