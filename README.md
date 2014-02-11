## Tech docs framework  [![Build Status](https://travis-ci.org/Financial-Times/o-techdocs.png?branch=master)](https://travis-ci.org/Financial-Times/o-techdocs)

This module component provides documentation styles for techical documentation, API references and internal tools.

## Using

Follow the standard Origami install and build process for a module.

## Examples and testing

To test this module in isolation:

1. Clone the repo
1. Run `npm install && bower install` to install dependencies and build tools
1. Run `grunt` to build the CSS and JS bundles
1. Start a simple web server with the document root at the root of the repo, eg in OS X you could do:

    python -m SimpleHTTPServer 8000

1. Load `/test/test.html` on the web server host, eg:

    http://localhost:8000/demos/demo.html 

View the source of the demo.html file for extensive notes and examples on use of the various styles.
