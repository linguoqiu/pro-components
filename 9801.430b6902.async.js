"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[9801],{39801:function(Lt,nt,d){d.d(nt,{Z:function(){return Et}});var ot=d(59111),rt=d(51498),lt=d(97754),R=d.n(lt),A=d(24456),Y=d(64769),v=d(21488),Q=d(94881),l=d(50959),at=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick","render"];function J(t){return typeof t=="string"}function st(t){var i,e=t.className,n=t.prefixCls,o=t.style,r=t.active,a=t.status,h=t.iconPrefix,s=t.icon,b=t.wrapperStyle,m=t.stepNumber,x=t.disabled,$=t.description,z=t.title,I=t.subTitle,p=t.progressDot,f=t.stepIcon,T=t.tailContent,c=t.icons,w=t.stepIndex,S=t.onStepClick,u=t.onClick,P=t.render,j=(0,Q.Z)(t,at),W=function(){u&&u.apply(void 0,arguments),S(w)},B=function(){var D,g,M=R()("".concat(n,"-icon"),"".concat(h,"icon"),(D={},(0,v.Z)(D,"".concat(h,"icon-").concat(s),s&&J(s)),(0,v.Z)(D,"".concat(h,"icon-check"),!s&&a==="finish"&&(c&&!c.finish||!c)),(0,v.Z)(D,"".concat(h,"icon-cross"),!s&&a==="error"&&(c&&!c.error||!c)),D)),L=l.createElement("span",{className:"".concat(n,"-icon-dot")});return p?typeof p=="function"?g=l.createElement("span",{className:"".concat(n,"-icon")},p(L,{index:m-1,status:a,title:z,description:$})):g=l.createElement("span",{className:"".concat(n,"-icon")},L):s&&!J(s)?g=l.createElement("span",{className:"".concat(n,"-icon")},s):c&&c.finish&&a==="finish"?g=l.createElement("span",{className:"".concat(n,"-icon")},c.finish):c&&c.error&&a==="error"?g=l.createElement("span",{className:"".concat(n,"-icon")},c.error):s||a==="finish"||a==="error"?g=l.createElement("span",{className:M}):g=l.createElement("span",{className:"".concat(n,"-icon")},m),f&&(g=f({index:m-1,status:a,title:z,description:$,node:g})),g},X=a||"wait",C=R()("".concat(n,"-item"),"".concat(n,"-item-").concat(X),e,(i={},(0,v.Z)(i,"".concat(n,"-item-custom"),s),(0,v.Z)(i,"".concat(n,"-item-active"),r),(0,v.Z)(i,"".concat(n,"-item-disabled"),x===!0),i)),E=(0,Y.Z)({},o),N={};S&&!x&&(N.role="button",N.tabIndex=0,N.onClick=W);var Z=l.createElement("div",(0,A.Z)({},j,{className:C,style:E}),l.createElement("div",(0,A.Z)({onClick:u},N,{className:"".concat(n,"-item-container")}),l.createElement("div",{className:"".concat(n,"-item-tail")},T),l.createElement("div",{className:"".concat(n,"-item-icon")},B()),l.createElement("div",{className:"".concat(n,"-item-content")},l.createElement("div",{className:"".concat(n,"-item-title")},z,I&&l.createElement("div",{title:typeof I=="string"?I:void 0,className:"".concat(n,"-item-subtitle")},I)),$&&l.createElement("div",{className:"".concat(n,"-item-description")},$))));return P&&(Z=P(Z)||null),Z}var U=st,ct=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","itemRender","items"];function q(t){var i,e=t.prefixCls,n=e===void 0?"rc-steps":e,o=t.style,r=o===void 0?{}:o,a=t.className,h=t.children,s=t.direction,b=s===void 0?"horizontal":s,m=t.type,x=m===void 0?"default":m,$=t.labelPlacement,z=$===void 0?"horizontal":$,I=t.iconPrefix,p=I===void 0?"rc":I,f=t.status,T=f===void 0?"process":f,c=t.size,w=t.current,S=w===void 0?0:w,u=t.progressDot,P=u===void 0?!1:u,j=t.stepIcon,W=t.initial,B=W===void 0?0:W,X=t.icons,C=t.onChange,E=t.itemRender,N=t.items,Z=N===void 0?[]:N,K=(0,Q.Z)(t,ct),D=x==="navigation",g=x==="inline",M=g||P,L=g?"horizontal":b,it=g?void 0:c,Ot=M?"vertical":z,jt=R()(n,"".concat(n,"-").concat(L),a,(i={},(0,v.Z)(i,"".concat(n,"-").concat(it),it),(0,v.Z)(i,"".concat(n,"-label-").concat(Ot),L==="horizontal"),(0,v.Z)(i,"".concat(n,"-dot"),!!M),(0,v.Z)(i,"".concat(n,"-navigation"),D),(0,v.Z)(i,"".concat(n,"-inline"),g),i)),Bt=function(F){C&&S!==F&&C(F)},Zt=function(F,et){var y=(0,Y.Z)({},F),O=B+et;return T==="error"&&et===S-1&&(y.className="".concat(n,"-next-error")),y.status||(O===S?y.status=T:O<S?y.status="finish":y.status="wait"),g&&(y.icon=void 0,y.subTitle=void 0),!y.render&&E&&(y.render=function(Mt){return E(y,Mt)}),l.createElement(U,(0,A.Z)({},y,{active:O===S,stepNumber:O+1,stepIndex:O,key:O,prefixCls:n,iconPrefix:p,wrapperStyle:r,progressDot:M,stepIcon:j,icons:X,onStepClick:C&&Bt}))};return l.createElement("div",(0,A.Z)({className:jt,style:r},K),Z.filter(function(V){return V}).map(Zt))}q.Step=U;var dt=q,_=dt,mt=d(68588),pt=d(29683),gt=d(29773),$t=d(69172),St=d(35504);function ht(t){return t.filter(i=>i)}function ft(t,i){if(t)return t;const e=(0,St.Z)(i).map(n=>{if(l.isValidElement(n)){const{props:o}=n;return Object.assign({},o)}return null});return ht(e)}var ut=d(61017),vt=d(66148),bt=t=>{const{componentCls:i,stepsIconCustomTop:e,stepsIconCustomSize:n,stepsIconCustomFontSize:o}=t;return{[`${i}-item-custom`]:{[`> ${i}-item-container > ${i}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${i}-icon`]:{top:e,width:n,height:n,fontSize:o,lineHeight:`${n}px`}}},[`&:not(${i}-vertical)`]:{[`${i}-item-custom`]:{[`${i}-item-icon`]:{width:"auto",background:"none"}}}}},It=t=>{const{componentCls:i,stepsIconSize:e,lineHeight:n,stepsSmallIconSize:o}=t;return{[`&${i}-label-vertical`]:{[`${i}-item`]:{overflow:"visible","&-tail":{marginInlineStart:e/2+t.controlHeightLG,padding:`${t.paddingXXS}px ${t.paddingLG}px`},"&-content":{display:"block",width:(e/2+t.controlHeightLG)*2,marginTop:t.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:t.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:t.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${i}-small:not(${i}-dot)`]:{[`${i}-item`]:{"&-icon":{marginInlineStart:t.controlHeightLG+(e-o)/2}}}}}},k=d(90355),Ct=t=>{const{componentCls:i,stepsNavContentMaxWidth:e,stepsNavArrowColor:n,stepsNavActiveColor:o,motionDurationSlow:r}=t;return{[`&${i}-navigation`]:{paddingTop:t.paddingSM,[`&${i}-small`]:{[`${i}-item`]:{"&-container":{marginInlineStart:-t.marginSM}}},[`${i}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:-t.margin,paddingBottom:t.paddingSM,textAlign:"start",transition:`opacity ${r}`,[`${i}-item-content`]:{maxWidth:e},[`${i}-item-title`]:Object.assign(Object.assign({maxWidth:"100%",paddingInlineEnd:0},k.vS),{"&::after":{display:"none"}})},[`&:not(${i}-item-active)`]:{[`${i}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${t.paddingSM/2}px)`,insetInlineStart:"100%",display:"inline-block",width:t.fontSizeIcon,height:t.fontSizeIcon,borderTop:`${t.lineWidth}px ${t.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${t.lineWidth}px ${t.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:t.lineWidthBold,backgroundColor:o,transition:`width ${r}, inset-inline-start ${r}`,transitionTimingFunction:"ease-out",content:'""'}},[`${i}-item${i}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${i}-navigation${i}-vertical`]:{[`> ${i}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${i}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:t.lineWidth*3,height:`calc(100% - ${t.marginLG}px)`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:t.controlHeight*.25,height:t.controlHeight*.25,marginBottom:t.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},[`> ${i}-item-container > ${i}-item-tail`]:{visibility:"hidden"}}},[`&${i}-navigation${i}-horizontal`]:{[`> ${i}-item > ${i}-item-container > ${i}-item-tail`]:{visibility:"hidden"}}}},yt=t=>{const{antCls:i,componentCls:e}=t;return{[`&${e}-with-progress`]:{[`${e}-item`]:{paddingTop:t.paddingXXS,[`&-process ${e}-item-container ${e}-item-icon ${e}-icon`]:{color:t.processIconColor}},[`&${e}-vertical > ${e}-item `]:{paddingInlineStart:t.paddingXXS,[`> ${e}-item-container > ${e}-item-tail`]:{top:t.marginXXS,insetInlineStart:t.stepsIconSize/2-t.lineWidth+t.paddingXXS}},[`&, &${e}-small`]:{[`&${e}-horizontal ${e}-item:first-child`]:{paddingBottom:t.paddingXXS,paddingInlineStart:t.paddingXXS}},[`&${e}-small${e}-vertical > ${e}-item > ${e}-item-container > ${e}-item-tail`]:{insetInlineStart:t.stepsSmallIconSize/2-t.lineWidth+t.paddingXXS},[`&${e}-label-vertical`]:{[`${e}-item ${e}-item-tail`]:{top:t.margin-2*t.lineWidth}},[`${e}-item-icon`]:{position:"relative",[`${i}-progress`]:{position:"absolute",insetBlockStart:(t.stepsIconSize-t.stepsProgressSize-t.lineWidth*2)/2,insetInlineStart:(t.stepsIconSize-t.stepsProgressSize-t.lineWidth*2)/2}}}}},xt=t=>{const{componentCls:i,descriptionWidth:e,lineHeight:n,stepsCurrentDotSize:o,stepsDotSize:r,motionDurationSlow:a}=t;return{[`&${i}-dot, &${i}-dot${i}-small`]:{[`${i}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:Math.floor((t.stepsDotSize-t.lineWidth*3)/2),width:"100%",marginTop:0,marginBottom:0,marginInline:`${e/2}px 0`,padding:0,"&::after":{width:`calc(100% - ${t.marginSM*2}px)`,height:t.lineWidth*3,marginInlineStart:t.marginSM}},"&-icon":{width:r,height:r,marginInlineStart:(t.descriptionWidth-r)/2,paddingInlineEnd:0,lineHeight:`${r}px`,background:"transparent",border:0,[`${i}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${a}`,"&::after":{position:"absolute",top:-t.marginSM,insetInlineStart:(r-t.controlHeightLG*1.5)/2,width:t.controlHeightLG*1.5,height:t.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:e},[`&-process ${i}-item-icon`]:{position:"relative",top:(r-o)/2,width:o,height:o,lineHeight:`${o}px`,background:"none",marginInlineStart:(t.descriptionWidth-o)/2},[`&-process ${i}-icon`]:{[`&:first-child ${i}-icon-dot`]:{insetInlineStart:0}}}},[`&${i}-vertical${i}-dot`]:{[`${i}-item-icon`]:{marginTop:(t.controlHeight-r)/2,marginInlineStart:0,background:"none"},[`${i}-item-process ${i}-item-icon`]:{marginTop:(t.controlHeight-o)/2,top:0,insetInlineStart:(r-o)/2,marginInlineStart:0},[`${i}-item > ${i}-item-container > ${i}-item-tail`]:{top:(t.controlHeight-r)/2,insetInlineStart:0,margin:0,padding:`${r+t.paddingXS}px 0 ${t.paddingXS}px`,"&::after":{marginInlineStart:(r-t.lineWidth)/2}},[`&${i}-small`]:{[`${i}-item-icon`]:{marginTop:(t.controlHeightSM-r)/2},[`${i}-item-process ${i}-item-icon`]:{marginTop:(t.controlHeightSM-o)/2},[`${i}-item > ${i}-item-container > ${i}-item-tail`]:{top:(t.controlHeightSM-r)/2}},[`${i}-item:first-child ${i}-icon-dot`]:{insetInlineStart:0},[`${i}-item-content`]:{width:"inherit"}}}},zt=t=>{const{componentCls:i}=t;return{[`&${i}-rtl`]:{direction:"rtl",[`${i}-item`]:{"&-subtitle":{float:"left"}},[`&${i}-navigation`]:{[`${i}-item::after`]:{transform:"rotate(-45deg)"}},[`&${i}-vertical`]:{[`> ${i}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${i}-item-icon`]:{float:"right"}}},[`&${i}-dot`]:{[`${i}-item-icon ${i}-icon-dot, &${i}-small ${i}-item-icon ${i}-icon-dot`]:{float:"right"}}}}},Tt=t=>{const{componentCls:i,stepsSmallIconSize:e,fontSizeSM:n,fontSize:o,colorTextDescription:r}=t;return{[`&${i}-small`]:{[`&${i}-horizontal:not(${i}-label-vertical) ${i}-item`]:{paddingInlineStart:t.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${i}-item-icon`]:{width:e,height:e,marginTop:0,marginBottom:0,marginInline:`0 ${t.marginXS}px`,fontSize:n,lineHeight:`${e}px`,textAlign:"center",borderRadius:e},[`${i}-item-title`]:{paddingInlineEnd:t.paddingSM,fontSize:o,lineHeight:`${e}px`,"&::after":{top:e/2}},[`${i}-item-description`]:{color:r,fontSize:o},[`${i}-item-tail`]:{top:e/2-t.paddingXXS},[`${i}-item-custom ${i}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${i}-icon`]:{fontSize:e,lineHeight:`${e}px`,transform:"none"}}}}},wt=t=>{const{componentCls:i,stepsSmallIconSize:e,stepsIconSize:n}=t;return{[`&${i}-vertical`]:{display:"flex",flexDirection:"column",[`> ${i}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${i}-item-icon`]:{float:"left",marginInlineEnd:t.margin},[`${i}-item-content`]:{display:"block",minHeight:t.controlHeight*1.5,overflow:"hidden"},[`${i}-item-title`]:{lineHeight:`${n}px`},[`${i}-item-description`]:{paddingBottom:t.paddingSM}},[`> ${i}-item > ${i}-item-container > ${i}-item-tail`]:{position:"absolute",top:0,insetInlineStart:t.stepsIconSize/2-t.lineWidth,width:t.lineWidth,height:"100%",padding:`${n+t.marginXXS*1.5}px 0 ${t.marginXXS*1.5}px`,"&::after":{width:t.lineWidth,height:"100%"}},[`> ${i}-item:not(:last-child) > ${i}-item-container > ${i}-item-tail`]:{display:"block"},[` > ${i}-item > ${i}-item-container > ${i}-item-content > ${i}-item-title`]:{"&::after":{display:"none"}},[`&${i}-small ${i}-item-container`]:{[`${i}-item-tail`]:{position:"absolute",top:0,insetInlineStart:t.stepsSmallIconSize/2-t.lineWidth,padding:`${e+t.marginXXS*1.5}px 0 ${t.marginXXS*1.5}px`},[`${i}-item-title`]:{lineHeight:`${e}px`}}}}},Nt=t=>{const{componentCls:i,inlineDotSize:e,inlineTitleColor:n,inlineTailColor:o}=t,r=t.paddingXS+t.lineWidth,a={[`${i}-item-container ${i}-item-content ${i}-item-title`]:{color:n}};return{[`&${i}-inline`]:{width:"auto",display:"inline-flex",[`${i}-item`]:{flex:"none","&-container":{padding:`${r}px ${t.paddingXXS}px 0`,margin:`0 ${t.marginXXS/2}px`,borderRadius:t.borderRadiusSM,cursor:"pointer",transition:`background-color ${t.motionDurationMid}`,"&:hover":{background:t.controlItemBgHover},["&[role='button']:hover"]:{opacity:1}},"&-icon":{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,[`> ${i}-icon`]:{top:0},[`${i}-icon-dot`]:{borderRadius:t.fontSizeSM/4}},"&-content":{width:"auto",marginTop:t.marginXS-t.lineWidth},"&-title":{color:n,fontSize:t.fontSizeSM,lineHeight:t.lineHeightSM,fontWeight:"normal",marginBottom:t.marginXXS/2},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:r+e/2,transform:"translateY(-50%)","&:after":{width:"100%",height:t.lineWidth,borderRadius:0,marginInlineStart:0,background:o}},[`&:first-child ${i}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${i}-item-tail`]:{display:"block",width:"50%"},"&-wait":Object.assign({[`${i}-item-icon ${i}-icon ${i}-icon-dot`]:{backgroundColor:t.colorBorderBg,border:`${t.lineWidth}px ${t.lineType} ${o}`}},a),"&-finish":Object.assign({[`${i}-item-tail::after`]:{backgroundColor:o},[`${i}-item-icon ${i}-icon ${i}-icon-dot`]:{backgroundColor:o,border:`${t.lineWidth}px ${t.lineType} ${o}`}},a),"&-error":a,"&-active, &-process":Object.assign({[`${i}-item-icon`]:{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,top:0}},a),[`&:not(${i}-item-active) > ${i}-item-container[role='button']:hover`]:{[`${i}-item-title`]:{color:n}}}}}},H;(function(t){t.wait="wait",t.process="process",t.finish="finish",t.error="error"})(H||(H={}));const G=(t,i)=>{const e=`${i.componentCls}-item`,n=`${t}IconColor`,o=`${t}TitleColor`,r=`${t}DescriptionColor`,a=`${t}TailColor`,h=`${t}IconBgColor`,s=`${t}IconBorderColor`,b=`${t}DotColor`;return{[`${e}-${t} ${e}-icon`]:{backgroundColor:i[h],borderColor:i[s],[`> ${i.componentCls}-icon`]:{color:i[n],[`${i.componentCls}-icon-dot`]:{background:i[b]}}},[`${e}-${t}${e}-custom ${e}-icon`]:{[`> ${i.componentCls}-icon`]:{color:i[b]}},[`${e}-${t} > ${e}-container > ${e}-content > ${e}-title`]:{color:i[o],"&::after":{backgroundColor:i[a]}},[`${e}-${t} > ${e}-container > ${e}-content > ${e}-description`]:{color:i[r]},[`${e}-${t} > ${e}-container > ${e}-tail::after`]:{backgroundColor:i[a]}}},Xt=t=>{const{componentCls:i,motionDurationSlow:e}=t,n=`${i}-item`;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none"},[`${n}-icon, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[`${n}-icon`]:{width:t.stepsIconSize,height:t.stepsIconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:t.marginXS,fontSize:t.stepsIconFontSize,fontFamily:t.fontFamily,lineHeight:`${t.stepsIconSize}px`,textAlign:"center",borderRadius:t.stepsIconSize,border:`${t.lineWidth}px ${t.lineType} transparent`,transition:`background-color ${e}, border-color ${e}`,[`${i}-icon`]:{position:"relative",top:t.stepsIconTop,color:t.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:t.stepsIconSize/2-t.paddingXXS,insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:t.lineWidth,background:t.colorSplit,borderRadius:t.lineWidth,transition:`background ${e}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:t.padding,color:t.colorText,fontSize:t.fontSizeLG,lineHeight:`${t.stepsTitleLineHeight}px`,"&::after":{position:"absolute",top:t.stepsTitleLineHeight/2,insetInlineStart:"100%",display:"block",width:9999,height:t.lineWidth,background:t.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:t.marginXS,color:t.colorTextDescription,fontWeight:"normal",fontSize:t.fontSize},[`${n}-description`]:{color:t.colorTextDescription,fontSize:t.fontSize}},G(H.wait,t)),G(H.process,t)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:t.fontWeightStrong}}),G(H.finish,t)),G(H.error,t)),{[`${n}${i}-next-error > ${i}-item-title::after`]:{background:t.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},Dt=t=>{const{componentCls:i,motionDurationSlow:e}=t;return{[`& ${i}-item`]:{[`&:not(${i}-item-active)`]:{[`& > ${i}-item-container[role='button']`]:{cursor:"pointer",[`${i}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${i}-icon`]:{transition:`color ${e}`}},"&:hover":{[`${i}-item`]:{["&-title, &-subtitle, &-description"]:{color:t.colorPrimary}}}},[`&:not(${i}-item-process)`]:{[`& > ${i}-item-container[role='button']:hover`]:{[`${i}-item`]:{"&-icon":{borderColor:t.colorPrimary,[`${i}-icon`]:{color:t.colorPrimary}}}}}}},[`&${i}-horizontal:not(${i}-label-vertical)`]:{[`${i}-item`]:{paddingInlineStart:t.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${i}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:t.descriptionWidth,whiteSpace:"normal"}}}}},Ht=t=>{const{componentCls:i}=t;return{[i]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,k.Wf)(t)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),Xt(t)),Dt(t)),bt(t)),Tt(t)),wt(t)),It(t)),xt(t)),Ct(t)),zt(t)),yt(t)),Nt(t))}};var Pt=(0,ut.Z)("Steps",t=>{const{wireframe:i,colorTextDisabled:e,fontSizeHeading3:n,fontSize:o,controlHeight:r,controlHeightSM:a,controlHeightLG:h,colorTextLightSolid:s,colorText:b,colorPrimary:m,colorTextLabel:x,colorTextDescription:$,colorTextQuaternary:z,colorFillContent:I,controlItemBgActive:p,colorError:f,colorBgContainer:T,colorBorderSecondary:c}=t,w=t.controlHeight,S=t.colorSplit,u=(0,vt.TS)(t,{processTailColor:S,stepsNavArrowColor:e,stepsIconSize:w,stepsIconCustomSize:w,stepsIconCustomTop:0,stepsIconCustomFontSize:a,stepsIconTop:-.5,stepsIconFontSize:o,stepsTitleLineHeight:r,stepsSmallIconSize:n,stepsDotSize:r/4,stepsCurrentDotSize:h/4,stepsNavContentMaxWidth:"auto",processIconColor:s,processTitleColor:b,processDescriptionColor:b,processIconBgColor:m,processIconBorderColor:m,processDotColor:m,waitIconColor:i?e:x,waitTitleColor:$,waitDescriptionColor:$,waitTailColor:S,waitIconBgColor:i?T:I,waitIconBorderColor:i?e:"transparent",waitDotColor:e,finishIconColor:m,finishTitleColor:b,finishDescriptionColor:$,finishTailColor:m,finishIconBgColor:i?T:p,finishIconBorderColor:i?m:p,finishDotColor:m,errorIconColor:s,errorTitleColor:f,errorDescriptionColor:f,errorTailColor:S,errorIconBgColor:f,errorIconBorderColor:f,errorDotColor:f,stepsNavActiveColor:m,stepsProgressSize:h,inlineDotSize:6,inlineTitleColor:z,inlineTailColor:c});return[Ht(u)]},{descriptionWidth:140}),Wt=function(t,i){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)i.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]]);return e};const tt=t=>{const{percent:i,size:e,className:n,rootClassName:o,direction:r,items:a,responsive:h=!0,current:s=0,children:b}=t,m=Wt(t,["percent","size","className","rootClassName","direction","items","responsive","current","children"]),{xs:x}=(0,gt.Z)(h),{getPrefixCls:$,direction:z}=l.useContext(pt.E_),I=l.useMemo(()=>h&&x?"vertical":r,[x,r]),p=$("steps",t.prefixCls),[f,T]=Pt(p),c=t.type==="inline",w=$("",t.iconPrefix),S=ft(a,b),u=c?void 0:i,P=R()({[`${p}-rtl`]:z==="rtl",[`${p}-with-progress`]:u!==void 0},n,o,T),j={finish:l.createElement(ot.Z,{className:`${p}-finish-icon`}),error:l.createElement(rt.Z,{className:`${p}-error-icon`})},W=X=>{let{node:C,status:E}=X;if(E==="process"&&u!==void 0){const N=e==="small"?32:40;return l.createElement("div",{className:`${p}-progress-icon`},l.createElement($t.Z,{type:"circle",percent:u,size:N,strokeWidth:4,format:()=>null}),C)}return C},B=(X,C)=>X.description?l.createElement(mt.Z,{title:X.description},C):C;return f(l.createElement(_,Object.assign({icons:j},m,{current:s,size:e,items:S,itemRender:c?B:void 0,stepIcon:W,direction:I,prefixCls:p,iconPrefix:w,className:P})))};tt.Step=_.Step;var Et=tt}}]);
