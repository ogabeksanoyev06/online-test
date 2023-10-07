import "../../plugins/mixins/mixin";
const state = {
  specList: [],
  selectedQuestionIndex: 0,
  selectedSubjectId: null,
  currentSubjectQuestionCount: 0,
  testType: "online",
};

const getters = {
  specList: (state) => state.specList,
  selectedQuestionIndex: (state) => state.selectedQuestionIndex,
  selectedSubjectId: (state) => state.selectedSubjectId,
  currentSubjectQuestionCount: (state) => state.currentSubjectQuestionCount,
  testType: (state) => state.testType,
};
const mutations = {
  setSpecList: (state, data) => (state.specList = data),
  setSelectedQuestionIndex: (state, data) =>
    (state.selectedQuestionIndex = data),
  setSelectedSubjectId: (state, data) => (state.selectedSubjectId = data),
  setCurrentSubjectQuestionCount: (state, data) =>
    (state.currentSubjectQuestionCount = data),
  setTestType: (state, data) => (state.testType = data),
};
const actions = {
  async getSpecList({ commit }) {
    try {
      await this._vm.$http
        .get("tests/specialists/")
        .then((data) => {
          if (data) {
            commit("setSpecList", data);
          }
        })
        .catch((e) => {
          if (e.message === "Network Error") {
            this.errorNotification(
              "Internet ulanishingizni tekshirib ko'ring."
            );
          } else if (e.response && e.response.data && e.response.data.error) {
            this.errorNotification(e.response.data.error.message);
          } else {
            this.errorNotification("Noma'lum xato yuz berdi.");
          }
        })
        .finally(() => {});
    } catch (e) {
      console.log(e);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
