(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"0ckP":function(n,t){n.exports='---\nfilename: /packages/material-ui/src/Grow/Grow.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Grow API\n\n<p class="description">The API documentation of the Grow React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Grow from \'@material-ui/core/Grow\';\n// or\nimport { Grow } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nThe Grow transition is used by the [Tooltip](/components/tooltips/) and\n[Popover](/components/popover/) components.\nIt uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">element</span> |  | A single child content element. |\n| <span class="prop-name">disableStrictModeCompat</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Enable this prop if you encounter \'Function components cannot be given refs\', use `unstable_createStrictModeTheme`, and can\'t forward the ref in the child component. |\n| <span class="prop-name">in</span> | <span class="prop-type">bool</span> |  | If `true`, show the component; triggers the enter or exit animation. |\n| <span class="prop-name">timeout</span> | <span class="prop-type">\'auto\'<br>&#124;&nbsp;number<br>&#124;&nbsp;{ appear?: number, enter?: number, exit?: number }</span> | <span class="prop-default">\'auto\'</span> | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.<br>Set to \'auto\' to automatically calculate transition time based on height. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([Transition](https://reactcommunity.org/react-transition-group/transition/#Transition-props)).\n\n## Inheritance\n\nThe props of the [Transition](https://reactcommunity.org/react-transition-group/transition/#Transition-props) component, from react-transition-group, are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Popover](/components/popover/)\n- [Transitions](/components/transitions/)\n\n'},VkqH:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/grow",function(){return o("uXcV")}])},kx4t:function(n,t,o){var e={"./grow.md":"0ckP"};function r(n){var t=a(n);return o(t)}function a(n){if(!o.o(e,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e[n]}r.keys=function(){return Object.keys(e)},r.resolve=a,n.exports=r,r.id="kx4t"},uXcV:function(n,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return c}));var e=o("mXGw"),r=o.n(e),a=o("e+1t"),i=o("kVtE"),s=r.a.createElement,p=o("kx4t");function c(n){var t=n.docs;return s(a.a,{docs:t})}c.getInitialProps=function(){var n=Object(i.a)({pageFilename:"api/grow",requireRaw:p});return{demos:n.demos,docs:n.docs}}}},[["VkqH",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,17,18]]]);