import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/site/home"),
      },

      {
        path: "/choose-test",
        name: "choose-test",
        component: () => import("../views/site/choose-test"),
      },
      {
        path: "/choose-subject",
        name: "choose-subject",
        component: () => import("../views/site/choose-subject"),
      },
      {
        path: "/choose-subject-school",
        name: "choose-subject-school",
        component: () => import("../views/site/choose-subject/school.vue"),
      },
      {
        path: "/President-school-test",
        name: "president-school-test",
        component: () => import("../views/site/President-school-test"),
      },
      {
        path: "/Attestatsiya-test",
        name: "attestatsiya-school-test",
        component: () => import("../views/site/Attestatsiya-test"),
      },
      {
        path: "/research-test/:research_id",
        name: "research-test",
        component: () => import("../views/site/research-test"),
      },

      {
        path: "/video-course",
        name: "video-course",
        component: () => import("../views/site/video-course"),
      },
      {
        path: "/detailed-page/:course_id",
        name: "detailed-page",
        component: () => import("../views/site/detailed-pages/video-course"),
      },
      {
        path: "/course-page/:course_id",
        name: "course-page",
        component: () => import("../views/site/course-page"),
      },
      {
        path: "/research",
        name: "research",
        component: () => import("../views/site/research"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("../views/site/test"),
      },
      {
        path: "result-test",
        name: "result-test",
        component: () => import("../views/site/result-test"),
      },
      {
        path: "/my-favourites",
        name: "favourites",
        component: () => import("../views/cabinet/my-favourites"),
      },
      {
        path: "/my-cart",
        name: "my-cart",
        component: () => import("../views/cabinet/my-cart"),
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/components/pages/error/404.vue"),
  },
  {
    path: "/403",
    name: "Forbidden",
    component: () => import("@/components/pages/error/403.vue"),
  },
  {
    path: "/cabinet",
    component: () => import("../layouts/Cabinet"),
    children: [
      {
        path: "/cabinet",
        name: "cabinet",
        component: () =>
          import("../views/cabinet/my-account/general-information"),
      },
      {
        path: "/my-courses",
        name: "my-courses",
        component: () => import("../views/cabinet/my-account/my-courses"),
      },
      {
        path: "/tests-results",
        name: "tests-results",
        component: () => import("../views/cabinet/my-account/tests-results"),
      },
      {
        path: "/tests-results-2",
        name: "tests-results-2",
        component: () => import("../views/cabinet/my-account/tests-results-2"),
      },
      {
        path: "/payment-history",
        name: "payment-history",
        component: () => import("../views/cabinet/my-account/payment-history"),
      },
      {
        path: "/top-up-balance",
        name: "top-up-balance",
        component: () => import("../views/cabinet/my-account/top-up-balance"),
      },
    ],
  },
  {
    path: "/sign-in",
    component: () => import("../layouts/Auth"),
    children: [
      {
        path: "/sign-in",
        name: "login",
        component: () => import("../components/layouts/auth/login"),
      },
    ],
  },

  {
    path: "/sign-up",
    component: () => import("../layouts/Auth"),
    children: [
      {
        path: "/sign-up",
        name: "register",
        component: () => import("../components/layouts/auth/register"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
router.beforeEach((to, from, next) => {
  const testType = localStorage.getItem("testType");
  if (to.name === "test" && testType === null) {
    next("/");
  } else {
    next();
  }
});
export default router;
