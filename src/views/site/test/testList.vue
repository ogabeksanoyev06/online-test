<template>
  <div
    class="test__body"
    id="test_solving_component"
    style="padding-left: 40px; padding-right: 40px"
  >
    <div v-for="(test, key) in testList" :key="key" class="mb-30">
      <div class="test__questions mb-30 mt-30">
        <AppText
          :size="isMobileSmall ? 16 : 20"
          :line-height="isMobileSmall ? 24 : 28"
          class="mb-20"
        >
          <span v-html="test.qustion" class="mr-5"></span>
          <span>
            <strong>savolId: {{ test.id }}</strong>
          </span>
        </AppText>
      </div>

      <div class="test__answers">
        <AppText
          :size="isMobileSmall ? 14 : 18"
          :line-height="isMobileSmall ? 20 : 26"
          class="mb-30 color-text"
          weight="700"
        >
          Javoblar:
        </AppText>

        <div class="test__options">
          <AppRadio
            :key="0"
            :value="1"
            :radio-value="1"
            :label="'A'"
            :name="'name'"
            :string="test.ans1"
            :imgPath="''"
            @input="$emit('input', $event)"
            :horizontal="false"
            :white="false"
          >
          </AppRadio>
          <AppRadio
            :key="1"
            :value="2"
            :radio-value="2"
            :label="'B'"
            :name="'name'"
            :string="test.ans2"
            :imgPath="''"
            @input="$emit('input', $event)"
            :horizontal="false"
            :white="false"
          >
          </AppRadio>
          <AppRadio
            :key="2"
            :value="3"
            :radio-value="3"
            :label="'C'"
            :name="'name'"
            :string="test.ans3"
            :imgPath="''"
            @input="$emit('input', $event)"
            :horizontal="false"
            :white="false"
          >
          </AppRadio>
          <AppRadio
            :key="3"
            :value="4"
            :radio-value="4"
            :label="'D'"
            :name="'name'"
            :string="test.ans4"
            :imgPath="''"
            @input="$emit('input', $event)"
            :horizontal="false"
            :white="false"
          >
          </AppRadio>
          <AppRadio
            :key="4"
            :value="5"
            :radio-value="5"
            :label="'E'"
            :name="'name'"
            :string="test.ans5"
            :imgPath="''"
            @input="$emit('input', $event)"
            :horizontal="false"
            :white="false"
          >
          </AppRadio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppRadio from "../../../components/shared-components/AppRadio";

export default {
  name: "Test_solving",
  components: {
    AppRadio,
  },
  data() {
    return {
      radio: "A",
      options: [
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
        maxBall: null,
        quesCount: null,
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
      answerLabels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      subjectId: null,
      testList: [
        {
          id: null,
          qustion: null,
          ans1: null,
          ans2: null,
          ans3: null,
          ans4: null,
          ans5: null,
          testKey: null,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["selectedQuestionIndex"]),
  },
  methods: {
    async getAllTest() {
      await this.$api
        .get("main/BlockTest/AllTest?subjectId=" + this.subjectId)
        .then((data) => {
          if (!data.error) {
            this.testList = data.result;
          }
        })
        .catch((error) => {
          this.errorMes = error.response.data.error.message;
        });
    },
    selectQuestion() {
      this.setInitialSelectedQuestion();
      this.selectedQuestion.number = this.selectedQuestionIndex + 1;
    },
    setInitialSelectedQuestion() {
      this.questions = this.questionsProp;
      if (this.questions && this.questions.questions.length > 0) {
        this.selectedQuestion =
          this.questions.questions[this.selectedQuestionIndex];
        this.setAnswers(
          this.selectedQuestion.answers,
          this.selectedQuestion.id
        );
        this.parseImage(this.selectedQuestion.question);
      }
    },
    parseImage(question) {
      try {
        if (question.includes("\\par \\includegraphics")) {
          let questionParts = question.split("\\par \\includegraphics");
          this.selectedQuestion.question = questionParts[0];
          let imageParts = questionParts[1].split("{");
          this.selectedQuestion.questionImage = imageParts[1]
            .replace("}", "")
            .toLowerCase();
        }
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
    setAnswers(answers, questionId) {
      this.options = [];
      answers.forEach((a, key) => {
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
    this.setMathPlugin();
    this.subjectId = this.$route.params.subject_id;
    this.getAllTest();
  },
  updated() {
    this.setMathPlugin();
  },
};
</script>

<style scoped></style>
