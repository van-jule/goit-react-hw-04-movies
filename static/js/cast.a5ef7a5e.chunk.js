(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[1],{64:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return j}));var a=c(57),s=c(0),n=c(3),r=c(59),i=c(60),o=c(58),h=c.n(o),l=c(1);function j(){Object(n.g)();var t=Object(s.useState)(null),e=Object(a.a)(t,2),c=e[0],o=e[1],j=Object(s.useState)(i.a.IDLE),u=Object(a.a)(j,2),b=(u[0],u[1]),p=Object(s.useState)(),d=Object(a.a)(p,2),O=(d[0],d[1]),m=Object(n.h)().movieId;return Object(s.useEffect)((function(){r.a.fetchActors(m).then((function(t){var e=t.cast;o(e),b(i.a.RESOLVED)})).catch((function(t){O(t),b(i.a.REJECTED)}))}),[]),Object(l.jsx)(l.Fragment,{children:c&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:h.a.title,children:"Cast"}),Object(l.jsx)("ul",{className:h.a.gallery,children:c.map((function(t){var e=(null===t||void 0===t?void 0:t.profile_path)?"".concat("https://www.themoviedb.org/t/p/w600_and_h900_bestv2").concat(t.profile_path):"https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png";return Object(l.jsxs)("li",{className:h.a.item,children:[Object(l.jsx)("img",{className:h.a.actorImage,src:e,alt:t.name})," ",Object(l.jsx)("p",{children:t.name}),Object(l.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})]})})}}}]);
//# sourceMappingURL=cast.a5ef7a5e.chunk.js.map