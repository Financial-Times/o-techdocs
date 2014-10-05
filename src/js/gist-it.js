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

	document.write(content);
};
