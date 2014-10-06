/**
 * Display Gist-it gists
 *
 * Gist-it is a JSONp endpoint, so we need to attach a handler to the window object.
 */
'use strict';

if (typeof window.oTechdocs === 'undefined') window.oTechdocs = {};

window.oTechdocs.renderGistIt = function(content, file) {

	// Extract just the prettyprint bit, which can then use techdocs standard styling
	content = content.replace(/^[\s\S]*(<pre [^>]*>)([\s\S]*?<\/pre>)[\s\S]*$/, "<pre class='prettyprint linenums'>$2");

	/* jshint ignore:start */
	// Dear future me, yes, you used a document.write here.  Since renderGistit is called during parse and is blocking, we may as well.  We also don't have an element to hook and push the content into.  Since it's just for docs, it's not the end of the world.
	document.write(content);
	/* jshint ignore:end */
};
