/*global $,require*/
/**
 * Wrap tables
 */

var $ = require('jquery');

$(function() {
	$('.o-techdocs-content > table').wrap('<div class="o-techdocs-table-wrapper"></div>');
});
