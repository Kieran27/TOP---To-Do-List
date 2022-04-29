(()=>{"use strict";var e={28:(e,r,n)=>{n.d(r,{Z:()=>d});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --Clr-Orange: rgba(238, 133, 52, 0.9);\r\n  --Clr-Blue: #496DDB;\r\n  --Clr-Violet: #717EC3;\r\n  --Clr-Red: #C95D63;\r\n  --Clr-Lavender: #AE8799;\r\n\r\n  --Clr-White: #fff;\r\n  --Clr-LightGrey: hsl(223, 19%, 93%);\r\n  --Clr-VeryLightGrey: hsl(228, 33%, 97%);\r\n\r\n  --Clr-Red-Hover: rgba(201, 93, 99, 0.75);\r\n  --Clr-Violet-Hover: rgba(113, 126, 195, 0.75);\r\n\r\n  --Primary-Font: 'Roboto', sans-serif;\r\n\r\n  --Btn-Radius: 0.65rem;\r\n}\r\n\r\nbody  {\r\n  margin: 0;\r\n  font-family: var(--Primary-Font);\r\n}\r\n\r\nheader {\r\n  background: var(--Clr-Orange);\r\n  padding: 1rem;\r\n}\r\n\r\nh2 {\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  font-family: var(--Primary-Font);\r\n}\r\n\r\naside {\r\nbackground: var(--Clr-VeryLightGrey);\r\nwidth: 500px;\r\nheight: 89.5vh;\r\npadding: 1rem;\r\n}\r\n\r\nfooter {\r\n  padding: 1rem;\r\n  background: var(--Clr-Orange);\r\n  text-align: center;\r\n}\r\n\r\nh1, h2, h3 {\r\n  margin: 0;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.75rem;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\ninput, select, textarea {\r\n  margin-bottom: 1rem;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.header-left {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn-hamburger {\r\n  display: none;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.btn-clear-storage {\r\n  background: var(--Clr-Red);\r\n  color: white;\r\n  padding: 1rem;\r\n  border-radius: var(--Btn-Radius);\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-clear-storage:hover {\r\n  background: var(--Clr-Red-Hover);\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n}\r\n\r\n.project-nav-header {\r\n  padding-bottom: 0.75rem;\r\n  border-bottom: 1px solid hsl(223, 19%, 80%);\r\n}\r\n\r\n.todo-container {\r\n  width: 80vw;\r\n  height: 100%;\r\n  padding: 2rem;\r\n}\r\n\r\n.todo-container-header-container {\r\n  margin: 0 auto;\r\n  max-width: 1300px;\r\n}\r\n\r\n#todo-container {\r\n  margin: 0 auto;\r\n  max-width: 1300px;\r\n}\r\n\r\n.mobile-pullout-nav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #fff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  overflow: hidden;\r\n}\r\n\r\n.mobile-nav-title {\r\n  text-align: center;\r\n}\r\n\r\n.mobile-nav {\r\n  padding: 1rem;\r\n}\r\n\r\n.btn-mobile-nav-close {\r\n  display: flex;\r\n  margin-left: auto;\r\n  padding-right: 2rem;\r\n  padding-top: 1rem;\r\n  justify-content: flex-end;\r\n  color: #111;\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-mobile-project {\r\n  width: 100%;\r\n  font-size: 1.5rem;\r\n  padding: 1rem 0;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.btn-mobile-project:hover {\r\n  background: var(--Clr-Violet);\r\n}\r\n\r\n.mobile-nav-create-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-mobile-nav-create {\r\n  background: var(--Clr-Orange);\r\n  border-radius: var(--Btn-Radius);\r\n  padding: 0.75rem 1.2rem;;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.create-form-button {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  right: 0;\r\n  padding: 1rem;\r\n}\r\n\r\n.create-form {\r\nbackground-color: var(--Clr-Blue);\r\nborder: none;\r\ncolor: white;\r\nfont-size: 3rem;\r\nborder-radius: 50%;\r\nwidth: 75px;\r\nheight: 75px;\r\ntext-align: center;\r\ntransition: 0.3s;\r\ncursor: pointer;\r\n}\r\n\r\n.create-form:hover {\r\n  background: rgba(73,109,219, 0.7)\r\n}\r\n\r\n.btn-project {\r\n  background: none;\r\n  font-size: 1.2rem;\r\n  letter-spacing: 1.3px;\r\n  font-weight: bold;\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n  margin-bottom: 0.5rem;\r\n  transition: 0.3s;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.btn-project:hover {\r\n  background: var(--Clr-LightGrey);\r\n}\r\n\r\n.active-btn {\r\n  background: var(--Clr-LightGrey);\r\n}\r\n\r\n.btn-create-new-project-container {\r\n  float: right;\r\n}\r\n\r\n.create {\r\n  padding-right: 0.5rem;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n}\r\n\r\n.btn-create-new-project {\r\n  background: var(--Clr-Orange);\r\n  color: var(--Clr-White);\r\n  font-size: 1rem;\r\n  border-radius: var(--Btn-Radius);\r\n  padding: 0.75rem 1.2rem;;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-create-new-project:hover {\r\n  background: rgba(238,132,52, 0.8)\r\n}\r\n\r\n.todo:first-of-type {\r\n  border-top: 1px solid var(--Clr-LightGrey);\r\n}\r\n\r\n.todo-container-title {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.todo {\r\n  padding: 1rem 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--Clr-LightGrey);\r\n  position: relative;\r\n}\r\n\r\n.todo-status-reading {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 5px;\r\n  background: red;\r\n}\r\n\r\n.btn-check {\r\n  background: none;\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.circle {\r\n   border-radius: 50%;\r\n   height: 25px;\r\n   width: 25px;\r\n   border: 2px solid var(--Clr-LightGrey);\r\n   transition: 0.2s ease;\r\n   cursor: pointer;\r\n}\r\n\r\n.circle:hover {\r\n  border: 2.5px solid hsl(223, 19%, 80%);\r\n}\r\n\r\n.circle-checked {\r\n  background: rgb(182, 245, 66)\r\n}\r\n\r\n.todo-title {\r\n  font-weight: bold;\r\n}\r\n\r\n.todo-left {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-info {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.todo-info p {\r\n  margin: 0;\r\n}\r\n\r\n.todo-right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn-todo-delete {\r\n  background: var(--Clr-Red);\r\n  border-radius: var(--Btn-Radius);\r\n  padding: 0.25rem 1rem;\r\n  margin-right: 1.5rem;\r\n  color: var(--Clr-White);\r\n  transition: 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-todo-expand {\r\n  background: var(--Clr-Violet);\r\n  border-radius: var(--Btn-Radius);\r\n  padding: 0.25rem 1rem;\r\n  color: var(--Clr-White);\r\n  transition: 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-todo-delete:hover {\r\n  background: var(--Clr-Red-Hover);\r\n}\r\n\r\n.btn-todo-expand:hover {\r\n  background: var(--Clr-Violet-Hover);\r\n}\r\n\r\n.todo > button {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/* Form Styling */\r\n\r\n.task-creation-container {\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.50);\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 999;\r\n  visibility: none;\r\n  transition: all 0.3s;\r\n  display: none;\r\n}\r\n\r\n.task-creation-container form {\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 2em;\r\n  background: white;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.task-creation-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-task-close {\r\n  display: flex;\r\n  margin-left: auto;\r\n  padding-right: 2rem;\r\n  padding-top: 1rem;\r\n  justify-content: flex-end;\r\n  color: var(--Clr-White);\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.new-project-form-container {\r\n position: fixed;\r\n display: none;\r\n background-color: rgba(0, 0, 0, 0.50);\r\n top: 0;\r\n right: 0;\r\n bottom: 0;\r\n left: 0;\r\n width: 100%;\r\n height: 100%;\r\n z-index: 999;\r\n transition: all 0.3s;\r\n}\r\n\r\n.new-project-form-container form  {\r\n  width: 400px;\r\n  border-radius: var(--Btn-Radius);\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n   padding: 2em;\r\n   background: white;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   flex-direction: column;\r\n}\r\n\r\n.new-project-form-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-project-close {\r\n  display: flex;\r\n  margin-left: auto;\r\n  padding-right: 2rem;\r\n  padding-top: 1rem;\r\n  justify-content: flex-end;\r\n  color: var(--Clr-White);\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.new-project-form-container form input {\r\n  margin: 0.3rem 0 1rem 0;\r\n}\r\n\r\n.new-project-form-header {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  background: var(--Clr-Orange);\r\n  border-radius: var(--Btn-Radius)\r\n}\r\n\r\n.expanded-modal-container {\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.50);\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 999;\r\n  visibility: none;\r\n  transition: all 0.3s;\r\n  display: none;\r\n}\r\n\r\n.expanded-modal {\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 2em;\r\n  background: white;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.expanded-modal-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.expanded-modal-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-expanded-modal-close {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.expanded-modal-left{\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.expanded-modal-info p {\r\n  margin-right: 2rem;\r\n}\r\n\r\n.expanded-modal-footer button {\r\n  font-size: 1.3rem;\r\n  padding: 0.5rem 1rem;\r\n  color: var(--Clr-White);\r\n  border-radius: var(--Btn-Radius);\r\n  transition: 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-expanded-edit {\r\n  background: var(--Clr-Violet);\r\n}\r\n\r\n.btn-expanded-dlt {\r\n  background: var(--Clr-Red)\r\n}\r\n\r\n.btn-expanded-edit:hover {\r\n  background: var(--Clr-Violet-Hover);\r\n}\r\n\r\n.btn-expanded-dlt:hover {\r\n  background: var(--Clr-Red-Hover);\r\n}\r\n\r\n\r\n/* Utility Classes */\r\n\r\n.toggle-display {\r\n  display: block;\r\n}\r\n\r\n.toggle-nav {\r\n  width: 25rem;\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 0 0 10000px rgba(0,0,0,0.75);\r\n}\r\n\r\n.line {\r\nwidth: 30px;\r\nheight: 5px;\r\nbackground-color: var(--Clr-White);\r\nmargin: 6px 0;\r\ntransition: 0.3s ease;\r\n}\r\n\r\n/* Media Queries */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  aside {\r\n    display: none\r\n  }\r\n\r\n  main {\r\n    justify-content: center;\r\n  }\r\n\r\n  .todo-container {\r\n    padding: 2rem 0;\r\n    width: 90vw;\r\n  }\r\n\r\n  .btn-hamburger {\r\n    display: block;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .btn-hamburger:hover > div {\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n  }\r\n}\r\n",""]);const d=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);t&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),r.push(s))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],l=t.base?c[0]+t.base:c[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var g=o(m,t);t.byIndex=d,r.splice(d,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);r[d].references--}for(var c=t(e,o),l=0;l<a.length;l++){var s=n(a[l]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}a=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),i=n.n(a),d=n(565),c=n.n(d),l=n(216),s=n.n(l),u=n(589),p=n.n(u),m=n(28),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),r()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals,n.p;const b=document.querySelector('[data-id="projects-list"]'),h=document.querySelector('[data-id="btn-create-new-project"]'),v=document.querySelector('[data-id="btn-create-new-task"]'),f=document.querySelector('[data-id="task-creation-container"]'),y=document.querySelector('[data-id="btn-task-close"]'),x=document.querySelector('[data-id="new-project-form-container"]'),w=document.querySelector('[data-id="btn-project-close"]'),k=document.querySelector('[data-id="expanded-modal-container"]'),j=document.querySelector('[data-id="task-edit-container"]'),C=document.querySelector('[data-id="btn-task-edit-close"]'),E=document.getElementById("new-project-form"),S=document.getElementById("create-new-task"),P=document.querySelector("[data-id='btn-clear-local-storage']"),L=document.querySelector("[data-id='btn-hamburger']"),q=document.querySelector("[data-id='btn-mobile-nav-close']"),T=document.querySelector("[data-id='btn-mobile-nav-create']");let M=null,N=0,I=[],B=[];class O{constructor(e,r,n,t,o,a){this.title=e,this.description=r,this.date=n,this.project=t,this.urgency=o,this.status=!!a}changeStatus(){!1===this.status?this.status=!0:this.status=!1}set newTitle(e){this.title=e}set newDescription(e){this.description=e}set newDate(e){this.date=e}set newProject(e){this.project=e}set newUrgency(e){this.urgency=e}}class A{static saveTasks(){localStorage.setItem("toDoArray",JSON.stringify(I))}static getTasks(){let e=localStorage.getItem("toDoArray"),r=JSON.parse(e);r?H.instantiateLocalStorage(r):console.log("Huge W")}static saveProjects(){localStorage.setItem("projectsArray",JSON.stringify(B))}static getProjects(){const e=localStorage.getItem("projectsArray");let r=JSON.parse(e);r?(B=[...r],z.appendProjects(B),z.appendProjectsMobile(B),H.addOptions(B),H.addEditOptions(B),console.log(B)):console.log("Ouroboros")}static clearStorage(){localStorage.clear(),location.reload()}static saveCurrentProject(){localStorage.setItem("currentProject",JSON.stringify(M))}static getCurrentProject(){M=JSON.parse(localStorage.getItem("currentProject"))}}const R=(()=>{const e=document.querySelector('[data-id="expanded-modal-title"]'),r=document.querySelector('[data-id="expanded-modal-date"]'),n=document.querySelector('[data-id="expanded-modal-notes"]'),t=document.querySelector('[data-id="expanded-modal-urgency"]');let o;const a=e=>{I.forEach(((r,n)=>{if(r.title===e){const e=I[n];console.log(e),e.changeStatus(),A.saveTasks(),z.appendTasks()}}))},i=e=>{I.forEach(((r,n)=>{r.title===e&&(I[n],I.splice(n,1),A.saveTasks(),z.appendTasks())}))},d=a=>{I.forEach(((i,d)=>{i.title===a&&(e.textContent=i.title,o=e.textContent,r.textContent=i.date,n.textContent=i.description,t.textContent=i.urgency)}))},c=()=>{const e=document.querySelector('[data-id="btn-expanded-edit"]'),r=document.querySelector('[data-id="btn-expanded-dlt"]'),n=document.querySelector('[data-id="btn-expanded-close"]');e.addEventListener("click",l),r.addEventListener("click",l),n.addEventListener("click",l)},l=e=>{"btn-expanded-dlt"===e.target.getAttribute("data-id")?u():"btn-expanded-edit"===e.target.getAttribute("data-id")?(s(e),p()):"btn-expanded-close"===e.target.getAttribute("data-id")&&z.toggleExpandedModal()},s=e=>{const{currentTarget:r}=e;r.parentElement.parentElement.parentElement;let n=document.querySelector("[data-id=expanded-modal-title]").textContent;n=o,I.forEach(((e,r)=>{e.title===n&&(N=r)}))},u=e=>{console.log(o),i(o),z.toggleExpandedModal()},p=()=>{z.toggleEditModal(),z.toggleExpandedModal(),H.appendEditDetails(e,r,n,t),document.getElementById("edit-task").addEventListener("submit",H.editTaskSubmit)};return{decidePath:e=>{const{target:r}=e,n=r.parentElement.parentElement.parentElement.querySelector('[data-id="todo-title"]').textContent;var t;"btn-todo-expand"===r.getAttribute("data-id")?(t=n,z.toggleExpandedModal(),d(t),c()):"btn-todo-delete"===r.getAttribute("data-id")?i(n):"btn-todo-check"===r.getAttribute("data-id")&&a(n)},editExpandedTodo:p,expandedTitle:e,expandedDate:r,expandedNotes:n,expandedUrgency:t,changeObjectInstance:a}})(),H=(()=>{document.getElementById("edit-task");const e=document.getElementById("task-edit-title"),r=document.getElementById("task-edit-description"),n=document.getElementById("task-edit-date"),t=e=>{const r=new Option(e.value);document.querySelector("#project").add(r,void 0)};return{toDoArray:I,newProjectSubmit:e=>{const r=document.getElementById("new-project-name");var n;e.preventDefault(),n=r,B.includes(n.value)?alert("Projects Cannot Share The Same Name!"):(B.push(r.value),A.saveProjects(),t(r),(e=>{const r=new Option(e.value);document.querySelector("#edit-project").add(r,void 0)})(r),z.toggleNewProjectModal(),z.createNewProject(r),z.checkIfMobile(),z.createNewProjectMobile(r),z.clearNewProjectInput(r))},newTaskSubmit:e=>{e.preventDefault();const r=document.getElementById("task-title"),n=document.getElementById("task-description"),t=document.getElementById("task-date"),o=document.getElementById("project"),a=document.querySelector("input[name='Urgency']:checked");if(M=o.value,(e=>{const r=e.value.toLowerCase();let n=I.map((e=>e.title.toLowerCase()));return n.includes(r)?(n=[],!0):(n=[],!1)})(r))alert("Tasks Cannot Share The Same Name!");else{const e=new O(r.value,n.value,t.value,o.value,a.value);I.push(e),A.saveTasks(),console.log(I),z.toggleNewTaskModal(),z.clearNewTaskInputs(r,n,t),z.appendTasks(),z.changeOutputTitle(M),z.removeActiveProject(),z.setActiveProject()}},createNewOption:t,addOptions:e=>{e.forEach((e=>{const r=new Option(e);document.querySelector("#project").add(r,void 0)}))},addEditOptions:e=>{e.forEach((e=>{const r=new Option(e);document.querySelector("#edit-project").add(r,void 0)}))},editTaskSubmit:t=>{t.preventDefault();const o=document.querySelector("input[name='Edit-Urgency']:checked"),a=document.getElementById("edit-project");I[N].newTitle=e.value,I[N].newDate=n.value,I[N].newDescription=r.value,I[N].newUrgency=o.value,I[N].newProject=a.value,A.saveTasks(),z.toggleEditModal(),z.appendTasks()},appendEditDetails:(t,o,a,i)=>{e.value=t.textContent,n.value=o.textContent,r.value=a.textContent,document.querySelectorAll("input[name='Edit-Urgency']").forEach((e=>{e.id===i.textContent&&(e.checked=!0)}))},instantiateLocalStorage:e=>{e.forEach((e=>{const r=new O(e.title,e.description,e.date,e.project,e.urgency,e.status);I.push(r)}))}}})(),D=(()=>{const e=()=>{const e=document.querySelector(".mobile-pullout-nav");e.classList.toggle("toggle-nav"),e.classList.toggle("box-shadow")},r=()=>{document.querySelector("[data-id='mobile-nav-container']").classList.contains("toggle-nav")&&e()},n=e=>{M=e.currentTarget.textContent,s(),u(),r(),p(M),t()},t=()=>{i(),"Home"===M?a():o()},o=()=>{const e=document.querySelector("[data-id='todo-template']");I.filter((e=>e.project===M)).forEach((r=>{const n=e.content.cloneNode(!0);d(r,n),m(n),document.getElementById("todo-container").appendChild(n)}))},a=()=>{const e=document.querySelector("[data-id='todo-template']");I.forEach((r=>{const n=e.content.cloneNode(!0);d(r,n),m(n),document.getElementById("todo-container").appendChild(n)}))},i=()=>{document.getElementById("todo-container").innerHTML=""},d=(e,r)=>{const n=r.querySelector("[data-id='todo-title']"),t=r.querySelector("[data-id='todo-date']"),o=r.querySelector(".circle"),a=r.querySelector("[data-id='todo-status']");c(e,o),l(e,a),n.textContent=e.title,t.textContent=e.date},c=(e,r)=>{!0===e.status&&(r.classList.add("circle-checked"),r.innerText="✓")},l=(e,r)=>{switch(e.urgency){case"urgent":r.style.background="red";break;case"high-priority":r.style.background="orange";break;case"medium-priority":r.style.background="var(--Clr-Blue)";break;case"low-priority":r.style.background="green";break;default:console.log("How Did That Happen?")}},s=()=>{document.querySelectorAll(".btn-project").forEach((e=>e.classList.remove("active-btn")))},u=()=>{document.querySelectorAll(".btn-project").forEach((e=>{if(e.textContent===M)return e.classList.add("active-btn")}))},p=e=>{document.querySelector("[data-id='current-project-title']").textContent=e},m=e=>{e.querySelector("[data-id='btn-todo-check']").addEventListener("click",R.decidePath),e.querySelector("[data-id='btn-todo-delete']").addEventListener("click",R.decidePath),e.querySelector("[data-id='btn-todo-expand']").addEventListener("click",R.decidePath)};return{toggleNewProjectModal:()=>{x.classList.toggle("toggle-display")},toggleNewTaskModal:()=>f.classList.toggle("toggle-display"),toggleExpandedModal:()=>k.classList.toggle("toggle-display"),toggleEditModal:()=>j.classList.toggle("toggle-display"),toggleMobileNav:e,checkIfMobile:r,clearNewProjectInput:e=>{e.value=""},clearNewTaskInputs:(e,r,n)=>{e.value="",r.value="",n.value=""},createNewProject:e=>{const r=document.createElement("li"),t=document.createElement("button");t.classList.add("btn-project"),t.textContent=e.value,t.onclick=n,r.appendChild(t),b.appendChild(r)},createNewProjectMobile:e=>{const r=document.createElement("li"),t=document.createElement("button");t.classList.add("btn-mobile-project"),t.textContent=e.value,t.onclick=n,r.appendChild(t),document.querySelector("[data-id='mobile-nav-list']").appendChild(r)},appendProjects:e=>{e.forEach((e=>{const r=document.createElement("li"),t=document.createElement("button");t.classList.add("btn-project"),t.textContent=e,t.onclick=n,r.appendChild(t),b.appendChild(r)}))},appendProjectsMobile:e=>{e.forEach((e=>{const r=document.createElement("li"),t=document.createElement("button");t.classList.add("btn-mobile-project"),t.textContent=e,t.onclick=n,r.appendChild(t),document.querySelector("[data-id='mobile-nav-list']").appendChild(r)}))},changeProjects:n,changeProjectsFirstLoad:()=>{M="Home",s(),u(),r(),p(M),t()},appendTasks:t,removeActiveProject:s,setActiveProject:u,changeOutputTitle:p}})(),z=D;class F{static createHomeProjectMobile(){const e=document.createElement("li"),r=document.createElement("button");r.classList.add("btn-mobile-project"),r.textContent="Home",r.onclick=z.changeProjects,e.appendChild(r),document.querySelector("[data-id='mobile-nav-list']").appendChild(e)}static createHomeProject(){const e=document.createElement("li"),r=document.createElement("button");r.classList.add("btn-project"),r.textContent="Home",r.onclick=z.changeProjects,e.appendChild(r),document.querySelector('[data-id="projects-list"]').appendChild(e)}static setCurrentProject(){M="Home",z.changeProjectsFirstLoad()}}h.addEventListener("click",z.toggleNewProjectModal),w.addEventListener("click",z.toggleNewProjectModal),y.addEventListener("click",z.toggleNewTaskModal),C.addEventListener("click",z.toggleEditModal),v.addEventListener("click",z.toggleNewTaskModal),L.addEventListener("click",z.toggleMobileNav),q.addEventListener("click",z.toggleMobileNav),T.addEventListener("click",z.toggleNewProjectModal),P.addEventListener("click",A.clearStorage),E.addEventListener("submit",H.newProjectSubmit),S.addEventListener("submit",H.newTaskSubmit),A.getProjects(),A.getTasks(),F.createHomeProject(),F.createHomeProjectMobile(),F.setCurrentProject()})()})();