"use strict";(self["webpackChunkonline_test"]=self["webpackChunkonline_test"]||[]).push([[570],{4860:function(e,t,s){s.d(t,{Z:function(){return c}});var i=function(){var e=this,t=e._self._c;return t(e.tag,e._g(e._b({tag:"component",staticClass:"a-btn",class:e.className,style:e.style,attrs:{type:e.type,disabled:e.disabled}},"component",e.$attrs,!1),e.listeners),[e._t("default")],2)},a=[],l=(s(7658),{name:"AppButton",props:{tag:{type:String,default:"button"},sides:{type:[Number,String],default:0},height:{type:[Number,String],default:50},width:{type:[Number,String]},radius:{type:[Number,String],default:10},fontSize:{type:[Number,String],default:18},weight:{type:[Number,String],default:600},theme:{type:String,default:"default"},disabled:{type:Boolean},textColor:{type:String},outline:{type:Boolean},noFocus:{type:Boolean},type:{type:String,default:"button"},shadow:{type:String},flex:{type:Boolean}},computed:{className(){const e="a-btn--",t=[e+"sd-"+this.sides,e+"rd-"+this.radius,e+"fn-"+this.fontSize,e+"wg-"+this.weight,e+"hg-"+this.height,e+"th-"+this.theme];return this.flex&&t.push(e+"fl"),this.width&&t.push(e+"wd"),this.outline&&t.push(e+"line"),this.textColor&&t.push(e+"cl-"+this.textColor),this.noFocus&&t.push(e+"nf"),this.shadow&&t.push(e+"shadow-"+this.shadow),t},style(){const e={};return this.width&&(e["--wd"]=this.width+"px"),e},listeners(){return this.disabled?{}:{click:e=>this.$emit("click",e)}}}}),n=l,r=s(1001),o=(0,r.Z)(n,i,a,!1,null,null,null),c=o.exports},6570:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("section",{staticClass:"py-20",staticStyle:{"background-color":"rgb(242 242 242)"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"test"},[t("div",{staticClass:"test__left radius"},e._l(e.rawTests,(function(s){return t("div",{key:s.id,ref:"test_"+s.id,refInFor:!0,staticClass:"test__body"},[t("div",{staticClass:"test__subject"},[t("div",{staticClass:"test__title bg-white radius",staticStyle:{position:"sticky",top:"-0.5px",right:"0",left:"0","z-index":"10"}},[t("div",{staticClass:"d-flex align-center justify-space-between",class:e.isDesktopSmall?"pa-15":"pa-30"},[t("AppText",{attrs:{size:e.isMobile?14:16,weight:"600"}},[e._v(" "+e._s(s.name)+" ")]),t("AppText",{attrs:{size:14,weight:"400"}},[e._v(" "+e._s(e.answeredQuestionsCount(s.id))+" / "+e._s(s?.questions?.length)+" savollar ")])],1)]),e._l(s.questions,(function(i,a){return t("div",{key:a,ref:"question_"+s.id+"_"+i.id,refInFor:!0,staticClass:"test__question bg-white radius",class:e.isDesktopSmall?"pa-15":"pa-30"},[t("span",{staticClass:"test__question-title d-flex mb-10"},[t("AppText",{staticClass:"mr-10",attrs:{size:e.isMobile?14:16,"line-height":e.isMobile?20:28,weight:"600"}},[e._v(" "+e._s(a+1)+". ")]),t("AppText",{attrs:{size:e.isMobile?14:16,"line-height":e.isMobile?20:28,weight:"500"}},[t("span",{domProps:{innerHTML:e._s(i.question)}})])],1),t("div",{staticClass:"test__answers"},e._l(i.answers,(function(a,l){return t("div",{key:l,staticClass:"test__answers-title d-flex radius pointer",class:{active:e.alreadySelected(s.id,i.id)===l+1},on:{click:function(t){return e.selectAnswer(s.id,i.id,l+1)}}},[t("AppText",{staticClass:"mr-5",attrs:{size:e.isMobile?14:16,"line-height":e.isMobile?20:24,weight:"600"}},[e._v(" "+e._s(e.answerLabels[l])+". ")]),t("AppText",{attrs:{size:(e.isMobile,14),"line-height":e.isMobile?20:24,weight:"500"}},[t("span",{domProps:{innerHTML:e._s(a)}})])],1)})),0)])}))],2)])})),0),t("div",{staticClass:"test__right"},[t("div",{staticClass:"bg-white radius mb-10",class:e.isDesktopSmall?"pa-10":"pa-20"},[t("div",{staticClass:"d-flex justify-space-between align-center"},[t("div",{staticClass:"d-flex flex-column justify-content-center text-start",staticStyle:{gap:"0.25rem","min-width":"110px"}},[t("AppText",{staticClass:"color-secondary",attrs:{size:e.isMobile?16:24,"line-height":e.isMobile?16:24,weight:"700"}},[e._v(" "+e._s(e.timerFormat(e.testTimer))+" ")]),t("AppText",{attrs:{size:e.isMobile?12:14,"line-height":e.isMobile?12:14,weight:"500"}},[e._v(" Qolgan vaqt ")])],1),t("AppButton",{attrs:{theme:"red","font-size":e.isMobileSmall||e.isMobile?14:16,sides:e.isMobileSmall?10:e.isMobile?20:30,radius:e.isMobileSmall?"8":"50",height:e.isMobileSmall?"40":"50"},on:{click:e.testFinish}},[e._v(" Tugatish ")])],1)]),t("section",{style:e.isDesktopSmall?"display:none":""},[t("div",{staticClass:"block-pagination__links"},e._l(e.rawTests,(function(s){return t("div",{key:s.id,staticClass:"bg-white radius",class:e.isDesktopSmall?"pa-10":"pa-20"},[t("div",[t("div",{staticClass:"block-pagination__header mb-10"},[t("div",{staticClass:"d-flex align-center justify-space-between"},[t("AppText",{staticClass:"pointer mr-10",attrs:{size:e.isMobile?16:18,"line-height":e.isMobile?20:28,weight:"700"},on:{click:function(t){return t.preventDefault(),e.scrollToTest(s.id)}}},[e._v(" "+e._s(s.name)+" ")]),t("AppText",{attrs:{size:e.isMobile?14:16,"line-height":e.isMobile?20:28,weight:"600"}},[e._v(" "+e._s(s.question_ball)+" ball ")])],1)]),t("ul",e._l(s.questions,(function(i,a){return t("li",{key:i.id,staticClass:"pqitem",class:{active:-1!==e.alreadySelected(s.id,i.id)},on:{click:function(t){return t.preventDefault(),e.scrollToQuestion(s.id,i.id)}}},[t("a",{staticClass:"pq",attrs:{href:"#question_"+(a+1),id:"pq_"+i.id}},[e._v(" "+e._s(a+1)+" ")])])})),0)])])})),0)])])])])])},a=[],l=(s(7658),s(4860)),n=s(3822),r=s(8196),o={name:"AppTest",components:{AppButton:l.Z},data(){return{questions:[{questions:[],subjectName:null}],rawTests:[],testTypeProperty:r.Z.TYPE_ONLINE,onlineTestResult:[{science:"Matematika",correct_ans:0,incorrect_ans:0,total_ball:0,questions:[{question_id:9,picked:!1,isTrue:!1}]}],testResultTotals:{testCount:0,testAnswerBalls:0,rightAnswersCount:0,rightAnswersBalls:0},testTimer:0,answerLabels:["A","B","C","D","E","F","G","H"],selectedAnswers:[],testFinished:!1}},computed:{...(0,n.Se)(["testType"])},methods:{...(0,n.OI)([]),scrollToTest(e){const t=this.$refs["test_"+e][0];t&&t.scrollIntoView({behavior:"smooth"})},scrollToQuestion(e,t){const s=this.$refs["question_"+e+"_"+t][0];s&&s.scrollIntoView({behavior:"smooth"})},readQuestionsFromStorage(){let e=JSON.parse(localStorage.getItem("questions")),t={id:1,name:e.name,question_ball:e.ball,questions:e.questions.map((e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4]})))};this.rawTests.push(t)},alreadySelected(e,t){let s=this.selectedAnswers.find((t=>t.exam_id===e));if(s){let e=s.questions.find((e=>e.question_id===t));return e?e.answer:-1}return-1},selectAnswer(e,t,s=null){let i=this.selectedAnswers.find((t=>t.exam_id===e));if(i){let e=i.questions.find((e=>e.question_id===t));e?e.answer=s:i.questions.push({question_id:t,answer:s})}else this.fillSelectedAnswersArray(e,t,s);localStorage.removeItem("answers"),localStorage.setItem("answers",JSON.stringify(this.selectedAnswers))},fillSelectedAnswersArray(e,t,s=null){let i={exam_id:e,questions:[{question_id:t,answer:s}]};this.selectedAnswers.push(i)},answeredQuestionsCount(e){const t=this.selectedAnswers.find((t=>t.exam_id===e));return t?t.questions.length:0},testFinish(){try{let e=JSON.parse(localStorage.getItem("answers")),t=JSON.parse(localStorage.getItem("questions"));switch(this.testTypeProperty){case r.Z.TYPE_BLOCK:return void this.subjectTestResults(e);case r.Z.TYPE_SCHOOL:return void this.subjectTestResults(e);case r.Z.TYPE_ONLINE:return void this.onlineTestResults(t,e);default:return null}}catch(e){console.log(e)}finally{this.testFinished=!0}},onlineTestResults(e,t){const s={started_time:"2023-09-09 22:02:20",finished_time:"2021-09-09 22:05:30"};t||(t=[]),this.completeAnswers(e,t),t.push(s),this.$http.post("tests/exam-tests/done/",t).then((e=>{e&&(this.onlineTestResult=e,localStorage.setItem("testResult",JSON.stringify(this.onlineTestResult)),this.$router.push({name:"result-test"}))})).catch((e=>{this.errorNotification(e.response.data.message)}))},subjectTestResults(e){this.$http.post("main/BlockTest/TestDone",{answers:e}).then((e=>{e&&(this.blockTestAnswers=!0,this.onlineTestResult=e.result,this.setTestResultTotals())})).catch((e=>{this.errorNotification(e.response.data.message)}))},setTimer(){let e=this;this.testTimer=parseInt(localStorage.getItem("testTime"));let t=setInterval((function(){if(e.testTimer/60<=0)return e.testFinish(),void clearInterval(t);e.testTimer--}),1e3)},timerFormat(e){let t=parseInt(e,10),s=Math.floor(t/3600),i=Math.floor((t-3600*s)/60),a=t-3600*s-60*i;return s<10&&(s="0"+s),i<10&&(i="0"+i),a<10&&(a="0"+a),s+":"+i+":"+a},completeAnswers(e,t){return console.log(t),null!==t&&void 0!==t||(t=[]),e.forEach((e=>{let s=t.find((t=>t.exam_id===e.id));s||(s={exam_id:e.id,questions:[]},t.push(s)),e.questions.forEach((e=>{let t=(s.questions||[]).find((t=>t.question_id===e.id));t||s.questions.push({question_id:e.id,answer:null})}))})),t},parseQuestion(e){const t=[{search:/\\ldots/g,replace:"..."},{search:/\\par\s+/g,replace:"<br>"},{search:/~/g,replace:" "},{search:/{\\bf(.*?)}/g,replace:"<strong>$1</strong>"},{search:/\\textit{(.*?)}/g,replace:"<i>$1</i>"},{search:/\\frac{(.*?)}{(.*?)}/g,replace:"<sup>$1</sup>&frasl;<sub>$2</sub>"},{search:/\^(.*?)}{(.*?)}/g,replace:"<sup>$1</sup>"},{search:/\\begin{table}/g,replace:"<table>"},{search:/\\end{table}/g,replace:"</table>"},{search:/\\begin{tabular}/g,replace:"<tbody>"},{search:/\\end{tabular}/g,replace:"</tbody>"},{search:/\\begin{figure}/g,replace:""},{search:/\\end{figure}/g,replace:""},{search:/\\includegraphics\[.*?\]{(.*?)}/g,replace:"<img src='$1' alt='Image'>"}];let s=e;return t.forEach((e=>{s=s.replace(e.search,e.replace)})),s}},watch:{testType(){this.testTypeProperty=this.testType}},mounted(){this.testTypeProperty=this.testType;let e=localStorage.getItem("answers");e&&(this.selectedAnswers=JSON.parse(e))},created(){this.setTimer(),this.readQuestionsFromStorage()}},c=o,u=s(1001),h=(0,u.Z)(c,i,a,!1,null,"f7915d50",null),d=h.exports},8196:function(e,t){t["Z"]={TYPE_ONLINE:"online",TYPE_BLOCK:"block",TYPE_SCHOOL:"school",TYPE_PRESIDENT:"prezident",TYPE_ATTESTATION:"attestation",TYPE_PISA:"pisa",TYPE_PIRLS:"pirls",TYPE_TIMSS:"timss",TYPE_RESEARCH:"research"}}}]);
//# sourceMappingURL=570.9dd6a269.js.map