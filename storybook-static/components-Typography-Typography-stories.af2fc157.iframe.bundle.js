"use strict";(self.webpackChunkelementum_ds=self.webpackChunkelementum_ds||[]).push([[647],{"./src/components/Typography/Typography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisplayLGRegular:()=>DisplayLGRegular,DisplayMDRegular:()=>DisplayMDRegular,DisplayXLRegular:()=>DisplayXLRegular,DisplayXSRegular:()=>DisplayXSRegular,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Typography/Typography.tsx");const variants=Object.keys(_Typography__WEBPACK_IMPORTED_MODULE_0__.C),__WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Typography",component:_Typography__WEBPACK_IMPORTED_MODULE_0__.A,argTypes:{variant:{control:"select",options:variants},element:{control:"select",options:["p","h1","h2","h3","h4","h5","h6","span","div"]},className:{control:"text"},text:{control:"text"}}},DisplayXLRegular={args:{text:"Hello world",variant:"h1Medium",element:"h1",className:"text-gray-800"}},DisplayLGRegular={args:{text:"Hello world",variant:"lgRegular",element:"h1",className:"text-gray-800"}},DisplayMDRegular={args:{text:"Hello world",variant:"mdRegular",element:"h1",className:"text-gray-800"}},DisplayXSRegular={args:{text:"Hello world",variant:"xsRegular",element:"h1",className:"text-gray-800"}},__namedExportsOrder=["DisplayXLRegular","DisplayLGRegular","DisplayMDRegular","DisplayXSRegular"];DisplayXLRegular.parameters={...DisplayXLRegular.parameters,docs:{...DisplayXLRegular.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Hello world',\n    variant: 'h1Medium',\n    element: 'h1',\n    className: 'text-gray-800'\n  }\n}",...DisplayXLRegular.parameters?.docs?.source}}},DisplayLGRegular.parameters={...DisplayLGRegular.parameters,docs:{...DisplayLGRegular.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Hello world',\n    variant: 'lgRegular',\n    element: 'h1',\n    className: 'text-gray-800'\n  }\n}",...DisplayLGRegular.parameters?.docs?.source}}},DisplayMDRegular.parameters={...DisplayMDRegular.parameters,docs:{...DisplayMDRegular.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Hello world',\n    variant: 'mdRegular',\n    element: 'h1',\n    className: 'text-gray-800'\n  }\n}",...DisplayMDRegular.parameters?.docs?.source}}},DisplayXSRegular.parameters={...DisplayXSRegular.parameters,docs:{...DisplayXSRegular.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Hello world',\n    variant: 'xsRegular',\n    element: 'h1',\n    className: 'text-gray-800'\n  }\n}",...DisplayXSRegular.parameters?.docs?.source}}}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,C:()=>typographyMap});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const typographyMap={xlRegular:{fontSize:96,lineHeight:132,fontWeight:400},xlMedium:{fontSize:96,lineHeight:132,fontWeight:500},lgRegular:{fontSize:72,lineHeight:108,fontWeight:400},lgMedium:{fontSize:72,lineHeight:108,fontWeight:500},h1Regular:{fontSize:64,lineHeight:84,fontWeight:400},h1Medium:{fontSize:64,lineHeight:84,fontWeight:500},h1Semibold:{fontSize:64,lineHeight:84,fontWeight:600},h2Regular:{fontSize:48,lineHeight:64,fontWeight:400},h2Medium:{fontSize:48,lineHeight:64,fontWeight:500},h2Semibold:{fontSize:48,lineHeight:64,fontWeight:600},h3Regular:{fontSize:36,lineHeight:62,fontWeight:400},h3Medium:{fontSize:36,lineHeight:62,fontWeight:500},h3Semibold:{fontSize:36,lineHeight:62,fontWeight:600},h4Regular:{fontSize:20,lineHeight:34,fontWeight:400},h4Medium:{fontSize:20,lineHeight:34,fontWeight:500},h4Semibold:{fontSize:20,lineHeight:34,fontWeight:600},h5Regular:{fontSize:18,lineHeight:28,fontWeight:400},h5Medium:{fontSize:18,lineHeight:28,fontWeight:500},h5Semibold:{fontSize:18,lineHeight:28,fontWeight:600},h6Regular:{fontSize:16,lineHeight:24,fontWeight:400},h6Medium:{fontSize:16,lineHeight:24,fontWeight:500},h6Semibold:{fontSize:16,lineHeight:24,fontWeight:600},mdlight:{fontSize:18,lineHeight:28,fontWeight:300},mdRegular:{fontSize:18,lineHeight:28,fontWeight:400},mdMedium:{fontSize:18,lineHeight:28,fontWeight:500},mdSemibold:{fontSize:18,lineHeight:28,fontWeight:600},smlight:{fontSize:16,lineHeight:24,fontWeight:300},smRegular:{fontSize:16,lineHeight:24,fontWeight:400},smMedium:{fontSize:16,lineHeight:24,fontWeight:500},smSemibold:{fontSize:16,lineHeight:24,fontWeight:600},xslight:{fontSize:14,lineHeight:20,fontWeight:300},xsRegular:{fontSize:14,lineHeight:20,fontWeight:400},xsMedium:{fontSize:14,lineHeight:20,fontWeight:500},xsSemibold:{fontSize:14,lineHeight:20,fontWeight:600}},Typography=({text,variant="mdRegular",element="p",className="",style={}})=>{const Element=element,styles=typographyMap[variant]||{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Element,{className,style:{...style,fontSize:`${styles.fontSize}px`,lineHeight:`${styles.lineHeight}px`,fontWeight:styles.fontWeight},children:text})},__WEBPACK_DEFAULT_EXPORT__=Typography;Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{text:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof typographyMap",elements:[{name:"literal",value:"xlRegular"},{name:"literal",value:"xlMedium"},{name:"literal",value:"lgRegular"},{name:"literal",value:"lgMedium"},{name:"literal",value:"h1Regular"},{name:"literal",value:"h1Medium"},{name:"literal",value:"h1Semibold"},{name:"literal",value:"h2Regular"},{name:"literal",value:"h2Medium"},{name:"literal",value:"h2Semibold"},{name:"literal",value:"h3Regular"},{name:"literal",value:"h3Medium"},{name:"literal",value:"h3Semibold"},{name:"literal",value:"h4Regular"},{name:"literal",value:"h4Medium"},{name:"literal",value:"h4Semibold"},{name:"literal",value:"h5Regular"},{name:"literal",value:"h5Medium"},{name:"literal",value:"h5Semibold"},{name:"literal",value:"h6Regular"},{name:"literal",value:"h6Medium"},{name:"literal",value:"h6Semibold"},{name:"literal",value:"mdlight"},{name:"literal",value:"mdRegular"},{name:"literal",value:"mdMedium"},{name:"literal",value:"mdSemibold"},{name:"literal",value:"smlight"},{name:"literal",value:"smRegular"},{name:"literal",value:"smMedium"},{name:"literal",value:"smSemibold"},{name:"literal",value:"xslight"},{name:"literal",value:"xsRegular"},{name:"literal",value:"xsMedium"},{name:"literal",value:"xsSemibold"}]},description:"",defaultValue:{value:"'mdRegular'",computed:!1}},element:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"",defaultValue:{value:"'p'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}}}}]);