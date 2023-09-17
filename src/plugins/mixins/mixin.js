import Vue from "vue";
import { mapGetters } from "vuex";
import { baseURL } from "../../plugins/axios";

Vue.mixin({
  data() {
    return {
      baseURL,
    };
  },
  computed: {
    ...mapGetters(["isLoggedOn"]),
    userIsLoggedOn() {
      return this.isLoggedOn;
    },
  },
  methods: {
    currencyFormat(number) {
      try {
        if (number % 1 === 0) return number;
        if (number === null || number === undefined || number === 0)
          return false;
        return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ");
      } catch {
        return number;
      }
    },
    successNotification(message) {
      this.$toast.success(message, {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },
    errorNotification(message) {
      this.$toast.error(message, {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },
    warningNotification(message) {
      this.$toast.warning(message, {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },
  },
});
