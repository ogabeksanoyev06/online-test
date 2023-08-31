<template>
  <div class="pagination">
    <div class="pagination__wrap">
      <button
        class="pagination__item"
        :class="selectedQuestionIndexItem === index ? 'active' : ''"
        v-for="(item, index) in questions"
        :key="index"
        @click="selectQuestion(index)"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TestPagination",
  props: {
    questionsProp: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      questions: [],
      selectedQuestionIndexItem: null,
    };
  },
  computed: {
    ...mapGetters(["selectedQuestionIndex"]),
  },
  methods: {
    ...mapMutations(["setSelectedQuestionIndex"]),
    selectQuestion(questionIndex) {
      this.setSelectedQuestionIndex(questionIndex);
      this.selectedQuestionIndexItem = questionIndex;
      this.setQuestionIndexToStorage(questionIndex);
    },
  },
  mounted() {
    this.questions = this.questionsProp;
    this.selectedQuestionIndexItem = this.selectedQuestionIndex;
  },
  watch: {
    questionsProp() {
      this.questions = this.questionsProp;
    },
    selectedQuestionIndex() {
      this.selectedQuestionIndexItem = this.selectedQuestionIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/abstracts/variables";

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &__wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  &__item {
    width: 40px;
    height: 40px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: $text-color-default;
    background-color: white;
    border: 1px solid #e5ecf5;
    border-radius: 10px;
    margin: 4px 4px 4px 0;
    cursor: pointer;

    &:hover {
      background-color: $color-main;
      color: white;
    }

    &.active {
      background-color: $color-main;
      color: white;
    }

    &.disabled {
      background: #f5f9fd;
      color: $color-text;
      border-color: transparent;
      pointer-events: none;
    }
  }
}
</style>
