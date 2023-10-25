<template>
  <div id="app" @mouseup="handleUserAction">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TokenService from "./service/TokenService";

export default {
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
    },
  },
  created() {
    const checkLoading = () => {
      if (navigator.onLine && document.readyState === "complete") {
        this.isLoading = false; // Internet va DOM yuklangan, loading animatsiyasini yopamiz
      }
    };

    checkLoading();
    setInterval(this.handleUserAction, 10000);
  },
};
</script>

<style>
/* Your styles here */
</style>
