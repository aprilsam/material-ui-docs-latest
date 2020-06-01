(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"/IoB":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));var o=t("mXGw"),s=t.n(o),a=t("e+1t"),p=t("kVtE"),r=s.a.createElement,i=t("4fSU");function l(n){var e=n.docs;return r(a.a,{docs:e})}l.getInitialProps=function(){var n=Object(p.a)({pageFilename:"api/input-adornment",requireRaw:i});return{demos:n.demos,docs:n.docs}}},"4fSU":function(n,e,t){var o={"./input-adornment.md":"UmiW"};function s(n){var e=a(n);return t(e)}function a(n){if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return o[n]}s.keys=function(){return Object.keys(o)},s.resolve=a,n.exports=s,s.id="4fSU"},UmiW:function(n,e){n.exports='---\nfilename: /packages/material-ui/src/InputAdornment/InputAdornment.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# InputAdornment API\n\n<p class="description">The API documentation of the InputAdornment React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport InputAdornment from \'@material-ui/core/InputAdornment\';\n// or\nimport { InputAdornment } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiInputAdornment` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">node</span> |  | The content of the component, normally an `IconButton` or string. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'div\'</span> | The component used for the root node. Either a string to use a HTML element or a component. |\n| <span class="prop-name">disablePointerEvents</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Disable pointer events on the root. This allows for the content of the adornment to focus the input on click. |\n| <span class="prop-name">disableTypography</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If children is a string then disable wrapping in a Typography component. |\n| <span class="prop-name">position</span> | <span class="prop-type">\'start\'<br>&#124;&nbsp;\'end\'</span> |  | The position this adornment should appear relative to the `Input`. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'standard\'<br>&#124;&nbsp;\'outlined\'<br>&#124;&nbsp;\'filled\'</span> |  | The variant to use. Note: If you are using the `TextField` component or the `FormControl` component you do not have to set this manually. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiInputAdornment-root</span> | Styles applied to the root element.\n| <span class="prop-name">filled</span> | <span class="prop-name">.MuiInputAdornment-filled</span> | Styles applied to the root element if `variant="filled"`.\n| <span class="prop-name">positionStart</span> | <span class="prop-name">.MuiInputAdornment-positionStart</span> | Styles applied to the root element if `position="start"`.\n| <span class="prop-name">positionEnd</span> | <span class="prop-name">.MuiInputAdornment-positionEnd</span> | Styles applied to the root element if `position="end"`.\n| <span class="prop-name">disablePointerEvents</span> | <span class="prop-name">.MuiInputAdornment-disablePointerEvents</span> | Styles applied to the root element if `disablePointerEvents=true`.\n| <span class="prop-name">hiddenLabel</span> | <span class="prop-name">.MuiInputAdornment-hiddenLabel</span> | Styles applied if the adornment is used inside &lt;FormControl hiddenLabel />.\n| <span class="prop-name">marginDense</span> | <span class="prop-name">.MuiInputAdornment-marginDense</span> | Styles applied if the adornment is used inside &lt;FormControl margin="dense" />.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/InputAdornment/InputAdornment.js) for more detail.\n\n## Demos\n\n- [Text Fields](/components/text-fields/)\n\n'},oP6i:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/input-adornment",function(){return t("/IoB")}])}},[["oP6i",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);