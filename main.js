/*global require*/

require('./src/js/nav');
require('./src/js/reveals');
require('./src/js/permalinks');
require('./src/js/gist-it');

require('o-table').wrap('.o-techdocs-content table', 'o-techdocs-table-wrapper');

(function(){
    "use strict";
    var Header = require('o-ft-header'),
    	OHierarchicalNav = require('o-hierarchical-nav'),
        headerEl = document.querySelector('[data-o-component="o-ft-header"]'),
        navEl = document.querySelector('[data-o-component="o-hierarchical-nav"]');

    if (headerEl) {
        new Header(headerEl);
    }

    if (navEl) {
    	new OHierarchicalNav(navEl);
    }
}());
