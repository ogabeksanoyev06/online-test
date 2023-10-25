const state = {
  windowWidth: null,
  loading: false,
  skillTree: [],
  coursesBySubjectId: [],
};

const getters = {
  windowWidth: (state) => state.windowWidth,
  loading: (state) => state.loading,
  skillTree: (state) => state.skillTree,
  coursesBySubjectId: (state) => state.coursesBySubjectId,
};

const mutations = {
  setWindowWidth(state, newWidth) {
    state.windowWidth = newWidth;
  },
  setLoading: (state, data) => (state.loading = data),
  setSkillTree(state, skills) {
    state.skillTree = skills;
  },
  setCoursesBySubjectId(state, data) {
    state.coursesBySubjectId = data;
  },
};
const actions = {
  async getSkillTree({ commit }) {
    try {
      commit("setLoading", true);
      await this._vm.$http
        .get("courses/categories")
        .then((data) => {
          if (data) {
            commit("setSkillTree", data);
          }
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log("Error on getting SkillCourseTree" + ": " + error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    } catch (e) {
      commit("setLoading", false);
      console.log(e);
    }
  },
  async getCoursesBySubjectId({ commit }, payload) {
    let data = [];
    try {
      commit("setLoading", true);
      await this._vm.$http
        .get(`courses/?cat_id=` + payload)
        .then((data) => {
          if (data) {
            commit("setCoursesBySubjectId", data);
          }
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log("Error on getting PopularCourseTree" + ": " + error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    } catch (e) {
      commit("setLoading", false);
      console.log(e);
    }
    return data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
