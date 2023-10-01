<template>
  <section class="py-20">
    <div class="container">
      <div class="test">
        <div class="test__left">
          <Test_solving :questions-prop="rawTests"></Test_solving>
        </div>
        <div class="test__right">
          <div class="test__top-item">
            <AppText
              size="14"
              line-height="26"
              weight="700"
              v-if="testTypeProperty === 'online'"
            >
              Majburiy fanlar
            </AppText>
            <div class="test__wrap">
              <button
                class="test__item"
                @click="selectSubjectQuestions(mandatory.id)"
                v-for="(mandatory, index) in mandatorySubjectsQuestions"
                :key="index"
                :class="selectedSubjectIdItem === mandatory.id ? 'active' : ''"
              >
                {{ mandatory.name }}
              </button>
            </div>
          </div>
          <div class="test__top-item" v-if="testTypeProperty === 'online'">
            <AppText
              size="14"
              line-height="26"
              weight="700"
              v-if="testTypeProperty === 'online'"
            >
              Asosiy fanlar
            </AppText>
            <div class="test__wrap">
              <button
                class="test__item"
                @click="selectSubjectQuestions(main.id)"
                v-for="(main, index) in mainSubjectsQuestions"
                :key="index"
                :class="selectedSubjectIdItem === main.id ? 'active' : ''"
              >
                {{ main.name }}
              </button>
            </div>
          </div>
          <div class="test__bottom">
            <div class="test__details">
              <div
                class="test__details-item"
                style="
                  cursor: unset;
                  font-size: 1.2rem;
                  max-width: 150px;
                  width: 100%;
                  color: #00b74a;
                "
              >
                <span> {{ timerFormat(testTimer) }} </span>
              </div>
              <div class="test__details-item" @click="testFinish">
                <div class="test__details-icon">
                  <img src="/icons/finish.svg" alt="" />
                </div>
                <AppText
                  size="14"
                  line-height="26"
                  weight="700"
                  class="color-danger"
                  @click="testFinish()"
                >
                  Tugatish
                </AppText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import AppButton from "../../../components/shared-components/AppButton";
import Test_solving from "../../../components/test-solving/Test_solving";
import { mapGetters, mapMutations } from "vuex";
// import AppModal from "../../../components/shared-components/AppModal";
import test from "../../../constants/test";

export default {
  name: "AppTest",
  components: { Test_solving },
  data() {
    return {
      questions: [
        {
          questions: [],
          subjectName: null,
        },
      ],
      mandatorySubjectsQuestions: [
        {
          maxBall: null,
          quesCount: null,
          questions: [],
          subjectName: null,
        },
      ],
      mainSubjectsQuestions: [
        {
          maxBall: null,
          quesCount: null,
          questions: [],
          subjectName: null,
        },
      ],
      rawTests: {
        questions: [
          {
            id: 1,
            question: "Example question",
            answers: ["1 st answer", "2 nd answer", "3 nd answer"],
          },
        ],
        subjectName: null,
        maxBall: null,
        quesCount: null,
      },
      selectedSubjectIdItem: null,
      onlineTestAnswers: false,
      blockTestAnswers: false,
      testTypeProperty: test.TYPE_ONLINE,
      onlineTestResult: [
        {
          maxBall: 0,
          quesCount: 0,
          subjectName: null,
          subjectStatusName: null,
          userAnsCount: 0,
          userTestBall: 0,
        },
      ],
      testResultTotals: {
        testCount: 0,
        testAnswerBalls: 0,
        rightAnswersCount: 0,
        rightAnswersBalls: 0,
      },
      testTimer: 0,
    };
  },
  computed: {
    stillMandatory(index) {
      return index <= 2;
    },
    ...mapGetters(["selectedQuestionIndex", "selectedSubjectId", "testType"]),
  },
  methods: {
    ...mapMutations([
      "setSelectedQuestionIndex",
      "setSelectedSubjectId",
      "setCurrentSubjectQuestionCount",
    ]),
    selectSubjectQuestions(subjectId) {
      this.setSelectedQuestionIndex(0);
      this.setQuestionIndexToStorage(0);
      this.setSelectedSubjectId(subjectId);
      this.setSelectedSubjectIdMixin(subjectId);
      localStorage.setItem("exam_id", subjectId);
      let index = this.questions.findIndex((q) => q.id === subjectId);
      if (index === -1) return;
      this.rawTests = this.questions[index];
      this.setCurrentSubjectQuestionCount(this.rawTests.questions.length);
    },
    readQuestionsFromStorage() {
      let questions = JSON.parse(localStorage.getItem("questions"));
      if (questions.length > 0) {
        this.questions = questions;
        this.rawTests = questions[this.questionsInitialIndex()];
        this.setCurrentSubjectQuestionCount(this.rawTests.questions.length);
        this.mandatorySubjectsQuestions = [];
        this.mainSubjectsQuestions = [];
        this.setSelectedQuestionIndex(0);
        this.questions.forEach((q, index) => {
          if (index <= 2) {
            this.mandatorySubjectsQuestions.push(q);
          } else {
            this.mainSubjectsQuestions.push(q);
          }
        });
        if (!this.selectedSubjectId) {
          this.setSelectedSubjectId(this.questions[0].id);
          localStorage.setItem("exam_id", this.questions[0].id);
        }
      }
    },
    questionsInitialIndex() {
      let selectedSubjectId = this.getSelectedSubjectIdMixin();
      if (!selectedSubjectId) {
        return 0;
      }
      return this.questionIndexBySubjectId(selectedSubjectId);
    },
    questionIndexBySubjectId(subjectId) {
      let index = this.questions.findIndex((q) => q.id === subjectId);
      if (index === -1) return 0;
      return index;
    },
    testFinish() {
      try {
        let answers = JSON.parse(localStorage.getItem("answers"));
        if (!answers || answers.length <= 0) {
          this.errorNotification(
            "Sizda belgilangan javoblar yo`q",
            "Test natijasi"
          );
          return false;
        }
        switch (this.testTypeProperty) {
          case test.TYPE_BLOCK:
            this.subjectTestResults(answers);
            return;
          case test.TYPE_SCHOOL:
            this.subjectTestResults(answers);
            return;
          case test.TYPE_ONLINE:
            this.onlineTestResults(answers);
            return;
          default:
            return null;
        }
      } catch (e) {
        console.log(e.response.data.error.message);
      }
    },
    subjectTestResults(answers) {
      this.$api
        .post(`main/BlockTest/TestDone`, {
          answers,
        })
        .then((res) => {
          if (!res.error) {
            this.blockTestAnswers = true;
            this.onlineTestResult = res.result;
            this.setTestResultTotals();
          }
        });
    },
    onlineTestResults(answers) {
      const additionalData = {
        started_time: "2023-09-09 22:02:20",
        finished_time: "2021-09-09 22:05:30",
      };
      answers.push(additionalData);
      this.$http.post(`tests/exam-tests/done/`, answers).then((res) => {
        if (!res.error) {
          this.onlineTestAnswers = true;
          this.onlineTestResult = res.result;
          // this.setTestResultTotals();
        }
      });
    },
    setTimer() {
      let _this = this;
      this.testTimer = parseInt(localStorage.getItem("testTime")) * 60;
      let testTimerInterval = setInterval(function () {
        if (_this.testTimer / 60 <= 0) {
          _this.testFinish();
          clearInterval(testTimerInterval);
          return;
        }
        _this.testTimer--;
      }, 1000);
    },
    timerFormat(time) {
      let sec_num = parseInt(time, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    },
    closeModal() {
      this.onlineTestAnswers = false;
    },
    closeBlockTestResultModal() {
      this.blockTestAnswers = false;
    },
    setTestResultTotals() {
      this.onlineTestResult.forEach((t) => {
        this.testResultTotals.testCount += t.quesCount;
        this.testResultTotals.testAnswerBalls += t.maxBall;
        this.testResultTotals.rightAnswersCount += t.userAnsCount;
        this.testResultTotals.rightAnswersBalls += t.userTestBall;
      });
    },
  },
  mounted() {
    this.selectedSubjectIdItem = this.selectedSubjectId;
    this.testTypeProperty = this.testType;
  },
  created() {
    this.setTimer();
    this.readQuestionsFromStorage();
  },
  watch: {
    selectedSubjectId() {
      this.selectedSubjectIdItem = this.selectedSubjectId;
    },
    testType() {
      this.testTypeProperty = this.testType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/abstracts/variables";

.test {
  background-color: white;
  display: flex;
  align-items: flex-start;
  &__left {
    max-width: 60%;
    width: 100%;
  }
  &__right {
    max-width: 40%;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 15px;
    padding: 10px 20px;
  }
  &__wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__item {
    cursor: pointer;
    background-color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    padding: 10px 15px;
    transition: 0.3s;
    color: #000;
    box-shadow: 0px 0px 10px rgba(2, 64, 51, 0.2);
    border-radius: 0.5rem;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    min-height: 40px;
    &.active {
      background-color: #024033;
      color: #fff;
      box-shadow: 0px 0px 0px rgba(2, 64, 51, 0.2);
    }
  }

  &__body {
    padding: 0 30px;
  }

  &__details {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0;
    width: 100%;
    &-item {
      margin-left: 10px;
      background: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 15px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }
    }

    &-icon {
      margin-right: 12px;
      max-width: 15px;
      max-height: 15px;
      display: flex;
      justify-content: center;
      // overflow: hidden;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }

  &__questions {
  }

  &__photo {
    max-width: 270px;
    max-height: 700px;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__answers {
  }

  &__options {
  }
  .mandatory__btn {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3165cb;
    border-radius: 50%;
    cursor: pointer;
  }
}

@media (max-width: 991px) {
  .test {
    flex-wrap: wrap;
    &__left {
      max-width: 100%;
    }
    &__right {
      max-width: 100%;
      margin-top: 30px;
    }
  }
}
@media (max-width: 576px) {
  .test {
    padding: 0;
    &__body {
      padding: 0;
    }
  }
}
</style>
