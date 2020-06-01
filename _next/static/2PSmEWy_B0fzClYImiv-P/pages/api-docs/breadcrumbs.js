(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{Gagq:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/Breadcrumbs/Breadcrumbs.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Breadcrumbs API\n\n<p class="description">The API documentation of the Breadcrumbs React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Breadcrumbs from \'@material-ui/core/Breadcrumbs\';\n// or\nimport { Breadcrumbs } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiBreadcrumbs` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">node</span> |  | The breadcrumb children. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'nav\'</span> | The component used for the root node. Either a string to use a HTML element or a component. By default, it maps the variant to a good default headline component. |\n| <span class="prop-name">expandText</span> | <span class="prop-type">string</span> | <span class="prop-default">\'Show path\'</span> | Override the default label for the expand button.<br>For localization purposes, you can use the provided [translations](/guides/localization/). |\n| <span class="prop-name">itemsAfterCollapse</span> | <span class="prop-type">number</span> | <span class="prop-default">1</span> | If max items is exceeded, the number of items to show after the ellipsis. |\n| <span class="prop-name">itemsBeforeCollapse</span> | <span class="prop-type">number</span> | <span class="prop-default">1</span> | If max items is exceeded, the number of items to show before the ellipsis. |\n| <span class="prop-name">maxItems</span> | <span class="prop-type">number</span> | <span class="prop-default">8</span> | Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse` will be shown, with an ellipsis in between. |\n| <span class="prop-name">separator</span> | <span class="prop-type">node</span> | <span class="prop-default">\'/\'</span> | Custom separator node. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiBreadcrumbs-root</span> | Styles applied to the root element.\n| <span class="prop-name">ol</span> | <span class="prop-name">.MuiBreadcrumbs-ol</span> | Styles applied to the ol element.\n| <span class="prop-name">li</span> | <span class="prop-name">.MuiBreadcrumbs-li</span> | Styles applied to the li element.\n| <span class="prop-name">separator</span> | <span class="prop-name">.MuiBreadcrumbs-separator</span> | Styles applied to the separator element.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Breadcrumbs/Breadcrumbs.js) for more detail.\n\n## Demos\n\n- [Breadcrumbs](/components/breadcrumbs/)\n\n'},HE8E:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/breadcrumbs",function(){return s("Xgz8")}])},Xgz8:function(e,n,s){"use strict";s.r(n),s.d(n,"default",(function(){return l}));var a=s("mXGw"),o=s.n(a),t=s("e+1t"),r=s("kVtE"),p=o.a.createElement,i=s("b5HI");function l(e){var n=e.docs;return p(t.a,{docs:n})}l.getInitialProps=function(){var e=Object(r.a)({pageFilename:"api/breadcrumbs",requireRaw:i});return{demos:e.demos,docs:e.docs}}},b5HI:function(e,n,s){var a={"./breadcrumbs.md":"Gagq"};function o(e){var n=t(e);return s(n)}function t(e){if(!s.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=t,e.exports=o,o.id="b5HI"}},[["HE8E",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,17,18]]]);