(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{"Dm/t":function(p,a,n){var e={"./typography.md":"LujL"};function s(p){var a=o(p);return n(a)}function o(p){if(!n.o(e,p)){var a=new Error("Cannot find module '"+p+"'");throw a.code="MODULE_NOT_FOUND",a}return e[p]}s.keys=function(){return Object.keys(e)},s.resolve=o,p.exports=s,s.id="Dm/t"},LujL:function(p,a){p.exports='---\nfilename: /packages/material-ui/src/Typography/Typography.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Typography API\n\n<p class="description">The API documentation of the Typography React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Typography from \'@material-ui/core/Typography\';\n// or\nimport { Typography } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Component name\n\nThe `MuiTypography` name can be used for providing [default props](/customization/globals/#default-props) or [style overrides](/customization/globals/#css) at the theme level.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">align</span> | <span class="prop-type">\'inherit\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'center\'<br>&#124;&nbsp;\'right\'<br>&#124;&nbsp;\'justify\'</span> | <span class="prop-default">\'inherit\'</span> | Set the text-align on the component. |\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">color</span> | <span class="prop-type">\'initial\'<br>&#124;&nbsp;\'inherit\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'secondary\'<br>&#124;&nbsp;\'textPrimary\'<br>&#124;&nbsp;\'textSecondary\'<br>&#124;&nbsp;\'error\'</span> | <span class="prop-default">\'initial\'</span> | The color of the component. It supports those theme colors that make sense for this component. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> |  | The component used for the root node. Either a string to use a HTML element or a component. Overrides the behavior of the `variantMapping` prop. |\n| <span class="prop-name">display</span> | <span class="prop-type">\'initial\'<br>&#124;&nbsp;\'block\'<br>&#124;&nbsp;\'inline\'</span> | <span class="prop-default">\'initial\'</span> | Controls the display type |\n| <span class="prop-name">gutterBottom</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the text will have a bottom margin. |\n| <span class="prop-name">noWrap</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.<br>Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow). |\n| <span class="prop-name">paragraph</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the text will have a bottom margin. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'h1\'<br>&#124;&nbsp;\'h2\'<br>&#124;&nbsp;\'h3\'<br>&#124;&nbsp;\'h4\'<br>&#124;&nbsp;\'h5\'<br>&#124;&nbsp;\'h6\'<br>&#124;&nbsp;\'subtitle1\'<br>&#124;&nbsp;\'subtitle2\'<br>&#124;&nbsp;\'body1\'<br>&#124;&nbsp;\'body2\'<br>&#124;&nbsp;\'caption\'<br>&#124;&nbsp;\'button\'<br>&#124;&nbsp;\'overline\'<br>&#124;&nbsp;\'srOnly\'<br>&#124;&nbsp;\'inherit\'</span> | <span class="prop-default">\'body1\'</span> | Applies the theme typography styles. |\n| <span class="prop-name">variantMapping</span> | <span class="prop-type">object</span> | <span class="prop-default">{  h1: \'h1\',  h2: \'h2\',  h3: \'h3\',  h4: \'h4\',  h5: \'h5\',  h6: \'h6\',  subtitle1: \'h6\',  subtitle2: \'h6\',  body1: \'p\',  body2: \'p\',}</span> | The component maps the variant prop to a range of different HTML element types. For instance, subtitle1 to `<h6>`. If you wish to change that mapping, you can provide your own. Alternatively, you can use the `component` prop. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiTypography-root</span> | Styles applied to the root element.\n| <span class="prop-name">body2</span> | <span class="prop-name">.MuiTypography-body2</span> | Styles applied to the root element if `variant="body2"`.\n| <span class="prop-name">body1</span> | <span class="prop-name">.MuiTypography-body1</span> | Styles applied to the root element if `variant="body1"`.\n| <span class="prop-name">caption</span> | <span class="prop-name">.MuiTypography-caption</span> | Styles applied to the root element if `variant="caption"`.\n| <span class="prop-name">button</span> | <span class="prop-name">.MuiTypography-button</span> | Styles applied to the root element if `variant="button"`.\n| <span class="prop-name">h1</span> | <span class="prop-name">.MuiTypography-h1</span> | Styles applied to the root element if `variant="h1"`.\n| <span class="prop-name">h2</span> | <span class="prop-name">.MuiTypography-h2</span> | Styles applied to the root element if `variant="h2"`.\n| <span class="prop-name">h3</span> | <span class="prop-name">.MuiTypography-h3</span> | Styles applied to the root element if `variant="h3"`.\n| <span class="prop-name">h4</span> | <span class="prop-name">.MuiTypography-h4</span> | Styles applied to the root element if `variant="h4"`.\n| <span class="prop-name">h5</span> | <span class="prop-name">.MuiTypography-h5</span> | Styles applied to the root element if `variant="h5"`.\n| <span class="prop-name">h6</span> | <span class="prop-name">.MuiTypography-h6</span> | Styles applied to the root element if `variant="h6"`.\n| <span class="prop-name">subtitle1</span> | <span class="prop-name">.MuiTypography-subtitle1</span> | Styles applied to the root element if `variant="subtitle1"`.\n| <span class="prop-name">subtitle2</span> | <span class="prop-name">.MuiTypography-subtitle2</span> | Styles applied to the root element if `variant="subtitle2"`.\n| <span class="prop-name">overline</span> | <span class="prop-name">.MuiTypography-overline</span> | Styles applied to the root element if `variant="overline"`.\n| <span class="prop-name">srOnly</span> | <span class="prop-name">.MuiTypography-srOnly</span> | Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers.\n| <span class="prop-name">alignLeft</span> | <span class="prop-name">.MuiTypography-alignLeft</span> | Styles applied to the root element if `align="left"`.\n| <span class="prop-name">alignCenter</span> | <span class="prop-name">.MuiTypography-alignCenter</span> | Styles applied to the root element if `align="center"`.\n| <span class="prop-name">alignRight</span> | <span class="prop-name">.MuiTypography-alignRight</span> | Styles applied to the root element if `align="right"`.\n| <span class="prop-name">alignJustify</span> | <span class="prop-name">.MuiTypography-alignJustify</span> | Styles applied to the root element if `align="justify"`.\n| <span class="prop-name">noWrap</span> | <span class="prop-name">.MuiTypography-noWrap</span> | Styles applied to the root element if `nowrap={true}`.\n| <span class="prop-name">gutterBottom</span> | <span class="prop-name">.MuiTypography-gutterBottom</span> | Styles applied to the root element if `gutterBottom={true}`.\n| <span class="prop-name">paragraph</span> | <span class="prop-name">.MuiTypography-paragraph</span> | Styles applied to the root element if `paragraph={true}`.\n| <span class="prop-name">colorInherit</span> | <span class="prop-name">.MuiTypography-colorInherit</span> | Styles applied to the root element if `color="inherit"`.\n| <span class="prop-name">colorPrimary</span> | <span class="prop-name">.MuiTypography-colorPrimary</span> | Styles applied to the root element if `color="primary"`.\n| <span class="prop-name">colorSecondary</span> | <span class="prop-name">.MuiTypography-colorSecondary</span> | Styles applied to the root element if `color="secondary"`.\n| <span class="prop-name">colorTextPrimary</span> | <span class="prop-name">.MuiTypography-colorTextPrimary</span> | Styles applied to the root element if `color="textPrimary"`.\n| <span class="prop-name">colorTextSecondary</span> | <span class="prop-name">.MuiTypography-colorTextSecondary</span> | Styles applied to the root element if `color="textSecondary"`.\n| <span class="prop-name">colorError</span> | <span class="prop-name">.MuiTypography-colorError</span> | Styles applied to the root element if `color="error"`.\n| <span class="prop-name">displayInline</span> | <span class="prop-name">.MuiTypography-displayInline</span> | Styles applied to the root element if `display="inline"`.\n| <span class="prop-name">displayBlock</span> | <span class="prop-name">.MuiTypography-displayBlock</span> | Styles applied to the root element if `display="block"`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Typography/Typography.js) for more detail.\n\n## Demos\n\n- [Breadcrumbs](/components/breadcrumbs/)\n- [Typography](/components/typography/)\n\n'},UzEA:function(p,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/typography",function(){return n("iQC3")}])},iQC3:function(p,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return i}));var e=n("mXGw"),s=n.n(e),o=n("e+1t"),t=n("kVtE"),r=s.a.createElement,l=n("Dm/t");function i(p){var a=p.docs;return r(o.a,{docs:a})}i.getInitialProps=function(){var p=Object(t.a)({pageFilename:"api/typography",requireRaw:l});return{demos:p.demos,docs:p.docs}}}},[["UzEA",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,17,18]]]);