<template>
  <div>
    <AppHeader />
    <div class="container">
      <div class="page__wrap">
        <router-view />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "../components/layouts/default/app-header/AppHeader";
import TokenService from "../service/TokenService";

export default {
  name: "ErrorPage",
  components: { AppHeader, AppFooter },

  methods: {
    ...mapMutations(["setWindowWidth", "setAccessToken", "setIsLoggedOn"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    setToken() {
      let accessToken = TokenService.getToken();
      if (accessToken !== null) {
        this.setAccessToken(accessToken);
        this.setIsLoggedOn(true);
      } else {
        this.setAccessToken(null);
        this.setIsLoggedOn(false);
      }
    },
  },

  mounted() {
    this.setToken();
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>

<style lang="scss" scoped>
.page {
  &__wrap {
    min-height: calc(100vh - 402px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.error {
  padding: 30px;
  text-align: center;
}
</style>
