/**
 * Wrap tables
 */

'use strict';

module.exports = function() {
	Array.from(document.querySelectorAll('.o-techdocs-content > table')).forEach(function(el) {
		var wrapper = document.createElement('div');
		wrapper.className = "o-techdocs-table-wrapper";
		el.parentNode.insertBefore(wrapper, el);
		wrapper.appendChild(el);
	});
};
