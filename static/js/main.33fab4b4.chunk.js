(this["webpackJsonp3-point-estimator"]=this["webpackJsonp3-point-estimator"]||[]).push([[0],{121:function(e,t,i){},151:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(0),c=i.n(a),s=i(10),r=i.n(s),o=(i(121),i(190)),l=i(191);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=i(23),j=i(177),b=i(179),h=i(195),m=i(181),u=i(27),p=i(184),x=i(99),f=i.n(x),O=i(30),g=i(193),v=i(156),k=i(72),y=i(92);var T=Object(y.a)((function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),i=t[0],n=t[1];return{tasks:i,addTask:function(e){n([].concat(Object(k.a)(i),[e]))},editTask:function(e){var t=i.findIndex((function(t){return t.id===e.id})),a=Object(k.a)(i);null!=t&&(a[t]=function(e){var t=e;return t.optimisticTime=t.optimisticTime?Math.max(0,t.optimisticTime):void 0,t.mostLikelyTime=t.mostLikelyTime?Math.max(0,t.mostLikelyTime):void 0,t.pessimisticTime=t.pessimisticTime?Math.max(0,t.pessimisticTime):void 0,t}(e),n(a))},deleteTask:function(e){n(Object(k.a)(i.filter((function(t){return t.id!==e.id}))))}}})),w=T[0],N=T[1],S=i(180),W=i(67),C=i.n(W),I=Object(j.a)((function(e){return Object(b.a)({itemsWrapper:{padding:e.spacing(1,2)},timesWrapper:{width:"20ch",textAlign:"center"},deleteWrapper:{width:e.spacing(2)},taskInput:{flexGrow:1},tasksWrapper:{display:"flex",flexGrow:1},task:{flex:"4 4 100ch",margin:e.spacing(0,2)},time:{flex:"1 1 15ch",textAlign:"center",margin:e.spacing(0,2)}})})),M=function(e){var t=I(),i=Object(a.useState)(!1),c=Object(d.a)(i,2),s=c[0],r=c[1];Object(a.useEffect)((function(){r(!0)}),[]);var o=e.items,l=e.isTitle,j=e.onClickDelete,b=e.isNewTask;return Object(n.jsx)(S.a,{in:s,timeout:500,onExited:j,children:Object(n.jsx)(m.a,{container:!0,style:{marginBottom:l?"10px":void 0},children:Object(n.jsxs)("div",{className:t.tasksWrapper,children:[Object(n.jsx)("div",{className:t.task,children:o[0]}),Object(n.jsx)("div",{className:t.time,children:o[1]}),Object(n.jsx)("div",{className:t.time,children:o[2]}),Object(n.jsx)("div",{className:t.time,children:o[3]}),Object(n.jsx)("div",{className:t.deleteWrapper,children:!l&&j&&!b&&Object(n.jsx)(h.a,{title:"Delete task",children:Object(n.jsx)(p.a,{"aria-label":"delete task","data-testid":"deleteTask",onClick:function(){return r(!1)},children:Object(n.jsx)(C.a,{fontSize:"small"})})})})]})})})},z=Object(j.a)((function(){return Object(b.a)({root:{display:"flex",flexDirection:"row"},numberInput:{textAlign:"center"}})})),D=function(e){var t=z(),i=e.value,a=e.onChange,c=e.ariaLabel,s=e.label;return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(g.a,{label:s,"aria-label":c,"data-testid":"".concat(c," input"),fullWidth:!0,type:"number",InputProps:{classes:{input:t.numberInput}},InputLabelProps:{shrink:!0},value:null!==i&&void 0!==i&&i,onChange:function(e){return a(parseFloat(e.target.value))}})})},L=Object(j.a)((function(e){return Object(b.a)({mainDiv:{border:"solid 0.5px white",margin:e.spacing(2,0),padding:e.spacing(3,2)},taskInput:{flexGrow:1},taskItem:{display:"inline-block"}})})),B=function(e){var t=L(),i=Object(a.useState)(!1),c=Object(d.a)(i,2),s=c[0],r=c[1];Object(a.useEffect)((function(){r(!0)}),[]);var o=e.items,l=e.onClickDelete,j=e.isNewTask;return Object(n.jsx)(S.a,{in:s,timeout:500,onExited:l,children:Object(n.jsx)("div",{className:t.mainDiv,children:Object(n.jsxs)(m.a,{container:!0,spacing:2,children:[Object(n.jsx)(m.a,{item:!0,xs:12,children:Object(n.jsxs)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",children:[Object(n.jsx)("div",{className:t.taskInput,children:o[0]}),l&&!j&&Object(n.jsx)("div",{children:Object(n.jsx)(h.a,{title:"Delete task",children:Object(n.jsx)(p.a,{"aria-label":"delete task","data-testid":"deleteTask",onClick:function(){return r(!1)},children:Object(n.jsx)(C.a,{fontSize:"small"})})})})]})}),Object(n.jsx)(m.a,{item:!0,xs:4,className:t.taskInput,children:Object(n.jsx)("div",{children:o[1]})}),Object(n.jsx)(m.a,{item:!0,xs:4,className:t.taskInput,children:Object(n.jsx)("div",{children:o[2]})}),Object(n.jsx)(m.a,{item:!0,xs:4,className:t.taskInput,children:Object(n.jsx)("div",{children:o[3]})})]})})})},E=Object(j.a)((function(e){return Object(b.a)({root:{flexGrow:1},buttonWrapper:{marginTop:e.spacing(1)}})})),P=function(){var e=E(),t=N(),i=t.tasks,c=t.addTask,s=t.editTask,r=t.deleteTask;Object(a.useEffect)((function(){l()}),[]),Object(a.useEffect)((function(){i.length>0&&!o(i[i.length-1])&&l()}),[i]);var o=function(e){return""===e.text&&null==e.optimisticTime&&null==e.mostLikelyTime&&null==e.pessimisticTime},l=function(){var e=i[i.length-1]?i[i.length-1].id+1:0;c({id:e,text:"",pessimisticTime:void 0,mostLikelyTime:void 0,optimisticTime:void 0})},d=function(e){return[Object(n.jsx)(g.a,{label:u.isMobile?"Task":void 0,placeholder:"New task",id:"standard-basic",fullWidth:!0,value:e.text,onChange:function(t){return s(Object(O.a)(Object(O.a)({},e),{},{text:t.target.value}))},"data-testid":"taskInput",InputLabelProps:{shrink:!0}}),Object(n.jsx)(D,{label:u.isMobile?"Optimistic Time":void 0,value:e.optimisticTime,onChange:function(t){return s(Object(O.a)(Object(O.a)({},e),{},{optimisticTime:t}))},ariaLabel:"optimistic time"}),Object(n.jsx)(D,{label:u.isMobile?"Most Likely Time":void 0,value:e.mostLikelyTime,onChange:function(t){return s(Object(O.a)(Object(O.a)({},e),{},{mostLikelyTime:t}))},ariaLabel:"most likely time"}),Object(n.jsx)(D,{label:u.isMobile?"Pessimistic Time":void 0,value:e.pessimisticTime,onChange:function(t){return s(Object(O.a)(Object(O.a)({},e),{},{pessimisticTime:t}))},ariaLabel:"pessimistic time"})]};return Object(n.jsxs)("div",{className:e.root,children:[!u.isMobile&&Object(n.jsx)(M,{isTitle:!0,items:[A("Tasks"),A("Optimistic Time"),A("Most Likely Time"),A("Pessimistic Time")]}),i.map((function(e,t){return u.isMobile?Object(n.jsx)(B,{items:d(e),onClickDelete:function(){return r(e)},isNewTask:o(e)&&t===i.length-1},e.id):Object(n.jsx)(M,{items:d(e),onClickDelete:function(){return r(e)},isNewTask:o(e)&&t===i.length-1},e.id)}))]})},A=function(e){return Object(n.jsx)(v.a,{variant:"body1",color:"textSecondary",children:Object(n.jsx)("b",{children:Object(n.jsx)("u",{children:e})})})},H=i(187),F=i(192),G=i(198);function J(e,t){var i=0,n=0;e.forEach((function(e){var t=_(e.optimisticTime),a=_(e.mostLikelyTime),c=_(e.pessimisticTime);i+=(t+4*a+c)/6,n+=Math.pow(c-t,2)/36}));var a=i+Math.sqrt(n)*t;return Math.round(100*(a+Number.EPSILON))/100}function _(e){return e&&!Number.isNaN(e)?e:0}var R=Object(j.a)((function(e){return Object(b.a)({mainDiv:{display:"inline-block",border:"solid 0.5px white",padding:e.spacing(2),margin:e.spacing(4,2)},typography:{margin:e.spacing(0,2)}})})),V=function(){var e=R(),t=N().tasks,i=Object(a.useState)(3),c=Object(d.a)(i,2),s=c[0],r=c[1];return Object(n.jsx)("div",{className:e.mainDiv,children:Object(n.jsxs)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,children:[Object(n.jsx)(m.a,{item:!0,children:Object(n.jsxs)(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(n.jsx)(v.a,{variant:"body1",className:e.typography,children:"Probability"}),Object(n.jsx)(H.a,{variant:"outlined",children:Object(n.jsxs)(F.a,{value:s,"data-testid":"probability",onChange:function(e){return r(e.target.value)},children:[Object(n.jsx)(G.a,{"data-testid":"deviation4",value:4,children:"99.99 %"}),Object(n.jsx)(G.a,{"data-testid":"deviation3",value:3,children:"99.73 %"}),Object(n.jsx)(G.a,{"data-testid":"deviation2",value:2,children:"95.45 %"}),Object(n.jsx)(G.a,{"data-testid":"deviation1",value:1,children:"68.27 %"})]})})]})}),Object(n.jsx)(m.a,{item:!0,children:Object(n.jsxs)(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(n.jsx)(v.a,{variant:"body1",className:e.typography,color:"textSecondary",children:Object(n.jsx)("b",{children:Object(n.jsx)("u",{children:"Total Time"})})}),Object(n.jsx)(v.a,{variant:"body1",className:e.typography,color:"textSecondary",children:J(t,s)})]})})]})})},q=Object(j.a)((function(e){return Object(b.a)({mainDiv:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:e.spacing(2),marginTop:e.spacing(2),marginLeft:e.spacing(1),margin:e.spacing(2,0,2,1)},inlineDiv:{display:"inline-block"},h1Div:{textDecoration:"none",borderBottom:"0.5px solid",display:"inline-block",lineHeight:"2rem"}})})),X=function(){var e=q();return Object(n.jsx)("div",{className:e.mainDiv,children:Object(n.jsxs)("div",{className:e.inlineDiv,children:[Object(n.jsx)(v.a,{variant:"h1",color:"textPrimary",children:Object(n.jsx)("div",{className:e.h1Div,children:"3 Point Estimation"})}),Object(n.jsx)(v.a,{variant:"body1",color:"textSecondary",align:"right",children:"Calculator"})]})})},$=i(189),K=i(199),Q=Object(j.a)((function(e){return Object(b.a)({heart:{position:"relative",top:e.spacing(.35)},grid:{marginTop:"auto",marginBottom:e.spacing(1),paddingBottom:"env(safe-area-inset-bottom)"}})})),U=function(){var e=Q();return Object(n.jsx)(m.a,{className:e.grid,container:!0,justify:"center",alignContent:"center",children:Object(n.jsx)("footer",{children:Object(n.jsx)(v.a,{component:"span",variant:"caption",align:"center",children:Object(n.jsxs)(m.a,{item:!0,xs:12,children:["Made with\xa0",Object(n.jsx)("span",{className:e.heart,children:Object(n.jsx)(K.a,{"aria-label":"love",fontSize:"inherit"})}),"\xa0by"," ",Object(n.jsx)($.a,{"data-testid":"cjoeckerLink",href:"https://www.cjoecker.de/",rel:"noopener noreferrer",underline:"always",target:"_blank",tabIndex:null==localStorage.getItem("cookieConsentAccepted")?-1:0,"aria-label":"Christian J\xf6cker's(opens personal website in a new window)",children:"Christian J\xf6cker"})]})})})})},Y=i(196),Z=i(98),ee=i.n(Z),te=i(97),ie=i.n(te),ne=Object(j.a)((function(e){return{dialog:{margin:0},dialogContent:{marginTop:e.spacing(-2)},closeButton:{marginTop:e.spacing(1),marginRight:e.spacing(-1),float:"right"},text:{textAlign:"justify"}}})),ae=function(e){var t=e.text,i=e.isVisible,a=e.onClose,c=ne(),s=function(){a()};return Object(n.jsx)("div",{children:Object(n.jsx)(Y.a,{className:c.dialog,onClose:s,"aria-labelledby":"customized-dialog-title",open:i,children:Object(n.jsxs)(ie.a,{className:c.dialogContent,children:[Object(n.jsx)(h.a,{title:"Close dialog",children:Object(n.jsx)(p.a,{"aria-label":"Close dialog","data-testid":"infoCloseButton",className:c.closeButton,onClick:s,children:Object(n.jsx)(ee.a,{})})}),Object(n.jsx)(v.a,{"data-testid":"infoText",component:"span",variant:"body1",align:"left",className:c.text,children:t})]})})})},ce=Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{style:{textAlign:"left"},children:"Help"}),Object(n.jsxs)("p",{children:["Add every task necessary for your project. Then, add for every task the time necessary to accomplish them.",Object(n.jsx)("br",{}),"The optimistic time is the time necessary for the task when everything works perfectly.",Object(n.jsx)("br",{}),"The expected time is the time you expect for the task be done.",Object(n.jsx)("br",{}),"The pessimistic time represents the worst-case scenario."]}),Object(n.jsx)("p",{children:"On the bottom, you can set the probability with which the project is accomplished in the estimated time. If you select for instance 97,73%, you will accomplish the project in the calculated time with a probability of 99,7%."}),Object(n.jsxs)("p",{children:["For more information about the 3-point estimation here, check"," ",Object(n.jsx)("a",{href:"https://en.wikipedia.org/wiki/Three-point_estimation",target:"_blank",rel:"noreferrer",children:"this article"})," ."]})]}),se=Object(j.a)((function(e){return Object(b.a)({root:{width:"100%",overflowX:"hidden",display:"flex",flexDirection:"column",minHeight:"100vh"},tasksTableWrapper:{margin:e.spacing(0,u.isMobile?2:10)},helpButton:{position:"absolute",top:e.spacing(1),right:e.spacing(1)}})})),re=function(){var e=se(),t=Object(a.useState)(!1),i=Object(d.a)(t,2),c=i[0],s=i[1];return Object(n.jsx)(w,{children:Object(n.jsxs)("main",{role:"main",children:[Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(h.a,{title:"Show help",children:Object(n.jsx)(p.a,{"aria-label":"Show help","data-testid":"showHelpButton",className:e.helpButton,onClick:function(){return s(!0)},children:Object(n.jsx)(f.a,{})})}),Object(n.jsx)(X,{}),Object(n.jsxs)("div",{className:e.tasksTableWrapper,children:[Object(n.jsx)(P,{}),Object(n.jsx)(m.a,{container:!0,direction:"row",justify:u.isMobile?"center":"flex-end",alignItems:"flex-end",children:Object(n.jsx)(V,{})})]}),Object(n.jsx)(U,{})]}),Object(n.jsx)(ae,{text:ce,isVisible:c,onClose:function(){return s(!1)}})]})})},oe=i(100);var le=function(){var e="#003420",t="#d4a32e",i="#ffffff";return Object(oe.a)({typography:{fontFamily:["Heebo","Calibri","sans-serif"].join(","),caption:{fontWeight:300,fontSize:14},fontWeightRegular:300,fontWeightBold:400,h1:{fontWeight:200,fontSize:32},h2:{fontWeight:400,fontSize:23},h3:{fontWeight:400,fontSize:20},h4:{fontWeight:400,fontSize:18},h5:{fontWeight:400,fontSize:18},h6:{fontWeight:400,fontSize:16},body1:{fontWeight:300,fontSize:16},body2:{fontWeight:300,fontSize:16}},overrides:{MuiTypography:{root:{"& h1":{fontWeight:300,fontSize:32,display:"inline-block"},"& h2":{fontWeight:400,fontSize:23,marginTop:50},"& h3":{fontWeight:400,fontSize:20,marginBottom:-4,marginTop:30},"& h4":{fontWeight:400,fontSize:18,marginTop:20},"& h5":{fontWeight:400,fontSize:18},"& h6":{fontWeight:400,fontSize:16},"& body":{fontWeight:300,fontSize:16},"& a":{color:t}}},MuiCssBaseline:{"@global":{body:{background:"linear-gradient(145deg, ".concat(e," 0%, ").concat(function(e,t){var i=parseInt(e.slice(1),16),n=t<0?0:255,a=t<0?-1*t:t,c=i>>16,s=i>>8&255,r=255&i;return"#".concat((16777216+65536*(Math.round((n-c)*a)+c)+256*(Math.round((n-s)*a)+s)+(Math.round((n-r)*a)+r)).toString(16).slice(1))}(e,-.57),") 100%")}}},MuiButton:{label:{fontWeight:300}},MuiPaper:{root:{backgroundColor:e,border:"solid 0.5px ".concat(i)},elevation8:{boxShadow:"none",border:"solid 0.5px ".concat(i)}},MuiFormLabel:{root:{color:i}},MuiOutlinedInput:{notchedOutline:{borderWidth:"0.5px",borderColor:i},input:{padding:"5px 10px"}}},palette:{type:"dark",background:{default:e},primary:{main:t,contrastText:"#e3e3e3"},secondary:{main:"#cdcdcd",contrastText:"#303030"},text:{primary:i,secondary:"#dbbc73",disabled:"#B0B0B0"}}})};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsxs)(o.a,{theme:le(),children:[Object(n.jsx)(l.a,{}),Object(n.jsx)(re,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.33fab4b4.chunk.js.map