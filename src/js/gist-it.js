/**
 * Display Gist-it gists
 */
'use strict';


document.addEventListener('o.DOMContentLoaded', function() {

	var hljs = require('highlight.js');

	Array.from(document.querySelectorAll('.o-techdocs-gist')).forEach(function(el) {

		var repo = el.getAttribute('data-repo');
		var branch = el.getAttribute('data-branch') || 'master';
		var path = el.getAttribute('data-path');
		var callbackName = "oTechdocsGistIt"+Math.floor(Math.random()*10000000)+(new Date()).getTime();

		var url = "//gist-it.appspot.com/github/" + repo + "/blob/" + branch + path +"?footer=0&callback=" + callbackName;

		window[callbackName] = function(content) {

			// Extract just the prettyprint bit, which can then use techdocs standard styling
			content = content.replace(/^[\s\S]*(<pre [^>]*>)([\s\S]*?<\/pre>)[\s\S]*$/, "<pre><code>$2");
			content = content.replace(/<\/pre>$/, "</code></pre>");

			el.innerHTML = content;
			window[callbackName] = undefined;

			// Re-run highlighter so that the new content is highlighted
			hljs.highlightBlock(el.querySelector('code'));
		};

		var sc = document.createElement('script'); sc.src = url;
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);
	});
}, false);
