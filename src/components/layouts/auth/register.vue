<template>
  <div>
    <div class="auth__body auth__form mb-30" v-if="!verify">
      <AppText
        :size="isDesktopSmall ? 20 : 26"
        :line-height="isDesktopSmall ? 30 : 32"
        weight="700"
        class="mb-20"
      >
        Ro'yxatdan o'tish
      </AppText>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(registerUser)">
          <div class="form-control">
            <div class="form-group">
              <base-select
                vid="type"
                label="Foydalanuvchi shakli"
                rules="required"
                type="text"
                placeholder="Foydalanuvchi shakli"
                :optionsProp="usertype"
                v-model="userValueType"
                @itemSelected="userType"
                :append="true"
              >
                <template #append>
                  <svg
                    class="Dropdown_self__FtxaI"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="height: 1rem; width: 1rem"
                  >
                    <path
                      d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668"
                      stroke="rgb(51, 54, 57)"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </template>
              </base-select>
            </div>
            <div class="form-group">
              <base-input
                type="text"
                vid="phone"
                rules="required|min:9"
                label="Telefon raqam"
                placeholder="93 343-43-43"
                v-mask="'#########'"
                v-model="form.phone"
                :prepend="true"
              >
                <template #prepend> +998 </template>
              </base-input>
            </div>
            <div class="form-group">
              <base-input
                type="text"
                vid="first_name"
                rules="required"
                label="Ismingizni kiritng"
                placeholder="Ism"
                v-model="form.first_name"
              />
            </div>
            <div class="form-group">
              <base-input
                type="text"
                vid="last_name"
                rules="required"
                label="Familiyangizni kiritng"
                placeholder="Familiya"
                v-model="form.last_name"
              />
            </div>
            <div class="form-group">
              <base-input
                :type="passwordField ? 'text' : 'password'"
                vid="password"
                rules="required"
                label="Parolni kiriting"
                placeholder="Parolni kiriting"
                v-model="form.password"
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
            <div class="form-group">
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
            </div>
          </div>

          <app-button
            theme="info"
            type="submit"
            :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
            :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
            :height="45"
            class="w-100 mb-20"
          >
            Davom etish
          </app-button>
          <div class="form-group">
            <AppText
              size="14"
              weight="700"
              line-height="17"
              :class="isDesktopSmall ? 'text-center' : ''"
            >
              Akkountingiz bormi ?
              <router-link
                style="color: #008ae4 !important; margin-left: 5px"
                to="/sign-in"
              >
                Tizimga kiring
              </router-link>
            </AppText>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <div class="auth__body auth__form mb-30" v-if="verify">
      <AppText
        :size="isMobileSmall ? '16' : '20'"
        :line-height="isMobileSmall ? '20' : '24'"
        weight="400"
        class="text-center mb-20"
      >
        Kod sms orqali quyidagi raqamga yuborildi:
        <p class="bold-text mt-10">{{ user }}</p>
      </AppText>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(verifyUser)">
          <div class="form-control">
            <div class="form-group">
              <base-input
                type="text"
                vid="code"
                rules="required"
                label="Kodni kiriting"
                placeholder="Kodni kiritng"
                v-mask="'######'"
                v-model="verifyCode"
              >
              </base-input>
            </div>
          </div>
          <div class="d-flex justify-space-between flex-wrap">
            <app-button
              theme="orange"
              :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
              :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
              :height="45"
              @click="goBack"
            >
              Orqaga
            </app-button>
            <app-button
              theme="info"
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
              <a
                class="link-title"
                :disabled="registerTimer !== 0"
                @click="resendCode"
              >
                Kodni qayta yuborish
              </a>
              <b> {{ timerFormat() }}</b>
            </AppText>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import "../../../assets/styles/pages/auth.scss";
import { ValidationObserver } from "vee-validate";
import { mapActions, mapGetters, mapMutations } from "vuex";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";

export default {
  name: "AppRegister",
  components: {
    ValidationObserver,
    BaseInput,
    AppButton,
    BaseSelect,
  },
  data() {
    return {
      form: {
        phone: "",
        password: "",
        type: "",
        last_name: "",
        first_name: "",
      },
      verifyCode: "",
      verify: false,
      passwordField: false,
      passwordConfirmationField: false,
      confirmPassword: "",
      isActive: false,
      loading: false,
      user: "",
      registerTimer: 120,
      userValueType: "",
      usertype: [
        {
          value: "applicant",
          name: "Abituriyent",
        },
        {
          value: "pupil",
          name: "O'quvchi",
        },
        {
          value: "teacher",
          name: "O'qituvchi",
        },
      ],
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),

    passwordSee() {
      this.passwordField = !this.passwordField;
    },
    confirmationSee() {
      this.passwordConfirmationField = !this.passwordConfirmationField;
    },
    setTimer() {
      let _this = this;
      let testTimerInterval = setInterval(function () {
        if (_this.registerTimer <= 0) {
          clearInterval(testTimerInterval);
          return;
        }
        _this.registerTimer--;
      }, 1000);
    },
    timerFormat() {
      let sec_num = parseInt(this.registerTimer);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    },
    registerUser() {
      this.loading = true;
      this.$http
        .post("users/register/", {
          phone: "998" + this.form.phone,
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          password: this.form.password,
          type: this.form.type,
        })
        .then((res) => {
          if (res.result && res.result.user) {
            this.user = res.result.user;
            this.verify = true;
            this.setTimer();
            this.loading = false;
            this.successNotification(
              res.result.user + " telefon raqamiga kod yuborildi"
            );
          }
        })
        .catch((error) => {
          this.warningNotification(error.response.data.phone[0]);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    verifyUser() {
      this.loading = true;
      this.$http
        .post("users/verify/otp/", {
          code: this.verifyCode,
          user: this.user,
        })
        .then((res) => {
          if (res && res.code === 200) {
            this.successNotification("Hisobingiz muvaffaqiyatli tasdiqlandi.");
            this.$router.push({ name: "login" });
          }
        })
        .catch((err) => {
          this.errorNotification(err.response.data.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    goBack() {
      this.form = {
        phone: "",
        password: "",
        type: "applicant",
        last_name: "",
        first_name: "",
      };
      this.registerTimer = 120;
      this.verify = false;
    },
    resendCode() {
      if (this.registerTimer === 0) {
        this.registerTimer = 120;
        this.registerUser();
      }
    },
    userType(item) {
      this.form.type = item.value;
      this.userValueType = item.name;
    },
  },
  watch: {
    typeValue() {
      this.typeChanged();
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
  border-radius: 0.5rem;
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
  border-radius: 0.5rem;
  &.active {
    color: #fff;
    background-color: #3165cb;
  }
}
</style>
