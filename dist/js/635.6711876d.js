"use strict";(self["webpackChunkonline_test"]=self["webpackChunkonline_test"]||[]).push([[635],{532:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var n=function(){var e=this,t=e._self._c;return t("div",[t("AppHeader"),t("div",{staticClass:"page__wrap"},[t("router-view")],1),"test"!==e.$route.name?t("AppFooter"):e._e()],1)},o=[],i=s(5740),d=s(6597),r=s(3822),h=s(9077),u={name:"MainLayout",components:{AppHeader:d.Z,AppFooter:i.Z},methods:{...(0,r.OI)(["setWindowWidth","setAccessToken","setIsLoggedOn","setTestType"]),setWidth(){this.setWindowWidth(document.documentElement.clientWidth)},setToken(){let e=h.Z.getToken();null!==e?(this.setAccessToken(e),this.setIsLoggedOn(!0)):(this.setAccessToken(null),this.setIsLoggedOn(!1))},setTestTypeInLayout(){this.setTestType(this.getTestTypeFromStorage())}},computed:{...(0,r.Se)(["windowWidth"])},mounted(){this.setToken(),this.setWidth(),this.setTestTypeInLayout(),window.addEventListener("resize",this.setWidth),console.log(new Date)},beforeDestroy(){window.removeEventListener("resize",this.setWidth)}},c=u,p=s(1001),a=(0,p.Z)(c,n,o,!1,null,"7fec572e",null),l=a.exports}}]);
//# sourceMappingURL=635.6711876d.js.map