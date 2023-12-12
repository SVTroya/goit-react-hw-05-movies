"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[992],{821:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});var r,a,i,c=e(861),u=e(439),s=e(757),o=e.n(s),p=e(791),l=e(689),f=e(565),d=e(168),h=e(867),v=h.ZP.ul(r||(r=(0,d.Z)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 100px);\n  grid-gap: 20px;\n  list-style: none;\n  justify-content: center;\n"]))),m=h.ZP.div(a||(a=(0,d.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  height: 150px;\n  background-color: lightslategrey;\n\n  img{\n    width: 100px;\n    height: 150px;\n    object-fit: cover;\n  }\n"]))),g=h.ZP.li(i||(i=(0,d.Z)(["\n  text-align: center;\n\n  h3 {\n    font-weight: 500;\n  }\n\n  p {\n    font-style: italic;\n    color: #00b6b6;\n  }\n"]))),w=e.p+"static/media/man.f055c59b96d9f45b19a8.webp",x=e.p+"static/media/woman.36879ae04ab4c5176b64.webp",y=e(184);var b=function(){var t=(0,l.UO)().movieId,n=(0,p.useState)([]),e=(0,u.Z)(n,2),r=e[0],a=e[1],i=(0,p.useState)(!1),s=(0,u.Z)(i,2),d=s[0],h=s[1],b=(0,p.useCallback)(function(){var t=(0,c.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.IV)(n);case 2:0===(e=t.sent).length&&h(!0),a(e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[]);return(0,p.useEffect)((function(){try{b(t)}catch(n){console.log(n)}}),[t,b]),(0,y.jsxs)(y.Fragment,{children:[r.length>0?(0,y.jsx)(v,{children:r.map((function(t){var n=t.name,e=t.character,r=t.photo,a=t.gender,i=t.id;return(0,y.jsxs)(g,{children:[(0,y.jsx)(m,{children:(0,y.jsx)("img",{src:r||(1===a?x:w),alt:n})}),(0,y.jsx)("h3",{children:n}),(0,y.jsxs)("p",{children:["(",e,")"]})]},i)}))}):null,d?(0,y.jsx)("p",{children:"Sorry, we don't have information about cast"}):null]})}},565:function(t,n,e){e.d(n,{IV:function(){return d},LI:function(){return g},SU:function(){return o},eP:function(){return l},wH:function(){return v}});var r=e(861),a=e(757),i=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="fde4dd89a2c817f4c4efb19732e7d4a1",s="http://image.tmdb.org/t/p/w500";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",{params:{api_key:u}});case 2:return n=t.sent,t.abrupt("return",x(n.data.results));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function t(n){var e,r,a,o,p,l,f;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n),{params:{api_key:u}});case 2:return e=t.sent,r=e.data,a=r.title,o=r.overview,p=r.poster_path,l=r.vote_average,f=r.genres,t.abrupt("return",{title:a,overview:o,poster:p?s+p:null,score:Math.floor(10*l),genres:f});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:u}});case 2:return r=t.sent,t.abrupt("return",null===(e=r.data)||void 0===e?void 0:e.cast.map((function(t){var n=t.profile_path,e=t.name,r=t.character,a=t.gender;return{id:t.id,photo:n?s+n:null,name:e,character:r,gender:a}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:u}});case 2:return r=t.sent,t.abrupt("return",null===(e=r.data)||void 0===e?void 0:e.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie",{params:{api_key:u,query:n}});case 2:return e=t.sent,t.abrupt("return",x(e.data.results));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return t.map((function(t){var n=t.id,e=t.title,r=t.poster_path;return{id:n,title:e,poster:r?s+r:null}}))}}}]);
//# sourceMappingURL=992.44dfccbe.chunk.js.map