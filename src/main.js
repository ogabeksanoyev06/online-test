import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/directives/click-outside";
import "./plugins/mixins/mixin";
import api from "./service/apiService";

Vue.config.productionTip = false;
Vue.component("AppText", AppText);
Vue.use(ElementUI);
Vue.use(api);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
