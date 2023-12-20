<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TokenService from "./service/TokenService";
export default {
  components: {},
  name: "App",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    async handleUserAction() {
      if (TokenService.isTokenExpired(TokenService.getToken())) {
        if (
          TokenService.isRefreshTokenExpired(TokenService.getRefreshToken())
        ) {
          this.logOut();
        } else {
          this.refreshToken();
        }
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
  async mounted() {
    await this.handleUserAction();
  },
  created() {},
};
</script>
