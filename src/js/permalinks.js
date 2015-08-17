/**
 * Show permalink markers on headings with an ID
 */

module.exports = function() {
	const contEl = document.querySelector('.o-techdocs-content');
	[].slice.call(contEl.querySelectorAll('h1, h2, h3, h4, h5, h6')).filter(function(el) {
		return el.id;
	}).forEach(function(el) {
		const a = document.createElement('a');
		a.href = "#"+el.id;
		a.className = "o-techdocs__permalink";
		a.title = "Link directly to this section of the page";
		a.innerHTML = "&#x00B6;";
		el.appendChild(a);
	});
};
