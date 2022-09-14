"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6672],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(20411);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42242:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(20411),o=n(88795),r="tabItem_kWFq";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},99862:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(60953),o=n(20411),r=n(88795),i=n(76190),l=n(15043),s=n(8873),u=n(11113),p="tabList_LErV",m="tabItem_NVZ2";function c(e){var t,n,i=e.lazy,c=e.block,d=e.defaultValue,h=e.values,k=e.groupId,g=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),S=w.tabGroupChoices,N=w.setTabGroupChoices,x=(0,o.useState)(b),C=x[0],T=x[1],j=[],z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=S[k];null!=O&&O!==C&&v.some((function(e){return e.value===O}))&&T(O)}var E=function(e){var t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==C&&(z(t),T(a),null!=k&&N(k,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=j.indexOf(e.currentTarget)+1;n=null!=(a=j[o])?a:j[0];break;case"ArrowLeft":var r,i=j.indexOf(e.currentTarget)-1;n=null!=(r=j[i])?r:j[j.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},g)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:E,onClick:E},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},67325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var a=n(60953),o=n(59005),r=(n(20411),n(70167)),i=n(99862),l=n(42242),s=["components"],u={sidebar_position:1,tags:["Development","Packages","Tokens","Intro"],title:"Intro"},p=void 0,m={unversionedId:"development/tokens/intro",id:"version-0.1.0-alpha/development/tokens/intro",title:"Intro",description:"Learn how to use design-tokens for any project or OS platform.",source:"@site/versioned_docs/version-0.1.0-alpha/development/tokens/intro.md",sourceDirName:"development/tokens",slug:"/development/tokens/intro",permalink:"/docs/development/tokens/intro",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/tokens/intro.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Tokens",permalink:"/docs/tags/tokens"},{label:"Intro",permalink:"/docs/tags/intro"}],version:"0.1.0-alpha",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Packages","Tokens","Intro"],title:"Intro"},sidebar:"development",previous:{title:"Migration",permalink:"/docs/development/getting-started/migration"},next:{title:"Colors",permalink:"/docs/development/tokens/colors"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"What is a token?",id:"what-is-a-token",level:2},{value:"Naming convention",id:"naming-convention",level:2},{value:"Usage",id:"usage",level:2},{value:"Web",id:"web",level:3},{value:"CSS Usage",id:"css-usage",level:4},{value:"With the normalize setup",id:"with-the-normalize-setup",level:5},{value:"Manually importing",id:"manually-importing",level:6},{value:"SCSS",id:"scss",level:4},{value:"JS Usage",id:"js-usage",level:4},{value:"1. Using the tokens meta-data with normalize",id:"1-using-the-tokens-meta-data-with-normalize",level:5},{value:"2. Using the tokens without normalize",id:"2-using-the-tokens-without-normalize",level:5},{value:"3. Using tokens with inline styles",id:"3-using-tokens-with-inline-styles",level:5},{value:"Web Meta",id:"web-meta",level:3},{value:"CSS Properties",id:"css-properties",level:4},{value:"Normalized data",id:"normalized-data",level:4},{value:"Mobile",id:"mobile",level:3},{value:"Why are the tokens limited to colors?",id:"why-are-the-tokens-limited-to-colors",level:2}],h={toc:d};function k(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("strong",null,(0,r.kt)("p",{class:"page-subheadline",markdown:"1"},"Learn how to use design-tokens for any project or OS platform.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To use tokens via the web, just install the package."),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"We include the CSS tokens in our ",(0,r.kt)("a",{parentName:"strong",href:"/docs/development/getting-started/installation#normalizecss"},"normalize setup")),", so there is no need to install this package unless you are using CSS-in-JS or do not want to add the normalize reset.")),(0,r.kt)("h2",{id:"what-is-a-token"},"What is a token?"),(0,r.kt)("p",null,'A "token" is a word used to define a style property for any platform. So, instead of having to specify CSS variable, iOS/Swift style, Android style variable, etc. We can just say "token" which refers to the style variables of any platform.'),(0,r.kt)("h2",{id:"naming-convention"},"Naming convention"),(0,r.kt)("p",null,"In order to make our tokens scalable and easier to use, we use the following naming convetion for our themes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# "usage" is the only property required\n\nps-[sentiment?]-[usage]-[prominence?]-[interaction?]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sentiment"),' - "default", "action", "info", "success", "warning", "danger"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Usage (required)"),' - "background", "border", "navigation", "surface", "text"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prominence"),' - "default", "weak", "medium", "strong", "inverse"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interaction"),' - "default", "hover", "active", "visited"')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All optional fields are ignored in the token syntax.")),(0,r.kt)("p",null,"What this looks like in terms of an actual token can be seen in an example of some of the tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Example of tokens"',title:'"Example',of:!0,'tokens"':!0},":root {\n  --ps-text: #000;\n  --ps-action-background: blue;\n  --ps-action-text: #fff;\n  --ps-danger-surface: red;\n}\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The design-tokens package is the single source of truth for colors and themes in the Pluralsight Design System Suite. This is also how we define styles in headless-styles package."),(0,r.kt)("h3",{id:"web"},"Web"),(0,r.kt)("p",null,"We ship CSS, SCSS variables, JS es6/commonJS modules, and meta-data for web projects. This way, you can choose whichever solution works best for your project."),(0,r.kt)("h4",{id:"css-usage"},"CSS Usage"),(0,r.kt)("p",null,"There are two ways to use the tokens via CSS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"With the normalize setup (recommended)"),(0,r.kt)("li",{parentName:"ol"},"Manually importing")),(0,r.kt)("h5",{id:"with-the-normalize-setup"},"With the normalize setup"),(0,r.kt)("p",null,"We ship all the tokens and themes in our normalize setup - so there is no additional work for you to do. After you have the normalize file in your project, just simply use the tokens in your CSS file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CSS usage example"',title:'"CSS',usage:!0,'example"':!0},"button {\n  background-color: var(--ps-action-background);\n  color: var(--ps-action-text);\n}\n\nbutton:hover {\n  background-color: var(--ps-action-background-hover);\n}\n")),(0,r.kt)("h6",{id:"manually-importing"},"Manually importing"),(0,r.kt)("p",null,"If you would prefer not to use our normalize setup, you just need to import the tokens in your main CSS file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CSS importing example',title:'"CSS',importing:!0,example:!0},"@import url('@pluralsight/design-tokens/build/css/variables.css');\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Themes ",(0,r.kt)("strong",{parentName:"p"},"do not")," ship with the manual import. This setup will deliver the dark theme tokens only.")),(0,r.kt)("h4",{id:"scss"},"SCSS"),(0,r.kt)("p",null,"One of the biggest benefits to using SCSS is the pre-processing which means your project will not store any tokens into memory. This will help improve the performance of your app dramatically as it grows throughout time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Importing tokens into your SCSS"',title:'"Importing',tokens:!0,into:!0,your:!0,'SCSS"':!0},"@use '@pluralsight/design-tokens/scss/_variables.scss';\n")),(0,r.kt)("p",null,"Then, use it as normal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="SCSS usage (example)"',title:'"SCSS',usage:!0,'(example)"':!0},"button {\n  background-color: $ps-action-background;\n  color: $ps-action-text;\n}\n")),(0,r.kt)("h4",{id:"js-usage"},"JS Usage"),(0,r.kt)("p",null,"The first step for this route is to ",(0,r.kt)("a",{parentName:"p",href:"#installation"},"install the tokens package"),". Our JS tokens support both es6 and commonJS environments."),(0,r.kt)("p",null,"There are a few ways you can utilize the JS tokens:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using the ",(0,r.kt)("a",{parentName:"li",href:"#css-properties"},"tokens meta-data")," combined with the normalize setup (recommended)"),(0,r.kt)("li",{parentName:"ol"},"Using the tokens without the normalize"),(0,r.kt)("li",{parentName:"ol"},"Using the tokens with inline styles")),(0,r.kt)("h5",{id:"1-using-the-tokens-meta-data-with-normalize"},"1. Using the tokens meta-data with normalize"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#css-properties"},"CSS Properties section"),"."),(0,r.kt)("h5",{id:"2-using-the-tokens-without-normalize"},"2. Using the tokens without normalize"),(0,r.kt)("p",null,"If you choose to opt-out of using the normalize setup, you will only have ",(0,r.kt)("strong",{parentName:"p"},"static tokens")," available for use. This means you will ",(0,r.kt)("strong",{parentName:"p"},"need to create your own theme-provider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example use without normalize"',title:'"Example',use:!0,without:!0,'normalize"':!0},"import { psBackground } from '@pluralsight/design-tokens'\n\nconst styles = css({\n  backgroundColor: psBackground,\n})\n")),(0,r.kt)("h5",{id:"3-using-tokens-with-inline-styles"},"3. Using tokens with inline styles"),(0,r.kt)("p",null,"You can also use the static JS tokens inline as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example using inline styles"',title:'"Example',using:!0,inline:!0,'styles"':!0},"<button\n  style={{\n    backgroundColor: psLightActionBackground,\n  }}\n/>\n")),(0,r.kt)("h3",{id:"web-meta"},"Web Meta"),(0,r.kt)("p",null,"Sometimes there are specific scenarios where you just need something more than just a token. We provide two meta-data files for these use cases."),(0,r.kt)("h4",{id:"css-properties"},"CSS Properties"),(0,r.kt)("p",null,"If you are looking for a single-source-of-truth for your JS usage, we provide a module that exports the JS tokens that have the CSS token names for the values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="CSS Properties example"',title:'"CSS',Properties:!0,'example"':!0},"export const psBackground = 'var(--ps-background)'\n")),(0,r.kt)("p",null,"Just use the meta import path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { psBackground } from '@pluralsight/design-tokens/meta/cssProperties'\n")),(0,r.kt)("p",null,"This is much more performant if you are using a solution that creates CSS files from your JS defintions (i.e. ",(0,r.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Usage example"',title:'"Usage','example"':!0},"import styled from 'styled-components'\nimport { psBackground } from '@pluralsight/design-tokens/meta/cssProperties'\n\nconst Button = styled(Button)`\n  background-color: ${psBackground};\n`\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you combine this with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/getting-started/installation#normalizecss"},"normalize setup"),", theming will be baked into your CSS-in-JS styles!")),(0,r.kt)("h4",{id:"normalized-data"},"Normalized data"),(0,r.kt)("p",null,"If you need some raw normalized data, we also have you covered in our normalize.json file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of normalized data"',title:'"Example',of:!0,normalized:!0,'data"':!0},'{\n  groupItems: ["default", "action", "danger", "info", "success", "warning"],\n  groups: {\n    "default": {\n      "background": "#000",\n      "backgroundWeak": "#111",\n      "text": "#fff"\n    },\n    ...\n  }\n}\n')),(0,r.kt)("p",null,"Just import it into your project via your bundler loader that supports JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import tokenData from '@pluralsight/design-tokens/meta/normalize.json'\n")),(0,r.kt)("h3",{id:"mobile"},"Mobile"),(0,r.kt)("p",null,"For mobile, we will ship iOS, Swift, and Android files to import into your projects via our repo in the ",(0,r.kt)("strong",{parentName:"p"},"build-mobile")," directory in the ",(0,r.kt)("strong",{parentName:"p"},"packages/design-tokens")," location which will contain all of the resources mentioned above."),(0,r.kt)("h2",{id:"why-are-the-tokens-limited-to-colors"},"Why are the tokens limited to colors?"),(0,r.kt)("p",null,"During our R&D phase, we have done extensive research to understand the best way to deliver tokens in the most performant way so that the customer experience does not have a negative impact regarding render performance & load times."),(0,r.kt)("p",null,"In this research we have found that there ",(0,r.kt)("em",{parentName:"p"},"is")," a threshold where CSS variables do negatively impact browser performance (just like specific properties do). For example, in some case studies, using a variable for ",(0,r.kt)("inlineCode",{parentName:"p"},"padding")," throughout your app can slow down render performance by ",(0,r.kt)("strong",{parentName:"p"},"up to 2 seconds"),"!"),(0,r.kt)("p",null,"During this research we have also compared solutions that are currently being executed by teams (i.e. Twitter, Github, etc.) drawing a correlation to slower apps using more CSS variables (in the web)."),(0,r.kt)("p",null,"Thus, the current standard which seems to keep a performant load time (under 1 second) is to ",(0,r.kt)("strong",{parentName:"p"},"keep variables limited to only colors and the quantity being defined up to 57"),"."),(0,r.kt)("p",null,"This is the standard we align with for the design-tokens package. Additionally, because we have a semantic naming pattern, we are delivering every color needed for our entire Web UI Kit (except for rare/uncommonly used colors)."))}k.isMDXComponent=!0}}]);