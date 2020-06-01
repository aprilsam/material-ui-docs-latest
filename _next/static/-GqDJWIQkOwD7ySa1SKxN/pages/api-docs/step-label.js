(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{"/lqX":function(e,n,a){var p={"./step-label.md":"B4YW"};function s(e){var n=o(e);return a(n)}function o(e){if(!a.o(p,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return p[e]}s.keys=function(){return Object.keys(p)},s.resolve=o,e.exports=s,s.id="/lqX"},B4YW:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/StepLabel/StepLabel.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# StepLabel API\n\n<p class="description">The API documentation of the StepLabel React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport StepLabel from \'@material-ui/core/StepLabel\';\n// or\nimport { StepLabel } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiStepLabel` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | In most cases will simply be a string containing a title for the label. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Mark the step as disabled, will also disable the button if `StepLabelButton` is a child of `StepLabel`. Is passed to child components. |\n| <span class="prop-name">error</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Mark the step as failed. |\n| <span class="prop-name">icon</span> | <span class="prop-type">node</span> |  | Override the default label of the step icon. |\n| <span class="prop-name">optional</span> | <span class="prop-type">node</span> |  | The optional node to display. |\n| <span class="prop-name">StepIconComponent</span> | <span class="prop-type">elementType</span> |  | The component to render in place of the [`StepIcon`](/api/step-icon/). |\n| <span class="prop-name">StepIconProps</span> | <span class="prop-type">object</span> |  | Props applied to the [`StepIcon`](/api/step-icon/) element. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiStepLabel-root</span> | Styles applied to the root element.\n| <span class="prop-name">horizontal</span> | <span class="prop-name">.MuiStepLabel-horizontal</span> | Styles applied to the root element if `orientation="horizontal"`.\n| <span class="prop-name">vertical</span> | <span class="prop-name">.MuiStepLabel-vertical</span> | Styles applied to the root element if `orientation="vertical"`.\n| <span class="prop-name">label</span> | <span class="prop-name">.MuiStepLabel-label</span> | Styles applied to the `Typography` component which wraps `children`.\n| <span class="prop-name">active</span> | <span class="prop-name">.MuiStepLabel-active</span> | Pseudo-class applied to the `Typography` component if `active={true}`.\n| <span class="prop-name">completed</span> | <span class="prop-name">.MuiStepLabel-completed</span> | Pseudo-class applied to the `Typography` component if `completed={true}`.\n| <span class="prop-name">error</span> | <span class="prop-name">.Mui-error</span> | Pseudo-class applied to the root element and `Typography` component if `error={true}`.\n| <span class="prop-name">disabled</span> | <span class="prop-name">.Mui-disabled</span> | Pseudo-class applied to the root element and `Typography` component if `disabled={true}`.\n| <span class="prop-name">iconContainer</span> | <span class="prop-name">.MuiStepLabel-iconContainer</span> | Styles applied to the `icon` container element.\n| <span class="prop-name">alternativeLabel</span> | <span class="prop-name">.MuiStepLabel-alternativeLabel</span> | Pseudo-class applied to the root and icon container and `Typography` if `alternativeLabel={true}`.\n| <span class="prop-name">labelContainer</span> | <span class="prop-name">.MuiStepLabel-labelContainer</span> | Styles applied to the container element which wraps `Typography` and `optional`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/StepLabel/StepLabel.js) for more detail.\n\n## Demos\n\n- [Steppers](/components/steppers/)\n\n'},GFMA:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/step-label",function(){return a("IxoG")}])},IxoG:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return i}));var p=a("mXGw"),s=a.n(p),o=a("e+1t"),t=a("kVtE"),l=s.a.createElement,r=a("/lqX");function i(e){var n=e.docs;return l(o.a,{docs:n})}i.getInitialProps=function(){var e=Object(t.a)({pageFilename:"api/step-label",requireRaw:r});return{demos:e.demos,docs:e.docs}}}},[["GFMA",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);