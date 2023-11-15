<template>
  <div class="top-up-balance">
    <AppText size="14" line-height="26" weight="700" class="color-text mb-20">
      To'lov operatorini tanlang
    </AppText>

    <div class="cabinet__content">
      <div class="payment__methods-wrap">
        <div
          class="payment__methods-item"
          style="cursor: pointer"
          :class="[selectedPaymentType === 1 ? 'active' : '']"
          @click="paymentSelect(1)"
        >
          <div class="payment__methods-logo mr-30">
            <img src="/svg/payme.svg" alt="" />
          </div>
        </div>

        <div
          class="payment__methods-item"
          style="cursor: pointer"
          :class="[selectedPaymentType === 2 ? 'active' : '']"
          @click="paymentSelect(2)"
        >
          <div class="payment__methods-logo mr-30">
            <img src="/svg/clicksvg.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="payment__methods-details pa-20 bordered shadowed radius">
        <AppText size="14" line-height="16" class="color-text mb-20">
          Hisobni to'ldirish uchun kerakli miqdorni kiriting va to'lovni amalga
          oshirish tugmasini bosing. Minimal to'lov - 1000 so'm
        </AppText>

        <BaseInput
          placeholder="0 UZS"
          vid="name"
          class="mb-10"
          v-model="paymentAmount"
          @keypress="isNumber($event)"
        >
        </BaseInput>

        <AppButton
          @click="createPayment"
          v-if="selectedPaymentType"
          theme="info"
          :font-size="isMobileSmall ? 14 : 16"
          :height="isMobileSmall ? 40 : 50"
          :sides="isMobileSmall ? 10 : 20"
          :disabled="paymentAmount <= 999 || paymentAmount === null"
        >
          Hisobni to'ldirish
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../../components/shared-components/BaseInput";
import AppButton from "../../../components/shared-components/AppButton";

export default {
  name: "top-up-balance",
  components: { AppButton, BaseInput },
  data() {
    return {
      lang: {},
      selectedPaymentType: 1,
      paymentOrderId: null,
      paymentAmount: null,
      paymerequest: {
        merchant: "6090983351d5f0862e0c7157",
        amount: null,
        account: {
          order_id: null,
        },
      },
      clickRequest: {
        amount: null,
        merchant_id: 213,
        merchant_user_id: 164,
        service_id: 15624,
        transaction_param: null,
        return_url: "http://cpru.uz/payment-history",
        card_type: "uzcard",
      },
    };
  },
  methods: {
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    paymentSelect(paymentType) {
      this.selectedPaymentType = paymentType;
    },
    createPayment() {
      try {
        this.$api
          .post("main/User/AddPayment?Amount=" + this.paymentAmount)
          .then((res) => {
            if (!res.error) {
              this.paymerequest.amount = res.result.amount * 100;
              this.paymerequest.account.order_id = res.result.id;
              this.clickRequest.amount = res.result.amount;
              this.clickRequest.transaction_param = res.result.id;

              this.makePayment();
            }
          });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
    makePayment() {
      switch (this.selectedPaymentType) {
        case 1:
          this.makePaymentPayme();
          break;
        case 2:
          this.makePaymentClick();
          break;
      }
    },
    makePaymentClick() {
      window.open(
        "https://my.click.uz/services/pay?service_id=" +
          this.clickRequest.service_id +
          "&merchant_id=" +
          this.clickRequest.merchant_id +
          "&amount=" +
          this.clickRequest.amount +
          "&transaction_param=" +
          this.clickRequest.transaction_param +
          "&return_url=" +
          this.clickRequest.return_url +
          "&card_type=" +
          this.clickRequest.card_type,
        "_self"
      );
    },
    makePaymentPayme() {
      var encodedString = window.btoa(
        ("m=" + this.paymerequest.merchant).toString() +
          ";" +
          ("ac.payment_id=" + this.paymerequest.account.order_id).toString() +
          ";" +
          ("a=" + this.paymerequest.amount).toString() +
          ";" +
          ("c=" + this.baseURL + "payment-history")
      );
      window.open("https://checkout.paycom.uz/" + encodedString, "_self");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/abstracts/variables";

.top-up-balance {
}
.payment__methods {
  &-wrap {
    display: flex;
    gap: 20px;
  }
  &-item {
    max-width: 100px;
    width: 100%;
    padding: 5px 10px;
    transition: 0.3s;
    border: 1px solid $border-color;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
    img {
      width: 40px;
      height: 40px;
    }

    &.active {
      border-color: $color-secondary !important;
    }

    &:hover {
      border-color: transparent;
      box-shadow: 0px 8px 30px rgba(70, 93, 122, 0.08);
    }
  }

  &-details {
    max-width: 600px;
  }
}
</style>
