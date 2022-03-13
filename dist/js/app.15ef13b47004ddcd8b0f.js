"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{889:(e,t,n)=>{var r=n(7378),a=n(1542);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=r.createContext({user:null,setUser:function(e){console.log("You are not using the context")}}),i=function(e){var t,n,a=e.children,i=(t=r.useState(null),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],c=i[1];return r.createElement(l.Provider,{value:{user:u,setUser:c}},a)},u=n(1602),c=n(6740),s=[{username:"admin",password:"test"},{username:"Miguel",password:"contraseña1"},{username:"Víctor",password:"contraseña2"},{username:"Braulio",password:"contraseña3"},{username:"Antonio",password:"contraseña4"}],m=n(7530),f=n(373),d=n(4344),p=(0,f.Z)((function(){return{errorTypography:{color:"#F44336",paddingTop:"16px",paddingBottom:"16px"}}})),g=function(e){var t=e.flagUser,n=p();return r.createElement(r.Fragment,null,t&&r.createElement(r.Fragment,null,r.createElement(d.Z,{className:n.errorTypography,variant:"caption"},"username: admin & password: test")))},y=n(4504),b=n(9525),v=(0,b.Z)((function(e){return{input:{marginTop:"15px",width:"400px"}}})),h=function(e){var t=e.flagUser,n=e.label,a=e.refInput,o=e.username,l=e.setField,i=e.type,u=v();return r.createElement("div",null,r.createElement(y.Z,{type:i,className:u.input,id:"outlined-basic",variant:"outlined",error:t,label:n,inputProps:{ref:a},value:o,onChange:function(e){return l(e.target.value)}}))},E=(0,b.Z)((function(){return{root:{width:"100%",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},button:{width:"200px",marginTop:"16px"},buttonError:{width:"200px"},card:{width:"50%",margin:"auto",paddingTop:"2rem",paddingBottom:"3rem",backgroundColor:"#f3f3f3"}}})),x=n(4840);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=function(e){var t=E(),n=e.credentialList,a=e.handleNavigate,o=S(r.useState(""),2),i=o[0],u=o[1],c=S(r.useState(""),2),s=c[0],f=c[1],p=S(r.useState(!1),2),y=p[0],b=p[1],v=r.useContext(l).setUser,w=function(){var e=r.useRef();return r.useEffect((function(){e.current.focus()}),[]),[function(){return e.current.focus()},e]}(),A=S(w,2),N=A[0],O=A[1];return r.createElement(x.Z,{className:t.card},r.createElement("form",{onSubmit:function(e){var t,r;e.preventDefault(),t=i,r=s,n.find((function(e){var n=e.username,a=e.password;return n===t&&a===r}))?(a(),v(i)):(u(""),f(""),N(),b(!0))},className:t.root},r.createElement(d.Z,{variant:"subtitle2"},"Por favor, introduzca sus datos"),r.createElement(h,{flagUser:y,label:"Username",refInput:O,username:i,setField:u,type:"text"}),r.createElement(h,{type:"password",flagUser:y,label:"Password",username:s,setField:f}),r.createElement(g,{flagUser:y}),r.createElement(m.ZP,{className:y?t.buttonError:t.button,type:"submit",variant:"contained"},"Log in")))};function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function(e){var t,n,a=(t=r.useState(null),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],l=a[1],i=e.handleNavigate;return r.useEffect((function(){Promise.resolve(s).then(l)}),[]),r.createElement(A,{credentialList:o,handleNavigate:i})};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C={root:"/",login:"/login",list:"/list",detail:"/detail/:id"},T=j(j({},C),{},{detail:function(e){return(0,c.Gn)(C.detail,{id:e.toString()})}}),k=function(){var e=(0,c.s0)();return r.createElement(r.Fragment,null,r.createElement(O,{handleNavigate:function(){e(T.list)}}))},P=n(520),F=n(8681),U=(0,f.Z)((function(){return{grow:{display:"flex",flexGrow:1,paddingLeft:"0px"},justo:{display:"flex",alignItems:"flex-end"},info:{fontWeight:400,borderRadius:"34px",padding:"11px 20px 8px 20px",color:"#040e47",marginLeft:"",lineHeight:1.66,background:"#cfd5fb",fontSize:"0.75rem"},field:{fontWeight:500,borderRadius:"34px",padding:"11px 10px 8px 20px",color:"#040e47",lineHeight:1.66,fontSize:"0.75rem",marginLeft:"30px"},bar:{paddingLeft:"0px"}}})),B=function(e){var t=e.memberName,n=e.companyName,a=U();return r.createElement(r.Fragment,null,r.createElement("div",{className:a.grow},r.createElement(P.Z,{position:"static"},r.createElement(F.Z,{className:a.bar},r.createElement("div",{className:a.justo},r.createElement(d.Z,{className:a.field,variant:"button"},"Name:"),r.createElement(d.Z,{className:a.info,variant:"button"},t),r.createElement(d.Z,{className:a.field,variant:"button"},"Company:"),r.createElement(d.Z,{className:a.info,variant:"button"},n))))))},L=n(755),D=n(1312),M=(0,f.Z)((function(e){return{root:{width:"100%",paddingBottom:"0px",paddingTop:"7px"},flexParent:{marginBottom:"3px",display:"grid",gridTemplateColumns:"156px auto",gridTemplateRows:"156px",columnGap:"3px"},image:{width:"156px",gridColumnStart:"1",gridColumnEnd:"2",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundImage:function(e){var t=e.avatar;return"url(".concat(t,")")}},list:{paddingLeft:"0px",listStylePosition:"inside",listStyleType:"disc",minHeight:"156px",margin:"0px",gridColumnStart:"2",gridColumnEnd:"3","& li:nth-child(2)":{marginTop:"3px",marginBottom:"3px"}},collapse:{marginBottom:"3px"}}})),R=n(3332),$=n(2337),_=n(6434),H=n(7299),z=(0,f.Z)((function(e){return{main:{marginBottom:"3px",paddingBottom:"3px",paddingTop:"0px",background:"#9eabff",transition:"0.7s","&:hover":{cursor:"pointer",background:"#3F51B5",transition:"0.7s","& $arrow":{color:"white",transition:"0.1s"}}},arrow:function(){return{height:"auto",transition:"0.1s"}},mainText:{marginBottom:"3px",paddingBottom:"2rem",paddingTop:"2rem",fontWeight:300,transition:"0.1s","&:hover":{fontWeight:600,color:"#cfd5fb",transition:"0.1s"}}}})),W=function(e){var t=e.item,n=e.collapseState,a=e.setCollapseState,o=z();return r.createElement(R.Z,{button:!0,className:o.main,onClick:function(){return a(!n)}},n?r.createElement($.Z,{className:o.arrow}):r.createElement(_.Z,{className:o.arrow}),r.createElement(H.Z,{className:o.mainText,primary:n?"   Repliega para esconder información de ".concat(t.name):"   Despliega para ver información de ".concat(t.name)}))},G=(0,f.Z)((function(e){return{divText:{background:"#CFD5FB",paddingLeft:"2rem"},text:{display:"inline-block"}}})),V=function(e){var t=G(),n=e.string,a=e.item;return r.createElement(r.Fragment,null,r.createElement("li",{className:t.divText},r.createElement("p",{className:t.text},"".concat(n).concat(a))))},Y=function(e){var t=G(),n=e.string,a=e.item;return r.createElement(r.Fragment,null,r.createElement("li",{className:t.divText},r.createElement("p",{className:t.text},n," ",r.createElement("a",{href:a},a))))};function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=function(e){var t=e.member,n=e.company,a=q(r.useState(!1),2),o=a[0],l=a[1],i=q(r.useState(!1),2),u=i[0],c=i[1],s={avatar:t.avatar_url},m=M(s);return r.createElement(r.Fragment,null,r.createElement(B,{memberName:t.name,companyName:n.name}),r.createElement(L.Z,{component:"nav","aria-labelledby":"nested-list-subheader",className:m.root},r.createElement("div",{className:m.collapse},r.createElement(W,{item:t,collapseState:o,setCollapseState:l}),r.createElement(D.Z,{in:o,timeout:"auto",unmountOnExit:!0},r.createElement("div",{className:m.flexParent},r.createElement("div",{className:m.image}," "),r.createElement("ul",{className:m.list},r.createElement(V,{string:"Id : ",item:t.id}),r.createElement(Y,{string:"Repositorios en GitHub: ",item:t.gitHub}),r.createElement(V,{string:"Login : ",item:t.login}))),r.createElement("ul",{className:m.list},r.createElement(V,{string:"Location :",item:t.location}),r.createElement(V,{string:"Location :",item:t.location}),r.createElement(Y,{string:"Blog o website: ",item:t.blog})))),r.createElement("div",{className:m.collapse},r.createElement(W,{item:n,collapseState:u,setCollapseState:c}),r.createElement(D.Z,{in:u,timeout:"auto",unmountOnExit:!0},r.createElement("ul",{className:m.list},r.createElement(V,{string:"Id :",item:n.id.toString()}),r.createElement(Y,{string:" Blog o website de la compañía: ",item:n.blog}))))))};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=r.createContext({org:"",setOrg:function(e){}}),ee=function(e){var t,n,a=e.children,o=(t=r.useState("apple"),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],i=o[1];return r.createElement(X.Provider,{value:{org:l,setOrg:i}},a)},te=function(e){return{gitHub:e.html_url,name:e.name,id:e.id.toString(),login:e.login,avatar_url:e.avatar_url,blog:e.blog,location:e.location}},ne=function(e){return{name:e.name,id:e.id,location:e.location,blog:e.blog,gitHub:e.html_url,email:e.email,publicRepos:e.public_repos}};function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oe=function(){var e=(0,c.UO)().id,t=r.useContext(X).org,n=re(r.useState(null),2),a=n[0],o=n[1],l=re(r.useState(null),2),i=l[0],u=l[1];return r.useEffect((function(){(function(e){return fetch("https://api.github.com/user/".concat(e)).then((function(e){return e.json()}))})(e).then(te).then(o)}),[e]),r.useEffect((function(){(function(e){return fetch("https://api.github.com/orgs/".concat(e)).then((function(e){return e.json()}))})(t).then(ne).then(u)}),[t]),r.createElement(r.Fragment,null,a&&i&&r.createElement(K,{member:a,company:i}))},le=function(){return r.createElement(r.Fragment,null,r.createElement(oe,null))};function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ue=n(8340),ce=n(4954),se=(0,f.Z)((function(e){return{head:{backgroundColor:"#7488fa"},link:{background:"#cfd5fb",transition:"0.1s","&:hover":{cursor:"pointer",background:"#7488fa",transition:"0.7s"}}}})),me=function(e){var t=e.member,n=e.handleNavigate,a=se();return r.createElement(ue.Z,{className:a.link,key:t.id,onClick:function(){return n(t.id)}},r.createElement(ce.Z,{align:"left"},r.createElement("img",{src:t.avatar_url,style:{width:"5rem"}})),r.createElement(ce.Z,{align:"center"},t.id),r.createElement(ce.Z,{align:"center"}," ",t.login))},fe=n(3937),de=n(2936),pe=n(547),ge=(0,f.Z)((function(e){return{grow:{display:"flex",flexGrow:1},input:{width:"300px",borderRadius:8,backgroundColor:"#a4aff0"},inputText:{color:"#2b3c9d",font:"arial",fontSize:"1rem"},justo:{display:"flex",alignItems:"flex-end"},button:{transition:"1s",marginLeft:"1.5rem",borderRadius:"34px",background:"#cfd5fb","&:hover":{cursor:"pointer",background:"#7488fa",transition:"1s"}},nextToText:{padding:"5px 10px 3px 10px",color:"#040e47",marginLeft:""}}})),ye=function(e){var t=e.org,n=e.setDebOrg,a=e.setOrg,o=ge();return r.createElement(r.Fragment,null,r.createElement("div",{className:o.grow},r.createElement(P.Z,{position:"static"},r.createElement(F.Z,null,r.createElement("div",{className:o.justo},r.createElement(y.Z,{id:"outlined-basic",variant:"outlined",className:o.input,size:"small",value:t,onChange:function(e){return n(e.target.value)},InputProps:{className:o.inputText,endAdornment:r.createElement(de.Z,{position:"start",variant:"standard"},r.createElement(pe.Z,null,r.createElement(fe.Z,null)))}}),r.createElement(m.ZP,{onClick:function(){return a(t)},className:o.button,variant:"contained"},r.createElement(d.Z,{className:o.nextToText,variant:"caption"},"Search Organization")))))))},be=n(6107),ve=n(4509),he=n(7712),Ee=n(1995);function xe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Se=function(e){var t,n,a=e.list,o=e.handleNavigate,l=r.useContext(X),i=l.org,u=l.setOrg,c=function(e,t,n){var a,o,l=(a=r.useState(e),o=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(a,o)||function(e,t){if(e){if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(e,t):void 0}}(a,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=l[0],u=l[1];return r.useEffect((function(){var e=setTimeout((function(){t(i)}),1e4);return function(){return clearTimeout(e)}}),[i]),[i,u]}(i,u),s=(n=2,function(e){if(Array.isArray(e))return e}(t=c)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return xe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xe(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=s[0],f=s[1],d=se();return r.createElement(r.Fragment,null,r.createElement(ye,{org:m,setOrg:u,setDebOrg:f}),r.createElement(be.Z,null,r.createElement(ve.Z,{className:"table"},r.createElement(he.Z,{className:d.head},r.createElement(ue.Z,null,r.createElement(ce.Z,{align:"left"},"Avatar"),r.createElement(ce.Z,{align:"center"},"Id"),r.createElement(ce.Z,{align:"center"},"Name"))),r.createElement(Ee.Z,null,a&&a.map((function(e){return r.createElement(me,{member:e,key:e.id,handleNavigate:o})}))))))},we=function(e){return e.map(Ae)},Ae=function(e){return{id:e.id.toString(),login:e.login,avatar_url:e.avatar_url}};function Ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Oe=function(e){var t,n,a=e.handleNavigate,o=(t=r.useState([]),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ne(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],i=o[1],u=r.useContext(X).org;return r.useEffect((function(){var e;(e=u,fetch("https://api.github.com/orgs/".concat(e,"/members")).then((function(e){return e.json()}))).then(we).then(i)}),[u]),r.createElement(r.Fragment,null,l&&r.createElement(Se,{list:l,handleNavigate:a}))},Ze=function(){var e=(0,c.s0)();return r.createElement(Oe,{handleNavigate:function(t){e(T.detail(t))}})},je=function(e){var t=e.children,n=r.useContext(l).user,a=(0,c.s0)(),o=(0,c.TH)();return r.useEffect((function(){n||a("/")}),[o.pathname]),r.createElement(r.Fragment,null,t)},Ie=function(){return r.createElement(u.UT,null,r.createElement(c.Z5,null,r.createElement(c.AW,{path:"/",element:r.createElement(k,null)}),r.createElement(c.AW,{path:"/list",element:r.createElement(je,null,r.createElement(ee,null,r.createElement(Ze,null)))}),r.createElement(c.AW,{path:"/detail/:id",element:r.createElement(je,null,r.createElement(ee,null,r.createElement(le,null)))})))},Ce=function(){return r.createElement(i,null,r.createElement(Ie,null))};a.render(r.createElement("div",null,r.createElement(Ce,null)),document.getElementById("root"))}},e=>{var t=t=>e(e.s=t);e.O(0,[736],(()=>(t(6248),t(889)))),e.O()}]);