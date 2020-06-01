(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{"L/bV":function(e,n,o){var t={"./toggle-button-group.md":"Wt9J"};function a(e){var n=s(e);return o(n)}function s(e){if(!o.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=s,e.exports=a,a.id="L/bV"},Wt9J:function(e,n){e.exports='---\nfilename: /packages/material-ui-lab/src/ToggleButtonGroup/ToggleButtonGroup.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# ToggleButtonGroup API\n\n<p class="description">The API documentation of the ToggleButtonGroup React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport ToggleButtonGroup from \'@material-ui/lab/ToggleButtonGroup\';\n// or\nimport { ToggleButtonGroup } from \'@material-ui/lab\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiToggleButtonGroup` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the button. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">exclusive</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, only allow one of the child ToggleButton values to be selected. |\n| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Callback fired when the value changes.<br><br>**Signature:**<br>`function(event: object, value: any) => void`<br>*event:* The event source of the callback.<br>*value:* of the selected buttons. When `exclusive` is true this is a single value; when false an array of selected values. If no value is selected and `exclusive` is true the value is null; when false an empty array. |\n| <span class="prop-name">orientation</span> | <span class="prop-type">\'horizontal\'<br>&#124;&nbsp;\'vertical\'</span> | <span class="prop-default">\'horizontal\'</span> | The group orientation (layout flow direction). |\n| <span class="prop-name">size</span> | <span class="prop-type">\'large\'<br>&#124;&nbsp;\'medium\'<br>&#124;&nbsp;\'small\'</span> | <span class="prop-default">\'medium\'</span> | The size of the buttons. |\n| <span class="prop-name">value</span> | <span class="prop-type">any</span> |  | The currently selected value within the group or an array of selected values when `exclusive` is false.<br>The value must have reference equality with the option in order to be selected. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiToggleButtonGroup-root</span> | Styles applied to the root element.\n| <span class="prop-name">vertical</span> | <span class="prop-name">.MuiToggleButtonGroup-vertical</span> | Styles applied to the root element if `orientation="vertical"`.\n| <span class="prop-name">grouped</span> | <span class="prop-name">.MuiToggleButtonGroup-grouped</span> | Styles applied to the children.\n| <span class="prop-name">groupedHorizontal</span> | <span class="prop-name">.MuiToggleButtonGroup-groupedHorizontal</span> | Styles applied to the children if `orientation="horizontal"`.\n| <span class="prop-name">groupedVertical</span> | <span class="prop-name">.MuiToggleButtonGroup-groupedVertical</span> | Styles applied to the children if `orientation="vertical"`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui-lab/src/ToggleButtonGroup/ToggleButtonGroup.js) for more detail.\n\n## Demos\n\n- [Toggle Button](/components/toggle-button/)\n\n'},kZQ8:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/toggle-button-group",function(){return o("rskM")}])},rskM:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return i}));var t=o("mXGw"),a=o.n(t),s=o("e+1t"),p=o("kVtE"),r=a.a.createElement,l=o("L/bV");function i(e){var n=e.docs;return r(s.a,{docs:n})}i.getInitialProps=function(){var e=Object(p.a)({pageFilename:"api/toggle-button-group",requireRaw:l});return{demos:e.demos,docs:e.docs}}}},[["kZQ8",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);