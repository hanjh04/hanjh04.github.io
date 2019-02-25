(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{164:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"vuex"}},[t._v("vuex")]),t._v(" "),e("blockquote",[e("p",[t._v("vuex의 기본적 개념은 "),e("a",{attrs:{href:"https://vuex.vuejs.org/kr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v("를 참조.")])]),t._v(" "),e("h2",{attrs:{id:"states"}},[t._v("states")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),e("h2",{attrs:{id:"action"}},[t._v("action")]),t._v(" "),t._m(4),t._v(" "),e("h2",{attrs:{id:"mutations"}},[t._v("mutations")]),t._v(" "),t._m(5),t._v(" "),e("h2",{attrs:{id:"getters"}},[t._v("getters")]),t._v(" "),t._m(6),t._v(" "),e("h1",{attrs:{id:"db"}},[t._v("DB")]),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("도서 관리 시스템에서 관리하고 싶은 상태는 "),s("code",[this._v("책 목록")]),this._v("과 "),s("code",[this._v("책의 상세 내용")]),this._v(" 이다.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bookList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bookDetail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("book list를 array형")]),this._v(" "),s("li",[this._v("book detail을 object형\n으로 선언하였다.")]),this._v(" "),s("li",[this._v("개발 과정 중 책의 이미지를 저장해야할 필요가 생겨 image를 추가하였다.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bookList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bookDetail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("FETCH_BOOKLIST(context)\n"),e("ul",[e("li",[t._v("책 리스를 불러오는 기능")]),t._v(" "),e("li",[t._v("받아온 후 store에 저장")])])]),t._v(" "),e("li",[t._v("FETCH_BOOKDETAIL(context, idx)\n"),e("ul",[e("li",[t._v("idx를 인자로 받아 idx에 해당하는 책 정보를 받아온다.")])])]),t._v(" "),e("li",[t._v("FETCH_IMAGE(context, imgUrl)\n"),e("ul",[e("li",[t._v("image url을 전달받아 서버에 이미지 요청을 함.")])])]),t._v(" "),e("li",[t._v("SAVE_BOOKINFO(context, payload)\n"),e("ul",[e("li",[t._v("책 정보를 전달")])])]),t._v(" "),e("li",[t._v("SAVE_BOOKIMAGE(context, payload)\n"),e("ul",[e("li",[t._v("책 이미지 전달")])])]),t._v(" "),e("li",[t._v("DELETE_BOOKINFO(context, payload)\n"),e("ul",[e("li",[t._v("책 정보 삭제")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("SET_BOOKLIST(state, bookList)\n"),e("ul",[e("li",[e("code",[t._v("FETCH_BOOKLIST")]),t._v("로 책 정보 리스트를 받은 후 store에 저장하는 역할")])])]),t._v(" "),e("li",[t._v("SET_BOOKDETAIL(state, bookDetail)\n"),e("ul",[e("li",[e("code",[t._v("FETCH_BOOKDETAIL")]),t._v("로 책 상세 정보를 받아온 후 store에 저장하는 역할")])])]),t._v(" "),e("li",[t._v("SET_IMAGE(state, image)\n"),e("ul",[e("li",[e("code",[t._v("FETCH_IMAGE")]),t._v("로 책 이미지를 받아온후 store에 저장하는 역할")])])]),t._v(" "),e("li",[t._v("INIT_BOOKINFO(state)\n"),e("ul",[e("li",[t._v("book detail 페이지와 add book 페이지(같은 component 공유) 간 이동 시 데이터 초기화 역할")])])]),t._v(" "),e("li",[t._v("DELETE_BOOKINFO(state, idx)\n"),e("ul",[e("li",[t._v("store에 저장된 "),e("code",[t._v("bookList에서")]),t._v(" "),e("code",[t._v("DELETE_BOOKINFO")]),t._v("로 삭제한 항목 제거")])])]),t._v(" "),e("li",[t._v("REFRESH_BOOKINFO(state, bookDetail)\n"),e("ul",[e("li",[t._v("add book 했을 때 store의 "),e("code",[t._v("bookList")]),t._v("에 새 항목 추가.")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("fetchedBookList(state)\n"),e("ul",[e("li",[t._v("component에서 store에 저장된 데이터 불러올 때 사용.")])])]),t._v(" "),e("li",[t._v("fetchedBookDetail(state)\n"),e("ul",[e("li",[t._v("component에서 store에 저장된 데이터 불러올 때 사용.")])])]),t._v(" "),e("li",[t._v("fetchedImage(state)\n"),e("ul",[e("li",[t._v("component에서 store에 저장된 데이터 불러올 때 사용.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("firebse 사용. db 데이터 불러오기 위해 백엔드를 새로 짤 필요 없이 firebase에서 제공하는 api를 이용하면 된다."),s("br"),this._v("\nDB"),s("br"),this._v("\n├── "),s("code",[this._v("dbConfig.js")]),s("br"),this._v("\n└── "),s("code",[this._v("dbInit.js")])])])}],!1,null,null,null);a.options.__file="book_4_vuex_상태관리.md";s.default=a.exports}}]);