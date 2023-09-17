<template>
  <div id="app" @mouseup="actionUser">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import TokenService from "./service/TokenService";
export default {
  name: "App",
  components: {},
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    actionUser() {
      let dif = 3000;
      let currentTime = new Date().getTime();
      let token = TokenService.getToken();
      let expDate = TokenService.getTokenExpireDate();
      console.log("aa");
      if (token) {
        if (expDate - dif < currentTime && currentTime < expDate) {
          this.RefreshToken();
        } else if (currentTime > expDate) {
          this.logOut();
        }
      }
    },
    RefreshToken() {
      this.$http("users/token/refresh", {
        refresh: TokenService.getRefreshToken(),
      })
        .then((res) => {
          if (res) {
            this.TokenService.saveToken(res.access);
          }
        })
        .catch(() => {});
    },
    logOut() {
      // this.setAccessToken(null);
      // this.setIsLoggedOn(false);
      // localStorage.clear();
    },
  },
  mounted() {},
  created() {},
};
</script>
<style></style>
