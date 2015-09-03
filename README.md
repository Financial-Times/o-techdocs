## Tech docs framework  [![Build Status](https://travis-ci.org/Financial-Times/o-techdocs.png?branch=master)](https://travis-ci.org/Financial-Times/o-techdocs)

Documentation styles for technical documentation, API references and internal tools.

It is used in the [Origami registry](http://registry.origami.ft.com), the [image service](http://image.webservices.ft.com/v1/) and the [Origami website](http://origami.ft.com) itself.

### Styles

__o-techdocs__ has no silent mode, so the provided CSS classes beginning with `o-techdocs` must be used. See the demo page for examples.

## Upgrading from v4.x.x to v5.x.x

o-techdocs v5 relies on o-header v4 and o-grid v4.

```diff
+<div class="o-techdocs-container">
 	<div class="o-techdocs-layout">
 
 	</div> <!-- /.o-techdocs-layout -->
+</div> <!-- /.o-techdocs-container -->

 <footer class="o-techdocs-footer">
-	<div class="o-techdocs-footer__inner">
 		<p class="o-techdocs-footer__secondary"><a href="http://github.com/financial-times/ft-origami">View project on GitHub</a></p>
 		<p>&copy; THE FINANCIAL TIMES LTD. FT and 'Financial Times' are trademarks of The Financial Times Ltd.</p>
-	</div>
 </footer>
```
