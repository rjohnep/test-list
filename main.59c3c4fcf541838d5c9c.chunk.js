(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,n,t){e.exports=t("9218b5e42fec9aa8e5d6")},"5bf8fdad14e8516fde95":function(e,n,t){"use strict";var a=t("8a2d1b95e05b6a321e74"),r=t.n(a),i=t("8af190b70a6bc55c6f1b"),o=t.n(i),c=t("0b3cb19af78752326f59").d.svg.withConfig({displayName:"Icon",componentId:"sc-1vzwdn6-0"})(["   width:50px;height:50px;"]);function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=function(e){var n=e.glyph,t=l(e,["glyph"]);return o.a.createElement(c,t,o.a.createElement("use",{xlinkHref:"#".concat(n.id)}))};d.propTypes={glyph:r.a.shape({id:r.a.string.isRequired}).isRequired};n.a=d},"5d470990f3049542810d":function(e,n,t){"use strict";var a=t("8af190b70a6bc55c6f1b"),r=t.n(a),i=t("5bf8fdad14e8516fde95"),o=t("0b3cb19af78752326f59").d.div.withConfig({displayName:"Progress",componentId:"sc-1m5eddp-0"})(["position:fixed;top:15px;right:15px;@media (max-width:640px){top:auto;bottom:15px;}"]),c=t("9689a9c94ae38b47fa2c"),l=t.n(c),d=t("9ce58a7deea14f49ef01"),f=t.n(d),u=new l.a({id:"RollingIcon",use:"RollingIcon-usage",viewBox:"0 0 100 100",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" id="RollingIcon"><circle cx="50" cy="50" fill="none" stroke="#0DBEB2" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(245.933 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.7s" begin="0s" repeatCount="indefinite" /></circle></symbol>'}),b=(f.a.add(u),u);n.a=function(){return r.a.createElement(o,null,r.a.createElement(i.a,{glyph:b}))}},"70921625babcac4dc4b3":function(e,n,t){"use strict";t.d(n,"a",function(){return d});var a=t("54f683fcda7806277002"),r=t("4e2e9348dad8fe460c1d"),i=t("a7e3807798c0b990af09");function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=Object(a.fromJS)({location:null});function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case i.LOCATION_CHANGE:return e.merge({location:n.payload});default:return e}}function d(e){return Object(r.combineReducers)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){o(e,n,t[n])})}return e}({route:l},e))}},"9218b5e42fec9aa8e5d6":function(e,n,t){"use strict";t.r(n);t("8c8e4f08a118a28666b0");var a=t("8af190b70a6bc55c6f1b"),r=t.n(a),i=t("63f14ac74ce296f77f4d"),o=t.n(i),c=t("d7dd51e1bf6bfc2c9c3d"),l=t("0b3cb19af78752326f59"),d=t("a7e3807798c0b990af09"),f=t("3fb509045374147eb7e3"),u=t.n(f);t("307f2cff2703da2bb432"),t("eacc4bbaff320a470030");function b(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n  \n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body {\n    min-height: 100%;\n  \n    color: ",";\n    font-family: ",";\n    font-weight: 400;\n    font-size: 14px;\n  }\n  \n  #app {\n    display: flex;\n    \n    overflow: hidden;\n    min-height: 100vh;\n  }\n"]);return b=function(){return e},e}var s=Object(l.b)(b(),function(e){return e.theme.colors.secondary.main},function(e){return e.theme.font.family}),m=t("e95a63b25fb92ed15721"),p=t("49112c95d93be1863904"),g=t.n(p),h=t("5d470990f3049542810d"),y=t("02a04198e0ff5ab16cc0"),w=Object(l.d)(m.Link).withConfig({displayName:"Link",componentId:"sc-5h2zpp-0"})(["color:",";text-decoration:none;padding:5px 10px;border-radius:3px;border:1px solid ",";background:",";transition:background .3s;&:hover{background:",";}"],function(e){return e.theme.colors.white},function(e){return e.theme.colors.primary.dark},function(e){return e.theme.colors.primary.main},function(e){var n=e.theme;return Object(y.rgba)(n.colors.primary.main,.7)}),x=l.d.div.withConfig({displayName:"Wrapper",componentId:"sc-10tlngu-0"})(["display:grid;align-content:start;padding:20px;width:100%;background:",";@media (max-width:980px){padding:20px 10px;}"],function(e){return e.theme.colors.primary.lightest}),v=l.d.div.withConfig({displayName:"Header",componentId:"sc-5x06e6-0"})(["display:flex;flex-direction:row;align-items:center;margin:0 0 20px;@media (max-width:640px){justify-content:space-between;}"]),E=l.d.h1.withConfig({displayName:"Title",componentId:"xq7slm-0"})(["margin:0 40px 0 0;font-size:32px;text-transform:uppercase;"]),O=g()({loader:function(){return t.e(2).then(t.bind(null,"6952f40ff285481a9b70"))},loading:h.a}),j=function(){return r.a.createElement(x,null,r.a.createElement(v,null,r.a.createElement(E,null,"Home page"),r.a.createElement(w,{to:"/listing"},"Listing")),r.a.createElement(O,null))},k=g()({loader:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"d992f255293ea368baa3"))},loading:h.a}),F=g()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"bfcd0a9707d3680baaf3"))},loading:h.a}),B=function(){return r.a.createElement(x,null,r.a.createElement(v,null,r.a.createElement(E,null,"Listing page"),r.a.createElement(w,{to:"/"},"Home")),r.a.createElement(k,null),r.a.createElement(F,null))};function C(){return r.a.createElement(m.Switch,null,r.a.createElement(m.Route,{exact:!0,path:"/",component:j}),r.a.createElement(m.Route,{exact:!0,path:"/listing",component:B}))}var I=t("ab4cb61bcb2dc161defb"),A=t("54f683fcda7806277002"),P=t("74431d47afb6248fcb69"),R=t("70921625babcac4dc4b3");var S=Object(P.a)();var D={colors:{primary:{lightest:"#F9FBFC",lighter:"#EBF8FB",light:"#D7F1F7",main:"#1D95AD",dark:"#1A849A"},secondary:{lighter:"#C6DEE5",light:"#9EB4BA",main:"#6A787C"},third:{main:"#0DBEB2"},red:"#EA526F",yellow:"#FFE4A3",green:"#0A8B82",blue:"#23B5D3",black:"#24282A",white:"#F4FDFF"},font:{family:'"PT Sans", Helvetica, sans-serif'}},N=u()(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=[S,Object(d.routerMiddleware)(n)],a=[I.applyMiddleware.apply(void 0,t)],r=I.compose,i=Object(I.createStore)(Object(R.a)(),Object(A.fromJS)(e),r.apply(void 0,a));return i.runSaga=S.run,i.injectedReducers={},i.injectedSagas={},i}({},N),H=document.getElementById("app");o.a.render(r.a.createElement(c.Provider,{store:z},r.a.createElement(l.a,{theme:D},r.a.createElement(d.ConnectedRouter,{history:N},r.a.createElement(a.Fragment,null,r.a.createElement(s,null),r.a.createElement(C,null))))),H)}},[[0,6,5]]]);