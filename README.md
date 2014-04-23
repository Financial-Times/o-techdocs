## Tech docs framework  [![Build Status](https://travis-ci.org/Financial-Times/o-techdocs.png?branch=master)](https://travis-ci.org/Financial-Times/o-techdocs)

This module component provides documentation styles for technical documentation, API references and internal tools.

## Using

Follow the standard Origami install and build process for a module.

## Examples and testing

To test this module in isolation:

1. Clone the repo.
2. Install [origami-build-tools](https://github.com/Financial-Times/origami-build-tools) if you haven't already.
3. Run `origami-build-tools install`
4. Run `origami-build-tools demo --local`
5. Open `demo.html` in your web browser.

View the source of the demo.html file for extensive notes and examples on use of the various styles.

### Styles

To comply with the Origami spec, by default there will be no CSS output from the SASS.

You can either turn off silent mode before you `@import` the __o-techdocs__ SASS, like this:

```
$o-techdocs-is-silent: false;
@import "o-techdocs/main";
```

or, manually include the SASS you need:

* `@include oTechdocsPage($classname)`;
* `@include oTechdocsHeader($classname)`;
* `@include oTechdocsFooter($classname)`;
* `@include oTechdocsNav($classname)`;
* `@include oTechdocsContent($classname)`;
* `@include oTechdocsTable($classname)`;
* `@include oTechdocsPrettyPrinted()`;

or, for everything:

`@include oTechdocsIncludeAll();`