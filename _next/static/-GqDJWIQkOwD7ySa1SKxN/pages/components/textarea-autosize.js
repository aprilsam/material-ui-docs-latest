(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{"++0O":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("mXGw"),o=n.n(a),r=n("+NIe"),i=(0,o.a.createElement)(r.a,{rowsMax:4,"aria-label":"maximum height",placeholder:"Maximum 4 rows",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});function s(){return i}},"+9Li":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textarea-autosize",function(){return n("rUG1")}])},"+NIe":function(e,t,n){"use strict";var a=n("z3IF"),o=n("bZJ2"),r=n("2Fjn"),i=n("FdmI"),s=n.n(i),u=n("mXGw"),c=n("25Ld"),m=n("+rSm"),p=u.createElement;function d(e,t){return s()(e[t],10)||0}var x=u.useLayoutEffect,l={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},h=u.forwardRef((function(e,t){var n=e.onChange,i=e.rows,s=e.rowsMax,h=e.rowsMin,f=void 0===h?1:h,g=e.style,z=e.value,w=Object(r.a)(e,["onChange","rows","rowsMax","rowsMin","style","value"]),T=i||f,M=u.useRef(null!=z).current,j=u.useRef(null),y=Object(m.a)(t,j),A=u.useRef(null),v=u.useRef(0),b=u.useState({}),E=b[0],H=b[1],R=u.useCallback((function(){var t=j.current,n=window.getComputedStyle(t),a=A.current;a.style.width=n.width,a.value=t.value||e.placeholder||"x","\n"===a.value.slice(-1)&&(a.value+=" ");var o=n["box-sizing"],r=d(n,"padding-bottom")+d(n,"padding-top"),i=d(n,"border-bottom-width")+d(n,"border-top-width"),u=a.scrollHeight-r;a.value="x";var c=a.scrollHeight-r,m=u;T&&(m=Math.max(Number(T)*c,m)),s&&(m=Math.min(Number(s)*c,m));var p=(m=Math.max(m,c))+("border-box"===o?r+i:0),x=Math.abs(m-u)<=1;H((function(e){return v.current<20&&(p>0&&Math.abs((e.outerHeightStyle||0)-p)>1||e.overflow!==x)?(v.current+=1,{overflow:x,outerHeightStyle:p}):e}))}),[s,T,e.placeholder]);u.useEffect((function(){var e=Object(c.a)((function(){v.current=0,R()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[R]),x((function(){R()})),u.useEffect((function(){v.current=0}),[z]);return p(u.Fragment,null,p("textarea",Object(a.a)({value:z,onChange:function(e){v.current=0,M||R(),n&&n(e)},ref:y,rows:T,style:Object(o.a)({height:E.outerHeightStyle,overflow:E.overflow?"hidden":null},g)},w)),p("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:A,tabIndex:-1,style:Object(o.a)(Object(o.a)({},l),g)}))}));t.a=h},"/Qk9":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("mXGw"),o=n.n(a),r=n("+NIe"),i=(0,o.a.createElement)(r.a,{"aria-label":"minimum height",rowsMin:3,placeholder:"Minimum 3 rows"});function s(){return i}},"0Zrc":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("mXGw"),o=n.n(a),r=n("+NIe"),i=(0,o.a.createElement)(r.a,{rowsMax:4,"aria-label":"maximum height",placeholder:"Maximum 4 rows",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});function s(){return i}},"1aqs":function(e,t){e.exports='import React from \'react\';\nimport TextareaAutosize from \'@material-ui/core/TextareaAutosize\';\n\nexport default function MaxHeightTextarea() {\n  return (\n    <TextareaAutosize\n      rowsMax={4}\n      aria-label="maximum height"\n      placeholder="Maximum 4 rows"\n      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n          ut labore et dolore magna aliqua."\n    />\n  );\n}\n'},"3agn":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("mXGw"),o=n.n(a),r=n("+NIe"),i=(0,o.a.createElement)(r.a,{"aria-label":"minimum height",rowsMin:3,placeholder:"Minimum 3 rows"});function s(){return i}},"5DzH":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("mXGw"),o=n.n(a),r=n("+NIe"),i=(0,o.a.createElement)(r.a,{"aria-label":"empty textarea",placeholder:"Empty"});function s(){return i}},"5pSD":function(e,t){e.exports='---\ntitle: Componente React de texto autoajust\xe1vel\ncomponents: TextareaAutosize\n---\n\n# Texto autoajust\xe1vel\n\n<p class="description">Um componente de texto para React que se ajusta conforme o conte\xfado.</p>\n\n- \ud83d\udce6 [2.1 kB gzipped](/size-snapshot)\n\nO componente `TextareaAutosize` ajusta automaticamente a altura do textarea em eventos de redimensionamento de teclado e janela.\n\n## Vazio\n\n{{"demo": "pages/components/textarea-autosize/EmptyTextarea.js"}}\n\n## Altura m\xednima\n\n{{"demo": "pages/components/textarea-autosize/MinHeightTextarea.js"}}\n\n## Altura m\xe1xima\n\n{{"demo": "pages/components/textarea-autosize/MaxHeightTextarea.js"}}'},"6BKR":function(e,t){e.exports='---\ntitle: Textarea Autosize React component\ncomponents: TextareaAutosize\n---\n\n# Textarea Autosize\n\n<p class="description">A textarea component for React which grows with content.</p>\n\n- \ud83d\udce6 [2.1 kB gzipped](/size-snapshot)\n\nThe `TextareaAutosize` component automatically adjust the textarea height on keyboard and window resize events.\n\n## Empty\n\n{{"demo": "pages/components/textarea-autosize/EmptyTextarea.js"}}\n\n## Minimale H\xf6he\n\n{{"demo": "pages/components/textarea-autosize/MinHeightTextarea.js"}}\n\n## Maximale H\xf6he\n\n{{"demo": "pages/components/textarea-autosize/MaxHeightTextarea.js"}}'},"8S99":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("mXGw"),o=n.n(a),r=n("+NIe"),i=(0,o.a.createElement)(r.a,{"aria-label":"empty textarea",placeholder:"Empty"});function s(){return i}},"8z/n":function(e,t){e.exports='---\ntitle: Textarea Autosize React component\ncomponents: TextareaAutosize\n---\n\n# Textarea \u81ea\u52a8\u8c03\u6574\u5927\u5c0f\n\n<p class="description">\u4e00\u4e2a\u968f\u5185\u5bb9\u589e\u957f\u7684React\u7684\u6587\u672c\u6846\u7ec4\u4ef6\u3002</p>\n\n- \ud83d\udce6 [2.1 kB gzipped](/size-snapshot)\n\n`TextareaAutosize` \u7ec4\u4ef6\u5c06\u81ea\u52a8\u8c03\u6574\u952e\u76d8\u548c\u7a97\u53e3\u5927\u5c0f\u4e8b\u4ef6\u53d1\u751f\u65f6\u7684\u6587\u672c\u9ad8\u5ea6\u3002\n\n## \u7a7a\u767d\n\n{{"demo": "pages/components/textarea-autosize/EmptyTextarea.js"}}\n\n## \u6700\u5c0f\u9ad8\u5ea6\n\n{{"demo": "pages/components/textarea-autosize/MinHeightTextarea.js"}}\n\n## \u6700\u5927\u9ad8\u5ea6\n\n{{"demo": "pages/components/textarea-autosize/MaxHeightTextarea.js"}}'},"9sMV":function(e,t){e.exports='---\ntitle: Textarea Autosize React component\ncomponents: TextareaAutosize\n---\n\n# Textarea Autosize\n\n<p class="description">A textarea component for React which grows with content.</p>\n\n- \ud83d\udce6 [2.1 kB gzipped](/size-snapshot)\n\nThe `TextareaAutosize` component automatically adjust the textarea height on keyboard and window resize events.\n\n## Empty\n\n{{"demo": "pages/components/textarea-autosize/EmptyTextarea.js"}}\n\n## Minimum height\n\n{{"demo": "pages/components/textarea-autosize/MinHeightTextarea.js"}}\n\n## Maximum height\n\n{{"demo": "pages/components/textarea-autosize/MaxHeightTextarea.js"}}'},"BA/9":function(e,t){e.exports='---\ntitle: Textarea Autosize React component\ncomponents: TextareaAutosize\n---\n\n# Textarea Autosize (taille auto)\n\n<p class="description">A textarea component for React which grows with content.</p>\n\n- \ud83d\udce6 [2.1 kB gzipped](/size-snapshot)\n\nThe `TextareaAutosize` component automatically adjust the textarea height on keyboard and window resize events.\n\n## Empty\n\n{{"demo": "pages/components/textarea-autosize/EmptyTextarea.js"}}\n\n## Minimum height\n\n{{"demo": "pages/components/textarea-autosize/MinHeightTextarea.js"}}\n\n## Maximum height\n\n{{"demo": "pages/components/textarea-autosize/MaxHeightTextarea.js"}}'},BlSc:function(e,t,n){var a={"./EmptyTextarea.js":"8S99","./EmptyTextarea.tsx":"5DzH","./MaxHeightTextarea.js":"++0O","./MaxHeightTextarea.tsx":"0Zrc","./MinHeightTextarea.js":"3agn","./MinHeightTextarea.tsx":"/Qk9"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="BlSc"},EBxh:function(e,t){e.exports="import React from 'react';\nimport TextareaAutosize from '@material-ui/core/TextareaAutosize';\n\nexport default function EmptyTextarea() {\n  return <TextareaAutosize aria-label=\"empty textarea\" placeholder=\"Empty\" />;\n}\n"},EoqF:function(e,t){e.exports='---\ntitle: crwdns92388:0crwdne92388:0\ncomponents: crwdns92390:0crwdne92390:0\n---\n\n# crwdns92392:0crwdne92392:0\n\n<p class="description">crwdns92394:0crwdne92394:0</p>\n\n- crwdns92396:0crwdne92396:0\n\ncrwdns103610:0crwdne103610:0\n\n## crwdns92398:0crwdne92398:0\n\ncrwdns103612:0crwdne103612:0\n\n## crwdns92402:0crwdne92402:0\n\ncrwdns103614:0crwdne103614:0\n\n## crwdns92406:0crwdne92406:0\n\ncrwdns103616:0crwdne103616:0'},"Hzy/":function(e,t){e.exports="import React from 'react';\nimport TextareaAutosize from '@material-ui/core/TextareaAutosize';\n\nexport default function MinHeightTextarea() {\n  return <TextareaAutosize aria-label=\"minimum height\" rowsMin={3} placeholder=\"Minimum 3 rows\" />;\n}\n"},"Pi/r":function(e,t){e.exports='---\ntitle: Textarea Autosize React component\ncomponents: TextareaAutosize\n---\n\n# Textarea Autosize\n\n<p class="description">A textarea component for React which grows with content.</p>\n\n- \ud83d\udce6 [2.1 kB gzipped](/size-snapshot)\n\nThe `TextareaAutosize` component automatically adjust the textarea height on keyboard and window resize events.\n\n## Empty\n\n{{"demo": "pages/components/textarea-autosize/EmptyTextarea.js"}}\n\n## Minimum height\n\n{{"demo": "pages/components/textarea-autosize/MinHeightTextarea.js"}}\n\n## Maximum height\n\n{{"demo": "pages/components/textarea-autosize/MaxHeightTextarea.js"}}\n'},gufJ:function(e,t){e.exports="import React from 'react';\nimport TextareaAutosize from '@material-ui/core/TextareaAutosize';\n\nexport default function MinHeightTextarea() {\n  return <TextareaAutosize aria-label=\"minimum height\" rowsMin={3} placeholder=\"Minimum 3 rows\" />;\n}\n"},j5HH:function(e,t){e.exports='---\ntitle: Textarea Autosize React component\ncomponents: TextareaAutosize\n---\n\n# Textarea Autosize\n\n<p class="description">A textarea component for React which grows with content.</p>\n\n- \ud83d\udce6 [2.1 kB comprimido](/size-snapshot)\n\nThe `TextareaAutosize` component automatically adjust the textarea height on keyboard and window resize events.\n\n## Empty\n\n{{"demo": "pages/components/textarea-autosize/EmptyTextarea.js"}}\n\n## Minimum height\n\n{{"demo": "pages/components/textarea-autosize/MinHeightTextarea.js"}}\n\n## Maximum height\n\n{{"demo": "pages/components/textarea-autosize/MaxHeightTextarea.js"}}'},jZMr:function(e,t){e.exports='import React from \'react\';\nimport TextareaAutosize from \'@material-ui/core/TextareaAutosize\';\n\nexport default function MaxHeightTextarea() {\n  return (\n    <TextareaAutosize\n      rowsMax={4}\n      aria-label="maximum height"\n      placeholder="Maximum 4 rows"\n      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n          ut labore et dolore magna aliqua."\n    />\n  );\n}\n'},pBuU:function(e,t,n){var a={"./EmptyTextarea.js":"EBxh","./EmptyTextarea.tsx":"vOp5","./MaxHeightTextarea.js":"jZMr","./MaxHeightTextarea.tsx":"1aqs","./MinHeightTextarea.js":"gufJ","./MinHeightTextarea.tsx":"Hzy/","./textarea-autosize-aa.md":"EoqF","./textarea-autosize-de.md":"6BKR","./textarea-autosize-es.md":"j5HH","./textarea-autosize-fr.md":"BA/9","./textarea-autosize-ja.md":"rLtZ","./textarea-autosize-pt.md":"5pSD","./textarea-autosize-ru.md":"9sMV","./textarea-autosize-zh.md":"8z/n","./textarea-autosize.md":"Pi/r"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="pBuU"},rLtZ:function(e,t){e.exports='---\ntitle: Textarea Autosize React component\ncomponents: TextareaAutosize\n---\n\n# \u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u306e\u81ea\u52d5\u30b5\u30a4\u30ba\u8abf\u6574\n\n<p class="description">\u30b3\u30f3\u30c6\u30f3\u30c4\u3068\u3068\u3082\u306b\u5927\u304d\u304f\u306a\u308bReact\u306e\u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002</p>\n\n- [2.1 kB gzipped](/size-snapshot).\n\nThe `TextareaAutosize` component automatically adjust the textarea height on keyboard and window resize events.\n\n## \u7a7a\u306e\u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\n\n{{"demo": "pages/components/textarea-autosize/EmptyTextarea.js"}}\n\n## \u6700\u5c0f\u9ad8\u3055\n\n{{"demo": "pages/components/textarea-autosize/MinHeightTextarea.js"}}\n\n## \u6700\u5927\u9ad8\u3055\n\n{{"demo": "pages/components/textarea-autosize/MaxHeightTextarea.js"}}'},rUG1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n("mXGw"),o=n.n(a),r=n("e+1t"),i=n("kVtE"),s=o.a.createElement,u=n("BlSc"),c=n("pBuU");function m(e){var t=e.demos,n=e.docs;return s(r.a,{demos:t,docs:n,requireDemo:u})}m.getInitialProps=function(){var e=Object(i.a)({pageFilename:"components/textarea-autosize",requireRaw:c});return{demos:e.demos,docs:e.docs}}},vOp5:function(e,t){e.exports="import React from 'react';\nimport TextareaAutosize from '@material-ui/core/TextareaAutosize';\n\nexport default function EmptyTextarea() {\n  return <TextareaAutosize aria-label=\"empty textarea\" placeholder=\"Empty\" />;\n}\n"}},[["+9Li",0,2,1,3,4,5,6,7,8,9,10,11,12,14,15,13,16,17,18]]]);