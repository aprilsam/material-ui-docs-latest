(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{"/O+A":function(e,n,a){var t={"./table-cell.md":"VfI5"};function s(e){var n=o(e);return a(n)}function o(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}s.keys=function(){return Object.keys(t)},s.resolve=o,e.exports=s,s.id="/O+A"},QQXG:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return i}));var t=a("mXGw"),s=a.n(t),o=a("e+1t"),p=a("kVtE"),l=s.a.createElement,r=a("/O+A");function i(e){var n=e.docs;return l(o.a,{docs:n})}i.getInitialProps=function(){var e=Object(p.a)({pageFilename:"api/table-cell",requireRaw:r});return{demos:e.demos,docs:e.docs}}},VfI5:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/TableCell/TableCell.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# TableCell API\n\n<p class="description">The API documentation of the TableCell React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport TableCell from \'@material-ui/core/TableCell\';\n// or\nimport { TableCell } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nThe component renders a `<th>` element when the parent context is a header\nor otherwise a `<td>` element.\n\n## Component name\n\nThe `MuiTableCell` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">align</span> | <span class="prop-type">\'center\'<br>&#124;&nbsp;\'inherit\'<br>&#124;&nbsp;\'justify\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right\'</span> | <span class="prop-default">\'inherit\'</span> | Set the text-align on the table cell content.<br>Monetary or generally number fields **should be right aligned** as that allows you to add them up quickly in your head without having to worry about decimals. |\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The table cell contents. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> |  | The component used for the root node. Either a string to use a HTML element or a component. |\n| <span class="prop-name">padding</span> | <span class="prop-type">\'checkbox\'<br>&#124;&nbsp;\'default\'<br>&#124;&nbsp;\'none\'</span> |  | Sets the padding applied to the cell. By default, the Table parent component set the value (`default`). |\n| <span class="prop-name">scope</span> | <span class="prop-type">string</span> |  | Set scope attribute. |\n| <span class="prop-name">size</span> | <span class="prop-type">\'medium\'<br>&#124;&nbsp;\'small\'</span> |  | Specify the size of the cell. By default, the Table parent component set the value (`medium`). |\n| <span class="prop-name">sortDirection</span> | <span class="prop-type">\'asc\'<br>&#124;&nbsp;\'desc\'<br>&#124;&nbsp;false</span> |  | Set aria-sort direction. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'body\'<br>&#124;&nbsp;\'footer\'<br>&#124;&nbsp;\'head\'</span> |  | Specify the cell type. By default, the TableHead, TableBody or TableFooter parent component set the value. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiTableCell-root</span> | Styles applied to the root element.\n| <span class="prop-name">head</span> | <span class="prop-name">.MuiTableCell-head</span> | Styles applied to the root element if `variant="head"` or `context.table.head`.\n| <span class="prop-name">body</span> | <span class="prop-name">.MuiTableCell-body</span> | Styles applied to the root element if `variant="body"` or `context.table.body`.\n| <span class="prop-name">footer</span> | <span class="prop-name">.MuiTableCell-footer</span> | Styles applied to the root element if `variant="footer"` or `context.table.footer`.\n| <span class="prop-name">sizeSmall</span> | <span class="prop-name">.MuiTableCell-sizeSmall</span> | Styles applied to the root element if `size="small"`.\n| <span class="prop-name">paddingCheckbox</span> | <span class="prop-name">.MuiTableCell-paddingCheckbox</span> | Styles applied to the root element if `padding="checkbox"`.\n| <span class="prop-name">paddingNone</span> | <span class="prop-name">.MuiTableCell-paddingNone</span> | Styles applied to the root element if `padding="none"`.\n| <span class="prop-name">alignLeft</span> | <span class="prop-name">.MuiTableCell-alignLeft</span> | Styles applied to the root element if `align="left"`.\n| <span class="prop-name">alignCenter</span> | <span class="prop-name">.MuiTableCell-alignCenter</span> | Styles applied to the root element if `align="center"`.\n| <span class="prop-name">alignRight</span> | <span class="prop-name">.MuiTableCell-alignRight</span> | Styles applied to the root element if `align="right"`.\n| <span class="prop-name">alignJustify</span> | <span class="prop-name">.MuiTableCell-alignJustify</span> | Styles applied to the root element if `align="justify"`.\n| <span class="prop-name">stickyHeader</span> | <span class="prop-name">.MuiTableCell-stickyHeader</span> | Styles applied to the root element if `context.table.stickyHeader={true}`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/TableCell/TableCell.js) for more detail.\n\n## Demos\n\n- [Tables](/components/tables/)\n\n'},laoy:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/table-cell",function(){return a("QQXG")}])}},[["laoy",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);