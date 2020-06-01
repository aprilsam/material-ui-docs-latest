(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{OuPS:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return i}));var s=a("mXGw"),o=a.n(s),p=a("e+1t"),t=a("kVtE"),r=o.a.createElement,l=a("eGoO");function i(e){var n=e.docs;return r(p.a,{docs:n})}i.getInitialProps=function(){var e=Object(t.a)({pageFilename:"api/modal",requireRaw:l});return{demos:e.demos,docs:e.docs}}},YyAO:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/modal",function(){return a("OuPS")}])},eGoO:function(e,n,a){var s={"./modal.md":"rKjV"};function o(e){var n=p(e);return a(n)}function p(e){if(!a.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=p,e.exports=o,o.id="eGoO"},rKjV:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/Modal/Modal.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Modal API\n\n<p class="description">The API documentation of the Modal React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Modal from \'@material-ui/core/Modal\';\n// or\nimport { Modal } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nModal is a lower-level construct that is leveraged by the following components:\n\n- [Dialog](/api/dialog/)\n- [Drawer](/api/drawer/)\n- [Menu](/api/menu/)\n- [Popover](/api/popover/)\n\nIf you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component\nrather than directly using Modal.\n\nThis component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">BackdropComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">SimpleBackdrop</span> | A backdrop component. This prop enables custom backdrop rendering. |\n| <span class="prop-name">BackdropProps</span> | <span class="prop-type">object</span> |  | Props applied to the [`Backdrop`](/api/backdrop/) element. |\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">element</span> |  | A single child content element.<br>\u26a0\ufe0f [Needs to be able to hold a ref](/guides/composition/#caveat-with-refs). |\n| <span class="prop-name">closeAfterTransition</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | When set to true the Modal waits until a nested Transition is completed before closing. |\n| <span class="prop-name">container</span> | <span class="prop-type">HTML element<br>&#124;&nbsp;React.Component<br>&#124;&nbsp;func</span> |  | A HTML element, component instance, or function that returns either. The `container` will have the portal children appended to it.<br>By default, it uses the body of the top-level document object, so it\'s simply `document.body` most of the time. |\n| <span class="prop-name">disableAutoFocus</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the modal will not automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. This also works correctly with any modal children that have the `disableAutoFocus` prop.<br>Generally this should never be set to `true` as it makes the modal less accessible to assistive technologies, like screen readers. |\n| <span class="prop-name">disableBackdropClick</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, clicking the backdrop will not fire `onClose`. |\n| <span class="prop-name">disableEnforceFocus</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the modal will not prevent focus from leaving the modal while open.<br>Generally this should never be set to `true` as it makes the modal less accessible to assistive technologies, like screen readers. |\n| <span class="prop-name">disableEscapeKeyDown</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, hitting escape will not fire `onClose`. |\n| <span class="prop-name">disablePortal</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Disable the portal behavior. The children stay within it\'s parent DOM hierarchy. |\n| <span class="prop-name">disableRestoreFocus</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the modal will not restore focus to previously focused element once modal is hidden. |\n| <span class="prop-name">disableScrollLock</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Disable the scroll lock behavior. |\n| <span class="prop-name">hideBackdrop</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the backdrop is not rendered. |\n| <span class="prop-name">keepMounted</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Always keep the children in the DOM. This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Modal. |\n| <span class="prop-name">onBackdropClick</span> | <span class="prop-type">func</span> |  | Callback fired when the backdrop is clicked. |\n| <span class="prop-name">onClose</span> | <span class="prop-type">func</span> |  | Callback fired when the component requests to be closed. The `reason` parameter can optionally be used to control the response to `onClose`.<br><br>**Signature:**<br>`function(event: object, reason: string) => void`<br>*event:* The event source of the callback.<br>*reason:* Can be: `"escapeKeyDown"`, `"backdropClick"`. |\n| <span class="prop-name">onEscapeKeyDown</span> | <span class="prop-type">func</span> |  | Callback fired when the escape key is pressed, `disableEscapeKeyDown` is false and the modal is in focus. |\n| <span class="prop-name">onRendered</span> | <span class="prop-type">func</span> |  | Callback fired once the children has been mounted into the `container`. It signals that the `open={true}` prop took effect.<br>This prop will be deprecated and removed in v5, the ref can be used instead. |\n| <span class="prop-name required">open&nbsp;*</span> | <span class="prop-type">bool</span> |  | If `true`, the modal is open. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## Demos\n\n- [Modal](/components/modal/)\n\n'}},[["YyAO",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);