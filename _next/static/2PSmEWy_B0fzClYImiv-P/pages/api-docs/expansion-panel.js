(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"4ef1":function(n,e){n.exports='---\nfilename: /packages/material-ui/src/ExpansionPanel/ExpansionPanel.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# ExpansionPanel API\n\n<p class="description">The API documentation of the ExpansionPanel React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport ExpansionPanel from \'@material-ui/core/ExpansionPanel\';\n// or\nimport { ExpansionPanel } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiExpansionPanel` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">node</span> |  | The content of the expansion panel. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">defaultExpanded</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, expands the panel by default. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the panel will be displayed in a disabled state. |\n| <span class="prop-name">expanded</span> | <span class="prop-type">bool</span> |  | If `true`, expands the panel, otherwise collapse it. Setting this prop enables control over the panel. |\n| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Callback fired when the expand/collapse state is changed.<br><br>**Signature:**<br>`function(event: object, expanded: boolean) => void`<br>*event:* The event source of the callback.<br>*expanded:* The `expanded` state of the panel. |\n| <span class="prop-name">square</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, rounded corners are disabled. |\n| <span class="prop-name">TransitionComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">Collapse</span> | The component used for the collapse effect. [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component. |\n| <span class="prop-name">TransitionProps</span> | <span class="prop-type">object</span> |  | Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([Paper](/api/paper/)).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiExpansionPanel-root</span> | Styles applied to the root element.\n| <span class="prop-name">rounded</span> | <span class="prop-name">.MuiExpansionPanel-rounded</span> | Styles applied to the root element if `square={false}`.\n| <span class="prop-name">expanded</span> | <span class="prop-name">.Mui-expanded</span> | Styles applied to the root element if `expanded={true}`.\n| <span class="prop-name">disabled</span> | <span class="prop-name">.Mui-disabled</span> | Styles applied to the root element if `disabled={true}`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/ExpansionPanel/ExpansionPanel.js) for more detail.\n\n## Inheritance\n\nThe props of the [Paper](/api/paper/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Expansion Panels](/components/expansion-panels/)\n\n'},"5UIz":function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/expansion-panel",function(){return a("CY5b")}])},CY5b:function(n,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return l}));var s=a("mXGw"),o=a.n(s),p=a("e+1t"),t=a("kVtE"),r=o.a.createElement,i=a("S0qO");function l(n){var e=n.docs;return r(p.a,{docs:e})}l.getInitialProps=function(){var n=Object(t.a)({pageFilename:"api/expansion-panel",requireRaw:i});return{demos:n.demos,docs:n.docs}}},S0qO:function(n,e,a){var s={"./expansion-panel.md":"4ef1"};function o(n){var e=p(n);return a(e)}function p(n){if(!a.o(s,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return s[n]}o.keys=function(){return Object.keys(s)},o.resolve=p,n.exports=o,o.id="S0qO"}},[["5UIz",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,17,18]]]);