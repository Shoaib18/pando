"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70674],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77907:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),o=n(88795),r="tabItem_C7m6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},98568:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(60953),o=n(45721),r=n(88795),i=n(63631),l=n(99595),s=n(2825),u=n(13554),p="tabList_C4Ea",c="tabItem_W41a";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,h=e.values,y=e.groupId,f=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,x=w.setTabGroupChoices,S=(0,o.useState)(v),C=S[0],B=S[1],T=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var j=N[y];null!=j&&j!==C&&k.some((function(e){return e.value===j}))&&B(j)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==C&&(P(t),B(a),null!=y&&x(y,String(a)))},O=function(e){var t,n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":var a,o=T.indexOf(e.currentTarget)+1;n=null!=(a=T[o])?a:T[0];break;case"ArrowLeft":var r,i=T.indexOf(e.currentTarget)-1;n=null!=(r=T[i])?r:T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onClick:E},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},7497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(60953),o=n(59005),r=(n(45721),n(70167)),i=n(98568),l=n(77907),s=["components"],u={tags:["PSDS Classic"],title:"Migration"},p=void 0,c={unversionedId:"development/getting-started/migration",id:"development/getting-started/migration",title:"Migration",description:"Learn how to migrate from PSDS Classic.",source:"@site/docs/development/getting-started/migration.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/migration",permalink:"/docs/next/development/getting-started/migration",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/development/getting-started/migration.md",tags:[{label:"PSDS Classic",permalink:"/docs/next/tags/psds-classic"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["PSDS Classic"],title:"Migration"},sidebar:"development",previous:{title:"Support",permalink:"/docs/next/development/getting-started/support"},next:{title:"Intro",permalink:"/docs/next/development/tokens/intro"}},m={},d=[{value:"Why should you migrate?",id:"why-should-you-migrate",level:2},{value:"Step by step",id:"step-by-step",level:2},{value:"Step 0 - Add the setup",id:"step-0---add-the-setup",level:3},{value:"Step 1 - Installation",id:"step-1---installation",level:3},{value:"Step 2 - Create",id:"step-2---create",level:3},{value:"Example 1 - Traditional way",id:"example-1---traditional-way",level:4},{value:"Example 2 - Style caching",id:"example-2---style-caching",level:4},{value:"Example 3, CSS-in-JS",id:"example-3-css-in-js",level:4},{value:"Step 3 - Rinse and repeat",id:"step-3---rinse-and-repeat",level:3},{value:"Advanced Topics",id:"advanced-topics",level:2},{value:"Themeing",id:"themeing",level:3},{value:"Migrate slowly",id:"migrate-slowly",level:3},{value:"Sprint 1",id:"sprint-1",level:4},{value:"Sprint 2",id:"sprint-2",level:4},{value:"Sprint 3 (Tech-debt week)",id:"sprint-3-tech-debt-week",level:4},{value:"You do you",id:"you-do-you",level:3}],h={toc:d};function y(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("strong",null,(0,r.kt)("p",{className:"page-subheadline",markdown:"1"},"Learn how to migrate from ",(0,r.kt)("a",{href:"https://github.com/pluralsight/design-system",target:"_blank",rel:"noopener noreferrer"},"PSDS Classic"),".")),(0,r.kt)("p",null,"Any major release or new framework has its breaking changes and PD isn't an exception. However, since this is a completely different design it should be easy to transition on your own terms - no matter the size or complexity of your project. To make this process more efficient we've listed the recommended migrations steps, along with solutions for the most common problems you might face."),(0,r.kt)("h2",{id:"why-should-you-migrate"},"Why should you migrate?"),(0,r.kt)("p",null,"In a few words, upgrading to PD is critical to a fast and stable UI experience. Numerous bugs are naturally fixed since Classic, and we no longer expect to build new features in it. ",(0,r.kt)("strong",{parentName:"p"},"Even if you don't plan to use the entire PD suite")," your projects will still get benefits from the upgrade."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Small components (Button, etc.) will provide an improved experience to both your projects and customer experiences"),(0,r.kt)("li",{parentName:"ul"},"A renewed focus on accessbility, performance, and good practices"),(0,r.kt)("li",{parentName:"ul"},"Improved user experience for various projects (scalable APIs)"),(0,r.kt)("li",{parentName:"ul"},"New capabilities (can work with any tech stack so you can pivot easier)")),(0,r.kt)("p",null,"And of course a very active and safe development cycle."),(0,r.kt)("h2",{id:"step-by-step"},"Step by step"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Don't worry if your team or project isn't quite ready for the full PD takeover just yet! This guide will let you migrate ",(0,r.kt)("strong",{parentName:"p"},"without introducing breaking changes"),".")),(0,r.kt)("p",null,"The biggest benefit of PD is that it ",(0,r.kt)("em",{parentName:"p"},"only owns styles and accessbility")," and ",(0,r.kt)("em",{parentName:"p"},"is not a component library")," which means you can scale or customize to whatever your situation/features may require."),(0,r.kt)("p",null,"Below we'll look at migrating the Button component which will be the same pattern you can use for all the PD use cases."),(0,r.kt)("h3",{id:"step-0---add-the-setup"},"Step 0 - Add the setup"),(0,r.kt)("p",null,"To make sure we get the intended visual result of Headless-styles, replace the Classic font/normalize with our ",(0,r.kt)("strong",{parentName:"p"},"new")," font and normalize setup in your project HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"head"),":"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Both the fonts and normalize.css for v2 contain different rules and styles which may cause temporary visual breaking changes to the UI. Don't be alarmed, the migration path will resolve it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Add the new required CSS setup" showLineNumbers',title:'"Add',the:!0,new:!0,required:!0,CSS:!0,'setup"':!0,showLineNumbers:!0},'<meta name="viewport" content="initial-scale=1, width=device-width" />\n<link\n  rel="preload"\n  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"\n  as="font"\n  type="font/woff2"\n  crossorigin\n/>\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/fonts.css"\n/>\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css"\n/>\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to remove the old font and normalize imports in your code base or bundlers if they exist.")),(0,r.kt)("h3",{id:"step-1---installation"},"Step 1 - Installation"),(0,r.kt)("p",null,"In order to use PD, we need to get it into your project first. For most projects, you will only need to install the headless-styles and icons packages."),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/{headless-styles,icons}\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/{headless-styles,icons}\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are a React user, we also provide a helper library that contains some custom hooks to enhance the user and developer experience: ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/react-utils/use-auto-format-date"},"React Utils Library"),".")),(0,r.kt)("p",null,"All of our packages are lightweight because they don't rely on a laundry list of dependencies to install, so you don't have to worry about adding additional overhead to your bundle size."),(0,r.kt)("h3",{id:"step-2---create"},"Step 2 - Create"),(0,r.kt)("p",null,"Since Headless-styles is not a component library, you will create a new Button component in your project. This will allow you to have full control of your implementation while PD provides the styles and accessibility needs."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is considered a React/Component best practice to create components with a ",(0,r.kt)("strong",{parentName:"p"},"single responsibility"),'. An example would be to create an "EditButton" or "CancelButton". This helps to create a component which ',(0,r.kt)("strong",{parentName:"p"},"by nature will have less risk of bugs and code impact."))),(0,r.kt)("h4",{id:"example-1---traditional-way"},"Example 1 - Traditional way"),(0,r.kt)("p",null,"In this example, we are creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"CancelButton")," for your project by creating a new CancelButton component using Typescript."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/Buttons/CancelButton.tsx" showLineNumbers',title:'"components/Buttons/CancelButton.tsx"',showLineNumbers:!0},"import { memo } from 'react'\nimport { getButtonProps } from '@pluralsight/headless-styles'\nimport type { ButtonOptions } from '@pluralsight/headless-styles/types'\n\nconst cancelBtnProps = getButtonProps({\n  sentiment: 'danger',\n})\n\nfunction CancelButton(props: ButtonOptions) {\n  return (\n    <button {...props} {...cancelBtnProps.button}>\n      Cancel\n    </button>\n  )\n}\n\nexport default memo(CancelButton)\n")),(0,r.kt)("p",null,"Let's break down what this example is doing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The component is only responsible for a single responsibility: displaying a Cancel Button"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 Keeping non-required logic outside of the component improves performance"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 Because this custom component will accept props that are outside of the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"Primitive Types"),", wrapping it in ",(0,r.kt)("inlineCode",{parentName:"li"},"memo")," will improve performance.")),(0,r.kt)("p",null,"Now, you can migrate all the Buttons in your app that are used for cancel actions. \ud83c\udf89"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"showLineNumbers",showLineNumbers:!0},"- import { Button } from '@pluralsight/design-system-button';\n+ import CancelButton from './components/Buttons/CancelButton';\n\nfunction SomeForm(props) {\n  return (\n    <form>\n      ...\n-     <Button appearance={Button.appearances.secondary} onClick={handleClick}>Cancel</Button>\n+     <CancelButton type=\"button\" onClick={handleClick} />\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"But, there's another option that will allow even less work:"),(0,r.kt)("h4",{id:"example-2---style-caching"},"Example 2 - Style caching"),(0,r.kt)("p",null,"Since a button is a simple component, there's really no need to create a custom component for display. Instead, we can cache the style props we receive from the Headless Styles helper and just reuse those."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="styles/buttons.js" showLineNumbers',title:'"styles/buttons.js"',showLineNumbers:!0},"import { getButtonProps } from '@pluralsight/headless-styles'\n\nexport const dangerBtnStyles = getButtonProps({\n  sentiment: 'danger',\n})\n\nexport const actionBtnStyles = getButtonProps()\n\nexport const defaultBtnStyles = getButtonProps({\n  sentiment: 'default',\n})\n\nexport const outlineBtnStyles = getButtonProps({\n  usage: 'outline',\n})\n\nexport const textBtnStyles = getButtonProps({\n  usage: 'text',\n})\n")),(0,r.kt)("p",null,"With this approach, you can use the React JSX ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," and just spread the styles. Depending on your code base, this may be the most scalable approach."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"showLineNumbers",showLineNumbers:!0},"- import { Button } from '@pluralsight/design-system-button';\n+ import { dangerBtnStyles } from './styles/buttons';\n\nfunction SomeForm(props) {\n  return (\n    <form>\n      ...\n-     <Button appearance={Button.appearances.secondary} onClick={handleClick}>Cancel</Button>\n+     <button {...dangerBtnStyles.button} type=\"button\" onClick={handleClick}>Cancel</button>\n    </form>\n  )\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you have a larger code base, combining these two approaches might allow for a better fit with long-term development. The flexibility is up to you! \ud83d\ude04")),(0,r.kt)("h4",{id:"example-3-css-in-js"},"Example 3, CSS-in-JS"),(0,r.kt)("p",null,"If you are a team that uses CSS-in-JS, you can just as easily use the same strategy above with your preferred tech stack. In this example, we'll use React with styled-components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/CancelButton.tsx" showLineNumbers',title:'"components/CancelButton.tsx"',showLineNumbers:!0},"import styled from 'styled-components'\nimport { getButtonProps } from '@pluralsight/headless-styles'\n\nconst CancelButton = styled.button`\n  ${getJSButtonProps({\n    sentiment: 'danger',\n  }).button.cssProps}\n`\n\nexport default CancelButton\n")),(0,r.kt)("p",null,"Here we are relying on ",(0,r.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components")," to create our Button component while Headless Styles manages the styles."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When combining Headless Styles with 3rd party libraries, you are not guaranteed a perfect accessbility score for your components since we don't own those code bases.")),(0,r.kt)("h3",{id:"step-3---rinse-and-repeat"},"Step 3 - Rinse and repeat"),(0,r.kt)("p",null,"Now that we have a few examples on how you can successfully migrate your application, find what works best for you and use that for all the components. Only your team knows which patterns scale the most for your specific projects."),(0,r.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,r.kt)("h3",{id:"themeing"},"Themeing"),(0,r.kt)("p",null,"Headless Styles delivers a multi-theme experience by default. To learn more about our default themes and how you can implement or customize them, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/tokens/colors#themes"},"Design Tokens Theme page"),"."),(0,r.kt)("h3",{id:"migrate-slowly"},"Migrate slowly"),(0,r.kt)("p",null,"At the end of the day, all migration is tech-debt. Don't overwhelm yourself or your team by approaching a mass migration unless you have too."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We recommend creating a new branch and if possible, slowly migrate each component when you are able to make time")," without forcing a frankenstiened Classic/v2 experience which will just cause more issues."),(0,r.kt)("p",null,"For example, here is a possible work-flow within a real world scenario:"),(0,r.kt)("h4",{id:"sprint-1"},"Sprint 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new branch to start migration (",(0,r.kt)("strong",{parentName:"li"},"feat/ds-migration"),")"),(0,r.kt)("li",{parentName:"ul"},"Some new Feature"),(0,r.kt)("li",{parentName:"ul"},"Bugfix")),(0,r.kt)("h4",{id:"sprint-2"},"Sprint 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feat/ds-migration"),", migrate Cancel Buttons"),(0,r.kt)("li",{parentName:"ul"},"Feature update"),(0,r.kt)("li",{parentName:"ul"},"Bugfix")),(0,r.kt)("h4",{id:"sprint-3-tech-debt-week"},"Sprint 3 (Tech-debt week)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feat/ds-migration"),", fully migrate & merge into main branch")),(0,r.kt)("h3",{id:"you-do-you"},"You do you"),(0,r.kt)("p",null,"Every project is different and part of the biggest benefit of PD is the flexibility. All of our docs will provide examples for our packages but only ",(0,r.kt)("strong",{parentName:"p"},"your team")," knows what is best migration path for your project."),(0,r.kt)("p",null,"When your team is preparing for your migration, use our examples as that - examples - and do what makes the most sense in your project (for maintainability and scalability)."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Only use 3rd-party libraries with Headless Styles if you are ",(0,r.kt)("em",{parentName:"p"},"already using them"),". Adding an additional library to Headless Styles as a choice only creates more work for your team and doesn't guarantee a fully accessbile and performant UI (which our native API does).")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'See something missing on this Migration page? Click the "Edit this page" link in the bottom left corner to submit a new PR with the updates you would like to see!')))}y.isMDXComponent=!0}}]);