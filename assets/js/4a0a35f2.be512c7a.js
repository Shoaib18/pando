"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39194],{9637:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},76548:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},5397:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"danger diamond filled icon",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.293 21.707a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-9-9a.999.999 0 0 0-1.414 0l-9 9a.999.999 0 0 0 0 1.414l9 9ZM12.5 14a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1Zm0 3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1Z"})})}},48027:function(e,n,t){var o=t(60953),a=t(45721),r=t(77674),i=t(56440),l=t(60853),s=t(90243);n.Z=function(){var e=(0,a.useRef)(null),n=(0,a.useState)(!1),t=n[0],c=n[1],d=(0,a.useCallback)((function(){c(!1)}),[]);return a.createElement(l.Z,null,a.createElement("button",(0,o.Z)({},(0,i._m)().button,{onClick:function(){c(!0)},ref:e}),"Confirm payment"),t&&(0,r.createPortal)(a.createElement(s.Z,{confirmTitle:"Confirm payment",bodyId:"normalAlert-body",body:"Are you sure? This action can't be undone.",confirmText:"Charge card",headerId:"normalAlert-header",id:"normalAlert",onClose:d,ref:e}),document.body))}},17971:function(e,n,t){t.d(n,{W:function(){return i},q:function(){return r}});var o=t(45721),a=t(63467);function r(){return o.createElement(a.Z,null,"<div {...confirm.backdrop}>\n  <div {...confirm.focusGuard} />\n\n  <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n    <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>\n      <header {...confirm.header}>\n        <h6 {...confirm.confirmTitle}>{props.confirmTitle}</h6>\n      </header>\n      <p {...confirm.confirmBody}>{props.body}</p>\n      <footer {...confirm.buttonGroup}>\n        <button {...getButtonProps(confirm.cancelBtnOptions).button} onClick={onClose}>\n          Cancel\n        </button>\n        <button {...getButtonProps(confirm.agreeBtnOptions).button}>{props.confirmText}</button>\n      </footer>\n    </section>\n  </div>\n\n  <div {...confirm.focusGuard} />\n</div>")}function i(){return o.createElement(a.Z,null,"import { forwardRef, memo, useEffect, useRef } from 'react'\nimport { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'\nimport { getButtonProps, getConfirmDialogProps, getIconProps } from '@pluralsight/headless-styles'\nimport { DangerDiamondFilledIcon } from '@pluralsight/icons'\n\nfunction ConfirmDialogEl(props, triggerRef) {\n  const { onClose, ...confirmProps } = props\n  const wrapperRef = useRef(null)\n  const confirm = getConfirmDialogProps(confirmProps)\n  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)\n  const isDestructive = confirmProps.kind === 'destructive'\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  useEffect(() => {\n    setupFocusTrap()\n  }, [setupFocusTrap])\n\n  return (\n    <div {...confirm.backdrop}>\n      <div {...confirm.focusGuard} />\n\n      <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>\n          <header {...confirm.header}>\n            {isDestructive && (\n              <span {...confirm.iconWrapper}>\n                <DangerDiamondFilledIcon\n                  {...getIconProps(confirm.iconOptions)}\n                />\n              </span>\n            )}\n            <h6 {...confirm.confirmTitle}>{props.confirmTitle}</h6>\n          </header>\n          <p {...confirm.confirmBody}>{props.body}</p>\n          <footer {...confirm.buttonGroup}>\n            <button {...getButtonProps(confirm.cancelBtnOptions).button} onClick={onClose}>\n              Cancel\n            </button>\n            <button {...getButtonProps(confirm.agreeBtnOptions).button}>{props.confirmText}</button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...confirm.focusGuard} />\n    </div>\n  )\n}\n\nconst ConfirmDialog = memo(forwardRef(ConfirmDialogEl))\n\nexport default ConfirmDialog")}},90243:function(e,n,t){var o=t(60953),a=t(59005),r=t(45721),i=t(24799),l=t(56440),s=t(5397),c=["onClose"];function d(e,n){var t=e.onClose,d=(0,a.Z)(e,c),u=(0,r.useRef)(null),m=(0,l.Zu)(d),p=(0,i.P5)(n),f=p.ref,g=p.onKeyDown,h=p.setupFocusTrap,k="destructive"===d.kind;return(0,i.AQ)(t),(0,r.useEffect)((function(){h()}),[h]),r.createElement("div",m.backdrop,r.createElement("div",m.focusGuard),r.createElement("div",(0,o.Z)({},m.wrapper,{ref:u,onClick:function(e){e.stopPropagation(),u.current===e.target&&t()}}),r.createElement("section",(0,o.Z)({},m.section,{ref:f,onKeyDown:g}),r.createElement("header",m.header,k&&r.createElement("span",m.iconWrapper,r.createElement(s.Z,(0,l.L1)(m.iconOptions))),r.createElement("h6",(0,o.Z)({},m.confirmTitle,{style:{margin:"initial"}}),e.confirmTitle)),r.createElement("p",m.confirmBody,e.body),r.createElement("footer",m.buttonGroup,r.createElement("button",(0,o.Z)({},(0,l._m)(m.cancelBtnOptions).button,{onClick:t}),"Cancel"),r.createElement("button",(0,l._m)(m.agreeBtnOptions).button,e.confirmText)))),r.createElement("div",m.focusGuard))}var u=(0,r.memo)((0,r.forwardRef)(d));n.Z=u},50198:function(e,n,t){var o=t(60953),a=t(45721),r=t(77674),i=t(56440),l=t(60853),s=t(90243);n.Z=function(){var e=(0,a.useRef)(null),n=(0,a.useState)(!1),t=n[0],c=n[1],d=(0,a.useCallback)((function(){c(!1)}),[]);return a.createElement(l.Z,null,a.createElement("button",(0,o.Z)({},(0,i._m)({sentiment:"danger"}).button,{onClick:function(){c(!0)},ref:e}),"Delete channel"),t&&(0,r.createPortal)(a.createElement(s.Z,{confirmTitle:"Delete Channel",body:"Are you sure? This action will be permanent.",bodyId:"destructiveAlert-body",confirmText:"Delete",headerId:"destructiveAlert-header",id:"destructiveAlert",kind:"destructive",onClose:d,ref:e}),document.body))}},60853:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},r={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function i(e){var n,t;void 0===e&&(e=r);var i=null!=(n=e.type)?n:r.type,l=e.gridColumns?"repeat("+e.gridColumns+", minmax(auto, max-content))":"initial",s={alignItems:e.alignItems,gridTemplateColumns:l,justifyContent:e.justifyContent,textAlign:null!=(t=e.textAlign)?t:"center"};return o.createElement("div",{className:a[i],style:s},e.children)}},26652:function(e,n,t){t.d(n,{Z:function(){return I}});var o=t(60953),a=t(59005),r=t(45721),i=t(56440),l="button_sEkW",s="chakra_ow8e",c="chakraCircle_c8Xz",d="list_rMMG",u="listItem_bLPI",m="icon_nzIq",p="svelteBackground_c8BA",f="svelteOutline_tdvb",g=["className"],h=r.createElement("svg",{"aria-hidden":"true",className:m,focusable:"false",viewBox:"0 0 24 24"},r.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),k=r.createElement("svg",{"aria-hidden":"true",className:m,focusable:"false",viewBox:"0 0 1024 1024"},r.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),v=r.createElement("svg",{"aria-hidden":"true",className:""+m,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{className:f,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),r.createElement("path",{className:p,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var b={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:k,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:r.createElement("svg",{"aria-hidden":"true",className:m+" "+s,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),r.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:r.createElement("svg",{"aria-hidden":"true",className:m,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:v,id:"svelte",label:"View Svelte"}}},y={size:"m",usage:"text"};function C(e){var n=b.results[e.techId],t=(0,i.Bb)(y).button.className,o="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return r.createElement("a",{"aria-label":n.label,className:t+" "+l,href:o,name:n.label,rel:"noopener noreferrer",target:"_blank",title:n.label},e.children)}function w(e){var n=e.techId,t=Object.assign({},(0,i.Bb)(y)).button,s=t.className,c=(0,a.Z)(t,g);return r.createElement("button",(0,o.Z)({className:s+" "+l,onClick:e.onToggleShow,title:b.results[n].label},c),r.createElement(N,{tabId:n}))}function N(e){return b.results[e.tabId].icon}function D(e){var n=e.techId;return r.createElement("li",{className:u},"source"===n?r.createElement(w,{onToggleShow:e.onToggleShow,techId:n}):r.createElement(C,{techId:n,href:e.sandboxList[n]},r.createElement(N,{tabId:n})))}function x(e){return r.createElement("ul",{className:d},b.items.map((function(n){return r.createElement(D,{key:n,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:n})})))}function P(e){var n=(0,r.useState)(!1),t=n[0],o=n[1];return r.createElement("div",null,r.createElement(x,{onToggleShow:function(){o((function(e){return!e}))},sandboxList:e.sandboxList}),t?e.fullCode:e.children)}var I=(0,r.memo)(P)},94880:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(45721),a=t(56440),r=t(9637),i=t(76548);function l(e){var n=e.href,t=(0,a.j8)({href:n}),l=(0,a.L1)(t.iconOptions),s=n.includes("github")?r.Z:i.Z;return o.createElement("a",t.link,o.createElement(s,l),e.children)}},80858:function(e,n,t){var o=t(45721),a=t(56440),r=t(16284),i=t(74149),l=t(99170),s=t(31072),c=t(88878),d=t(82657),u=t(56561),m=t(30814),p=t(24799),f=Object.assign({React:o},o,{getButtonProps:a._m,getFormControlProps:a.Np,getGridProps:a.XN,getGridItemProps:a.nF,getIconButtonProps:a.Bb,getIconProps:a.L1,getInputProps:a.TC,getMenuProps:a.tm,getMenuItemProps:a.H_,getPaginationProps:a.uX,getPopoverProps:a.Jw,getSelectProps:a.Sy,CalendarIcon:r.Z,ChevronDownIcon:i.Z,ChevronRightIcon:l.Z,CloseIcon:s.Z,EyeIcon:c.Z,EyeOffIcon:d.Z,PlaceholderIcon:u.Z,WarningTriangleFilledIcon:m.Z,useAutoFormatDate:p.y0,useMenuInteraction:p.P8,useRovingTabIndex:p.XZ,useSubmenuInteraction:p.iL});n.Z=f},9480:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return p},metadata:function(){return g},toc:function(){return k}});var o=t(60953),a=t(59005),r=(t(45721),t(70167)),i=t(48027),l=t(17971),s=t(50198),c=t(94880),d=t(26652),u=t(39974),m=["components"],p={tags:["Dialog","Confirmation","User Actions"],title:"Confirm Dialog"},f=void 0,g={unversionedId:"development/headless-styles/ConfirmDialog",id:"development/headless-styles/ConfirmDialog",title:"Confirm Dialog",description:"The getConfirmDialogProps is used to interrupt the user with a mandatory confirmation or action.",source:"@site/docs/development/headless-styles/ConfirmDialog.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/ConfirmDialog",permalink:"/docs/next/development/headless-styles/ConfirmDialog",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/headless-styles/ConfirmDialog.mdx",tags:[{label:"Dialog",permalink:"/docs/next/tags/dialog"},{label:"Confirmation",permalink:"/docs/next/tags/confirmation"},{label:"User Actions",permalink:"/docs/next/tags/user-actions"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Dialog","Confirmation","User Actions"],title:"Confirm Dialog"},sidebar:"development",previous:{title:"Circular Progress",permalink:"/docs/next/development/headless-styles/CircularProgress"},next:{title:"Form Control",permalink:"/docs/next/development/headless-styles/FormControl"}},h={},k=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Confirm Dialog",id:"basic-confirm-dialog",level:3},{value:"Destrucive Confirm Dialog",id:"destrucive-confirm-dialog",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Additional Aria Features",id:"additional-aria-features",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"ConfirmDialogOptions",id:"confirmdialogoptions",level:3},{value:"Props",id:"props",level:2},{value:"ConfirmDialogProps",id:"confirmdialogprops",level:3},{value:"JSConfirmDialogProps",id:"jsconfirmdialogprops",level:3}],v={toc:k};function b(e){var n=e.components,t=(0,a.Z)(e,m);return(0,r.kt)("wrapper",(0,o.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getConfirmDialogProps")," is used to interrupt the user with a mandatory confirmation or action."),(0,r.kt)(c.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/ConfirmDialog",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getConfirmDialogProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-confirm-dialog"},"Basic Confirm Dialog"),(0,r.kt)("p",null,"There are two kinds of Confirm dialogs to use: ",(0,r.kt)("inlineCode",{parentName:"p"},"non-destructive")," (default) and ",(0,r.kt)("inlineCode",{parentName:"p"},"destructive"),"."),(0,r.kt)(i.Z,{mdxType:"BasicConfirmDialog"}),(0,r.kt)(d.Z,{fullCode:(0,r.kt)(l.W,{mdxType:"BasicConfirmDialogFullPreview"}),sandboxList:{chakra:"ps-react-chakra-3c1l5f",joy:"basic-mui-b70341",styled:"sc-xkq3xi",svelte:"ps-svelte-wc5255"},mdxType:"LiveExampleTabs"},(0,r.kt)(l.q,{mdxType:"BasicConfirmDialogPreview"})),(0,r.kt)("h3",{id:"destrucive-confirm-dialog"},"Destrucive Confirm Dialog"),(0,r.kt)("p",null,"For times you want to confirm an action that is potentially destructive (i.e. deleting a user, etc.) use the ",(0,r.kt)("inlineCode",{parentName:"p"},"destructive")," kind."),(0,r.kt)(s.Z,{mdxType:"DestructiveConfirmDialog"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const alert = getConfirmDialogProps({ kind: 'destructive' })\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"destructive")," Confirm Dialog, you should ",(0,r.kt)("strong",{parentName:"p"},"always use the danger sentiment option")," for the trigger Button.")),(0,r.kt)(u.ZP,{mdxType:"DialogDisclaimer"}),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"To make the Confirm Dialog as accessible as possible, we use a few required parameters to add additional a11y functionality to the component."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id - sets the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," attribute on the body content for the dialog"),(0,r.kt)("li",{parentName:"ul"},"headerId - used for the ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-labeledby")," attribute on the ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," element and set as the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," on the title content for the dialog"),(0,r.kt)("li",{parentName:"ul"},"bodyId - used for the ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute on the ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," element")),(0,r.kt)("h3",{id:"additional-aria-features"},"Additional Aria Features"),(0,r.kt)("p",null,"We also provide additional attributes that do not require any input from the API parameters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'role - set to "alertDialog"'),(0,r.kt)("li",{parentName:"ul"},'aria-modal - set to "true"'),(0,r.kt)("li",{parentName:"ul"},"When the dialog is opened, focus is set to the first focusable element in the ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," child heirarchy."),(0,r.kt)("li",{parentName:"ul"},"When the dialog opens, the content in the ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," element are announced by screen readers via the custom props above."),(0,r.kt)("li",{parentName:"ul"},"Clicking on the overlay closes the dialog"),(0,r.kt)("li",{parentName:"ul"},'Pressing the "Escape" key closes the dialog')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getConfirmDialogProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options"),": ",(0,r.kt)("a",{parentName:"td",href:"#confirmdialogoptions"},"ConfirmDialogOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kind"),": 'non-destructive'"),(0,r.kt)("td",{parentName:"tr",align:null},"Get confirm dialog styles for CSS usage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getJSConfirmDialogProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options"),": ",(0,r.kt)("a",{parentName:"td",href:"#confirmdialogoptions"},"ConfirmDialogOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,r.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"confirmdialogoptions"},"ConfirmDialogOptions"),(0,r.kt)("p",null,"This interface is available as an ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConfirmDialogOptions extends FieldOptions {\n  kind?: 'non-destructive' | 'destructive'\n  id: string\n  headerId: string\n  bodyId: string\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { ConfirmDialogOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"confirmdialogprops"},"ConfirmDialogProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConfirmDialogProps {\n  iconOptions?: {\n    ariaHidden: false\n    size: 'm'\n  }\n  iconWrapper?: {\n    className: string\n  }\n  cancelBtnOptions: {\n    usage: 'outline'\n  }\n  agreeBtnOptions: {\n    sentiment: 'action' | 'danger'\n  }\n  confirmTitle: {\n    className: string\n    id: headerId\n  }\n  confirmBody: {\n    className: string\n    id: bodyId\n  }\n  backdrop: {\n    className: string\n  }\n  buttonGroup: {\n    className: string\n  }\n  cancelButton: {\n    className: string\n  }\n  focusGuard: {\n    ['data-aria-hidden']: true\n    ['data-focus-guard']: true\n    className: string\n    tabIndex: 0\n  }\n  header: {\n    className: string\n  }\n  section: {\n    ['aria-modal']: true\n    ['aria-describedby']: bodyId\n    ['aria-labelledby']: headerId\n    className: string\n    id: id\n    role: 'alertdialog'\n    tabIndex: -1\n  }\n  wrapper: {\n    ['data-focus-lock-disabled']: false\n    className: string\n    tabIndex: -1\n  }\n}\n")),(0,r.kt)("h3",{id:"jsconfirmdialogprops"},"JSConfirmDialogProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSConfirmDialogProps {\n  iconOptions?: {\n    ariaHidden: false\n    size: 'm'\n  }\n  iconWrapper?: {\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  cancelBtnOptions: {\n    usage: 'outline'\n  }\n  primaryBtnOptions: {\n    sentiment: 'action' | 'danger'\n  }\n  confirmTitle: {\n    a11yProps: {\n      id: headerId\n    }\n  }\n  confirmBody: {\n    a11yProps: {\n      id: bodyId\n    }\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  backdrop: {\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  buttonGroup: {\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  cancelButton: {\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  focusGuard: {\n    a11yProps: {\n      ['data-aria-hidden']: true\n      ['data-focus-guard']: true\n      tabIndex: 0\n    }\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  header: {\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  section: {\n    a11yProps: {\n      ['aria-modal']: true\n      ['aria-describedby']: bodyId\n      ['aria-labelledby']: headerId\n      id: id\n      role: 'alertdialog'\n      tabIndex: -1\n    }\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  wrapper: {\n    a11yProps: {\n      ['data-focus-lock-disabled']: false\n      tabIndex: -1\n    }\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n}\n")))}b.isMDXComponent=!0},39974:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(60953),a=t(59005),r=(t(45721),t(70167)),i=["components"],l={toc:[{value:"React Performance Requirements",id:"react-performance-requirements",level:3},{value:"Use React-utils",id:"use-react-utils",level:4},{value:"Use Callbacks",id:"use-callbacks",level:4},{value:"Use ForwardRef",id:"use-forwardref",level:4},{value:"Use Memo",id:"use-memo",level:4}]};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"react-performance-requirements"},"React Performance Requirements"),(0,r.kt)("p",null,"To ensure you are keeping your app as performant as possible, there are a few helpers you will need to include in your code to deliver the highest quality result."),(0,r.kt)("h4",{id:"use-react-utils"},"Use React-utils"),(0,r.kt)("p",null,"We have a helper package @pluralsight/react-utils that you can use (we include this in the expanded basic code example) which contains custom hooks and other helpers to reduce your code base and keep the modal a11y compliant."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/development/react-utils/use-focus-trap"},(0,r.kt)("inlineCode",{parentName:"a"},"useFocusTrap"))," - custom hook that keeps the focus trapped within a modal when it is active. When the modal is closed, it returns focus to the component that triggered the modal to open."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/development/react-utils/use-esc-to-close"},(0,r.kt)("inlineCode",{parentName:"a"},"useEscToClose")),' - custom hook that registers an event to close the modal when the "Escape" key is pressed.')),(0,r.kt)("h4",{id:"use-callbacks"},"Use Callbacks"),(0,r.kt)("p",null,"Whenever you pass a function into another ",(0,r.kt)("strong",{parentName:"p"},"custom")," component as one of its props, wrap the function in a ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},(0,r.kt)("inlineCode",{parentName:"a"},"useCallback")," hook"),". This is a recommended practice to help reduce unnecessary re-rendering/commiting in React apps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Using a Callack hook when passing functions as props"',title:'"Using',a:!0,Callack:!0,hook:!0,when:!0,passing:!0,functions:!0,as:!0,'props"':!0},'function BasicConfirmDialog() {\n  const triggerRef = useRef(null)\n  const [showAlert, setShowDialog] = useState(false)\n\n  // highlight-start\n  const handleCloseDialog = useCallback(() => {\n    setShowDialog(false)\n  }, [])\n  // highlight-end\n\n  function handleShowDialog() {\n    setShowDialog(true)\n  }\n\n  return (\n    <Container>\n      <button\n        {...getButtonProps().button}\n        onClick={handleShowDialog}\n        ref={triggerRef}\n      >\n        Confirm payment\n      </button>\n\n      {showAlert &&\n        createPortal(\n          <ConfirmDialog\n            dialogTitle="Confirm payment"\n            bodyId="normal-dialog-body"\n            body="Are you sure? This action can\'t be undone."\n            confirmText="Charge card"\n            headerId="normal-dialog-header"\n            id="normaldialog"\n            // highlight-next-line\n            onClose={handleCloseDialog}\n            ref={triggerRef}\n          />,\n          document.body\n        )}\n    </Container>\n  )\n}\n')),(0,r.kt)("h4",{id:"use-forwardref"},"Use ForwardRef"),(0,r.kt)("p",null,"Due to the nature of how React works with passing Ref Objects, in order for the ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," hook to work, you need to wrap your modal component in the ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html#gatsby-focus-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"forwardRef")," function")," to ensure the ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerRef")," has successfully passed into your component for use in the custom hook."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Not using ",(0,r.kt)("inlineCode",{parentName:"p"},"forwardRef")," will prevent some functionality of the hook from working. ",(0,r.kt)("strong",{parentName:"p"},"It will not break your app"),", but the hook will not return the focus back to the original trigger which opened it (i.e. your app will not be a11y compliant).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example using forwardRef"',title:'"Example',using:!0,'forwardRef"':!0},"const Modal = forwardRef(ModalEl)\n")),(0,r.kt)("h4",{id:"use-memo"},"Use Memo"),(0,r.kt)("p",null,"Lastly, you should wrap your ForwardedRef Component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," function to ensure your modal component does not unnecessarily re-render/commit from the complex properties that may be passed in. This is another good practice that should become second nature when building components that accept complex properties (i.e., anything that is not a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"Primitive"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example using memo with forwardRef"',title:'"Example',using:!0,memo:!0,with:!0,'forwardRef"':!0},"const Modal = memo(forwardRef(ModalEl))\n")))}s.isMDXComponent=!0}}]);