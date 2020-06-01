(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{CTgH:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var i=o("z3IF"),n=o("2Fjn"),a=o("azxR"),r=o("mXGw"),s=o.n(r),c=o("PDtE"),u=o("yZEQ"),l=o("Uoj6"),m=s.a.createElement,p=Object(u.a)((function(e){return{root:Object(a.a)({paddingTop:96},e.breakpoints.up("lg"),{paddingLeft:e.spacing(6),paddingRight:e.spacing(6)})}}));function d(e){var t=e.className,o=Object(n.a)(e,["className"]),a=p();return m(l.a,Object(i.a)({component:"main",id:"main-content",maxWidth:"md",tabIndex:-1,className:Object(c.a)(a.root,t)},o))}},L87a:function(e,t){e.exports="---\ndescription: Here are the most significant improvements in October.\n---\n\n# October 2019 Update\n\nOlivier Tassinari. November 8, 2019.\n\nHere are the most significant improvements in October:\n\n- \ud83d\udd0d We have introduced a new autocomplete / combo box / multi-select component [in the lab](/components/autocomplete/).\n\n  ![combobox](/static/blog/september-2019-update/combobox.png)\n\n  <p class=\"blog-description\">Combo box (limited options)</p>\n\n- \ud83d\udcda We have changed the demos to automatically inline a small code preview when possible.\n\n  ![code preview](/static/blog/october-2019-update/preview.png)\n\n- \u267f\ufe0f We have fixed 9 accessibility issues ([#18141](https://github.com/mui-org/material-ui/pull/18141), [#18142](https://github.com/mui-org/material-ui/pull/18142), [#17972](https://github.com/mui-org/material-ui/pull/17972), [#18146](https://github.com/mui-org/material-ui/pull/18146), [#17939](https://github.com/mui-org/material-ui/pull/17939), [#17892](https://github.com/mui-org/material-ui/pull/17892), [#17897](https://github.com/mui-org/material-ui/pull/17897), [#17870](https://github.com/mui-org/material-ui/pull/17870), [#18204](https://github.com/mui-org/material-ui/pull/18204)).\n\n- \ud83d\udce6 We have introduced [codesandbox-ci](https://ci.codesandbox.io/status/mui-org/material-ui/pr/18238). It can be useful when you want to live on the edge. For instance, you might want to rely on an unreleased commit that contains a bug fix.\n\nBut this summary is just scratching the surface. We have accepted 182 commits from 68 different contributors. We have changed 1,157 files with 31,312 additions and 9,771 deletions.\n\n## Our roadmap intent for November\n\n*(We'll do our best, no guarantee!)*\n\n- \ud83d\udc85 We will initiate an update of our styling solution.\nIt should cover styled-component [#6115](https://github.com/mui-org/material-ui/pull/#6115), the system [#15561](https://github.com/mui-org/material-ui/issues/15561), dynamic props [#15573](https://github.com/mui-org/material-ui/issues/15573) and an unstyled version [#6218](https://github.com/mui-org/material-ui/pull/6218).\n\n- \ud83d\udcc5 We will start to work on a [major upgrade](https://github.com/mui-org/material-ui-pickers/issues/1293) of the date/time picker components.\n\n- \ud83e\uddee We will start to work on a data table component. The core will be open-source. The advanced features of the data grid will be behind an enterprise subscription \u2b50\ufe0f.\nThis is an effort [of our roadmap](/discover-more/roadmap/) to better answer enterprise needs. To get a rough idea of what's coming, you can read: https://uxdesign.cc/design-better-data-tables-4ecc99d23356.\n\n- \u2753 Please upvote our [GitHub issues](https://github.com/mui-org/material-ui/issues) if you want something specific. The number of \ud83d\udc4d helps us to prioritize.\n\nThese are three major efforts, we will likely need the whole quarter (Q4) to make significant progress. Stay tuned.\n"},"RJ+P":function(e,t,o){"use strict";var i=o("azxR"),n=o("mXGw"),a=o.n(n),r=o("XpU0"),s=o("EWRx"),c=o("KFoC"),u=o("CTgH"),l=o("r6IM"),m=o("xPcB"),p=o("juyJ"),d=a.a.createElement,g=d(m.a,null);t.a=Object(r.default)((function(e){return{root:{flexGrow:1},back:{display:"block",marginBottom:e.spacing(4)},container:{marginBottom:e.spacing(20),maxWidth:680+e.spacing(12),"& .markdownElement":Object(i.a)({fontSize:18,lineHeight:1.7},e.breakpoints.up("md"),{paddingRight:e.spacing(4)}),"& img, & video":{display:"block",margin:"auto"},"& .blog-description":{fontSize:e.typography.pxToRem(14),textAlign:"center",color:e.palette.text.secondary,"& a":{color:e.palette.text.secondary,textDecoration:"underline"}}}}}))((function(e){var t=e.classes,o=e.docs.en,i=o.description,n=o.rendered,a=o.title;return d(c.a,null,d(s.a,{title:"".concat(a," - Material-UI"),description:i}),d("div",{className:t.root},d(u.a,{className:t.container},d(l.a,{href:"https://medium.com/material-ui",rel:"nofollow",color:"textSecondary",className:t.back},"< Back to blog"),n.map((function(e,t){return d(p.a,{key:t,renderedMarkdown:e})}))),g))}))},V4Db:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return u}));var i=o("mXGw"),n=o.n(i),a=o("RJ+P"),r=o("kVtE"),s=n.a.createElement,c=o("o/fs");function u(e){var t=e.docs;return s(a.a,{docs:t})}u.getInitialProps=function(){var e=Object(r.a)({pageFilename:"blog/october-2019-update",requireRaw:c});return{demos:e.demos,docs:e.docs}}},dCz6:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/october-2019-update",function(){return o("V4Db")}])},"o/fs":function(e,t,o){var i={"./october-2019-update.md":"L87a"};function n(e){var t=a(e);return o(t)}function a(e){if(!o.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id="o/fs"}},[["dCz6",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,21]]]);