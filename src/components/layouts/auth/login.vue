<template>
  <div class="auth__body auth__form mb-30">
    <AppText
      :size="isDesktopSmall ? 20 : 26"
      :line-height="isDesktopSmall ? 30 : 32"
      weight="600"
      class="mb-20"
    >
      Tizimga kirish
    </AppText>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(loginToSystem)">
        <div class="form-control">
          <div class="form-group">
            <base-input
              type="text"
              vid="phone"
              rules="required|min:9"
              label="Telefon raqam"
              placeholder="93 343-43-43"
              v-mask="'#########'"
              v-model="request.phone"
              :prepend="true"
            >
              <template #prepend> +998 </template>
            </base-input>
          </div>
          <div class="form-group">
            <base-input
              :type="passwordField ? 'text' : 'password'"
              vid="password"
              rules="required"
              label="Parolni kiriting"
              placeholder="Parolni kiriting"
              v-model="request.password"
              :append="true"
            >
              <template #append>
                <i class="fas fa-eye" v-if="passwordField" @click="passwordSee">
                </i>
                <i
                  class="far fa-eye-slash"
                  v-if="!passwordField"
                  @click="passwordSee"
                ></i>
              </template>
            </base-input>
          </div>
        </div>
        <div class="text-center">
          <app-button
            :disabled="isLoading"
            theme="info"
            type="submit"
            :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
            :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
            :height="45"
            class="w-100 mb-10"
          >
            Tizimga kirish
          </app-button>
        </div>
      </form>
    </ValidationObserver>
    <app-button
      theme="orange"
      type="submit"
      :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
      :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
      :height="45"
      class="w-100 mb-20"
      @click="$router.push({ name: 'register' })"
    >
      Ro'yxatdan o'tish
    </app-button>
    <div class="form-group">
      <AppText
        size="14"
        weight="700"
        line-height="17"
        :class="isDesktopSmall ? 'text-center' : ''"
      >
        Ro'yxatdan o'tmadingizmi?
        <router-link
          style="color: #008ae4 !important; margin-left: 5px"
          to="/sign-up"
          >Ro'yxatdan o'tish
        </router-link>
      </AppText>
    </div>
  </div>
</template>

<script>
import "../../../assets/styles/pages/auth.scss";
import { ValidationObserver } from "vee-validate";
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import { mapActions, mapMutations } from "vuex";
import TokenService from "@/service/TokenService";
export default {
  name: "AppLogin",
  components: { AppButton, BaseInput, ValidationObserver },
  data() {
    return {
      request: {
        phone: "",
        password: "",
      },
      passwordField: false,
      isLoading: false,
    };
  },
  computed: {},
  methods: {
    ...mapActions([]),
    ...mapMutations(["setWindowWidth"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    passwordSee() {
      this.passwordField = !this.passwordField;
    },
    showPasswordMethod() {
      this.showPassword = !this.showPassword;
    },
    loginToSystem() {
      this.isLoading = true;
      this.$http
        .post("users/login/", {
          password: this.request.password,
          phone: "998" + this.request.phone,
        })
        .then((data) => {
          if (data && data.access && data.refresh) {
            TokenService.saveToken(data.access);
            TokenService.saveRefreshToken(data.refresh);

            this.$router.push({ name: "home" });
            this.successNotification("Tizimga kirildi");
            this.request.password = "";
          } else {
            this.errorNotification(data.detail);
          }
        })
        .catch((err) => {
          const errorMessage =
            err.response?.data?.detail || "An error occurred while logging in";
          this.errorNotification(errorMessage);
          // this.request.login = "";
          // this.request.password = "";
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 30px;
  margin: auto;
  margin-bottom: 20px;
}
</style>
