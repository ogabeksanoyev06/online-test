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
        <strong>
          Tanlgangan test turi boyicha natijalar -
          <span style="color: #008ae4"> Online test </span>
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
          <tr v-for="(item, idx) in 10" :key="idx" class="text-center">
            <td>10</td>
            <td>Matematika</td>
            <td>189</td>
            <td>5</td>
            <td>122</td>
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
        },
      ],
    };
  },
  methods: {
    getTestResults() {
      this.$api
        .get("main/User/GetBalance")
        .then((data) => {
          if (!data.error) {
            this.userBalance = data.result;
          }
        })
        .catch((error) => {
          this.errorMes = error.response.data.error.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
