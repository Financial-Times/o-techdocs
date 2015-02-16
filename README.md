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

__o-techdocs__ has no silent mode, so the provided CSS classes beginning with `o-techdocs` must be used. See the demo page for examples.

## Upgrading from v3.x.x to v4.x.x

1. Assign a `o-techdocs-footer` class to the technical docs `<footer>` elements
2. Wrap the footer's contents inside a `<div class="o-techdocs-footer__inner">`
3. Rename the `right` class in the footer to `o-techdocs-footer__secondary`
4. Rename `o-ft-header` into `o-header`
5. Wrap the children of `o-header__container` inside a new `<div class="o-header__inner">`
6. `o-techdocs-layout--full` is deprecated fo single column layouts. Add the class `o-techdocs-main--fullwidth` to `o-techdocs-main` instead.
