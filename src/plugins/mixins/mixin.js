import Vue from "vue";
import { mapGetters } from "vuex";
import { baseURL } from "../../plugins/axios";

Vue.mixin({
  data() {
    return {
      baseURL,
      testTimer: null,
    };
  },
  computed: {
    ...mapGetters(["isLoggedOn", "coursesOnBasket", "favouriteCourses"]),
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
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
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

    storeTestTimeToStorage(testTime) {
      localStorage.removeItem("testTime");
      localStorage.setItem("testTime", testTime);
    },
    storeTestDetailsToStorage(testDetails) {
      localStorage.setItem("testDetails", JSON.stringify(testDetails));
    },
    setTestTypeToStorage(testType) {
      localStorage.removeItem("testType");
      localStorage.setItem("testType", testType);
    },

    isCourseInBasketSolid(courseId) {
      return !!this.coursesOnBasket.find(
        (item) => parseInt(item.id) === parseInt(courseId)
      );
    },
    isCourseInFavouritesList(courseId) {
      return !!this.favouriteCourses.find(
        (course) => parseInt(course.id) === parseInt(courseId)
      );
    },

    getTestTypeFromStorage() {
      let testType = localStorage.getItem("testType");
      if (!testType) return null;
      return testType;
    },
    checkOngoingTest() {
      const testType = localStorage.getItem("testType");
      if (testType) {
        return true;
      }
      return false;
    },
    redirectToTestPage() {
      if (this.checkOngoingTest()) {
        this.$router.push("/test");
      }
    },
    removeTestAttributesFromStorage() {
      localStorage.removeItem("questions");
      localStorage.removeItem("answers");
      localStorage.removeItem("testType");
    },
  },
});
