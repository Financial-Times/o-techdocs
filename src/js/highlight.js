/*global require*/
/**
 * Add a second navigation menu to quickly navigate to
 * anchors in the page.
 */
'use strict';

var $ = require('jquery');
var hljs = require('highlight.js');
hljs.configure({
	languages: [
		'javascript',
		'xml',
		'json',
		'scss',
		'css',
		'ruby',
		'diff',
		'makefile',
		'markdown',
		'php',
		'python',
		'java',
		'sql',
		'bash',
		'handlebars',
		'nginx',
		'perl',
		'scala'
	]
});

window.hljs = hljs;

$(function() {
	hljs.initHighlighting();
});
