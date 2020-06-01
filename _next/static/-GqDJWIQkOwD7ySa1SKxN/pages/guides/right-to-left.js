(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{"+5MV":function(e,n){e.exports='# Derecha-a-izquierda\n\n<p class="description">Right-to-left languages such as Arabic, Persian or Hebrew are supported. To change the direction of Material-UI components you must follow the following steps.</p>\n\n## Steps\n\n### 1. HTML\n\nMake sure the `dir` attribute is set on the body, otherwise native components will break:\n\n```html\n<body dir="rtl">\n```\n\n### 2. Tema\n\nSet the direction in your custom theme:\n\n```js\nconst theme = createMuiTheme({\n  direction: \'rtl\',\n});\n```\n\n### 3. jss-rtl\n\nYou need this JSS plugin to flip the styles: [jss-rtl](https://github.com/alitaheri/jss-rtl).\n\n```sh\nnpm install jss-rtl\n```\n\nHaving installed the plugin in your project, Material-UI components still require it to be loaded by the jss instance, as described below. Internally, withStyles is using this JSS plugin when `direction: \'rtl\'` is set on the theme. Head to the [plugin README](https://github.com/alitaheri/jss-rtl) to learn more about it.\n\nOnce you have created a new JSS instance with the plugin, you need to make it available to all the components in the component tree. The [`StylesProvider`](/styles/api/#stylesprovider) component enables this:\n\n```jsx\nimport { create } from \'jss\';\nimport rtl from \'jss-rtl\';\nimport { StylesProvider, jssPreset } from \'@material-ui/core/styles\';\n\n// Configure JSS\nconst jss = create({ plugins: [...jssPreset().plugins, rtl()] });\n\nfunction RTL(props) {\n  return (\n    <StylesProvider jss={jss}>\n      {props.children}\n    </StylesProvider>\n  );\n}\n```\n\n## Demo\n\n*Use the direction toggle button on the top right corner to flip the whole documentation*\n\n{{"demo": "pages/guides/right-to-left/Direction.js"}}\n\n## Opting out of rtl transformation\n\nIf you want to prevent a specific rule-set from being affected by the `rtl` transformation you can add `flip: false` at the beginning.\n\n*Use the direction toggle button on the top right corner to see the effect.*\n\n{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}'},"3AC6":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var r=t("mXGw"),s=t.n(r),i=t("yZEQ"),o=t("WLtd"),a=s.a.createElement,l=Object(i.a)((function(e){return Object(o.a)({root:{width:"100%",marginTop:e.spacing(4),marginRight:e.spacing(2)},affected:{textAlign:"right"},unaffected:{flip:!1,textAlign:"right"}})}));function c(){var e=l();return a("div",{className:e.root},a("div",{className:e.affected},"Affected"),a("div",{className:e.unaffected},"Unaffected"))}},"9Z9O":function(e,n,t){var r={"./Direction.js":"LsyS","./Direction.tsx":"ix2w","./RtlOptOut.js":"T6V3","./RtlOptOut.tsx":"3AC6"};function s(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="9Z9O"},"9w7R":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/right-to-left",function(){return t("RCJx")}])},EApK:function(e,n){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n    marginTop: theme.spacing(4),\n    marginRight: theme.spacing(2),\n  },\n  affected: {\n    textAlign: 'right',\n  },\n  unaffected: {\n    flip: false,\n    textAlign: 'right',\n  },\n}));\n\nexport default function RtlOptOut() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.affected}>Affected</div>\n      <div className={classes.unaffected}>Unaffected</div>\n    </div>\n  );\n}\n"},EeWl:function(e,n){e.exports="import React from 'react';\nimport { makeStyles, createStyles, Theme } from '@material-ui/core/styles';\n\ndeclare module '@material-ui/core/styles/withStyles' {\n  // Augment the BaseCSSProperties so that we can control jss-rtl\n  interface BaseCSSProperties {\n    /**\n     * Used to control if the rule-set should be affected by rtl transformation\n     */\n    flip?: boolean;\n  }\n}\n\nconst useStyles = makeStyles((theme: Theme) =>\n  createStyles({\n    root: {\n      width: '100%',\n      marginTop: theme.spacing(4),\n      marginRight: theme.spacing(2),\n    },\n    affected: {\n      textAlign: 'right',\n    },\n    unaffected: {\n      flip: false,\n      textAlign: 'right',\n    },\n  }),\n);\n\nexport default function RtlOptOut() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.affected}>Affected</div>\n      <div className={classes.unaffected}>Unaffected</div>\n    </div>\n  );\n}\n"},"J/Xm":function(e,n){e.exports='# \u4ece\u53f3\u5230\u5de6\u8bfb\u53d6\n\n<p class="description">\u652f\u6301\u4ece\u53f3\u5230\u5de6\u7684\u8bed\u8a00\uff0c\u5982\u963f\u62c9\u4f2f\u8bed\uff08Arabic\uff09\u3001\u6ce2\u65af\u8bed\uff08Persian \uff09\u6216\u5e0c\u4f2f\u6765\u8bed\uff08Hebrew \uff09\u3002 \u8981\u66f4\u6539 Material-UI \u7ec4\u4ef6\u7684\u8bfb\u53d6\u65b9\u5411\uff0c\u60a8\u5fc5\u987b\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u3002</p>\n\n## \u6b65\u9aa4\n\n### 1\u3002 HTML\n\n\u786e\u4fdd\u5728 body \u4e0a\u8bbe\u7f6e\u4e86 `dir` \u5c5e\u6027\uff0c\u5426\u5219\u672c\u673a\u7ec4\u4ef6\u5c06\u4e2d\u65ad\uff1a\n\n```html\n<body dir="rtl">\n```\n\n### 2\u3002 \u4e3b\u9898\n\n\u5728\u60a8\u81ea\u5b9a\u4e49\u7684\u4e3b\u9898\u4e2d\u8bbe\u7f6e\u65b9\u5411\uff1a\n\n```js\nconst theme = createMuiTheme({\n  direction: \'rtl\',\n});\n```\n\n### 3\u3002 jss-rtl\n\n\u4f60\u9700\u8981\u8fd9\u4e2a JSS \u63d2\u4ef6\u6765\u7ffb\u8f6c\u6837\u5f0f\uff1a [jss-rtl](https://github.com/alitaheri/jss-rtl)\u3002\n\n```sh\nnpm install jss-rtl\n```\n\n\u5982\u4e0b\u6240\u8ff0\uff0c\u5728\u9879\u76ee\u4e2d\u5b89\u88c5\u4e86\u63d2\u4ef6\u540e\uff0cMaterial-UI \u7ec4\u4ef6\u4ecd\u7136\u9700\u8981\u901a\u8fc7 jss \u5b9e\u4f8b\u6765\u52a0\u8f7d\u3002 \u5728\u5185\u90e8\uff0c\u82e5 `direction: \'rtl\'` \u4e0a\u5728\u4e3b\u9898\u8bbe\u7f6e\u4e86\uff0cwithStyles \u5219\u4f1a\u4f7f\u7528\u8be5 JSS \u63d2\u4ef6 \u3002 \u8bf7\u524d\u5f80 [\u6b64\u63d2\u4ef6\u7684 README](https://github.com/alitaheri/jss-rtl) \u6765\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\n\n\u4e00\u65e6\u60a8\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 JSS \u5b9e\u4f8b\uff0c\u60a8\u9700\u8981\u63d0\u7ed9\u7ec4\u4ef6\u6811\u4e2d\u7684\u6240\u6709\u7ec4\u4ef6\u3002 \u6211\u4eec\u6709\u4e00\u4e2a [`StylesProvider`](/styles/api/#stylesprovider) \u7ec4\u4ef6\u6765\u670d\u52a1\u8fd9\u4e2a\u9700\u6c42\uff1a\n\n```jsx\nimport { create } from \'jss\';\nimport rtl from \'jss-rtl\';\nimport { StylesProvider, jssPreset } from \'@material-ui/core/styles\';\n\n// Configure JSS\nconst jss = create({ plugins: [...jssPreset().plugins, rtl()] });\n\nfunction RTL(props) {\n  return (\n    <StylesProvider jss={jss}>\n      {props.children}\n    </StylesProvider>\n  );\n}\n```\n\n## \u6f14\u793a\n\n*\u8bf7\u4f7f\u7528\u53f3\u4e0a\u89d2\u7684\u65b9\u5411\u5207\u6362\u6309\u94ae\u6765\u7ffb\u8f6c\u6574\u4e2a\u6587\u6863\u3002*\n\n{{"demo": "pages/guides/right-to-left/Direction.js"}}\n\n## \u9009\u62e9\u9000\u51fa rtl \u8f6c\u6362\n\n\u82e5\u60a8\u60f3\u907f\u514d\u4e00\u4e2a\u7279\u6b8a\u7684\u7279\u5b9a\u89c4\u5219\u53d7\u5230 `rtl` \u8f6c\u6362\u7684\u5f71\u54cd\uff0c\u60a8\u53ef\u4ee5\u5728\u6700\u5f00\u59cb\u65f6\u52a0\u4e0a`flip: false`\u3002\n\n*\u8bf7\u4f7f\u7528\u53f3\u4e0a\u89d2\u7684\u65b9\u5411\u5207\u6362\u6309\u94ae\u6765\u67e5\u770b\u6548\u679c\u3002*\n\n{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}'},LsyS:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var r=t("mXGw"),s=t.n(r),i=t("mKyP"),o=t("h7Hf"),a=t("nx5Z"),l=s.a.createElement,c=Object(i.a)({direction:"rtl"}),d=l(o.a,{theme:c},l("div",{dir:"rtl"},l(a.a,{placeholder:"Name"}),l("input",{type:"text",placeholder:"Name"})));function u(){return d}},MSmP:function(e,n){e.exports='# Droite \xe0 gauche\n\n<p class="description">Right-to-left languages such as Arabic, Persian or Hebrew are supported. Pour modifier le sens des composants Materiau-UI, vous devez suivre les \xe9tapes suivantes.</p>\n\n## Etapes\n\n### 1. HTML\n\nMake sure the `dir` attribute is set on the body, otherwise native components will break:\n\n```html\n<body dir="rtl">\n```\n\n### 2. Th\xe8me\n\nSet the direction in your custom theme:\n\n```js\nconst theme = createMuiTheme({\n  direction: \'rtl\',\n});\n```\n\n### 3. jss-rtl\n\nYou need this JSS plugin to flip the styles: [jss-rtl](https://github.com/alitaheri/jss-rtl).\n\n```sh\nnpm install jss-rtl\n```\n\nHaving installed the plugin in your project, Material-UI components still require it to be loaded by the jss instance, as described below. Internally, withStyles is using this JSS plugin when `direction: \'rtl\'` is set on the theme. Head to the [plugin README](https://github.com/alitaheri/jss-rtl) to learn more about it.\n\nOnce you have created a new JSS instance with the plugin, you need to make it available to all the components in the component tree. The [`StylesProvider`](/styles/api/#stylesprovider) component enables this:\n\n```jsx\nimport { create } from \'jss\';\nimport rtl from \'jss-rtl\';\nimport { StylesProvider, jssPreset } from \'@material-ui/core/styles\';\n\n// Configure JSS\nconst jss = create({ plugins: [...jssPreset().plugins, rtl()] });\n\nfunction RTL(props) {\n  return (\n    <StylesProvider jss={jss}>\n      {props.children}\n    </StylesProvider>\n  );\n}\n```\n\n## D\xe9mo\n\n*Utilisez le bouton de navigation situ\xe9 dans le coin sup\xe9rieur droit pour retourner toute la documentation*\n\n{{"demo": "pages/guides/right-to-left/Direction.js"}}\n\n## D\xe9sactiver la transformation RTL\n\nIf you want to prevent a specific rule-set from being affected by the `rtl` transformation you can add `flip: false` at the beginning.\n\n*Use the direction toggle button on the top right corner to see the effect.*\n\n{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}'},Qxae:function(e,n,t){var r={"./Direction.js":"t+QP","./Direction.tsx":"YpYt","./RtlOptOut.js":"EApK","./RtlOptOut.tsx":"EeWl","./right-to-left-aa.md":"WoRy","./right-to-left-de.md":"m10h","./right-to-left-es.md":"+5MV","./right-to-left-fr.md":"MSmP","./right-to-left-ja.md":"cKrX","./right-to-left-pt.md":"hYDw","./right-to-left-ru.md":"n5KT","./right-to-left-zh.md":"J/Xm","./right-to-left.md":"iyPR"};function s(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="Qxae"},RCJx:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var r=t("mXGw"),s=t.n(r),i=t("e+1t"),o=t("kVtE"),a=s.a.createElement,l=t("9Z9O"),c=t("Qxae");function d(e){var n=e.demos,t=e.docs;return a(i.a,{demos:n,docs:t,requireDemo:l})}d.getInitialProps=function(){var e=Object(o.a)({pageFilename:"guides/right-to-left",requireRaw:c});return{demos:e.demos,docs:e.docs}}},T6V3:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var r=t("mXGw"),s=t.n(r),i=t("yZEQ"),o=s.a.createElement,a=Object(i.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(4),marginRight:e.spacing(2)},affected:{textAlign:"right"},unaffected:{flip:!1,textAlign:"right"}}}));function l(){var e=a();return o("div",{className:e.root},o("div",{className:e.affected},"Affected"),o("div",{className:e.unaffected},"Unaffected"))}},WLtd:function(e,n,t){"use strict";function r(e){return e}t.d(n,"a",(function(){return r}))},WoRy:function(e,n){e.exports='# crwdns96412:0crwdne96412:0\n\n<p class="description">crwdns131750:0crwdne131750:0 crwdns131752:0crwdne131752:0</p>\n\n## crwdns96418:0crwdne96418:0\n\n### crwdns96420:0crwdne96420:0 crwdns96422:0crwdne96422:0\n\ncrwdns96424:0crwdne96424:0\n\n```html\ncrwdns96426:0crwdne96426:0\n```\n\n### crwdns96428:0crwdne96428:0 crwdns96430:0crwdne96430:0\n\ncrwdns96432:0crwdne96432:0\n\n```js\ncrwdns96434:0crwdne96434:0\n```\n\n### crwdns96436:0crwdne96436:0 crwdns96438:0crwdne96438:0\n\ncrwdns96440:0crwdne96440:0\n\n```sh\ncrwdns96442:0crwdne96442:0\n```\n\ncrwdns96444:0crwdne96444:0 crwdns96446:0crwdne96446:0 crwdns96448:0crwdne96448:0\n\ncrwdns96450:0crwdne96450:0 crwdns101318:0crwdne101318:0\n\n```jsx\ncrwdns103440:0{ create }crwdnd103440:0{ StylesProvider, jssPreset }crwdnd103440:0{jss}crwdnd103440:0{props.children}crwdne103440:0\n```\n\n## crwdns96456:0crwdne96456:0\n\n*crwdns96458:0crwdne96458:0*\n\ncrwdns96460:0crwdne96460:0\n\n## crwdns96462:0crwdne96462:0\n\ncrwdns96464:0crwdne96464:0\n\n*crwdns96466:0crwdne96466:0*\n\ncrwdns96468:0crwdne96468:0'},YpYt:function(e,n){e.exports='import React from \'react\';\nimport { createMuiTheme, ThemeProvider } from \'@material-ui/core/styles\';\nimport TextField from \'@material-ui/core/TextField\';\n\nconst theme = createMuiTheme({\n  direction: \'rtl\', // Both here and <body dir="rtl">\n});\n\nexport default function Direction() {\n  return (\n    <ThemeProvider theme={theme}>\n      <div dir="rtl">\n        <TextField placeholder="Name" />\n        <input type="text" placeholder="Name" />\n      </div>\n    </ThemeProvider>\n  );\n}\n'},cKrX:function(e,n){e.exports='# \u53f3\u304b\u3089\u5de6\n\n<p class="description">Right-to-left languages such as Arabic, Persian or Hebrew are supported. To change the direction of Material-UI components you must follow the following steps.</p>\n\n## Steps\n\n### 1. HTML\n\nMake sure the `dir` attribute is set on the body, otherwise native components will break:\n\n```html\n<body dir="rtl">\n```\n\n### 2. \u30c6\u30fc\u30de\n\nSet the direction in your custom theme:\n\n```js\nconst theme = createMuiTheme({\n  direction: \'rtl\',\n});\n```\n\n### 3. jss-rtl\n\nYou need this JSS plugin to flip the styles: [jss-rtl](https://github.com/alitaheri/jss-rtl).\n\n```sh\nnpm install jss-rtl\n```\n\nHaving installed the plugin in your project, Material-UI components still require it to be loaded by the jss instance, as described below. Internally, withStyles is using this JSS plugin when `direction: \'rtl\'` is set on the theme. Head to the [plugin README](https://github.com/alitaheri/jss-rtl) to learn more about it.\n\nOnce you have created a new JSS instance with the plugin, you need to make it available to all the components in the component tree. The [`StylesProvider`](/styles/api/#stylesprovider) component enables this:\n\n```jsx\nimport { create } from \'jss\';\nimport rtl from \'jss-rtl\';\nimport { StylesProvider, jssPreset } from \'@material-ui/core/styles\';\n\n// Configure JSS\nconst jss = create({ plugins: [...jssPreset().plugins, rtl()] });\n\nfunction RTL(props) {\n  return (\n    <StylesProvider jss={jss}>\n      {props.children}\n    </StylesProvider>\n  );\n}\n```\n\n## Demo\n\n*Use the direction toggle button on the top right corner to flip the whole documentation*\n\n{{"demo": "pages/guides/right-to-left/Direction.js"}}\n\n## Opting out of rtl transformation\n\nIf you want to prevent a specific rule-set from being affected by the `rtl` transformation you can add `flip: false` at the beginning.\n\n*Use the direction toggle button on the top right corner to see the effect.*\n\n{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}'},hYDw:function(e,n){e.exports='# Da direita para a esquerda\n\n<p class="description">Idiomas direita-para-esquerda como \xe1rabe, persa ou hebraico s\xe3o suportados. Para alterar a dire\xe7\xe3o dos componentes de Material-UI, voc\xea deve seguir as etapas a seguir.</p>\n\n## Passos\n\n### 1. HTML\n\nCertifique-se de que o atributo `dir` \xe9 definido no corpo (body), caso contr\xe1rio, os componentes nativos ser\xe3o quebrados:\n\n```html\n<body dir="rtl">\n```\n\n### 2. Tema\n\nDefina a dire\xe7\xe3o no seu tema customizado:\n\n```js\nconst theme = createMuiTheme({\n  direction: \'rtl\',\n});\n```\n\n### 3. jss-rtl\n\nVoc\xea precisa deste plugin JSS para mudar os estilos: [jss-rtl](https://github.com/alitaheri/jss-rtl).\n\n```sh\nnpm install jss-rtl\n```\n\nTendo instalado o plugin em seu projeto, os componentes de Material-UI ainda exigem que ele seja carregado pela inst\xe2ncia do jss, conforme descrito abaixo. Internamente, withStyles est\xe1 usando este plugin JSS quando `dire\xe7\xe3o: \'rtl\'` est\xe1 definido no tema. V\xe1 para o [README do plugin](https://github.com/alitaheri/jss-rtl) para aprender mais sobre isso.\n\nDepois de criar uma nova inst\xe2ncia do JSS com o plugin, voc\xea precisar\xe1 disponibiliz\xe1-la para todos os componentes na \xe1rvore de componentes. O componente [`StylesProvider`](/styles/api/#stylesprovider) permite isso:\n\n```jsx\nimport { create } from \'jss\';\nimport rtl from \'jss-rtl\';\nimport { StylesProvider, jssPreset } from \'@material-ui/core/styles\';\n\n// Configure o JSS\nconst jss = create({ plugins: [...jssPreset().plugins, rtl()] });\n\nfunction RTL(props) {\n  return (\n    <StylesProvider jss={jss}>\n      {props.children}\n    </StylesProvider>\n  );\n}\n```\n\n## Demonstra\xe7\xe3o\n\n*Use o bot\xe3o de altern\xe2ncia de dire\xe7\xe3o no canto superior direito para inverter toda a documenta\xe7\xe3o*\n\n{{"demo": "pages/guides/right-to-left/Direction.js"}}\n\n## Optando pela transforma\xe7\xe3o do rtl\n\nSe voc\xea quiser evitar que um conjunto de regras espec\xedfico seja afetado pela transforma\xe7\xe3o `rtl`, voc\xea pode adicionar `flip: false` no inicio.\n\n*Use o bot\xe3o de altern\xe2ncia de dire\xe7\xe3o no canto superior direito para ver o efeito.*\n\n{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}'},ix2w:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var r=t("mXGw"),s=t.n(r),i=t("mKyP"),o=t("h7Hf"),a=t("nx5Z"),l=s.a.createElement,c=Object(i.a)({direction:"rtl"}),d=l(o.a,{theme:c},l("div",{dir:"rtl"},l(a.a,{placeholder:"Name"}),l("input",{type:"text",placeholder:"Name"})));function u(){return d}},iyPR:function(e,n){e.exports='# Right-to-left\n\n<p class="description">Right-to-left languages such as Arabic, Persian or Hebrew are supported. To change the direction of Material-UI components you must follow the following steps.</p>\n\n## Steps\n\n### 1. HTML\n\nMake sure the `dir` attribute is set on the body, otherwise native components will break:\n```html\n<body dir="rtl">\n```\n\n### 2. Theme\n\nSet the direction in your custom theme:\n```js\nconst theme = createMuiTheme({\n  direction: \'rtl\',\n});\n```\n\n### 3. jss-rtl\n\nYou need this JSS plugin to flip the styles: [jss-rtl](https://github.com/alitaheri/jss-rtl).\n\n```sh\nnpm install jss-rtl\n```\nHaving installed the plugin in your project, Material-UI components still require it to be loaded by the jss instance, as described below.\nInternally, withStyles is using this JSS plugin when `direction: \'rtl\'` is set on the theme.\nHead to the [plugin README](https://github.com/alitaheri/jss-rtl) to learn more about it.\n\nOnce you have created a new JSS instance with the plugin, you need to make it available to all the components in the component tree.\nThe [`StylesProvider`](/styles/api/#stylesprovider) component enables this:\n\n```jsx\nimport { create } from \'jss\';\nimport rtl from \'jss-rtl\';\nimport { StylesProvider, jssPreset } from \'@material-ui/core/styles\';\n\n// Configure JSS\nconst jss = create({ plugins: [...jssPreset().plugins, rtl()] });\n\nfunction RTL(props) {\n  return (\n    <StylesProvider jss={jss}>\n      {props.children}\n    </StylesProvider>\n  );\n}\n```\n\n## Demo\n\n*Use the direction toggle button on the top right corner to flip the whole documentation*\n\n{{"demo": "pages/guides/right-to-left/Direction.js"}}\n\n\n## Opting out of rtl transformation\n\nIf you want to prevent a specific rule-set from being affected by the `rtl` transformation you can add `flip: false` at the beginning.\n\n*Use the direction toggle button on the top right corner to see the effect.*\n\n{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}\n'},m10h:function(e,n){e.exports='# Rechts nach links\n\n<p class="description">Right-to-left languages such as Arabic, Persian or Hebrew are supported. Um die Richtung der Material-UI-Komponenten zu \xe4ndern, m\xfcssen Sie die folgenden Schritte ausf\xfchren.</p>\n\n## Schritte\n\n### 1. HTML\n\nStellen Sie sicher, dass das `dir` Attribut in body gesetzt wird, sonst werden native Komponenten besch\xe4digt:\n\n```html\n<body dir="rtl">\n```\n\n### 2. Theme\n\nLegen Sie die Richtung in Ihrem benutzerdefinierten Theme fest:\n\n```js\nconst theme = createMuiTheme({\n  direction: \'rtl\',\n});\n```\n\n### 3. jss-rtl\n\nSie ben\xf6tigen dieses JSS-Plugin, um die Styles umzudrehen: [jss-rtl](https://github.com/alitaheri/jss-rtl).\n\n```sh\nnpm install jss-rtl\n```\n\nNachdem Sie das Plugin in Ihrem Projekt installiert haben, m\xfcssen die Komponenten der Material-UI weiterhin von der jss-Instanz geladen werden, wie im Folgenden beschrieben. Intern verwendet withStyles dieses JSS-Plugin wenn `direction: \'rtl\'` im Theme gesetzt ist. Schaue in die [plugin README](https://github.com/alitaheri/jss-rtl), um mehr zu erfahren.\n\nNachdem Sie eine neue JSS-Instanz mit dem Plugin erstellt haben, m\xfcssen Sie diese f\xfcr alle Komponenten in der Komponentenstruktur verf\xfcgbar machen. The [`StylesProvider`](/styles/api/#stylesprovider) component enables this:\n\n```jsx\nimport { create } from \'jss\';\nimport rtl from \'jss-rtl\';\nimport { StylesProvider, jssPreset } from \'@material-ui/core/styles\';\n\n// Configure JSS\nconst jss = create({ plugins: [...jssPreset().plugins, rtl()] });\n\nfunction RTL(props) {\n  return (\n    <StylesProvider jss={jss}>\n      {props.children}\n    </StylesProvider>\n  );\n}\n```\n\n## Demo\n\n*Verwenden Sie den Richtungsumschaltknopf in der oberen rechten Ecke, um die gesamte Dokumentation zu spiegeln*\n\n{{"demo": "pages/guides/right-to-left/Direction.js"}}\n\n## RTL-Umwandlung deaktivieren\n\nWenn Sie verhindern m\xf6chten, dass ein bestimmter Regelsatz von der `Rtl` Transformation beeinflusst wird, k\xf6nnen Sie `flip: false` am Anfang hinzuf\xfcgen.\n\n*Verwenden Sie den Richtungsumschaltknopf in der oberen rechten Ecke, um den Effekt zu sehen.*\n\n{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}'},n5KT:function(e,n){e.exports='# \u0421\u043f\u0440\u0430\u0432\u0430 \u043d\u0430\u043b\u0435\u0432\u043e\n\n<p class="description">Right-to-left languages such as Arabic, Persian or Hebrew are supported. To change the direction of Material-UI components you must follow the following steps.</p>\n\n## Steps\n\n### 1. HTML\n\nMake sure the `dir` attribute is set on the body, otherwise native components will break:\n\n```html\n<body dir="rtl">\n```\n\n### 2. Theme\n\nSet the direction in your custom theme:\n\n```js\nconst theme = createMuiTheme({\n  direction: \'rtl\',\n});\n```\n\n### 3. jss-rtl\n\nYou need this JSS plugin to flip the styles: [jss-rtl](https://github.com/alitaheri/jss-rtl).\n\n```sh\nnpm install jss-rtl\n```\n\nHaving installed the plugin in your project, Material-UI components still require it to be loaded by the jss instance, as described below. Internally, withStyles is using this JSS plugin when `direction: \'rtl\'` is set on the theme. Head to the [plugin README](https://github.com/alitaheri/jss-rtl) to learn more about it.\n\nOnce you have created a new JSS instance with the plugin, you need to make it available to all the components in the component tree. The [`StylesProvider`](/styles/api/#stylesprovider) component enables this:\n\n```jsx\nimport { create } from \'jss\';\nimport rtl from \'jss-rtl\';\nimport { StylesProvider, jssPreset } from \'@material-ui/core/styles\';\n\n// Configure JSS\nconst jss = create({ plugins: [...jssPreset().plugins, rtl()] });\n\nfunction RTL(props) {\n  return (\n    <StylesProvider jss={jss}>\n      {props.children}\n    </StylesProvider>\n  );\n}\n```\n\n## Demo\n\n*Use the direction toggle button on the top right corner to flip the whole documentation*\n\n{{"demo": "pages/guides/right-to-left/Direction.js"}}\n\n## Opting out of rtl transformation\n\nIf you want to prevent a specific rule-set from being affected by the `rtl` transformation you can add `flip: false` at the beginning.\n\n*Use the direction toggle button on the top right corner to see the effect.*\n\n{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}'},"t+QP":function(e,n){e.exports='import React from \'react\';\nimport { createMuiTheme, ThemeProvider } from \'@material-ui/core/styles\';\nimport TextField from \'@material-ui/core/TextField\';\n\nconst theme = createMuiTheme({\n  direction: \'rtl\', // Both here and <body dir="rtl">\n});\n\nexport default function Direction() {\n  return (\n    <ThemeProvider theme={theme}>\n      <div dir="rtl">\n        <TextField placeholder="Name" />\n        <input type="text" placeholder="Name" />\n      </div>\n    </ThemeProvider>\n  );\n}\n'}},[["9w7R",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18,19,20,22]]]);