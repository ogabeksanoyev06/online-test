"use strict";(self["webpackChunkonline_test"]=self["webpackChunkonline_test"]||[]).push([[692],{4518:function(t,e,s){s.d(e,{Z:function(){return u}});var o,a,l={name:"BlockWrap",functional:!0,props:{offsetX:{type:[Number,String],default:16},offsetY:{type:[Number,String]},count:{type:[Number,String],default:5},overflow:{type:Boolean},widthAuto:{type:Boolean},modStyle:{type:String},tag:{type:String,default:"div"}},render(t,{data:e,props:s,slots:o}){const a={"--offset-x":s.offsetX+"px","--offset-y":(s.offsetY||s.offsetX)+"px","--count":s.count},l=[{"bw--overflow":s.overflow,"bw--width-auto":s.widthAuto,...e.class},s.modStyle,e.staticClass,"bw"];return t(s.tag,{...e,class:l,style:a},[t("div",{class:"bw__cn"},o().default)])}},n=l,i=s(1001),r=(0,i.Z)(n,o,a,!1,null,null,null),u=r.exports},3692:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-courses"},[e("AppText",{staticClass:"color-text mb-20",attrs:{size:"14","line-height":"26",weight:"700"}},[t._v(" My courses ")]),e("div",{staticClass:"cabinet__content"},t._l(t.boughtCourses,(function(s,o){return e("div",{key:o,staticClass:"course__item pa-20"},[t._m(0,!0),e("div",{staticClass:"course__item-content"},[e("AppText",{staticClass:"mb-10",attrs:{size:t.isMobileSmall?14:18,"line-height":t.isMobileSmall?18:24,weight:"700","max-lines":"2"}},[t._v(" 2021 Complete Python Bootcamp From Zero to Hero in Python ")]),e("AppText",{staticClass:"color-text mb-10",attrs:{size:t.isMobileSmall?12:14,"line-height":t.isMobileSmall?16:20,"max-lines":"2"}},[t._v(" Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games ")]),e("BlockWrap",{staticClass:"align-center",attrs:{"width-auto":"","offset-x":"20","offset-y":"10"}},[e("div",{staticClass:"course__item-price"},[t._v("Purchased")])])],1)])})),0)],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"course__item-photo mr-30"},[e("img",{attrs:{src:"/images/cta-banner.jpg",alt:""}})])}],l=s(4518),n={name:"my-courses",components:{BlockWrap:l.Z},data(){return{userBoughtCourses:{data:[{avgStar:null,boughtCount:null,description:null,durationHour:null,durationMinute:null,id:null,name:null,pictureLarge:null,pictureSmall:null,price:null,videoCount:null,visitCount:null}],total:0}}},methods:{getBoughtCourses(){try{this.$api.get("main/User/BoughtCourses?skip=0&take=100").then((t=>{t.error||(this.userBoughtCourses=t.result)}))}catch(t){this.errorNotification(t.response.data.error.message)}}},mounted(){this.getBoughtCourses()}},i=n,r=s(1001),u=(0,r.Z)(i,o,a,!1,null,"acd80172",null),c=u.exports}}]);
//# sourceMappingURL=692.877a765a.js.map