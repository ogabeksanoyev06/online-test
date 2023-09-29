<template>
  <div class="test__body" id="test_solving_component">
    <TestPagination class="mb-10" :questions-prop="questions.questions" />
    <div class="test__questions mb-30">
      <AppText
        :size="isMobileSmall ? 14 : 16"
        :line-height="isMobileSmall ? 20 : 22"
        class="mb-20"
      >
        <span id="test_question" v-html="reserved" style="font-weight: 500">
        </span>
      </AppText>
      <div class="test__photo">
        <img src="/images/math.jpg" alt="" />
      </div>
    </div>
    <div class="test__answers">
      <div class="test__options">
        <AppRadioGroup :options="options" name="roundTrip" v-model="radio" />
      </div>
    </div>
  </div>
</template>

<script>
import AppRadioGroup from "../shared-components/AppRadioGroup";
import TestPagination from "../shared-components/TestPagination";
import { mapGetters } from "vuex";

export default {
  name: "Test_solving",
  components: { AppRadioGroup, TestPagination },
  props: {
    questionsProp: {
      id: null,
      quesCount: 0,
      questions: [],
      subjectName: null,
    },
    nextQuestionProp: {
      type: Number,
      default: 0,
    },
    prevQuestionProp: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      radio: "A",
      options: [
        {
          label: "A",
          radioValue: "A",
          string: "Lb = 2La",
          imgPath: "/images/math.jpg",
        },
        {
          label: "B",
          radioValue: "B",
          string: "Lb = 2La",
          imgPath: "/images/math.jpg",
        },
        {
          label: "C",
          radioValue: "C",
          string: "Lb = 2La",
          imgPath: "/images/math.jpg",
        },
        {
          label: "D",
          radioValue: "D",
          string: "Lb = 2La",
          imgPath: "/images/math.jpg",
        },
      ],
      questions: {
        questions: [],
        subjectName: null,
        selectedSubjectId: 0,
        selectedQuestionId: null,
      },
      selectedQuestion: {
        id: 0,
        number: 1,
        question: null,
        answers: [],
        questionImage: null,
      },
      answers: [],
      answerLabels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      questionHtml: null,
      reserved: null,
    };
  },
  computed: {
    ...mapGetters(["selectedQuestionIndex"]),
  },
  methods: {
    selectQuestion() {
      this.selectedQuestion.number = this.selectedQuestionIndex + 1;
      this.setInitialSelectedQuestion();
    },
    async setInitialSelectedQuestion() {
      this.questions = this.questionsProp;
      if (this.questions && this.questions.questions.length > 0) {
        this.selectedQuestion =
          this.questions.questions[this.selectedQuestionIndex];
        this.reserved = this.selectedQuestion.question;
        this.reserved = this.parseQuestion(this.reserved);
        this.setAnswers(
          this.selectedQuestion.answers,
          this.selectedQuestion.id
        );
        this.parseImage(this.selectedQuestion.question);
      }
    },
    parseQuestion(question) {
      let dotsRemoved = question.replaceAll("\\ldots", "...");
      let newLineInserted = dotsRemoved.replaceAll("\\par ", "<br>");
      let spaces = newLineInserted.replaceAll("~", " ");
      let parseBold = this.parseBold(spaces);
      return parseBold;
    },
    parseBold(string) {
      let question = string;
      if (string.includes("{\\bf")) {
        let leftSideReplaced = string.replace("{\\bf", "<strong>");
        question = leftSideReplaced.replace("}", "</strong>");
        return this.parseBold(question);
      }
      return question;
    },
    parseImage(question) {
      try {
        if (question.includes("\\includegraphics")) {
          let questionParts = question.split("\\includegraphics");
          this.selectedQuestion.question = questionParts[0];
          let imagePartsLeft = questionParts[1].split("{");
          let imagePartsRight = imagePartsLeft[1].split("}");
          this.selectedQuestion.questionImage =
            imagePartsRight[0].toLowerCase();
          this.selectedQuestion.question =
            questionParts[0] + " " + imagePartsRight[1];
        }
      } catch (e) {
        //
      }
    },
    setAnswers(answers, questionId) {
      this.options = [];
      answers.forEach(async (a, key) => {
        let answerModel = {
          label: this.answerLabels[key],
          radioValue: key + 1,
          string: a,
          imgPath: "",
          questionId: questionId,
        };
        if (a.includes("\\par \\includegraphics")) {
          let questionParts = answerModel.label.split(
            "\\par \\includegraphics"
          );
          answerModel.string = questionParts[0];
          let imageParts = questionParts[1].split("{");
          answerModel.imgPath =
            this.baseURL +
            "testimages/" +
            imageParts[1].replace("}", "").toLowerCase();
        } else if (a.includes("\\includegraphics")) {
          let questionParts = a.split("\\includegraphics");
          answerModel.string = questionParts[0];
          let imageParts = questionParts[1].split("{");
          answerModel.imgPath =
            this.baseURL +
            "testimages/" +
            imageParts[1].replace("}", "").toLowerCase();
        }
        this.options.push(answerModel);
      });
    },
  },
  mounted() {
    this.selectQuestion();
  },
  watch: {
    questionsProp: {
      handler() {
        this.selectQuestion();
      },
      deep: true,
    },
    selectedQuestionIndex() {
      this.selectQuestion();
    },
  },
  updated() {},
  created() {
    console.log(" here baby ist me");
  },
};
</script>

<style></style>
