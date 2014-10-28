'use strict';

module.exports = {
	"demos": [
		{
			"name": "demo",
			"template": "main.mustache",
			"sass": "main.scss",
			"js": "main.js",
			"data": {
				"o-ft-header": require('fs').readFileSync('demos/src/demoheader.html'),
				"o-techdocs": {
					"content": require('fs').readFileSync('demos/src/democontent.html'),
					"hasSidebar": true
				}
			},
			"bodyClasses": "o-techdocs o-hoverable-on"
		}
	]
};
