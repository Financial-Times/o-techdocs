## Tech docs framework  [![Build Status](https://travis-ci.org/Financial-Times/o-techdocs.png?branch=master)](https://travis-ci.org/Financial-Times/o-techdocs)

Documentation styles for technical documentation, API references and internal tools.

It is used in the [Origami registry](http://registry.origami.ft.com), the [image service](http://image.webservices.ft.com/v1/) and the [Origami website](http://origami.ft.com) itself.

### Styles

__o-techdocs__ has no silent mode, so the provided CSS classes beginning with `o-techdocs` must be used. See the demo page for examples.

## Upgrading from v3.x.x to v4.x.x

1. Assign a `o-techdocs-footer` class to the technical docs `<footer>` elements
2. Wrap the footer's contents inside a `<div class="o-techdocs-footer__inner">`
3. Rename the `right` class in the footer to `o-techdocs-footer__secondary`
4. Rename `o-ft-header` into `o-header`
5. Wrap the children of `o-header__container` inside a new `<div class="o-header__inner">`
6. `o-techdocs-layout--full` is deprecated fo single column layouts. Add the class `o-techdocs-main--fullwidth` to `o-techdocs-main` instead.
7. Remove references to `prettyprint` and `prettify`: o-techdocs v4 includes a syntax highlighter by default and there is no need for an external script anymore.
