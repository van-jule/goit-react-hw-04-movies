(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[4],{57:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){a=!0,c=s}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},58:function(e,t,r){e.exports={image:"MovieDetails_image__1Z9Ue",actorImage:"MovieDetails_actorImage__2Xg0M MovieDetails_image__1Z9Ue",userAvatar:"MovieDetails_userAvatar__3c4eM",subtitle:"MovieDetails_subtitle__z0WV-",text:"MovieDetails_text__1H1Bh",moviePoster:"MovieDetails_moviePoster__pz33_",gallery:"MovieDetails_gallery__d6c0r",item:"MovieDetails_item__24E6Q",wrap:"MovieDetails_wrap__2w0W1",content:"MovieDetails_content__1h4C_",title:"MovieDetails_title__3u77s",cast:"MovieDetails_cast__2q-io MovieDetails_item__24E6Q",reviews:"MovieDetails_reviews__2wgtD MovieDetails_item__24E6Q",castLink:"MovieDetails_castLink__20RWZ",reviewsLink:"MovieDetails_reviewsLink__2WdnJ",list:"MovieDetails_list__1yuZx",button:"MovieDetails_button__3HmvB"}},59:function(e,t,r){"use strict";var n="https://api.themoviedb.org/3",a="af8b040221b1ba9bcffe2515fde78733";var c={fetchTrendMovies:function(){return fetch("".concat(n,"/trending/movie/day?api_key=").concat(a)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0442\u0440\u0435\u043d\u0434\u043e\u0432\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432"))}))},fetchMovies:function(e){return fetch("".concat(n,"/search/movie?api_key=").concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}))},fetchMovieByID:function(e){return fetch("".concat(n,"/movie/").concat(e,"?api_key=").concat(a,"&language=en-US_expand=actors")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0444\u0438\u043b\u044c\u043c\u0430 ".concat(e)))}))},fetchActors:function(e){return fetch("".concat(n,"/movie/").concat(e,"/credits?api_key=").concat(a,"&language=en-US_embed=movie")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0430\u043a\u0442\u0435\u0440\u043e\u0432 \u0432 \u0444\u0438\u043b\u044c\u043c\u0435 ".concat(e)))}))},fetchReviews:function(e){return fetch("".concat(n,"/movie/").concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e \u0444\u0438\u043b\u044c\u043c\u0435 ".concat(e)))}))}};t.a=c},60:function(e,t,r){"use strict";t.a={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},61:function(e,t,r){e.exports={title:"PageHeading_title__1zVTq"}},62:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(61),a=r.n(n),c=r(1);function o(e){var t=e.text;return Object(c.jsx)("h1",{className:a.a.title,children:t})}},63:function(e,t,r){e.exports={searchbar:"Searchbar_searchbar__3RzDg",searchForm:"Searchbar_searchForm__EDf_z",searchFormButton:"Searchbar_searchFormButton__3Y3r9",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__2uLcs",searchFormInput:"Searchbar_searchFormInput__37akM"}},68:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,"default",(function(){return d}));var o=r(57),i=r(0),s=(r(23),r(3)),u=r(9),l=r(62),f=r(17),h=r(63),_=r.n(h),b=r(1),m=function(e){var t=e.onSubmit,r=Object(i.useState)(""),n=Object(o.a)(r,2),a=n[0],c=n[1];return Object(b.jsx)("div",{className:_.a.searchbar,children:Object(b.jsxs)("form",{className:_.a.searchForm,onSubmit:function(e){e.preventDefault(),a||f.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"),t(a.trim()),c("")},children:[Object(b.jsx)("button",{type:"submit",className:_.a.searchFormButton,children:Object(b.jsx)("span",{className:_.a.searchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:_.a.searchFormInput,type:"text",value:a,autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(e){c(e.currentTarget.value.toLowerCase())}})]})})};m.defaultProps={onSubmit:function(){}};var v=m,j=r(59),p=r(60),O=r(58),g=r.n(O);function d(){var e=Object(s.i)(),t=e.url,r=(e.path,Object(s.f)()),n=Object(s.g)(),a=Object(i.useState)(p.a.IDLE),f=Object(o.a)(a,2),h=(f[0],f[1]),_=Object(i.useState)(null),m=Object(o.a)(_,2),O=(m[0],m[1]),d=Object(i.useState)(null),y=Object(o.a)(d,2),D=y[0],E=y[1],S=Object(i.useState)(""),w=Object(o.a)(S,2),M=w[0],x=w[1];Object(i.useEffect)((function(){M&&(console.log("queryValue",M),h(p.a.PENDING),j.a.fetchMovies(M).then((function(e){var t=e.results;E(t),h(p.a.RESOLVED)})).catch((function(e){O(e),h(p.a.REJECTED)})))}),[M]);var P=new URLSearchParams(n.search).get("query");Object(i.useEffect)((function(){""!==n.search&&""!==n.search&&j.a.fetchMovies(P).then((function(e){var t=e.results;E(t),h(p.a.RESOLVED)})).catch((function(e){O(e),h(p.a.REJECTED)}))}),[n]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{text:"Search movie"}),Object(b.jsx)(v,{onSubmit:function(e){r.push(c(c({},n),{},{search:"query=".concat(e)})),x(e)}}),D&&Object(b.jsx)("ul",{className:g.a.list,children:D.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)(u.b,{to:{pathname:"".concat(t,"/").concat(e.id),state:{from:n}},children:[" ",e.title]})},e.id)}))})]})}}}]);
//# sourceMappingURL=moviesPage.da5ef324.chunk.js.map