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
      let alreadySelected = this.selectedAnswers.findIndex(
        (sa) => sa.questionId === questionId
      );
      if (alreadySelected !== -1) {
        return this.selectedAnswers[alreadySelected].answer;
      }
      return -1;
    },
    selectAnswer(questionId, answerKey) {
      let alreadySelected = this.selectedAnswers.findIndex(
        (sa) => sa.questionId === questionId
      );
      if (alreadySelected !== -1) {
        this.selectedAnswers[alreadySelected].answer = answerKey;
      } else {
        this.fillSelectedAnswersArray(questionId, answerKey);
      }
      localStorage.removeItem("answers");
      localStorage.setItem("answers", JSON.stringify(this.selectedAnswers));
      this.goToNextQuestion();
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
    fillSelectedAnswersArray(questionId, answerKey) {
      let model = {};
      model.questionId = questionId;
      model.answer = answerKey;
      this.selectedAnswers.push(model);
    },
    readSelectedAnswersFromAppStorage() {
      let selectedAnswers = JSON.parse(localStorage.getItem("answers"));
      if (selectedAnswers && selectedAnswers.length > 0) {
        this.selectedAnswers = [];
        selectedAnswers.forEach((selectedAnswer) => {
          this.fillSelectedAnswersArray(
            selectedAnswer.questionId,
            selectedAnswer.answer
          );
        });
      }
    },
  },
  mounted() {
    this.readSelectedAnswersFromAppStorage();
  },
};
</script>
