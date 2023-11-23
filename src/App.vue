<template>
  <div id="app" @scroll="handleUserAction()" @mousemove="handleUserAction()">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
// import Loader from "./components/shared-components/Loader.vue";
import TokenService from "./service/TokenService";

export default {
  components: {},
  name: "App",
  data() {
    return {
      isLoading: true,
    };
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
          try {
            const response = await this.$http.post("users/token/refresh/", {
              refresh: TokenService.getRefreshToken(),
            });
            if (response && response.access) {
              TokenService.saveToken(response.access);
            }
          } catch (error) {
            console.error("Error refreshing token:", error);
            this.logOut();
          }
        }
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
