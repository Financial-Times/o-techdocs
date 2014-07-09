/*global $,require*/
/**
 * Display Gist-it gists
 *
 * Gist-it is a JSONp endpoint, so we need to attach a handler to the window object.
 */

if (typeof window.oTechdocs == 'undefined') window.oTechdocs = {};

window.oTechdocs.renderGistIt = function(content, file) {
	document.write(content);
}
