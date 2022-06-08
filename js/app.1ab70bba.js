(function(){"use strict";var t={39:function(t,e,n){n.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"avatar-container",style:{width:t.size+"px",height:t.size+"px"},attrs:{src:t.url}})},o=[],s={props:{url:{type:String,required:!0},size:{type:Number,default:150}}},i=s,c=n(1),r=(0,c.Z)(i,a,o,!1,null,"149cf706",null),l=r.exports},896:function(t,e,n){n.d(e,{Z:function(){return p}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"iconfont icon-container",class:t.fontClass})},o=[];const s={home:"iconzhuye",success:"iconzhengque",error:"iconcuowu",close:"iconguanbi",warn:"iconjinggao",info:"iconxinxi",blog:"iconblog",code:"iconcode",about:"iconset_about_hov",weixin:"iconweixin",mail:"iconemail",github:"icongithub",qq:"iconsign_qq",arrowUp:"iconiconfonticonfonti2copy",arrowDown:"iconiconfonticonfonti2",empty:"iconempty",chat:"iconliuyan"};Object.keys(s);var i={props:{type:{type:String,required:!0}},computed:{fontClass(){return s[this.type]}}},c=i,r=n(1),l=(0,r.Z)(c,a,o,!1,null,"2cacee20",null),p=l.exports},494:function(t,e,n){n.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-container"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"main"},[t._t("default")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},o=[],s={},i=s,c=n(1),r=(0,c.Z)(i,a,o,!1,null,"474abcd6",null),l=r.exports},110:function(t,e,n){n.d(e,{E:function(){return o}});var a=n(908);async function o(){return await a.Z.get("/api/banner")}},908:function(t,e,n){n.d(e,{Z:function(){return c}});var a=axios,o=n.n(a),s=n(33);const i=o().create();i.interceptors.response.use((function(t){return 0!==t.data.code?((0,s.Z)({content:t.data.msg,type:"error",duration:1500}),null):t.data.data}));var c=i},201:function(t,e,n){var a=n(623),o=n.n(a);o().mock("/api/banner","get",{code:0,msg:"",data:[{id:"1",midImg:"http://mdrs.yuanjin.tech/img/20201031141507.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031141350.jpg",title:"凛冬将至",description:"人唯有恐惧的时候方能勇敢"},{id:"2",midImg:"http://mdrs.yuanjin.tech/img/20201031205550.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031205551.jpg",title:"血火同源",description:"如果我回头，一切都完了"},{id:"3",midImg:"http://mdrs.yuanjin.tech/img/20201031204401.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031204403.jpg",title:"听我怒吼",description:"兰尼斯特有债必偿"}]});var s=n(673);o().mock("/api/blogtype","get",{code:0,msg:"","data|10-20":[{"id|+1":1,name:"分类@id","articleCount|0-300":0,"order|+1":1}]}),o().mock(/^\/api\/blog(\?.+)?$/,"get",(function(t){const e=s.parse(t.url);return o().mock({code:0,msg:"",data:{"total|2000-3000":0,[`rows|${e.limit||10}`]:[{id:"@guid",title:"@ctitle(1, 50)",description:"@cparagraph(1, 10)",category:{"id|1-10":0,name:"分类@id"},"scanNumber|0-3000":0,"commentNumber|0-300":30,"thumb|1":["@image(300x250, @color, #fff, @natural)"],createDate:"@date('T')"}]}})})),o().mock(/^\/api\/blog\/[^/]+$/,"get",{code:0,msg:"",data:{id:"@guid",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},description:"@cparagraph(1, 10)","scanNumber|0-10000":0,"commentNumber|0-100":0,createDate:"@date('T')",toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份凭证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],"thumb|1":[o().Random.image("300x250","#000","#fff","Random Image"),null],htmlContent:'<blockquote>\n  <p>阅读本文，你需要首先知道：</p><ol>\n  <li>浏览器的同源策略</li>\n  <li>跨域问题</li>\n  <li>JSONP原理</li>\n  <li>cookie原理</li>\n  </ol>\n  </blockquote>\n  <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n  <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n  <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n  </ol>\n  <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" title="image-20200421152122793" alt="image-20200421152122793">\n        <figcaption>image-20200421152122793</figcaption>\n    \n      </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n  <li><strong>简单请求</strong></li>\n  <li><strong>需要预检的请求</strong></li>\n  <li><strong>附带身份凭证的请求</strong></li>\n  </ul>\n  <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n  <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n  <li>get</li>\n  <li>post</li>\n  <li>head</li>\n  </ul>\n  </li>\n  <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n  <li><code>Accept</code></li>\n  <li><code>Accept-Language</code></li>\n  <li><code>Content-Language</code></li>\n  <li><code>Content-Type</code></li>\n  <li><code>DPR</code></li>\n  <li><code>Downlink</code></li>\n  <li><code>Save-Data</code></li>\n  <li><code>Viewport-Width</code></li>\n  <li><code>Width</code></li>\n  </ul>\n  </li>\n  <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n  <li><code>text/plain</code></li>\n  <li><code>multipart/form-data</code></li>\n  <li><code>application/x-www-form-urlencoded</code></li>\n  </ul>\n  </li>\n  </ol>\n  <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n  \n  <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n  })\n  \n  <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">headers</span>:{\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n    }\n  })\n  \n  <span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n  })\n  \n  <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n    <span class="hljs-attr">headers</span>: {\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    }\n  })</code></pre>\n  <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n  <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n  <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n  <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n  </ol>\n  <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n  <li>*：表示我很开放，什么人我都允许访问</li>\n  <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n  </ul>\n  <blockquote>\n  <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n  <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n        <figcaption>image-20200421162846480</figcaption>\n    \n      </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  <li><strong>服务器允许</strong></li>\n  <li><strong>浏览器发送真实请求</strong></li>\n  <li><strong>服务器完成真实的响应</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n    <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    },\n    <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"袁小进"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n  });</code></pre>\n  <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  </ol>\n  <pre><code>OPTIONS /api/user HTTP/1.1\n  Host: crossdomain.com\n  ...\n  Origin: http://my.com\n  Access-Control-Request-Method: POST\n  Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n  <li>请求方法为<code>OPTIONS</code></li>\n  <li>没有请求体</li>\n  <li>请求头中包含<ul>\n  <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n  <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n  <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n  </ul>\n  </li>\n  </ul>\n  <ol start="2">\n  <li><strong>服务器允许</strong></li>\n  </ol>\n  <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  Access-Control-Allow-Methods: POST\n  Access-Control-Allow-Headers: a, b, content-type\n  Access-Control-Max-Age: 86400\n  ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n  <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n  <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n  <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n  <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n  </ul>\n  <ol start="3">\n  <li><strong>浏览器发送真实请求</strong></li>\n  </ol>\n  <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com\n  \n  {"name": "袁小进", "age": 18 }</code></pre><ol start="4">\n  <li><strong>服务器响应真实请求</strong></li>\n  </ol>\n  <pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n        <figcaption>image-20200421165913320</figcaption>\n    \n      </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n  <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n  xhr.withCredentials = <span class="hljs-literal">true</span>;\n  \n  <span class="hljs-comment">// fetch api</span>\n  fetch(url, {\n    <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n  })</code></pre>\n  <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h1 id="article-md-title-7">一个额外的补充</h1><p>在跨域访问时，JS只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>这样JS就能够访问指定的响应头了。</p>'}}),o().mock("/api/comment","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),o().mock(/^\/api\/comment\/?(\?.+)?$/,"get",(function(t){const e=s.parse(t.url);return o().mock({code:0,msg:"",data:{total:52,[`rows|${e.limit||10}`]:[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}]}})})),o().mock("/api/setting","get",{code:0,msg:"",data:{avatar:"https://tse1-mm.cn.bing.net/th/id/OIP-C.I2wq4dZs4CC4ryyU6ZeHOQHaHI?w=218&h=210&c=7&r=0&o=5&pid=1.7",siteTitle:"我的个人空间",github:"https://github.com/DuYi-Edu",qq:"3263023350",qqQrCode:"https://tse1-mm.cn.bing.net/th/id/OIP-C.I2wq4dZs4CC4ryyU6ZeHOQHaHI?w=218&h=210&c=7&r=0&o=5&pid=1.7",weixin:"yh777bao",weixinQrCode:"https://tse1-mm.cn.bing.net/th/id/OIP-C.I2wq4dZs4CC4ryyU6ZeHOQHaHI?w=218&h=210&c=7&r=0&o=5&pid=1.7",mail:"duyi@gmail.com",icp:"黑ICP备17001719号",githubName:"DuYi-Edu",favicon:"http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f"}}),o().mock("/api/about","get",{code:0,msg:"",data:"https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_8925721629011485641%22%7D&n_type=-1&p_from=-1"}),o().mock(/^\/api\/project\/?$/,"get",{code:0,msg:"","data|10-20":[{id:"@guid",name:"@ctitle(1,10)","url|1":["@url",null],"github|1":["@url",null],"description|1-4":["@cparagraph(1,5)"],thumb:"@image(300x250,@color,#fff,@csentence)",order:1}]}),o().mock("/api/message","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1,10)",createDate:Date.now(),"avatar|1":["https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img1.baidu.com/it/u=3363858394,2140002617&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img1.baidu.com/it/u=4126345688,2740482511&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400","https://img1.baidu.com/it/u=289475012,3923945794&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"]}}),o().mock(/^\/api\/message\/?(\?.+)?$/,"get",(function(t){const e=s.parse(t.url);return o().mock({code:0,msg:"",data:{total:52,[`rows|${e.limit||10}`]:[{id:"@guid",nickname:"@cname",content:"@cparagraph(1,10)",createDate:Date.now(),"avatar|1":["https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img1.baidu.com/it/u=3363858394,2140002617&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","https://img1.baidu.com/it/u=4126345688,2740482511&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400","https://img1.baidu.com/it/u=289475012,3923945794&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"]}]}})})),o().setup({timeout:"1000-2000"});var i=n(311),c=n.n(i),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("Layout",{scopedSlots:t._u([{key:"left",fn:function(){return[n("div",{staticClass:"aside"},[n("SiteAside")],1)]},proxy:!0},{key:"default",fn:function(){return[n("RouterView")]},proxy:!0}])}),n("ToTop")],1)},l=[],p=n(494),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-aside-container"},[t.data?[n("Avatar",{attrs:{url:t.data.avatar}}),n("h1",{staticClass:"title"},[t._v(t._s(t.data.siteTitle))])]:t._e(),n("Menu"),t.data?n("Contact"):t._e(),t.data?n("p",{staticClass:"footer"},[t._v(t._s(t.data.icp))]):t._e()],2)},m=[],u=n(39),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"menu-container"},t._l(t.items,(function(e){return n("RouterLink",{key:e.link,attrs:{exact:e.exact,to:{name:e.name},"active-class":"selected","exact-active-class":""}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:e.icon}})],1),n("span",[t._v(t._s(e.title))])])})),1)},h=[],f=n(896),v={components:{Icon:f.Z},data(){return{items:[{name:"Home",title:"首页",icon:"home",exact:!0},{name:"Blog",title:"文章",icon:"blog",exact:!1},{name:"About",title:"关于我",icon:"about",exact:!0},{name:"Project",title:"项目&效果",icon:"code",exact:!0},{name:"Message",title:"留言板",icon:"chat",exact:!0}]}}},y=v,b=n(1),w=(0,b.Z)(y,g,h,!1,null,"2c896c50",null),C=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"contact-container"},[n("li",[n("a",{attrs:{target:"_blank",href:t.data.github}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"github"}})],1),n("span",[t._v(t._s(t.data.githubName))])])]),n("li",[n("a",{attrs:{href:"mailto:"+t.data.mail}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"mail"}})],1),n("span",[t._v(t._s(t.data.mail))])])]),n("li",[n("a",{attrs:{href:"tencent://message/?Menu=yes&uin="+t.data.qq+"&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"qq"}})],1),n("span",[t._v(t._s(t.data.qq))])]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:t.data.qqQrCode,alt:""}})])]),n("li",[n("a",[n("div",{staticClass:"icon weixin"},[n("Icon",{attrs:{type:"weixin"}})],1),n("span",[t._v(t._s(t.data.weixin))])]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:t.data.weixinQrCode,alt:""}})])])])},S=[],x=n(294),k={components:{Icon:f.Z},computed:{...(0,x.mapState)("setting",["data"])}},O=k,A=(0,b.Z)(O,j,S,!1,null,"35602614",null),T=A.exports,_={components:{Avatar:u.Z,Menu:C,Contact:T},computed:{...(0,x.mapState)("setting",["data"])}},q=_,E=(0,b.Z)(q,d,m,!1,null,"5c90e559",null),P=E.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"to-top-container",on:{click:t.handleClick}},[t._v("Top")])},$=[],H={data(){return{show:!1}},created(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed(){this.$bus.$off("mainScroll",this.handleScroll)},methods:{handleScroll(t){this.show=!!t&&t.scrollTop>=500},handleClick(){this.$bus.$emit("setMainScroll",0)}}},D=H,Z=(0,b.Z)(D,L,$,!1,null,"8970f7ec",null),R=Z.exports,I={name:"App",components:{Layout:p.Z,SiteAside:P,ToTop:R}},M=I,z=(0,b.Z)(M,r,l,!1,null,"cf36ec96",null),N=z.exports,J=VueRouter,B=n.n(J),G=n(865);(0,G.configure)({showSpinner:!1});var X=[{name:"Home",path:"/",component:pageCompResolver((()=>n.e(268).then(n.bind(n,467)))),meta:{title:"首页"}},{name:"About",path:"/about",component:pageCompResolver((()=>n.e(74).then(n.bind(n,760)))),meta:{title:"关于我"}},{name:"Blog",path:"/article",component:pageCompResolver((()=>n.e(397).then(n.bind(n,268)))),meta:{title:"文章"}},{name:"CategoryBlog",path:"/article/cate/:categoryId",component:pageCompResolver((()=>n.e(397).then(n.bind(n,268)))),meta:{title:"文章"}},{name:"BlogDetail",path:"/article/:id",component:pageCompResolver((()=>n.e(283).then(n.bind(n,758)))),meta:{title:"文章详情"}},{name:"Project",path:"/project",component:pageCompResolver((()=>n.e(962).then(n.bind(n,768)))),meta:{title:"项目&效果"}},{name:"Message",path:"/message",component:pageCompResolver((()=>n.e(997).then(n.bind(n,179)))),meta:{title:"留言板"}}],F=n(342);window.VueRouter||c().use(B());const Y=new(B())({routes:X,mode:"history"});Y.afterEach(((t,e)=>{F.YZ.setRouteTitle(t.meta.title)}));var Q=Y,K=n(33);const U=new(c())({});c().prototype.$bus=U;var V=U,W=n(110),tt={namespaced:!0,state:{isLoading:!1,data:[]},mutations:{setLoading(t,e){t.isLoading=e},setData(t,e){t.data=e}},actions:{async fetchBanner(t){if(t.state.data.length)return;t.commit("setLoading",!0);const e=await(0,W.E)();t.commit("setData",e),t.commit("setLoading",!1)}}},et=n(908);async function nt(){return await et.Z.get("/api/setting")}var at={namespaced:!0,state:{isLoading:!1,data:null},mutations:{setLoading(t,e){t.isLoading=e},setData(t,e){t.data=e}},actions:{async fetchSetting(t){t.commit("setLoading",!0);const e=await nt();if(t.commit("setData",e),t.commit("setLoading",!1),e.favicon){let t=document.querySelector("link[rel='shortcut icon']");if(t)return;t=document.createElement("link"),t.rel="shortcut icon",t.type="images/x-icon",t.href=e.favicon,document.querySelector("head").appendChild(t)}e.siteTitle&&F.YZ.setSiteTitle(e.siteTitle)}}};async function ot(){return await et.Z.get("/api/about")}var st={namespaced:!0,state:{isLoading:!1,data:""},mutations:{setLoading(t,e){t.isLoading=e},setData(t,e){t.data=e}},actions:{async fetchBanner(t){if(t.state.data)return;t.commit("setLoading",!0);const e=await ot();t.commit("setData",e),t.commit("setLoading",!1)}}};async function it(){return await et.Z.get("/api/project")}var ct={namespaced:!0,state:{isLoading:!1,data:[]},mutations:{setLoading(t,e){t.isLoading=e},setData(t,e){t.data=e}},actions:{async fetchProject(t){if(t.state.data.length)return;t.commit("setLoading",!0);const e=await it();t.commit("setData",e),t.commit("setLoading",!1)}}};window.Vuex||(0,x.install)(c());var rt=new x.Store({modules:{banner:tt,setting:at,about:st,project:ct},strict:!0}),lt=n.p+"img/loading.89007415.svg",pt={loading:"n6c054pmEgLPauvpFm9c"};function dt(t){return t.querySelector("img[data-role=loading]")}function mt(){const t=document.createElement("img");return t.dataset.role="loading",t.src=lt,t.className=pt.loading,t}function ut(t,e){const n=dt(t);if(e.value){if(!n){const e=mt();t.appendChild(e)}}else n&&n.remove()}var gt=n.p+"img/default.47d8fd98.gif";let ht=[];function ft(t){t.dom.src=gt;const e=document.documentElement.clientHeight,n=t.dom.getBoundingClientRect(),a=n.height||150;n.top>=-a&&n.top<=e&&(t.dom.src=t.src,ht=ht.filter((e=>e!==t)))}function vt(){for(const t of ht)ft(t)}function yt(){vt()}V.$on("mainScroll",(0,F.Ds)(yt,50));var bt={inserted(t,e){const n={dom:t,src:e.value};ht.push(n),ft(n)},unbind(t){ht=ht.filter((e=>e.dom!==t))}};c().prototype.$showMessage=K.Z,rt.dispatch("setting/fetchSetting"),c().directive("loading",ut),c().directive("lazy",bt),new(c())({router:Q,store:rt,render:t=>t(N)}).$mount("#app")},938:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(311),o=n.n(a);function s(t,e){const n=new(o())({render:n=>n(t,{props:e})});return n.$mount(),n.$el}},342:function(t,e,n){n.d(e,{Ds:function(){return o},p6:function(){return a},YZ:function(){return l}});n(33),n(938);function a(t,e=!1){const n=new Date(+t),a=(n.getMonth()+1).toString().padStart(2,"0"),o=n.getDate().toString().padStart(2,"0");let s=`${n.getFullYear()}-${a}-${o}`;if(e){const t=n.getHours().toString().padStart(2,"0"),e=n.getMinutes().toString().padStart(2,"0"),a=n.getSeconds().toString().padStart(2,"0");s+=` ${t}:${e}:${a}`}return s}function o(t,e=100){let n=null;return(...a)=>{clearTimeout(n),n=setTimeout((()=>{t(...a)}),e)}}let s="",i="",c=document.querySelector("title");function r(){c.innerHTML=s||i?s&&!i?s:!s&&i?i:`${s}-${i}`:"加载中..."}var l={setRouteTitle(t){s=t,r()},setSiteTitle(t){i=t,r()}}},33:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(938),o=n(896),s={message:"XOOPYKLvD3EfQX2qE0tA","message-info":"zifhHhxKEwgnK6nn5odJ","message-success":"Jfp8h1aBgEsFuoXE8GWv","message-warn":"W0WS8szXSsWlgOtZSSUG","message-error":"sJruJA5sXsc4XJuiuFS3",icon:"Ad4FbhtvCIrncRzYNqsH"};function i(t={}){const e=t.content||"",n=t.type||"info",i=t.duration||2e3,c=t.container||document.body,r=document.createElement("div"),l=(0,a.Z)(o.Z,{type:n});r.innerHTML=`<span class="${s.icon}">${l.outerHTML}</span><div>${e}</div>`;const p=s[`message-${n}`];r.className=`${s.message} ${p}`,t.container&&"static"===getComputedStyle(c).position&&(c.style.position="relative"),c.appendChild(r),r.clientHeight,r.style.opacity=1,r.style.transform="translate(-50%, -50%)",setTimeout((()=>{r.style.opacity=0,r.style.transform="translate(-50%, -50%) translateY(-25px)",r.addEventListener("transitionend",(function(){r.remove(),t.callback&&t.callback()}),{once:!0})}),i)}},311:function(t){t.exports=Vue},294:function(t){t.exports=Vuex}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,s){if(!a){var i=1/0;for(p=0;p<t.length;p++){a=t[p][0],o=t[p][1],s=t[p][2];for(var c=!0,r=0;r<a.length;r++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[r])}))?a.splice(r--,1):(c=!1,s<i&&(i=s));if(c){t.splice(p--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[a,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{74:"About",268:"Home",283:"BlogDetail",397:"Blog",962:"Project",997:"Message"}[t]+"."+{74:"8dce50ba",268:"73e46215",283:"0abe4ed0",397:"1ce1d25c",962:"b2d7e13c",997:"4040b1ae"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+{74:"About",268:"Home",283:"BlogDetail",397:"Blog",962:"Project",997:"Message"}[t]+"."+{74:"68a7e24e",268:"6a925dcb",283:"8d7604f5",397:"4dd9b578",962:"f7515f30",997:"f8ebca53"}[t]+".css"}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="my-sute2:";n.l=function(a,o,s,i){if(t[a])t[a].push(o);else{var c,r;if(void 0!==s)for(var l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var d=l[p];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+s){c=d;break}}c||(r=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+s),c.src=a),t[a]=[o];var m=function(e,n){c.onerror=c.onload=null,clearTimeout(u);var o=t[a];if(delete t[a],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),r&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(s){if(o.onerror=o.onload=null,"load"===s.type)n();else{var i=s&&("load"===s.type?"missing":s.type),c=s&&s.target&&s.target.href||e,r=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=i,r.request=c,o.parentNode.removeChild(o),a(r)}};return o.onerror=o.onload=s,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],s=o.getAttribute("data-href");if(s===t||s===e)return o}},a=function(a){return new Promise((function(o,s){var i=n.miniCssF(a),c=n.p+i;if(e(i,c))return o();t(a,c,o,s)}))},o={143:0};n.f.miniCss=function(t,e){var n={74:1,268:1,283:1,397:1,962:1,997:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise((function(n,a){o=t[e]=[n,a]}));a.push(o[2]=s);var i=n.p+n.u(e),c=new Error,r=function(a){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,o[1](c)}};n.l(i,r,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,i=a[0],c=a[1],r=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(r)var p=r(n)}for(e&&e(a);l<i.length;l++)s=i[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(p)},a=self["webpackChunkmy_sute2"]=self["webpackChunkmy_sute2"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(201)}));a=n.O(a)})();
//# sourceMappingURL=app.1ab70bba.js.map