(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{"7Jc+":function(e,n,a){var s={"./tree-view.md":"Cdc7"};function t(e){var n=o(e);return a(n)}function o(e){if(!a.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}t.keys=function(){return Object.keys(s)},t.resolve=o,e.exports=t,t.id="7Jc+"},Cdc7:function(e,n){e.exports='---\nfilename: /packages/material-ui-lab/src/TreeView/TreeView.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# TreeView API\n\n<p class="description">The API documentation of the TreeView React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport TreeView from \'@material-ui/lab/TreeView\';\n// or\nimport { TreeView } from \'@material-ui/lab\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiTreeView` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">defaultCollapseIcon</span> | <span class="prop-type">node</span> |  | The default icon used to collapse the node. |\n| <span class="prop-name">defaultEndIcon</span> | <span class="prop-type">node</span> |  | The default icon displayed next to a end node. This is applied to all tree nodes and can be overridden by the TreeItem `icon` prop. |\n| <span class="prop-name">defaultExpanded</span> | <span class="prop-type">Array&lt;string&gt;</span> | <span class="prop-default">[]</span> | Expanded node ids. (Uncontrolled) |\n| <span class="prop-name">defaultExpandIcon</span> | <span class="prop-type">node</span> |  | The default icon used to expand the node. |\n| <span class="prop-name">defaultParentIcon</span> | <span class="prop-type">node</span> |  | The default icon displayed next to a parent node. This is applied to all parent nodes and can be overridden by the TreeItem `icon` prop. |\n| <span class="prop-name">defaultSelected</span> | <span class="prop-type">Array&lt;string&gt;<br>&#124;&nbsp;string</span> | <span class="prop-default">[]</span> | Selected node ids. (Uncontrolled) When `multiSelect` is true this takes an array of strings; when false (default) a string. |\n| <span class="prop-name">disableSelection</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true` selection is disabled. |\n| <span class="prop-name">expanded</span> | <span class="prop-type">Array&lt;string&gt;</span> |  | Expanded node ids. (Controlled) |\n| <span class="prop-name">multiSelect</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If true `ctrl` and `shift` will trigger multiselect. |\n| <span class="prop-name">onNodeSelect</span> | <span class="prop-type">func</span> |  | Callback fired when tree items are selected/unselected.<br><br>**Signature:**<br>`function(event: object, value: array \\| string) => void`<br>*event:* The event source of the callback<br>*value:* of the selected nodes. When `multiSelect` is true this is an array of strings; when false (default) a string. |\n| <span class="prop-name">onNodeToggle</span> | <span class="prop-type">func</span> |  | Callback fired when tree items are expanded/collapsed.<br><br>**Signature:**<br>`function(event: object, nodeIds: array) => void`<br>*event:* The event source of the callback.<br>*nodeIds:* The ids of the expanded nodes. |\n| <span class="prop-name">selected</span> | <span class="prop-type">Array&lt;string&gt;<br>&#124;&nbsp;string</span> |  | Selected node ids. (Controlled) When `multiSelect` is true this takes an array of strings; when false (default) a string. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiTreeView-root</span> | Styles applied to the root element.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui-lab/src/TreeView/TreeView.js) for more detail.\n\n## Demos\n\n- [Tree View](/components/tree-view/)\n\n'},i0Sc:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/tree-view",function(){return a("ojLP")}])},ojLP:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return l}));var s=a("mXGw"),t=a.n(s),o=a("e+1t"),p=a("kVtE"),r=t.a.createElement,i=a("7Jc+");function l(e){var n=e.docs;return r(o.a,{docs:n})}l.getInitialProps=function(){var e=Object(p.a)({pageFilename:"api/tree-view",requireRaw:i});return{demos:e.demos,docs:e.docs}}}},[["i0Sc",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,17,18]]]);