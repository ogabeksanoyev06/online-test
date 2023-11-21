<template>
  <div class="cabinet__content">
    <AppText size="14" line-height="26" weight="700" class="color-text mb-20">
      To'lovlar tarixi
    </AppText>

    <div class="table-block">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>To'lov turi</th>
            <th>To'lov miqdori</th>
            <th>Sana</th>
            <th>Statusi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in payments.data" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ item.isPayed ? "To'langan" : "To'lanmagan" }}</td>
            <td class="bold-text">{{ currencyFormat(item.amount) }} UZS</td>
            <td>
              {{
                item.payedDate
                  ? $moment(item.payedDate).format("YYYY-MM-DD H:mm")
                  : ""
              }}
            </td>
            <td>{{ item.paymentStatus }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "payment-history",
  data() {
    return {
      payments: {
        data: [
          {
            isPayed: null,
            payedDate: new Date(),
            paymentStatus: null,
            paymentSystem: null,
            createdDate: new Date(),
            cancelledDate: new Date(),
          },
        ],
        total: 0,
      },
    };
  },
  methods: {
    getPaymentMonitoring() {
      try {
        this.$api.get("main/User/PaymentList?skip=0&take=100").then((res) => {
          if (!res.error) {
            this.payments = res.result;
          }
        });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
  },
  mounted() {
    // this.getPaymentMonitoring();
  },
};
</script>

<style lang="scss" scoped>
.table-block {
  th {
    text-align: left;
  }
}
</style>
