(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{ZDR4:function(e,p,n){"use strict";n.r(p),n.d(p,"default",(function(){return i}));var o=n("mXGw"),s=n.n(o),t=n("e+1t"),a=n("kVtE"),r=s.a.createElement,l=n("lpIf");function i(e){var p=e.docs;return r(t.a,{docs:p})}i.getInitialProps=function(){var e=Object(a.a)({pageFilename:"api/tooltip",requireRaw:l});return{demos:e.demos,docs:e.docs}}},"lcx/":function(e,p,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/tooltip",function(){return n("ZDR4")}])},lpIf:function(e,p,n){var o={"./tooltip.md":"oazr"};function s(e){var p=t(e);return n(p)}function t(e){if(!n.o(o,e)){var p=new Error("Cannot find module '"+e+"'");throw p.code="MODULE_NOT_FOUND",p}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=t,e.exports=s,s.id="lpIf"},oazr:function(e,p){e.exports='---\nfilename: /packages/material-ui/src/Tooltip/Tooltip.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Tooltip API\n\n<p class="description">The API documentation of the Tooltip React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Tooltip from \'@material-ui/core/Tooltip\';\n// or\nimport { Tooltip } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiTooltip` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">arrow</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, adds an arrow to the tooltip. |\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">element</span> |  | Tooltip reference element.<br>\u26a0\ufe0f [Needs to be able to hold a ref](/guides/composition/#caveat-with-refs). |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">disableFocusListener</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Do not respond to focus events. |\n| <span class="prop-name">disableHoverListener</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Do not respond to hover events. |\n| <span class="prop-name">disableTouchListener</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Do not respond to long press touch events. |\n| <span class="prop-name">enterDelay</span> | <span class="prop-type">number</span> | <span class="prop-default">100</span> | The number of milliseconds to wait before showing the tooltip. This prop won\'t impact the enter touch delay (`enterTouchDelay`). |\n| <span class="prop-name">enterNextDelay</span> | <span class="prop-type">number</span> | <span class="prop-default">0</span> | The number of milliseconds to wait before showing the tooltip when one was already recently opened. |\n| <span class="prop-name">enterTouchDelay</span> | <span class="prop-type">number</span> | <span class="prop-default">700</span> | The number of milliseconds a user must touch the element before showing the tooltip. |\n| <span class="prop-name">id</span> | <span class="prop-type">string</span> |  | This prop is used to help implement the accessibility logic. If you don\'t provide this prop. It falls back to a randomly generated id. |\n| <span class="prop-name">interactive</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Makes a tooltip interactive, i.e. will not close when the user hovers over the tooltip before the `leaveDelay` is expired. |\n| <span class="prop-name">leaveDelay</span> | <span class="prop-type">number</span> | <span class="prop-default">0</span> | The number of milliseconds to wait before hiding the tooltip. This prop won\'t impact the leave touch delay (`leaveTouchDelay`). |\n| <span class="prop-name">leaveTouchDelay</span> | <span class="prop-type">number</span> | <span class="prop-default">1500</span> | The number of milliseconds after the user stops touching an element before hiding the tooltip. |\n| <span class="prop-name">onClose</span> | <span class="prop-type">func</span> |  | Callback fired when the component requests to be closed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. |\n| <span class="prop-name">onOpen</span> | <span class="prop-type">func</span> |  | Callback fired when the component requests to be open.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. |\n| <span class="prop-name">open</span> | <span class="prop-type">bool</span> |  | If `true`, the tooltip is shown. |\n| <span class="prop-name">placement</span> | <span class="prop-type">\'bottom-end\'<br>&#124;&nbsp;\'bottom-start\'<br>&#124;&nbsp;\'bottom\'<br>&#124;&nbsp;\'left-end\'<br>&#124;&nbsp;\'left-start\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right-end\'<br>&#124;&nbsp;\'right-start\'<br>&#124;&nbsp;\'right\'<br>&#124;&nbsp;\'top-end\'<br>&#124;&nbsp;\'top-start\'<br>&#124;&nbsp;\'top\'</span> | <span class="prop-default">\'bottom\'</span> | Tooltip placement. |\n| <span class="prop-name">PopperComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">Popper</span> | The component used for the popper. |\n| <span class="prop-name">PopperProps</span> | <span class="prop-type">object</span> |  | Props applied to the [`Popper`](/api/popper/) element. |\n| <span class="prop-name required">title&nbsp;*</span> | <span class="prop-type">node</span> |  | Tooltip title. Zero-length titles string are never displayed. |\n| <span class="prop-name">TransitionComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">Grow</span> | The component used for the transition. [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |\n| <span class="prop-name">TransitionProps</span> | <span class="prop-type">object</span> |  | Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">popper</span> | <span class="prop-name">.MuiTooltip-popper</span> | Styles applied to the Popper component.\n| <span class="prop-name">popperInteractive</span> | <span class="prop-name">.MuiTooltip-popperInteractive</span> | Styles applied to the Popper component if `interactive={true}`.\n| <span class="prop-name">popperArrow</span> | <span class="prop-name">.MuiTooltip-popperArrow</span> | Styles applied to the Popper component if `arrow={true}`.\n| <span class="prop-name">tooltip</span> | <span class="prop-name">.MuiTooltip-tooltip</span> | Styles applied to the tooltip (label wrapper) element.\n| <span class="prop-name">tooltipArrow</span> | <span class="prop-name">.MuiTooltip-tooltipArrow</span> | Styles applied to the tooltip (label wrapper) element if `arrow={true}`.\n| <span class="prop-name">arrow</span> | <span class="prop-name">.MuiTooltip-arrow</span> | Styles applied to the arrow element.\n| <span class="prop-name">touch</span> | <span class="prop-name">.MuiTooltip-touch</span> | Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch.\n| <span class="prop-name">tooltipPlacementLeft</span> | <span class="prop-name">.MuiTooltip-tooltipPlacementLeft</span> | Styles applied to the tooltip (label wrapper) element if `placement` contains "left".\n| <span class="prop-name">tooltipPlacementRight</span> | <span class="prop-name">.MuiTooltip-tooltipPlacementRight</span> | Styles applied to the tooltip (label wrapper) element if `placement` contains "right".\n| <span class="prop-name">tooltipPlacementTop</span> | <span class="prop-name">.MuiTooltip-tooltipPlacementTop</span> | Styles applied to the tooltip (label wrapper) element if `placement` contains "top".\n| <span class="prop-name">tooltipPlacementBottom</span> | <span class="prop-name">.MuiTooltip-tooltipPlacementBottom</span> | Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom".\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Tooltip/Tooltip.js) for more detail.\n\n## Demos\n\n- [Tooltips](/components/tooltips/)\n\n'}},[["lcx/",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);