<template>
  <div>
    <AppRadio
      v-for="(option, i) in options"
      :key="i"
      :value="i + 1"
      :radio-value="option.radioValue"
      :label="option.label"
      :name="name"
      :string="option.string"
      :imgPath="option.imgPath"
      @input="$emit('input', $event)"
      @change="selectAnswer(option.questionId, i + 1)"
      :checked-prop="i + 1 === alreadySelected(option.questionId)"
      :horizontal="horizontal"
      :white="white"
    >
    </AppRadio>
  </div>
</template>

<script>
import AppRadio from "../../components/shared-components/AppRadio";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { AppRadio },
  props: {
    value: {
      type: [String, Number, Boolean],
    },

    horizontal: {
      type: Boolean,
      default: false,
    },

    white: {
      type: Boolean,
      default: false,
    },

    options: {
      type: Array,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedAnswers: [],
    };
  },
  computed: {
    ...mapGetters(["selectedQuestionIndex", "currentSubjectQuestionCount"]),
  },
  methods: {
    ...mapMutations(["setSelectedQuestionIndex"]),
    alreadySelected(questionId) {
      let examEntry = this.selectedAnswers.find(
        (entry) =>
          entry.exam_id === parseInt(localStorage.getItem("exam_id")) &&
          entry.directionId === parseInt(localStorage.getItem("directionId"))
      );
      if (examEntry) {
        let questionEntry = examEntry.questions.find(
          (q) => q.question_id === questionId
        );
        return questionEntry ? questionEntry.answer : -1;
      }
      return -1;
    },
    selectAnswer(questionId, answerKey) {
      let examEntry = this.selectedAnswers.find(
        (entry) =>
          entry.exam_id === parseInt(localStorage.getItem("exam_id")) &&
          entry.directionId === parseInt(localStorage.getItem("directionId"))
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
        this.fillSelectedAnswersArray(questionId, answerKey);
      }
      localStorage.removeItem("answers");
      localStorage.setItem("answers", JSON.stringify(this.selectedAnswers));
      this.goToNextQuestion();
    },
    fillSelectedAnswersArray(questionId, answerKey) {
      let model = {
        exam_id: parseInt(localStorage.getItem("exam_id")),
        directionId: parseInt(localStorage.getItem("directionId")),
        started_time: "2023-09-09 22:02:20",
        finished_time: "2021-09-09 22:05:30",
        questions: [
          {
            question_id: questionId,
            answer: answerKey,
          },
        ],
      };

      this.selectedAnswers.push(model);
    },
    readSelectedAnswersFromAppStorage() {
      let storedAnswers = JSON.parse(localStorage.getItem("answers"));
      if (storedAnswers && storedAnswers.length > 0) {
        this.selectedAnswers = storedAnswers;
      }
    },
    goToNextQuestion() {
      if (this.currentSubjectQuestionCount - 1 === this.selectedQuestionIndex)
        return null;
      let _this = this;
      setTimeout(() => {
        let selectedQuestionIndex = parseInt(_this.selectedQuestionIndex + 1);
        this.setSelectedQuestionIndex(selectedQuestionIndex);
        this.setQuestionIndexToStorage(selectedQuestionIndex);
      }, 300);
    },
  },
  mounted() {
    this.readSelectedAnswersFromAppStorage();
  },
};
</script>
