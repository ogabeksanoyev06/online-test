"use strict";(self["webpackChunkonline_test"]=self["webpackChunkonline_test"]||[]).push([[610],{4860:function(e,s,t){t.d(s,{Z:function(){return c}});var i=function(){var e=this,s=e._self._c;return s(e.tag,e._g(e._b({tag:"component",staticClass:"a-btn",class:e.className,style:e.style,attrs:{type:e.type,disabled:e.disabled}},"component",e.$attrs,!1),e.listeners),[e._t("default")],2)},n=[],r=(t(7658),{name:"AppButton",props:{tag:{type:String,default:"button"},sides:{type:[Number,String],default:0},height:{type:[Number,String],default:50},width:{type:[Number,String]},radius:{type:[Number,String],default:10},fontSize:{type:[Number,String],default:18},weight:{type:[Number,String],default:600},theme:{type:String,default:"default"},disabled:{type:Boolean},textColor:{type:String},outline:{type:Boolean},noFocus:{type:Boolean},type:{type:String,default:"button"},shadow:{type:String},flex:{type:Boolean}},computed:{className(){const e="a-btn--",s=[e+"sd-"+this.sides,e+"rd-"+this.radius,e+"fn-"+this.fontSize,e+"wg-"+this.weight,e+"hg-"+this.height,e+"th-"+this.theme];return this.flex&&s.push(e+"fl"),this.width&&s.push(e+"wd"),this.outline&&s.push(e+"line"),this.textColor&&s.push(e+"cl-"+this.textColor),this.noFocus&&s.push(e+"nf"),this.shadow&&s.push(e+"shadow-"+this.shadow),s},style(){const e={};return this.width&&(e["--wd"]=this.width+"px"),e},listeners(){return this.disabled?{}:{click:e=>this.$emit("click",e)}}}}),l=r,a=t(1001),o=(0,a.Z)(l,i,n,!1,null,null,null),c=o.exports},3610:function(e,s,t){t.r(s),t.d(s,{default:function(){return h}});var i=function(){var e=this,s=e._self._c;return s("section",{staticClass:"py-20",staticStyle:{"background-color":"rgb(242 242 242)"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"test"},[s("div",{staticClass:"test__left radius"},e._l(e.rawTests,(function(t){return s("div",{key:t.id,ref:"test_"+t.id,refInFor:!0,staticClass:"test__body"},[s("div",{staticClass:"test__subject"},[s("div",{staticClass:"test__title bg-white radius",staticStyle:{position:"sticky",top:"-0.5px",right:"0",left:"0","z-index":"10"}},[s("div",{staticClass:"d-flex align-center justify-space-between",class:e.isDesktopSmall?"pa-15":"pa-30"},[s("AppText",{attrs:{size:e.isMobile?14:16,weight:"600"}},[e._v(" "+e._s(t.name)+" ")]),s("AppText",{attrs:{size:14,weight:"400"}},[e._v(" "+e._s(e.answeredQuestionsCount(t.id))+" / "+e._s(t?.questions?.length)+" savollar ")])],1)]),e._l(t.questions,(function(i,n){return s("div",{key:n,ref:"question_"+t.id+"_"+i.id,refInFor:!0,staticClass:"test__question bg-white radius",class:e.isDesktopSmall?"pa-15":"pa-30"},[s("span",{staticClass:"test__question-title d-flex mb-10"},[s("AppText",{staticClass:"mr-10",attrs:{size:e.isMobile?14:16,"line-height":e.isMobile?20:28,weight:"600"}},[e._v(" "+e._s(n+1)+". ")]),s("AppText",{attrs:{size:e.isMobile?14:16,"line-height":e.isMobile?20:28,weight:"500"}},[s("span",{domProps:{innerHTML:e._s(i.question)}})])],1),s("div",{staticClass:"test__answers"},e._l(i.answers,(function(n,r){return s("div",{key:r,staticClass:"test__answers-title d-flex radius pointer",class:{active:e.alreadySelected(t.id,i.id)===r+1},on:{click:function(s){return e.selectAnswer(t.id,i.id,r+1)}}},[s("AppText",{staticClass:"mr-5",attrs:{size:e.isMobile?14:16,"line-height":e.isMobile?20:24,weight:"600"}},[e._v(" "+e._s(e.answerLabels[r])+". ")]),s("AppText",{attrs:{size:(e.isMobile,14),"line-height":e.isMobile?20:24,weight:"500"}},[s("span",{domProps:{innerHTML:e._s(n)}})])],1)})),0)])}))],2)])})),0),s("div",{staticClass:"test__right"},[s("div",{staticClass:"bg-white radius mb-10",class:e.isDesktopSmall?"pa-10":"pa-20"},[s("div",{staticClass:"d-flex justify-space-between align-center"},[s("div",{staticClass:"d-flex flex-column justify-content-center text-start",staticStyle:{gap:"0.25rem","min-width":"110px"}},[s("AppText",{staticClass:"color-secondary",attrs:{size:e.isMobile?16:24,"line-height":e.isMobile?16:24,weight:"700"}},[e._v(" "+e._s(e.timerFormat(e.testTimer))+" ")]),s("AppText",{attrs:{size:e.isMobile?12:14,"line-height":e.isMobile?12:14,weight:"500"}},[e._v(" Qolgan vaqt ")])],1),s("AppButton",{attrs:{theme:"red","font-size":e.isMobileSmall||e.isMobile?14:16,sides:e.isMobileSmall?10:e.isMobile?20:30,radius:e.isMobileSmall?"8":"50",height:e.isMobileSmall?"40":"50"},on:{click:e.testFinish}},[e._v(" Tugatish ")])],1)]),s("section",{style:e.isDesktopSmall?"display:none":""},[s("div",{staticClass:"block-pagination__links"},e._l(e.rawTests,(function(t){return s("div",{key:t.id,staticClass:"bg-white radius",class:e.isDesktopSmall?"pa-10":"pa-20"},[s("div",[s("div",{staticClass:"block-pagination__header mb-10"},[s("div",{staticClass:"d-flex align-center justify-space-between"},[s("AppText",{staticClass:"pointer mr-10",attrs:{size:e.isMobile?16:18,"line-height":e.isMobile?20:28,weight:"700"},on:{click:function(s){return s.preventDefault(),e.scrollToTest(t.id)}}},[e._v(" "+e._s(t.name)+" ")]),s("AppText",{attrs:{size:e.isMobile?14:16,"line-height":e.isMobile?20:28,weight:"600"}},[e._v(" "+e._s(t.question_ball)+" ball ")])],1)]),s("ul",e._l(t.questions,(function(i,n){return s("li",{key:i.id,staticClass:"pqitem",class:{active:-1!==e.alreadySelected(t.id,i.id)},on:{click:function(s){return s.preventDefault(),e.scrollToQuestion(t.id,i.id)}}},[s("a",{staticClass:"pq",attrs:{href:"#question_"+(n+1),id:"pq_"+i.id}},[e._v(" "+e._s(n+1)+" ")])])})),0)])])})),0)])])])])])},n=[],r=(t(7658),t(4860)),l=t(3822),a=t(8196),o={name:"AppTest",components:{AppButton:r.Z},data(){return{questions:[{questions:[],subjectName:null}],rawTests:[],onlineTestAnswers:!1,blockTestAnswers:!1,testTypeProperty:a.Z.TYPE_ONLINE,onlineTestResult:[{science:"Matematika",correct_ans:0,incorrect_ans:0,total_ball:0,questions:[{question_id:9,picked:!1,isTrue:!1}]}],testResultTotals:{testCount:0,testAnswerBalls:0,rightAnswersCount:0,rightAnswersBalls:0},testTimer:0,answerLabels:["A","B","C","D","E","F","G","H"],selectedAnswers:[],testFinished:!1}},computed:{...(0,l.Se)(["selectedQuestionIndex","selectedSubjectId","testType"])},methods:{...(0,l.OI)([]),scrollToTest(e){const s=this.$refs["test_"+e][0];s&&s.scrollIntoView({behavior:"smooth"})},scrollToQuestion(e,s){const t=this.$refs["question_"+e+"_"+s][0];t&&t.scrollIntoView({behavior:"smooth"})},readQuestionsFromStorage(){try{let e=JSON.parse(localStorage.getItem("questions"));switch(this.testTypeProperty=localStorage.getItem("testType"),this.testTypeProperty){case a.Z.TYPE_ONLINE:return void(this.rawTests=e);case a.Z.TYPE_BLOCK:if(e){let s={id:parseInt(localStorage.getItem("science_id")),name:e.name||"",question_ball:e.ball,questions:e.questions.map((e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4]})))};this.rawTests.push(s)}return;case a.Z.TYPE_SCHOOL:if(e){let s={id:parseInt(localStorage.getItem("science_id")),name:e.name||"",question_ball:e.ball,questions:e.questions.map((e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4]})))};this.rawTests.push(s)}return;case a.Z.TYPE_RESEARCH:if(e){let s={id:parseInt(localStorage.getItem("specification_id")),name:e.name||"",question_ball:e.ball,questions:e.questions.map((e=>({id:e.id,question:e.question,answers:[e.answer1,e.answer2,e.answer3,e.answer4]})))};this.rawTests.push(s)}return;default:return null}}catch(e){console.log(e)}},alreadySelected(e,s){switch(this.testTypeProperty){case a.Z.TYPE_ONLINE:{let t=this.selectedAnswers.find((s=>s.exam_id===e));if(t){let e=t.questions.find((e=>e.question_id===s));return e?e.answer:-1}return-1}case a.Z.TYPE_BLOCK:{let t=this.selectedAnswers.find((s=>s.science_id===e));if(t){let e=t.questions.find((e=>e.question_id===s));return e?e.answer:-1}return-1}case a.Z.TYPE_SCHOOL:{let t=this.selectedAnswers.find((s=>s.science_id===e));if(t){let e=t.questions.find((e=>e.question_id===s));return e?e.answer:-1}return-1}case a.Z.TYPE_RESEARCH:{let t=this.selectedAnswers.find((s=>s.specification_id===e));if(t){let e=t.questions.find((e=>e.question_id===s));return e?e.answer:-1}return-1}default:return null}},selectAnswer(e,s,t=null){switch(this.testTypeProperty){case a.Z.TYPE_ONLINE:{let i=this.selectedAnswers.find((s=>s.exam_id===e));if(i){let e=i.questions.find((e=>e.question_id===s));e?e.answer=t:i.questions.push({question_id:s,answer:t})}else this.fillSelectedAnswersArray(e,s,t);return localStorage.removeItem("answers"),void localStorage.setItem("answers",JSON.stringify(this.selectedAnswers))}case a.Z.TYPE_BLOCK:{let i=this.selectedAnswers.find((s=>s.science_id===e));if(i){let e=i.questions.find((e=>e.question_id===s));e?e.answer=t:i.questions.push({question_id:s,answer:t})}else this.fillSelectedAnswersArray(e,s,t);return localStorage.removeItem("answers"),void localStorage.setItem("answers",JSON.stringify(this.selectedAnswers))}case a.Z.TYPE_SCHOOL:{let i=this.selectedAnswers.find((s=>s.science_id===e));if(i){let e=i.questions.find((e=>e.question_id===s));e?e.answer=t:i.questions.push({question_id:s,answer:t})}else this.fillSelectedAnswersArray(e,s,t);return localStorage.removeItem("answers"),void localStorage.setItem("answers",JSON.stringify(this.selectedAnswers))}case a.Z.TYPE_RESEARCH:{let i=this.selectedAnswers.find((s=>s.specification_id===e));if(i){let e=i.questions.find((e=>e.question_id===s));e?e.answer=t:i.questions.push({question_id:s,answer:t})}else this.fillSelectedAnswersArray(e,s,t);return localStorage.removeItem("answers"),void localStorage.setItem("answers",JSON.stringify(this.selectedAnswers))}default:return null}},fillSelectedAnswersArray(e,s,t=null){switch(this.testTypeProperty){case a.Z.TYPE_ONLINE:{let i={exam_id:e,questions:[{question_id:s,answer:t}]};return this.selectedAnswers.push(i)}case a.Z.TYPE_BLOCK:{let i={science_id:e,questions:[{question_id:s,answer:t}]};return this.selectedAnswers.push(i)}case a.Z.TYPE_SCHOOL:{let i={science_id:e,questions:[{question_id:s,answer:t}]};return this.selectedAnswers.push(i)}case a.Z.TYPE_RESEARCH:{let i={specification_id:e,questions:[{question_id:s,answer:t}]};return this.selectedAnswers.push(i)}default:return null}},answeredQuestionsCount(e){switch(this.testTypeProperty){case a.Z.TYPE_ONLINE:{const s=this.selectedAnswers.find((s=>s.exam_id===e));return s?s.questions.length:0}case a.Z.TYPE_BLOCK:{const s=this.selectedAnswers.find((s=>s.science_id===e));return s?s.questions.length:0}case a.Z.TYPE_SCHOOL:{const s=this.selectedAnswers.find((s=>s.science_id===e));return s?s.questions.length:0}case a.Z.TYPE_RESEARCH:{const s=this.selectedAnswers.find((s=>s.specification_id===e));return s?s.questions.length:0}default:return null}},testFinish(){try{let e=JSON.parse(localStorage.getItem("answers"));if(this.testTypeProperty===a.Z.TYPE_ONLINE){let s=JSON.parse(localStorage.getItem("questions"));switch(this.testTypeProperty){case a.Z.TYPE_ONLINE:return void this.onlineTestResults(s,e);default:return null}}else{let s=this.rawTests;switch(this.testTypeProperty){case a.Z.TYPE_BLOCK:return void this.blockTestResults(s,e);case a.Z.TYPE_SCHOOL:return void this.schoolTestResults(s,e);case a.Z.TYPE_PISA:return void this.pisaTestResults(s,e);case a.Z.TYPE_PIRLS:return void this.pirlsTestResults(s,e);case a.Z.TYPE_TIMSS:return void this.timssTestResults(s,e);default:return null}}}catch(e){console.log(e)}finally{this.testFinished=!0}},onlineTestResults(e,s){const t={started_time:"2023-09-09 22:02:20",finished_time:"2021-09-09 22:05:30"};s||(s=[]),this.completeAnswers(e,s),s.push(t),this.$http.post("tests/exam-tests/done/",s).then((e=>{e&&(this.onlineTestResult=e,localStorage.setItem("testResult",JSON.stringify(this.onlineTestResult)),this.$router.push({name:"result-test"}))})).catch((e=>{this.errorNotification(e.response.data.message)}))},blockTestResults(e,s){s||(s=[]),this.completeAnswers(e,s);let t={science_id:s[0].science_id,questions:s[0].questions,time:{started_time:"2021-09-09 22:05:30",finished_time:"2021-09-09 23:02:20"}};this.$http.post("tests/sciences-tests/done/",t).then((e=>{e&&(localStorage.setItem("testResult",JSON.stringify([e])),this.$router.push({name:"result-test"}))})).catch((e=>{this.errorNotification(e.response.data.message)}))},schoolTestResults(e,s){s||(s=[]),this.completeAnswers(e,s);let t={science_id:s[0].science_id,class_id:1,questions:s[0].questions,time:{started_time:"2021-09-09 22:05:30",finished_time:"2021-09-09 23:02:20"}};this.$http.post("tests/school-tests/done/",t).then((e=>{e&&(localStorage.setItem("testResult",JSON.stringify([e])),this.$router.push({name:"result-test"}))})).catch((e=>{this.errorNotification(e.response.data.message)}))},setTimer(){let e=this;this.testTimer=parseInt(localStorage.getItem("testTime"));let s=setInterval((function(){if(e.testTimer/60<=0)return e.testFinish(),void clearInterval(s);e.testTimer--}),1e3)},timerFormat(e){let s=parseInt(e,10),t=Math.floor(s/3600),i=Math.floor((s-3600*t)/60),n=s-3600*t-60*i;return t<10&&(t="0"+t),i<10&&(i="0"+i),n<10&&(n="0"+n),t+":"+i+":"+n},closeModal(){this.onlineTestAnswers=!1},closeBlockTestResultModal(){this.blockTestAnswers=!1},completeAnswers(e,s){return a.Z.TYPE_ONLINE===this.testType?(null!==s&&void 0!==s||(s=[]),e.forEach((e=>{let t=s.find((s=>s.exam_id===e.id));t||(t={exam_id:e.id,questions:[]},s.push(t)),e.questions.forEach((e=>{let s=(t.questions||[]).find((s=>s.question_id===e.id));s||t.questions.push({question_id:e.id,answer:null})}))})),s):(null!==s&&void 0!==s||(s=[]),e.forEach((e=>{let t=s.find((s=>s.science_id===e.id));t||(t={science_id:e.id,questions:[]},s.push(t)),e.questions.forEach((e=>{let s=(t.questions||[]).find((s=>s.question_id===e.id));s||t.questions.push({question_id:e.id,answer:null})}))})),s)},parseQuestion(e){const s=[{search:/\\ldots/g,replace:"..."},{search:/\\par\s+/g,replace:"<br>"},{search:/~/g,replace:" "},{search:/{\\bf(.*?)}/g,replace:"<strong>$1</strong>"},{search:/\\textit{(.*?)}/g,replace:"<i>$1</i>"},{search:/\\frac{(.*?)}{(.*?)}/g,replace:"<sup>$1</sup>&frasl;<sub>$2</sub>"},{search:/\^(.*?)}{(.*?)}/g,replace:"<sup>$1</sup>"},{search:/\\begin{table}/g,replace:"<table>"},{search:/\\end{table}/g,replace:"</table>"},{search:/\\begin{tabular}/g,replace:"<tbody>"},{search:/\\end{tabular}/g,replace:"</tbody>"},{search:/\\begin{figure}/g,replace:""},{search:/\\end{figure}/g,replace:""},{search:/\\includegraphics\[.*?\]{(.*?)}/g,replace:"<img src='$1' alt='Image'>"}];let t=e;return s.forEach((e=>{t=t.replace(e.search,e.replace)})),t}},watch:{testType(){this.testTypeProperty=this.testType}},mounted(){this.testTypeProperty=this.testType;let e=localStorage.getItem("answers");e&&(this.selectedAnswers=JSON.parse(e))},created(){this.readQuestionsFromStorage(),this.setTimer()}},c=o,u=t(1001),d=(0,u.Z)(c,i,n,!1,null,"479ad094",null),h=d.exports},8196:function(e,s){s["Z"]={TYPE_ONLINE:"online",TYPE_BLOCK:"block",TYPE_SCHOOL:"school",TYPE_PRESIDENT:"prezident",TYPE_ATTESTATION:"attestation",TYPE_PISA:"pisa",TYPE_PIRLS:"pirls",TYPE_TIMSS:"timss",TYPE_RESEARCH:"research"}}}]);
//# sourceMappingURL=610.bc8eb727.js.map