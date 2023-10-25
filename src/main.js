import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText.vue";
import VueMask from "v-mask";
import Moment from "vue-moment";
import Toast from "vue-toastification";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/directives/click-outside";
import "./plugins/mixins/mixin";
import "vue-toastification/dist/index.css";
import http from "./plugins/axios";
Vue.config.productionTip = false;
Vue.component("AppText", AppText);
Vue.use(VueMask);
Vue.use(Moment);
Vue.use(Toast);
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  created() {
    AOS.init({
      offset: 100,
      delay: 50,
      duration: 500,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  },
  render: (h) => h(App),
}).$mount("#app");
