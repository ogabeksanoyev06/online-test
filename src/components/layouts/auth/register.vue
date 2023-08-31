<template>
  <div class="auth">
    <div class="auth__wrap" v-if="true">
      <router-link to="/">
        <div style="max-height: 50px; cursor: pointer" class="text-center">
          <img src="/svg/logo1.svg" alt="" style="height: 50px; width: 8rem" />
        </div>
      </router-link>
      <div class="auth__header">
        <AppText
          :size="isDesktopSmall ? 20 : 26"
          :line-height="isDesktopSmall ? 30 : 32"
          weight="700"
          class="text-center mb-20"
        >
          Ro'yxatdan o'tish
        </AppText>
      </div>
      <div class="auth__body">
        <div class="type__buttons">
          <label class="switch-text">
            <div class="switch-labels">
              <span
                class="switch-label"
                v-for="item in userTypes"
                :key="item.name"
                :class="request.type === item.label ? 'active' : ''"
                @click="toggleSlider(item.label)"
              >
                {{ item.name }}
              </span>
            </div>
          </label>
        </div>
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
                  type="text"
                  vid="firstName"
                  rules="required"
                  label="Ismingizni kiritng"
                  placeholder="Ism"
                  v-model="request.firstName"
                />
              </div>
              <div class="form-group">
                <base-input
                  type="text"
                  vid="lastName"
                  rules="required"
                  label="Familiyangizni kiritng"
                  placeholder="Familiya"
                  v-model="request.lastName"
                />
              </div>
              <ValidationObserver>
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
                <base-input
                  :type="passwordConfirmationField ? 'text' : 'password'"
                  vid="confirmPassword"
                  rules="required|confirmed:password"
                  label="Parol tasdig‘i"
                  placeholder="Parol tasdig‘i"
                  v-model="confirmPassword"
                  :append="true"
                >
                  <template #append>
                    <i
                      class="fas fa-eye"
                      v-if="passwordConfirmationField"
                      @click="confirmationSee"
                    >
                    </i>
                    <i
                      class="far fa-eye-slash"
                      v-if="!passwordConfirmationField"
                      @click="confirmationSee"
                    ></i>
                  </template>
                </base-input>
              </ValidationObserver>
            </div>
            <div class="text-center">
              <app-button
                theme="main"
                type="submit"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                :height="45"
                :class="isMobile ? 'w-100' : ''"
              >
                Davom etish
              </app-button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <div class="auth__wrap" style="max-width: 500px" v-if="false">
      <div class="auth__header">
        <AppText
          :size="isMobileSmall ? '16' : '20'"
          :line-height="isMobileSmall ? '20' : '24'"
          weight="400"
          class="text-center mb-20"
        >
          Kod sms orqali quyidagi raqamga yuborildi:
          <p class="bold-text mt-10">+998930819140</p>
        </AppText>
      </div>
      <div class="auth__body">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(registerUser)">
            <div class="form-control">
              <div class="form-group">
                <base-input
                  type="text"
                  vid="code"
                  rules="required"
                  label="Kodni kiriting"
                  placeholder="Kodni kiritng"
                  v-mask="'# # # #'"
                  v-model="verifyCode"
                >
                </base-input>
              </div>
            </div>
            <div class="d-flex justify-space-between flex-wrap">
              <app-button
                theme="grey"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                :height="45"
              >
                Orqaga
              </app-button>
              <app-button
                theme="main"
                type="submit"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                :height="45"
              >
                Davom etish
              </app-button>
            </div>
            <div class="text-center mt-20">
              <AppText
                :size="isMobileSmall ? '14' : '16'"
                line-height="20"
                class="text-center color-main"
              >
                Kodni qayta yuborish
                <b>01:16</b>
              </AppText>
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
import { mapActions, mapGetters, mapMutations } from "vuex";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import AppButton from "@/components/shared-components/AppButton.vue";

export default {
  name: "AppLogin",
  components: { ValidationObserver, BaseInput, AppButton },
  data() {
    return {
      request: {
        phone: "",
        password: "",
        type: "student",
        lastName: "",
        firstName: "",
      },
      verifyCode: "",
      errorMes: "",
      authError: "",
      passwordField: false,
      passwordConfirmationField: false,
      confirmPassword: "",
      isActive: false,
      userTypes: [
        {
          name: "Abituriyent",
          label: "student",
        },
        {
          name: "O`qituvchi",
          label: "teacher",
        },
      ],
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["setWindowWidth"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    passwordSee() {
      this.passwordField = !this.passwordField;
    },
    confirmationSee() {
      this.passwordConfirmationField = !this.passwordConfirmationField;
    },
    toggleSlider(type) {
      this.isActive = !this.isActive;
      this.request.type = type;
    },
    loginToSystem() {
      console.log("o'xshadiiiiiii");
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
  margin-bottom: 10px;
}
@media (max-width: 768px) {
  .form-control {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0 20px;
  }
}
.type__buttons {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
.switch-text {
  position: relative;
  width: auto;
  height: 45px;
  margin: 0;
}
.switch-labels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  background-color: #e9ecef;
  border-radius: 5px;
  z-index: 1;
}
.switch-label {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 13px;
  white-space: nowrap;
  text-align: center;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  &.active {
    color: #fff;
    background-color: #3165cb;
  }
}
</style>
