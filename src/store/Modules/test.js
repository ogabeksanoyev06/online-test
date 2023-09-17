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
        .get("tests/categories")
        .then((data) => {
          if (data) {
            commit("setSpecList", data);
          }
        })
        .catch((error) => {
          console.log("Error on getting sepclist: " + error);
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
