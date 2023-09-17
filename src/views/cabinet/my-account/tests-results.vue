<template>
  <div class="tests-results">
    <div class="table-block">
      <table>
        <thead>
        <tr>
          <th>Дата</th>
          <th>1-Fan (30,3.1)</th>
          <th>2-Fan (30,3.1)</th>
          <th>3-Fan (15,2.1)</th>
          <th>4-Fan (15,2.1)</th>
          <th>5-Fan (15,2.1)</th>
          <th class="bold-text">Жами (289.5)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, idx) in 10" :key="idx">
          <td>01.02</td>
          <td>16 (49,1)</td>
          <td>11 (34,1)</td>
          <td>9 (18,9)</td>
          <td>11 (23.1)</td>
          <td>7 (14,1)</td>
          <td class="bold-text">140,3</td>
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
            }
          ]
        }
      ]
    }
  },
  methods: {
    getTestResults() {
      this.$api.get('main/User/GetBalance').then(data => {
        if (!data.error) {
          this.userBalance = data.result;
        }
      }).catch(error => {
        this.errorMes = error.response.data.error.message;
      })
    },
  }
}
</script>

<style lang="scss" scoped>


</style>
