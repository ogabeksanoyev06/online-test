<template>
  <div class="test__body" id="test_solving_component">
    <TestPagination class="mb-10" :questions-prop="questions.questions" />
    <div class="test__questions mb-30">
      <AppText
        :size="isMobileSmall ? 16 : 16"
        :line-height="isMobileSmall ? 24 : 24"
        class="mb-20"
      >
        <span id="test_question">
          <b>1.</b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, neque?
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
      maxBall: 0,
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
      questionHtml: null,
      reserved: null,
    };
  },
  computed: {
    ...mapGetters(["selectedQuestionIndex"]),
  },
  methods: {},
  mounted() {},
  watch: {},
  updated() {},
  created() {
    console.log(" here baby ist me");
  },
};
</script>

<style></style>
