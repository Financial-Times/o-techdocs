
var $ = require('jquery');

$.each($('table.o-table'), function(i, tableEl) {
    tableEl = $(tableEl);
    if (!tableEl.parent().hasClass("o-techdocs-table")) {
        tableEl.wrap('<div class="o-techdocs-table"></div>');
    }
});