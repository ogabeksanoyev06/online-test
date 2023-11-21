"use strict";(self["webpackChunkonline_test"]=self["webpackChunkonline_test"]||[]).push([[69],{1920:function(t,e,s){s.d(e,{Z:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("ValidationProvider",{ref:"validationInput",staticClass:"input__holder",attrs:{tag:"div",rules:t.rules,name:t.label?t.label:t.placeholder,vid:t.vid,hideDetails:t.hideDetails},scopedSlots:t._u([{key:"default",fn:function({errors:s}){return[e("div",{staticClass:"input__block",class:t.disabled?"disabled":""},[e("label",{staticClass:"input__block-label"},[t.label?e("span",{staticClass:"input__block-title"},[t._v(t._s(t.label))]):t._e(),e("div",{directives:[{name:"on-click-outside",rawName:"v-on-click-outside:excludedClass",value:t.hideSelectDropdown,expression:"hideSelectDropdown",arg:"excludedClass"}],staticClass:"input__block-wrap",class:s[0]?"error":"",on:{click:function(e){e.preventDefault(),t.dropdownVisible=!t.dropdownVisible}}},[t.append?e("div",{staticClass:"input__block-append",class:{active:t.dropdownVisible}},[t._t("append")],2):t._e(),e("input",t._b({ref:"input",staticClass:"input__block-input",class:t.append?"append":"",staticStyle:{cursor:"pointer !important"},attrs:{readonly:"readonly",disabled:t.disabled,type:t.type,maxlength:t.maxlength,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.inputValue}},"input",t.$attrs,!1)),e("transition",{attrs:{name:"slide"}},[t.dropdownVisible?e("div",{staticClass:"dropdown"},[e("div",{staticClass:"dropdown-wrap"},t._l(t.selectOptions,(function(s){return e("div",{key:s.id,staticClass:"dropdown-item",class:s.name===t.value||s.number===t.value?"active":"",on:{click:function(e){return t.selectItem(s)}}},[t._v(" "+t._s("classes"===t.selectType?s.number:s.name)+" ")])})),0)]):t._e()])],1),t.hideDetails?t._e():e("div",{staticClass:"input__details"},[s[0]?e("span",{attrs:{id:"error"}},[t._v(t._s(s[0]))]):t._e()])])])]}}],null,!0)})},a=[],l=s(5708),o=s(8815);(0,l.l7)("required",{...o.C1,message:"{_field_}ni kiritish majburiy"});var n={name:"BaseSelect",components:{ValidationProvider:l.d_},props:{value:{default:""},label:{type:String},type:{},selectType:{type:String},hideDetails:{type:Boolean},placeholder:{type:String},rules:{},vid:{},maxlength:{default:null},disabled:{type:Boolean,default:()=>!1},append:Boolean,autofocus:Boolean,optionsProp:{type:Array,default:()=>[{name:"Something",id:0}]}},data(){return{selectOptions:[],dropdownVisible:!1}},computed:{},methods:{inputValue(t){this.$emit("input",t.target.value)},focus(){this.$refs.input.focus()},hideSelectDropdown(){this.dropdownVisible=!1},selectItem(t){this.$emit("input",t.name),this.$emit("change",t.name),this.$emit("itemSelected",t)}},mounted(){this.selectOptions=this.optionsProp,this.autofocus&&this.focus()},watch:{optionsProp(){this.selectOptions=[],this.selectOptions=this.optionsProp}}},r=n,c=s(1001),d=(0,c.Z)(r,i,a,!1,null,"b1caf588",null),h=d.exports},4518:function(t,e,s){s.d(e,{Z:function(){return c}});var i,a,l={name:"BlockWrap",functional:!0,props:{offsetX:{type:[Number,String],default:16},offsetY:{type:[Number,String]},count:{type:[Number,String],default:5},overflow:{type:Boolean},widthAuto:{type:Boolean},modStyle:{type:String},tag:{type:String,default:"div"}},render(t,{data:e,props:s,slots:i}){const a={"--offset-x":s.offsetX+"px","--offset-y":(s.offsetY||s.offsetX)+"px","--count":s.count},l=[{"bw--overflow":s.overflow,"bw--width-auto":s.widthAuto,...e.class},s.modStyle,e.staticClass,"bw"];return t(s.tag,{...e,class:l,style:a},[t("div",{class:"bw__cn"},i().default)])}},o=l,n=s(1001),r=(0,n.Z)(o,i,a,!1,null,null,null),c=r.exports},829:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"loader"},[e("div",{staticClass:"lds-roller"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}],l={name:"PreLoader"},o=l,n=s(1001),r=(0,n.Z)(o,i,a,!1,null,null,null),c=r.exports},1571:function(t,e,s){s.r(e),s.d(e,{default:function(){return M}});var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"section py-30"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section__top mb-30"},[e("div",{staticClass:"section__top-left"},[e("app-text",{staticClass:"mb-10",attrs:{size:t.isMobileSmall?22:t.isMobile?26:30,"line-height":t.isMobileSmall?26:t.isMobile?30:36,weight:"700"}},[t._v(" Abiturientlar va maktab o'quvchilar uchun test topshirish tizimi ")]),e("app-text",{attrs:{size:t.isMobileSmall?12:14,"line-height":t.isMobileSmall?16:26,weight:"500"}},[t._v(" Davlat standarti asosida tuzilgan testlardan foydalanib , bilimingizni sinab ko'ring ")])],1)]),e("BlockWrap",{attrs:{count:t.isMobile?1:t.isDesktopSmall?2:3,"offset-y":t.isMobileSmall?15:25,"offset-x":t.isMobileSmall?15:25}},[e("div",{staticClass:"block__item",class:t.isMobileSmall?"pa-15":"pa-30"},[e("div",[e("BlockWrap",{staticClass:"align-center mb-20",attrs:{count:"2","width-auto":""}},[e("div",{staticClass:"block__icon"},[e("img",{attrs:{src:"/svg/online-exams.svg",alt:"icon"}})]),e("app-text",{staticClass:"color-info",attrs:{size:"18","line-height":"24",weight:"700"}},[t._v(" Onlayn testlar ")])],1),e("AppText",{staticClass:"color-text mb-20",attrs:{size:"14","line-height":"20",weight:"500"}},[t._v(" Siz ushbu bo'limda qabul test tizimi talablari asosida onlayn imtihon topshirasiz. Test varianti DTM talablari asosida shakllantirilgan. Savollar 40 000 savol ichidan tanlab beriladi. Testni boshlash uchun boshlash tugmachasini bosing ")])],1),e("div",{staticClass:"d-flex flex-wrap justify-space-between gap-5"},[e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"info",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45},on:{click:t.closeModal}},[t._v(" Testni boshlash ")]),e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"gray",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45}},[t._v(" Hisobni to'ldirish ")])],1)]),e("div",{staticClass:"block__item",class:t.isMobileSmall?"pa-15":"pa-30"},[e("div",[e("BlockWrap",{staticClass:"align-center mb-20",attrs:{count:"2","width-auto":""}},[e("div",{staticClass:"block__icon"},[e("img",{attrs:{src:"/svg/block-exams.svg",alt:"icon"}})]),e("app-text",{staticClass:"color-orange",attrs:{size:"18","line-height":"24",weight:"700"}},[t._v(" Blokli testlar ")])],1),e("AppText",{staticClass:"color-text mb-20",attrs:{size:"14","line-height":"20",weight:"500"}},[t._v(" Bu qismda tanlagan faningiz bo'yicha 30 ta savoldan iborat testlarni yechasiz. 10 marta blokli test topshirish tekin. Testni boshlash uchun boshlash tugmachasini bosing ")])],1),e("div",{staticClass:"d-flex flex-wrap justify-space-between gap-5"},[e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"orange",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45},on:{click:t.startBlockTest}},[t._v(" Testni boshlash ")]),e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"gray",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45}},[t._v(" Hisobni to'ldirish ")])],1)]),e("div",{staticClass:"block__item",class:t.isMobileSmall?"pa-15":"pa-30"},[e("div",[e("block-wrap",{staticClass:"align-center mb-20",attrs:{count:"2","width-auto":""}},[e("div",{staticClass:"block__icon"},[e("img",{attrs:{src:"/svg/school-exams.svg",alt:"icon"}})]),e("app-text",{staticClass:"color-puple",attrs:{size:"18","line-height":"24",weight:"700"}},[t._v(" Maktab o'quvchilari uchun ")])],1),e("AppText",{staticClass:"color-text mb-20",attrs:{size:"14","line-height":"20",weight:"500"}},[t._v(" Ushbu bo'limda maktab o'quvchilari uchun tanlangan fan va undagi mavzular ro'yxatidan bir nechta mavzuni tanlab olish va ular asosida ko'rsatilgan sondagi testlarni yechish imkoniga ega bo'lasiz. ")])],1),e("div",{staticClass:"d-flex flex-wrap justify-space-between gap-5"},[e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"purple",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45},on:{click:t.startClassTest}},[t._v(" Testni boshlash ")]),e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"gray",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45}},[t._v(" Hisobni to'ldirish ")])],1)]),e("div",{staticClass:"block__item",class:t.isMobileSmall?"pa-15":"pa-30"},[e("div",[e("block-wrap",{staticClass:"align-center mb-20",attrs:{count:"2","width-auto":""}},[e("div",{staticClass:"block__icon"},[e("img",{attrs:{src:"/svg/school-exams.svg",alt:"icon"}})]),e("app-text",{staticClass:"color-green",attrs:{size:"18","line-height":"24",weight:"700"}},[t._v(" Prezident maktabi testlari ")])],1),e("AppText",{staticClass:"color-text mb-20",attrs:{size:"14","line-height":"20",weight:"500"}},[t._v(" Ushbu bo'limda maktab o'quvchilari uchun tanlangan fan va undagi mavzular ro'yxatidan bir nechta mavzuni tanlab olish va ular asosida ko'rsatilgan sondagi testlarni yechish imkoniga ega bo'lasiz. ")])],1),e("div",{staticClass:"d-flex flex-wrap justify-space-between gap-5"},[e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"green",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45,disabled:!0},on:{click:t.startPresidentTest}},[t._v(" Jarayonda... ")]),e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"gray",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45,weight:600,disabled:!0}},[t._v(" Hisobni to'ldirish ")])],1)]),e("div",{staticClass:"block__item",class:t.isMobileSmall?"pa-15":"pa-30"},[e("div",[e("block-wrap",{staticClass:"align-center mb-20",attrs:{count:"2","width-auto":""}},[e("div",{staticClass:"block__icon"},[e("img",{attrs:{src:"/svg/school-exams.svg",alt:"icon"}})]),e("app-text",{staticClass:"color-pumpkin",attrs:{size:"18","line-height":"24",weight:"700"}},[t._v(" Attestatsiya testlari ")])],1),e("AppText",{staticClass:"color-text mb-20",attrs:{size:"14","line-height":"20",weight:"500"}},[t._v(" Ushbu bo'limda maktab o'quvchilari uchun tanlangan fan va undagi mavzular ro'yxatidan bir nechta mavzuni tanlab olish va ular asosida ko'rsatilgan sondagi testlarni yechish imkoniga ega bo'lasiz. ")])],1),e("div",{staticClass:"d-flex flex-wrap justify-space-between gap-5"},[e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"pumpkin",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45,disabled:!0},on:{click:t.startAttestatsiyaTest}},[t._v(" Jarayonda... ")]),e("AppButton",{class:t.isMobile?"w-100":"",attrs:{theme:"gray",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45,weight:600,disabled:!0}},[t._v(" Hisobni to'ldirish ")])],1)])]),e("AppModal",{attrs:{value:t.chooseTestModal},on:{close:t.closeModal},scopedSlots:t._u([{key:"body",fn:function(){return[e("BaseSelect",{attrs:{append:!0,placeholder:"Yo'nalishni tanlang","options-prop":t.specList,disabled:t.isLoading,autofocus:t.selectedDirectionId,hideDetails:!0},on:{itemSelected:t.directionChange},scopedSlots:t._u([{key:"append",fn:function(){return[e("svg",{staticClass:"Dropdown_self__FtxaI",staticStyle:{height:"1rem",width:"1rem"},attrs:{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668",stroke:"rgb(51, 54, 57)","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]},proxy:!0}]),model:{value:t.selectedDirection,callback:function(e){t.selectedDirection=e},expression:"selectedDirection"}}),t.isLoading?e("span",{staticClass:"d-flex justify-content-center"},[e("loader")],1):t._e(),e("AppText",{staticClass:"color-main mb-10 mt-10",attrs:{size:"14","line-height":"24",weight:"700"}},[t._v(" Majburiy fanlar: ")]),t._l(t.directionMandatorySubjects,(function(s,i){return e("BlockWrap",{key:i+"mandatory",staticClass:"align-center mb-10",attrs:{count:1,"offset-y":"10"}},[e("base-input",{attrs:{hideDetails:"",disabled:""},model:{value:s.science,callback:function(e){t.$set(s,"science",e)},expression:"item.science"}})],1)})),t.directionMandatorySubjects.length<=0?e("BaseInput",{attrs:{label:"Birinchi fan",placeholder:"Birinchi fan",disabled:!0}}):t._e(),t.directionMandatorySubjects.length<=0?e("BaseInput",{attrs:{label:"Ikkinchi fan",placeholder:"Ikkinchi fan",disabled:!0}}):t._e(),t.directionMandatorySubjects.length<=0?e("BaseInput",{attrs:{label:"Uchinchi fan",placeholder:"Uchinchi fan",disabled:!0}}):t._e(),e("AppText",{staticClass:"color-main mb-10",attrs:{size:"14","line-height":"24",weight:"700"}},[t._v(" Asosiy fanlar: ")]),t._l(t.directionMainSubjects,(function(s,i){return e("BlockWrap",{key:i,staticClass:"align-center mb-10",attrs:{count:1,"offset-y":"10"}},[e("base-input",{attrs:{hideDetails:"",disabled:""},model:{value:s.science,callback:function(e){t.$set(s,"science",e)},expression:"item.science"}})],1)})),t.directionMainSubjects.length<=0?e("BaseInput",{attrs:{label:"Birinchi fan",placeholder:"Birinchi fan",disabled:!0}}):t._e(),t.directionMainSubjects.length<=0?e("BaseInput",{attrs:{label:"Ikkinchi fan",placeholder:"Ikkinchi fan",disabled:!0}}):t._e(),e("BlockWrap",{attrs:{count:t.isMobileSmall?1:2,"offset-y":"10","offset-x":"20","width-auto":""}},[e("AppText",{attrs:{size:"14","line-height":"24",weight:"700"}},[t._v(" Umumiy vaqti: ")]),e("AppText",{staticClass:"color-gray",attrs:{size:"16","line-height":"24",weight:"700"}},[t._v(" "+t._s(t.examsOverAllTime)+" min ")])],1),e("BlockWrap",{staticClass:"mb-20",attrs:{count:t.isMobileSmall?1:2,"offset-y":"10","offset-x":"20","width-auto":""}},[e("AppText",{attrs:{size:"14","line-height":"24",weight:"700"}},[t._v(" Maksimum ball: ")]),e("AppText",{staticClass:"color-main",attrs:{size:"16","line-height":"24",weight:"700"}},[t._v(" "+t._s(t.examsOverAllBall)+" ball ")])],1),e("AppButton",{staticStyle:{width:"100%"},attrs:{theme:"light-green",sides:t.isMobileSmall?10:20,"font-size":t.isMobileSmall?14:16,height:t.isMobileSmall?40:45,disabled:t.startTestButtonState||!t.startTestButtonState&&t.isLoading},on:{click:t.startOnlineTest}},[t._v(" Testni boshlash ")])]},proxy:!0}])})],1)])},a=[],l=(s(7658),s(4860)),o=s(4518),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",class:{visible:!t.hidden}},[e("div",{staticClass:"modal__wrap",class:{visible:!t.hidden}},[t._t("body")],2),e("div",{staticClass:"overlay",class:{visible:!t.hidden},on:{click:t.close}})])},r=[],c={name:"AppModal",props:{value:{type:Boolean,default:!0}},data(){return{hidden:!0}},methods:{close(){this.hidden=!0,this.$emit("close")}},watch:{value(t){this.hidden=t}}},d=c,h=s(1001),p=(0,h.Z)(d,n,r,!1,null,"5191e7d2",null),u=p.exports,b=s(1920),m=s(5957),v=s(8196),g=s(3822),f=s(829),_={name:"AppTests",components:{AppButton:l.Z,BlockWrap:o.Z,AppModal:u,BaseSelect:b.Z,BaseInput:m.Z,Loader:f.Z},data(){return{isLoading:!1,chooseTestModal:!0,selectedDirection:null,selectedDirectionId:null,directionMandatorySubjects:[],directionMainSubjects:[],subjectLabels:["Birinchi fan","Ikkinchi fan","Uchinchi fan"],examsOverAllTime:0,examsOverAllBall:0,subjectsListForStartingTest:[],selectedSubjectsForOnlineTest:[],firstSubjectId:null,startTestButtonState:!0}},methods:{...(0,g.nv)(["getSpecList"]),...(0,g.OI)(["setTestType"]),directionChange(t){if(!this.selectedDirection)return this.startTestButtonState=!0,this.directionMainSubjects=[],this.directionMandatorySubjects=[],this.examsOverAllTime=0,void(this.examsOverAllBall=0);this.getSubjectsByDirectionId(t.id)},getSubjectsByDirectionId(t){this.isLoading=!0,this.$http.get("tests/exam-tests/?spec_id="+t).then((t=>{t.length>0?(this.directionMainSubjects=[],this.directionMandatorySubjects=[],this.examsOverAllTime=0,this.examsOverAllBall=0,t.forEach((t=>{"compulsory"===t.type?this.directionMandatorySubjects.push(t):this.directionMainSubjects.push(t),this.examsOverAllBall+=t.total_ball,this.examsOverAllTime+=t.duration_time})),this.startTestButtonState=!1,this.selectedDirectionId=!1):(this.directionMainSubjects=[],this.directionMandatorySubjects=[],this.examsOverAllTime=0,this.examsOverAllBall=0,this.startTestButtonState=!0)})).catch((()=>{})).finally((()=>{this.isLoading=!1}))},startBlockTest(){this.$router.push({path:"/choose-subject"})},startClassTest(){this.$router.push({path:"/choose-subject-school"})},startOnlineTest(){this.storeTestTimeToStorage(60*this.examsOverAllTime),this.directionMandatorySubjects.forEach((t=>{this.selectedSubjectsForOnlineTest.push(t.id)})),this.directionMainSubjects.forEach((t=>{this.selectedSubjectsForOnlineTest.push(t.id)})),this.setTestType(v.Z.TYPE_ONLINE),this.setTestTypeToStorage(v.Z.TYPE_ONLINE),this.isLoading=!0,this.$http.post("tests/exam-tests/start/",{exam_ids:this.selectedSubjectsForOnlineTest,started_time:new Date}).then((t=>{t&&(localStorage.setItem("questions",JSON.stringify(t)),this.$router.push({name:"test"}))})).catch((t=>{if(t.response&&t.response.data){const e=t.response.data.detail,s=t.response.data.message;e?this.errorNotification(e):this.errorNotification(s)}})).finally((()=>{this.isLoading=!1}))},startPresidentTest(){this.$router.push({path:"/President-school-test"})},startAttestatsiyaTest(){this.$router.push({path:"/Attestatsiya-test"})},closeModal(){this.chooseTestModal=!this.chooseTestModal}},computed:{...(0,g.Se)(["specList"])},mounted(){},watch:{},created(){this.getSpecList()}},S=_,y=(0,h.Z)(S,i,a,!1,null,"760e2ddf",null),M=y.exports},8196:function(t,e){e["Z"]={TYPE_ONLINE:"online",TYPE_BLOCK:"block",TYPE_SCHOOL:"school",TYPE_PRESIDENT:"prezident",TYPE_ATTESTATION:"attestation",TYPE_PISA:"pisa",TYPE_PIRLS:"pirls",TYPE_TIMSS:"timss",TYPE_RESEARCH:"research"}}}]);
//# sourceMappingURL=69.e5d1f606.js.map