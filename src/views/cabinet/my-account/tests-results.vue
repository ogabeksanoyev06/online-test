<template>
  <div class="tests-results">
    <div class="table-block mb-30 table-hover">
      <table class="hoverTable">
        <thead>
          <tr>
            <th>№</th>
            <th>Test turi</th>
            <th>Boshlangan vaqti</th>
            <th>Yakunlangan vaqti</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in testResults"
            :key="idx"
            class="text-center"
            :class="selectedIndex === item.id ? 'selected-row' : ''"
            @click="selectSubjectList(item)"
          >
            <td>{{ idx + 1 }}</td>
            <td>{{ item.type }}</td>
            <td>{{ $moment(item.started).format("YYYY-MM-DD HH:mm:ss") }}</td>
            <td>{{ $moment(item.finished).format("YYYY-MM-DD HH:mm:ss") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="mb-15 text-center"
      v-if="selectedSubjectList && selectedSubjectList.length > 0"
    >
      <span>
        <strong>
          Tanlgangan test turi boyicha natijalar -
          <span style="color: #119c75"> {{ selectedTestType }} test </span>
        </strong>
      </span>
    </div>
    <div class="table-block">
      <table>
        <thead>
          <tr>
            <th colspan="3">Test</th>
            <th colspan="2">Natija</th>
          </tr>
          <tr style="background-color: white">
            <th>Soni</th>
            <th>Fan</th>
            <th>Maks. bali</th>
            <th>To'g'ri javob</th>
            <th>To'plagan bali</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in selectedSubjectList"
            :key="idx"
            class="text-center"
          >
            <td>{{ item.question_count }}</td>
            <td>{{ item.science }}</td>
            <td>{{ currencyFormat(item.max_ball) }}</td>
            <td>{{ item.correct_answers }}</td>
            <td>{{ currencyFormat(item.total_ball) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "tests-results",
  data() {
    return {
      testResults: [
        {
          id: null,
          beginTime: null,
          quesCount: null,
          maxBall: null,
          userAnsCount: null,
          userTestBall: null,
        },
      ],
      selectedSubjectList: [],
      selectedIndex: null,
      selectedTestType: null,
    };
  },
  methods: {
    getTestResults() {
      this.$http
        .get("tests/tests-history")
        .then((data) => {
          if (!data.error) {
            this.testResults = data;
          }
        })
        .catch(() => {
          // this.errorMes = error.response.data.error.message;
        });
    },
    selectSubjectList(item) {
      if (this.testResults && this.testResults.length > 0) {
        this.selectedTestType = item.type;
        this.selectedIndex = item.id;
        this.$http
          .get(`tests/tests-history/${item.id}/?type=${item.type}`)
          .then((res) => {
            this.selectedSubjectList = res;
          })
          .catch(() => {
            // this.errorMes = error.response.data.error.message;
          });
      }
    },
  },
  created() {
    this.getTestResults();
  },
};
</script>

<style lang="scss" scoped>
.hoverTable tr:hover {
  background-color: #119c75 !important;
  cursor: pointer;
  color: white;
}

.selected-row {
  background-color: #119c75 !important;
  cursor: pointer;
  color: white;
}
</style>
