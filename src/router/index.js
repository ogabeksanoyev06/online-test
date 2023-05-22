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
        path: "/tests",
        name: "tests",
        component: () => import("../views/site/tests"),
      },
      {
        path: "/video-course",
        name: "video-course",
        component: () => import("../views/site/video-course"),
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
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
