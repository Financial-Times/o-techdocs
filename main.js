/*global require*/

require('./src/js/nav');
require('./src/js/tables');
require('./src/js/reveals');
require('./src/js/permalinks');
require('./src/js/gist-it');
require('o-ft-header');

(function(){
	"use strict";
	document.addEventListener("DOMContentLoaded", function() {
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	});
}());
