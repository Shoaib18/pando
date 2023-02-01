"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10931],{9637:function(e,n,t){const a=t(86521);n.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},76548:function(e,n,t){const a=t(86521);n.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},60853:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(45721),i={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},o={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function s(e){var n,t,s;void 0===e&&(e=o);var r=null!=(n=e.type)?n:o.type,l=e.gridColumns?"repeat("+e.gridColumns+", minmax(auto, max-content))":"initial",p={alignItems:e.alignItems,gridTemplateColumns:l,justifyContent:e.justifyContent,textAlign:null!=(t=e.textAlign)?t:"center",gap:null!=(s=e.gap)?s:"1rem",columnGap:e.columnGap};return a.createElement("div",{className:i[r],style:p},e.children)}},46375:function(e,n,t){var a=t(60953),i=t(45721),o=t(9154),s=t(83934),r=t(60853);n.Z=function(){var e=(0,i.useState)(""),n=e[0],t=e[1],l=(0,o.g)().fieldOptions,p=(0,s.g)(Object.assign({},l,{id:"name",name:"full_name",placeholder:"Basic input",value:n}));return i.createElement(r.Z,null,i.createElement("input",(0,a.Z)({},p.input,{onChange:function(e){t(e.target.value)}})))}},67983:function(e,n,t){t.d(n,{J:function(){return s},e:function(){return r}});var a=t(45721),i=t(63467),o=t(36114);function s(){return a.createElement(i.Z,null,"const { fieldOptions } = getFormControlProps()\nconst inputProps = getInputProps({\n  ...fieldOptions,\n  id: 'basic-input',\n  name: 'basic_input',\n  placeholder: 'Basic input',\n  value: ''\n})\n\n<div {...inputProps.inputWrapper}>\n  <input {...inputProps.input} onChange={handleCheck} />\n</div>")}function r(){return o.Z}},36114:function(e,n,t){var a=t(45721),i=t(63467),o=a.createElement(i.Z,null,"import {\n    getErrorMessageProps,\n    getFormControlProps,\n    getFormLabelProps,\n    getIconProps,\n    getInputProps\n} from '@pluralsight/headless-styles';\nimport { WarningTriangleFilledIcon } from '@pluralsight/icons'\n\nexport default function BasicInput(props) {\n  const { id, onChange, ...inputOptions } = props\n  const { fieldOptions } = getFormControlProps(inputOptions)\n  const errorId = `${id}:errorMessage`\n  const describedBy = (fieldOptions.invalid && {describedBy: errorId})\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: id,\n    value: props.label,\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id,\n    name: props.name,\n    placeholder: props.placeholder,\n    size: props.size,\n    type: props.type,\n    value: props.value,\n    ...describedBy\n  })\n  const error = getErrorMessageProps({\n    ...fieldOptions,\n    id: errorId,\n    message: props.errorMessage\n  })\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <input {...inputProps.input} onChange={props.onChange} />\n        {fieldOptions.invalid && (\n          <span {...inputProps.invalidIconWrapper}>\n            <WarningTriangleFilledIcon\n              {...getIconProps(inputProps.invalidIconOptions)}\n            />\n          </span>\n        )}\n      </div>\n      {fieldOptions.invalid && (\n        <div {...error.container}>\n          <p {...error.message}>{error.message.value}</p>\n        </div>\n      )}\n    </div>\n  );\n}");n.Z=o},62612:function(e,n,t){var a=t(60953),i=t(59005),o=t(45721),s=t(9154),r=t(83934),l=t(60853),p=["value"],u=["value"];n.Z=function(){var e=(0,o.useState)("Medium input"),n=e[0],t=e[1],d=(0,o.useState)("Large input (default)"),c=d[0],m=d[1],g=(0,s.g)().fieldOptions,h=(0,r.g)(Object.assign({},g,{id:"name",name:"full_name",placeholder:"Basic input",size:"m",value:n})),v=h.value,f=(0,i.Z)(h,p),k=(0,r.g)(Object.assign({},g,{id:"name",name:"full_name",placeholder:"Basic input",value:c})),b=k.value,y=(0,i.Z)(k,u);return o.createElement(l.Z,{type:"column"},o.createElement("div",f.inputWrapper,o.createElement("input",(0,a.Z)({},f.input,{value:v,onChange:function(e){t(e.target.value)}}))),o.createElement("div",y.inputWrapper,o.createElement("input",(0,a.Z)({},y.input,{value:b,onChange:function(e){m(e.target.value)}}))))}},8494:function(e,n,t){t.d(n,{L:function(){return r},o:function(){return s}});var a=t(45721),i=t(63467),o=t(36114);function s(){return a.createElement(i.Z,null,"const { fieldOptions } = getFormControlProps()\nconst mInputProps = getInputProps({\n  ...fieldOptions,\n  id: 'basic-input',\n  name: 'basic_input',\n  placeholder: 'Basic input',\n  size: 'm',\n  value: ''\n})\nconst inputProps = getInputProps({\n  ...fieldOptions,\n  id: 'basic-input',\n  name: 'basic_input',\n  placeholder: 'Basic input',\n  size: 'l',\n  value: ''\n})\n\n<div {...mInputProps.inputWrapper}>\n  <input {...mInputProps.input} onChange={handleCheck} />\n</div>\n<div {...inputProps.inputWrapper}>\n  <input {...inputProps.input} onChange={handleCheck} />\n</div>")}function r(){return o.Z}},64534:function(e,n,t){var a=t(60953),i=t(45721),o=t(9154),s=t(83934),r=t(58129),l=t(53999),p=t(88878),u=t(82657),d=t(60853),c={position:"absolute",right:"0.3rem",top:"0",zIndex:"100"};n.Z=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],m=(0,i.useState)(""),g=m[0],h=m[1],v=(0,o.g)().fieldOptions,f=(0,s.g)(Object.assign({},v,{id:"password",name:"user_password",placeholder:"Password input",type:n?"text":"password",value:g})),k=(0,r.g)({ariaLabel:"Show password",usage:"text"}),b=k.button,y=k.iconOptions;return i.createElement(d.Z,null,i.createElement("div",f.inputWrapper,i.createElement("input",(0,a.Z)({},f.input,{onChange:function(e){h(e.target.value)}})),i.createElement("button",(0,a.Z)({},b,{style:c}),i.createElement("span",(0,a.Z)({},(0,l.g)(y),{onClick:function(){t((function(e){return!e}))}}),n?i.createElement(p.Z,null):i.createElement(u.Z,null)))))}},26652:function(e,n,t){t.d(n,{Z:function(){return O}});var a=t(60953),i=t(59005),o=t(45721),s=t(58129),r="button_sEkW",l="chakra_ow8e",p="chakraCircle_c8Xz",u="list_rMMG",d="listItem_bLPI",c="icon_nzIq",m="svelteBackground_c8BA",g="svelteOutline_tdvb",h=["className"],v=o.createElement("svg",{"aria-hidden":"true",className:c,focusable:"false",viewBox:"0 0 24 24"},o.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),f=o.createElement("svg",{"aria-hidden":"true",className:c,focusable:"false",viewBox:"0 0 1024 1024"},o.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),k=o.createElement("svg",{"aria-hidden":"true",className:""+c,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{className:g,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),o.createElement("path",{className:m,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var b={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:v,id:"source",href:"",label:"Show full source"},styled:{icon:f,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:o.createElement("svg",{"aria-hidden":"true",className:c+" "+l,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},o.createElement("rect",{className:p,width:"582",height:"582",rx:"291"}),o.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:o.createElement("svg",{"aria-hidden":"true",className:c,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:k,id:"svelte",label:"View Svelte"}}},y={size:"m",usage:"text"};function I(e){var n=b.results[e.techId],t=(0,s.g)(y).button.className,a="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return o.createElement("a",{"aria-label":n.label,className:t+" "+r,href:a,name:n.label,rel:"noopener noreferrer",target:"_blank",title:n.label},e.children)}function P(e){var n=e.techId,t=Object.assign({},(0,s.g)(y)).button,l=t.className,p=(0,i.Z)(t,h);return o.createElement("button",(0,a.Z)({className:l+" "+r,onClick:e.onToggleShow,title:b.results[n].label},p),o.createElement(w,{tabId:n}))}function w(e){return b.results[e.tabId].icon}function C(e){var n=e.techId;return o.createElement("li",{className:d},"source"===n?o.createElement(P,{onToggleShow:e.onToggleShow,techId:n}):o.createElement(I,{techId:n,href:e.sandboxList[n]},o.createElement(w,{tabId:n})))}function x(e){return o.createElement("ul",{className:u},b.items.map((function(n){return o.createElement(C,{key:n,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:n})})))}function N(e){var n=(0,o.useState)(!1),t=n[0],a=n[1];return o.createElement("div",null,o.createElement(x,{onToggleShow:function(){a((function(e){return!e}))},sandboxList:e.sandboxList}),t?e.fullCode:e.children)}var O=(0,o.memo)(N)},94880:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(45721),i=t(81466),o=t(53999),s=t(9637),r=t(76548);function l(e){var n=e.href,t=(0,i.g)({href:n}),l=(0,o.g)(t.iconOptions),p=n.includes("github")?s.Z:r.Z;return a.createElement("a",t.link,a.createElement(p,l),e.children)}},80858:function(e,n,t){var a=t(45721),i=t(87380),o=t(9154),s=t(9580),r=t(97171),l=t(58129),p=t(53999),u=t(83934),d=t(21133),c=t(88293),m=t(22487),g=t(13924),h=t(54450),v=t(31883),f=t(16284),k=t(74149),b=t(99170),y=t(31072),I=t(88878),P=t(82657),w=t(56561),C=t(30814),x=t(5489),N=Object.assign({React:a},a,{getButtonProps:i.g,getFormControlProps:o.g,getFormLabelProps:s.g,getGridProps:r.g,getGridItemProps:r.a,getIconButtonProps:l.g,getIconProps:p.g,getInputProps:u.g,getMenuProps:d.g,getMenuItemProps:d.a,getPaginationProps:c.g,getPopoverProps:m.g,getRadioProps:g.g,getSelectProps:h.g,getSelectOptionProps:h.a,getTagProps:v.g,CalendarIcon:f.Z,ChevronDownIcon:k.Z,ChevronRightIcon:b.Z,CloseIcon:y.Z,EyeIcon:I.Z,EyeOffIcon:P.Z,PlaceholderIcon:w.Z,WarningTriangleFilledIcon:C.Z,useAutoFormatDate:x.y0,useMenuInteraction:x.P8,useRovingTabIndex:x.XZ,useSubmenuInteraction:x.iL});n.Z=N},43135:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return k}});var a=t(60953),i=t(59005),o=(t(45721),t(70167)),s=t(46375),r=t(67983),l=t(62612),p=t(8494),u=t(64534),d=t(94880),c=t(26652),m=["components"],g={tags:["Development","Packages","Components","Headless Styles","Input"]},h=void 0,v={unversionedId:"development/headless-styles/Input",id:"version-0.3.1-beta/development/headless-styles/Input",title:"Input",description:"The getInputProps helper is used to get user input in a text-like field.",source:"@site/versioned_docs/version-0.3.1-beta/development/headless-styles/Input.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Input",permalink:"/docs/development/headless-styles/Input",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.3.1-beta/development/headless-styles/Input.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Input",permalink:"/docs/tags/input"}],version:"0.3.1-beta",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Input"]},sidebar:"development",previous:{title:"IconButton",permalink:"/docs/development/headless-styles/IconButton"},next:{title:"Menu",permalink:"/docs/development/headless-styles/Menu"}},f={},k=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Input",id:"basic-input",level:3},{value:"Sizes",id:"sizes",level:3},{value:"With Icon",id:"with-icon",level:3},{value:"Date Picker",id:"date-picker",level:3},{value:"What about <code>type=&quot;date&quot;</code>?",id:"what-about-typedate",level:4},{value:"Password Input Example",id:"password-input-example",level:3},{value:"Invalid Input",id:"invalid-input",level:3},{value:"Accessibility and messages",id:"accessibility-and-messages",level:2},{value:"Using both error &amp; field messages",id:"using-both-error--field-messages",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"InputOptions",id:"inputoptions",level:3},{value:"FieldOptions",id:"fieldoptions",level:3},{value:"Props",id:"props",level:2},{value:"InputProps",id:"inputprops",level:3},{value:"JSInputProps",id:"jsinputprops",level:3}],b={toc:k};function y(e){var n=e.components,t=(0,i.Z)(e,m);return(0,o.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getInputProps")," helper is used to get user input in a text-like field."),(0,o.kt)(d.Z,{icon:"github",href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Input",mdxType:"ViewSourceLink"},"View source"),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getInputProps } from '@pluralsight/headless-styles'\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"basic-input"},"Basic Input"),(0,o.kt)(s.Z,{mdxType:"BasicInput"}),(0,o.kt)(c.Z,{fullCode:(0,o.kt)(r.e,{mdxType:"BasicInputFullPreview"}),sandboxList:{chakra:"ps-react-chakra-5of7jo",joy:"basic-mui-wjvohy",styled:"sc-qeofuk",svelte:"ps-svelte-o1yfdy"},mdxType:"LiveExampleTabs"},(0,o.kt)(r.J,{mdxType:"BasicInputPreview"})),(0,o.kt)("h3",{id:"sizes"},"Sizes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getInputProps")," helper comes with two sizes: ",(0,o.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"l")," (default)."),(0,o.kt)(l.Z,{mdxType:"InputSizes"}),(0,o.kt)(c.Z,{fullCode:(0,o.kt)(p.L,{mdxType:"InputSizesFullPreview"}),sandboxList:{chakra:"ps-react-chakra-5of7jo",joy:"basic-mui-wjvohy",styled:"sc-qeofuk",svelte:"ps-svelte-o1yfdy"},mdxType:"LiveExampleTabs"},(0,o.kt)(p.o,{mdxType:"InputSizesPreview"})),(0,o.kt)("h3",{id:"with-icon"},"With Icon"),(0,o.kt)("p",null,"To add an icon to the start of an input, just use pass ",(0,o.kt)("inlineCode",{parentName:"p"},"icon")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"kind")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function InputWithIcon() {\n  const [value, setValue] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: 'exampleIconInput',\n    kind: 'icon',\n    name: 'icon_input',\n    placeholder: 'Enter text',\n    value,\n  })\n\n  function handleChange(e) {\n    setValue(e.target.value)\n  }\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <span {...inputProps.iconWrapper}>\n        <PlaceholderIcon {...getIconProps(inputProps.iconOptions)} />\n      </span>\n      <input {...inputProps.input} onChange={handleChange} />\n    </div>\n  )\n}\n")),(0,o.kt)("h3",{id:"date-picker"},"Date Picker"),(0,o.kt)("p",null,"When you need to collect a ",(0,o.kt)("strong",{parentName:"p"},"known date"),", combine the input helper with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/react-utils/use-auto-format-date"},"useAutoFormatDate")," custom hook."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Calendar Pickers should only be used when the UX requires choosing a date that is ",(0,o.kt)("strong",{parentName:"p"},"unknown")," to the user. Not following this pattern creates an experience that is not fully a11y (despite what many claim to have created) and frustrating to the user."),(0,o.kt)("p",{parentName:"admonition"},"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://adrianroselli.com/2019/07/maybe-you-dont-need-a-date-picker.html"},"Maybe You Don't Need a Date Picker")," article for more information.")),(0,o.kt)("h4",{id:"what-about-typedate"},"What about ",(0,o.kt)("inlineCode",{parentName:"h4"},'type="date"'),"?"),(0,o.kt)("p",null,"Contrary to the rest of the HTML element API's, the ",(0,o.kt)("inlineCode",{parentName:"p"},'type="date"')," option for an input is ",(0,o.kt)("strong",{parentName:"p"},"not accessible"),". This is a known issue in the community and forces fully accessible applications to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," value instead."),(0,o.kt)("p",null,"This is the reason we provide the ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/react-utils/use-auto-format-date"},"useAutoFormatDate")," which will automatically format and validate dates provided as the value. \ud83c\udf89"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function DateInput(props) {\n  const formatOptions = useAutoFormatDate()\n  const { fieldOptions } = getFormControlProps()\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: props.id || 'date',\n    kind: 'icon',\n    name: props.name || 'user_date',\n    placeholder: formatOptions.placeholder,\n    value: formatOptions.value,\n  })\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <span {...inputProps.iconWrapper}>\n        <CalendarIcon {...getIconProps(inputProps.iconOptions)} />\n      </span>\n      <input {...inputProps.input} onChange={formatOptions.onChange} />\n    </div>\n  )\n}\n")),(0,o.kt)("h3",{id:"password-input-example"},"Password Input Example"),(0,o.kt)("p",null,"You can combine helpers to create a password input with show/hide functionality:"),(0,o.kt)(u.Z,{mdxType:"PasswordInput"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function PasswordInput() {\n  const [show, setShow] = useState(false)\n  const [password, setPassword] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: 'password',\n    name: 'user_password',\n    placeholder: 'Basic input',\n    type: show ? 'text' : 'password',\n    value: password,\n  })\n  const { button, iconOptions } = getIconButtonProps({\n    ariaLabel: 'Show password',\n    usage: 'text',\n  })\n  const btnStyle = {\n    position: 'absolute',\n    right: '0.3rem',\n    top: '0.5rem',\n    zIndex: '100',\n  }\n\n  function handleChange(e) {\n    setPassword(e.target.value)\n  }\n\n  function handleToggleShow() {\n    setShow((prev) => !prev)\n  }\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <input {...inputProps.input} onChange={handleChange} />\n      <button {...button} style={btnStyle}>\n        <span {...getIconProps(iconOptions)} onClick={handleToggleShow}>\n          {show ? <EyeIcon /> : <EyeOffIcon />}\n        </span>\n      </button>\n    </div>\n  )\n}\n")),(0,o.kt)("h3",{id:"invalid-input"},"Invalid Input"),(0,o.kt)("p",null,"Whenever your ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldOptions.invalid")," property is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"getInputProps")," helper will automatically return new ",(0,o.kt)("inlineCode",{parentName:"p"},"invalid")," related properties to display an icon for a better visual experience."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function InvalidInput() {\n  const [value, setValue] = useState('')\n  const { fieldOptions } = getFormControlProps({\n    invalid: true,\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: 'exampleIconInput',\n    name: 'icon_input',\n    placeholder: 'Enter text',\n    value,\n  })\n\n  function handleChange(e) {\n    setValue(e.target.value)\n  }\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <input {...inputProps.input} onChange={handleChange} />\n      <span {...inputProps.invalidIconWrapper}>\n        <WarningTriangleFilledIcon\n          {...getIconProps(inputProps.invalidIconOptions)}\n        />\n      </span>\n    </div>\n  )\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend combining this experience with the ",(0,o.kt)("a",{parentName:"p",href:"./FormControl#error-messasge"},"Form Control Error Message")," helper to display a helper error message below the input.")),(0,o.kt)("h2",{id:"accessibility-and-messages"},"Accessibility and messages"),(0,o.kt)("p",null,"When displaying ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/FormControl#error-messasge"},"Error Messages")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/FormControl#help-text"},"Help Text")," it is required to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"options.id")," value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"InputOptions.describedBy")," field. This will add a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby"},"aria-describedby")," attribute to the ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," which establishes a relationship between the ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," and message you are displaying."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Not providing a ",(0,o.kt)("inlineCode",{parentName:"p"},"describedBy")," option that matches the Error/Field Message ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," will result in a poor accessbility experience. Please make sure you are using both of these in order to provide the best experience to all of your users.")),(0,o.kt)("h3",{id:"using-both-error--field-messages"},"Using both error & field messages"),(0,o.kt)("p",null,"When using both the field message and error message API, pass a comma-separated String to the ",(0,o.kt)("inlineCode",{parentName:"p"},"InputOptions.describedBy")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example using both messages for an input"',title:'"Example',using:!0,both:!0,messages:!0,for:!0,an:!0,'input"':!0},"const { value: helpText, ...message } = getFieldMessageProps({\n  id: 'email:help',\n  message: 'We will never share your email.',\n})\nconst error = getErrorMessageProps({\n  id: 'bad:email',\n  invalid,\n  message: 'An email address is required.',\n})\nconst inputProps = getInputProps({\n  ...fieldOptions,\n  // highlight-next-line\n  describedBy: `${message.id},${error.container.id}`,\n  id: 'email',\n  name: 'user_email',\n  value,\n})\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"getInputProps")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options"),": ",(0,o.kt)("a",{parentName:"td",href:"#inputoptions"},"InputOptions")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"size"),": 'l', ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"kind:")," 'default'"),(0,o.kt)("td",{parentName:"tr",align:null},"Get input styles for CSS usage.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"getJSInputProps")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"options"),": ",(0,o.kt)("a",{parentName:"td",href:"#inputoptions"},"InputOptions")),(0,o.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,o.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"inputoptions"},"InputOptions"),(0,o.kt)("p",null,"This interface is available as an ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface InputOptions extends FieldOptions {\n  describedBy?: string\n  id: string\n  kind: 'default' | 'icon'\n  name: string\n  placeholder: string\n  size?: 'm' | 'l'\n  tech?: 'svelte'\n  type: 'text' | 'email' | 'password' | 'tel' | 'url'\n  value: string\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { InputOptions } from '@pluralsight/headless-styles/types'\n")),(0,o.kt)("h3",{id:"fieldoptions"},"FieldOptions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldOptions {\n  disabled?: boolean\n  id: string\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n}\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"inputprops"},"InputProps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface InputProps {\n  iconOptions?: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  iconWrapper?: {\n    className: string\n  }\n  input: {\n    'aria-describedby': string\n    'aria-invalid': boolean\n    'data-disabled': boolean\n    'data-invalid': boolean\n    'data-readonly': boolean\n    'data-required': boolean\n    className: string\n    disabled: boolean\n    id: string\n    name: string\n    placeholder: string\n    readOnly: boolean\n    required: boolean\n    type: string\n    value: string\n  }\n  inputWrapper: {\n    className: string\n  }\n  invalidIconOptions?: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  invalidIconWrapper?: {\n    'aria-invalid': boolean\n    className: string\n  }\n}\n")),(0,o.kt)("h3",{id:"jsinputprops"},"JSInputProps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSInputProps {\n  iconOptions?: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  iconWrapper?: {\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n  input: {\n    a11yProps: {\n      'aria-describedby': string\n      'aria-invalid': boolean\n      'data-disabled': boolean\n      'data-invalid': boolean\n      'data-readonly': boolean\n      'data-required': boolean\n      disabled: boolean\n      id: string\n      name: string\n      placeholder: string\n      readOnly: boolean\n      required: boolean\n      type: string\n      value: string\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n  inputWrapper: {\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n  invalidIconOptions?: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  invalidIconWrapper?: {\n    a11yProps: {\n      'data-invalid': boolean\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n}\n")))}y.isMDXComponent=!0},81466:function(e,n,t){t.d(n,{g:function(){return l}});var a=t(67599);function i(e){return/^https?:\/\//.test(e)}function o(e){const n=function(e){return i(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...n},...i(e)&&{iconOptions:{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:"1em"}}}}var s=t(57731);const r="textLinkCSS-module_textLinkBase__P-zdY";function l(e){const n=function(e){return{href:(null==e?void 0:e.href)??""}}(e),t=o(n.href);return{...t,link:{...t.link,...(0,a.c)(`ps-text-link ${r}`)}}}(0,s.s)(".textLinkCSS-module_textLinkBase__P-zdY{align-items:center;background-color:transparent;border-radius:6px;color:var(--ps-action-navigation);display:inline-flex;font-family:inherit;gap:.25em;outline:none;text-decoration:underline;transition:background-color .25s ease-in-out,color .25s ease-in-out}.textLinkCSS-module_textLinkBase__P-zdY:visited{color:var(--ps-action-navigation-visited)}.textLinkCSS-module_textLinkBase__P-zdY:hover{text-decoration:none}.textLinkCSS-module_textLinkBase__P-zdY:active{text-decoration:underline}.textLinkCSS-module_textLinkBase__P-zdY:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.textLinkCSS-module_textLinkBase__P-zdY:focus:not(:focus-visible){box-shadow:none;outline:none}")}}]);