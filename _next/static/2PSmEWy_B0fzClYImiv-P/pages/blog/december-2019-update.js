(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{"9cPI":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("mXGw"),o=n.n(a),i=n("RJ+P"),r=n("kVtE"),c=o.a.createElement,s=n("BSfP");function p(e){var t=e.docs;return c(i.a,{docs:t})}p.getInitialProps=function(){var e=Object(r.a)({pageFilename:"blog/december-2019-update",requireRaw:s});return{demos:e.demos,docs:e.docs}}},BSfP:function(e,t,n){var a={"./december-2019-update.md":"n7xy"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id="BSfP"},CTgH:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("z3IF"),o=n("2Fjn"),i=n("azxR"),r=n("mXGw"),c=n.n(r),s=n("PDtE"),p=n("yZEQ"),u=n("Uoj6"),l=c.a.createElement,d=Object(p.a)((function(e){return{root:Object(i.a)({paddingTop:96},e.breakpoints.up("lg"),{paddingLeft:e.spacing(6),paddingRight:e.spacing(6)})}}));function m(e){var t=e.className,n=Object(o.a)(e,["className"]),i=d();return l(u.a,Object(a.a)({component:"main",id:"main-content",maxWidth:"md",tabIndex:-1,className:Object(s.a)(i.root,t)},n))}},DfE6:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/december-2019-update",function(){return n("9cPI")}])},"RJ+P":function(e,t,n){"use strict";var a=n("azxR"),o=n("mXGw"),i=n.n(o),r=n("XpU0"),c=n("EWRx"),s=n("KFoC"),p=n("CTgH"),u=n("r6IM"),l=n("xPcB"),d=n("juyJ"),m=i.a.createElement,g=m(l.a,null);t.a=Object(r.default)((function(e){return{root:{flexGrow:1},back:{display:"block",marginBottom:e.spacing(4)},container:{marginBottom:e.spacing(20),maxWidth:680+e.spacing(12),"& .markdownElement":Object(a.a)({fontSize:18,lineHeight:1.7},e.breakpoints.up("md"),{paddingRight:e.spacing(4)}),"& img, & video":{display:"block",margin:"auto"},"& .blog-description":{fontSize:e.typography.pxToRem(14),textAlign:"center",color:e.palette.text.secondary,"& a":{color:e.palette.text.secondary,textDecoration:"underline"}}}}}))((function(e){var t=e.classes,n=e.docs.en,a=n.description,o=n.rendered,i=n.title;return m(s.a,null,m(c.a,{title:"".concat(i," - Material-UI"),description:a}),m("div",{className:t.root},m(p.a,{className:t.container},m(u.a,{href:"https://medium.com/material-ui",rel:"nofollow",color:"textSecondary",className:t.back},"< Back to blog"),o.map((function(e,t){return m(d.a,{key:t,renderedMarkdown:e})}))),g))}))},n7xy:function(e,t){e.exports='---\ndescription: Here are the most significant improvements in December.\n---\n\n# December 2019 Update\n\nOlivier Tassinari. January 7, 2020.\n\nHere are the most significant improvements in December:\n\n- \ud83d\udea8 We have introduced a new [Alert](https://material-ui.com/components/alert/) component in the lab, thanks to **[@dimitropoulos](https://github.com/dimitropoulos)** ([#18702](https://github.com/mui-org/material-ui/pull/18702)). The component also supports composition with a [Snackbar](/components/snackbars/#customized-snackbars).\n\n  ![Alert](/static/blog/december-2019-update/alert.png)\n\n  <p class="blog-description">Standard variant</p>\n\n  ![Alert](/static/blog/december-2019-update/alert-filled.png)\n\n  <p class="blog-description">Filled variant</p>\n\n- \ud83d\udc64 We have added [stacking](/components/avatars/#grouped) support to the avatar.\n\n  ![Stacking](/static/blog/december-2019-update/stacking.png)\n\n- \u2195\ufe0f We have added [vertical](/components/buttons/#group-orientation) support to the button group.\n\n  ![Vertical button](/static/blog/december-2019-update/vertical-buttons.png)\n\n- \ud83c\udf0e We have almost doubled the number of supported [locales](/guides/localization/#localization) from 13 to 22, thanks to our awesome contributors. [Help us](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/locale/index.js) double this number next month \ud83d\ude80!\n\nBut this summary is just scratching the surface. We have accepted 168 commits from 73 different contributors. We have changed 1,059 files with 13,468 additions and 8,584 deletions.\n\n## Our roadmap intent for January\n\n*(We\'ll do our best, no guarantee!)*\n\n- \ud83d\udc84 We will keep working on a new [pagination](https://github.com/mui-org/material-ui/pull/19049) component. You can already [preview it](https://deploy-preview-19049--material-ui.netlify.app/components/pagination/) (lead by [**@mbrookes**](https://github.com/mbrookes)).\n\n  ![Pagination](/static/blog/december-2019-update/pagination.png)\n\n- \ud83d\udcc5 We will keep working on a major upgrade of the [date/time picker](https://github.com/mui-org/material-ui-pickers/issues/1293) components. We are working on desktop and range support (lead by [**@dmtrKovalenko**](https://github.com/dmtrKovalenko)).\n\n  ![Date picker](/static/blog/december-2019-update/date-picker.png)\n\n- \ud83e\uddee We will keep working on a new [data grid](https://github.com/mui-org/material-ui/pull/18872) component. You can already [preview it](https://deploy-preview-18872--material-ui.netlify.app/components/data-grid/) (lead by [**@oliviertassinari**](https://github.com/oliviertassinari)).\n\n  ![Data grid](/static/blog/december-2019-update/data-grid.png)\n\n\u2753 Please upvote our [GitHub issues](https://github.com/mui-org/material-ui/issues) if you want something specific. The number of \ud83d\udc4d helps us to prioritize.\n'}},[["DfE6",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,22]]]);