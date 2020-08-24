本文将自学时将官网未明确的知识整合，建议作为官网guide补充知识食用。

**目录**
[TOC]

## NuxtJs的基础知识

### 一. NuxtJs简介

> **官网的介绍**：
>
> NuxtJs 是一个简便的 Vue 框架。

如官网所说，NustJs是基于vue的框架，它有一个重要特性，就是可以实现ssr。

### 二. 服务端渲染 SSR（Server Side Render）

> **通用的解释**:
>
> 指一般情况下，一个web页面的数据渲染都是由服务器端来完成。

### 三. NuxtJs的渲染模式

#### 1. 单页应用程序 (SPA)

```
sequenceDiagram
浏览器->>服务器: 初次请求
服务器->>浏览器: "js"+"空html"
浏览器->>服务器: 再次请求
服务器->>浏览器: "数据"

```

```
graph LR
浏览器-->| 渲染: js+数据+空html | 界面
```
浏览器首次向服务端请求的为空的html和js，浏览器执行js后向服务器再次发起请求获取数据，最终将数据渲染进html中形成界面。

实际上NuxtJs的spa模式和用vue开发模式基本相同，可以认为是在vue的基础上，加上了NuxtJs的一些特性。

**优点**

1. 由js控制页面渲染，可以借助vue-router保持同一标签页内跳转路由页面而不需重复加载基础静态资源；
2. 经过事件操作后，js可以局部更新UI而不需要刷新整个页面。

**缺点**

1. 网站请求到的html和js中不包含数据，爬虫无法执行js获取数据，对seo很不友好；

#### 2. 服务器端渲染（SSR）

```
sequenceDiagram
浏览器->>服务器: 初次请求
服务器->>浏览器: 渲染好的html = 数据+js+空html
```
将浏览器请求数据和渲染成html的步骤搬到服务端完成，浏览器首次请求就是渲染完成的html，对seo也是所见即所得。

**优点**
- 对seo友好
- 减少客户端与服务端请求，加速首屏展示。

**缺点**
- 服务端负担加重，服务端的性能和距离等将成为影响首屏渲染的要素；
- 很多客户端配置需要修改适应服务端配置，比如路由；
- 开发runtime涉及client和server，更加复杂；

#### 3. 生成静态站点

```
sequenceDiagram
浏览器->>服务器: 初次请求
服务器->>浏览器: 提前渲染好的 静态html+js
```

这个模式的构建成品只有静态文件，但与同样只有静态文件的spa不同，这是经过了一次服务端渲染模式产出的html和js，相关的数据在构建时会获取一次并保存在静态文件中。

**优点**
- 不需要服务端启动任何服务，只要将静态文件放到服务器的根路径，或者修改根路径配置即可，其实就是非常原始的静态网站。
- 对seo友好

**缺点**
- 数据在构建时获取，浏览网站时并未实时数据。
- 静态资源重复。

## NuxtJs的开发知识

### 一. 构建目标和指令

需要使用对应的指令和配置，才能对应构建NuxtJs三种渲染模式，需要配置的是`nuxt.config.js`中的`target`和`mode`;

#### 1. 构建单页应用程序 (SPA)
```js
// nuxt.config.js
{
    mode: 'spa'，
    target: 'static'
}
```
只需配置mode即可，target值只能是'static'，选择'serve'在构建时会有warning。

开发相关指令：

`nuxt build` 编译生成`.nuxt`文件夹，该文件夹为本地预览服务端和本地应用运行代码;

`nuxt export` 根据`.nuxt`，生成静态资源包储存在`dist`文件夹中；

`nuxt serve` 本地启动服务，部署`dist`中的应用，即可访问该单页应用。


#### 2. 构建服务端渲染（SSR）
```js
// nuxt.config.js
{
    mode: 'universal',
    target: 'serve'
}
```

开发相关指令：

`nuxt build` 编译生成`.nuxt`文件夹，该文件夹为服务端应用和本地应用运行代码;

`nuxt start` 启动`.nuxt`中的代码;

`nuxt` 启动开发模式，该模式下会监听项目文件修改，并自动运行`nuxt build && nuxt start`;

#### 3. 构建服务端静态网页

```js
// nuxt.config.js
{
    mode: 'universal',
    target: 'static'
}
```
开发相关指令：

`nuxt build` 编译生成`.nuxt`文件夹，文件夹为本地预览服务器和客户端应用代码；

`nuxt export` 生成静态网页并储存在`dist`文件夹中；

`nuxt serve` 本地启动服务，并将服务根路径路由到`dist`中的静态网页，可访问该服务预览静态网页。

`nuxt generate` 旧接口，相当于`nuxt build`+`nuxt export`，生成静态网页，并储存在`dist`文件夹中；

## SSR 开发

### 一. NuxtJs Lifecycle

这是官网的生命周期示意图
![image](https://zh.nuxtjs.org/guides/nuxt-lifecycle.png)

在NuxtJs的生命周期中，NuxtJs Lifecycle特有的hooks有：

`nuxtServerInit`: 当项目地址被首次访问时触发一次，同页面路由跳转同域名地址时不触发，用于全局数据或者客户端请求数据（比如cookie）获取，因为是最先触发的hook，特别适合校验用户登录；

`router middleware`: 注册的中间件每个页面渲染前执行，可以用于处理同类页面逻辑；

`validate`: 当每一个页面渲染前触发，可用于校验路由参数或者用户鉴权；

`asyncData`: 当每一个页面渲染前触发，可用于页面请求数据，将获得的数据作为返回值即会合并到component.data中，用于组件渲染；

`fetch`: 当每一个页面渲染前触发，可用于页面请求数据，一般用于将获得数据存储到前端内存数据管理的store中；

但只看官网原图很难明确看出哪些hooks在哪一侧（服务端or客户端？）运行。

经过我的整理流程如下：

```
graph LR
&&- -->服务端运行
$$- -->客户端运行
&$- -->服务端和客户端都运行

```

```
graph TB
nuxtServerInit(&&-nuxtServerInit)-->RouteMiddleware
RouteMiddleware(&$-route middleware)-->validate

validate(&&-validate)-->asyncData

asyncData(&$-asyncData)-->beforeCreated/created

beforeCreated/created(&$-beforeCreated/created)-->&&-fetch

&&-fetch-->beforedMounted/mounted

beforedMounted/mounted($$-beforedMounted/mounted)-->$$-fetch

$$-fetch($$-fetch)-->other_vue_hooks($$-其他vue hooks)
```

**关于fetch的特别说明：**

该图中出现的两个fetch都是同一个hook，只是因为在服务端调用和在客户端调用的时机不同，所以出现在两个位置。

### 二. lifecycle hooks的调用时机

上面整理了lifecycle hooks的调用顺序，但是调用时机却不一定按照顺序来，因为还要考虑hooks触发的时机。

hooks触发的时机一般有三种：
1. 页面首次加载；
2. 路由跳转已加载页面；
3. 事件触发数据更新；

第3事件触发数据更新调用的hook为vue lifecycle的`updated`, 并无特殊之处，在此不做讨论，这里重点看1和2；

以下为不同时机打印log查看触发的hooks：

##### 页面首次渲染

```js
// server
asyncData
beforeCreate
created
fetch

// client
beforeCreate
created
```

##### 路由跳转已加载页面
```js
// server
// 无

// client
asyncData
beforeCreate
created
fetch
```
由此可见，当路由跳转到已加载过的页面时，服务端是不工作的，请求数据和渲染的活还是前端完成。

### 三. NuxtJs的SSR工作机制
不同调用时机，工作机制有所不同

在**页面首次加载**和**路由跳转已加载页面**这两种时机，NuxtJS的工作机制并不相同，当：
- **页面首次加载** 时，服务器会预渲染页面并返回给前端，是标准的SSR工作模式；
- **路由跳转已加载页面**时，页面不会重新加载，而是与vue应用相同，执行对应的hook获取数据在前端更新应用，是SPA的工作模式；

**总结一下**

NuxtJs并不会在所有的页面加载时，都使用SSR的方式在服务端预加载，对于已加载过的页面，它充分利用了vue-router实现spa的优势，使页面保持spa的局部更新应用的优势，保证渲染成本更低。


---
## 参考文章：
- [NuxtJs官网](https://zh.nuxtjs.org/)
- [Going Full Static](https://zh.nuxtjs.org/blog/going-full-static/)
- [NuxtJS render mode](https://recurse.me/posts/choosing-a-nuxt-mode.html)
