<template>
  <section class="py-20" style="background-color: rgb(242 242 242)">
    <div class="container">
      <div class="test">
        <div class="test__left radius">
          <div
            class="test__body"
            v-for="test in rawTests"
            :key="test.id"
            :ref="'test_' + test.id"
          >
            <div class="test__subject">
              <div
                class="test__title bg-white radius"
                style="
                  position: sticky;
                  top: -0.5px;
                  right: 0;
                  left: 0;
                  z-index: 10;
                "
              >
                <div
                  class="d-flex align-center justify-space-between"
                  :class="isDesktopSmall ? 'pa-15' : 'pa-30'"
                >
                  <AppText :size="isMobile ? 14 : 16" weight="600">
                    {{ test.name }}
                  </AppText>
                  <AppText :size="14" weight="400">
                    {{ answeredQuestionsCount(test.id) }} /
                    {{ test?.questions?.length }} savollar
                  </AppText>
                </div>
              </div>
              <div
                class="test__question bg-white radius"
                :class="isDesktopSmall ? 'pa-15' : 'pa-30'"
                v-for="(question, s) in test.questions"
                :key="s"
                :ref="'question_' + test.id + '_' + question.id"
              >
                <span class="test__question-title d-flex mb-10">
                  <AppText
                    class="mr-10"
                    :size="isMobile ? 14 : 16"
                    :line-height="isMobile ? 20 : 28"
                    weight="600"
                  >
                    {{ s + 1 }}.
                  </AppText>
                  <AppText
                    :size="isMobile ? 14 : 16"
                    :line-height="isMobile ? 20 : 28"
                    weight="500"
                  >
                    <span v-html="question.question"></span>
                  </AppText>
                </span>
                <div class="test__answers">
                  <div
                    class="test__answers-title d-flex radius pointer"
                    v-for="(answer, i) in question.answers"
                    @click="selectAnswer(test.id, question.id, i + 1)"
                    :class="{
                      active: alreadySelected(test.id, question.id) === i + 1,
                    }"
                    :key="i"
                  >
                    <AppText
                      :size="isMobile ? 14 : 16"
                      :line-height="isMobile ? 20 : 24"
                      weight="600"
                      class="mr-5"
                    >
                      {{ answerLabels[i] }}.
                    </AppText>
                    <AppText
                      :size="isMobile ? 14 : 14"
                      :line-height="isMobile ? 20 : 24"
                      weight="500"
                    >
                      <span v-html="answer"></span>
                    </AppText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="test__right">
          <div
            class="bg-white radius mb-10"
            :class="isDesktopSmall ? 'pa-10' : 'pa-20'"
          >
            <div class="d-flex justify-space-between align-center">
              <div
                class="d-flex flex-column justify-content-center text-start"
                style="gap: 0.25rem; min-width: 110px"
              >
                <AppText
                  :size="isMobile ? 16 : 24"
                  :line-height="isMobile ? 16 : 24"
                  weight="700"
                  class="color-secondary"
                >
                  {{ timerFormat(testTimer) }}
                </AppText>
                <AppText
                  :size="isMobile ? 12 : 14"
                  :line-height="isMobile ? 12 : 14"
                  weight="500"
                >
                  Qolgan vaqt
                </AppText>
              </div>
              <AppButton
                theme="red"
                :font-size="isMobileSmall ? 14 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                :radius="isMobileSmall ? '8' : '50'"
                :height="isMobileSmall ? '40' : '50'"
                @click="testFinish"
              >
                Tugatish
              </AppButton>
            </div>
          </div>
          <section :style="isDesktopSmall ? 'display:none' : ''">
            <div class="block-pagination__links">
              <div
                class="bg-white radius"
                :class="isDesktopSmall ? 'pa-10' : 'pa-20'"
                v-for="test in rawTests"
                :key="test.id"
              >
                <div>
                  <div class="block-pagination__header mb-10">
                    <div class="d-flex align-center justify-space-between">
                      <AppText
                        class="pointer mr-10"
                        :size="isMobile ? 16 : 18"
                        :line-height="isMobile ? 20 : 28"
                        weight="700"
                        @click.prevent="scrollToTest(test.id)"
                      >
                        {{ test.name }}
                      </AppText>
                      <AppText
                        :size="isMobile ? 14 : 16"
                        :line-height="isMobile ? 20 : 28"
                        weight="600"
                      >
                        {{ test.question_ball }} ball
                      </AppText>
                    </div>
                  </div>
                  <ul>
                    <li
                      class="pqitem"
                      v-for="(question, index) in test.questions"
                      :key="question.id"
                      @click.prevent="scrollToQuestion(test.id, question.id)"
                      :class="{
                        active: alreadySelected(test.id, question.id) !== -1,
                      }"
                    >
                      <a
                        class="pq"
                        :href="'#question_' + (index + 1)"
                        :id="'pq_' + question.id"
                      >
                        {{ index + 1 }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import { mapGetters, mapMutations } from "vuex";
import test from "../../../constants/test";
export default {
  name: "AppTest",
  components: { AppButton },
  data() {
    return {
      questions: [
        {
          questions: [],
          subjectName: null,
        },
      ],

      rawTests: [],
      testTypeProperty: test.TYPE_ONLINE,
      onlineTestResult: [
        {
          science: "Matematika",
          correct_ans: 0,
          incorrect_ans: 0,
          total_ball: 0.0,
          questions: [
            {
              question_id: 9,
              picked: false,
              isTrue: false,
            },
          ],
        },
      ],
      testResultTotals: {
        testCount: 0,
        testAnswerBalls: 0,
        rightAnswersCount: 0,
        rightAnswersBalls: 0,
      },
      testTimer: 0,
      answerLabels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      selectedAnswers: [],
      testFinished: false,
    };
  },
  computed: {
    ...mapGetters(["testType"]),
  },

  methods: {
    ...mapMutations([]),
    scrollToTest(testId) {
      const testElement = this.$refs["test_" + testId][0];
      if (testElement) {
        testElement.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToQuestion(testId, questionId) {
      const questionElement =
        this.$refs["question_" + testId + "_" + questionId][0];
      if (questionElement) {
        questionElement.scrollIntoView({ behavior: "smooth" });
      }
    },

    readQuestionsFromStorage() {
      let questions = JSON.parse(localStorage.getItem("questions"));
      let parametersModel = {
        id: 1,
        name: questions.name,
        question_ball: questions.ball,
        questions: questions.questions.map((question) => {
          return {
            id: question.id,
            question: question.question,
            answers: [
              question.answer1,
              question.answer2,
              question.answer3,
              question.answer4,
            ],
          };
        }),
      };
      this.rawTests.push(parametersModel);
    },
    alreadySelected(testId, questionId) {
      let examEntry = this.selectedAnswers.find(
        (entry) => entry.exam_id === testId
      );
      if (examEntry) {
        let questionEntry = examEntry.questions.find(
          (q) => q.question_id === questionId
        );
        return questionEntry ? questionEntry.answer : -1;
      }
      return -1;
    },
    selectAnswer(testId, questionId, answerKey = null) {
      let examEntry = this.selectedAnswers.find(
        (entry) => entry.exam_id === testId
      );
      if (examEntry) {
        let questionEntry = examEntry.questions.find(
          (q) => q.question_id === questionId
        );
        if (questionEntry) {
          questionEntry.answer = answerKey;
        } else {
          examEntry.questions.push({
            question_id: questionId,
            answer: answerKey,
          });
        }
      } else {
        this.fillSelectedAnswersArray(testId, questionId, answerKey);
      }
      localStorage.removeItem("answers");
      localStorage.setItem("answers", JSON.stringify(this.selectedAnswers));
    },
    fillSelectedAnswersArray(testId, questionId, answerKey = null) {
      let model = {
        exam_id: testId,
        questions: [
          {
            question_id: questionId,
            answer: answerKey,
          },
        ],
      };
      this.selectedAnswers.push(model);
    },
    answeredQuestionsCount(testId) {
      const examEntry = this.selectedAnswers.find(
        (entry) => entry.exam_id === testId
      );
      return examEntry ? examEntry.questions.length : 0;
    },
    testFinish() {
      try {
        let answers = JSON.parse(localStorage.getItem("answers"));
        let questions = JSON.parse(localStorage.getItem("questions"));
        switch (this.testTypeProperty) {
          case test.TYPE_BLOCK:
            this.subjectTestResults(answers);
            return;
          case test.TYPE_SCHOOL:
            this.subjectTestResults(answers);
            return;
          case test.TYPE_ONLINE:
            this.onlineTestResults(questions, answers);
            return;
          default:
            return null;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.testFinished = true;
      }
    },
    onlineTestResults(questions, answers) {
      const additionalData = {
        started_time: "2023-09-09 22:02:20",
        finished_time: "2021-09-09 22:05:30",
      };
      if (!answers) {
        answers = [];
      }
      this.completeAnswers(questions, answers);
      answers.push(additionalData);
      this.$http
        .post(`tests/exam-tests/done/`, answers)
        .then((res) => {
          if (res) {
            this.onlineTestResult = res;
            localStorage.setItem(
              "testResult",
              JSON.stringify(this.onlineTestResult)
            );
            this.$router.push({ name: "result-test" });
          }
        })
        .catch((err) => {
          this.errorNotification(err.response.data.message);
        });
    },
    subjectTestResults(answers) {
      this.$http
        .post(`main/BlockTest/TestDone`, {
          answers,
        })
        .then((res) => {
          if (res) {
            this.blockTestAnswers = true;
            this.onlineTestResult = res.result;
            this.setTestResultTotals();
          }
        })
        .catch((err) => {
          this.errorNotification(err.response.data.message);
        });
    },

    setTimer() {
      let _this = this;
      this.testTimer = parseInt(localStorage.getItem("testTime"));
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

    completeAnswers(questions, answers) {
      console.log(answers);
      if (answers === null || answers === undefined) {
        answers = [];
      }
      questions.forEach((questionItem) => {
        let foundExam = answers.find(
          (answerItem) => answerItem.exam_id === questionItem.id
        );
        if (!foundExam) {
          foundExam = {
            exam_id: questionItem.id,
            questions: [],
          };
          answers.push(foundExam);
        }
        questionItem.questions.forEach((q) => {
          let foundQuestion = (foundExam.questions || []).find(
            (a) => a.question_id === q.id
          );
          if (!foundQuestion) {
            foundExam.questions.push({
              question_id: q.id,
              answer: null,
            });
          }
        });
      });
      return answers;
    },
    parseQuestion(question) {
      const formatMappings = [
        { search: /\\ldots/g, replace: "..." },
        { search: /\\par\s+/g, replace: "<br>" },
        { search: /~/g, replace: " " },
        { search: /{\\bf(.*?)}/g, replace: "<strong>$1</strong>" },
        { search: /\\textit{(.*?)}/g, replace: "<i>$1</i>" },
        {
          search: /\\frac{(.*?)}{(.*?)}/g,
          replace: "<sup>$1</sup>&frasl;<sub>$2</sub>",
        },
        { search: /\^(.*?)}{(.*?)}/g, replace: "<sup>$1</sup>" },
        { search: /\\begin{table}/g, replace: "<table>" },
        { search: /\\end{table}/g, replace: "</table>" },
        { search: /\\begin{tabular}/g, replace: "<tbody>" },
        { search: /\\end{tabular}/g, replace: "</tbody>" },
        { search: /\\begin{figure}/g, replace: "" },
        { search: /\\end{figure}/g, replace: "" },
        {
          search: /\\includegraphics\[.*?\]{(.*?)}/g,
          replace: "<img src='$1' alt='Image'>",
        },
      ];
      let processed = question;
      formatMappings.forEach((mapping) => {
        processed = processed.replace(mapping.search, mapping.replace);
      });
      return processed;
    },
  },
  watch: {
    testType() {
      this.testTypeProperty = this.testType;
    },
  },
  mounted() {
    this.testTypeProperty = this.testType;
    let storedAnswers = localStorage.getItem("answers");
    if (storedAnswers) {
      this.selectedAnswers = JSON.parse(storedAnswers);
    }
  },
  created() {
    this.setTimer();
    this.readQuestionsFromStorage();
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/abstracts/variables";

.test {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  gap: 2rem;
  &__left {
    height: calc(100vh - 130px);
    flex-grow: 1;
    overflow: auto;
    order: 1;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__right {
  }
  &__body {
  }
  &__subject {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
  &__title {
    box-shadow: 0px 10px 13px rgba(17, 38, 146, 0.05);
  }
  &__question {
    &-title {
    }
  }
  &__answers {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    &-title {
      background-color: rgb(245, 247, 249);
      padding: 0.75rem 1rem;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.15s;
      font-style: italic;

      &:hover {
        background-color: rgba(0, 76, 151, 0.08);
      }
      &.active {
        background-color: #004c97;
        color: #fff !important;
      }
    }
  }
  &__wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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
  .block-pagination {
    &__links {
      display: grid;
      gap: 0.75rem;
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          color: #004c97;
          background-color: rgba(0, 76, 151, 0.08);
          border-radius: 10px;
          -webkit-transition: all 0.1s ease;
          transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          overflow: hidden;
          &:hover {
            background-color: #004c97;
            color: #fff;
            border: none;
          }
          &.active {
            background-color: #004c97;
            color: #fff;
            border: none;
          }
          a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
    &__subject {
    }
    &__header {
      color: #004c97 !important;
    }
  }
}

@media (min-width: 1024px) {
  .test {
    align-items: flex-start;
    flex-direction: row;
    &__left {
      width: 70%;
      position: sticky;
      top: 104px;
      order: 0;
    }
    &__right {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      width: 30%;
      height: calc(100vh - 130px);
      section {
        overflow-y: auto;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>
