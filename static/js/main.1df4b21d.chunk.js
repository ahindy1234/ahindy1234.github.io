(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{117:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),s=(t(83),t(50)),i=t(6),o=!0,m={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Ali",middleName:"",lastName:"Hindy",message:" Lifelong learner. Passionate about machine learning, NLP, deep learning, and more.",icons:[{image:"fa-github",url:"https://github.com/ahindy1234"},{image:"fa-instagram",url:"https://www.instagram.com/ahindy_/"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/ali-hindy-6484a6208/"},{image:"fa-twitter",url:"https://twitter.com/AliHindy2"}]},u={show:!0,heading:"About Me",imageLink:t(84),imageSize:375,message:"My name is Ali Hindy. I\u2019m a current undergrad at Stanford University. I'm most passionate about helping the community and dispelling inequality by using the wonderful tools of computer science, and my goal is to pursue this passion within the field of machine learning. In my free time I like working on open source projects.",resume:t(85)},A={show:!1,heading:"Recent Projects",gitHubUsername:"ahindy1234",reposLength:4,specificRepos:[]},d={show:!1,heading:"Leadership",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",images:[{img:t(56),label:"First slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{img:t(56),label:"Second slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."}],imageSize:{width:"615",height:"450"}},g={show:!0,heading:"Skills",hardSkills:[{name:"Python",value:90},{name:"SQL",value:75},{name:"Data Structures",value:85},{name:"C/C++",value:65},{name:"JavaScript",value:90},{name:"React",value:65},{name:"HTML/CSS",value:55},{name:"C#",value:80}],softSkills:[{name:"Goal-Oriented",value:80},{name:"Collaboration",value:90},{name:"Positivity",value:75},{name:"Adaptability",value:85},{name:"Problem Solving",value:75},{name:"Empathy",value:90},{name:"Organization",value:70},{name:"Creativity",value:90}]},E=!0,f="Get In Touch",h="I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",p="ahindy@stanford.edu",b={show:!0,heading:"Experiences",data:[{role:"Data Science & Software Engineering Intern @ Point Pickup ",companylogo:t(86),date:"June 2021 \u2013 August 2021"},{role:"Product Manager / Advisor @ Yakera",companylogo:t(87),date:"June  2021 \u2013 August 2021"}]},w=t(68),v=t.n(w),y=t(24),S=t(38),B=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,c=e.icons;return r.a.createElement(S.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(y.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(v.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),k=t(17),N=t.n(k),j=t(25),x=t(8),M=(t(89),t(21)),L=t.n(M),C=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),D=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,c=e.resume,s=r.a.useState(""),i=Object(x.a)(s,2),o=i[0],m=i[1],u=r.a.useState(Boolean(n)),A=Object(x.a)(u,2),d=A[0],g=A[1];r.a.useEffect((function(){n&&!C.test(n)?E():m(n)}),[n]);var E=function(){var e=Object(j.a)(N.a.mark((function e(){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,L.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,m(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),g(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},d&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:o,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-".concat(d?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),c&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:c,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},U=t(69),I=t(77),K=t(33),G=t(32),R=t(37),Q=t(30),W=t.n(Q),Z=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"))},V=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),c=Object(x.a)(l,2),s=c[0],i=c[1],o=Object(n.useCallback)(Object(j.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get(a);case 3:return t=e.sent,e.abrupt("return",i(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){o()}),[o]);var m=[],u=0;for(var A in s)m.push(A),u+=s[A];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(s[e]/u*1e3)/10," %")})):"code yet to be deployed.")},T=function(e){var a=e.star_count,t=e.repo_url,l=e.pushed_at,c=Object(n.useState)("0 mints"),s=Object(x.a)(c,2),i=s[0],o=s[1],m=Object(n.useCallback)((function(){var e=new Date(l),a=(new Date).getTime()-e.getTime(),t=Math.trunc(a/1e3/60/60);if(t<24){if(t<1)return o("just now");var n=1===t?"hour":"hours";return o("".concat(t.toString()," ").concat(n," ago"))}var r=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return o("on ".concat(r))}),[l]);return Object(n.useEffect)((function(){m()}),[m]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:t+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},a))),r.a.createElement("small",{className:"text-muted"},"Updated ",i))},P=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,c=a.stargazers_count,s=a.languages_url,i=a.pushed_at;return r.a.createElement(G.a,{md:6},r.a.createElement(R.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(R.a.Body,null,r.a.createElement(R.a.Title,{as:"h5"},t||r.a.createElement(W.a,null)," "),r.a.createElement(R.a.Text,null,n?n||r.a.createElement(W.a,{count:3}):""," "),l?r.a.createElement(Z,{svn_url:l}):r.a.createElement(W.a,{count:2}),r.a.createElement("hr",null),s?r.a.createElement(V,{languages_url:s,repo_url:l}):r.a.createElement(W.a,{count:3}),a?r.a.createElement(T,{star_count:c,repo_url:l,pushed_at:i}):r.a.createElement(W.a,null))))},H={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},Y="https://api.github.com",z=function(e){var a=e.heading,t=e.username,l=e.length,c=e.specfic,s="".concat(Y,"/users/").concat(t,"/repos?sort=updated&direction=desc"),i="".concat(Y,"/repos/").concat(t),o=new Array(l+c.length).fill(H),m=Object(n.useState)([]),u=Object(x.a)(m,2),A=u[0],d=u[1],g=Object(n.useCallback)(Object(j.a)(N.a.mark((function e(){var a,t,n,r,o,m;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,L.a.get(s);case 4:t=e.sent,a=Object(I.a)(t.data.slice(0,l)),e.prev=6,n=Object(U.a)(c),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=18;break}return o=r.value,e.next=14,L.a.get("".concat(i,"/").concat(o));case 14:m=e.sent,a.push(m.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:d(a),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2.message);case 37:case"end":return e.stop()}}),e,null,[[1,34],[6,28],[8,20,23,26]])}))),[s,l,c,i]);return Object(n.useEffect)((function(){g()}),[g]),r.a.createElement(S.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(y.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(K.a,null,A.length?A.map((function(e,a){return r.a.createElement(P,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):o.map((function(e,a){return r.a.createElement(P,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},O=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(y.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/hashirshoaeb","aria-label":"My GitHub"},"Ali Hindy")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},"Project code is open source. Feel free to fork and make your own version."))))},J="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,q="undefined"!==typeof window;function F(e){var a=e.element,t=e.useWindow;if(!q)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function X(e,a,t,r,l){var c=Object(n.useRef)(F({useWindow:r})),s=null,i=function(){var a=F({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};J((function(){if(q){var e=function(){l?null===s&&(s=setTimeout(i,l)):i()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}X.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var _=function(e){var a=r.a.useState(null),t=Object(x.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},$=t(36),ee=t(20),ae=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(x.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(0),o=Object(x.a)(i,2),d=o[0],E=o[1],f=r.a.useRef(),h=_(f),p=h?h.bottom:0;return X((function(e){e.prevPos;var t=e.currPos;h&&(t.y+a.current.offsetTop-h.bottom>5?s(!0):s(!1),E(t.y))}),[p]),r.a.useEffect((function(){h&&(p-d>=a.current.offsetTop?s(!1):s(!0))}),[p,h,a,d]),r.a.createElement($.a,{ref:f,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement($.a.Brand,{className:"brand",href:"/home/#home"},"<".concat(m.firstName," />")),r.a.createElement($.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement($.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ee.a,{className:"mr-auto"},A.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/home/#projects"},"Projects"),r.a.createElement(ee.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"),u.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/home/#aboutme"},"About"),g.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/home/#skills"},"Skills"))))})),te=t(51),ne=t(74),re=t(73);var le=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement(re.a,{className:n?" progress-bar-animation":"progress",now:t}))};function ce(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(le,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var se=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{xs:12,md:6},r.a.createElement(ce,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(G.a,{xs:12,md:6},r.a.createElement(ce,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var ie=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),c=r.a.useState(!1),s=Object(x.a)(c,2),i=s[0],o=s[1];return X((function(e){e.prevPos;var a=e.currPos;!i&&a.y-400<0&&o(!0)}),[],l),r.a.createElement(S.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(y.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement(ne.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(te.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(K.a,{className:"pt-3 px-1"},r.a.createElement(se,{skills:t,isScrolled:i}))),r.a.createElement(te.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(K.a,{className:"pt-3 px-1"},r.a.createElement(se,{skills:n,isScrolled:i}))))))},oe=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},me=t(47),ue=function(e){var a=e.heading,t=e.message,n=e.img,l=e.imageSize;return r.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"lead"},t)),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(me.a,null,n.map((function(e,a){return r.a.createElement(me.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:l.width,height:l.height}),r.a.createElement(me.a.Caption,null,r.a.createElement("h3",null,e.label),r.a.createElement("p",null,e.paragraph)))})))))))},Ae=function(e){var a=e.data;return r.a.createElement(G.a,{lg:"6"},r.a.createElement("div",{className:"pb-5 text-center"},r.a.createElement("img",{className:" bg-white mb-3",src:a.companylogo,alt:""}),r.a.createElement("p",{className:"lead"},a.role,r.a.createElement("br",null),a.date)))},de=function(e){var a=e.experiences;return r.a.createElement("section",{className:"section"},r.a.createElement(y.a,null,r.a.createElement(S.a,{fluid:!0,className:"bg-white"},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a.heading),r.a.createElement(K.a,null,a.data.map((function(e){return r.a.createElement(Ae,{key:e.company,data:e})}))))))},ge=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(D,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),b.show&&r.a.createElement(de,{experiences:b}),A.show&&r.a.createElement(z,{heading:A.heading,username:A.gitHubUsername,length:A.reposLength,specfic:A.specificRepos}),d.show&&r.a.createElement(ue,{heading:d.heading,message:d.message,img:d.images,imageSize:d.imageSize}),g.show&&r.a.createElement(ie,{heading:g.heading,hardSkills:g.hardSkills,softSkills:g.softSkills}))})),Ee=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/home/"},o&&r.a.createElement(ae,{ref:e}),r.a.createElement(i.a,{path:"/",exact:!0,component:function(){return r.a.createElement(ge,{ref:e})}}),r.a.createElement(O,null,E&&r.a.createElement(oe,{heading:f,message:h,email:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,a,t){e.exports=t.p+"static/media/hashirshoaeb.32f6b574.png"},78:function(e,a,t){e.exports=t(117)},83:function(e,a,t){},84:function(e,a){e.exports="data:image/jpeg;base64,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"},85:function(e,a,t){e.exports=t.p+"static/media/Ali Hindy Resume (JUN 2 LAST UPDATE).d7b612da.pdf"},86:function(e,a,t){e.exports=t.p+"static/media/point_pickup.b9da6f84.png"},87:function(e,a,t){e.exports=t.p+"static/media/yakera.15c00941.png"},89:function(e,a,t){e.exports=t.p+"static/media/resume.9d3da0e2.pdf"}},[[78,1,2]]]);
//# sourceMappingURL=main.1df4b21d.chunk.js.map