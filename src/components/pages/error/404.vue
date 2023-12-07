<template>
  <div class="error">
    <div class="error__photo mb-30">
      <img src="/images/error.png" alt="" />
    </div>
    <AppText
      :size="isMobileSmall ? 24 : 40"
      :line-height="isMobileSmall ? 30 : 48"
      weight="700"
      class="color-red mb-10"
    >
      404 Hatolik
    </AppText>

    <AppText
      :size="isMobileSmall ? 12 : 14"
      line-height="18"
      weight="500"
      class="mb-20"
    >
      Sahifa topilmadi
    </AppText>
    <AppText
      :size="isMobileSmall ? 14 : 16"
      line-height="18"
      weight="500"
      class="mb-30"
    >
      Bu sahifa mavjud emas. O'chirib yuborilgan yoki umuman bo'lmagan, Asosiy
      sahifaga o'ting
    </AppText>
    <AppButton
      theme="info"
      :font-size="16"
      :sides="20"
      :height="isMobileSmall ? '40' : '45'"
      weight="500"
      @click="$router.push({ path: '/' })"
    >
      Bosh sahifa
    </AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import { mapMutations } from "vuex";
import TokenService from "../../../service/TokenService";

export default {
  components: { AppButton },
  name: "ErrorPage",
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
.error {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  text-align: center;
}
</style>
