/**
 * Support displaying additional content on clicking reveal links
 */

'use strict';

module.exports = function() {
	if (!document.querySelector('.o-techdocs-content')) return;

	document.querySelector('.o-techdocs-content').addEventListener('click', function(e) {
		if (e.target.tagName.toUpperCase() === 'A' && e.target.getAttribute('href').indexOf('#') === 0) {
			var el = document.querySelector(e.target.getAttribute('href'));
			if (el && el.classList.contains('o-techdocs__aside--toggleable')) {
				el.classList.toggle('o-techdocs__aside--visible');
				e.preventDefault();

				// Avoid triggering on higher level o-techdocs-content containers
				e.stopPropagation();
			}
		}
	});
};
