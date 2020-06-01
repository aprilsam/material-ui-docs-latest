(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{2563:function(a,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return i}));var p=e("mXGw"),s=e.n(p),o=e("e+1t"),t=e("kVtE"),l=s.a.createElement,r=e("AQRn");function i(a){var n=a.docs;return l(o.a,{docs:n})}i.getInitialProps=function(){var a=Object(t.a)({pageFilename:"api/dialog",requireRaw:r});return{demos:a.demos,docs:a.docs}}},AQRn:function(a,n,e){var p={"./dialog.md":"c5y8"};function s(a){var n=o(a);return e(n)}function o(a){if(!e.o(p,a)){var n=new Error("Cannot find module '"+a+"'");throw n.code="MODULE_NOT_FOUND",n}return p[a]}s.keys=function(){return Object.keys(p)},s.resolve=o,a.exports=s,s.id="AQRn"},Nsih:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/dialog",function(){return e("2563")}])},c5y8:function(a,n){a.exports='---\nfilename: /packages/material-ui/src/Dialog/Dialog.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Dialog API\n\n<p class="description">The API documentation of the Dialog React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Dialog from \'@material-ui/core/Dialog\';\n// or\nimport { Dialog } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nDialogs are overlaid modal paper based components with a backdrop.\n\n## Component name\n\nThe `MuiDialog` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">aria-describedby</span> | <span class="prop-type">string</span> |  | The id(s) of the element(s) that describe the dialog. |\n| <span class="prop-name">aria-labelledby</span> | <span class="prop-type">string</span> |  | The id(s) of the element(s) that label the dialog. |\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | Dialog children, usually the included sub-components. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">disableBackdropClick</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, clicking the backdrop will not fire the `onClose` callback. |\n| <span class="prop-name">disableEscapeKeyDown</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, hitting escape will not fire the `onClose` callback. |\n| <span class="prop-name">fullScreen</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the dialog will be full-screen |\n| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the dialog stretches to `maxWidth`.<br>Notice that the dialog width grow is limited by the default margin. |\n| <span class="prop-name">maxWidth</span> | <span class="prop-type">\'lg\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'sm\'<br>&#124;&nbsp;\'xl\'<br>&#124;&nbsp;\'xs\'<br>&#124;&nbsp;false</span> | <span class="prop-default">\'sm\'</span> | Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to `false` to disable `maxWidth`. |\n| <span class="prop-name">onBackdropClick</span> | <span class="prop-type">func</span> |  | Callback fired when the backdrop is clicked. |\n| <span class="prop-name">onClose</span> | <span class="prop-type">func</span> |  | Callback fired when the component requests to be closed.<br><br>**Signature:**<br>`function(event: object, reason: string) => void`<br>*event:* The event source of the callback.<br>*reason:* Can be: `"escapeKeyDown"`, `"backdropClick"`. |\n| <span class="prop-name">onEnter</span> | <span class="prop-type">func</span> |  | Callback fired before the dialog enters. |\n| <span class="prop-name">onEntered</span> | <span class="prop-type">func</span> |  | Callback fired when the dialog has entered. |\n| <span class="prop-name">onEntering</span> | <span class="prop-type">func</span> |  | Callback fired when the dialog is entering. |\n| <span class="prop-name">onEscapeKeyDown</span> | <span class="prop-type">func</span> |  | Callback fired when the escape key is pressed, `disableKeyboard` is false and the modal is in focus. |\n| <span class="prop-name">onExit</span> | <span class="prop-type">func</span> |  | Callback fired before the dialog exits. |\n| <span class="prop-name">onExited</span> | <span class="prop-type">func</span> |  | Callback fired when the dialog has exited. |\n| <span class="prop-name">onExiting</span> | <span class="prop-type">func</span> |  | Callback fired when the dialog is exiting. |\n| <span class="prop-name required">open&nbsp;*</span> | <span class="prop-type">bool</span> |  | If `true`, the Dialog is open. |\n| <span class="prop-name">PaperComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">Paper</span> | The component used to render the body of the dialog. |\n| <span class="prop-name">PaperProps</span> | <span class="prop-type">object</span> | <span class="prop-default">{}</span> | Props applied to the [`Paper`](/api/paper/) element. |\n| <span class="prop-name">scroll</span> | <span class="prop-type">\'body\'<br>&#124;&nbsp;\'paper\'</span> | <span class="prop-default">\'paper\'</span> | Determine the container for scrolling the dialog. |\n| <span class="prop-name">TransitionComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">Fade</span> | The component used for the transition. [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |\n| <span class="prop-name">transitionDuration</span> | <span class="prop-type">number<br>&#124;&nbsp;{ appear?: number, enter?: number, exit?: number }</span> | <span class="prop-default">{ enter: duration.enteringScreen, exit: duration.leavingScreen }</span> | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object. |\n| <span class="prop-name">TransitionProps</span> | <span class="prop-type">object</span> |  | Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([Modal](/api/modal/)).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiDialog-root</span> | Styles applied to the root element.\n| <span class="prop-name">scrollPaper</span> | <span class="prop-name">.MuiDialog-scrollPaper</span> | Styles applied to the container element if `scroll="paper"`.\n| <span class="prop-name">scrollBody</span> | <span class="prop-name">.MuiDialog-scrollBody</span> | Styles applied to the container element if `scroll="body"`.\n| <span class="prop-name">container</span> | <span class="prop-name">.MuiDialog-container</span> | Styles applied to the container element.\n| <span class="prop-name">paper</span> | <span class="prop-name">.MuiDialog-paper</span> | Styles applied to the `Paper` component.\n| <span class="prop-name">paperScrollPaper</span> | <span class="prop-name">.MuiDialog-paperScrollPaper</span> | Styles applied to the `Paper` component if `scroll="paper"`.\n| <span class="prop-name">paperScrollBody</span> | <span class="prop-name">.MuiDialog-paperScrollBody</span> | Styles applied to the `Paper` component if `scroll="body"`.\n| <span class="prop-name">paperWidthFalse</span> | <span class="prop-name">.MuiDialog-paperWidthFalse</span> | Styles applied to the `Paper` component if `maxWidth=false`.\n| <span class="prop-name">paperWidthXs</span> | <span class="prop-name">.MuiDialog-paperWidthXs</span> | Styles applied to the `Paper` component if `maxWidth="xs"`.\n| <span class="prop-name">paperWidthSm</span> | <span class="prop-name">.MuiDialog-paperWidthSm</span> | Styles applied to the `Paper` component if `maxWidth="sm"`.\n| <span class="prop-name">paperWidthMd</span> | <span class="prop-name">.MuiDialog-paperWidthMd</span> | Styles applied to the `Paper` component if `maxWidth="md"`.\n| <span class="prop-name">paperWidthLg</span> | <span class="prop-name">.MuiDialog-paperWidthLg</span> | Styles applied to the `Paper` component if `maxWidth="lg"`.\n| <span class="prop-name">paperWidthXl</span> | <span class="prop-name">.MuiDialog-paperWidthXl</span> | Styles applied to the `Paper` component if `maxWidth="xl"`.\n| <span class="prop-name">paperFullWidth</span> | <span class="prop-name">.MuiDialog-paperFullWidth</span> | Styles applied to the `Paper` component if `fullWidth={true}`.\n| <span class="prop-name">paperFullScreen</span> | <span class="prop-name">.MuiDialog-paperFullScreen</span> | Styles applied to the `Paper` component if `fullScreen={true}`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Dialog/Dialog.js) for more detail.\n\n## Inheritance\n\nThe props of the [Modal](/api/modal/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Dialogs](/components/dialogs/)\n\n'}},[["Nsih",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);