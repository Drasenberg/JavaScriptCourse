/* eslint-disable */ 
(()=>{"use strict";var t,e,n={},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var s=o[t]={exports:{}};return n[t](s,s.exports,r),s.exports}r.m=n,r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+".app.js",r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="tooling-01-starting-project:",r.l=(n,o,s,i)=>{if(t[n])t[n].push(o);else{var a,c;if(void 0!==s)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var p=d[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+s){a=p;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",e+s),a.src=n),t[n]=[o];var h=(e,o)=>{a.onerror=a.onload=null,clearTimeout(u);var r=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((t=>t(o))),e)return e(o)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),c&&document.head.appendChild(a)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.p="assets/scripts/",(()=>{var t={179:0};r.f.j=(e,n)=>{var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var s=new Promise(((n,r)=>o=t[e]=[n,r]));n.push(o[2]=s);var i=r.p+r.u(e),a=new Error;r.l(i,(n=>{if(r.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,o[1](a)}}),"chunk-"+e,e)}};var e=(e,n)=>{var o,s,[i,a,c]=n,d=0;if(i.some((e=>0!==t[e]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);c&&c(r)}for(e&&e(n);d<i.length;d++)s=i[d],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0},n=self.webpackChunktooling_01_starting_project=self.webpackChunktooling_01_starting_project||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),console.log("DOM Helper executing!");class s{static clearEventListeners(t){const e=t.cloneNode(!0);return t.replaceWith(e),e}static moveElement(t,e){const n=document.getElementById(t);document.querySelector(e).append(n),n.scrollIntoView({behavior:"smooth"})}}console.log("Project Item created!");class i{constructor(t,e,n){this.id=t,this.hasActiveTooltip=!1,this.updateProjectListsHandler=e,this.connectMoreInfoButton(),this.connectSwitchButton(n),this.connectDrag()}showMoreInfoHandler(){if(this.hasActiveTooltip)return;const t=document.getElementById(this.id).dataset.extraInfo;r.e(331).then(r.bind(r,331)).then((e=>{new e.Tooltip((()=>{this.hasActiveTooltip=!1}),t,this.id).attach(),this.hasActiveTooltip=!0}))}connectDrag(){const t=document.getElementById(this.id);t.addEventListener("dragstart",(t=>{t.dataTransfer.setData("text/plain",this.id),t.dataTransfer.effectAllowed="move"})),t.addEventListener("dragend",(t=>{console.log(t)}))}connectMoreInfoButton(){document.getElementById(this.id).querySelector("button:first-of-type").addEventListener("click",this.showMoreInfoHandler.bind(this))}connectSwitchButton(t){let e=document.getElementById(this.id).querySelector("button:last-of-type");e=s.clearEventListeners(e),e.textContent="active"===t?"Finish":"Activate",e.addEventListener("click",this.updateProjectListsHandler.bind(null,this.id))}update(t,e){this.updateProjectListsHandler=t,this.connectSwitchButton(e)}}class a{constructor(t){this.type=t,this.projects=[];const e=document.querySelectorAll(`#${t}-projects li`);for(const t of e)this.projects.push(new i(t.id,this.switchProject.bind(this),this.type));console.log(this.projects),this.connectDroppable()}connectDroppable(){console.log("hi");const t=document.querySelector(`#${this.type}-projects ul`);t.addEventListener("dragenter",(e=>{"text/plain"===e.dataTransfer.types[0]&&(t.parentElement.classList.add("droppable"),e.preventDefault())})),t.addEventListener("dragover",(t=>{"text/plain"===t.dataTransfer.types[0]&&t.preventDefault()})),t.addEventListener("dragleave",(e=>{e.relatedTarget.closest(`#${this.type}-projects ul`)!==t&&t.parentElement.classList.remove("droppable")})),t.addEventListener("drop",(e=>{const n=e.dataTransfer.getData("text/plain");this.projects.find((t=>t.id===n))||(document.getElementById(n).querySelector("button:last-of-type").click(),t.parentElement.classList.remove("droppable"))}))}setSwitchHandlerFunction(t){this.switchHandler=t}addProject(t){this.projects.push(t),function(t,e){const n=document.getElementById(t);document.querySelector(e).append(n),n.scrollIntoView({behavior:"smooth"})}(t.id,`#${this.type}-projects ul`),t.update(this.switchProject.bind(this),this.type)}switchProject(t){this.switchHandler(this.projects.find((e=>e.id===t))),this.projects=this.projects.filter((e=>e.id!==t))}}globalThis.DEFAULT_VALUE="MAX",class{static init(){const t=new a("active"),e=new a("finished");t.setSwitchHandlerFunction(e.addProject.bind(e)),e.setSwitchHandlerFunction(t.addProject.bind(t))}static startAnalytics(){const t=document.createElement("script");t.src="assets/scripts/Utility/Analytics.js",t.defer=!0,document.head.append(t)}}.init()})();