/*global require*/

require('./src/js/nav');
require('./src/js/tables');
require('./src/js/reveals');
require('./src/js/permalinks');
require('./src/js/gist-it');

(function(){
    "use strict";
    var Header = require('o-ft-header'),
        headerEl = document.querySelector('[data-o-component="o-ft-header"]');

    if (headerEl) {
        new Header(headerEl);
    }
}());
