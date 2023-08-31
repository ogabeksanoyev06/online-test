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
        path: "/guide",
        name: "guide",
        component: () => import("../views/site/guide"),
      },
      {
        path: "/publication",
        name: "publication",
        component: () => import("../views/site/publication"),
      },
      {
        path: "/choose-tests",
        name: "choose-tests",
        component: () => import("../views/site/tests"),
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
        path: "/library",
        name: "library",
        component: () => import("../views/site/library"),
      },
      {
        path: "/internation-studies",
        name: "internation-studies",
        component: () => import("../views/site/internationalStudies"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("../views/site/test"),
      },
    ],
  },
  {
    path: "/sign-in",
    name: "login",
    component: () => import("../components/layouts/auth/login"),
  },
  {
    path: "/sign-up",
    name: "register",
    component: () => import("../components/layouts/auth/register"),
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
export default router;
