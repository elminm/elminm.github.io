(this["webpackJsonpbootcamp-m4-starter"]=this["webpackJsonpbootcamp-m4-starter"]||[]).push([[0],{26:function(e,t,a){e.exports=a(48)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),i=a.n(r),l=a(3),o=a(10),m=a(2),s=(a(35),a(36),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header__title"},"MustSee"))}),u=a(9),b=(a(37),function(){var e=Object(l.b)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],i=a[1];return c.a.createElement("div",{className:"search-box"},c.a.createElement("form",{className:"search-box__form",onSubmit:function(t){t.preventDefault(),fetch("https://www.omdbapi.com/?s=".concat(r,"&apikey=eba96b27")).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_MOVIE",payload:t.Search})})),i("")}},c.a.createElement("label",{className:"search-box__form-label"},"\u0418\u0441\u043a\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u043c \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e:",c.a.createElement("input",{value:r,type:"text",className:"search-box__form-input",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, Shawshank Redemption",onChange:function(e){i(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"search-box__form-submit",disabled:!r},"\u0418\u0441\u043a\u0430\u0442\u044c"),r))}),d=(a(38),function(e){var t=e.Title,a=e.Year,n=e.Poster,r=e.imdbID;"N/A"===n&&(n="https://scontent.fgyd8-1.fna.fbcdn.net/v/t1.6435-9/128851635_5427040923980029_649285277980215436_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_ylmF0Ob5A0AX9Bf5-F&_nc_ht=scontent.fgyd8-1.fna&oh=00_AfA8P7zs77hMRsjbeqY2rhECJawKOO5Z-CuOwxEj18XbkQ&oe=64294145");var i=Object(l.b)();return c.a.createElement("article",{className:"movie-item"},c.a.createElement("img",{className:"movie-item__poster",src:n,alt:t}),c.a.createElement("div",{className:"movie-item__info"},c.a.createElement("h3",{className:"movie-item__title"},t,"\xa0(",a,")"),c.a.createElement("button",{onClick:function(){i({type:"ADD_FAVORITES",payload:{Title:t,Year:a,imdbID:r}})},type:"button",className:"movie-item__add-button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043e\u043a")))}),f=(a(39),function(){var e=Object(l.c)((function(e){return e.movieReducer.movies}));return c.a.createElement("ul",{className:"movies"},e&&(null===e||void 0===e?void 0:e.map((function(e){return c.a.createElement("li",{className:"movies__item",key:e.imdbID},c.a.createElement(d,{movie:e}))}))))}),E=(a(40),function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.favoriteReducer.movies})),a=Object(l.c)((function(e){return e.favoriteReducer.movieListName})),r=Object(n.useState)("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"),i=Object(u.a)(r,2),m=i[0],s=i[1],b=Object(n.useState)(!1),d=Object(u.a)(b,2),f=d[0],E=d[1],v=a&&t.length>0;return c.a.createElement("div",{className:"favorites"},c.a.createElement("input",{value:a,className:"favorites__name",onChange:function(t){return e({type:"LIST_NAME",payload:t.target.value})},placeholder:"\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",disabled:f}),t.length>0&&c.a.createElement("ul",{className:"favorites__list"},null===t||void 0===t?void 0:t.map((function(t){return c.a.createElement("li",{key:t.imdbID},t.Title," (",t.Year,")",c.a.createElement("button",{onClick:function(){e({type:"DELETE_FAVORITE_ITEM",payload:t})},disabled:f},"X"))}))),f?c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{to:"/listpage"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043f\u0438\u0441\u043a\u0443"),c.a.createElement("button",{onClick:function(){s("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"),E(!1)}},"Undo")):c.a.createElement("button",{type:"button",onClick:function(){s("loading..."),setTimeout((function(){E(!0)}),300)},className:"favorites__save",disabled:!v},m))}),v=function(){return c.a.createElement("div",{className:"main-page"},c.a.createElement(s,null),c.a.createElement("main",{className:"main-page__content"},c.a.createElement("section",{className:"main-page__main-section"},c.a.createElement("div",{className:"main-page__search-box"},c.a.createElement(b,null)),c.a.createElement("div",{className:"main-page__movies"},c.a.createElement(f,null))),c.a.createElement("aside",{className:"main-page__favorites"},c.a.createElement(E,null))))},_=(a(45),function(){var e=Object(l.c)((function(e){return e.favoriteReducer.movies})),t=Object(l.c)((function(e){return e.favoriteReducer.movieListName}));return c.a.createElement("div",{className:"list-page"},c.a.createElement("h1",{className:"list-page__title"},t),c.a.createElement("ul",null,e.map((function(e){return c.a.createElement("li",{key:e.imdbID},c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.imdb.com/title/".concat(e.imdbID,"/")},e.Title," (",e.Year,")"))})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(o.b,{to:"/"},"Back to Home Page")))}),p=(a(46),a(47),function(){return c.a.createElement("div",{className:"app"},c.a.createElement(m.a,{path:"/",exact:!0,component:v}),c.a.createElement(m.a,{path:"/listpage",exact:!0,component:_}))}),h=a(16),O=a(17),N=a(8),g={movies:[],movieListName:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITES":var a=e.movies.find((function(e){return e.imdbID===t.payload.imdbID}));return a?e:Object(N.a)(Object(N.a)({},e),{},{movies:[].concat(Object(O.a)(e.movies),[t.payload])});case"DELETE_FAVORITE_ITEM":return Object(N.a)(Object(N.a)({},e),{},{movies:e.movies.filter((function(e){return e.imdbID!==t.payload.imdbID}))});case"LIST_NAME":return Object(N.a)(Object(N.a)({},e),{},{movieListName:t.payload});default:return e}},y={movies:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE":return Object(N.a)(Object(N.a)({},e),{},{movies:t.payload});default:return e}},D=Object(h.a)({movieReducer:I,favoriteReducer:j}),T=Object(h.b)(D);i.a.render(c.a.createElement(l.a,{store:T},c.a.createElement(o.a,null,c.a.createElement(p,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.e5bf6831.chunk.js.map