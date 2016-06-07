## Tech docs framework  [![Build Status](https://circleci.com/gh/Financial-Times/o-techdocs.png?style=shield&circle-token=99a02a6c2729e1d54b46363ec0d8aa59cf0f9772)](https://circleci.com/gh/Financial-Times/o-techdocs)

Documentation styles for technical documentation, API references and internal tools.

It is used in the [Origami registry](http://registry.origami.ft.com), the [image service](http://image.webservices.ft.com/v1/) and the [Origami website](http://origami.ft.com) itself.

### Styles

__o-techdocs__ has no silent mode, so the provided CSS classes beginning with `o-techdocs` must be used. See the demo page for examples.

## Upgrading from v5.x.x to v6.x.x

v6 of `o-techdocs` removes a dependency on `o-header` v4. To upgrade, you'll need to do a find-replace on instances of `o-header` for `o-techdocs-header`.

In moving `o-header` back into `o-techdocs-header` it's possible that we've failed to migrate some features across. If, after updating to v6 and renaming `o-header` to `o-techdocs-header`, you find that things aren't working, please raise an issue.

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
