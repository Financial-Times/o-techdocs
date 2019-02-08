
import highlight from './src/js/highlight';
import { nav } from './src/js/nav';
import { tables } from './src/js/tables';
import { reveals } from './src/js/reveals';
import { permalinks } from './src/js/permalinks';
import { gistIt } from './src/js/gist-it';

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
export {init};
