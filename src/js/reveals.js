/**
 * Support displaying additional content on clicking reveal links
 */

var $ = require('jquery');

$(function() {
	$('.o-techdocs-content').on('click', 'a', function(e) {
		if ($(this).attr('href').indexOf('#') === 0) {
			var el = $($(this).attr('href'));
			if (el.length && el.hasClass('o-techdocs__aside--toggleable')) {
				el.toggle();
				e.preventDefault();
			}
		}
	})
});
