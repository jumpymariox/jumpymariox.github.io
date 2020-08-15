__NUXT_JSONP__("/blog/NuxtJs", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an){return {data:[{article:{toc:[{id:O,depth:y,text:P},{id:Q,depth:s,text:R},{id:S,depth:s,text:T},{id:U,depth:s,text:V},{id:W,depth:y,text:X},{id:Y,depth:s,text:Z},{id:_,depth:y,text:$},{id:aa,depth:s,text:ab},{id:ac,depth:s,text:ad},{id:ae,depth:s,text:af},{id:z,depth:y,text:z}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"本文将自学时将官网未明确的知识整合，建议作为官网guide补充知识食用。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"目录"}]},{type:a,value:"\n[TOC]"}]},{type:a,value:c},{type:b,tag:A,props:{id:O},children:[{type:b,tag:f,props:{href:"#nuxtjs%E7%9A%84%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:t,props:{id:Q},children:[{type:b,tag:f,props:{href:"#%E4%B8%80-nuxtjs%E7%AE%80%E4%BB%8B",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:ag,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"官网的介绍"}]},{type:a,value:"："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"NuxtJs 是一个简便的 Vue 框架。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如官网所说，NustJs是基于vue的框架，它有一个重要特性，就是可以实现ssr。"}]},{type:a,value:c},{type:b,tag:t,props:{id:S},children:[{type:b,tag:f,props:{href:"#%E4%BA%8C-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr%EF%BC%88server-side-render%EF%BC%89",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:ag,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"通用的解释"}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"指一般情况下，一个web页面的数据渲染都是由服务器端来完成。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:U},children:[{type:b,tag:f,props:{href:"#%E4%B8%89-nuxtjs%E7%9A%84%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:u,props:{id:"1-单页应用程序-spa"},children:[{type:b,tag:f,props:{href:"#1-%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F-spa",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"1. 单页应用程序 (SPA)"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"sequenceDiagram\n浏览器-\u003E\u003E服务器: 初次请求\n服务器-\u003E\u003E浏览器: \"js\"+\"空html\"\n浏览器-\u003E\u003E服务器: 再次请求\n服务器-\u003E\u003E浏览器: \"数据\"\n\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"graph LR\n浏览器--\u003E| 渲染: js+数据+空html | 界面\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"浏览器首次向服务端请求的为空的html和js，浏览器执行js后向服务器再次发起请求获取数据，最终将数据渲染进html中形成界面。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"实际上NuxtJs的spa模式和用vue开发模式基本相同，可以认为是在vue的基础上，加上了NuxtJs的一些特性。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"由js控制页面渲染，可以借助vue-router保持同一标签页内跳转路由页面而不需重复加载基础静态资源；"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"经过事件操作后，js可以局部更新UI而不需要刷新整个页面。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"网站请求到的html和js中不包含数据，爬虫无法执行js获取数据，对seo很不友好；"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{id:"2-服务器端渲染（ssr）"},children:[{type:b,tag:f,props:{href:"#2-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93%EF%BC%88ssr%EF%BC%89",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"2. 服务器端渲染（SSR）"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"sequenceDiagram\n浏览器-\u003E\u003E服务器: 初次请求\n服务器-\u003E\u003E浏览器: 渲染好的html = 数据+js+空html\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"将浏览器请求数据和渲染成html的步骤搬到服务端完成，浏览器首次请求就是渲染完成的html，对seo也是所见即所得。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ah}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"减少客户端与服务端请求，加速首屏展示。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"服务端负担加重，服务端的性能和距离等将成为影响首屏渲染的要素；"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"很多客户端配置需要修改适应服务端配置，比如路由；"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"开发runtime涉及client和server，更加复杂；"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{id:"3-生成静态站点"},children:[{type:b,tag:f,props:{href:"#3-%E7%94%9F%E6%88%90%E9%9D%99%E6%80%81%E7%AB%99%E7%82%B9",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"3. 生成静态站点"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"sequenceDiagram\n浏览器-\u003E\u003E服务器: 初次请求\n服务器-\u003E\u003E浏览器: 提前渲染好的 静态html+js\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这个模式的构建成品只有静态文件，但与同样只有静态文件的spa不同，这是经过了一次服务端渲染模式产出的html和js，相关的数据在构建时会获取一次并保存在静态文件中。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"不需要服务端启动任何服务，只要将静态文件放到服务器的根路径，或者修改根路径配置即可，其实就是非常原始的静态网站。"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ah}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"数据在构建时获取，浏览网站时并未实时数据。"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"静态资源重复。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{id:W},children:[{type:b,tag:f,props:{href:"#nuxtjs%E7%9A%84%E5%BC%80%E5%8F%91%E7%9F%A5%E8%AF%86",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:t,props:{id:Y},children:[{type:b,tag:f,props:{href:"#%E4%B8%80-%E6%9E%84%E5%BB%BA%E7%9B%AE%E6%A0%87%E5%92%8C%E6%8C%87%E4%BB%A4",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"需要使用对应的指令和配置，才能对应构建NuxtJs三种渲染模式，需要配置的是"},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt.config.js"}]},{type:a,value:"中的"},{type:b,tag:e,props:{},children:[{type:a,value:"target"}]},{type:a,value:ai},{type:b,tag:e,props:{},children:[{type:a,value:"mode"}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:u,props:{id:"1-构建单页应用程序-spa"},children:[{type:b,tag:f,props:{href:"#1-%E6%9E%84%E5%BB%BA%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F-spa",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"1. 构建单页应用程序 (SPA)"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002F\u002F nuxt.config.js\n{\n    mode: 'spa'，\n    target: 'static'\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"只需配置mode即可，target值只能是'static'，选择'serve'在构建时会有warning。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:B}]},{type:a,value:H},{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:"文件夹，该文件夹为本地预览服务端和本地应用运行代码;"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:I}]},{type:a,value:" 根据"},{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:"，生成静态资源包储存在"},{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:ak}]},{type:a,value:" 本地启动服务，部署"},{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:"中的应用，即可访问该单页应用。"}]},{type:a,value:c},{type:b,tag:u,props:{id:"2-构建服务端渲染（ssr）"},children:[{type:b,tag:f,props:{href:"#2-%E6%9E%84%E5%BB%BA%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93%EF%BC%88ssr%EF%BC%89",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"2. 构建服务端渲染（SSR）"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002F\u002F nuxt.config.js\n{\n    mode: 'universal',\n    target: 'serve'\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:B}]},{type:a,value:H},{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:"文件夹，该文件夹为服务端应用和本地应用运行代码;"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"nuxt start"}]},{type:a,value:" 启动"},{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:"中的代码;"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"nuxt"}]},{type:a,value:" 启动开发模式，该模式下会监听项目文件修改，并自动运行"},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt build && nuxt start"}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:u,props:{id:"3-构建服务端静态网页"},children:[{type:b,tag:f,props:{href:"#3-%E6%9E%84%E5%BB%BA%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%9D%99%E6%80%81%E7%BD%91%E9%A1%B5",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"3. 构建服务端静态网页"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002F\u002F nuxt.config.js\n{\n    mode: 'universal',\n    target: 'static'\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:B}]},{type:a,value:H},{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:"文件夹，文件夹为本地预览服务器和客户端应用代码；"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:I}]},{type:a,value:" 生成静态网页并储存在"},{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:ak}]},{type:a,value:" 本地启动服务，并将服务根路径路由到"},{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:"中的静态网页，可访问该服务预览静态网页。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"nuxt generate"}]},{type:a,value:" 旧接口，相当于"},{type:b,tag:e,props:{},children:[{type:a,value:B}]},{type:a,value:"+"},{type:b,tag:e,props:{},children:[{type:a,value:I}]},{type:a,value:"，生成静态网页，并储存在"},{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:A,props:{id:_},children:[{type:b,tag:f,props:{href:"#ssr-%E5%BC%80%E5%8F%91",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:t,props:{id:aa},children:[{type:b,tag:f,props:{href:"#%E4%B8%80-nuxtjs-lifecycle",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这是官网的生命周期示意图\n"},{type:b,tag:"img",props:{alt:"image",src:"https:\u002F\u002Fzh.nuxtjs.org\u002Fguides\u002Fnuxt-lifecycle.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在NuxtJs的生命周期中，NuxtJs Lifecycle特有的hooks有："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"nuxtServerInit"}]},{type:a,value:": 当项目地址被首次访问时触发一次，同页面路由跳转同域名地址时不触发，用于全局数据或者客户端请求数据（比如cookie）获取，因为是最先触发的hook，特别适合校验用户登录；"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"router middleware"}]},{type:a,value:": 注册的中间件每个页面渲染前执行，可以用于处理同类页面逻辑；"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"validate"}]},{type:a,value:": 当每一个页面渲染前触发，可用于校验路由参数或者用户鉴权；"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"asyncData"}]},{type:a,value:": 当每一个页面渲染前触发，可用于页面请求数据，将获得的数据作为返回值即会合并到component.data中，用于组件渲染；"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"fetch"}]},{type:a,value:": 当每一个页面渲染前触发，可用于页面请求数据，一般用于将获得数据存储到前端内存数据管理的store中；"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"但只看官网原图很难明确看出哪些hooks在哪一侧（服务端or客户端？）运行。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"经过我的整理流程如下："}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"graph LR\n&&- --\u003E服务端运行\n$$- --\u003E客户端运行\n&$- --\u003E服务端和客户端都运行\n\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"graph TB\nnuxtServerInit(&&-nuxtServerInit)--\u003ERouteMiddleware\nRouteMiddleware(&$-route middleware)--\u003Evalidate\n\nvalidate(&&-validate)--\u003EasyncData\n\nasyncData(&$-asyncData)--\u003EbeforeCreated\u002Fcreated\n\nbeforeCreated\u002Fcreated(&$-beforeCreated\u002Fcreated)--\u003E&&-fetch\n\n&&-fetch--\u003EbeforedMounted\u002Fmounted\n\nbeforedMounted\u002Fmounted($$-beforedMounted\u002Fmounted)--\u003E$$-fetch\n\n$$-fetch($$-fetch)--\u003Eother_vue_hooks($$-其他vue hooks)\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"关于fetch的特别说明："}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"该图中出现的两个fetch都是同一个hook，只是因为在服务端调用和在客户端调用的时机不同，所以出现在两个位置。"}]},{type:a,value:c},{type:b,tag:t,props:{id:ac},children:[{type:b,tag:f,props:{href:"#%E4%BA%8C-lifecycle-hooks%E7%9A%84%E8%B0%83%E7%94%A8%E6%97%B6%E6%9C%BA",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"上面整理了lifecycle hooks的调用顺序，但是调用时机却不一定按照顺序来，因为还要考虑hooks触发的时机。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"hooks触发的时机一般有三种："}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"页面首次加载；"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"路由跳转已加载页面；"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"事件触发数据更新；"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"第3事件触发数据更新调用的hook为vue lifecycle的"},{type:b,tag:e,props:{},children:[{type:a,value:"updated"}]},{type:a,value:", 并无特殊之处，在此不做讨论，这里重点看1和2；"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以下为不同时机打印log查看触发的hooks："}]},{type:a,value:c},{type:b,tag:al,props:{id:am},children:[{type:b,tag:f,props:{href:"#%E9%A1%B5%E9%9D%A2%E9%A6%96%E6%AC%A1%E6%B8%B2%E6%9F%93",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:am}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002F\u002F server\nasyncData\nbeforeCreate\ncreated\nfetch\n\n\u002F\u002F client\nbeforeCreate\ncreated\n"}]}]}]},{type:a,value:c},{type:b,tag:al,props:{id:C},children:[{type:b,tag:f,props:{href:"#%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC%E5%B7%B2%E5%8A%A0%E8%BD%BD%E9%A1%B5%E9%9D%A2",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002F\u002F server\n\u002F\u002F 无\n\n\u002F\u002F client\nasyncData\nbeforeCreate\ncreated\nfetch\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"由此可见，当路由跳转到已加载过的页面时，服务端是不工作的，请求数据和渲染的活还是前端完成。"}]},{type:a,value:c},{type:b,tag:t,props:{id:ae},children:[{type:b,tag:f,props:{href:"#%E4%B8%89-nuxtjs%E7%9A%84ssr%E5%B7%A5%E4%BD%9C%E6%9C%BA%E5%88%B6",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:af}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"不同调用时机，工作机制有所不同"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在"},{type:b,tag:m,props:{},children:[{type:a,value:an}]},{type:a,value:ai},{type:b,tag:m,props:{},children:[{type:a,value:C}]},{type:a,value:"这两种时机，NuxtJS的工作机制并不相同，当："}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:an}]},{type:a,value:" 时，服务器会预渲染页面并返回给前端，是标准的SSR工作模式；"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:C}]},{type:a,value:"时，页面不会重新加载，而是与vue应用相同，执行对应的hook获取数据在前端更新应用，是SPA的工作模式；"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"总结一下"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"NuxtJs并不会在所有的页面加载时，都使用SSR的方式在服务端预加载，对于已加载过的页面，它充分利用了vue-router实现spa的优势，使页面保持spa的局部更新应用的优势，保证渲染成本更低。"}]},{type:a,value:c},{type:b,tag:"hr",props:{},children:[]},{type:a,value:c},{type:b,tag:A,props:{id:z},children:[{type:b,tag:f,props:{href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0%EF%BC%9A",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fzh.nuxtjs.org\u002F",rel:[K,L,M],target:N},children:[{type:a,value:"NuxtJs官网"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fzh.nuxtjs.org\u002Fblog\u002Fgoing-full-static\u002F",rel:[K,L,M],target:N},children:[{type:a,value:"Going Full Static"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Frecurse.me\u002Fposts\u002Fchoosing-a-nuxt-mode.html",rel:[K,L,M],target:N},children:[{type:a,value:"NuxtJS render mode"}]}]},{type:a,value:c}]}]},dir:"\u002Fblogs",path:"\u002Fblogs\u002FNuxtJs",extension:".md",slug:"NuxtJs",createdAt:"2020-08-15T07:57:30.930Z",updatedAt:"2020-08-15T08:48:24.136Z"},prev:{slug:"NuxtJs-next"},next:null}],fetch:[],mutations:void 0}}("text","element","\n","p","code","a","li","true",-1,"span","icon","icon-link","strong","div","nuxt-content-highlight","pre","language-text","line-numbers",3,"h3","h4","ul",".nuxt","dist",2,"参考文章：","h2","nuxt build","路由跳转已加载页面","优点","ol","缺点","开发相关指令："," 编译生成","nuxt export","文件夹中；","nofollow","noopener","noreferrer","_blank","nuxtjs的基础知识","NuxtJs的基础知识","一-nuxtjs简介","一. NuxtJs简介","二-服务端渲染-ssr（server-side-render）","二. 服务端渲染 SSR（Server Side Render）","三-nuxtjs的渲染模式","三. NuxtJs的渲染模式","nuxtjs的开发知识","NuxtJs的开发知识","一-构建目标和指令","一. 构建目标和指令","ssr-开发","SSR 开发","一-nuxtjs-lifecycle","一. NuxtJs Lifecycle","二-lifecycle-hooks的调用时机","二. lifecycle hooks的调用时机","三-nuxtjs的ssr工作机制","三. NuxtJs的SSR工作机制","blockquote","对seo友好","和",";","nuxt serve","h5","页面首次渲染","页面首次加载")));