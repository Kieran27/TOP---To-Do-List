(()=>{"use strict";var e={28:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,"*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --Clr-Orange: #EE8434;\r\n  --Clr-Blue: #496DDB;\r\n  --Clr-Violet: #717EC3;\r\n  --Clr-Red: #C95D63;\r\n  --Clr-Lavender: #AE8799;\r\n\r\n  --Clr-White: #fff;\r\n  --Clr-LightGrey: hsl(223, 19%, 93%);\r\n  --Clr-VeryLightGrey: hsl(228, 33%, 97%);\r\n\r\n  --Primary-Font: 'Roboto', sans-serif;\r\n\r\n  --Btn-Radius: 0.65rem;\r\n}\r\n\r\nbody  {\r\n  margin: 0;\r\n  font-family: var(--Primary-Font);\r\n}\r\n\r\nheader {\r\n  background: var(--Clr-Orange);\r\n  padding: 1rem;\r\n}\r\n\r\nh2 {\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: relative;\r\n}\r\n\r\naside {\r\nbackground: var(--Clr-VeryLightGrey);\r\nwidth: 300px;\r\nmin-height: 80vh;\r\npadding: 1rem;\r\n}\r\n\r\nfooter {\r\n  padding: 1rem;\r\n  background: var(--Clr-Orange);\r\n  text-align: center;\r\n}\r\n\r\nh1, h2, h3 {\r\n  margin: 0;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\ninput, select, textarea {\r\n  margin-bottom: 1rem;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.wrapper {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-container {\r\n  width: 80vw;\r\n  height: 100%;\r\n  padding: 2rem;\r\n}\r\n\r\n.create-form-button {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  right: 0;\r\n  padding: 1rem;\r\n}\r\n\r\n.create-form {\r\nbackground-color: var(--Clr-Blue);\r\nborder: none;\r\ncolor: white;\r\nfont-size: 3rem;\r\nborder-radius: 50%;\r\nwidth: 75px;\r\nheight: 75px;\r\ntext-align: center;\r\ntransition: 0.3s;\r\ncursor: pointer;\r\n}\r\n\r\n.create-form:hover {\r\n  background: rgba(73,109,219, 0.7)\r\n}\r\n\r\n.btn-project {\r\n  background: none;\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n  margin-bottom: 0.5rem;\r\n  transition: 0.3s;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.btn-project:hover {\r\n  background: var(--Clr-LightGrey);\r\n}\r\n\r\n.active-btn {\r\n  background: var(--Clr-LightGrey);\r\n}\r\n\r\n.btn-create-new-project {\r\n  background: var(--Clr-Orange);\r\n  border-radius: var(--Btn-Radius);\r\n  padding: 0.75rem 1.2rem;;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-create-new-project:hover {\r\n  background: rgba(238,132,52, 0.8)\r\n}\r\n\r\n.todo:first-of-type {\r\n  border-top: 1px solid var(--Clr-LightGrey);\r\n}\r\n\r\n.todo-container-title {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.todo {\r\n  padding: 1rem 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--Clr-LightGrey);\r\n}\r\n\r\n.btn-check {\r\n  background: none;\r\n}\r\n\r\n.circle {\r\n   border-radius: 50%;\r\n   height: 25px;\r\n   width: 25px;\r\n   border: 2px solid var(--Clr-LightGrey);\r\n   cursor: pointer;\r\n}\r\n\r\n.circle-checked {\r\n  background: rgb(182, 245, 66)\r\n}\r\n\r\n.todo-left {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-info {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.todo-info p {\r\n  margin: 0;\r\n}\r\n\r\n.todo-right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.todo-right-urgency-container button {\r\n  width: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-right-expand-container button {\r\n  width: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo > button {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Form Styling */\r\n\r\n.task-creation-container {\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 999;\r\n  visibility: none;\r\n  transition: all 0.3s;\r\n  display: none;\r\n}\r\n\r\n.task-creation-container form {\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 2em;\r\n  background: white;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.task-creation-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-task-close {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.new-project-form-container {\r\n position: fixed;\r\n display: none;\r\n background-color: rgba(0, 0, 0, 0.25);\r\n top: 0;\r\n right: 0;\r\n bottom: 0;\r\n left: 0;\r\n width: 100%;\r\n height: 100%;\r\n z-index: 999;\r\n transition: all 0.3s;\r\n}\r\n\r\n.new-project-form-container form  {\r\n  width: 400px;\r\n  border-radius: var(--Btn-Radius);\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n   padding: 2em;\r\n   background: white;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   flex-direction: column;\r\n}\r\n\r\n.new-project-form-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-project-close {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.new-project-form-container form input {\r\n  margin: 0.3rem 0 1rem 0;\r\n}\r\n\r\n.new-project-form-header {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.submit-btn {\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  background: var(--Clr-Orange);\r\n  border-radius: var(--Btn-Radius)\r\n}\r\n\r\n.expanded-modal-container {\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 999;\r\n  visibility: none;\r\n  transition: all 0.3s;\r\n  display: none;\r\n}\r\n\r\n.expanded-modal {\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 2em;\r\n  background: white;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  border-radius: var(--Btn-Radius);\r\n}\r\n\r\n.expanded-modal-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.expanded-modal-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.btn-expanded-modal-close {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.expanded-modal-left{\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.expanded-modal-info p {\r\n  margin-right: 2rem;\r\n}\r\n\r\n.expanded-modal-footer button {\r\n  background: var(--Clr-LightGrey);\r\n  font-size: 1.3rem;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: var(--Btn-Radius);\r\n  cursor: pointer;\r\n}\r\n\r\n/* Utility Classes */\r\n\r\n.toggle-display {\r\n  display: block;\r\n}\r\n",""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=n.base?c[0]+n.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=r(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=o(m,n);n.byIndex=d,t.splice(d,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=r(a[i]);t[d].references--}for(var c=n(e,o),s=0;s<a.length;s++){var l=r(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),d=r(565),c=r.n(d),s=r(216),l=r.n(s),u=r(589),p=r.n(u),m=r(28),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const y=document.querySelector('[data-id="projects-list"]'),f=document.querySelector('[data-id="btn-create-new-project"]'),b=document.querySelector('[data-id="btn-create-new-task"]'),h=document.querySelector('[data-id="task-creation-container"]'),v=document.querySelector('[data-id="new-project-form-container"]'),x=document.querySelector('[data-id="btn-project-close"]'),w=document.querySelector('[data-id="expanded-modal-container"]'),k=document.querySelector('[data-id="task-edit-container"]'),j=document.getElementById("new-project-form"),E=document.getElementById("create-new-task");let S=null,C=0,T=[];class A{constructor(e,t,r,n,o,a){this.title=e,this.description=t,this.date=r,this.project=n,this.urgency=o,this.status=!1}changeStatus(){!1===this.status?this.status=!0:this.status=!1}set newTitle(e){this.title=e}set newDescription(e){this.description=e}set newDate(e){this.date=e}set newProject(e){this.project=e}set newUrgency(e){this.urgency=e}}class L{static saveTasks(){localStorage.setItem("toDoArray",JSON.stringify(P.toDoArray))}static getTasks(){let e=localStorage.getItem("toDoArray"),t=JSON.parse(e);t?P.toDoArray=[...t]:console.log("Huge W")}static copyTasks(){console.log(T)}static saveProjects(){localStorage.setItem("projectsArray",JSON.stringify(P.projectsArray))}static getProjects(){const e=localStorage.getItem("projectsArray");let t=JSON.parse(e);t=P.projectsArray}static createProjectButtons(){console.log("Button Created!")}}const q=(()=>{const e=document.querySelector('[data-id="expanded-modal-title"]'),t=document.querySelector('[data-id="expanded-modal-date"]'),r=document.querySelector('[data-id="expanded-modal-notes"]'),n=document.querySelector('[data-id="expanded-modal-urgency"]');let o;const a=e=>{P.toDoArray.forEach(((t,r)=>{t.title===e&&(P.toDoArray[r],P.toDoArray.splice(r,1),I.appendTasks())}))},i=a=>{P.toDoArray.forEach(((i,d)=>{i.title===a&&(e.textContent=i.title,o=e.textContent,t.textContent=i.date,r.textContent=i.description,n.textContent=i.urgency)}))},d=()=>{const e=document.querySelector('[data-id="btn-expanded-edit"]'),t=document.querySelector('[data-id="btn-expanded-dlt"]'),r=document.querySelector('[data-id="btn-expanded-close"]');e.addEventListener("click",c),t.addEventListener("click",c),r.addEventListener("click",c)},c=e=>{"btn-expanded-dlt"===e.target.getAttribute("data-id")?l():"btn-expanded-edit"===e.target.getAttribute("data-id")?(s(e),u()):"btn-expanded-close"===e.target.getAttribute("data-id")&&I.toggleExpandedModal()},s=e=>{e.currentTarget.parentElement.parentElement.parentElement;let t=document.querySelector("[data-id=expanded-modal-title]").textContent;t=o,P.toDoArray.forEach(((e,r)=>{e.title===t&&(C=r)}))},l=e=>{console.log(o),a(o),I.toggleExpandedModal()},u=()=>{I.toggleEditModal(),I.toggleExpandedModal(),P.appendEditDetails(e,t,r,n),document.getElementById("edit-task").addEventListener("submit",P.editTaskSubmit)};return{decidePath:e=>{const t=e.target,r=t.parentElement.parentElement.parentElement.querySelector('[data-id="todo-title"]').textContent;var n;"btn-todo-expand"===t.getAttribute("data-id")?(n=r,I.toggleExpandedModal(),i(n),d()):"btn-todo-delete"===t.getAttribute("data-id")?a(r):"btn-todo-check"===t.getAttribute("data-id")&&(e=>{P.toDoArray.forEach(((t,r)=>{t.title===e&&(P.toDoArray[r].changeStatus(),I.appendTasks())}))})(r)},editExpandedTodo:u,expandedTitle:e,expandedDate:t,expandedNotes:r,expandedUrgency:n}})(),P=(()=>{document.getElementById("edit-task");const e=document.getElementById("task-edit-title"),t=document.getElementById("task-edit-description"),r=document.getElementById("task-edit-date");let n=[],o=[];const a=e=>{const t=new Option(e.value);document.querySelector("#project").add(t,void 0)};return{toDoArray:n,projectsArray:o,newProjectSubmit:e=>{const t=document.getElementById("new-project-name");e.preventDefault(),o.push(t.value),L.saveProjects(),console.log(o),a(t),(e=>{const t=new Option(e.value);document.querySelector("#edit-project").add(t,void 0)})(t),I.toggleNewProjectModal(),I.createNewProject(t),I.clearNewProjectInput(t)},newTaskSubmit:e=>{e.preventDefault();const t=document.getElementById("task-title"),r=document.getElementById("task-description"),o=document.getElementById("task-date"),a=document.getElementById("project"),i=document.querySelector("input[name='Urgency']:checked");S=a.value;const d=new A(t.value,r.value,o.value,a.value,i.value);n.push(d),T.push(d),L.saveTasks(),L.getTasks(),console.log(n),I.toggleNewTaskModal(),I.clearNewTaskInputs(t,r,o),I.appendTasks(),I.removeActiveProject(),I.setActiveProject()},createNewOption:a,checkForProjectName:(e,t)=>(document.querySelectorAll(".btn-project").forEach((e=>{if(e.textContent.toLowerCase()===t.value.toLowerCase())return alert("Projects cannot share the same Name")})),alert("Hello")),checkForTaskName:e=>{n.forEach((t=>{t.title.toLowerCase()===e.toLowerCase()?alert("Tasks Cannot Share the Same Name!"):appendTasks()}))},editTaskSubmit:o=>{o.preventDefault();const a=document.querySelector("input[name='Edit-Urgency']:checked"),i=document.getElementById("edit-project");n[C].newTitle=e.value,n[C].newDate=r.value,n[C].newDescription=t.value,n[C].newUrgency=a.value,n[C].newProject=i.value,I.toggleEditModal(),I.appendTasks()},appendEditDetails:(n,o,a,i)=>{e.value=n.textContent,r.value=o.textContent,t.value=a.textContent,document.querySelectorAll("input[name='Edit-Urgency']").forEach((e=>{e.id===i.textContent&&(e.checked=!0)}))}}})(),I=(()=>{const e=e=>{S=e.currentTarget.textContent,a(),i(),d(S),t()},t=()=>{r();const e=document.querySelector("[data-id='todo-template']");P.toDoArray.filter((e=>e.project===S)).forEach((t=>{const r=e.content.cloneNode(!0);n(t,r),c(r),document.getElementById("todo-container").appendChild(r)}))},r=()=>{document.getElementById("todo-container").innerHTML=""},n=(e,t)=>{const r=t.querySelector("[data-id='todo-title']"),n=t.querySelector("[data-id='todo-date']"),a=t.querySelector(".circle");o(e,a),r.textContent=e.title,n.textContent=e.date},o=(e,t)=>{!0===e.status&&(t.classList.add("circle-checked"),t.innerText="✓")},a=()=>{document.querySelectorAll(".btn-project").forEach((e=>e.classList.remove("active-btn")))},i=()=>{document.querySelectorAll(".btn-project").forEach((e=>{if(e.textContent===S)return e.classList.add("active-btn")}))},d=e=>{document.querySelector("[data-id='current-project-title']").textContent=e},c=e=>{e.querySelector("[data-id='btn-todo-check']").addEventListener("click",q.decidePath),e.querySelector("[data-id='btn-todo-delete']").addEventListener("click",q.decidePath),e.querySelector("[data-id='btn-todo-expand']").addEventListener("click",q.decidePath)};return{toggleNewProjectModal:()=>{v.classList.toggle("toggle-display")},toggleNewTaskModal:()=>h.classList.toggle("toggle-display"),toggleExpandedModal:()=>w.classList.toggle("toggle-display"),toggleEditModal:()=>k.classList.toggle("toggle-display"),clearNewProjectInput:e=>{e.value=""},clearNewTaskInputs:(e,t,r)=>{e.value="",t.value="",r.value=""},createNewProject:t=>{const r=document.createElement("li"),n=document.createElement("button");n.classList.add("btn-project"),n.textContent=t.value,n.onclick=e,r.appendChild(n),y.appendChild(r)},appendTasks:t,removeActiveProject:a,setActiveProject:i}})();f.addEventListener("click",I.toggleNewProjectModal),x.addEventListener("click",I.toggleNewProjectModal),b.addEventListener("click",I.toggleNewTaskModal),j.addEventListener("submit",P.newProjectSubmit),E.addEventListener("submit",P.newTaskSubmit),L.getTasks(),L.copyTasks()})()})();