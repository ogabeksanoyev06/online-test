<template>
  <div class="auth__body">
    <AppText
      :size="isDesktopSmall ? 26 : 30"
      :line-height="isDesktopSmall ? 30 : 36"
      weight="700"
      class="text-center"
    >
      Ro'yxatdan o'tish
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
        :model="telefon"
        :rules="rules"
        ref="ruleForm"
        labelPosition="top"
      >
        <el-form-item label="Telefon raqam" prop="telefon">
          <el-input
            placeholder="Telefon raqam"
            v-model="telefon.phone"
            type="tel"
            v-mask="'#########'"
            clearable
          >
            <template slot="prepend">+998</template>
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
            Ro'yxatdan o'tish
          </AppButton>
        </div>
      </el-form>
      <AppText size="14" weight="700" line-height="17" class="text-center">
        Akkountingiz bormi ?
        <router-link
          style="color: #3563cb !important; margin-left: 5px"
          to="/sign-in"
        >
          Tizimga kiring
        </router-link>
      </AppText>
    </div>
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
        :model="codeVerify"
        :rules="rules"
        ref="ruleForm"
        labelPosition="top"
      >
        <el-form-item label="Kodni kiriting" prop="code">
          <el-input
            placeholder="Kodni kiriting"
            v-model="codeVerify.code"
            type="tel"
            v-mask="'####'"
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
            Davom etish
          </AppButton>
        </div>
      </el-form>
      <AppText
        size="14"
        weight="700"
        line-height="17"
        class="text-center mb-20"
      >
        02:00
      </AppText>
      <AppText size="14" weight="700" line-height="17" class="text-center">
        Kod kelmadimi ?
        <router-link
          style="color: #3563cb !important; margin-left: 5px"
          to="/sign-in"
        >
          Kodni qayta yuborish
        </router-link>
      </AppText>
    </div>
  </div>
</template>

<script>
import AppButton from "../../shared-components/AppButton.vue";

export default {
  name: "AppRegister",
  components: {
    AppButton,
  },
  data() {
    return {
      telefon: { phone: "" },
      codeVerify: { code: "" },
      form: {
        lastName: "",
        firstName: "",
        login: "",
        password: "",
        passwordConfirmation: "",
      },
      passwordField: false,
      passwordConfirmationField: false,
      rules: {
        phone: [
          {
            required: true,
            message: "Maydonni to'dirish shart !",
            trigger: "change",
          },
          {
            min: 9,
            max: 9,
            message: "Belgilar soni kamida 9 ta bo'lishi kerak !",
            trigger: "change",
          },
        ],
        code: [
          {
            required: true,
            message: "Maydonni to'dirish shart !",
            trigger: "change",
          },
          {
            min: 4,
            max: 4,
            message: "Belgilar soni kamida 4 ta bo'lishi kerak !",
            trigger: "change",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Maydonni to'dirish shart !",
            trigger: "change",
          },
          {
            min: 3,
            message: "Belgilar soni kamida 3 ta bo'lishi kerak !",
            trigger: "change",
          },
        ],
        firstName: [
          {
            required: true,
            message: "Maydonni to'dirish shart !",
            trigger: "change",
          },
          {
            min: 3,
            message: "Belgilar soni kamida 3 ta bo'lishi kerak !",
            trigger: "change",
          },
        ],
        // brandName: [
        //   {
        //     required: true,
        //     message: "Maydonni to'dirish shart !",
        //     trigger: "change",
        //   },
        //   {
        //     min: 3,
        //     message: "Belgilar soni kamida 3 ta bo'lishi kerak !",
        //     trigger: "change",
        //   },
        // ],
        sex: [
          {
            required: true,
            message: "Jinsni tanlash shart !",
            trigger: "change",
          },
        ],
        direction: [
          {
            required: true,
            message: "Yo'nalishni tanlash shart !",
            trigger: "change",
          },
        ],
        // password: [
        //   { required: true, validator: validatePass, trigger: "change" },
        //   {
        //     min: 8,
        //     message: "Belgilar soni kamida 8 ta bo'lishi kerak !",
        //     trigger: "change",
        //   },
        // ],
        // passwordConfirmation: [
        //   { required: true, validator: validatePass2, trigger: "change" },
        //   {
        //     min: 8,
        //     message: "Belgilar soni kamida 8 ta bo'lishi kerak !",
        //     trigger: "change",
        //   },
        // ],
      },
    };
  },
  methods: {
    passwordSee() {
      this.passwordField = !this.passwordField;
    },
    confirmationSee() {
      this.passwordConfirmationField = !this.passwordConfirmationField;
    },
    registerUser() {
      this.loading = true;
      this.$api
        .post("admin/Management/register/user", this.form)
        .then((res) => {
          if (!res.error) {
            this.$router.push({ name: "login" });
            console.log("oxshadi");
          } else {
            console.log("im here baby");
            this.errorNotification(res.error);
          }
        })
        .catch((err) => {
          this.errorNotification(err.response.data.error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    createLinkFormData() {
      let form = new FormData();
      form.append("lastName", this.form.lastName);
      form.append("firstName", this.form.firstName);
      form.append("telefon", "998931880416");
      form.append("password", this.form.password);
      return form;
    },
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
