"use strict";(self["webpackChunkonline_test"]=self["webpackChunkonline_test"]||[]).push([[555],{7635:function(t,i,e){e.d(i,{Z:function(){return u}});var a=function(){var t=this,i=t._self._c;return i(t.tag,t._g(t._b({tag:"component",staticClass:"a-btn",class:t.className,style:t.style,attrs:{type:t.type,disabled:t.disabled}},"component",t.$attrs,!1),t.listeners),[t._t("default")],2)},s=[],n=(e(7658),{name:"AppButton",props:{tag:{type:String,default:"button"},sides:{type:[Number,String],default:0},height:{type:[Number,String],default:50},width:{type:[Number,String]},radius:{type:[Number,String],default:4},fontSize:{type:[Number,String],default:18},weight:{type:[Number,String],default:600},theme:{type:String,default:"default"},disabled:{type:Boolean},textColor:{type:String},outline:{type:Boolean},noFocus:{type:Boolean},type:{type:String,default:"button"},shadow:{type:String},flex:{type:Boolean}},computed:{className(){const t="a-btn--",i=[t+"sd-"+this.sides,t+"rd-"+this.radius,t+"fn-"+this.fontSize,t+"wg-"+this.weight,t+"hg-"+this.height,t+"th-"+this.theme];return this.flex&&i.push(t+"fl"),this.width&&i.push(t+"wd"),this.outline&&i.push(t+"line"),this.textColor&&i.push(t+"cl-"+this.textColor),this.noFocus&&i.push(t+"nf"),this.shadow&&i.push(t+"shadow-"+this.shadow),i},style(){const t={};return this.width&&(t["--wd"]=this.width+"px"),t},listeners(){return this.disabled?{}:{click:t=>this.$emit("click",t)}}}}),l=n,o=e(1001),r=(0,o.Z)(l,a,s,!1,null,null,null),u=r.exports},4518:function(t,i,e){e.d(i,{Z:function(){return u}});var a,s,n={name:"BlockWrap",functional:!0,props:{offsetX:{type:[Number,String],default:16},offsetY:{type:[Number,String]},count:{type:[Number,String],default:5},overflow:{type:Boolean},widthAuto:{type:Boolean},modStyle:{type:String},tag:{type:String,default:"div"}},render(t,{data:i,props:e,slots:a}){const s={"--offset-x":e.offsetX+"px","--offset-y":(e.offsetY||e.offsetX)+"px","--count":e.count},n=[{"bw--overflow":e.overflow,"bw--width-auto":e.widthAuto,...i.class},e.modStyle,i.staticClass,"bw"];return t(e.tag,{...i,class:n,style:s},[t("div",{class:"bw__cn"},a().default)])}},l=n,o=e(1001),r=(0,o.Z)(l,a,s,!1,null,null,null),u=r.exports},4555:function(t,i,e){e.r(i),e.d(i,{default:function(){return A}});var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"home-page"},[i("HeroBanner"),i("PromoPage"),i("CtaBanner",{attrs:{name:"Online test",title:"Sizning vaqtingizga qarab moslashadi.",text:"Online test bo'limida siz xohlagan yo'nalishni tanlang va Testni Boshlash tugmasi bilan jarayonni ishga tushuring.",textIsActive:!0}}),i("CtaBanner",{attrs:{name:"Blog test",title:"Ummumiy shakllangan ko'nikmalar sinovdan o'tkaziladi.",text:"Bo'limda qaysi fan yuzasidan test ishlamoqchi bo'lganingizni tanlang, testlar miqdorini belgilang va o'z darajangizni tekshiring.",textIsActive:!0,orderingFlex:!0}}),i("CtaBanner",{attrs:{name:"Maktab o'quvchilari uchun test",title:"O'quvchilar uchun maxsus testlar.",text:"Bu bo'limda o'quvchilar olgan bilim va ko'nikmalarini amalda mustahkamlab olishadi. O'rganing va bazadan foydalanib mustahkamlang.",textIsActive:!0}}),i("CtaBanner",{attrs:{name:"Xalqaro tadqiqot testlari",title:"Bu b'limda xalqaro darajada o'z o'rningizni egallang.",text:"Xalqaro tadqiqotlar bo'limi o'quvchi yoshlarni har 5 yilda PISA, PIRLSS, TIMSS testlaridan o'z bilimini tekshirish imkoniyatini beradi.",textIsActive:!0,orderingFlex:!0}})],1)},s=[],n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"my-60"},[i("div",{staticClass:"container"},[i("app-text",{staticClass:"text-center mb-20",attrs:{size:t.isMobileMedium?"24":"40","line-height":t.isMobileMedium?"32":"48",weight:"600"}},[t._v(" O'z bilimingizni Itestify bilan sinab ko'ring. ")]),i("app-text",{staticClass:"text-center mx-auto mb-40",attrs:{size:t.isMobileMedium?"14":"16","line-height":t.isMobileMedium?"22":"24","max-width":"650",weight:"500"}},[t._v(" Itestify sizning bilim talablaringizga qarab moslasha oladi, bu xoh tabiiy fanlar bo'lsin, xoh aniq fanlar. ")]),i("block-wrap",{staticClass:"list",attrs:{count:t.isMobileSmall?1:t.isMobileMedium?2:t.isMobile?3:4,"offset-y":t.isMobileSmall?12:24,"offset-x":t.isMobileSmall?12:24}},t._l(6,(function(e,a){return i("div",{key:a,staticClass:"list-item"},[i("svg",{attrs:{width:"34",height:"28",viewBox:"0 0 34 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M1.955 10.3085H32.045C33.1234 10.3085 34 9.42262 34 8.33271C34 7.94077 33.8831 7.55957 33.6706 7.23743L29.6544 1.14897C29.1816 0.429521 28.39 0 27.5347 0H6.46531C5.61531 0 4.81844 0.429521 4.34563 1.14897L0.329375 7.23206C0.116875 7.55957 0 7.94077 0 8.32734C0 9.42262 0.876563 10.3085 1.955 10.3085ZM3.4 12.0266V20.617V24.9122C3.4 26.335 4.54219 27.4894 5.95 27.4894H17.85C19.2578 27.4894 20.4 26.335 20.4 24.9122V20.617V12.0266H17V20.617H6.8V12.0266H3.4ZM27.2 12.0266V25.7713C27.2 26.7216 27.9597 27.4894 28.9 27.4894C29.8403 27.4894 30.6 26.7216 30.6 25.7713V12.0266H27.2Z",fill:"#A0A0A0"}})]),i("app-text",{staticClass:"ml-10",attrs:{size:"16",weight:"500"}},[t._v(" Online testlar ")])],1)})),0),i("div",{staticClass:"list"})],1)])},l=[],o=e(4518),r={components:{BlockWrap:o.Z},name:"PromoPage"},u=r,h=e(1001),c=(0,h.Z)(u,n,l,!1,null,"d8ac8c7e",null),d=c.exports,m=(e(7658),function(){var t=this,i=t._self._c;return i("kinesis-container",[i("div",{staticClass:"hero-banner"},[i("div",{staticClass:"container"},[i("div",{staticClass:"hero-banner__inner"},[i("div",{staticClass:"hero-banner__content"},[i("app-text",{staticClass:"mb-20",attrs:{size:t.isMobileMedium?"24":"42","line-height":t.isMobileMedium?"32":"52","max-width":"700",weight:"700"}},[t._v(" O’z kelajagingizni iTestify bilan birga quring! ")]),i("app-text",{staticClass:"mb-30",attrs:{size:t.isMobileMedium?"14":"16","line-height":t.isMobileMedium?"22":"24",weight:"500","max-width":"500"}},[t._v(" Ijodkorlik va bilim muhim omillardir, muvaffaqiyat va o'z-o'zini rivojlantirish ")]),i("app-button",{staticStyle:{width:"max-content"},attrs:{theme:"green","font-size":16,sides:t.isMobileSmall?"20":"30",height:t.isMobileSmall?"40":"50",weight:"500"},on:{click:function(i){return t.$router.push({path:"/choose-test"})}}},[t._v(" Test boshlash ")])],1),i("div",{staticClass:"hero-banner__photo"},[i("kinesis-element",{staticClass:"layer",attrs:{strength:10}},[i("img",{attrs:{src:"/images/pic.png",alt:""}})])],1)])])])])}),g=[],p=e(7635),b=e(9864),f={name:"HeroBanner",components:{"kinesis-container":b.tB,"kinesis-element":b.M2,AppButton:p.Z},data(){return{}},computed:{},mounted(){}},v=f,y=(0,h.Z)(v,m,g,!1,null,"36d087e7",null),x=y.exports,C=function(){var t=this,i=t._self._c;return i("div",{staticClass:"my-60"},[i("div",{staticClass:"container"},[i("div",{staticClass:"cta__banner",class:{"order-reversed":t.orderingFlex}},[i("div",{staticClass:"cta__banner-content",class:t.isMobile?"py-20":"py-30"},[i("app-text",{staticClass:"color-green text-uppercase mb-15",attrs:{size:t.isMobile?"16":"20","line-height":t.isMobile?"24":"28",weight:500}},[t._v(" "+t._s(t.name)+" ")]),i("app-text",{staticClass:"mb-20",attrs:{size:t.isMobile?"22":"32","line-height":t.isMobile?"30":"40",weight:600}},[t._v(" "+t._s(t.title)+" ")]),t.textIsActive?i("app-text",{staticClass:"mb-15",attrs:{size:t.isMobile?"14":"16","line-height":t.isMobile?"22":"24"}},[t._v(" "+t._s(t.text)+" ")]):t._e(),t.listIsActive?i("ul",{staticClass:"list"},[i("li",{staticClass:"list-item"})]):t._e()],1),i("div",{staticClass:"cta__banner-photo",style:t.orderingFlex?"margin-right:auto;margin-left:inherit":""},[i("img",{attrs:{src:"https://boshqar.com/img/mahsulotlar.294d37f6.png",alt:""}})])])])])},w=[],_={name:"CtaBanner",components:{},props:{name:String,title:String,text:String,list:String,photo:String,listIsActive:{type:Boolean,default:!1},textIsActive:{type:Boolean,default:!1},orderingFlex:{type:Boolean,default:!1}}},k=_,S=(0,h.Z)(k,C,w,!1,null,"49fe961d",null),M=S.exports,z={name:"AppHome",components:{HeroBanner:x,PromoPage:d,CtaBanner:M},data(){return{testCategory:[{id:0,name:"Online testlar",link:"/",icon:""},{id:1,name:"Block testlar",link:"/",icon:""},{id:2,name:"Maktab o'quvchilari uchun testlar",link:"/",icon:""},{id:3,name:"Prezident maktabi testlari",link:"/",icon:""},{id:4,name:"Attestatsiya testlari",link:"/",icon:""},{id:5,name:"PISA testlari",link:"/",icon:""},{id:6,name:"PIRLS testlari",link:"/",icon:""},{id:7,name:"TIIMS testlari",link:"/",icon:""}]}}},B=z,q=(0,h.Z)(B,a,s,!1,null,"4070fef0",null),A=q.exports}}]);
//# sourceMappingURL=555.a21832d5.js.map