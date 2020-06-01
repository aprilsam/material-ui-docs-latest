(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{CTgH:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n("z3IF"),a=n("2Fjn"),r=n("azxR"),i=n("mXGw"),s=n.n(i),l=n("PDtE"),c=n("yZEQ"),m=n("Uoj6"),d=s.a.createElement,u=Object(c.a)((function(e){return{root:Object(r.a)({paddingTop:96},e.breakpoints.up("lg"),{paddingLeft:e.spacing(6),paddingRight:e.spacing(6)})}}));function p(e){var t=e.className,n=Object(a.a)(e,["className"]),r=u();return d(m.a,Object(o.a)({component:"main",id:"main-content",maxWidth:"md",tabIndex:-1,className:Object(l.a)(r.root,t)},n))}},GwWe:function(e,t,n){var o={"./2019.md":"orMU"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="GwWe"},"RJ+P":function(e,t,n){"use strict";var o=n("azxR"),a=n("mXGw"),r=n.n(a),i=n("XpU0"),s=n("EWRx"),l=n("KFoC"),c=n("CTgH"),m=n("r6IM"),d=n("xPcB"),u=n("juyJ"),p=r.a.createElement,h=p(d.a,null);t.a=Object(i.default)((function(e){return{root:{flexGrow:1},back:{display:"block",marginBottom:e.spacing(4)},container:{marginBottom:e.spacing(20),maxWidth:680+e.spacing(12),"& .markdownElement":Object(o.a)({fontSize:18,lineHeight:1.7},e.breakpoints.up("md"),{paddingRight:e.spacing(4)}),"& img, & video":{display:"block",margin:"auto"},"& .blog-description":{fontSize:e.typography.pxToRem(14),textAlign:"center",color:e.palette.text.secondary,"& a":{color:e.palette.text.secondary,textDecoration:"underline"}}}}}))((function(e){var t=e.classes,n=e.docs.en,o=n.description,a=n.rendered,r=n.title;return p(l.a,null,p(s.a,{title:"".concat(r," - Material-UI"),description:o}),p("div",{className:t.root},p(c.a,{className:t.container},p(m.a,{href:"https://medium.com/material-ui",rel:"nofollow",color:"textSecondary",className:t.back},"< Back to blog"),a.map((function(e,t){return p(u.a,{key:t,renderedMarkdown:e})}))),h))}))},WE7F:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019",function(){return n("XNi/")}])},"XNi/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var o=n("mXGw"),a=n.n(o),r=n("RJ+P"),i=n("kVtE"),s=a.a.createElement,l=n("GwWe");function c(e){var t=e.docs;return s(r.a,{docs:t})}c.getInitialProps=function(){var e=Object(i.a)({pageFilename:"blog/2019",requireRaw:l});return{demos:e.demos,docs:e.docs}}},orMU:function(e,t){e.exports="---\ndescription: 2019 was a great year for Material-UI. It puts us on an exciting path to solve even greater challenges in the coming years!\n---\n\n# 2019 in review and beyond\n\nThe core team. January 25, 2020.\n\n2019 was a great year for Material-UI.\nIt puts us on an exciting path to solve even greater challenges in the coming years!\n\n## Growth\n\n- \ud83d\udce6 From 2.2M to [3.2M](https://www.npmjs.com/package/@material-ui/core) downloads per month.\n- \ud83d\udcc8 From 1.6M to 3.1M unique visitors per year on the documentation.\n- \u2b50\ufe0f From 43.1k to 53.3k stars, leave us [yours \ud83c\udf1f](https://github.com/mui-org/material-ui).\n- \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 From 1,064 to [1,581](https://github.com/mui-org/material-ui/graphs/contributors) contributors.\n- \ud83d\udcb0 Grew financial support by 76% in 2019, compared to 2018.\n- \ud83c\udfe2 From 1.5 to 3 full-time equivalent developers, spread among multiple financially supported [core team members](https://material-ui.com/discover-more/team/).\n\nThe numbers speak for themselves. 2019 was super exciting and made Material-UI one of the most advanced open-source, React-based, UI component libraries!\n\n## In review\n\nWhen we started 2019, we were celebrating the launch of the **first stable release** of the framework and iterating to polish it (looking at the list of breaking changes, v3 is almost identical to v1).\nWe thought we were almost done, and that we had done the hardest part with the release of the stable version. All we would need to do going forward was to keep up with the Material Design specification and fix a couple of bugs.\n\nWe soon realized that we could do way more. It was just the beginning :D.\nSome of the key factors:\n\n- The results of the [2019 Developer Survey](https://medium.com/material-ui/2019-material-ui-developer-survey-results-c9589434bbcf) have highlighted the immense potential for working on advanced components and features, especially for enterprise users.\nDevelopers are craving for a UI framework that they can learn once (e.g. few breaking changes, only one solution per problem) and use everywhere (e.g. comprehensive, customizable, high-quality).\n- Bootstrap had successfully released [a theme store](https://themes.getbootstrap.com/).\nFollowing this approach opened an opportunity to capture a fraction of the value Material-UI creates for its users, and funnel it back into R&D on the framework.\n- The market for paid UI components is in the order of a couple of $100m/year,\nwith dozens of companies positioned in this market.\nWhile React is only one technology among many (jQuery, Angular, ASP.NET, Blazor, Vue, WPF, UWP, etc) with which to build a UI, but we believe that Web and React will become the dominant technology in the next 5 years for enterprises. Material-UI is uniquely positioned to address this market with non-MIT features.\n- Building UIs should be simpler, it still too slow and complex.\nDesigners and developers should benefit from a more integrated experience.\n- Every now and then, we witness the appearance of a new React UI component library built from scratch ([UXPin](https://adele.uxpin.com/) keeps track of some of them).\nAnd every time we asked ourselves, \"what could have we done differently to empower this library\"?\nWe believe that starting from scratch, while maximizing freedom, is incredibly inefficient.\nMost UI libraries need the same features but are implemented with a wide spectrum of accessibility, developer experience, and overall design quality.\nWe won't rest until we successfully unify these efforts. It's a long term mission and will probably take years. The foundation will be the release of an un-styled version of our components.\n\n## Achievements\n\n- We have released [v4](/blog/material-ui-v4-is-out/).\n- We have introduced many new components (some in the core, some in the lab):\n  - [Autocomplete](/components/autocomplete/)\n  - [Backdrop](/components/backdrop/)\n  - [Breadcrumbs](/components/breadcrumbs/)\n  - [ButtonGroup](/components/button-group/)\n  - [Container](/components/container/)\n  - [Link](/components/links/)\n  - [Rating](/components/rating/)\n  - [Skeleton](/components/skeleton/)\n  - [Slider](/components/slider/)\n  - [TextareaAutosize](/components/textarea-autosize/)\n  - [TreeView](/components/tree-view/)\n- We have fixed a significant number of [accessibility issues](https://github.com/mui-org/material-ui/issues?q=is%3Aissue+label%3Aaccessibility+is%3Aclosed).\n- We have introduced global class names.\n- We have migrated the whole codebase to hooks.\n- We migrated all the demos to TypeScript (while also offering transpiled JS demos).\n- We introduced [native tree-shaking](/guides/minimizing-bundle-size/) support.\n- We introduced [built-in localization](/guides/localization/).\n- We removed a good number of external dependencies and increased the `features/bundle size` density.\n- We introduced an [icon search page](/components/material-icons/).\n- We released a [store for Material-UI](https://material-ui.com/store/).\n\n## Looking at 2020\n\n2019 was great, 2020 is going to be even more exciting!\nWe will continue in the same direction.\n\n### Survey\n\nThe developer survey we ran [last year](/blog/2019-developer-survey-results/) was so insightful that we plan to run it every year.\nIt's a great opportunity for us to adjust the strategy and to pause to analyze the outcome of the actions we took in the previous year.\n\n### Open source roadmap\n\nMost of the time we work in the open. Here's our [public roadmap](/discover-more/roadmap).\nWe plan to release a new major around the end of the year (v5).\nWe will promote components that are in the lab to the core, migrate to styled-components, and more.\n\n### Store\n\nWe will increase the depth of content available with more themes and templates.\nWe have recently released a Sketch design library, and are planning to support Figma, and Adobe XD too. For Framer, we have made the key components available as a [Framer package](https://packages.framer.com/package/material-ui/material-ui).\n\n### Enterprise\n\nWe plan to release an enterprise class offering, starting with the data grid.\nEnterprise features will build on the open source version of the components.\n\n### Hiring\n\nWe are looking for a [full-time software developer](/company/software-engineer/) to join us!\n\nIf you want to help us onboard more full-time developers in the team, [here are a couple of ways](/getting-started/faq/#material-ui-is-awesome-how-can-i-support-the-project).\nSpreading the word to other developers that are looking for a great UI framework is also extremely helpful \ud83d\ude4c.\n"}},[["WE7F",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,22]]]);