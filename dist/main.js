(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),d=n.n(a)()(o());d.push([e.id,"*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --Clr-Orange: #EE8434;\r\n  --Clr-Blue: #496DDB;\r\n  --Clr-Violet: #717EC3;\r\n  --Clr-Red: #C95D63;\r\n  --Clr-Lavender: #AE8799;\r\n\r\n  --Clr-White: #fff;\r\n  --Clr-LightGrey: hsl(223, 19%, 93%);\r\n  --Clr-VeryLightGrey: hsl(228, 33%, 97%);\r\n\r\n  --Primary-Font: 'Roboto', sans-serif;\r\n\r\n  --Btn-Radius: 0.65rem;\r\n}\r\n\r\nbody  {\r\n  margin: 0;\r\n  font-family: var(--Primary-Font);\r\n}\r\n\r\nheader {\r\n  background: var(--Clr-Orange);\r\n  padding: 1rem;\r\n}\r\n\r\nh2 {\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: relative;\r\n}\r\n\r\naside {\r\nbackground: var(--Clr-VeryLightGrey);\r\nwidth: 300px;\r\nmin-height: 80vh;\r\npadding: 1rem;\r\n}\r\n\r\nfooter {\r\n  padding: 1rem;\r\n  background: var(--Clr-Orange);\r\n  text-align: center;\r\n}\r\n\r\nh1, h2, h3 {\r\n  margin: 0;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\ninput, select, textarea {\r\n  margin-bottom: 1rem;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-clear-storage {\r\n  background: var(--Clr-Red);\r\n  color: white;\r\n  padding: 1rem;\r\n  border-radius: var(--Btn-Radius);\r\n  cursor: pointer;\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-container {\r\n  width: 80vw;\r\n  height: 100%;\r\n  padding: 2rem;\r\n}\r\n\r\n.create-form-button {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  right: 0;\r\n  padding: 1rem;\r\n}\r\n\r\n.create-form {\r\nbackground-color: var(--Clr-Blue);\r\nborder: none;\r\ncolor: white;\r\nfont-size: 3rem;\r\nborder-radius: 50%;\r\nwidth: 75px;\r\nheight: 75px;\r\ntext-align: center;\r\ntransition: 0.3s;\r\ncursor: pointer;\r\n}\r\n\r\n.create-form:hover {\r\n  background: rgba(73,109,219, 0.7)\r\n}\r\n\r\n.btn-project {\r\n  background: none;\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n  margin-bottom: 0.5rem;\r\n  transition: 0.3s;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.btn-project:hover {\r\n  background: var(--Clr-LightGrey);\r\n}\r\n\r\n.active-btn {\r\n  background: var(--Clr-LightGrey);\r\n}\r\n\r\n.btn-create-new-project {\r\n  background: var(--Clr-Orange);\r\n  border-radius: var(--Btn-Radius);\r\n  padding: 0.75rem 1.2rem;;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-create-new-project:hover {\r\n  background: rgba(238,132,52, 0.8)\r\n}\r\n\r\n.todo:first-of-type {\r\n  border-top: 1px solid var(--Clr-LightGrey);\r\n}\r\n\r\n.todo-container-title {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.todo {\r\n  padding: 1rem 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--Clr-LightGrey);\r\n}\r\n\r\n.btn-check {\r\n  background: none;\r\n}\r\n\r\n.circle {\r\n   border-radius: 50%;\r\n   height: 25px;\r\n   width: 25px;\r\n   border: 2px solid var(--Clr-LightGrey);\r\n   cursor: pointer;\r\n}\r\n\r\n.circle-checked {\r\n  background: rgb(182, 245, 66)\r\n}\r\n\r\n.todo-left {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-info {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.todo-info p {\r\n  margin: 0;\r\n}\r\n\r\n.todo-right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.todo-right-urgency-container button {\r\n  width: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-right-expand-container button {\r\n  width: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo > button {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Form Styling */\r\n\r\n.task-creation-container {\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 999;\r\n  visibility: none;\r\n  transition: all 0.3s;\r\n  display: none;\r\n}\r\n\r\n.task-creation-container form {\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 2em;\r\n  background: white;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.task-creation-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-task-close {\r\n  display: flex;\r\n  margin-left: auto;\r\n  padding-right: 2rem;\r\n  padding-top: 1rem;\r\n  justify-content: flex-end;\r\n  color: var(--Clr-White);\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.new-project-form-container {\r\n position: fixed;\r\n display: none;\r\n background-color: rgba(0, 0, 0, 0.25);\r\n top: 0;\r\n right: 0;\r\n bottom: 0;\r\n left: 0;\r\n width: 100%;\r\n height: 100%;\r\n z-index: 999;\r\n transition: all 0.3s;\r\n}\r\n\r\n.new-project-form-container form  {\r\n  width: 400px;\r\n  border-radius: var(--Btn-Radius);\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n   padding: 2em;\r\n   background: white;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   flex-direction: column;\r\n}\r\n\r\n.new-project-form-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-project-close {\r\n  display: flex;\r\n  margin-left: auto;\r\n  padding-right: 2rem;\r\n  padding-top: 1rem;\r\n  justify-content: flex-end;\r\n  color: var(--Clr-White);\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.new-project-form-container form input {\r\n  margin: 0.3rem 0 1rem 0;\r\n}\r\n\r\n.new-project-form-header {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  background: var(--Clr-Orange);\r\n  border-radius: var(--Btn-Radius)\r\n}\r\n\r\n.expanded-modal-container {\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 999;\r\n  visibility: none;\r\n  transition: all 0.3s;\r\n  display: none;\r\n}\r\n\r\n.expanded-modal {\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 2em;\r\n  background: white;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.expanded-modal-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.expanded-modal-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-expanded-modal-close {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.expanded-modal-left{\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.expanded-modal-info p {\r\n  margin-right: 2rem;\r\n}\r\n\r\n.expanded-modal-footer button {\r\n  background: var(--Clr-LightGrey);\r\n  font-size: 1.3rem;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: var(--Btn-Radius);\r\n  cursor: pointer;\r\n}\r\n\r\n/* Utility Classes */\r\n\r\n.toggle-display {\r\n  display: block;\r\n}\r\n",""]);const i=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&d[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},d=[],i=0;i<e.length;i++){var c=e[i],s=r.base?c[0]+r.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:g,references:1})}d.push(u)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<a.length;d++){var i=n(a[d]);t[i].references--}for(var c=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),d=n.n(a),i=n(565),c=n.n(i),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(28),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const f=document.querySelector('[data-id="projects-list"]'),b=document.querySelector('[data-id="btn-create-new-project"]'),y=document.querySelector('[data-id="btn-create-new-task"]'),h=document.querySelector('[data-id="task-creation-container"]'),v=document.querySelector('[data-id="btn-task-close"]'),x=document.querySelector('[data-id="new-project-form-container"]'),w=document.querySelector('[data-id="btn-project-close"]'),k=document.querySelector('[data-id="expanded-modal-container"]'),E=document.querySelector('[data-id="task-edit-container"]'),j=document.querySelector('[data-id="btn-task-edit-close"]'),S=document.getElementById("new-project-form"),C=document.getElementById("create-new-task"),L=document.querySelector("[data-id='btn-clear-local-storage']");let T=null,q=0,P=[],I=[];class B{constructor(e,t,n,r,o,a){this.title=e,this.description=t,this.date=n,this.project=r,this.urgency=o,this.status=!1}changeStatus(){!1===this.status?this.status=!0:this.status=!1}set newTitle(e){this.title=e}set newDescription(e){this.description=e}set newDate(e){this.date=e}set newProject(e){this.project=e}set newUrgency(e){this.urgency=e}}class N{static saveTasks(){localStorage.setItem("toDoArray",JSON.stringify(P))}static getTasks(){let e=localStorage.getItem("toDoArray"),t=JSON.parse(e);t?A.instantiateLocalStorage(t):console.log("Huge W")}static saveProjects(){localStorage.setItem("projectsArray",JSON.stringify(I))}static getProjects(){const e=localStorage.getItem("projectsArray");let t=JSON.parse(e);t?(I=[...t],D.appendProjects(I),A.addOptions(I),A.addEditOptions(I),console.log(I)):console.log("Ouroboros")}static clearStorage(){localStorage.clear(),location.reload()}}const M=(()=>{const e=document.querySelector('[data-id="expanded-modal-title"]'),t=document.querySelector('[data-id="expanded-modal-date"]'),n=document.querySelector('[data-id="expanded-modal-notes"]'),r=document.querySelector('[data-id="expanded-modal-urgency"]');let o;const a=e=>{P.forEach(((t,n)=>{if(t.title===e){const e=P[n];console.log(e),e.changeStatus(),N.saveTasks(),D.appendTasks()}}))},d=e=>{P.forEach(((t,n)=>{t.title===e&&(P[n],P.splice(n,1),N.saveTasks(),D.appendTasks())}))},i=a=>{P.forEach(((d,i)=>{d.title===a&&(e.textContent=d.title,o=e.textContent,t.textContent=d.date,n.textContent=d.description,r.textContent=d.urgency)}))},c=()=>{const e=document.querySelector('[data-id="btn-expanded-edit"]'),t=document.querySelector('[data-id="btn-expanded-dlt"]'),n=document.querySelector('[data-id="btn-expanded-close"]');e.addEventListener("click",s),t.addEventListener("click",s),n.addEventListener("click",s)},s=e=>{"btn-expanded-dlt"===e.target.getAttribute("data-id")?u():"btn-expanded-edit"===e.target.getAttribute("data-id")?(l(e),p()):"btn-expanded-close"===e.target.getAttribute("data-id")&&D.toggleExpandedModal()},l=e=>{e.currentTarget.parentElement.parentElement.parentElement;let t=document.querySelector("[data-id=expanded-modal-title]").textContent;t=o,P.forEach(((e,n)=>{e.title===t&&(q=n)}))},u=e=>{console.log(o),d(o),D.toggleExpandedModal()},p=()=>{D.toggleEditModal(),D.toggleExpandedModal(),A.appendEditDetails(e,t,n,r),document.getElementById("edit-task").addEventListener("submit",A.editTaskSubmit)};return{decidePath:e=>{const t=e.target,n=t.parentElement.parentElement.parentElement.querySelector('[data-id="todo-title"]').textContent;var r;"btn-todo-expand"===t.getAttribute("data-id")?(r=n,D.toggleExpandedModal(),i(r),c()):"btn-todo-delete"===t.getAttribute("data-id")?d(n):"btn-todo-check"===t.getAttribute("data-id")&&a(n)},editExpandedTodo:p,expandedTitle:e,expandedDate:t,expandedNotes:n,expandedUrgency:r,changeObjectInstance:a}})(),A=(()=>{document.getElementById("edit-task");const e=document.getElementById("task-edit-title"),t=document.getElementById("task-edit-description"),n=document.getElementById("task-edit-date"),r=e=>{const t=new Option(e.value);document.querySelector("#project").add(t,void 0)};return{toDoArray:P,newProjectSubmit:e=>{const t=document.getElementById("new-project-name");e.preventDefault(),(e=>{I.forEach((t=>{if(t.toLowerCase()!==e.value.toLowerCase())return!0;alert("Tasks Cannot Share the Same Name!")}))})(t),I.push(t.value),N.saveProjects(),r(t),(e=>{const t=new Option(e.value);document.querySelector("#edit-project").add(t,void 0)})(t),D.toggleNewProjectModal(),D.createNewProject(t),D.clearNewProjectInput(t)},newTaskSubmit:e=>{e.preventDefault();const t=document.getElementById("task-title"),n=document.getElementById("task-description"),r=document.getElementById("task-date"),o=document.getElementById("project"),a=document.querySelector("input[name='Urgency']:checked");var d;T=o.value,d=t,P.forEach((e=>{e.title.toLowerCase()===d.value.toLowerCase()&&alert("Tasks Cannot Share The Same Name!")}));const i=new B(t.value,n.value,r.value,o.value,a.value);P.push(i),N.saveTasks(),console.log(P),D.toggleNewTaskModal(),D.clearNewTaskInputs(t,n,r),D.appendTasks(),D.removeActiveProject(),D.setActiveProject()},createNewOption:r,addOptions:e=>{e.forEach((e=>{const t=new Option(e);document.querySelector("#project").add(t,void 0)}))},addEditOptions:e=>{e.forEach((e=>{const t=new Option(e);document.querySelector("#edit-project").add(t,void 0)}))},editTaskSubmit:r=>{r.preventDefault();const o=document.querySelector("input[name='Edit-Urgency']:checked"),a=document.getElementById("edit-project");P[q].newTitle=e.value,P[q].newDate=n.value,P[q].newDescription=t.value,P[q].newUrgency=o.value,P[q].newProject=a.value,N.saveTasks(),D.toggleEditModal(),D.appendTasks()},appendEditDetails:(r,o,a,d)=>{e.value=r.textContent,n.value=o.textContent,t.value=a.textContent,document.querySelectorAll("input[name='Edit-Urgency']").forEach((e=>{e.id===d.textContent&&(e.checked=!0)}))},instantiateLocalStorage:e=>{e.forEach((e=>{const t=new B(e.title,e.description,e.date,e.project,e.urgency,e.status);P.push(t)}))}}})(),O=(()=>{const e=e=>{T=e.currentTarget.textContent,a(),d(),i(T),t()},t=()=>{n();const e=document.querySelector("[data-id='todo-template']");P.filter((e=>e.project===T)).forEach((t=>{const n=e.content.cloneNode(!0);r(t,n),c(n),document.getElementById("todo-container").appendChild(n)}))},n=()=>{document.getElementById("todo-container").innerHTML=""},r=(e,t)=>{const n=t.querySelector("[data-id='todo-title']"),r=t.querySelector("[data-id='todo-date']"),a=t.querySelector(".circle");o(e,a),n.textContent=e.title,r.textContent=e.date},o=(e,t)=>{!0===e.status&&(t.classList.add("circle-checked"),t.innerText="✓")},a=()=>{document.querySelectorAll(".btn-project").forEach((e=>e.classList.remove("active-btn")))},d=()=>{document.querySelectorAll(".btn-project").forEach((e=>{if(e.textContent===T)return e.classList.add("active-btn")}))},i=e=>{document.querySelector("[data-id='current-project-title']").textContent=e},c=e=>{e.querySelector("[data-id='btn-todo-check']").addEventListener("click",M.decidePath),e.querySelector("[data-id='btn-todo-delete']").addEventListener("click",M.decidePath),e.querySelector("[data-id='btn-todo-expand']").addEventListener("click",M.decidePath)};return{toggleNewProjectModal:()=>{x.classList.toggle("toggle-display")},toggleNewTaskModal:()=>h.classList.toggle("toggle-display"),toggleExpandedModal:()=>k.classList.toggle("toggle-display"),toggleEditModal:()=>E.classList.toggle("toggle-display"),clearNewProjectInput:e=>{e.value=""},clearNewTaskInputs:(e,t,n)=>{e.value="",t.value="",n.value=""},createNewProject:t=>{const n=document.createElement("li"),r=document.createElement("button");r.classList.add("btn-project"),r.textContent=t.value,r.onclick=e,n.appendChild(r),f.appendChild(n)},appendProjects:t=>{t.forEach((t=>{const n=document.createElement("li"),r=document.createElement("button");r.classList.add("btn-project"),r.textContent=t,r.onclick=e,n.appendChild(r),f.appendChild(n)}))},appendTasks:t,removeActiveProject:a,setActiveProject:d}})(),D=O;b.addEventListener("click",D.toggleNewProjectModal),w.addEventListener("click",D.toggleNewProjectModal),v.addEventListener("click",D.toggleNewTaskModal),j.addEventListener("click",D.toggleEditModal),y.addEventListener("click",D.toggleNewTaskModal),L.addEventListener("click",N.clearStorage),S.addEventListener("submit",A.newProjectSubmit),C.addEventListener("submit",A.newTaskSubmit),N.getProjects(),N.getTasks()})()})();