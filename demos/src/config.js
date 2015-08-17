module.exports = {
	"options": {
		"name": "demo",
		"template": "main.mustache",
		"sass": "demos/src/scss/main.scss",
		"js": "main.js",
		"dependencies": ["o-fonts@^1.4.0", "o-grid@^3.0.0"]
	},
	"demos": [
		{
			"data": {
				"o-header": require('fs').readFileSync('demos/src/demoheader.html'),
				"o-techdocs": {
					"content": require('fs').readFileSync('demos/src/democontent.html'),
					"hasSidebar": true
				}
			},
			"documentClasses": "o-techdocs o-hoverable-on"
		}
	]
};
