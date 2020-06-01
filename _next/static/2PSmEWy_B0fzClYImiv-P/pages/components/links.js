(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{"+82B":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var o=t("mXGw"),r=t.n(o),i=t("r6IM"),s=r.a.createElement;function a(){return s(i.a,{component:"button",variant:"body2",onClick:function(){console.info("I'm a button.")}},"Button Link")}},"1GbG":function(e,n){e.exports='/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from \'react\';\nimport Link from \'@material-ui/core/Link\';\n\nexport default function ButtonLink() {\n  return (\n    <Link\n      component="button"\n      variant="body2"\n      onClick={() => {\n        console.info("I\'m a button.");\n      }}\n    >\n      Button Link\n    </Link>\n  );\n}\n'},"2xBb":function(e,n){e.exports='/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from \'react\';\nimport Link from \'@material-ui/core/Link\';\n\nexport default function ButtonLink() {\n  return (\n    <Link\n      component="button"\n      variant="body2"\n      onClick={() => {\n        console.info("I\'m a button.");\n      }}\n    >\n      Button Link\n    </Link>\n  );\n}\n'},"3TRK":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var o=t("mXGw"),r=t.n(o),i=t("yZEQ"),s=t("WLtd"),a=t("r6IM"),c=t("Oy88"),p=r.a.createElement,l=Object(i.a)((function(e){return Object(s.a)({root:{"& > * + *":{marginLeft:e.spacing(2)}}})}));function d(){var e=l(),n=function(e){return e.preventDefault()};return p(c.a,{className:e.root},p(a.a,{href:"#",onClick:n},"Link"),p(a.a,{href:"#",onClick:n,color:"inherit"},'color="inherit"'),p(a.a,{href:"#",onClick:n,variant:"body2"},'variant="body2"'))}},"3TTA":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/links",function(){return t("Ebzj")}])},"6kFM":function(e,n){e.exports='---\ncomponents: Link\n---\n\n# \u0421\u0441\u044b\u043b\u043a\u0438\n\n<p class="description">\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 Link \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043b\u0435\u0433\u043a\u043e \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043a\u0435\u0440\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0446\u0432\u0435\u0442\u0430\u043c\u0438 \u0438 \u0441\u0442\u0438\u043b\u044f\u043c\u0438 \u0442\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0432\u0430\u0448\u0435\u0439 \u0442\u0435\u043c\u044b.</p>\n\n## \u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438\n\nThe Link component is built on top of the [Typography](/api/typography/) component. You can leverage its properties.\n\n{{"demo": "pages/components/links/Links.js"}}\n\nHowever, the Link component has different default properties than the Typography component:\n\n- `color="primary"` as the link needs to stand out.\n- `variant="inherit"` as the link will, most of the time, be used as a child of a Typography component.\n\n## \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c\n\nWhen you use `target="_blank"` with Links, it is [recommended](https://developers.google.com/web/tools/lighthouse/audits/noopener) to always set `rel="noopener"` or `rel="noreferrer"` when linking to third party content.\n\n- `rel="noopener"` prevents the new page from being able to access the `window.opener` property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL.\n- `rel="noreferrer"` has the same effect, but also prevents the *Referer* header from being sent to the new page. \u26a0\ufe0f Removing the referrer header will affect analytics.\n\n## \u0421\u0442\u043e\u0440\u043e\u043d\u043d\u044f\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438\n\nOne common use case is to perform navigation on the client only, without an HTTP round-trip to the server. The `Link` component provides a property to handle this use case: `component`.\n\nHere is an [integration example with react-router](/guides/composition/#link).\n\n## \u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)\n\n- When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use [specific descriptions](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).\n- For the best user experience, links should stand out from the text on the page.\n- If a link doesn\'t have a meaningful href, [it should be rendered using a `<button>` element](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md).\n\n{{"demo": "pages/components/links/ButtonLink.js"}}'},Ebzj:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var o=t("mXGw"),r=t.n(o),i=t("e+1t"),s=t("kVtE"),a=r.a.createElement,c=t("rgaP"),p=t("Qtwx");function l(e){var n=e.demos,t=e.docs;return a(i.a,{demos:n,docs:t,requireDemo:c})}l.getInitialProps=function(){var e=Object(s.a)({pageFilename:"components/links",requireRaw:p});return{demos:e.demos,docs:e.docs}}},EgVI:function(e,n){e.exports='---\ncomponents: crwdns90722:0crwdne90722:0\n---\n\n# crwdns90724:0crwdne90724:0\n\n<p class="description">crwdns90726:0crwdne90726:0</p>\n\n## crwdns90728:0crwdne90728:0\n\ncrwdns90730:0crwdne90730:0 crwdns90732:0crwdne90732:0\n\ncrwdns90734:0crwdne90734:0\n\ncrwdns90736:0crwdne90736:0\n\n- crwdns90738:0crwdne90738:0\n- crwdns90740:0crwdne90740:0\n\n## crwdns102544:0crwdne102544:0\n\ncrwdns102546:0crwdne102546:0\n\n- crwdns102548:0crwdne102548:0 crwdns102550:0crwdne102550:0\n- crwdns102552:0crwdne102552:0 crwdns102554:0crwdne102554:0\n\n## crwdns102556:0crwdne102556:0\n\ncrwdns102558:0crwdne102558:0 crwdns102560:0crwdne102560:0\n\ncrwdns102562:0crwdne102562:0\n\n## crwdns102564:0crwdne102564:0\n\ncrwdns102566:0crwdne102566:0\n\n- crwdns102568:0crwdne102568:0 crwdns102570:0crwdne102570:0\n- crwdns102572:0crwdne102572:0\n- crwdns102574:0crwdne102574:0\n\ncrwdns102576:0crwdne102576:0'},Gpaf:function(e,n){e.exports="/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Link from '@material-ui/core/Link';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > * + *': {\n      marginLeft: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function Links() {\n  const classes = useStyles();\n  const preventDefault = (event) => event.preventDefault();\n\n  return (\n    <Typography className={classes.root}>\n      <Link href=\"#\" onClick={preventDefault}>\n        Link\n      </Link>\n      <Link href=\"#\" onClick={preventDefault} color=\"inherit\">\n        {'color=\"inherit\"'}\n      </Link>\n      <Link href=\"#\" onClick={preventDefault} variant=\"body2\">\n        {'variant=\"body2\"'}\n      </Link>\n    </Typography>\n  );\n}\n"},ILmY:function(e,n){e.exports='---\ncomponents: Link\n---\n\n# Links\n\n<p class="description">Mit der Link-Komponente kannst du Ankerelemente auf einfache Weise an deine Designfarben und Typografiestile anpassen.</p>\n\n## Einfache Links\n\nDie Link-Komponente wird auf der [Typography](/api/typography/) Komponente aufgebaut. Sie k\xf6nnen diese Eigenschaften nutzen.\n\n{{"demo": "pages/components/links/Links.js"}}\n\nHowever, the Link component has different default properties than the Typography component:\n\n- `color="primary"` da der Link hervorstechen muss.\n- `variant="inherit"` as the link will, most of the time, be used as a child of a Typography component.\n\n## Sicherheit\n\nWhen you use `target="_blank"` with Links, it is [recommended](https://developers.google.com/web/tools/lighthouse/audits/noopener) to always set `rel="noopener"` or `rel="noreferrer"` when linking to third party content.\n\n- `rel="noopener"` prevents the new page from being able to access the `window.opener` property and ensures it runs in a separate process. Andernfalls kann die Zielseite Ihre Seite m\xf6glicherweise auf eine b\xf6swillige URL umleiten.\n- `rel="noreferrer"` has the same effect, but also prevents the *Referer* header from being sent to the new page. \u26a0\ufe0f Das entfernen des Referrer Headers kann Auswirkungen auf Analytics haben.\n\n## Drittanbieter-Routing Bibliothek\n\nOne common use case is to perform navigation on the client only, without an HTTP round-trip to the server. Die `Link`- Komponente bietet eine Eigenschaft f\xfcr diesen Anwendungsfall: `component`.\n\nHier ist ein [Integrationsbeispiel mit react-router](/guides/composition/#link).\n\n## Barrierefreiheit\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)\n\n- Vermeide generische Beschreibungen wie "Hier klicken" oder "Gehe zu" beim Erstellen eines Links. Verwende stattdessen [spezifische Beschreibungen](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).\n- For the best user experience, links should stand out from the text on the page.\n- Wenn ein Link keinen sinnvollen href hat, [sollte ein `<button>` Element verwendet werden](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md).\n\n{{"demo": "pages/components/links/ButtonLink.js"}}'},Iy6m:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var o=t("mXGw"),r=t.n(o),i=t("r6IM"),s=r.a.createElement;function a(){return s(i.a,{component:"button",variant:"body2",onClick:function(){console.info("I'm a button.")}},"Button Link")}},Qtwx:function(e,n,t){var o={"./ButtonLink.js":"1GbG","./ButtonLink.tsx":"2xBb","./Links.js":"Gpaf","./Links.tsx":"pkWY","./links-aa.md":"EgVI","./links-de.md":"ILmY","./links-es.md":"xrLW","./links-fr.md":"n5V1","./links-ja.md":"gKV7","./links-pt.md":"Tt9u","./links-ru.md":"6kFM","./links-zh.md":"V13U","./links.md":"WUs3"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="Qtwx"},Tt9u:function(e,n){e.exports='---\ncomponents: Link\n---\n\n# Links\n\n<p class="description">O componente Link permite que voc\xea personalize facilmente elementos de \xe2ncora com suas cores de tema e estilos de tipografia.</p>\n\n## Links simples\n\nO componente Link \xe9 constru\xeddo sobre o componente [Typography](/api/typography/). Voc\xea pode aproveitar suas propriedades.\n\n{{"demo": "pages/components/links/Links.js"}}\n\nNo entanto, o componente Link possui propriedades padr\xe3o diferentes do componente Typography:\n\n- `color="primary"` como o link precisa se destacar.\n- `variant="inherit"` como o link ser\xe1, na maioria das vezes, usado como filho de um componente Typography.\n\n## Seguran\xe7a\n\nQuando voc\xea usa `target="_blank"` com Links, \xe9 [recomendado](https://developers.google.com/web/tools/lighthouse/audits/noopener) sempre definir `rel="noopener"` ou `rel="noreferrer"` quando conectando a conte\xfado de terceiros.\n\n- `rel="noopener"` impede que a nova p\xe1gina possa acessar a propriedade `window.opener` e garante que ela seja executada em um processo separado. Sem isso, a p\xe1gina de destino pode potencialmente redirecionar sua p\xe1gina para uma URL mal-intencionada.\n- `rel="noreferrer"` tem o mesmo efeito, mas tamb\xe9m impede que o cabe\xe7alho *Referer* seja enviado para a nova p\xe1gina. \u26a0\ufe0f A remo\xe7\xe3o do cabe\xe7alho referrer afetar\xe1 a an\xe1lise.\n\n## Biblioteca de roteamento de terceiros\n\nUm caso de uso comum \xe9 executar a navega\xe7\xe3o apenas no lado do cliente, sem uma ida e volta HTTP ao servidor. O componente `Link` fornece uma propriedade para lidar com este caso: `component`.\n\nAqui est\xe1 um [exemplo de integra\xe7\xe3o com react-router](/guides/composition/#link).\n\n## Acessibilidade\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)\n\n- Ao fornecer o conte\xfado para o link, evite descri\xe7\xf5es gen\xe9ricas como "clique aqui" ou "v\xe1 para". Em vez disso, use [descri\xe7\xf5es espec\xedficas](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).\n- Para a melhor experi\xeancia do usu\xe1rio, os links devem se destacar do texto na p\xe1gina.\n- Se o link n\xe3o tem um href significativo, [ele deve ser renderizado usando um elemento `<button>`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md).\n\n{{"demo": "pages/components/links/ButtonLink.js"}}'},V13U:function(e,n){e.exports='---\ncomponents: Link\n---\n\n# Link \u94fe\u63a5\n\n<p class="description">\u94fe\u63a5\uff08Links\uff09\u7ec4\u4ef6\u5141\u8bb8\u60a8\u4f7f\u7528\u4e3b\u9898\u989c\u8272\u548c\u7248\u9762\u8bbe\u8ba1\u8f7b\u677e\u81ea\u5b9a\u4e49\u951a\u5b9a\u5143\u7d20\u3002</p>\n\n## \u7b80\u5355\u7684\u94fe\u63a5\n\n\u94fe\u63a5\uff08Links\uff09\u7ec4\u4ef6\u6784\u5efa\u5728 [\u7248\u9762\u8bbe\u8ba1\uff08Typography\uff09](/api/typography/) \u7ec4\u4ef6\u4e4b\u4e0a\u3002 \u60a8\u53ef\u4ee5\u5229\u7528\u5176\u5c5e\u6027\u3002\n\n{{"demo": "pages/components/links/Links.js"}}\n\n\u7136\u800c\uff0c\u94fe\u63a5\uff08Link\uff09\u7ec4\u4ef6\u6709\u7740\u4e0d\u540c\u4e8e\u7248\u9762\u8bbe\u8ba1\uff08Typography \uff09\u7ec4\u4ef6\u7684\u9ed8\u8ba4\u5c5e\u6027\n\n- \u5f53\u94fe\u63a5\u9700\u8981\u7a81\u51fa\u663e\u793a\uff0c\u4f7f\u7528 `color="primary"`\n- \u94fe\u63a5\u5728\u591a\u6570\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u88ab\u7528\u4e8e\u4f5c\u4e3a\u7248\u9762\u8bbe\u8ba1\uff08Typograpy\uff09\u7684\u5b50\u7ec4\u4ef6\uff0c\u8fd9\u79cd\u60c5\u51b5\u4f7f\u7528`variant="inherit"`\n\n## \u5b89\u5168\u63d0\u793a\n\n\u5f53\u4f60\u5728\u4f7f\u7528Link\u7ec4\u4ef6\u4e0b\u7684 `target="_blank"`\u65f6 \uff0c\u5e76\u540c\u65f6\u5728\u5173\u8054\u7b2c\u4e09\u65b9\u5185\u5bb9\u7684\u60c5\u51b5\u4e0b\uff0c [\u63a8\u8350](https://developers.google.com/web/tools/lighthouse/audits/noopener) \u59cb\u7ec8\u914d\u7f6e `rel ="noopener"` \u6216 `\u7684rel ="noreferrer"` \u3002\n\n- `rel="noopener"` \u963b\u6b62\u65b0\u9875\u9762\u8bbf\u95ee `window.opener` \u5c5e\u6027\u5e76\u786e\u4fdd\u5b83\u5206\u5f00\u5728\u4e0d\u540c\u7684\u8fdb\u7a0b\u4e2d\u8fd0\u884c\u3002 \u82e5\u4e0d\u5982\u6b64\uff0c\u76ee\u6807\u9875\u9762\u6709\u6f5c\u5728\u53ef\u80fd\u6027\u5c06\u4f60\u7684\u9875\u9762\u91cd\u5b9a\u5411\u81f3\u4e00\u4e2a\u6076\u610f\u7f51\u5740\n- `rel ="noreferrer"` \u5177\u6709\u76f8\u540c\u7684\u6548\u679c\uff0c\u4f46\u4e5f\u963b\u6b62\u5c06 *Referer* \u6807\u5934\u53d1\u9001\u5230\u65b0\u9875\u9762\u3002 \u26a0\ufe0f \u53bb\u9664referrer header\u4f1a\u5f71\u54cd\u5206\u6790\u7edf\u8ba1\n\n## Third-party routing library\uff08\u7b2c\u4e09\u65b9\u8def\u7531\u5e93\uff09\n\n\u4e00\u79cd\u5e38\u89c1\u7684\u7528\u4f8b\u662f\u4ec5\u5728\u5ba2\u6237\u7aef\u4e0a\u6267\u884c\u5bfc\u822a\uff0c\u800c\u65e0\u9700\u901a\u8fc7 HTTP \u5f80\u8fd4\u670d\u52a1\u5668\u3002 \u4e3a\u89e3\u51b3\u6b64\u7528\u4f8b `\u7ec4\u4ef6`\uff0c`Link` \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5c5e\u6027\uff1a\n\n\u8fd9\u6709\u4e00\u4e2a[\u4e0e react-router \u4ea4\u4e92\u7684\u4f8b\u5b50](/guides/composition/#link)\u3002\n\n## \u53ef\u8bbf\u95ee\u6027\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)\n\n- \u5f53\u63d0\u4f9b\u94fe\u63a5\u5bf9\u5e94\u7684\u5185\u5bb9\u65f6\uff0c\u907f\u514d\u4f7f\u7528\u6cdb\u6cdb\u7684\u63cf\u8ff0\uff0c\u6bd4\u5982\u201c\u70b9\u51fb\u8fd9\u91cc\u201d\u6216\u201c\u8df3\u8f6c\u201d\u4e4b\u7c7b\u7684\u8bcd\u8bed \u76f8\u53cd\u7684\uff0c\u8bf7\u4f7f\u7528 [\u5177\u4f53\u8be6\u7ec6\u7684\u63cf\u8ff0](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text)\u8bf4\u660e.\n- For the best user experience, links should stand out from the text on the page.\n- \u5982\u679c\u4e00\u4e2a\u94fe\u63a5\u6ca1\u6709\u8d4b\u4e88\u4e00\u4e2a\u6709\u610f\u4e49\u7684href\u503c, [\u5b83\u5e94\u8be5\u7528\u4e00\u4e2a `<\u6309\u94ae>` \u5143\u7d20](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)\u8868\u793a\n\n{{"demo": "pages/components/links/ButtonLink.js"}}'},WLtd:function(e,n,t){"use strict";function o(e){return e}t.d(n,"a",(function(){return o}))},WUs3:function(e,n){e.exports='---\ncomponents: Link\n---\n\n# Links\n\n<p class="description">The Link component allows you to easily customize anchor elements with your theme colors and typography styles.</p>\n\n## Simple links\n\nThe Link component is built on top of the [Typography](/api/typography/) component.\nYou can leverage its properties.\n\n{{"demo": "pages/components/links/Links.js"}}\n\nHowever, the Link component has different default properties than the Typography component:\n\n- `color="primary"` as the link needs to stand out.\n- `variant="inherit"` as the link will, most of the time, be used as a child of a Typography component.\n\n## Security\n\nWhen you use `target="_blank"` with Links, it is [recommended](https://developers.google.com/web/tools/lighthouse/audits/noopener) to always set `rel="noopener"` or `rel="noreferrer"` when linking to third party content.\n\n- `rel="noopener"` prevents the new page from being able to access the `window.opener` property and ensures it runs in a separate process.\n  Without this, the target page can potentially redirect your page to a malicious URL.\n- `rel="noreferrer"` has the same effect, but also prevents the _Referer_ header from being sent to the new page.\n  \u26a0\ufe0f Removing the referrer header will affect analytics.\n\n## Third-party routing library\n\nOne common use case is to perform navigation on the client only, without an HTTP round-trip to the server.\nThe `Link` component provides a property to handle this use case: `component`.\n\nHere is an [integration example with react-router](/guides/composition/#link).\n\n## Accessibility\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)\n\n- When providing the content for the link, avoid generic descriptions like "click here" or "go to".\n  Instead, use [specific descriptions](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).\n- For the best user experience, links should stand out from the text on the page.\n- If a link doesn\'t have a meaningful href, [it should be rendered using a `<button>` element](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md).\n\n{{"demo": "pages/components/links/ButtonLink.js"}}\n'},gKV7:function(e,n){e.exports='---\ncomponents: Link\n---\n\n# \u30ea\u30f3\u30af\n\n<p class="description">Link\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30c6\u30fc\u30de\u306e\u8272\u3068\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u30b9\u30bf\u30a4\u30eb\u3067\u30a2\u30f3\u30ab\u30fc\u8981\u7d20\u3092\u7c21\u5358\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002</p>\n\n## \u7c21\u5358\u306a\u30ea\u30f3\u30af\n\nLink\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001 [Typography](/api/typography/) \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4e0a\u306b\u69cb\u7bc9\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u305d\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002\n\n{{"demo": "pages/components/links/Links.js"}}\n\n\u305f\u3060\u3057\u3001Link\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001Typography\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u306f\u7570\u306a\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u307e\u3059\u3002\n\n- \u30ea\u30f3\u30af\u304c\u76ee\u7acb\u3064\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001`color="primary"`\u3068\u3057\u307e\u3059\u3002\n- \u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u30ea\u30f3\u30af\u306f\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5b50\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u305f\u3081\u3001`variant="inherit"` \u3068\u306a\u308a\u307e\u3059\u3002\n\n## \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\n\n\u30ea\u30f3\u30af\u3067 `target="_blank"` \u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30ea\u30f3\u30af\u3059\u308b\u969b\u306b\u3001`rel="noopener"` \u307e\u305f\u306f`rel="noreferrer"`\u3092\u5fc5\u305a\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3092[\u63a8\u5968\u3057\u307e\u3059\u3002](https://developers.google.com/web/tools/lighthouse/audits/noopener)\n\n- `rel="noopener"` \u306f\u3001\u65b0\u3057\u3044\u30da\u30fc\u30b8\u304c\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u3088\u3046\u306b`window.opener`\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3001\u5225\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002 \u3053\u308c\u304c\u306a\u3044\u3068\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u30da\u30fc\u30b8\u304c\u30da\u30fc\u30b8\u3092\u60aa\u610f\u306e\u3042\u308bURL\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\n- `rel="noreferrer"` \u306f\u540c\u3058\u52b9\u679c\u3092\u6301\u3061\u307e\u3059\u304c\u3001*Referer* \u30d8\u30c3\u30c0\u30fc\u304c\u65b0\u3057\u3044\u30da\u30fc\u30b8\u306b\u9001\u4fe1\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002 \u26a0\ufe0f\u30ea\u30d5\u30a1\u30e9\u30fc\u30d8\u30c3\u30c0\u30fc\u3092\u524a\u9664\u3059\u308b\u3068\u3001\u5206\u6790\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002\n\n## \u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u30e9\u30a4\u30d6\u30e9\u30ea\n\nOne common use case is to perform navigation on the client only, without an HTTP round-trip to the server. `Link` \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001\u3053\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\uff1a`component`\n\n\u3053\u3061\u3089\u306f [react-router\u3068\u306e\u7d71\u5408\u4f8b](/guides/composition/#link).\n\n## \u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)\n\n- \u30ea\u30f3\u30af\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u63d0\u4f9b\u3059\u308b\u3068\u304d\u306f\u3001\u300c\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af\u300d\u3084\u300c\u79fb\u52d5\u300d\u306a\u3069\u306e\u4e00\u822c\u7684\u306a\u8aac\u660e\u306f\u907f\u3051\u3066\u304f\u3060\u3055\u3044\u3002 \u4ee3\u308f\u308a\u306b\u3001 [\u7279\u5b9a\u306e\u8aac\u660e](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text)\u4f7f\u7528\u3057\u307e\u3059\u3002\n- \u6700\u9ad8\u306e\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u5f97\u308b\u306b\u306f\u3001\u30da\u30fc\u30b8\u4e0a\u306e\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u30ea\u30f3\u30af\u3092\u76ee\u7acb\u305f\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n- \u30ea\u30f3\u30af\u306b\u610f\u5473\u306e\u3042\u308bhref\u304c\u306a\u3044\u5834\u5408\u3001[`<button>`\u8981\u7d20\u3092\u4f7f\u7528\u3057\u3066\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)\n\n{{"demo": "pages/components/links/ButtonLink.js"}}'},n5V1:function(e,n){e.exports='---\ncomponents: Link\n---\n\n# Liens\n\n<p class="description">Le composant Lien vous permet de personnaliser facilement les \xe9l\xe9ments de types ancre avec les couleurs de votre th\xe8me et les styles de typographie.</p>\n\n## Simple links\n\nThe Link component is built on top of the [Typography](/api/typography/) component. You can leverage its properties.\n\n{{"demo": "pages/components/links/Links.js"}}\n\nHowever, the Link component has different default properties than the Typography component:\n\n- `color="primary"` as the link needs to stand out.\n- `variant="inherit"` as the link will, most of the time, be used as a child of a Typography component.\n\n## Security\n\nWhen you use `target="_blank"` with Links, it is [recommended](https://developers.google.com/web/tools/lighthouse/audits/noopener) to always set `rel="noopener"` or `rel="noreferrer"` when linking to third party content.\n\n- `rel="noopener"` prevents the new page from being able to access the `window.opener` property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL.\n- `rel="noreferrer"` has the same effect, but also prevents the *Referer* header from being sent to the new page. \u26a0\ufe0f Removing the referrer header will affect analytics.\n\n## Biblioth\xe8que de routage tierce\n\nOne common use case is to perform navigation on the client only, without an HTTP round-trip to the server. The `Link` component provides a property to handle this use case: `component`.\n\nHere is an [integration example with react-router](/guides/composition/#link).\n\n## Accessibilit\xe9\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)\n\n- When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use [specific descriptions](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).\n- For the best user experience, links should stand out from the text on the page.\n- If a link doesn\'t have a meaningful href, [it should be rendered using a `<button>` element](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md).\n\n{{"demo": "pages/components/links/ButtonLink.js"}}'},nNpV:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var o=t("mXGw"),r=t.n(o),i=t("yZEQ"),s=t("r6IM"),a=t("Oy88"),c=r.a.createElement,p=Object(i.a)((function(e){return{root:{"& > * + *":{marginLeft:e.spacing(2)}}}}));function l(){var e=p(),n=function(e){return e.preventDefault()};return c(a.a,{className:e.root},c(s.a,{href:"#",onClick:n},"Link"),c(s.a,{href:"#",onClick:n,color:"inherit"},'color="inherit"'),c(s.a,{href:"#",onClick:n,variant:"body2"},'variant="body2"'))}},pkWY:function(e,n){e.exports="/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from 'react';\nimport { makeStyles, createStyles, Theme } from '@material-ui/core/styles';\nimport Link from '@material-ui/core/Link';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme: Theme) =>\n  createStyles({\n    root: {\n      '& > * + *': {\n        marginLeft: theme.spacing(2),\n      },\n    },\n  }),\n);\n\nexport default function Links() {\n  const classes = useStyles();\n  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();\n\n  return (\n    <Typography className={classes.root}>\n      <Link href=\"#\" onClick={preventDefault}>\n        Link\n      </Link>\n      <Link href=\"#\" onClick={preventDefault} color=\"inherit\">\n        {'color=\"inherit\"'}\n      </Link>\n      <Link href=\"#\" onClick={preventDefault} variant=\"body2\">\n        {'variant=\"body2\"'}\n      </Link>\n    </Typography>\n  );\n}\n"},rgaP:function(e,n,t){var o={"./ButtonLink.js":"+82B","./ButtonLink.tsx":"Iy6m","./Links.js":"nNpV","./Links.tsx":"3TRK"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="rgaP"},xrLW:function(e,n){e.exports='---\ncomponents: Link\n---\n\n# Enlaces\n\n<p class="description">El componente Link permite personalizar f\xe1cilmente el elemento de enlace con los colores de su Theme y estilos de tipograf\xeda.</p>\n\n## Enlaces simples\n\nThe Link component is built on top of the [Typography](/api/typography/) component. You can leverage its properties.\n\n{{"demo": "pages/components/links/Links.js"}}\n\nHowever, the Link component has different default properties than the Typography component:\n\n- `color="primary"` as the link needs to stand out.\n- `variant="inherit"` as the link will, most of the time, be used as a child of a Typography component.\n\n## Security\n\nWhen you use `target="_blank"` with Links, it is [recommended](https://developers.google.com/web/tools/lighthouse/audits/noopener) to always set `rel="noopener"` or `rel="noreferrer"` when linking to third party content.\n\n- `rel="noopener"` prevents the new page from being able to access the `window.opener` property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL.\n- `rel="noreferrer"` has the same effect, but also prevents the *Referer* header from being sent to the new page. \u26a0\ufe0f Removing the referrer header will affect analytics.\n\n## Librer\xeda externa de routing\n\nOne common use case is to perform navigation on the client only, without an HTTP round-trip to the server. The `Link` component provides a property to handle this use case: `component`.\n\nHere is an [integration example with react-router](/guides/composition/#link).\n\n## Accesibilidad\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)\n\n- When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use [specific descriptions](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).\n- For the best user experience, links should stand out from the text on the page.\n- If a link doesn\'t have a meaningful href, [it should be rendered using a `<button>` element](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md).\n\n{{"demo": "pages/components/links/ButtonLink.js"}}'}},[["3TTA",0,2,1,3,5,4,6,7,8,9,10,11,12,14,13,15,16,17,18]]]);