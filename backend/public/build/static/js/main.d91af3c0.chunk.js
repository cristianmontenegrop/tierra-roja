(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{195:function(e,n,a){e.exports=a(360)},200:function(e,n,a){},360:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(24),i=a.n(l),o=(a(200),a(54)),s=a(38);a(201);var c=function(){return r.a.createElement("div",{className:"page"},r.a.createElement("h2",null,"Not found"))},m=a(58),u=a(59),p=a(60);function d(){var e=Object(u.a)(['\ndisplay: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-weight: bold;\n  .title {\n        font-family: "Roboto", sans-serif;\n        margin: 0 20px;\n        text-transform: uppercase;\n        transition: all .4s ease-in-out;   \n  }\n  .title h1{\n    font-size: 1rem;\n  }\n  .title h2{\n    font-size: .8rem;\n  }\n  .title:hover {\n      transform: scale(1.2)\n  }\n  @media all and (min-width: 1000px) {\n    .title {\n        margin: 0 150px;\n    }\n    .title h1{\n        font-size: 2rem;\n      }\n      .title h2{\n        font-size: 1.6rem;\n      }\n  }\n']);return d=function(){return e},e}var b=p.b.div(d()),g=function(){var e=Object(t.useState)("side-div transition"),n=Object(m.a)(e,2),a=n[0],l=n[1],i=Object(t.useState)({}),o=Object(m.a)(i,2),s=o[0],c=o[1];function u(){if(a.includes("anim-trans"))return l("side-div transition"),c({});l("side-div transition anim-trans"),setTimeout((function(){return c({opacity:"1"})}),500)}return r.a.createElement("div",null,r.a.createElement("div",{className:"outer-wrapper"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(b,{id:"cover",className:"slide one"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Tierra Roja"),r.a.createElement("h2",null,"Mujeres del barro"))),r.a.createElement("div",{id:"about",className:"slide two"},r.a.createElement("div",{onClick:u,className:a},r.a.createElement("div",{className:"about-info",style:s},r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique saepe ea perspiciatis molestias distinctio sed ipsum! Obcaecati voluptates dignissimos temporibus maiores doloremque, explicabo placeat praesentium vero velit delectus atque deleniti."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique saepe ea perspiciatis molestias distinctio sed ipsum! Obcaecati voluptates dignissimos temporibus maiores doloremque, explicabo placeat praesentium vero velit delectus atque deleniti."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique saepe ea perspiciatis molestias distinctio sed ipsum! Obcaecati voluptates dignissimos temporibus maiores doloremque, explicabo placeat praesentium vero velit delectus atque deleniti."))),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Somos barro"),r.a.createElement("p",null),r.a.createElement("button",{onClick:u,className:"cta btn"},"Mujeres del barro"))),r.a.createElement("div",{id:"portfolios",className:"slide three"},r.a.createElement("div",{className:"side-div"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Conoce nuestros ",r.a.createElement("br",null),"trabajos"),r.a.createElement("button",{className:"cta btn"},"Portfolios"))),r.a.createElement("div",{id:"galeria",className:"slide four"}),r.a.createElement("div",{id:"aula",className:"slide five"}),r.a.createElement("div",{id:"contacto",className:"slide six"}))))},f=a(33),E=a.n(f),v=a(40),h=a(362),w=a(363),x=a(370),k=a(366),y=a(46),j=a(365),O=a(371),I=a(364),N=a(87),F=a.n(N),z=F.a.create({baseURL:"/auth",withCredentials:!0}),C=function(e,n){return z.post("/edit/".concat(e),n)},P=function(){return z.get("/loggedin")},T=function(){return z.get("/logout")},L=F.a.create({baseURL:"/artist",withCredentials:!0}),R=function(){return L.get("/get")},S=Object(t.createContext)(),q=function(e){var n=Object(t.useState)(null),a=Object(m.a)(n,2),l=a[0],i=a[1],o=Object(t.useState)(null),s=Object(m.a)(o,2),c=s[0],u=s[1];Object(t.useEffect)((function(){function e(){return(e=Object(v.a)(E.a.mark((function e(){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,a=n.data,d(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(t.useEffect)((function(){function e(){return(e=Object(v.a)(E.a.mark((function e(){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:n=e.sent,a=n.data,p(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var p=function(e){u(e)},d=function(e){i(e)},b={user:l,login:d,logout:function(){i(null)},artist:c,setUserArtistFn:p};return r.a.createElement(S.Provider,Object.assign({},e,{value:b}))},_=function(){return Object(t.useContext)(S)},A=function(){var e=_(),n=e.user,a=e.artist,t=e.setUserArtistFn,l=Object(s.g)(),i={wrapperCol:{offset:0,span:24}},c=function(){var e=Object(v.a)(E.a.mark((function e(a){var r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._id,console.log(a),e.next=4,o=a,L.post("/create",o);case 4:r=e.sent,i=r.data.newArtist,t(i),l.push("/artist");case 8:case"end":return e.stop()}var o}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("h1",null,"Mi perfil de artista"),a?r.a.createElement(h.a,null,r.a.createElement(w.a,{offset:2,span:20},r.a.createElement(x.a,{column:2,title:"Informaci\xf3n art\xedstica",layout:"vertical"},r.a.createElement(x.a.Item,{label:"Nombre art\xedstico"},a.name),r.a.createElement(x.a.Item,{label:"Profesi\xf3n"},a.profession),r.a.createElement(x.a.Item,{span:2,label:"Biograf\xeda"},a.bio),r.a.createElement(k.a.title,{level:4},"Redes sociales"),r.a.createElement(x.a.Item,{label:"Instagram"},a.socialMedia.instagram),r.a.createElement(x.a.Item,{label:"Facebook"},a.socialMedia.facebook),r.a.createElement(x.a.Item,{label:"Twitter"},a.socialMedia.twitter),r.a.createElement(x.a.Item,{label:"P\xe1gina personal"},a.socialMedia.other),r.a.createElement(x.a.Item,{span:1},r.a.createElement(o.b,{to:"/"},r.a.createElement(y.a,null,"Editar alter ego")))))):r.a.createElement("div",null,r.a.createElement(h.a,{style:{marginTop:"70px"}},r.a.createElement(w.a,{xs:{span:24},lg:{span:12,offset:6}},r.a.createElement(j.a,Object.assign({},{labelCol:{span:24},wrapperCol:{span:24}},{name:"basic",initialValues:{remember:!0},onFinish:c,onFinishFailed:function(e){console.log("Failed:",e)},layout:"vertical",style:{margin:"0 80px"}}),r.a.createElement(j.a.Item,{label:"Nombre de artista",name:"name"},r.a.createElement(O.a,null)),r.a.createElement(j.a.Item,{label:"Profesi\xf3n",name:"profession"},r.a.createElement(O.a,null)),r.a.createElement(j.a.Item,{label:"Imagen banner",name:"coverImage"},r.a.createElement(I.a,{name:"file"},r.a.createElement(y.a,null,"Elegir imagen"))),r.a.createElement(j.a.Item,{label:"Bio",name:"bio"},r.a.createElement(O.a.TextArea,{rows:6})),r.a.createElement(k.a.Title,{level:5},"Redes sociales"),r.a.createElement(j.a.Item,{label:"Instagram",name:"instagram"},r.a.createElement(O.a,{addonBefore:"https://www.instagram.com/"})),r.a.createElement(j.a.Item,{label:"Facebook",name:"facebook"},r.a.createElement(O.a,{addonBefore:"https://www.facebook.com/"})),r.a.createElement(j.a.Item,{label:"Twitter",name:"twitter"},r.a.createElement(O.a,{addonBefore:"https://twitter.com/"})),r.a.createElement(j.a.Item,{label:"Otra",name:"other"},r.a.createElement(O.a,null)),r.a.createElement(j.a.Item,i,r.a.createElement("button",{className:"btn",htmlType:"submit",style:{width:"230px"}},"Crear artista")))))))},M=function(){var e=_().user;function n(){return(n=Object(v.a)(E.a.mark((function e(n){var a,t,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.target.files,"https://api.cloudinary.com/v1_1/tomiscattini/image/upload",(t=new FormData).append("file",a[0]),t.append("upload_preset","tierra-roja-preset"),e.next=7,F.a.post("https://api.cloudinary.com/v1_1/tomiscattini/image/upload",t);case 7:r=e.sent,console.log(r.data.secure_url);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return e?r.a.createElement("div",{className:"page"},r.a.createElement(k.a.Title,{level:2},"Perfil de ",e.username),r.a.createElement(h.a,null,r.a.createElement(w.a,{offset:2,span:20},r.a.createElement("div",{style:{width:"100px",marginLeft:"60px",borderRadius:"50%",overflow:"hidden"}},r.a.createElement("img",{style:{width:"100%"},src:e.image,alt:""})),r.a.createElement("form",null,r.a.createElement("input",{type:"file",name:"image",onChange:function(e){return n.apply(this,arguments)},style:{float:"left",margin:"40px"}}))),r.a.createElement(w.a,{offset:2,span:20},r.a.createElement(x.a,{column:4,title:"Informaci\xf3n personal",layout:"vertical"},r.a.createElement(x.a.Item,{label:"Nombre de usuario"},e.username),r.a.createElement(x.a.Item,{label:"Contrase\xf1a"},"*********************"),r.a.createElement(x.a.Item,{label:"Email"},e.email),r.a.createElement(x.a.Item,{label:"Rol"},e.role),r.a.createElement(x.a.Item,{span:1},r.a.createElement(o.b,{to:"/edit-user"},r.a.createElement(y.a,null,"Editar perfil")))))),"artist"===e.role?r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(w.a,{offset:2,span:20},r.a.createElement(o.b,{to:"/myworks"},r.a.createElement(y.a,null,"Mis trabajos")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/artist"},r.a.createElement(y.a,null,"Mi alter ego"))))):r.a.createElement("div",null)):r.a.createElement(s.a,{to:"/"})},V=function(){return r.a.createElement("div",{className:"page"},r.a.createElement("h1",null,"Mis trabajos"))};function X(){var e=Object(u.a)(['\n@import url(\'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\');\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n  body{\n    margin: 0;\n    padding: 0;\n    font-family: \'Quicksand\', sans-serif;\n    font-size: 16px;\n  }\n\n  .page {\n    padding: 50px;\n  }\n\n#brand{\n    position: absolute;\n    bottom: 0;\n    left: 100px;\n    width: 40%;\n    height: auto;\n}\n\n\n.slide{\n    height: 100vh;\n    width: 100vw;\n    scroll-snap-align: start;\n}\n\n.wrapper {\n    display: flex;\n    flex-direction: row;\n    width: 600vw;\n    transform:rotate(90deg) translateY(-100vh);\n    transform-origin: top left;\n    scroll-snap-type: y mandatory;\n    scroll-behavior: smooth;\n}\n\n.one {\n    position: relative;\n    background-image: url("./images/clayhands.jpeg");\n    background-size: 58%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color:white;\n    overflow: hidden;\n    transition: all 5s linear;\n    scroll-snap-align: start;\n}\n\n.one:hover {\n  background-size: 65%;\n}\n\n.two{\n    position: relative;\n    background-image: url("./images/sprout.jpeg");\n    background-size: 80%;\n    background-repeat: no-repeat;\n    background-position: 25vw -13vh;\n    background-color:white;\n    overflow: hidden;\n    transition: all 5s linear;\n    scroll-snap-align: start;\n}\n    \n.two:hover {\n  background-size: 90%;\n}\n\n.three{\n    position: relative;\n    background-image: url("./images/roots.jpeg");\n    background-size: 85%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-color:white;\n    transition: all 5s linear;\n    scroll-snap-align: start;\n}\n\n.three:hover {\n  background-size: 95%;\n}\n\n.four{\n    position: relative;\n    background-image: url("./images/lapacho.jpeg");\n    background-size: 80%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-color:white;\n    transition: all 5s linear;\n    scroll-snap-align: start;\n}\n\n.four:hover {\n  background-size: 90%;\n}\n\n.five{\n    position: relative;\n    background-image: url("./images/branch.jpeg");\n    background-size: 80%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-color:white;\n    transition: all 5s linear;\n    scroll-snap-align: start;\n}\n\n.five:hover {\n  background-size: 90%;\n}\n\n.six {\n    position: relative;\n    background-image: url("./images/tierra.jpeg");\n    background-size: cover;\n    transform: rotate(180deg);\n    -webkit-transform: rotate(180deg);\n    background-size: 90%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-color: #FFF;\n    transition: all 5s linear;\n    scroll-snap-align: start;\n}\n\n.six:hover {\n  background-size: 100%;\n}\n\n@media all and (min-width: 1000px) {\n  .one {\n    background-position: center center;\n  }\n}\n\n\n.outer-wrapper{\n    width: 100vh;\n    height: 100vw;\n    transform: rotate(-90deg) translateX(-100vh);\n    transform-origin: top left;\n    overflow-y:scroll;\n    overflow-x: hidden;\n    position: absolute;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n}\n\n::-webkit-scrollbar{\n    display: none;\n}\n\n.rotate{\n    -webkit-transform:rotate(270deg);\n    -moz-transform:rotate(270deg);\n    -o-transform:rotate(270deg);\n    writing-mode:lr-tb;\n}\n\na {\n  text-decoration:none;\n  color: black;\n}\nli {\n  list-style:none;\n  font-size: 12px;\n}\nul {\n  padding:0;\n  margin:0;\n}\n\n\n\n\n#about .side-div {\n  display: flex;\n  justify-content: flex-end;\n  position:absolute;\n  height:100%;\n  width:30%;\n  background:rgba(218, 110, 22, 0.445);\n  transform: skewX(-5deg) translateX(-50px);\n  transition: 1s all ease-in-out;\n  -webkit-transition: 1s all ease-in-out;\n}\n\n#about .content {\n  position:relative;\n  padding:200px 0 0 200px;\n  color:#000;\n  z-index:10;\n  height:300px;\n}\n\n.btn {\n  outline:none;\n  border:none;\n  text-decoration:none;\n  text-transform:uppercase;\n  background:#202020;\n  color:#eaeaea;\n  box-sizing:border-box;\n  margin-top:20px;\n  padding:10px 40px;\n  cursor: pointer;\n}\n\n.anim-trans {\n  transform: skewX(3deg) translateX(0)!important;\n  width:100vw!important;\n  z-index:11; \n  box-shadow: 10px 10px 5px #eaeaea;\n  }\n\n.transition .about-info {\n  transform: skewX(-3deg);\n  opacity: 0;\n  width: 30%;\n  margin: 50px;\n  padding: 50px;\n  background-color: rgba(255, 255, 255, .5);\n  text-align: justify;\n  transition: all .5s ease;\n}\n\n#portfolios {\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n}\n\n#portfolios .side-div {\n  position:absolute;\n  height:100%;\n  width:30%;\n  background:rgba(218, 110, 22, 0.445);\n  transform: skewX(5deg) translateX(100px);\n}\n\n#portfolios .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  color:#000;\n  z-index:10;\n  padding: 100px;\n  text-align: right;\n}\n']);return X=function(){return e},e}var G=Object(p.a)(X());function U(){var e=Object(u.a)(["\n\n    width:50px;\n    height: 100%;\n    float:left;\n    position:fixed;\n    background:#FDFAF7;\n    z-index: 10;\n  \n  ul.menu {\n    width:30px;\n    margin:10px auto;\n  }\n  ul.menu li:first-child {\n    padding-top: 20vh;\n  }\n  ul.menu li {\n    padding-top:110px;\n  }\n  ul.menu li a {\n    -webkit-transform:rotate(270deg);\n    -moz-transform:rotate(270deg);\n    -o-transform:rotate(270deg);\n    writing-mode:lr-tb;\n    float:left;\n    width:25px;\n    color:black;\n    font-weight: bold;\n  }\n  ul.menu li:hover a {\n    color: black;\n    text-shadow: 0 0 1px black;\n  }\n"]);return U=function(){return e},e}var B=p.b.div(U()),D=function(){return r.a.createElement(B,{className:"sidebarmenu-container"},r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"/#about"},"NOSOTRAS")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#portfolios"},"PORTFOLIOS ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#galeria"},"GALERIA")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#aula"},"AULA")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#contacto"},"CANTACTO "))))},H=a(125),J=a.n(H),W=a(126),Q=a.n(W),Y=a(372),K=a(373),Z=a(368),$=function(){var e=Object(t.useState)(!1),n=Object(m.a)(e,2),a=n[0],l=n[1],i=Object(t.useState)(!1),o=Object(m.a)(i,2),s=o[0],c=o[1],u=function(e){console.log(e)},p={labelCol:{span:24},wrapperCol:{span:16}},d={wrapperCol:{offset:0,span:24}},b=function(){var e=function(){var e=Object(v.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=n,z.post("/signup",a);case 2:l(!1),c(!0);case 4:case"end":return e.stop()}var a}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(j.a,Object.assign({},p,{name:"basic",initialValues:{remember:!0},onFinish:e,onFinishFailed:function(e){console.log("Failed:",e)},layout:"vertical",style:{margin:"0 80px"}}),r.a.createElement(j.a.Item,{label:"Email",name:"email",rules:[{type:"email",message:"Ingresa un correo electr\xf3nico v\xe1lido!"},{required:!0,message:"Por favor ingresa tu correo electr\xf3nico!"}]},r.a.createElement(O.a,{style:{width:"300px"}})),r.a.createElement(j.a.Item,{name:"password",label:"Contrase\xf1a",rules:[{required:!0,message:"Por favor ingresa una contrase\xf1a!"}],hasFeedback:!0},r.a.createElement(O.a.Password,{style:{width:"300px"}})),r.a.createElement(j.a.Item,{name:"confirm",label:"Repite tu contrase\xf1a",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Por favor confirma tu contrase\xf1a!"},function(e){var n=e.getFieldValue;return{validator:function(e,a){return a&&n("password")!==a?Promise.reject("Las dos contrase\xf1as no coinciden!"):Promise.resolve()}}}]},r.a.createElement(O.a.Password,{style:{width:"300px"}})),r.a.createElement(j.a.Item,Object.assign({},d,{name:"remember",valuePropName:"checked"}),r.a.createElement(Y.a,null,"Recordarme")),r.a.createElement(j.a.Item,d,r.a.createElement("button",{className:"btn",htmlType:"submit",style:{width:"230px"}},"Registrarse")))};return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(K.a,{style:{top:"100px"},message:"Registro exitoso",description:"Revisa tu email para confirmar el registro",closeText:"X",type:"success",showIcon:!0}),r.a.createElement("p",{style:{cursor:"pointer"},type:"primary",onClick:function(){l(!0)}},"Registrate"),r.a.createElement(Z.a,{style:{top:20},title:"Registrate",visible:a,onOk:function(){l(!1)},onCancel:function(){l(!1)},footer:null},r.a.createElement(b,null),r.a.createElement(k.a.Text,null,"----- O registrate con una red social -----"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(J.a,{appId:"198741351868254",fields:"name,email,picture","data-size":"medium",callback:function(e){console.log(e)},size:"small"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Q.a,{clientId:"779423123737-7pe82dh5tvckbo7nm0svivitsqj3f72m.apps.googleusercontent.com",buttonText:"LOGIN WITH GOOGLE",onSuccess:u,onFailure:u,render:function(e){return r.a.createElement("img",{alt:"",src:"./images/btn_google_signin_light_pressed_web@2x.png",style:{width:"50%",height:"auto"}})}}))))};function ee(){var e=Object(u.a)(["\n    display: block;\n    float: right;\n    margin-top: 10px;\n    margin-right: 10px;\n    width: 50px;\n    z-index: 20;\n\n&>span {\n    height: 2px;\n    width: 30px;\n    margin: 0 auto 6px auto;\n    background-color: black;\n    text-align: center;\n    display: block;\n    border-radius: 20%;\n}\n\n&:hover>span {\n    background-color: brown;\n}\n"]);return ee=function(){return e},e}var ne=p.b.div(ee()),ae=function(){return r.a.createElement(ne,{className:"navegacion-movil"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))},te=function(){var e=_().login,n=Object(t.useState)(!1),a=Object(m.a)(n,2),l=a[0],i=a[1],o=function(e){console.log(e)},s={labelCol:{span:24},wrapperCol:{span:16}},c={wrapperCol:{offset:0,span:24}},u=function(){var n=function(){var n=Object(v.a)(E.a.mark((function n(a){var t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r=a,z.post("/login",r);case 2:t=n.sent,e(t),i(!1);case 5:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(j.a,Object.assign({},s,{name:"basic",initialValues:{remember:!0},onFinish:n,onFinishFailed:function(e){console.log("Failed:",e)},layout:"vertical",style:{margin:"0 80px"}}),r.a.createElement(j.a.Item,{label:"Email",name:"email",rules:[{type:"email",message:"Ingresa un correo electr\xf3nico v\xe1lido!"},{required:!0,message:"Por favor ingresa tu correo electr\xf3nico!"}]},r.a.createElement(O.a,{style:{width:"300px"}})),r.a.createElement(j.a.Item,{name:"password",label:"Contrase\xf1a",rules:[{required:!0,message:"Por favor ingresa una contrase\xf1a!"}],hasFeedback:!0},r.a.createElement(O.a.Password,{style:{width:"300px"}})),r.a.createElement(j.a.Item,Object.assign({},c,{name:"remember",valuePropName:"checked"}),r.a.createElement(Y.a,null,"Recordarme")),r.a.createElement(j.a.Item,c,r.a.createElement("button",{className:"btn",htmlType:"submit",style:{width:"230px"}},"Login")))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{cursor:"pointer"},type:"primary",onClick:function(){i(!0)}},"Login"),r.a.createElement(Z.a,{title:"Login",visible:l,onOk:function(){i(!1)},onCancel:function(){i(!1)},footer:null},r.a.createElement(u,null),r.a.createElement(k.a.Text,null,"----- O logueate con una red social -----"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(J.a,{appId:"198741351868254",fields:"name,email,picture","data-size":"medium",callback:function(e){console.log(e)},size:"small"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Q.a,{clientId:"779423123737-7pe82dh5tvckbo7nm0svivitsqj3f72m.apps.googleusercontent.com",buttonText:"LOGIN WITH GOOGLE",onSuccess:o,onFailure:o,render:function(e){return r.a.createElement("img",{alt:"",src:"./images/btn_google_signin_light_pressed_web@2x.png",style:{width:"50%",height:"auto"}})}}))))},re=a(369),le=a(374);function ie(){var e=Object(u.a)(["\n    position: fixed;\n    display: flex;\n    flex-direction: row;\n    width: 100vw;\n    height: 50px;\n    box-sizing: border-box;\n    justify-content: space-between;\n    align-items: center;\n    background: rgba(255, 255, 255,1);\n    z-index: 15;\n\n&>div {\n    width: 50%;\n}\n&>div>h2 {\n    margin: 0 30px;\n    padding: 0;\n    text-align: left;\n}\n&>div>h2:hover {\n    color: #996633;\n}\n\n@media all and (min-width: 600px) {\n    &>div .menu-movil {\n        display: none;\n    }\n}\n\n    &>div .menuLarge {\n        display: none;\n        width: 100%;\n        justify-content: flex-end;\n    }\n    @media all and (min-width: 600px) {\n    &>div .menuLarge {\n        display: flex;\n    }\n}\n    &>div .menuLarge li {\n        margin: 0 50px;\n        text-transform: uppercase;\n        font-weight: bold;\n    }\n    &>div .menuLarge li:hover p {\n        color: black;\n        text-shadow: 0 0 1px black;\n    }\n    "]);return ie=function(){return e},e}var oe=r.a.createElement(re.a,null,r.a.createElement(re.a.Item,null,r.a.createElement($,null)),r.a.createElement(re.a.Item,null,r.a.createElement(te,null))),se=p.b.div(ie()),ce=function(){var e=_(),n=e.user,a=e.logout;function t(){return(t=Object(v.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,T();case 3:a();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(se,null,r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement(o.b,{to:"/"},"Tierra Roja"))),r.a.createElement("div",null,r.a.createElement(le.a,{className:"menu-movil",overlay:oe},r.a.createElement("a",{href:"#",className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},r.a.createElement(ae,null))),r.a.createElement("ul",{className:"menuLarge"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile"},"Perfil")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(e){return t.apply(this,arguments)}},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement($,null)),r.a.createElement("li",null,r.a.createElement(te,null))))))},me=a(367),ue=function(){var e=_(),n=e.user,a=e.login,t=Object(s.g)(),l={wrapperCol:{offset:0,span:24}},i=function(){var e=Object(v.a)(E.a.mark((function e(r){var l,i,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=n._id,e.next=3,C(l,r);case 3:i=e.sent,o=i.data.editedUser,a(o),t.push("/profile");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return n&&r.a.createElement("div",{className:"page"},r.a.createElement("h1",null,"Edit\xe1 tu perfil"),r.a.createElement(h.a,{style:{marginTop:"70px"}},r.a.createElement(w.a,{xs:{span:24},lg:{span:8,offset:8}},r.a.createElement(j.a,Object.assign({},{labelCol:{span:24},wrapperCol:{span:24}},{name:"basic",initialValues:{remember:!0},onFinish:i,onFinishFailed:function(e){console.log("Failed:",e)},layout:"vertical",style:{margin:"0 80px"}}),r.a.createElement(j.a.Item,{label:"Nombre de usuario",name:"username",initialValue:n.username},r.a.createElement(O.a,null)),r.a.createElement(j.a.Item,{label:"Email",name:"email",initialValue:n.email,rules:[{type:"email",message:"Ingresa un correo electr\xf3nico v\xe1lido!"}]},r.a.createElement(O.a,null)),r.a.createElement(j.a.Item,{name:"password",label:"Contrase\xf1a actual",hasFeedback:!0},r.a.createElement(O.a.Password,null)),r.a.createElement(j.a.Item,{name:"password",label:"Nueva contrase\xf1a",hasFeedback:!0},r.a.createElement(O.a.Password,null)),r.a.createElement(j.a.Item,{name:"confirm",label:"Repite tu contrase\xf1a",dependencies:["password"],hasFeedback:!0,rules:[function(e){var n=e.getFieldValue;return{validator:function(e,a){return a&&n("password")!==a?Promise.reject("Las dos contrase\xf1as no coinciden!"):Promise.resolve()}}}]},r.a.createElement(O.a.Password,null)),r.a.createElement(j.a.Item,{name:"role",label:"Rol",initialValue:n.role},r.a.createElement(me.a,{placeholder:"Elegi tu rol"},r.a.createElement(me.a.Option,{value:"user"},"Usuario"),r.a.createElement(me.a.Option,{value:"artist"},"Artista"),r.a.createElement(me.a.Option,{value:"student"},"Estudiante"))),r.a.createElement(j.a.Item,l,r.a.createElement("button",{className:"btn",htmlType:"submit",style:{width:"230px"}},"Guardar cambios"))))))},pe=function(){return r.a.createElement(o.a,null,r.a.createElement(G,null),r.a.createElement(ce,null),r.a.createElement(D,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:g}),r.a.createElement(s.b,{path:"/profile",component:M}),r.a.createElement(s.b,{path:"/edit-user",component:ue}),r.a.createElement(s.b,{path:"/myworks",component:V}),r.a.createElement(s.b,{path:"/artist",component:A}),r.a.createElement(s.b,{componentt:c})))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null,r.a.createElement(pe,null))),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.d91af3c0.chunk.js.map