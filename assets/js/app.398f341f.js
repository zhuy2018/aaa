(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0051":function(t,e,n){"use strict";var r=n("6dbb"),a=n.n(r);e["default"]=a.a},"076e":function(t,e,n){"use strict";var r=n("e959"),a=n("0051"),s=n("17cc"),i=Object(s["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},"0a62":function(t,e,n){t.exports=n.p+"assets/img/lb_img3.c3745954.jpg"},"0ab0":function(t,e,n){"use strict";var r=n("1e3c"),a=n("f837"),s=(n("1db6"),n("17cc")),i=Object(s["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},"110e":function(t,e,n){t.exports=n.p+"assets/img/index_img.d62a10fa.jpg"},1780:function(t,e,n){},"1db6":function(t,e,n){"use strict";var r=n("243a"),a=n.n(r);a.a},"1e3c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand_promotion_left"},[n("h2",[t._v("Products")]),n("router-link",{attrs:{to:{name:"Product"},exact:"",tag:"a"}},[t._v("\n        薯条类\n    ")]),n("router-link",{attrs:{to:{name:"Snack1"},tag:"a"}},[t._v("\n        精品小食\n    ")]),n("router-link",{attrs:{to:{name:"Snack2"},tag:"a"}},[t._v("\n        各式茶点\n    ")]),n("p",{staticClass:"contact"},[t._v("联系我们")]),t._m(0),t._m(1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",[n("dt",[t._v("联系电话")]),n("dd",{staticClass:"phone"},[t._v("010-7755820")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",[n("dt",[t._v("联系地址")]),n("dd",[t._v("北京市宣武区鼓楼大街")])])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"243a":function(t,e,n){},"263d":function(t,e,n){t.exports=n.p+"assets/img/timg.c687e3d0.gif"},"2e9f":function(t,e,n){"use strict";var r=n("44ff"),a=n.n(r);a.a},"2ef0":function(t,e,n){t.exports=n.p+"assets/img/lb_img.1097027a.jpg"},"3f69":function(t,e,n){t.exports=n.p+"assets/img/lb_img1.57e2e3b9.jpg"},"44ff":function(t,e,n){},"4e76":function(t,e,n){t.exports=n.p+"assets/img/store5.f2eea8f4.jpg"},"4eda":function(t,e,n){t.exports=n.p+"assets/img/store4.53479f7c.jpg"},5290:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("6e6d"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",{staticStyle:{height:"200px"}},[n("Header")],1),n("el-main",{staticStyle:{overflow:"initial"}},[n("router-view")],1),n("el-footer",{staticStyle:{height:"auto","line-height":"48px"}},[n("Footer")],1)],1)},o=[],c=n("71c2"),l=n("076e"),u={name:"HelloWorld",props:{},components:{Header:c["default"],Footer:l["default"]}},d=u,f=(n("9b2d"),n("17cc")),m=Object(f["a"])(d,i,o,!1,null,"c6967bb2",null),p=m.exports,g={name:"app",components:{HelloWorld:p},watch:{$route(t,e){let n=this.$route.path.substring(1);"product/"==n||"product"==n?this.$store.commit("add","产品展示 > 薯条类"):"product/snack1"==n?this.$store.commit("add","产品展示 > 精品小食"):"product/snack2"==n?this.$store.commit("add","产品展示 > 各式茶点"):"brane"==n?this.$store.commit("add","品牌推介"):"display"==n?this.$store.commit("add","店面展示"):"tojoin"==n?this.$store.commit("add","招商加盟"):"news"==n&&this.$store.commit("add","新闻动态")}}},_=g,v=Object(f["a"])(_,a,s,!1,null,null,null),h=v.exports,b=n("081a"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"index_content1"},[n("el-carousel",{attrs:{interval:0,autoplay:"",trigger:"click",arrow:"never",type:"always",height:"508px"}},t._l(t.listArr,function(e,r){return n("el-carousel-item",{key:r},[n("img",{attrs:{src:e.src?e.src:t.srcImg}})])}),1)],1),n("div",{staticClass:"bottom_img"},[n("div",{staticClass:"bottom_img_co"},t._l(t.listArr,function(e,r){return n("dl",{key:r},[n("dt",[n("img",{attrs:{src:e.src}})]),n("dd",[t._v(t._s(e.name))])])}),0)])])},j=[],y={name:"Index",data(){return{srcImg:n("263d"),listArr:[{name:"薯条类",src:n("110e")},{name:"保健茶品",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552972985244&di=c78c09683544d1cd7211e46f188a39a0&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D2453617070%2C4076740019%26fm%3D214%26gp%3D0.jpg"},{name:"精品小食",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552973048705&di=5650ae5e93deebc70109d1a3900b9990&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Ffb6594acb440c0bd85c17e3497eec64e36989cf4.jpg"},{name:"韩式拿铁",src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1395781888,3992841050&fm=26&gp=0.jpg"},{name:"冰品茶类",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552973103532&di=5f21137e72c7e3feb64818b15e397c4d&imgtype=0&src=http%3A%2F%2Fbbs.jbear.net%2Fcfs-file.ashx%2F__key%2FCommunityServer.Blogs.Components.WeblogFiles%2Fblack%2F0447.IMG_5F00_6679.JPG"}]}}},C=y,k=(n("b663"),Object(f["a"])(C,x,j,!1,null,"5f83550e",null)),w=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand_promotion"},[n("leftBar"),n("div",{staticClass:"brand_promotion_right"},[n("labelNavi"),n("div",{staticClass:"brand_promotion_right_co"},[n("img",{attrs:{src:t.imgSrc}}),t._l(t.text,function(e,r){return n("p",{key:r},[t._v(t._s(e))])})],2)],1)],1)},S=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("\n    当前所在位置 > "),n("span",[t._v(t._s(t.count))])])},O=[],F={computed:{count(){return this.$store.state.connt}}},H=F,E=Object(f["a"])(H,I,O,!1,null,null,null),M=E.exports,P=n("0ab0"),B={data(){return{text:["有质感的品味这个世界？视听见、嗅所闻、听听听，认所知，就从一杯一盏的触摸开始。","你爱忧郁？仰望天空吧。举起杯，细细品，温润里尽是真诚的人生。","你爱安静？洗尽双手，找个雅致的亭，为自己的风景斟杯柔和的伙伴。","你爱新鲜？铺开生活的纸，点上风霜洗礼的味道，然后关顾这满是营养的全新叙事。","你爱自己？寻个精致的空间，每天送它一个惊喜。","十年守候，二十年坚持。一杯杯香甜，是你的故事。","随心所欲，随影随行。一口口香浓，是你的故事。","ONE CUP，就这么简单？就这么不简单。","一个30秒的幸福，我们用了近二十年的时间酝酿、创作、发表。","接下来，交给你。"],imgSrc:n("576b")}},components:{leftBar:P["default"],labelNavi:M},methods:{route(){}}},N=B,L=Object(f["a"])(N,$,S,!1,null,null,null),D=L.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand_promotion"},[n("leftBar"),n("div",{staticClass:"brand_promotion_right"},[n("labelNavi"),n("router-view")],1)],1)},W=[],z=n("52c1"),T={data(){return{}},computed:{count(){return this.$store.state.connt}},components:{leftBar:P["default"],labelNavi:M}},U=T,q=Object(f["a"])(U,A,W,!1,null,"1d5bbce3",null),G=q.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand_promotion"},[n("leftBar"),n("div",{staticClass:"brand_promotion_right"},[n("labelNavi"),n("div",{staticClass:"store_display_right_co"},[n("el-carousel",{attrs:{interval:0,autoplay:"",trigger:"click",type:"always",height:"436px"}},t._l(t.listImg,function(t,e){return n("el-carousel-item",{key:e,staticClass:"index_content"},[n("img",{attrs:{src:t.src}})])}),1)],1)],1)],1)},Y=[],R={data(){return{listImg:[{src:n("f85f")},{src:n("61ab")},{src:n("6e81")},{src:n("4eda")},{src:n("4e76")}]}},components:{leftBar:P["default"],labelNavi:M}},V=R,K=(n("dd4b"),Object(f["a"])(V,J,Y,!1,null,null,null)),Q=K.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand_promotion"},[n("leftBar"),n("div",{staticClass:"brand_promotion_right"},[n("labelNavi"),n("div",{staticClass:"to_join_right_co"},[n("img",{attrs:{src:t.imgSrc}}),n("h3",[t._v("加盟须知：")]),t._l(t.text,function(e,r){return n("p",{key:r},[t._v(t._s(e))])})],2)],1)],1)},Z=[],tt={data(){return{text:["颠覆了传统西式快餐产品种类过于单一，并且高油高脂的弊端，主打的是营养搭配均衡，健康养生的经营理念。","在传统餐品基础上增加了双层芝士牛肉帕尼尼，黑椒牛排意面，水果皮萨，台式波霸奶茶，乌龙玛奇朵，独创五彩汉堡及儿童专属迷你汉堡等等。","产品成本低，利润空间高，平民化的消费路线","10-13元钱即可购买一个套餐，会员日10元三个汉堡，主打的就是量大经济又实惠，完全可以一店顶多店，复合式经营！！","目前伽士德炸鸡汉堡处于一期招商阶段，全国各省份签约合作商全部以VIP样板店的形式全程跟踪式导入32项VIP服务，从选址，带店指导，营销策划，品牌的拓展，推广，产品更新等，提供一站式服务。","公司总部在南昌，北京，广州，西安，南京等多地都设立分公司","欢迎加入我们的团队。","联系电话:010-7755820  联系地址:北京市宣武区鼓楼大街"],imgSrc:n("d1e5")}},components:{leftBar:P["default"],labelNavi:M},methods:{route(){}}},et=tt,nt=Object(f["a"])(et,X,Z,!1,null,null,null),rt=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand_promotion"},[n("leftBar"),n("div",{staticClass:"brand_promotion_right"},[n("labelNavi"),n("div",{staticClass:"news_right_co"},[t._l(t.json,function(e,r){return n("dl",{key:r},[n("dt",[n("img",{attrs:{src:e.imgUrl?e.imgUrl:t.srcImg}})]),n("dd",{staticClass:"one"},[n("router-link",{attrs:{to:{path:"/news/"+e.id}}},[t._v(t._s(e.title))]),e.time?n("span",[t._v(t._s(t._f("time")(e.time)))]):t._e()],1),n("dd",[t._v(t._s(e.title1))])])}),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":5,total:t.list}})],2)],1)],1)},st=[],it=n("7f43"),ot=n.n(it),ct={data(){return{json:[],list:0,sHour:"",srcImg:n("263d")}},filters:{time:function(t){var e=new Date(parseInt(t));return e.getFullYear()+"-"+(e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1))+"-"+(e.getDate()>9?e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds():"0"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds())}},methods:{getHomeInfo(){ot.a.get("/api/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc(t){t=t.data.data.swiperList,this.json=t,this.list=t.length}},mounted(){this.getHomeInfo()},components:{leftBar:P["default"],labelNavi:M}},lt=ct,ut=(n("2e9f"),Object(f["a"])(lt,at,st,!1,null,"0231553c",null)),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand_promotion"},[n("leftBar"),n("div",{staticClass:"brand_promotion_right"},[n("labelNavi"),t._l(t.swiperList,function(e,r){return n("div",{key:r,staticClass:"news_list_right_co"},[n("h4",[t._v(t._s(e.title)+"\n                    "),e.time?n("span",[t._v("\n                        "+t._s(t._f("time")(e.time))+"\n                    ")]):t._e()]),n("img",{attrs:{src:e.imgUrl}}),n("div",{staticStyle:{width:"94%",margin:"0 auto"},domProps:{innerHTML:t._s(e.test)}})])})],2)],1)},mt=[],pt={data(){return{userId:"",swiperList:[]}},filters:{time:function(t){var e=new Date(parseInt(t));return e.getFullYear()+"-"+(e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1))+"-"+(e.getDate()>9?e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds():"0"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds())}},methods:{getHomeInfo(){ot.a.get("/api/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc(t){t=t.data.data.swiperList,this.userId=this.$route.params.userId,this.swiperList=t.filter(t=>t.id==this.userId)}},mounted(){this.getHomeInfo()},components:{leftBar:P["default"],labelNavi:M}},gt=pt,_t=(n("ce0f"),Object(f["a"])(gt,ft,mt,!1,null,"757d2a1a",null)),vt=_t.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product_display_right_co"},t._l(t.arrList,function(e,r){return n("dl",[n("dt",[n("div",[n("img",{attrs:{src:e.src}})])]),n("dd",[t._v(t._s(e.name))])])}),0)},bt=[],xt={data(){return{arrList:[{name:"薯条",src:n("f30d")},{name:"薯条",src:n("f30d")},{name:"薯条",src:n("f30d")},{name:"薯条",src:n("f30d")},{name:"薯条",src:n("f30d")},{name:"薯条",src:n("f30d")},{name:"薯条",src:n("f30d")},{name:"薯条",src:n("f30d")}]}},methods:{}},jt=xt,yt=(n("8324"),Object(f["a"])(jt,ht,bt,!1,null,"78342962",null)),Ct=yt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product_display_right_co"},t._l(t.arrList,function(e,r){return n("dl",[n("dt",[n("div",[n("img",{attrs:{src:e.src}})])]),n("dd",[t._v(t._s(e.name))])])}),0)},wt=[],$t={data(){return{arrList:[{name:"精品小食",src:n("2ef0")},{name:"精品小食",src:n("756e")},{name:"精品小食",src:n("2ef0")},{name:"精品小食",src:n("756e")},{name:"精品小食",src:n("2ef0")},{name:"精品小食",src:n("756e")}]}},methods:{}},St=$t,It=(n("788c"),Object(f["a"])(St,kt,wt,!1,null,"391c749f",null)),Ot=It.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product_display_right_co"},t._l(t.arrList,function(e,r){return n("dl",[n("dt",[n("div",[n("img",{attrs:{src:e.src}})])]),n("dd",[t._v(t._s(e.name))])])}),0)},Ht=[],Et={data(){return{arrList:[{name:"茶点",src:n("3f69")},{name:"拿铁",src:n("0a62")},{name:"拿铁",src:n("0a62")},{name:"饮料",src:n("ef3a")},{name:"茶点",src:n("3f69")},{name:"拿铁",src:n("0a62")},{name:"饮料",src:n("ef3a")}]}},methods:{}},Mt=Et,Pt=(n("7bf9"),Object(f["a"])(Mt,Ft,Ht,!1,null,"5b198784",null)),Bt=Pt.exports;r["default"].use(b["a"]);const Nt=[{path:"/",component:w},{path:"/brane",component:D},{path:"/product",component:G,children:[{path:"",name:"Product",component:Ct},{path:"snack1",name:"Snack1",component:Ot},{path:"snack2",name:"Snack2",component:Bt}]},{path:"/display",component:Q},{path:"/tojoin",component:rt},{path:"/news",component:dt},{path:"/news/:userId?",component:vt}],Lt=new b["a"]({linkActiveClass:"is-active",routes:Nt});var Dt=Lt;n("4916"),n("d977");r["default"].use(z["a"]);const At={connt:localStorage.str||"首页"},Wt={add(t,e){t.connt=e;try{localStorage.str=e}catch(n){}}},zt={add:({commit:t})=>{t("add")}};var Tt=new z["a"].Store({state:At,mutations:Wt,actions:zt}),Ut=n("54fe");r["default"].config.productionTip=!1,r["default"].use(Ut["Container"]),r["default"].use(Ut["Carousel"]),r["default"].use(Ut["CarouselItem"]),r["default"].use(Ut["Pagination"]),r["default"].use(Ut["Header"]),r["default"].use(Ut["Main"]),r["default"].use(Ut["Footer"]),new r["default"]({render:t=>t(h),router:Dt,store:Tt}).$mount("#app")},"576b":function(t,e,n){t.exports=n.p+"assets/img/brand_promotion_right_img.0e30a436.jpg"},"61ab":function(t,e,n){t.exports=n.p+"assets/img/store2.5248ccd7.jpg"},"6dbb":function(t,e){},"6e81":function(t,e,n){t.exports=n.p+"assets/img/store3.f8b4afad.jpg"},"6e8e":function(t,e,n){},"71c2":function(t,e,n){"use strict";var r=n("c731"),a=n("d385"),s=(n("fb36"),n("17cc")),i=Object(s["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},"756e":function(t,e,n){t.exports=n.p+"assets/img/lb_img2.8b707fa4.jpg"},7759:function(t,e,n){},"788c":function(t,e,n){"use strict";var r=n("e0e7"),a=n.n(r);a.a},"796e":function(t,e){},"7bf9":function(t,e,n){"use strict";var r=n("878c"),a=n.n(r);a.a},8324:function(t,e,n){"use strict";var r=n("eaa8"),a=n.n(r);a.a},"878c":function(t,e,n){},9098:function(t,e,n){},"9b2d":function(t,e,n){"use strict";var r=n("9098"),a=n.n(r);a.a},b663:function(t,e,n){"use strict";var r=n("6e8e"),a=n.n(r);a.a},c731:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_top"},[n("div",{staticClass:"nav"},[n("h2"),n("ul",[n("li",[n("router-link",{attrs:{to:"/",exact:""}},[t._v("首页")])],1),n("li",[n("router-link",{attrs:{to:"/brane"}},[t._v("品牌简介")])],1),n("li",[n("router-link",{attrs:{to:"/product"}},[t._v("产品展示")])],1),n("li",[n("router-link",{attrs:{to:"/display"}},[t._v("店面展示")])],1),n("li",[n("router-link",{attrs:{to:"/tojoin"}},[t._v("招商加盟")])],1),n("li",[n("router-link",{attrs:{to:"/news"}},[t._v("新闻动态")])],1)]),n("h3")])])},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},c8d7:function(t,e){},ce0f:function(t,e,n){"use strict";var r=n("7759"),a=n.n(r);a.a},d1e5:function(t,e,n){t.exports=n.p+"assets/img/to_join_img.f14a9531.jpg"},d385:function(t,e,n){"use strict";var r=n("c8d7"),a=n.n(r);e["default"]=a.a},d977:function(t,e,n){},dd4b:function(t,e,n){"use strict";var r=n("5290"),a=n.n(r);a.a},e0e7:function(t,e,n){},e959:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"footer"},[t._v("\n    Copyright © 2007-2019 All Rights Reserved. 版权所有·洋果子店\n")])},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},eaa8:function(t,e,n){},ef3a:function(t,e,n){t.exports=n.p+"assets/img/lb_img4.46f12d82.jpg"},f30d:function(t,e,n){t.exports=n.p+"assets/img/product_display_img.0edfb989.jpg"},f837:function(t,e,n){"use strict";var r=n("796e"),a=n.n(r);e["default"]=a.a},f85f:function(t,e,n){t.exports=n.p+"assets/img/store1.5b7d7809.jpg"},fb36:function(t,e,n){"use strict";var r=n("1780"),a=n.n(r);a.a}});