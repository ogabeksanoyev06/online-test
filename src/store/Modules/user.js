const state = {
  user: {},
  accessToken: null,
  isLoggedOn: false,
  refreshTokenIntervalId: null,
  coursesOnBasket: [],
  favouriteCourses: [],
  boughtCourses: [],
};

const getters = {
  user: (state) => state.user,
  accessToken: (state) => state.accessToken,
  isLoggedOn: (state) => state.isLoggedOn,
  coursesOnBasket: (state) => state.coursesOnBasket,
  favouriteCourses: (state) => state.favouriteCourses,
  boughtCourses: (state) => state.boughtCourses,
};
const mutations = {
  setUser: (state, data) => (state.user = data),
  setAccessToken: (state, data) => (state.accessToken = data),
  setIsLoggedOn: (state, data) => (state.isLoggedOn = data),
  setCoursesOnBasket: (state, { courseId, data }) => {
    if (!state.coursesOnBasket.some((course) => course.id === courseId)) {
      state.coursesOnBasket.push(data);
      localStorage.setItem(
        "coursesOnBasket",
        JSON.stringify(state.coursesOnBasket)
      );
    }
  },
  updateCoursesOnBasketState(state, data) {
    state.coursesOnBasket = data;
  },
  removeCoursesOnBasket: (state, courseId) => {
    const index = state.coursesOnBasket.findIndex(
      (course) => course.id === courseId
    );
    if (index !== -1) {
      state.coursesOnBasket.splice(index, 1);
      localStorage.setItem(
        "coursesOnBasket",
        JSON.stringify(state.coursesOnBasket)
      );
    }
  },

  setFavouriteCourses: (state, { courseId, data }) => {
    if (!state.favouriteCourses.some((course) => course.id === courseId)) {
      state.favouriteCourses.push(data);
      localStorage.setItem(
        "favouriteCourses",
        JSON.stringify(state.favouriteCourses)
      );
    }
  },
  updatefavouriteCoursesState(state, data) {
    state.favouriteCourses = data;
  },
  removefavouriteCourses: (state, courseId) => {
    const index = state.favouriteCourses.findIndex(
      (course) => course.id === courseId
    );
    if (index !== -1) {
      state.favouriteCourses.splice(index, 1);
      localStorage.setItem(
        "favouriteCourses",
        JSON.stringify(state.favouriteCourses)
      );
    }
  },

  setBoughtCourses: (state, data) => (state.boughtCourses = data),
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
  loadCoursesOnBasket({ commit }) {
    const localState = localStorage.getItem("coursesOnBasket");
    if (localState) {
      commit("updateCoursesOnBasketState", JSON.parse(localState));
    }
  },
  loadfavouriteCourses({ commit }) {
    const localState = localStorage.getItem("favouriteCourses");
    if (localState) {
      commit("updatefavouriteCoursesState", JSON.parse(localState));
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
