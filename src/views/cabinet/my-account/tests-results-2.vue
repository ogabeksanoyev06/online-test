<template>
  <div class="tests-results">
    <div class="mb-30 text-center">
      <span>
        <strong>Test natijalari</strong>
      </span>
    </div>
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
            :class="selectedIndex === idx ? 'selected-row' : ''"
            @click="selectSubjectList(idx)"
          >
            <td>{{ idx + 1 }}</td>
            <td>{{ item.testType }}</td>
            <td>{{ $moment(item.beginTime).format("YYYY-MM-DD HH:mm:ss") }}</td>
            <td>{{ $moment(item.endTime).format("YYYY-MM-DD HH:mm:ss") }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="mb-15 text-center"
      v-if="selectedSubjectList && selectedSubjectList.length > 0"
    >
      <span>
        <strong
          >Tanlgangan test turi boyicha natijalar -
          <span style="color: #008ae4">{{ selectedTestType }}</span></strong
        >
      </span>
    </div>
    <div
      class="table-block"
      v-if="selectedSubjectList && selectedSubjectList.length > 0"
    >
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
            <td>{{ item.quesCount }}</td>
            <td>{{ item.subjectName }}</td>
            <td>{{ currencyFormat(item.maxBall) }}</td>
            <td>{{ item.userAnsCount }}</td>
            <td>{{ currencyFormat(item.userTestBall) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "tests-results",
  components: {},
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
          subjectList: [
            {
              id: null,
              subjectName: null,
              subjectStatus: null,
              quesCount: null,
              maxBall: null,
              userAnsCount: null,
              userTestBall: null,
            },
          ],
          testType: null,
        },
      ],
      selectedSubjectList: [],
      selectedIndex: 0,
      selectedTestType: null,
    };
  },
  methods: {
    getTestResults() {
      this.$api
        .get("main/AbitResult/GetResult?skip=0&take=10")
        .then((data) => {
          if (!data.error) {
            this.testResults = data.result.data;
            this.selectSubjectList(0);
          }
        })
        .catch((error) => {
          this.errorNotification(
            (this.errorMes = error.response.data.error.message)
          );
        })
        .finally(() => {
          console.log("im finally", this.testResults);
        });
    },
    selectSubjectList(testIndex) {
      if (this.testResults && this.testResults.length > 0) {
        this.selectedSubjectList = this.testResults[testIndex].subjectList;
        this.selectedIndex = testIndex;
        this.selectedTestType = this.testResults[testIndex].testType;
      }
    },
  },
  created() {
    this.getTestResults();
  },
};
</script>

<style lang="css" scoped>
.hoverTable tr:hover {
  background-color: #008ae4;
  cursor: pointer;
  color: white;
}

.selected-row {
  background-color: #008ae4;
  cursor: pointer;
  color: white;
}
</style>
