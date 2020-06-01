(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{Wa0E:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/form-control-label",function(){return o("htq5")}])},htq5:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return c}));var a=o("mXGw"),t=o.n(a),s=o("e+1t"),p=o("kVtE"),l=t.a.createElement,r=o("qWJN");function c(e){var n=e.docs;return l(s.a,{docs:n})}c.getInitialProps=function(){var e=Object(p.a)({pageFilename:"api/form-control-label",requireRaw:r});return{demos:e.demos,docs:e.docs}}},qWJN:function(e,n,o){var a={"./form-control-label.md":"zXhR"};function t(e){var n=s(e);return o(n)}function s(e){if(!o.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}t.keys=function(){return Object.keys(a)},t.resolve=s,e.exports=t,t.id="qWJN"},zXhR:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/FormControlLabel/FormControlLabel.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# FormControlLabel API\n\n<p class="description">The API documentation of the FormControlLabel React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\n// or\nimport { FormControlLabel } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nDrop in replacement of the `Radio`, `Switch` and `Checkbox` component.\nUse this component if you want to display an extra label.\n\n## Component name\n\nThe `MuiFormControlLabel` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">checked</span> | <span class="prop-type">bool</span> |  | If `true`, the component appears selected. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name required">control&nbsp;*</span> | <span class="prop-type">element</span> |  | A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> |  | If `true`, the control will be disabled. |\n| <span class="prop-name">inputRef</span> | <span class="prop-type">ref</span> |  | Pass a ref to the `input` element. |\n| <span class="prop-name">label</span> | <span class="prop-type">node</span> |  | The text to be used in an enclosing label element. |\n| <span class="prop-name">labelPlacement</span> | <span class="prop-type">\'bottom\'<br>&#124;&nbsp;\'end\'<br>&#124;&nbsp;\'start\'<br>&#124;&nbsp;\'top\'</span> | <span class="prop-default">\'end\'</span> | The position of the label. |\n| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Callback fired when the state is changed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. You can pull out the new checked state by accessing `event.target.checked` (boolean). |\n| <span class="prop-name">value</span> | <span class="prop-type">any</span> |  | The value of the component. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiFormControlLabel-root</span> | Styles applied to the root element.\n| <span class="prop-name">labelPlacementStart</span> | <span class="prop-name">.MuiFormControlLabel-labelPlacementStart</span> | Styles applied to the root element if `labelPlacement="start"`.\n| <span class="prop-name">labelPlacementTop</span> | <span class="prop-name">.MuiFormControlLabel-labelPlacementTop</span> | Styles applied to the root element if `labelPlacement="top"`.\n| <span class="prop-name">labelPlacementBottom</span> | <span class="prop-name">.MuiFormControlLabel-labelPlacementBottom</span> | Styles applied to the root element if `labelPlacement="bottom"`.\n| <span class="prop-name">disabled</span> | <span class="prop-name">.Mui-disabled</span> | Pseudo-class applied to the root element if `disabled={true}`.\n| <span class="prop-name">label</span> | <span class="prop-name">.MuiFormControlLabel-label</span> | Styles applied to the label\'s Typography component.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/FormControlLabel/FormControlLabel.js) for more detail.\n\n## Demos\n\n- [Checkboxes](/components/checkboxes/)\n- [Radio Buttons](/components/radio-buttons/)\n- [Switches](/components/switches/)\n\n'}},[["Wa0E",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,17,18]]]);