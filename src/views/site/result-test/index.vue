<template>
  <div class="py-20" style="background-color: rgb(242 242 242)">
    <div class="container">
      <div class="results">
        <div
          class="d-flex"
          style="gap: 1.25rem"
          :class="isMobileMedium ? 'flex-column' : 'flex-row'"
        >
          <div
            class="results__left bg-white radius"
            :class="isMobileMedium ? 'pa-10' : 'pa-20'"
          >
            <div>
              <div class="text-center mb-20">
                <AppText
                  :size="isMobile ? 16 : 20"
                  :line-height="isMobile ? 20 : 26"
                  weight="700"
                  class="mb-10"
                >
                  Sinov imtihoni
                </AppText>
                <AppText
                  :size="isMobile ? 14 : 16"
                  :line-height="isMobile ? 20 : 22"
                  weight="500"
                >
                  <span class="bold-text color-main"> Ogʻabek Sanoyev, </span>
                  ushbu imtihondagi sizning natijalaringiz:
                </AppText>
              </div>
              <ul class="mb-30">
                <li
                  class="d-flex justify-content-center align-center flex-column text-center"
                >
                  <AppText
                    :size="isMobile ? 24 : 32"
                    :line-height="isMobile ? 30 : 38"
                    weight="600"
                    class="color-green"
                  >
                    {{ totalCorrectAnswers() }}
                  </AppText>
                  <AppText :size="14" :line-height="20" weight="400">
                    To'g'ri javoblar
                  </AppText>
                </li>
                <li
                  class="d-flex justify-content-center align-center flex-column text-center"
                >
                  <AppText
                    :size="isMobile ? 24 : 32"
                    :line-height="isMobile ? 30 : 38"
                    weight="600"
                    class="color-orange"
                  >
                    {{ parseFloat(totalScore().toFixed(1)) }}
                  </AppText>
                  <AppText :size="14" :line-height="20" weight="400">
                    Umumiy ball
                  </AppText>
                </li>
                <li
                  class="d-flex justify-content-center align-center flex-column text-center"
                >
                  <AppText
                    :size="isMobile ? 24 : 32"
                    :line-height="isMobile ? 30 : 38"
                    weight="600"
                    class="color-red"
                  >
                    10 <span style="font-size: 14px">min</span>
                  </AppText>
                  <AppText :size="14" :line-height="20" weight="400">
                    Ketkazilgan vaqt
                  </AppText>
                </li>
              </ul>
              <div class="results__answers">
                <div
                  v-for="(subject, index) in testResult"
                  :key="index"
                  class="results__answers-list bg-white radius bordered"
                  :class="
                    isMobileSmall ? 'pa-10' : isMobile ? 'pa-20' : 'pa-30'
                  "
                >
                  <div
                    class="d-flex align-center justify-space-between flex-wrap gap-10 mb-10"
                  >
                    <AppText
                      :size="16"
                      :line-height="20"
                      weight="600"
                      class="color-green"
                    >
                      {{ subject.science }}
                    </AppText>
                    <AppText
                      :size="18"
                      :line-height="24"
                      weight="600"
                      class="color-orange"
                    >
                      {{ parseFloat(subject.total_ball.toFixed(1)) }} ball
                    </AppText>
                  </div>
                  <div class="d-flex flex-wrap gap-8" style="max-width: 576px">
                    <div
                      class="results__answers-item"
                      v-for="(answer, i) in subject.questions"
                      :key="answer.id"
                      :title="getAnswerTitle(answer)"
                      :class="getAnswerClass(answer)"
                    >
                      {{ i + 1 }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="results__right">
            <!-- <AppText
              :size="isMobile ? 16 : 20"
              :line-height="isMobile ? 20 : 26"
              weight="600"
              class="mb-10"
            >
              Ushbu natija bilan qaysi OTM talabasi bo'lishingiz mumkin
            </AppText> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "result-test",
  data() {
    return { testResult: null };
  },
  methods: {
    fetchTestResult() {
      const storedResult = localStorage.getItem("testResult");
      if (storedResult) {
        this.testResult = JSON.parse(storedResult);
      }
    },
    getAnswerTitle(answer) {
      if (answer.picked && answer.isTrue) return "To`g`ri";
      if (answer.picked && !answer.isTrue) return "Xato";
      if (!answer.picked) return "Belgilanmagan";
    },
    getAnswerClass(answer) {
      if (answer.picked && answer.isTrue) return "green";
      if (answer.picked && !answer.isTrue) return "red";
      return "gray";
    },
    totalCorrectAnswers() {
      let count = 0;
      this.testResult?.forEach((subject) => {
        count += subject.questions.filter((q) => q.picked && q.isTrue).length;
      });
      return count;
    },
    totalScore() {
      let total = 0;
      if (this.testResult) {
        this.testResult.forEach((s) => {
          total += s.total_ball;
        });
      }
      return total;
    },
  },
  mounted() {
    this.fetchTestResult();
    localStorage.removeItem("questions");
    localStorage.removeItem("answers");
    localStorage.removeItem("testTime");
    localStorage.removeItem("testType");
    localStorage.removeItem("science_id");
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.results {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  &__left {
    ul {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      li {
        gap: 0.25rem;
      }
    }
    .results__answers {
      display: flex;
      flex-direction: column;
      gap: 20px;
      &-list {
      }
      &-item {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #200343;
        color: #fff;
        border-radius: 0.5rem;
        &.green {
          background-color: #28a745; // yoki siz istagan yashil rang
        }
        &.red {
          background-color: #dc3545; // yoki siz istagan qizil rang
        }
        &.gray {
          background-color: #6c757d; // yoki siz istagan kulrang
        }
      }
    }
  }
  &__right {
  }
}
@media (min-width: 768px) {
  .results {
    &__left {
      width: 70%;
    }
    &__right {
      width: 30%;
    }
  }
}
@media (max-width: 576px) {
  .results {
    &__left {
      ul {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
        li {
          gap: 0.25rem;
        }
      }
    }
    &__right {
    }
  }
}
</style>
