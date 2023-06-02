<template>
  <section class="py-20">
    <div class="container">
      <div class="">
        <div class="test">
          <div class="test__top">
            <div class="mandatory__btn">
              <svg
                stroke="#fff"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style="font-size: 1.5rem !important"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                  fill="#fff"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <!-- <div class="test__top-container">
              <div class="test__top-item mr-10">
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
                    v-for="(mandatory, index) in 2"
                    :key="index"
                    :class="
                      selectedSubjectIdItem === mandatory.id ? 'active' : ''
                    "
                  >
                    Matematika
                  </button>
                </div>
              </div>
              <div class="test__top-item" v-if="testTypeProperty === 'online'">
                <AppText size="14" line-height="26" weight="700">
                  Asosiy fanlar
                </AppText>
                <div class="test__wrap">
                  <button
                    class="test__item"
                    :class="selectedSubjectIdItem === main.id ? 'active' : ''"
                    @click="selectSubjectQuestions(main.id)"
                    v-for="(main, index) in 3"
                    :key="index"
                  >
                    O'zbekiston tarixi
                  </button>
                </div>
              </div>
            </div> -->
            <div
              class="test__details-item"
              style="
                box-shadow: none;
                margin-left: auto;
                cursor: unset;
                font-size: 1.7rem;
                max-width: 200px;
                width: 100%;
                border: 1px solid #00b74a;
                color: #00b74a;
              "
            >
              <span> 12 : 00 : 45 </span>
            </div>
          </div>

          <Test_solving :questions-prop="rawTests"></Test_solving>
          <div class="test__bottom">
            <!-- <div class="test__bottom-wrap">
              <AppButton
                theme="main"
                sides="20"
                style="margin-right: 11px"
                @click="previousQuestion"
              >
                Oldingi
              </AppButton>
              <AppButton theme="secondary" sides="20" @click="nextQuestion">
                Keyingi
              </AppButton>
            </div> -->
            <div class="test__details">
              <div class="test__details-left"></div>
              <div class="test__details-right">
                <div class="test__details-item">
                  <div class="test__details-icon">
                    <img src="/icons/pause.svg" alt="" />
                  </div>
                  <AppText
                    size="14"
                    line-height="26"
                    weight="700"
                    class="color-secondary"
                  >
                    Tanaffus
                  </AppText>
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
    </div>
  </section>
</template>

<script>
// import AppButton from "../../../components/shared-components/AppButton";
import Test_solving from "../../../components/test-solving/Test_solving";
import { mapGetters, mapMutations } from "vuex";
// import AppModal from "../../../components/shared-components/AppModal";
// import "../../../assets/styles/pages/cabinet.scss";
import test from "../../../constants/test";

export default {
  name: "AppTest",
  components: { Test_solving },
  data() {
    return {
      questions: [
        {
          maxBall: null,
          quesCount: null,
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
      this.setSelectedSubjectId(subjectId);
      this.setSelectedSubjectIdMixin(subjectId);
      let index = this.questions.findIndex((q) => q.id === subjectId);
      if (index === -1) return;
      this.rawTests = this.questions[index];
      this.setCurrentSubjectQuestionCount(this.rawTests.quesCount);
    },
    readQuestionsFromStorage() {
      let questions = JSON.parse(localStorage.getItem("questions"));
      if (questions.length > 0) {
        this.questions = questions;
        this.rawTests = questions[this.questionsInitialIndex()];
        this.setCurrentSubjectQuestionCount(this.rawTests.quesCount);
        this.mandatorySubjectsQuestions = [];
        this.mainSubjectsQuestions = [];
        this.questions.forEach((q, index) => {
          if (index <= 2) {
            this.mandatorySubjectsQuestions.push(q);
          } else {
            this.mainSubjectsQuestions.push(q);
          }
        });
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
    nextQuestion() {
      if (this.selectedQuestionIndex === this.rawTests.questions.length - 1)
        return null;
      let nextQuestionIndex = this.selectedQuestionIndex + 1;
      this.setSelectedQuestionIndex(nextQuestionIndex);
      this.setQuestionIndexToStorage(nextQuestionIndex);
    },
    previousQuestion() {
      if (this.selectedQuestionIndex === 0) return null;
      let prevQuestionIndex = this.selectedQuestionIndex - 1;
      this.setSelectedQuestionIndex(prevQuestionIndex);
      this.setQuestionIndexToStorage(prevQuestionIndex);
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
      this.$api.post(`main/BlockTest/TestDone`, answers).then((res) => {
        if (!res.error) {
          this.blockTestAnswers = true;
          this.onlineTestResult = res.result;
          this.setTestResultTotals();
        }
      });
    },
    onlineTestResults(answers) {
      this.$api.post(`main/ExamTest/DoneTest`, answers).then((res) => {
        if (!res.error) {
          this.onlineTestAnswers = true;
          this.onlineTestResult = res.result;
          this.setTestResultTotals();
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
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(70, 93, 122, 0.08);

  &__top {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);

    &-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  &__wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 40px;
  }

  &__item {
    cursor: pointer;
    background-color: white;
    font-family: "Gilroy", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    padding: 10px 15px;
    transition: 0.3s;
    color: #000;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);

    border-radius: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;

    &.active {
      background-color: white;
      color: $text-color-default;
      font-weight: 700;
      border-color: $color-secondary;
    }
  }

  &__body {
    padding: 30px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 30px 20px;

    &-wrap {
      display: flex;
      align-items: center;
      margin: 10px 20px 10px 0;
    }
  }

  &__details {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 10px 0;
    width: 100%;

    &-left {
    }

    &-right {
      margin-left: auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    &-item {
      margin-left: 10px;
      background: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
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

@media (max-width: 900px) {
  .test__top {
    .test__details-item {
      margin-left: 0 !important;
      // padding: 0;
      margin-bottom: 0;
    }

    &-item {
      &:first-child {
        margin-bottom: 10px;
      }
    }

    .test__wrap {
      margin-right: 0;
    }

    &-container {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}

.test__item:hover {
  border-color: #00d06c;
}

.test-answer__modal {
  thead {
    td {
      min-width: 90px;
    }
  }
}

.border-bottom {
  border-bottom: 1px solid $border-color;
}

.border-left {
  border-left: 1px solid $border-color !important;
}

.vertical-mode {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}

.border-bottom-none {
  border-bottom: none !important;
}
</style>
