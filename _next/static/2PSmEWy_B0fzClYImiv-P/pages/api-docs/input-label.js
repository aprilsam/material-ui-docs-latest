(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{A1FC:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/input-label",function(){return a("pKLp")}])},m7Xv:function(e,n,a){var s={"./input-label.md":"xOVI"};function p(e){var n=t(e);return a(n)}function t(e){if(!a.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}p.keys=function(){return Object.keys(s)},p.resolve=t,e.exports=p,p.id="m7Xv"},pKLp:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return i}));var s=a("mXGw"),p=a.n(s),t=a("e+1t"),o=a("kVtE"),r=p.a.createElement,l=a("m7Xv");function i(e){var n=e.docs;return r(t.a,{docs:n})}i.getInitialProps=function(){var e=Object(o.a)({pageFilename:"api/input-label",requireRaw:l});return{demos:e.demos,docs:e.docs}}},xOVI:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/InputLabel/InputLabel.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# InputLabel API\n\n<p class="description">The API documentation of the InputLabel React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport InputLabel from \'@material-ui/core/InputLabel\';\n// or\nimport { InputLabel } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiInputLabel` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The contents of the `InputLabel`. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">color</span> | <span class="prop-type">\'primary\'<br>&#124;&nbsp;\'secondary\'</span> |  | The color of the component. It supports those theme colors that make sense for this component. |\n| <span class="prop-name">disableAnimation</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the transition animation is disabled. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> |  | If `true`, apply disabled class. |\n| <span class="prop-name">error</span> | <span class="prop-type">bool</span> |  | If `true`, the label will be displayed in an error state. |\n| <span class="prop-name">focused</span> | <span class="prop-type">bool</span> |  | If `true`, the input of this label is focused. |\n| <span class="prop-name">margin</span> | <span class="prop-type">\'dense\'</span> |  | If `dense`, will adjust vertical spacing. This is normally obtained via context from FormControl. |\n| <span class="prop-name">required</span> | <span class="prop-type">bool</span> |  | if `true`, the label will indicate that the input is required. |\n| <span class="prop-name">shrink</span> | <span class="prop-type">bool</span> |  | If `true`, the label is shrunk. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'filled\'<br>&#124;&nbsp;\'outlined\'<br>&#124;&nbsp;\'standard\'</span> |  | The variant to use. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([FormLabel](/api/form-label/)).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiInputLabel-root</span> | Styles applied to the root element.\n| <span class="prop-name">focused</span> | <span class="prop-name">.Mui-focused</span> | Pseudo-class applied to the root element if `focused={true}`.\n| <span class="prop-name">disabled</span> | <span class="prop-name">.Mui-disabled</span> | Pseudo-class applied to the root element if `disabled={true}`.\n| <span class="prop-name">error</span> | <span class="prop-name">.Mui-error</span> | Pseudo-class applied to the root element if `error={true}`.\n| <span class="prop-name">required</span> | <span class="prop-name">.Mui-required</span> | Pseudo-class applied to the root element if `required={true}`.\n| <span class="prop-name">asterisk</span> | <span class="prop-name">.MuiInputLabel-asterisk</span> | Pseudo-class applied to the asterisk element.\n| <span class="prop-name">formControl</span> | <span class="prop-name">.MuiInputLabel-formControl</span> | Styles applied to the root element if the component is a descendant of `FormControl`.\n| <span class="prop-name">marginDense</span> | <span class="prop-name">.MuiInputLabel-marginDense</span> | Styles applied to the root element if `margin="dense"`.\n| <span class="prop-name">shrink</span> | <span class="prop-name">.MuiInputLabel-shrink</span> | Styles applied to the `input` element if `shrink={true}`.\n| <span class="prop-name">animated</span> | <span class="prop-name">.MuiInputLabel-animated</span> | Styles applied to the `input` element if `disableAnimation={false}`.\n| <span class="prop-name">filled</span> | <span class="prop-name">.MuiInputLabel-filled</span> | Styles applied to the root element if `variant="filled"`.\n| <span class="prop-name">outlined</span> | <span class="prop-name">.MuiInputLabel-outlined</span> | Styles applied to the root element if `variant="outlined"`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/InputLabel/InputLabel.js) for more detail.\n\n## Inheritance\n\nThe props of the [FormLabel](/api/form-label/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Text Fields](/components/text-fields/)\n\n'}},[["A1FC",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,17,18]]]);