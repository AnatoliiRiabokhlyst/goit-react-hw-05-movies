"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[454],{4940:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,c,a,o,s,d,u=t(885),l=t(2791),h=t(6871),p=t(2134),x=t(501),f=t(168),g=t(6031),v=g.ZP.article(r||(r=(0,f.Z)(["\n  padding: 20px;\n"]))),m=g.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  max-height: fit-content;\n  width: 600px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),j=g.ZP.div(c||(c=(0,f.Z)(["\n  flex-shrink: 0;\n  flex-grow: 0;\n  height: 100%;\n  width: 50%;\n"]))),k=g.ZP.div(a||(a=(0,f.Z)(["\n  margin-bottom: 20px;\n"]))),w=g.ZP.ul(o||(o=(0,f.Z)(["\n  padding: 0;\n  margin: 0;\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),b=g.ZP.div(s||(s=(0,f.Z)(["\n  padding: 10px 0;\n  border-top: 1px solid grey;\n  border-bottom: 1px solid grey;\n"]))),_=(0,g.ZP)(x.rU)(d||(d=(0,f.Z)(["\n  display: block;\n  background-color: #ccc;\n  width: fit-content;\n  padding: 5px 10px;\n  border-radius: 4px;\n  color: black;\n  display: flex;\n  text-decoration: none;\n  align-items: flex-end;\n  gap: 5px;\n"]))),Z=t(184);function y(n){var e,t,r=n.movie,i=(0,h.TH)(),c=(0,l.useRef)(null!==(e=i.state)&&void 0!==e&&e.from?null===(t=i.state)||void 0===t?void 0:t.from:"/"),a=r.original_title,o=r.genres,s=r.vote_average,d=r.overview,u=r.poster_path,f=r.release_date;return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(v,{children:[(0,Z.jsxs)(_,{to:c.current,children:[(0,Z.jsx)(p.kyg,{})," Go back"]}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)(j,{children:(0,Z.jsx)("img",{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/".concat(u),alt:a})}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(k,{children:[(0,Z.jsxs)("h2",{children:[a," (",new Date(f).getFullYear(),")"]}),(0,Z.jsxs)("p",{children:["User score: ",Math.round(10*s),"%"]})]}),(0,Z.jsxs)(k,{children:[(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)("p",{children:d})]}),(0,Z.jsxs)(k,{children:[(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)("p",{children:o.map((function(n){return n.name})).join(", ")})]})]})]}),(0,Z.jsxs)(b,{children:[(0,Z.jsx)("p",{children:"Additional information"}),(0,Z.jsxs)(w,{children:[(0,Z.jsx)(x.OL,{to:"cast",children:"Cast"}),(0,Z.jsx)(x.OL,{to:"reviews",children:"Reviews"})]})]})]}),(0,Z.jsx)(h.j3,{})]})}var P=t(5802);function U(){var n=(0,l.useState)(null),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,h.UO)().movieId;return(0,l.useEffect)((function(){(0,P.Mc)(Number(i)).then(r)}),[i]),(0,Z.jsx)(Z.Fragment,{children:t&&(0,Z.jsx)(y,{movie:t})})}},5802:function(n,e,t){t.d(e,{Mc:function(){return d},hC:function(){return u},oJ:function(){return l},FE:function(){return s},_k:function(){return o}});var r=t(4569),i=t.n(r),c="https://api.themoviedb.org/3/",a="469f396daed18d4e24f33ab6e42a34e8",o=function(){return i()("".concat(c,"trending/movie/day?api_key=").concat(a)).then((function(n){return n.data.results}))},s=function(n){return i()("".concat(c,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(n)).then((function(n){return n.data.results}))},d=function(n){return i()("".concat(c,"movie/").concat(n,"?api_key=").concat(a,"&language=en-US")).then((function(n){return n.data}))},u=function(n){return i()("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(a,"&language=en-US")).then((function(n){return n.data.cast}))},l=function(n){return i()("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US")).then((function(n){return n.data.results}))}}}]);
//# sourceMappingURL=single-movie.9e598e46.chunk.js.map