/*global require*/
/**
 * Wrap tables
 */
'use strict';

var $ = require('jquery');

$(function() {
	$('.o-techdocs-content > table').wrap('<div class="o-techdocs-table-wrapper"></div>');
});
