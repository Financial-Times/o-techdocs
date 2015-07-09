"use strict";

require('o-header');

var techdocsModules = [
	require('./src/js/highlight'),
	require('./src/js/nav'),
	require('./src/js/tables'),
	require('./src/js/reveals'),
	require('./src/js/permalinks'),
	require('./src/js/gist-it')
];

function init() {
	techdocsModules.forEach(function(module) {
		module();
	});
}

document.addEventListener('o.DOMContentLoaded', init, false);
exports.init = init;
