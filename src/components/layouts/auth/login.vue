<template>
  <div class="auth">
    <div class="auth__wrap">
      <div class="auth__header">
        <router-link to="/">
          <div style="max-height: 50px; cursor: pointer" class="text-center">
            <img
              src="/svg/logo1.svg"
              alt=""
              style="height: 50px; width: 8rem"
            />
          </div>
        </router-link>
        <AppText
          :size="isDesktopSmall ? 20 : 26"
          :line-height="isDesktopSmall ? 30 : 32"
          weight="700"
          class="text-center mb-20"
        >
          Tizimga kirish
        </AppText>
      </div>
      <div class="auth__body">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(registerUser)">
            <div class="form-control">
              <div class="form-group">
                <base-input
                  type="text"
                  vid="phone"
                  rules="required"
                  label="Telefon raqam"
                  placeholder="93 343-43-43"
                  v-mask="'## ###-##-##'"
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
                    <i
                      class="fas fa-eye"
                      v-if="passwordField"
                      @click="passwordSee"
                    >
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
                theme="main"
                type="submit"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                :height="45"
                class="w-100 mb-10"
              >
                Tizimga kirish
              </app-button>
              <app-button
                theme="secondary"
                type="submit"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                :height="45"
                class="w-100"
                @click="$router.push({ name: 'register' })"
              >
                Ro'yxatdan o'tish
              </app-button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../assets/styles/pages/auth.scss";
import { ValidationObserver } from "vee-validate";
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import { mapActions, mapMutations } from 'vuex';
export default {
  name: "AppLogin",
  components: { AppButton, BaseInput, ValidationObserver },
  data() {
    return {
      request: {
        phone: "",
        password: "",
      },
      errorMes: "",
      authError: "",
      passwordField: false,
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
  },
  mounted() {
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
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
.auth__wrap {
  padding: 60px;
  max-width: 500px;
}
@media (max-width: 768px) {
  .form-control {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0 20px;
  }
}
</style>
