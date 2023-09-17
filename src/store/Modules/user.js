const state = {
  user: {},
  accessToken: null,
  isLoggedOn: false,
  refreshTokenIntervalId: null,
};

const getters = {
  user: (state) => state.user,
  accessToken: (state) => state.accessToken,
  isLoggedOn: (state) => state.isLoggedOn,
};
const mutations = {
  setUser: (state, data) => (state.user = data),
  setAccessToken: (state, data) => (state.accessToken = data),
  setIsLoggedOn: (state, data) => (state.isLoggedOn = data),
};
const actions = {
  async getUser({ commit }) {
    try {
      await this._vm.$http
        .get("users/profile")
        .then((res) => {
          if (res) {
            commit("setUser", res);
          }
        })
        .catch((error) => {
          console.log("Error on getting user by token" + ": " + error);
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
