import TokenService from "@/service/TokenService";
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
    path: "/sign-up",
    component: () => import("../layouts/Auth"),
    children: [
      {
        path: "/sign-up",
        name: "register",
        component: () => import("../components/layouts/auth/register"),
      },
    ],
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
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
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  const isPublic = to.matched.some((record) => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(
    (record) => record.meta.onlyWhenLoggedOut
  );
  const isLoggedIn = !!TokenService.getToken();

  if (!isPublic && !isLoggedIn) {
    next({ name: "login" });
  } else if (isLoggedIn && onlyWhenLoggedOut) {
    next({ name: "home" });
  } else {
    if (to.name === "test") {
      const testType = localStorage.getItem("testType");
      if (!testType) {
        next("/");
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

export default router;
