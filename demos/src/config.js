module.exports = {
    "demos": {
        "demo": {
            "template": "main.mustache",
            "sass": "main.scss",
            "js": "main.js",
            "data": {
            	"oTechdocs": {
	            	"title": "Documentation title",
	            	"breadcrumb": "<a href=\"/\">Bread</a> » crumb",
	            	"content": (function() {
	            		return require('fs').readFileSync('demos/src/democontent.html')
	            	}()),
            		"hasSidebar": true
            	}
            },
            "bodyClasses": "o-techdocs o-hoverable-on test"
        }
    }
};
