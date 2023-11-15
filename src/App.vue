<template>
  <div
    id="app"
    v-if="!isLoading"
    @scroll="handleUserAction()"
    @mousemove="handleUserAction()"
  >
    <router-view />
  </div>
  <div v-else>
    <loader />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Loader from "./components/shared-components/Loader.vue";
import TokenService from "./service/TokenService";

export default {
  components: { Loader },
  name: "App",
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    handleUserAction() {
      const token = TokenService.getToken();
      if (!token) return;
      const currentTime = Math.floor(Date.now() / 1000);
      const expirationTime =
        TokenService.getTokenCreationTime() + TokenService.getTokenExpireDate();
      const warningTime = expirationTime - 60;
      if (currentTime > warningTime && currentTime < expirationTime) {
        this.refreshToken();
      } else if (currentTime >= expirationTime) {
        this.logOut();
      }
      console.log("aaa");
    },
    refreshToken() {
      this.$http
        .post("users/token/refresh/", {
          refresh: TokenService.getRefreshToken(),
        })
        .then((response) => {
          if (response && response.access) {
            TokenService.saveToken(response.access);
            TokenService.saveTokenExpireDate(
              Math.floor(new Date().getTime() / 1000) + 86400
            );
          }
        })
        .catch((error) => {
          console.error("Error refreshing token:", error);
        });
    },
    logOut() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
      localStorage.clear();
    },
  },
  mounted() {
    this.handleUserAction();
  },
  created() {
    const checkLoading = () => {
      if (navigator.onLine && document.readyState === "complete") {
        this.isLoading = false;
      }
    };
    window.addEventListener("load", checkLoading);
  },
};
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}
</style>
