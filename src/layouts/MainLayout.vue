<template>
  <div>
    <AppHeader />
    <div class="page__wrap">
      <router-view />
    </div>
    <AppFooter v-if="$route.name !== 'test'" />
  </div>
</template>

<script>
import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "../components/layouts/default/app-header/AppHeader";
import { mapGetters, mapMutations } from "vuex";
import TokenService from "@/service/TokenService";

export default {
  name: "MainLayout",
  components: { AppHeader, AppFooter },
  methods: {
    ...mapMutations([
      "setWindowWidth",
      "setAccessToken",
      "setIsLoggedOn",
      "setTestType",
    ]),
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
    setTestTypeInLayout() {
      this.setTestType(this.getTestTypeFromStorage());
    },
  },
  computed: {
    ...mapGetters(["windowWidth"]),
  },
  mounted() {
    this.setToken();
    this.setWidth();
    this.setTestTypeInLayout();
    window.addEventListener("resize", this.setWidth);
    console.log(new Date());
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>

<style lang="scss" scoped>
.notice-content {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  padding: 9px 12px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  z-index: 999999;
  cursor: pointer;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
  }
}
.page {
  &__wrap {
    min-height: calc(100vh - 402px);
  }
}
</style>

<style>
.vue-notification {
  padding: 10px;
  margin: 5px 5px 5px;
  font-size: 16px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
</style>
