(function(e){function t(t){for(var a,o,r=t[0],i=t[1],l=t[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={"app~d0ae3f07":0},s={"app~d0ae3f07":0},c=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-16c4a868":"c2f17463","chunk-203202aa":"3887bac3","chunk-214a933e":"fc773ca0","chunk-21cabc9e":"e618c899","chunk-2f07414e":"10c64794","chunk-2fe38579":"178d723c","chunk-3063a64c":"e7944be2","chunk-3133ffdc":"c147ee37","chunk-32433e86":"021785ee","chunk-350d0ea2":"578a73d1","chunk-442d3ecc":"9ce0afd3","chunk-50d22dbd":"f3c4a6a0","chunk-5b689a29":"a8408c20","chunk-5d0338cc":"c7ec5707","chunk-5fe847d3":"7b35b976","chunk-78d8e758":"1055f10d","chunk-79497b10":"4d62fa23","chunk-90322ff2":"342d015f","chunk-b59c84a2":"50f3dc05","chunk-bf8920ce":"df2886a8","chunk-c76790fe":"1a52d2d2","chunk-d8dad15e":"0a5c42ce","chunk-f8d4f3d4":"743e5fba"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-16c4a868":1,"chunk-203202aa":1,"chunk-214a933e":1,"chunk-21cabc9e":1,"chunk-2f07414e":1,"chunk-2fe38579":1,"chunk-3063a64c":1,"chunk-3133ffdc":1,"chunk-32433e86":1,"chunk-350d0ea2":1,"chunk-442d3ecc":1,"chunk-50d22dbd":1,"chunk-5b689a29":1,"chunk-5d0338cc":1,"chunk-5fe847d3":1,"chunk-78d8e758":1,"chunk-79497b10":1,"chunk-90322ff2":1,"chunk-b59c84a2":1,"chunk-bf8920ce":1,"chunk-c76790fe":1,"chunk-d8dad15e":1,"chunk-f8d4f3d4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-16c4a868":"52bab882","chunk-203202aa":"2ad6bb3d","chunk-214a933e":"8fd4fe27","chunk-21cabc9e":"6074fd68","chunk-2f07414e":"7f5385ed","chunk-2fe38579":"8bd753e4","chunk-3063a64c":"dc592566","chunk-3133ffdc":"f198a144","chunk-32433e86":"218cdbd4","chunk-350d0ea2":"0285bcaf","chunk-442d3ecc":"efbc9aff","chunk-50d22dbd":"accbd79b","chunk-5b689a29":"2c96ce53","chunk-5d0338cc":"293fce21","chunk-5fe847d3":"99cc78c7","chunk-78d8e758":"7261929d","chunk-79497b10":"dce0c024","chunk-90322ff2":"55e2eaf7","chunk-b59c84a2":"ea7f1145","chunk-bf8920ce":"4b327d98","chunk-c76790fe":"e98491fd","chunk-d8dad15e":"fcdb18fe","chunk-f8d4f3d4":"a4c673da"}[e]+".css",s=i.p+a,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var l=c[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===a||u===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],h.parentNode.removeChild(h),n(c)},h.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}s[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;c.push([0,"chunk-vendors~14b916ce","chunk-vendors~ac0f77ce","chunk-vendors~82b88a00","chunk-vendors~4dff01e7","chunk-vendors~f0dd280a","chunk-vendors~987e6011","chunk-vendors~00cb062a","chunk-vendors~4b106089","chunk-vendors~fdc6512a","chunk-vendors~6ff199a4"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09be":function(e,t,n){},"3fb3":function(e,t,n){"use strict";var a=n("467f"),o=n.n(a);o.a},"45f3":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.use?n("svg",{staticClass:"curve-top",style:e.stylecss,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[n("path",{attrs:{fill:e.color,"fill-opacity":"1",d:"M0 114.359H1919V72.1293C1919 72.1293 1818.31 6.27769e-05 1627.8 0C1437.3 -6.27764e-05 1257.73 110.599 1072.05 110.599C999.157 110.599 927.457 94.1749 858.089 72.9421C765.056 44.4665 654.178 0 557.849 0C461.521 0 409.984 67.5828 308.769 72.9421C185.042 79.4935 0 0 0 0V114.359Z"}})]):n("svg",{staticClass:"curve-bottom",style:e.stylecss,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[n("path",{attrs:{fill:e.color,"fill-opacity":"1",d:"M1919 0H0V43.2333C0 43.2333 99.234 79.8683 165.681 90.3369C316.558 114.108 422.004 30.1656 553.944 43.2333C678.534 55.5728 741.733 95.7704 866.339 107.944C1005.3 121.52 1083.76 110.657 1222.8 97.9025C1382.48 83.2545 1469.45 47.1908 1629.76 43.2333C1742.83 40.4416 1859.81 58.2952 1919 58.2952V0Z"}})])])},o=[],s={props:["color","use","stylecss"],data:function(){return{}}},c=s,r=(n("3fb3"),n("2877")),i=Object(r["a"])(c,a,o,!1,null,"178178aa",null);t["a"]=i.exports},"467f":function(e,t,n){},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.fc597045.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("LandingHeader"),n("transition",[n("router-view")],1),n("LandingFooter")],1)},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container my-container"},[a("div",{staticClass:"navbar navbar-expand-lg fixed-top row ",class:this.scrollPosition>500?"bg-gradient":"bg-transparent"},[a("div",{staticClass:"header-section"},[a("span",{staticClass:"brand col-6 "},[a("a",{staticClass:"navbar-brand",on:{click:function(t){return e.redirect("/")}}},[a("img",{staticClass:"increment-logo",attrs:{src:n("4ffd")}}),a("label",{staticClass:"headerName",on:{click:function(t){return e.redirect("/")}}},[a("b",{class:this.scrollPosition>500?"increment-white":"increment-purple"},[e._v("INCREMENT")]),a("br"),a("b",{class:this.scrollPosition>500?"increment-white":"increment-purple"},[e._v("TECHNOLOGIES INC.")])])])]),a("span",{staticClass:"menu"},[e._m(0),a("div",{staticClass:"collapse navbar-collapse"},[a("form",{staticClass:"form-inline my-2 my-lg-0 ml-auto"},[a("ul",{staticClass:"navbar-nav"},e._l(e.menu,(function(t,n){return a("li",{key:n,staticClass:"nav-item header-right"},["Who We Are"===t.title?a("div",{staticClass:"btn-group dropdown"},[a("a",{staticClass:"nav-link  ",staticStyle:{color:"#20c1ab"},attrs:{role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",href:"/#who-we-are"},on:{click:function(t){return e.headerScrollTo("#who-we-are")}}},[a("b",{staticClass:"increment-white"},[e._v(e._s(t.title))])]),e._m(1,!0),a("div",{staticClass:"dropdown-menu who-menu",staticStyle:{position:"absolute","border-color":"#20c1ab"}},[a("a",{staticClass:"dropdown-item",attrs:{"data-target":".hide.show",href:"/#our-values"},on:{click:function(t){return e.headerScrollTo("#our-values")}}},[a("b",{staticClass:"increment-purple"},[e._v("Our Values")])]),a("a",{staticClass:"dropdown-item",attrs:{"data-target":".hide.show",href:"/#testimonials"},on:{click:function(t){return e.headerScrollTo("#testimonials")}}},[a("b",{staticClass:"increment-purple"},[e._v("What They Say About Us")])])])]):e._e(),"Our Services"===t.title?a("div",{staticClass:"btn-group dropdown"},[a("a",{staticClass:"nav-link  ",staticStyle:{color:"#20c1ab"},attrs:{role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",href:"/#our-services"},on:{click:function(t){return e.headerScrollTo("#our-services")}}},[a("b",{staticClass:"increment-white"},[e._v(e._s(t.title))])]),e._m(2,!0),"Our Services"===t.title?a("div",{staticClass:"dropdown-menu ",staticStyle:{position:"absolute","border-color":"#20c1ab"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"/#how-we-work"},on:{click:function(t){return e.headerScrollTo("#how-we-work")}}},[a("b",{staticClass:"increment-purple"},[e._v("How We Work")])])]):e._e()]):"regular"===t.type?a("div",["Send Request"===t.title?a("div",[a("a",{staticClass:"nav-link",attrs:{href:"/send-request"}},[a("b",{staticClass:"increment-white"},[e._v(e._s(t.title))])])]):"Send Request"!==t.title?a("div",[a("a",{staticClass:"nav-link",attrs:{href:t.redirect},on:{click:function(n){return e.headerScrollTo(t.redirect)}}},[a("b",{staticClass:"increment-white"},[e._v(e._s(t.title))])])]):e._e()]):e._e()])})),0)])])])]),a("div",{staticClass:"collapse",attrs:{id:"navbarSupportedContent"}},[a("div",{staticClass:"header-separator"}),a("ul",{staticClass:"navbar-nav ml-auto headerElement"},e._l(e.menu,(function(t,n){return a("li",{key:n,staticClass:"nav-item ",attrs:{"data-target":".hide.show"}},["Who We Are"===t.title?a("div",{staticClass:"btn-group dropdown col headerClass",on:{click:function(t){e.isToggled1=!e.isToggled1}}},[a("a",{staticClass:"nav-link  ",staticStyle:{color:"#20c1ab"},attrs:{role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",href:"/#who-we-are"},on:{click:function(t){return e.headerScrollTo("#who-we-are")}}},[a("b",{staticClass:"increment-purple"},[e._v(e._s(t.title))])]),a("span",{staticClass:"formatter"}),a("span",[a("font-awesome-icon",{attrs:{icon:e.isToggled1?e.angleUp:e.angleDown,size:"lg"}})],1)]):e._e(),e.isToggled1?a("div",{staticClass:"container classContainer"},["Who We Are"===t.title?a("div",{staticClass:"row"},[a("span",{staticClass:"col-5 fullCol"},[a("a",{attrs:{href:"/#our-values"},on:{click:function(t){return e.headerScrollTo("#our-values")}}},[a("b",{staticClass:"increment-purple"},[e._v("Our Values")])])]),a("span",{staticClass:"col"},[a("a",{attrs:{href:"/#testimonials"},on:{click:function(t){return e.headerScrollTo("#testimonials")}}},[a("b",{staticClass:"increment-purple"},[e._v("What They Say About Us")])])])]):e._e()]):e._e(),"Our Services"===t.title?a("div",{staticClass:"btn-group dropdown col headerClass",on:{click:function(t){e.isToggled2=!e.isToggled2}}},[a("a",{staticClass:"nav-link ",staticStyle:{color:"#20c1ab"},attrs:{role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",href:"/#our-services"},on:{click:function(t){return e.headerScrollTo("#our-services")}}},[a("b",{staticClass:"increment-purple"},[e._v(e._s(t.title))])]),a("span",{staticClass:"formatter"}),a("span",[a("font-awesome-icon",{attrs:{icon:e.isToggled2?e.angleUp:e.angleDown,size:"lg"}})],1)]):e._e(),e.isToggled2?a("div",{staticClass:"container classContainer"},["Our Services"===t.title?a("div",{staticClass:"row"},[a("span",{staticClass:"col-5 fullCol"},[a("a",{attrs:{href:"/#how-we-work"},on:{click:function(t){return e.headerScrollTo("#how-we-work")}}},[a("b",{staticClass:"increment-purple"},[e._v("How We Work")])])])]):e._e()]):"regular"===t.type?a("div",["Send Request"===t.title?a("div",[a("a",{staticClass:"nav-link",attrs:{"data-target":".hide.show",href:"/send-request"}},[a("b",{staticClass:"increment-purple"},[e._v(e._s(t.title))])])]):"Send Request"!==t.title?a("div",[a("a",{staticClass:"nav-link",attrs:{"data-target":".hide.show",href:t.redirect},on:{click:function(n){return e.headerScrollTo(t.redirect)}}},[a("b",{staticClass:"increment-purple"},[e._v(e._s(t.title))])])]):e._e()]):e._e()])})),0)])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"navbar-menu-toggler-md"},[n("i",{staticClass:"fa fa-bars menuBars",attrs:{role:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:" dropdown-toggle dropdown-toggle-split",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("span",{staticClass:"sr-only"},[e._v("Toggle Dropdown")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:" dropdown-toggle dropdown-toggle-split",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("span",{staticClass:"sr-only"},[e._v("Toggle Dropdown")])])}],i=n("a18c"),l=n("69d9"),u=n("1157"),d=n.n(u),h=n("c074"),p={mounted:function(){console.log(this.$route),window.addEventListener("scroll",this.upadateScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.upadateScroll)},openNav:function(){},data:function(){return{common:l["a"],menu:[{title:"Who We Are",redirect:"/#who-we-are",type:"dropdown"},{title:"Our Services",redirect:"/#our-services",type:"dropdown"},{title:"Our Projects",redirect:"#our-projects",type:"regular"},{title:"Case Studies",redirect:"#case-studies",type:"regular"},{title:"Technologies",redirect:"#technologies",type:"regular"},{title:"Send Request",redirect:"send-request",type:"regular"}],scrollPosition:null,angleDown:h["a"],angleUp:h["b"],isToggled1:!1,isToggled2:!1}},methods:{upadateScroll:function(){this.scrollPosition=window.scrollY,console.log(this.scrollPosition)},redirect:function(e){i["a"].push(e)},headerScrollTo:function(e){var t=d()(window).height();d()("html, body").animate({scrollTop:d()(e).offset().top-parseInt(.1*t)},500)}}};window.addEventListener("load",(function(){d()(document).ready((function(){if("#who-we-are"==window.location.hash){var e=d()(window).height();d()("html, body").animate({scrollTop:d()("#who-we-are").offset().top-parseInt(.1*e)},500)}else if("#testimonials"==window.location.hash){var t=d()(window).height();d()("html, body").animate({scrollTop:d()("#testimonials").offset().top-parseInt(.1*t)},500)}else if("#our-services"==window.location.hash){var n=d()(window).height();d()("html, body").animate({scrollTop:d()("#our-services").offset().top-parseInt(.1*n)},500)}else if("#how-we-work"==window.location.hash){var a=d()(window).height();d()("html, body").animate({scrollTop:d()("#how-we-work").offset().top-parseInt(.1*a)},500)}else if("#our-projects"==window.location.hash){var o=d()(window).height();d()("html, body").animate({scrollTop:d()("#our-projects").offset().top-parseInt(.1*o)},500)}else if("#case-studies"==window.location.hash){var s=d()(window).height();d()("html, body").animate({scrollTop:d()("#case-studies").offset().top-parseInt(.1*s)},500)}else if("#technologies"==window.location.hash){var c=d()(window).height();d()("html, body").animate({scrollTop:d()("#technologies").offset().top-parseInt(.1*c)},500)}else if("#our-values"==window.location.hash){var r=d()(window).height();d()("html, body").animate({scrollTop:d()("#our-values").offset().top-parseInt(.1*r)},500)}}))}));var f=p,m=(n("8280"),n("2877")),b=Object(m["a"])(f,c,r,!1,null,"2468b45f",null),v=b.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer-holder"},[a("Curve",{attrs:{color:e.curveStyle,use:!1,stylecss:{backgroundColor:"black",height:"50%"}}}),a("div",{staticClass:"container-handler"},[a("a",{staticClass:"navbar-brand"},[a("img",{staticClass:"logo",attrs:{src:n("4ffd")}}),e._m(0),a("br"),a("h4",{staticClass:"mt-3 mb-4"},[e._v(e._s(e.common.APP_TAGLINE))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},e._l(e.common.footer1_contents,(function(t,n){return a("div",{key:n},[a("h4",{staticClass:"title-name"},[a("b",[e._v(e._s(t.name))])]),a("p",{staticClass:"description"},[e._v(e._s(t.description))]),e._l(t.subMenu,(function(t,n){return a("div",{key:n,staticClass:"row submenu"},[a("div",{staticClass:"col-sm-1"},[a("font-awesome-icon",{staticClass:"fontawesome-icon",attrs:{icon:t.icon}})],1),a("div",{staticClass:"col-sm-11"},[a("label",{staticClass:"contactUs"},[a("a",{staticStyle:{color:"white"},attrs:{href:t.payload+t.url}},[e._v(e._s(t.title))])])])])}))],2)})),0),a("div",{staticClass:"col-sm"},e._l(e.common.footer2_contents,(function(t,n){return a("div",{key:n},[a("h4",{staticClass:"title-name"},[a("b",[e._v(e._s(t.name))])]),a("p",[a("a",{staticClass:"font-url",attrs:{href:t.url}},[e._v(e._s(t.title))])])])})),0),a("div",{staticClass:"col-sm-3"},e._l(e.common.footer3_contents,(function(t,n){return a("div",{key:n},[a("h4",{staticClass:"title-name"},[a("b",[e._v(e._s(t.name))])]),e._l(t.subMenu,(function(t,n){return a("span",{key:n},[a("a",{attrs:{href:t.url,target:"_blank"}},[a("font-awesome-icon",{staticClass:"fontawesome-icon2",attrs:{icon:t.icon}})],1),a("label",[e._v(e._s(t.title))])])})),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-1"},[a("font-awesome-icon",{staticClass:"fontawesome-icon",attrs:{icon:t.icon}})],1),a("div",{staticClass:"col-sm-11"},[a("p",{staticClass:"mt-2"},[a("a",{staticStyle:{color:"white"},attrs:{target:"blank",href:t.url}},[e._v(e._s(t.description))])])])])],2)})),0),a("hr",{staticClass:"line mt-5"}),a("p",{staticClass:"copyright"},[e._v("Copyright @"+e._s(e.common.APP_COPYRIGHT))])])])],1)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"site-name"},[n("b",{staticClass:"increment-white"},[e._v(" INCREMENT")]),n("br"),n("b",{staticClass:"increment-white"},[e._v(" TECHNOLOGIES INC.")])])}],w=n("45f3"),y=n("6eb7"),C={components:{Curve:w["a"]},data:function(){return{common:l["a"],curveStyle:y["a"].secondary}},methods:{redirect:function(e){i["a"].push(e)}}},_=C,S=(n("74eb"),Object(m["a"])(_,g,k,!1,null,"2b86c7ae",null)),T=S.exports,E={components:{LandingHeader:v,LandingFooter:T}},P=E,O=(n("5c0b"),Object(m["a"])(P,o,s,!1,null,null,null)),A=O.exports,I=(n("4989"),n("ab8b"),n("ecee")),N=n("f2d1"),M=n("ad3d"),L=n("b9ad"),x=n.n(L);I["c"].add(h["B"]),I["c"].add(N["b"]),I["c"].add(h["C"]),a["a"].use(x.a),a["a"].analytics.fbq.init("123506056390246",{em:"kennettecanales@gmail.com"}),a["a"].component("font-awesome-icon",M["a"]),a["a"].config.productionTip=!1,new a["a"]({router:i["a"],render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"5f69":function(e,t,n){},"69d9":function(e,t,n){"use strict";n("d81d"),n("ac1f"),n("1276");var a=n("f2d1"),o=n("c074"),s=n("1157"),c=n.n(s);t["a"]={APP_NAME:"INCREMENT TECHNOLOGIES INC.",APP_TAGLINE:"WE WANT YOU TO SUCCEED!",APP_EMAIL:"incrementtech2020@gmail.com",APP_COPYRIGHT:"INCREMENT TECHNOLOGIES 2022. All Rights Reserved. ",APP_DEVELOPER:"Increment Technologies",APP_DEVELOPER_URL:"https://incrementtechnologies.com",APP_PHONE_NUMBER:"+63-032-436-1622",address:"Unit 1201, Meridian Bldg. Golam Drive, Pope John Paull II Ave., Mabolo, Cebu City, Cebu, Philippines",api:"https://mezzohotel.com/img/",host:"https://mezzohotel.com/",booking_link:"https://mezzohotel.com/managebooking.php",socialMedia:{facebook:"https://www.facebook.com/incrementtechnologies"},footer1_contents:[{name:"ABOUT US",description:"Increment Technologies is a team of highly motivated technopreneurs. We do projects with a focus on quality and customer satisfaction. Our experience over the years let us create worthy online products.",subMenu:[{title:null,icon:null,url:null}]},{name:"CONTACT US",description:null,subMenu:[{title:"+63-032-436-1622",icon:o["v"],url:null,payload:"tel:"},{title:"incrementtech2020@gmail.com",icon:o["j"],url:"incrementtech2020@gmail.com",payload:"mailto:"}]}],footer2_contents:[{name:"INFORMATION",title:"Who We Are",icon:null,url:"/#who-we-are"},{title:"Our Services",icon:null,url:"/#our-services"},{title:"How We Work",icon:null,url:"/#how-we-work"},{title:"Our Projects",icon:null,url:"/our-projects"},{title:"Case Studies",url:"/#case-studies"},{title:"Technologies",icon:null,url:"/#technologies"},{title:"Send Request",icon:null,url:"/send-request"}],footer3_contents:[{name:"FOLLOW US",description:null,subMenu:[{title:null,icon:a["a"],url:"https://www.facebook.com/incrementtechnologies"},{title:null,icon:a["e"],url:"https://twitter.com/incrementtechn1"},{title:null,icon:a["c"],url:"https://www.instagram.com/incrementtechph"},{title:null,icon:a["d"],url:"https://www.linkedin.com/company/incrementtechnologies"},{title:null,icon:a["f"],url:"https://www.youtube.com/channel/UCHrXkUkrKD--S7W2e5b4LsA"}]},{name:"LOCATION",description:"Unit 1201, Meridian Bldg. Golam Drive, Pope John Paull II Ave., Mabolo, Cebu City, Cebu, Philippines",icon:o["q"],url:"https://www.google.com/maps/place/The+Meridian/@10.3239246,123.9095656,19z/data=!3m1!4b1!4m5!3m4!1s0x33a999b33c3e8073:0x6e53cbaa3015872d!8m2!3d10.3239233!4d123.9101128",subMenu:[{title:null,icon:null,url:null}]}],delay:15e3,menus:[],packages:null,testimonials:[],rooms:[],restaurants:[],faq:[],gallery:[],addOns:[],announcements:[],blogs:[],activeMenu:"#top-view",load:{rooms:!1,inquire:!1,restaurants:!1,testimonials:!1,gallery:!1,faq:!1,footer:!1},setLoad:function(e){switch(e){case"#faq":this.load.faq=!0,this.load.gallery=!0,this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#gallery":this.load.gallery=!0,this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#testimonials":this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#restaurants":this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#packages":this.load.inquire=!0,this.load.rooms=!0;break;case"#rooms":this.load.rooms=!0;break}},getBlog:function(){var e=this;this.blogs=[],c.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/11/public/values?alt=json",(function(t){for(var n=t.feed.entry,a=0;a<n.length;a+=7)if(a>6){var o={type:n[a].content.$t,title:n[a+1].content.$t,image:"internal_video"===n[a].content.$t?n[a+2].content.$t:e.host+"img/"+n[a+2].content.$t,date:n[a+3].content.$t,author:n[a+4].content.$t,introduction:n[a+5].content.$t,content:n[a+6].content.$t};e.blogs.push(o)}}))},getBasic:function(){var e=this;c.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/3/public/values?alt=json",(function(t){for(var n=t.feed.entry,a=0;a<n.length;a+=2)if(a>1)switch(n[a].content.$t){case"app_name":e.APP_NAME=n[a+1].content.$t;break;case"app_tagline":e.APP_TAGLINE=n[a+1].content.$t;break;case"app_email":e.APP_EMAIL=n[a+1].content.$t;break;case"app_phone_number":e.APP_PHONE_NUMBER=n[a+1].content.$t;break;case"address":e.address=n[a+1].content.$t;break;case"app_header_background":var o=n[a+1].content.$t,s=null!==o?o.split(","):null,c=s.map((function(t){return{url:e.host+"img/"+t}}));e.APP_HEADER_BACKGROUND=c;break;case"app_header_mobile_background":var r=n[a+1].content.$t,i=null!==r?r.split(","):null,l=i.map((function(t){return{url:e.host+"img/"+t}}));e.APP_HEADER_MOBILE_BACKGROUND=l;break}}))}}},"6aab":function(e,t,n){"use strict";n.r(t),t["default"]={routes:[{path:"/",name:"Home",component:function(e){return n.e("chunk-32433e86").then(function(){var t=[n("fb9c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies",name:"Case Studies",component:function(e){return n.e("chunk-d8dad15e").then(function(){var t=[n("9e9d")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/our-projects",name:"Our Projects",component:function(e){return n.e("chunk-f8d4f3d4").then(function(){var t=[n("d99d")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/technologies",name:"Technologies",component:function(e){return n.e("chunk-350d0ea2").then(function(){var t=[n("a1b1")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/send-request",name:"Send Request",component:function(e){return n.e("chunk-5d0338cc").then(function(){var t=[n("442e")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/booking-bot",name:"Booking Bot",component:function(e){return n.e("chunk-78d8e758").then(function(){var t=[n("1c27")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/bookings-and-appointments",name:"Bookings And Appointments",component:function(e){return n.e("chunk-b59c84a2").then(function(){var t=[n("472c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/company-profiling",name:"Company Profiling",component:function(e){return n.e("chunk-2f07414e").then(function(){var t=[n("6a85")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/delivery-app",name:"Delivery Application",component:function(e){return n.e("chunk-442d3ecc").then(function(){var t=[n("983a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/e-commerce",name:"E-commerce",component:function(e){return n.e("chunk-79497b10").then(function(){var t=[n("e07a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/employee-management-system",name:"Employee Management System",component:function(e){return n.e("chunk-50d22dbd").then(function(){var t=[n("ec60")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/hotel-management-system",name:"Hotel Management System",component:function(e){return n.e("chunk-5fe847d3").then(function(){var t=[n("1f9a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/inventory-management-system",name:"Inventory Management System",component:function(e){return n.e("chunk-2fe38579").then(function(){var t=[n("6db6")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/learning-system",name:"Learning System",component:function(e){return n.e("chunk-3063a64c").then(function(){var t=[n("53fe")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/logbook-system",name:"Logbook System",component:function(e){return n.e("chunk-bf8920ce").then(function(){var t=[n("14ed")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/manufacturing-management-system",name:"Manufacturing Management System",component:function(e){return n.e("chunk-214a933e").then(function(){var t=[n("ac07")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/online-enrollment-system",name:"Online Enrollment System",component:function(e){return n.e("chunk-3133ffdc").then(function(){var t=[n("b8ae")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/payment-system",name:"Payment System",component:function(e){return n.e("chunk-21cabc9e").then(function(){var t=[n("cabc")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/payroll-system",name:"Payroll System",component:function(e){return n.e("chunk-90322ff2").then(function(){var t=[n("7d8b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/real-estate",name:"Real Estate",component:function(e){return n.e("chunk-203202aa").then(function(){var t=[n("62de")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/rfid-system",name:"RFID System",component:function(e){return n.e("chunk-5b689a29").then(function(){var t=[n("53b0")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/translation-system",name:"Translation System",component:function(e){return n.e("chunk-c76790fe").then(function(){var t=[n("2f4a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/case-studies/transportation-system",name:"Transportation System",component:function(e){return n.e("chunk-16c4a868").then(function(){var t=[n("d137")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}},"6eb7":function(e,t,n){"use strict";t["a"]={primary:"#3f0050",secondary:"#00B89F",purple:"#8F00B5",green:"#028170",gray:" #ccc",white:"#ffffff",warning:"#cbab58",danger:"#f7786b",success:"#00E68A",gradientPrimary:"#00B89F",gradientSecondary:"#8F00B5",black:"black"}},"74eb":function(e,t,n){"use strict";var a=n("e568"),o=n.n(a);o.a},8280:function(e,t,n){"use strict";var a=n("09be"),o=n.n(a);o.a},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";var a=n("2b0e"),o=n("8c4f"),s=(n("99af"),function(e,t,n){n()}),c=[],r=n("6aab");c=c.concat(r.default.routes);for(var i=0;i<c.length;i++)c[i]["beforeEnter"]=s;var l=[{path:"/",name:"home",component:function(e){return n.e("chunk-32433e86").then(function(){var t=[n("fb9c")];e.apply(null,t)}.bind(this)).catch(n.oe)},beforeEnter:s}];l=l.concat(c);var u={routes:l};n("5f69"),a["a"].use(o["a"]);t["a"]=new o["a"]({mode:"history",routes:u.routes})},e568:function(e,t,n){}});
//# sourceMappingURL=app~d0ae3f07.f54cb680.js.map