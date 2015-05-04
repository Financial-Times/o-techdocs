/*global require*/
/**
 * Support displaying additional content on clicking reveal links
 */

'use strict';

document.addEventListener('o.DOMContentLoaded', function() {
	document.querySelector('.o-techdocs-content').addEventListener('click', function(e) {
		if (e.target.tagName === 'a' && e.target.href.indexOf('#') === 0) {
			var el = document.querySelector(e.target.href);
			if (el && el.classList.contains('o-techdocs__aside--toggleable')) {
				el.classList.toggle('o-techdocs__aside--visible');
				e.preventDefault();

				// Avoid triggering on higher level o-techdocs-content containers
				e.stopPropagation();
			}
		}
	});
}, false);
