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
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    actionUser() {
      let dif = 60;
      let currentTime = new Date() / 1000;
      let token = TokenService.getToken();
      let expDate =
        TokenService.getTokenCreationTime() + TokenService.getTokenExpireDate();
      console.log(
        TokenService.getTokenCreationTime(),
        "    ",
        TokenService.getTokenExpireDate()
      );
      if (token) {
        console.log(currentTime);
        if (currentTime > expDate - dif && currentTime < expDate) {
          this.RefreshToken();
        } else if (currentTime > expDate) {
          this.logOut();
        }
      }
    },
    RefreshToken() {
      this.$http("users/token/refresh/", {
        refresh: TokenService.getRefreshToken(),
      })
        .then((res) => {
          if (res) {
            this.TokenService.saveToken(res.access);
            this.TokenService.tokenExpireDate(
              +new Date().getTime() / 1000 + 86400
            );
          }
        })
        .catch(() => {});
    },
    logOut() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
      localStorage.clear();
    },
  },
  mounted() {},
  created() {},
};
</script>
<style></style>
