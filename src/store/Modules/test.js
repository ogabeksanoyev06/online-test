import "../../plugins/mixins/mixin";
const state = {
  specList: [],
  testType: "online",
};

const getters = {
  specList: (state) => state.specList,
  testType: (state) => state.testType,
};
const mutations = {
  setSpecList: (state, data) => (state.specList = data),
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
