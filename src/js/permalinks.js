/**
 * Show permalink markers on headings with an ID
 */

var $ = require('jquery');

$(function() {
	$('.o-techdocs-content').find('h1, h2, h3, h4, h5, h6').filter('[id]').each(function() {
		$(this).append('<a href="#'+this.id+'" class="o-techdocs__permalink" title="Link directly to this section of the page">&#x00B6;</a>');
	});
});
