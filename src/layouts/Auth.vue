<template>
  <div class="auth">
    <div class="container">
      <div class="auth__content">
        <RouterView />
        <div class="auth__footer">
          <AppText
            size="14"
            line-height="17"
            :class="isDesktopSmall ? 'text-center' : ''"
          >
            Copyright © 2023 Online platforma
          </AppText>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import "../assets/styles/pages/auth.scss";

export default {
  name: "AppAuth",
  components: {},

  methods: {
    ...mapMutations(["setWindowWidth", "setAccessToken", "setIsLoggedOn"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
  },
  mounted() {
    window.addEventListener("resize", this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>

<style lang="scss">
@import "../assets/styles/abstracts/variables";
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
