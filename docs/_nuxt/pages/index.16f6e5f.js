(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{298:function(t,n,e){var content=e(594);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("41d8e247",content,!0,{sourceMap:!1})},593:function(t,n,e){"use strict";var r=e(298);e.n(r).a},594:function(t,n,e){(n=e(51)(!1)).push([t.i,"li[data-v-0ce590c6],ul[data-v-0ce590c6]{list-style:none}.index-container[data-v-0ce590c6]{height:100vh;width:100vw;display:grid;grid-template-rows:auto 1fr auto}.index-container nav[data-v-0ce590c6]{background-color:#3b8070}.index-container nav .nav-title[data-v-0ce590c6]{color:#fff}.index-container .content[data-v-0ce590c6]{padding:24px 48px}",""]),t.exports=n},601:function(t,n,e){"use strict";e.r(n);e(29);var r=e(2),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,n.next=3,e("blogs").sortBy("createAt","asc").fetch();case 3:return r=n.sent,n.abrupt("return",{blogs:r});case 5:case"end":return n.stop()}}),n)})))()},data:function(){return{blogs:[]}}},o=(e(593),e(37)),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"index-container"},[t._m(0),t._v(" "),e("div",{staticClass:"content"},[e("h4",[t._v("\n      Blogs\n    ")]),t._v(" "),e("ul",t._l(t.blogs,(function(n){return e("li",{key:n.slug},[e("nuxt-link",{attrs:{to:"blog/"+n.slug+"/"}},[t._v(t._s(n.slug))])],1)})),0)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("nav",[n("h2",{staticClass:"nav-title"},[this._v("Jumpymariox Github Page")])])}],!1,null,"0ce590c6",null);n.default=component.exports}}]);