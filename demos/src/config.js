'use strict';

module.exports = {
    "demos": {
        "demo": {
            "template": "main.mustache",
            "sass": "main.scss",
            "js": "main.js",
            "data": {
                "o-ft-header": (function() {
                    return require('fs').readFileSync('demos/src/demoheader.html');
                }()),
                "o-techdocs": {
                    "content": (function() {
                        return require('fs').readFileSync('demos/src/democontent.html');
                    }()),
                    "hasSidebar": true
                }
            },
            "bodyClasses": "o-techdocs o-hoverable-on"
        }
    }
};
