/**
 * Support displaying additional content on clicking reveal links
 */

export function reveals() {
	document.querySelector('.o-techdocs-content').addEventListener('click', function(e) {
		if (e.target.tagName.toUpperCase() === 'A' && e.target.getAttribute('href').indexOf('#') === 0) {
			const el = document.querySelector(e.target.getAttribute('href'));
			if (el && el.classList.contains('o-techdocs__aside--toggleable')) {
				el.classList.toggle('o-techdocs__aside--visible');
				e.preventDefault();

				// Avoid triggering on higher level o-techdocs-content containers
				e.stopPropagation();
			}
		}
	});
};
