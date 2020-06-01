(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{"4V3m":function(n,e){n.exports='---\ntitle: crwdns130844:0crwdne130844:0\ncomponents: crwdns106865:0crwdne106865:0\n---\n\n# crwdns106867:0crwdne106867:0\n\n<p class="description">crwdns106869:0crwdne106869:0</p>\n\ncrwdns130846:0crwdne130846:0 crwdns106873:0crwdne106873:0\n\ncrwdns106875:0crwdne106875:0\n'},"64QI":function(n,e){n.exports='---\ntitle: Backdrop React Component\ncomponents: Backdrop\n---\n\n# Backdrop\n\n<p class="description">The backdrop component is used to provide emphasis on a particular element or parts of it.</p>\n\nThe backdrop signals to the user of a state change within the application and can be used for creating loaders, dialogs and more. In its simplest form, the backdrop component will add a dimmed layer over your application.\n\n{{"demo": "pages/components/backdrop/SimpleBackdrop.js"}}\n'},"6APl":function(n,e){n.exports='---\ntitle: Backdrop React Component\ncomponents: Backdrop\n---\n\n# Backdrop\n\n<p class="description">El componente backdrop es usado para proveer \xe9nfasis en un elemento particular o en partes de este.</p>\n\nThe backdrop signals to the user of a state change within the application and can be used for creating loaders, dialogs and more. En su forma simple, el componente backdrop a\xf1ade una capa de atenuado sobre su aplicaci\xf3n.\n\n{{"demo": "pages/components/backdrop/SimpleBackdrop.js"}}\n'},"6CHJ":function(n,e){n.exports='---\ntitle: Backdrop React Component\ncomponents: Backdrop\n---\n\n# Backdrop\n\n<p class="description">The backdrop component is used to provide emphasis on a particular element or parts of it.</p>\n\nThe backdrop signals to the user of a state change within the application and can be used for creating loaders, dialogs and more. In its simplest form, the backdrop component will add a dimmed layer over your application.\n\n{{"demo": "pages/components/backdrop/SimpleBackdrop.js"}}\n'},"6Hyv":function(n,e){n.exports="import React from 'react';\nimport Backdrop from '@material-ui/core/Backdrop';\nimport CircularProgress from '@material-ui/core/CircularProgress';\nimport Button from '@material-ui/core/Button';\nimport { makeStyles, createStyles, Theme } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme: Theme) =>\n  createStyles({\n    backdrop: {\n      zIndex: theme.zIndex.drawer + 1,\n      color: '#fff',\n    },\n  }),\n);\n\nexport default function SimpleBackdrop() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n  const handleClose = () => {\n    setOpen(false);\n  };\n  const handleToggle = () => {\n    setOpen(!open);\n  };\n\n  return (\n    <div>\n      <Button variant=\"outlined\" color=\"primary\" onClick={handleToggle}>\n        Show backdrop\n      </Button>\n      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>\n        <CircularProgress color=\"inherit\" />\n      </Backdrop>\n    </div>\n  );\n}\n"},"9g1b":function(n,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return i}));var r=o("mXGw"),a=o.n(r),t=o("e+1t"),c=o("kVtE"),p=a.a.createElement,s=o("x4le"),d=o("y4TZ");function i(n){var e=n.demos,o=n.docs;return p(t.a,{demos:e,docs:o,requireDemo:s})}i.getInitialProps=function(){var n=Object(c.a)({pageFilename:"components/backdrop",requireRaw:d});return{demos:n.demos,docs:n.docs}}},"9t4P":function(n,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return u}));var r=o("mXGw"),a=o.n(r),t=o("/6bg"),c=o("IrXQ"),p=o("O8uh"),s=o("yZEQ"),d=o("WLtd"),i=a.a.createElement,l=Object(s.a)((function(n){return Object(d.a)({backdrop:{zIndex:n.zIndex.drawer+1,color:"#fff"}})})),m=i(c.a,{color:"inherit"});function u(){var n=l(),e=a.a.useState(!1),o=e[0],r=e[1];return i("div",null,i(p.a,{variant:"outlined",color:"primary",onClick:function(){r(!o)}},"Show backdrop"),i(t.a,{className:n.backdrop,open:o,onClick:function(){r(!1)}},m))}},AmO3:function(n,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return m}));var r=o("mXGw"),a=o.n(r),t=o("/6bg"),c=o("IrXQ"),p=o("O8uh"),s=o("yZEQ"),d=a.a.createElement,i=Object(s.a)((function(n){return{backdrop:{zIndex:n.zIndex.drawer+1,color:"#fff"}}})),l=d(c.a,{color:"inherit"});function m(){var n=i(),e=a.a.useState(!1),o=e[0],r=e[1];return d("div",null,d(p.a,{variant:"outlined",color:"primary",onClick:function(){r(!o)}},"Show backdrop"),d(t.a,{className:n.backdrop,open:o,onClick:function(){r(!1)}},l))}},"REm+":function(n,e){n.exports='---\ntitle: Componente React para Plano de Fundo\ncomponents: Backdrop\n---\n\n# Backdrop\n\n<p class="description">O componente backdrop (plano de fundo) \xe9 usado para fornecer \xeanfase em um elemento espec\xedfico ou partes dele.</p>\n\nO backdrop sinaliza para o usu\xe1rio uma mudan\xe7a de estado dentro do aplicativo e pode ser usado para criar progressos, di\xe1logos e muito mais. Em seu formato mais simples, o componente backdrop ir\xe1 adicionar uma camada escurecida sobre seu aplicativo.\n\n{{"demo": "pages/components/backdrop/SimpleBackdrop.js"}}\n'},WLtd:function(n,e,o){"use strict";function r(n){return n}o.d(e,"a",(function(){return r}))},efRP:function(n,e){n.exports="import React from 'react';\nimport Backdrop from '@material-ui/core/Backdrop';\nimport CircularProgress from '@material-ui/core/CircularProgress';\nimport Button from '@material-ui/core/Button';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  backdrop: {\n    zIndex: theme.zIndex.drawer + 1,\n    color: '#fff',\n  },\n}));\n\nexport default function SimpleBackdrop() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n  const handleClose = () => {\n    setOpen(false);\n  };\n  const handleToggle = () => {\n    setOpen(!open);\n  };\n\n  return (\n    <div>\n      <Button variant=\"outlined\" color=\"primary\" onClick={handleToggle}>\n        Show backdrop\n      </Button>\n      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>\n        <CircularProgress color=\"inherit\" />\n      </Backdrop>\n    </div>\n  );\n}\n"},fuuz:function(n,e){n.exports='---\ntitle: Backdrop React Component\ncomponents: Backdrop\n---\n\n# Backdrop (\u0417\u0430\u0442\u0435\u043c\u043d\u0435\u043d\u0438\u0435)\n\n<p class="description">\u0417\u0430\u0442\u0435\u043c\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u0430\u043a\u0446\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430.</p>\n\n\u0417\u0430\u0442\u0435\u043c\u043d\u0435\u043d\u0438\u0435 \u0441\u0438\u0433\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043e\u0431 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u043e\u0432, \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432 \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435. \u041f\u0440\u043e\u0449\u0435 \u0433\u043e\u0432\u043e\u0440\u044f, \u0437\u0430\u0442\u0435\u043c\u043d\u0435\u043d\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u0430\u0442\u0435\u043c\u043d\u0451\u043d\u043d\u044b\u0439 \u0441\u043b\u043e\u0439 \u043f\u043e\u0432\u0435\u0440\u0445 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.\n\n{{"demo": "pages/components/backdrop/SimpleBackdrop.js"}}\n'},gjBT:function(n,e){n.exports='---\ntitle: Backdrop React Component\ncomponents: Backdrop\n---\n\n# Backdrop\n\n<p class="description">The backdrop component is used to provide emphasis on a particular element or parts of it.</p>\n\nThe backdrop signals to the user of a state change within the application and can be used for creating loaders, dialogs and more.\nIn its simplest form, the backdrop component will add a dimmed layer over your application.\n\n{{"demo": "pages/components/backdrop/SimpleBackdrop.js"}}\n'},hkBt:function(n,e){n.exports='---\ntitle: Backdrop React Component\ncomponents: Backdrop\n---\n\n# Backdrop\n\n<p class="description">The backdrop component is used to provide emphasis on a particular element or parts of it.</p>\n\nThe backdrop signals to the user of a state change within the application and can be used for creating loaders, dialogs and more. In its simplest form, the backdrop component will add a dimmed layer over your application.\n\n{{"demo": "pages/components/backdrop/SimpleBackdrop.js"}}\n'},hykI:function(n,e){n.exports='---\ntitle: Backdrop React \u7ec4\u4ef6\ncomponents: Backdrop\n---\n\n# Backdrop \u80cc\u666f\u677f\n\n<p class="description">Backdrop \u7ec4\u4ef6\u7528\u4e8e\u63d0\u4f9b\u5bf9\u7279\u5b9a\u5143\u7d20\u6216\u5176\u90e8\u5206\u7684\u5f3a\u8c03\u3002</p>\n\nBackdrop\u7ec4\u4ef6\u63d0\u9192\u7528\u6237\u5e94\u7528\u7a0b\u5e8f\u5185\u90e8\u72b6\u6001\u7684\u53d8\u5316\uff0c\u4e5f\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u8fdb\u5ea6\u6761\u3001\u5bf9\u8bdd\u6846\u7b49\u7b49\u3002 \u5728\u6700\u7b80\u5355\u7684\u60c5\u51b5\u4e0b\uff0cbackdrop \u7ec4\u4ef6\u5c06\u5728\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0a\u6dfb\u52a0\u4e00\u4e2a\u6697\u6de1\u7684\u56fe\u5c42\u3002\n\n{{"demo": "pages/components/backdrop/SimpleBackdrop.js"}}\n'},onmU:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/backdrop",function(){return o("9g1b")}])},x4le:function(n,e,o){var r={"./SimpleBackdrop.js":"AmO3","./SimpleBackdrop.tsx":"9t4P"};function a(n){var e=t(n);return o(e)}function t(n){if(!o.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=t,n.exports=a,a.id="x4le"},y4TZ:function(n,e,o){var r={"./SimpleBackdrop.js":"efRP","./SimpleBackdrop.tsx":"6Hyv","./backdrop-aa.md":"4V3m","./backdrop-de.md":"64QI","./backdrop-es.md":"6APl","./backdrop-fr.md":"6CHJ","./backdrop-ja.md":"hkBt","./backdrop-pt.md":"REm+","./backdrop-ru.md":"fuuz","./backdrop-zh.md":"hykI","./backdrop.md":"gjBT"};function a(n){var e=t(n);return o(e)}function t(n){if(!o.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=t,n.exports=a,a.id="y4TZ"}},[["onmU",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);