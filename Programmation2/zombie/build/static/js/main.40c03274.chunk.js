(this.webpackJsonpzombie=this.webpackJsonpzombie||[]).push([[0],{49:function(e,t,a){e.exports=a(64)},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),l=a(8),s=a.n(l),m=a(17),i=a(11),u=a(12),p=a(26),h=a(14),d=a(13),E=a(67),b=a(68),f=a(48),g=a(71),v=a(69),y=a(70),x=a(24),w="https://crudcrud.com/api/200cd0c2c56f4f4ca58afd2ed6141c31/zombies",j=a(72),N=a(73),k=a(7),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"dark",expand:"lg",className:"headerMenu"},r.a.createElement(k.c,{exact:!0,to:"/"},r.a.createElement(j.a.Brand,{className:"mr-5 ml-lg-5"},r.a.createElement("img",{alt:"",src:"https://www.guilded.gg/asset/GameIcons/StateOfDecay2-lg.png",className:"d-inline-block align-top logo"}))),r.a.createElement(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(N.a,{className:"mr-auto"}),r.a.createElement(N.a,null,r.a.createElement(k.c,{className:"mr-4 my-2 ",exact:!0,to:"/"}," Home"),r.a.createElement(k.c,{className:"mr-4 my-2 ",to:"/Liste"},"Zombies"),r.a.createElement(k.c,{className:"mr-4 my-2 ",to:"/AjouterZombie"},"Add Zombie"),r.a.createElement(N.a.Link,{href:"https://www.facebook.com/"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"126.445 2.281 589 589"},r.a.createElement("circle",{cx:"420.945",cy:"296.781",r:"294.5"}),r.a.createElement("path",{d:"M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z",fill:"#fff"})))))))}}]),a}(r.a.Component),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={photo:"",setErrors:{}},n.handleSave=n.handleSave.bind(Object(p.a)(n)),n.handlePhoto=n.handlePhoto.bind(Object(p.a)(n)),n.saveZombie=n.saveZombie.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"saveZombie",value:function(){var e=Object(m.a)(s.a.mark((function e(t,a,n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,picture:a,special:n})});case 3:if(!(r=e.sent).ok){e.next=11;break}return e.next=7,r.json();case 7:return c=e.sent,this.props.history.push("/"),x.b.success("Ajout du Zombie "+t),e.abrupt("return",c);case 11:throw new Error("Request failed!");case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"formIsValid",value:function(e,t,a){var n={};return e||(n.nom="Le nom est obligatoire"),t||(n.photo="La photo est obligatoire"),a||(n.nom="L'attaque 1 est obligatoire"),this.setState({setErrors:n}),0===Object.keys(n).length}},{key:"handleSave",value:function(e){e.preventDefault();var t=document.getElementById("nomZombie").value,a=document.getElementById("photoZombie").value,n=document.getElementById("attaque1").value;this.formIsValid(t,a,n)&&this.saveZombie(t,a,n)}},{key:"handlePhoto",value:function(e){var t=document.getElementById("photoZombie").value;this.setState({photo:t})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{fluid:!0,className:" box2"},r.a.createElement(O,null),r.a.createElement(b.a,{className:" align-items-center mx-3"},r.a.createElement(f.a,{lg:"4"}),r.a.createElement(f.a,{lg:"4",className:" my-5 "},r.a.createElement("h1",{className:"mb-3 text-center text-white"},"Add Zombies"),r.a.createElement("p",{className:"mb-5 text-center"},r.a.createElement("strong",null,"Help your community to survival in the zombie apocalypse")),r.a.createElement(g.a,null,r.a.createElement(g.a.Group,{controlId:"nomZombie"},r.a.createElement(g.a.Label,{className:"text-white"},"Name *"),r.a.createElement(g.a.Control,{type:"text",placeholder:"Entrer le nom du Zombie"})),r.a.createElement(g.a.Group,{controlId:"photoZombie"},r.a.createElement(g.a.Label,{className:"text-white mt-3"},"Picture (URL) *"),r.a.createElement(g.a.Control,{type:"text",placeholder:"Entrer une URL valide",onBlur:this.handlePhoto})),""!==this.state.photo&&r.a.createElement(v.a,{src:this.state.photo,className:"img-form"}),r.a.createElement(g.a.Group,{controlId:"attaque1",className:"mt-3"},r.a.createElement(g.a.Label,{className:"text-white mt-3"},"Description *"),r.a.createElement(g.a.Control,{as:"textarea",rows:"5",placeholder:"Entrer la description du zombie"})),r.a.createElement(y.a,{className:"mt-3 mb-5",variant:"orange",type:"submit",onClick:this.handleSave},"Save"))))))}}]),a}(r.a.Component),Z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"page 404")}}]),a}(r.a.Component),C=a(5),I=(a(61),a(62),a(19));var L=function(e){var t=Object(n.useState)({name:"",picture:"",special:""}),a=Object(I.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(e.location.search.substring(4,e.location.search.length)),i=Object(I.a)(l,1)[0],u=Object(n.useState)(""),p=Object(I.a)(u,1)[0];function h(){return(h=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(w+"/"+i);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,o(a),console.log(a),t.ok){e.next=11;break}throw Error(t.statusText);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function d(){return(d=Object(m.a)(s.a.mark((function t(a,n,r){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(w+"/"+i,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,picture:n,special:r})});case 3:if(!(c=t.sent).ok){t.next=8;break}return e.history.push("/"),x.b.success("Modification du Zombie "+a),t.abrupt("return",c);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function j(){return(j=Object(m.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(w+"/"+i,{method:"delete"});case 3:if(!(a=t.sent).ok){t.next=8;break}return e.history.push("/"),x.b.error("Supression du zombie "),t.abrupt("return",a);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{fluid:!0,className:" box2"},r.a.createElement(O,null),r.a.createElement(b.a,{className:" align-items-center mx-3"},r.a.createElement(f.a,{lg:"4"}),r.a.createElement(f.a,{lg:"4",className:" my-5 "},r.a.createElement(g.a,null,r.a.createElement(g.a.Group,{controlId:"nomZombie"},r.a.createElement(g.a.Label,{className:"text-white"},"Nom"),r.a.createElement(g.a.Control,{type:"text",defaultValue:c.name})),r.a.createElement(g.a.Group,{controlId:"photoZombie"},r.a.createElement(g.a.Label,{className:"text-white"},"URL d'une photo"),r.a.createElement(g.a.Control,{type:"text",placeholder:"Entrer une URL valide",onBlur:function(e){var t=document.getElementById("photoZombie").value;p(t)},defaultValue:c.picture})),""!==c.picture&&r.a.createElement(v.a,{src:c.picture,className:"img-form"}),r.a.createElement(g.a.Group,{controlId:"attaque1",className:"mt-3"},r.a.createElement(g.a.Label,{className:"text-white"},"Description"),r.a.createElement(g.a.Control,{as:"textarea",rows:"5",placeholder:"Entrer la description",defaultValue:c.special})),r.a.createElement(y.a,{variant:"orange",type:"submit",onClick:function(e){e.preventDefault(),function(e,t,a){d.apply(this,arguments)}(document.getElementById("nomZombie").value,document.getElementById("photoZombie").value,document.getElementById("attaque1").value)}}," Enregistrer"),r.a.createElement("p",{className:"btn btn-danger ml-md-5 mt-3",onClick:function(){return j.apply(this,arguments)}},"Supprimer le zombie"))))))};var P=function(e){var t=Object(n.useState)({name:"",picture:"",special:""}),a=Object(I.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(e.location.search.substring(4,e.location.search.length)),i=Object(I.a)(l,1)[0];function u(){return(u=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(w+"/"+i);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,o(a),console.log(a),t.ok){e.next=11;break}throw Error(t.statusText);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{fluid:!0,className:"box3"},r.a.createElement(O,null),r.a.createElement(b.a,{className:"mt-5"},r.a.createElement(f.a,{lg:"3"}),r.a.createElement(f.a,{xl:"2",md:"12",sm:"12",className:"text-center"},r.a.createElement("h1",{className:"mt-5"},c.name)),r.a.createElement(f.a,{lg:"4",md:"12",className:"mt-3 mb-5 mx-lg-5 mr-md-5 center"},r.a.createElement(v.a,{src:c.picture,className:"img-fiche"}),r.a.createElement("h1",{className:"my-4"},"Description"),r.a.createElement("p",{className:"mb-5"},c.special),r.a.createElement(k.b,{to:"/Liste",className:"btn btn-orange my-5"},"Back to zombies list")))))},B=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{fluid:!0,className:"box3"},r.a.createElement(b.a,{className:"box4"}),r.a.createElement(b.a,null,r.a.createElement(f.a,{xs:12,md:12}," "),r.a.createElement(f.a,{xs:6,md:3},r.a.createElement(v.a,{className:"gallery my-4",src:"https://nightwing.stevivor.com/wp-content/uploads/2018/05/State-of-Decay-2-Logo.jpg"})),r.a.createElement(f.a,{xs:6,md:3},r.a.createElement(v.a,{className:"gallery my-4",src:"https://sm.ign.com/ign_in/news/s/state-of-d/state-of-decay-2s-juggernauts-can-wipe-out-your-whole-group_tdnq.jpg"})),r.a.createElement(f.a,{xs:6,md:3},r.a.createElement(v.a,{className:"gallery my-4",src:"https://nightwing.stevivor.com/wp-content/uploads/2018/05/State-of-Decay-2-Logo.jpg"})),r.a.createElement(f.a,{xs:6,md:3},r.a.createElement(v.a,{className:"gallery my-4",src:"https://www.xboxwallpapers.net/1920x1080/state-of-decay.jpg"}))),r.a.createElement(b.a,null,r.a.createElement(f.a,{xs:12,md:12}," "),r.a.createElement(f.a,{xs:12,md:4},r.a.createElement(v.a,{className:"gallery my-4 ",src:"https://i.ytimg.com/vi/3aXo_IJiaPQ/maxresdefault.jpg"})),r.a.createElement(f.a,{xs:12,md:4},r.a.createElement(v.a,{className:"gallery my-4 ",src:"https://nofrag.com/wp-content/uploads/2018/05/SoD.jpg"})),r.a.createElement(f.a,{xs:12,md:4},r.a.createElement(v.a,{className:"gallery my-4",src:"https://cdn.smartoys.be/catalog/images/thumbs/1280_704/products/5425025606474.JPG"}))),r.a.createElement(b.a,{className:"box4"}))}}]),a}(r.a.Component);var z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{fluid:!0,className:"box1"},r.a.createElement(O,null),r.a.createElement(b.a,{className:"text-center text-white align-items-center"},r.a.createElement(f.a,{lg:"12",className:"mb-5"},r.a.createElement("img",{className:"image",src:"https://www.stateofdecay.com/wp-content/themes/state-of-decay-franchise/dist/images/sod_3_logo.png"})))),r.a.createElement(B,null))},T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.b,{to:"/",className:"btn btn-black my-5"},"Back to Home"))}}]),a}(r.a.Component);var q=function(){var e=Object(C.f)();return console.log(e.pathname),r.a.createElement(E.a,{fluid:!0},r.a.createElement(b.a,{className:"footer text-center align-items-center"},r.a.createElement(f.a,{lg:"12"},"/"!=e.pathname&&r.a.createElement(T,null))),r.a.createElement(b.a,{className:"footer-bottom text-center align-items-center"},r.a.createElement(f.a,{lg:"12 text-white"},"ZombieMedia @ 2020 - Erik Paquet")))},F=a(74),R=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{xl:"2",md:"6",xs:"12",className:"my-5 text-center"},r.a.createElement(F.a,{className:"cards my-5"},r.a.createElement(F.a.Img,{variant:"top",src:this.props.urlPhoto}),r.a.createElement(F.a.Body,null,r.a.createElement(F.a.Title,null,r.a.createElement(k.b,{to:"Perso/"+this.props.nom+"?id="+this.props.id},r.a.createElement("h2",null,this.props.nom))),r.a.createElement(k.b,{to:"Perso/modifier/"+this.props.nom+"?id="+this.props.id},r.a.createElement("h2",null,"\ud83d\udd89"))))))}}]),a}(r.a.Component);var A=function(){var e=Object(n.useState)([]),t=Object(I.a)(e,2),a=t[0],c=t[1];function o(){return(o=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(w);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,c(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[a.join(",")]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{fluid:!0,className:"box5"},r.a.createElement(O,null),r.a.createElement(b.a,{className:"text-center align-items-center"},a.map((function(e,t){return r.a.createElement(R,{nom:e.name,id:e._id,key:e.name+e._id,urlPhoto:e.picture})})))),r.a.createElement(E.a,{fluid:!0,className:"box3"},r.a.createElement(b.a,{className:"text-center align-items-center"},r.a.createElement(f.a,{lg:"12",className:"my-5"},r.a.createElement("h1",{className:"my-5"},"Lead your community to survival in the zombie apocalypse")))),r.a.createElement(E.a,{fluid:!0,className:"box6"},r.a.createElement(y.a,{variant:"primary",size:"lg",block:!0,id:"boutonInstall"}," Installer l'application ")))};var D=function(){return Object(C.f)(),r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{autoClose:3e3,hideProgressBar:!0}),r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/",exact:!0,component:z}),r.a.createElement(C.a,{path:"/ajouterZombie",component:S}),r.a.createElement(C.a,{path:"/Perso/modifier/:nom",component:L}),r.a.createElement(C.a,{path:"/Perso/:nom",component:P}),r.a.createElement(C.a,{path:"/Liste",component:A}),r.a.createElement(C.a,{component:Z})),r.a.createElement(q,null))},G=(a(63),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,null,r.a.createElement(D,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(t,e)}))}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.40c03274.chunk.js.map