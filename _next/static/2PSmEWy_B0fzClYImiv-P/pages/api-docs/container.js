(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"23xO":function(n,e,a){var t={"./container.md":"mn8+"};function s(n){var e=o(n);return a(e)}function o(n){if(!a.o(t,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t[n]}s.keys=function(){return Object.keys(t)},s.resolve=o,n.exports=s,s.id="23xO"},"3TaN":function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/container",function(){return a("hOIK")}])},hOIK:function(n,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return l}));var t=a("mXGw"),s=a.n(t),o=a("e+1t"),p=a("kVtE"),i=s.a.createElement,r=a("23xO");function l(n){var e=n.docs;return i(o.a,{docs:e})}l.getInitialProps=function(){var n=Object(p.a)({pageFilename:"api/container",requireRaw:r});return{demos:n.demos,docs:n.docs}}},"mn8+":function(n,e){n.exports='---\nfilename: /packages/material-ui/src/Container/Container.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Container API\n\n<p class="description">The API documentation of the Container React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Container from \'@material-ui/core/Container\';\n// or\nimport { Container } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiContainer` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">node</span> |  |  |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'div\'</span> | The component used for the root node. Either a string to use a HTML element or a component. |\n| <span class="prop-name">disableGutters</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the left and right padding is removed. |\n| <span class="prop-name">fixed</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Set the max-width to match the min-width of the current breakpoint. This is useful if you\'d prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport. It\'s fluid by default. |\n| <span class="prop-name">maxWidth</span> | <span class="prop-type">\'xs\'<br>&#124;&nbsp;\'sm\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;\'xl\'<br>&#124;&nbsp;false</span> | <span class="prop-default">\'lg\'</span> | Determine the max-width of the container. The container width grows with the size of the screen. Set to `false` to disable `maxWidth`. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiContainer-root</span> | Styles applied to the root element.\n| <span class="prop-name">disableGutters</span> | <span class="prop-name">.MuiContainer-disableGutters</span> | Styles applied to the root element if `disableGutters={true}`.\n| <span class="prop-name">fixed</span> | <span class="prop-name">.MuiContainer-fixed</span> | Styles applied to the root element if `fixed={true}`.\n| <span class="prop-name">maxWidthXs</span> | <span class="prop-name">.MuiContainer-maxWidthXs</span> | Styles applied to the root element if `maxWidth="xs"`.\n| <span class="prop-name">maxWidthSm</span> | <span class="prop-name">.MuiContainer-maxWidthSm</span> | Styles applied to the root element if `maxWidth="sm"`.\n| <span class="prop-name">maxWidthMd</span> | <span class="prop-name">.MuiContainer-maxWidthMd</span> | Styles applied to the root element if `maxWidth="md"`.\n| <span class="prop-name">maxWidthLg</span> | <span class="prop-name">.MuiContainer-maxWidthLg</span> | Styles applied to the root element if `maxWidth="lg"`.\n| <span class="prop-name">maxWidthXl</span> | <span class="prop-name">.MuiContainer-maxWidthXl</span> | Styles applied to the root element if `maxWidth="xl"`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Container/Container.js) for more detail.\n\n## Demos\n\n- [Container](/components/container/)\n\n'}},[["3TaN",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,17,18]]]);