<template>
  <div class="auth__body">
    <AppText
      :size="isDesktopSmall ? 26 : 30"
      :line-height="isDesktopSmall ? 30 : 36"
      weight="700"
      class="text-center"
    >
      Tizimga kirish
    </AppText>
    <div class="auth__form">
      <div class="auth__form-header">
        <div class="header-logo">
          <img src="/svg/logo1.svg" alt="logo" />
        </div>
        <p class="header-text">
          Bizning tizim orqali o‘z biliminggizni yuksaltiring
        </p>
      </div>

      <el-form
        :model="request"
        :rules="rules"
        ref="ruleForm"
        labelPosition="top"
      >
        <el-form-item label="Telefon raqam" prop="tel">
          <el-input placeholder="Telefon raqam" v-model="request.tel" clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="Parolingiz" prop="password">
          <el-input
            placeholder="Parolingiz"
            v-model="request.password"
            clearable
          >
          </el-input>
        </el-form-item>
        <div class="mt-30 mb-30 text-center">
          <AppButton
            theme="main"
            :font-size="isMobile ? 14 : 16"
            :sides="isMobile ? 20 : 30"
            @click="$router.push({ path: '/' })"
            class="w-100"
          >
            Tizimga kirish
          </AppButton>
        </div>
      </el-form>
      <AppText size="14" weight="700" line-height="17" class="text-center">
        Ro'yxatdan o'tmadingizmi?
        <router-link
          style="color: #3563cb !important; margin-left: 5px"
          to="/sign-up"
          >Ro'yxatdan o'tish
        </router-link>
      </AppText>
    </div>
  </div>
</template>

<script>
import TokenService from "../../../service/TokenService";
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/shared-components/AppButton.vue";

export default {
  name: "AppLogin",
  components: { AppButton },
  data() {
    return {
      request: {
        tel: "",
        password: "",
      },
      errorMes: "",
      authError: "",
      showPassword: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getUser"]),
    async loginToSystem() {
      await this.$api
        .post("auth/Login/token", this.request)
        .then((data) => {
          if (data.error) {
            this.errorMes = data.error;
          } else {
            TokenService.saveToken(data.result.access_token);
            TokenService.saveRefreshToken(data.result.refresh_token);
            TokenService.tokenExpireDate(data.result.expires_in);
            this.$router.push({ name: "home" });
            this.request.password = "";
            this.getUser();
          }
        })
        .catch((error) => {
          this.errorMes = error.response.data.error.message;
        });
    },
    showPasswordMethod() {
      this.showPassword = !this.showPassword;
    },
  },
  mounted() {
    if (TokenService.getToken()) {
      this.getUser();
    }
  },
};
</script>

<style lang="scss" scoped>
.auth__form {
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background: linear-gradient(0deg, #f2f4f6, #f2f4f6),
    linear-gradient(0deg, #f9f9f9, #f9f9f9), #fff;
  margin: 20px auto;
  padding: 50px;
  &-header {
    text-align: center;
    margin-bottom: 30px;
    .header-logo {
      margin-bottom: 10px;
    }
    .header-text {
      display: block;
      font-style: normal;
      font-size: 14px !important;
      line-height: 17px;
      color: #000;
      font-weight: 600;
    }
  }
}
@media (max-width: 768px) {
  .auth__form {
    padding: 30px;
  }
}
</style>
