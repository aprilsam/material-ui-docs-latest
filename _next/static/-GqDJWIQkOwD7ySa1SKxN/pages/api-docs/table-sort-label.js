(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{HF6y:function(e,n,a){var o={"./table-sort-label.md":"UpSv"};function t(e){var n=s(e);return a(n)}function s(e){if(!a.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}t.keys=function(){return Object.keys(o)},t.resolve=s,e.exports=t,t.id="HF6y"},"Ol/v":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/table-sort-label",function(){return a("pS25")}])},UpSv:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/TableSortLabel/TableSortLabel.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# TableSortLabel API\n\n<p class="description">The API documentation of the TableSortLabel React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport TableSortLabel from \'@material-ui/core/TableSortLabel\';\n// or\nimport { TableSortLabel } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\nA button based label for placing inside `TableCell` for column sorting.\n\n## Component name\n\nThe `MuiTableSortLabel` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">active</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the label will have the active styling (should be true for the sorted column). |\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | Label contents, the arrow will be appended automatically. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">direction</span> | <span class="prop-type">\'asc\'<br>&#124;&nbsp;\'desc\'</span> | <span class="prop-default">\'asc\'</span> | The current sort direction. |\n| <span class="prop-name">hideSortIcon</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Hide sort icon when active is false. |\n| <span class="prop-name">IconComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">ArrowDownwardIcon</span> | Sort icon to use. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([ButtonBase](/api/button-base/)).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiTableSortLabel-root</span> | Styles applied to the root element.\n| <span class="prop-name">active</span> | <span class="prop-name">.MuiTableSortLabel-active</span> | Pseudo-class applied to the root element if `active={true}`.\n| <span class="prop-name">icon</span> | <span class="prop-name">.MuiTableSortLabel-icon</span> | Styles applied to the icon component.\n| <span class="prop-name">iconDirectionDesc</span> | <span class="prop-name">.MuiTableSortLabel-iconDirectionDesc</span> | Styles applied to the icon component if `direction="desc"`.\n| <span class="prop-name">iconDirectionAsc</span> | <span class="prop-name">.MuiTableSortLabel-iconDirectionAsc</span> | Styles applied to the icon component if `direction="asc"`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/TableSortLabel/TableSortLabel.js) for more detail.\n\n## Inheritance\n\nThe props of the [ButtonBase](/api/button-base/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Tables](/components/tables/)\n\n'},pS25:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return l}));var o=a("mXGw"),t=a.n(o),s=a("e+1t"),p=a("kVtE"),r=t.a.createElement,i=a("HF6y");function l(e){var n=e.docs;return r(s.a,{docs:n})}l.getInitialProps=function(){var e=Object(p.a)({pageFilename:"api/table-sort-label",requireRaw:i});return{demos:e.demos,docs:e.docs}}}},[["Ol/v",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);