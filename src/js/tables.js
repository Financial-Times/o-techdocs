/*global require*/
/**
 * Wrap tables
 */

'use strict';

document.addEventListener('o.DOMContentLoaded', function() {
	Array.from(document.querySelectorAll('.o-techdocs-content > table')).forEach(function(el) {
		var wrapper = document.createElement('div');
		wrapper.className = "o-techdocs-table-wrapper";
		el.parentNode.insertBefore(wrapper, el);
		wrapper.appendChild(el);
	});
}, false);
