/*global require*/

require('./src/js/nav');
require('./src/js/reveals');
require('./src/js/permalinks');
require('o-table').wrap('.o-techdocs-content table', 'o-techdocs-table-wrapper');

(function(){
    "use strict";
    var Header = require('o-ft-header/main'),
        headerEl = document.querySelector('[data-o-component="o-ft-header"]');
    if (headerEl) {
        new Header(headerEl);
    }
}());
