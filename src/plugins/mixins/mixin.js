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
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
    clearTestPropertiesFromLocalStorage() {
      localStorage.removeItem("selectedQuestionIndex");
      localStorage.removeItem("testTime");
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
    // setMathPlugin() {
    //   window.renderMathInElement(
    //     document.getElementById("test_solving_component"),
    //     {
    //       delimiters: [
    //         { left: "$$", right: "$$", display: true },
    //         { left: "$", right: "$", display: false },
    //         { left: "\\(", right: "\\)", display: false },
    //         { left: "\\[", right: "\\]", display: true },
    //       ],
    //       Macros: {
    //         "\\par": "\\newline",
    //       },
    //     }
    //   );
    // },
    setQuestionIndexToStorage(questionIndex) {
      localStorage.removeItem("selectedQuestionIndex");
      localStorage.setItem("selectedQuestionIndex", questionIndex);
    },
    checkQuestionIndex() {
      let selectedQuestionIndex = localStorage.getItem("selectedQuestionIndex");
      if (!selectedQuestionIndex) return 0;
      return parseInt(selectedQuestionIndex);
    },
    setSelectedSubjectIdMixin(selectedSubjectId) {
      localStorage.removeItem("selectedSubjectId");
      localStorage.setItem("selectedSubjectId", selectedSubjectId);
    },
    getSelectedSubjectIdMixin() {
      let selectedSubjectId = localStorage.getItem("selectedSubjectId");
      if (!selectedSubjectId) return null;
      return parseInt(selectedSubjectId);
    },
    removeTestAttributesFromStorage() {
      localStorage.removeItem("selectedSubjectId");
      localStorage.removeItem("questions");
      localStorage.removeItem("answers");
      localStorage.removeItem("testType");
    },
  },
});
