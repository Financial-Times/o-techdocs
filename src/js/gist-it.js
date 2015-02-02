/**
 * Display Gist-it gists
 */
'use strict';

var $ = require('jquery');

$(function() {

	[].slice.call(document.querySelectorAll('.o-techdocs-gist')).forEach(function(el) {

		var repo = el.getAttribute('data-repo');
		var branch = el.getAttribute('data-branch') || 'master';
		var path = el.getAttribute('data-path');
		var callbackName = "oTechdocsGistIt"+Math.floor(Math.random()*10000000)+(new Date()).getTime();

		var url = "//gist-it.appspot.com/github/" + repo + "/blob/" + branch + path +"?footer=0&callback=" + callbackName;

		window[callbackName] = function(content) {

			// Extract just the prettyprint bit, which can then use techdocs standard styling
			content = content.replace(/^[\s\S]*(<pre [^>]*>)([\s\S]*?<\/pre>)[\s\S]*$/, "<pre class='prettyprint linenums'>$2");

			// Replace tabs with 4 spaces since by default tabs in <pre> render at 8-spaces wide
			content = content.replace(/\t/g, '    ');

			el.innerHTML = content;
			window[callbackName] = undefined;

			// If available, re-run prettify so that the new content is highlighted
			if ("prettyPrint" in window) window.prettyPrint();
		};

		var sc = document.createElement('script'); sc.type = 'text/javascript'; sc.async = true; sc.src = url;
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);
	});
});
