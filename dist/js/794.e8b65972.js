"use strict";(self["webpackChunkonline_test"]=self["webpackChunkonline_test"]||[]).push([[794],{3295:function(e,t,s){s.d(t,{Z:function(){return r}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-small-card",class:e.active?"active":"",on:{click:e.clickMe}},[t("p",[e._v(e._s(e.title))])])},l=[],a={name:"AppSmallCard",components:{},props:{title:String,photo:String,active:Boolean},methods:{clickMe(e){this.$emit("click",e.target.value)}}},n=a,o=s(1001),c=(0,o.Z)(n,i,l,!1,null,"61cbd566",null),r=c.exports},1920:function(e,t,s){s.d(t,{Z:function(){return u}});var i=function(){var e=this,t=e._self._c;return t("ValidationProvider",{ref:"validationInput",staticClass:"input__holder",attrs:{tag:"div",rules:e.rules,name:e.label?e.label:e.placeholder,vid:e.vid,hideDetails:e.hideDetails},scopedSlots:e._u([{key:"default",fn:function({errors:s}){return[t("div",{staticClass:"input__block",class:e.disabled?"disabled":""},[t("label",{staticClass:"input__block-label"},[e.label?t("span",{staticClass:"input__block-title"},[e._v(e._s(e.label))]):e._e(),t("div",{directives:[{name:"on-click-outside",rawName:"v-on-click-outside:excludedClass",value:e.hideSelectDropdown,expression:"hideSelectDropdown",arg:"excludedClass"}],staticClass:"input__block-wrap",class:s[0]?"error":"",on:{click:function(t){t.preventDefault(),e.dropdownVisible=!e.dropdownVisible}}},[e.append?t("div",{staticClass:"input__block-append",class:{active:e.dropdownVisible}},[e._t("append")],2):e._e(),t("input",e._b({ref:"input",staticClass:"input__block-input",class:e.append?"append":"",staticStyle:{cursor:"pointer !important"},attrs:{readonly:"readonly",disabled:e.disabled,type:e.type,maxlength:e.maxlength,placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.inputValue}},"input",e.$attrs,!1)),t("transition",{attrs:{name:"slide"}},[e.dropdownVisible?t("div",{staticClass:"dropdown"},[t("div",{staticClass:"dropdown-wrap"},e._l(e.selectOptions,(function(s){return t("div",{key:s.id,staticClass:"dropdown-item",class:s.name===e.value||s.number===e.value?"active":"",on:{click:function(t){return e.selectItem(s)}}},[e._v(" "+e._s("classes"===e.selectType?s.number:s.name)+" ")])})),0)]):e._e()])],1),e.hideDetails?e._e():t("div",{staticClass:"input__details"},[s[0]?t("span",{attrs:{id:"error"}},[e._v(e._s(s[0]))]):e._e()])])])]}}],null,!0)})},l=[],a=s(5708),n=s(8815);(0,a.l7)("required",{...n.C1,message:"{_field_}ni kiritish majburiy"});var o={name:"BaseSelect",components:{ValidationProvider:a.d_},props:{value:{default:""},label:{type:String},type:{},selectType:{type:String},hideDetails:{type:Boolean},placeholder:{type:String},rules:{},vid:{},maxlength:{default:null},disabled:{type:Boolean,default:()=>!1},append:Boolean,autofocus:Boolean,optionsProp:{type:Array,default:()=>[{name:"Something",id:0}]}},data(){return{selectOptions:[],dropdownVisible:!1}},computed:{},methods:{inputValue(e){this.$emit("input",e.target.value)},focus(){this.$refs.input.focus()},hideSelectDropdown(){this.dropdownVisible=!1},selectItem(e){this.$emit("input",e.name),this.$emit("change",e.name),this.$emit("itemSelected",e)}},mounted(){this.selectOptions=this.optionsProp,this.autofocus&&this.focus()},watch:{optionsProp(){this.selectOptions=[],this.selectOptions=this.optionsProp}}},c=o,r=s(1001),d=(0,r.Z)(c,i,l,!1,null,"b1caf588",null),u=d.exports},5551:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var i=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"background-color":"rgb(242 242 242)"}},[t("div",{staticClass:"container"},[t("section",{staticClass:"py-40"},[t("div",{staticClass:"section__top",class:e.isMobile?"mb-10":"mb-20"},[t("app-text",{staticClass:"mb-10",attrs:{size:e.isMobileSmall?22:e.isMobile?26:30,"line-height":e.isMobileSmall?26:e.isMobile?30:36,weight:"700"}},[e._v(" Test olinadigan fanni tanlang ")])],1),t("div",{staticClass:"bg-white radius",class:e.isMobileSmall?"pa-10":"pa-20"},e._l(e.science,(function(s,i){return t("AppSmallCard",{key:i,staticStyle:{cursor:"pointer"},attrs:{title:s.name,active:e.selectedSubject.science.id===s.id},on:{click:function(t){return e.selectScience(s)}}})})),1),t("div",{staticClass:"bg-white radius w-100 mt-20",class:e.isMobileSmall?"pa-10":"pa-20"},[t("div",{staticClass:"test__details mb-20"},[t("BaseSelect",{attrs:{label:"Savollar soni","options-prop":e.questionsCountSelect,hideDetails:"",append:!0},scopedSlots:e._u([{key:"append",fn:function(){return[t("svg",{staticClass:"Dropdown_self__FtxaI",staticStyle:{height:"1rem",width:"1rem"},attrs:{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668",stroke:"rgb(51, 54, 57)","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]},proxy:!0}]),model:{value:e.questionsCount,callback:function(t){e.questionsCount=t},expression:"questionsCount"}}),t("BaseSelect",{attrs:{label:"Sinfni tanlang","options-prop":e.classes,hideDetails:"",append:!0,selectType:"classes"},on:{itemSelected:e.selectedClassesValue},scopedSlots:e._u([{key:"append",fn:function(){return[t("svg",{staticClass:"Dropdown_self__FtxaI",staticStyle:{height:"1rem",width:"1rem"},attrs:{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668",stroke:"rgb(51, 54, 57)","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]},proxy:!0}]),model:{value:e.selectedClassValue,callback:function(t){e.selectedClassValue=t},expression:"selectedClassValue"}}),t("BaseSelect",{attrs:{label:"Darajani tanlang","options-prop":e.questionLevelList,hideDetails:"",append:!0},on:{itemSelected:e.selectedLevelValue},scopedSlots:e._u([{key:"append",fn:function(){return[t("svg",{staticClass:"Dropdown_self__FtxaI",staticStyle:{height:"1rem",width:"1rem"},attrs:{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668",stroke:"rgb(51, 54, 57)","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]},proxy:!0}]),model:{value:e.questionSelectedValue,callback:function(t){e.questionSelectedValue=t},expression:"questionSelectedValue"}}),t("BaseInput",{attrs:{"hide-details":"",label:"Umumiy vaqt",disabled:""},model:{value:e.questionTotalTime,callback:function(t){e.questionTotalTime=t},expression:"questionTotalTime"}})],1),t("AppButton",{attrs:{theme:"light-green",sides:"20",disabled:!e.selectedSubject.selected},on:{click:e.getQuestionBySelectedParameters}},[e._v(" Testni boshlash ")])],1)])])])},l=[],a=(s(7658),s(3295)),n=s(777),o=s(1920),c=s(7635),r=s(5957),d=s(8196),u=s(3822),p={name:"choose-subject-school",components:{BaseInput:r.Z,AppButton:c.Z,BaseSelect:o.Z,AppSmallCard:a.Z,AppText:n.Z},data(){return{science:[{name:"Maths",photo:"/icons/sciences.svg"}],selectedSubject:{selected:!1,science:{name:null}},questionLevelList:[{id:"beginner",name:"Oson"},{id:"medium",name:"O'rta"},{id:"advanced",name:"Qiyin"}],questionSelectedLevel:"beginner",questionSelectedValue:"Oson",questionTotalTime:5,questionsCount:5,questionsCountSelect:[{id:5,name:5},{id:10,name:10},{id:15,name:15},{id:20,name:20},{id:25,name:25},{id:30,name:30}],questionTime:1,classes:[],selectedClass:null,selectedClassValue:""}},methods:{...(0,u.OI)(["setTestType"]),getScience(){try{this.$http.get("tests/sciences/").then((e=>{e&&(this.science=e,this.science.forEach((e=>{e.photo="/icons/sciences.svg"})))})).catch((e=>{console.log(e)}))}catch(e){this.errorNotification(e.response.data.error.message)}},testClassesList(){try{this.$http.get("tests/classes").then((e=>{e.error||(this.classes=e,this.classes.length>0&&(this.selectedClass=this.classes[0].id,this.selectedClassValue=this.classes[0].number))}))}catch(e){}},selectScience(e){this.selectedSubject.selected=!0,this.selectedSubject.science=e},selectedLevelValue(e){this.questionSelectedLevel=e.id,this.questionSelectedValue=e.name},selectedClassesValue(e){this.selectedClass=e.id,this.selectedClassValue=e.number},getQuestionBySelectedParameters(){let e={};e.science_id=this.selectedSubject.science.id,e.class_id=this.selectedClass,e.test_count=this.questionsCount,e.test_score=this.questionSelectedLevel;try{this.$http.post("tests/school-tests/start/",e).then((e=>{if(e){this.setTestType(d.Z.TYPE_SCHOOL),this.setTestTypeToStorage(d.Z.TYPE_SCHOOL);let t=[];t.push(e),localStorage.setItem("questions",JSON.stringify(t)),localStorage.setItem("science_id",this.selectedSubject.science.id),localStorage.setItem("class_id",this.selectedClass),this.$router.push("test")}else this.errorNotification(e.error.message)})).catch((e=>{this.errorNotification(e.response.data.message)}))}catch(t){this.errorNotification(t.response.data.error)}}},watch:{questionsCount(){this.questionTotalTime=this.questionTime*this.questionsCount}},mounted(){},created(){this.getScience(),this.testClassesList()}},h=p,m=s(1001),v=(0,m.Z)(h,i,l,!1,null,"b073f226",null),b=v.exports},8196:function(e,t){t["Z"]={TYPE_ONLINE:"online",TYPE_BLOCK:"blog",TYPE_SCHOOL:"school",TYPE_RESEARCH:"research"}}}]);
//# sourceMappingURL=794.e8b65972.js.map