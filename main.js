
import highlight from './src/js/highlight.js';
import { nav } from './src/js/nav.js';
import { tables } from './src/js/tables.js';
import { reveals } from './src/js/reveals.js';
import { permalinks } from './src/js/permalinks.js';
import { gistIt } from './src/js/gist-it.js';

const techdocsModules = [
	highlight,
	nav,
	tables,
	reveals,
	permalinks,
	gistIt
];

function init() {
	techdocsModules.forEach(function(module) {
		module();
	});
}

document.addEventListener('o.DOMContentLoaded', init, false);
exports.init = init;
