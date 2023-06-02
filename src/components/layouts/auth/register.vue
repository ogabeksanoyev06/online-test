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
    <div class="auth__form" v-if="true" style="max-width: 500px">
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
    <div class="auth__form" v-if="true" style="max-width: 500px">
      <div class="auth__form-header">
        <div class="header-logo">
          <img src="/svg/logo1.svg" alt="logo" />
        </div>
        <p class="header-text">
          Bizning tizim orqali o‘z biliminggizni yuksaltiring
        </p>
      </div>
      <AppText size="14" weight="600" line-height="17" class="text-center">
        <span style="color: #e6a23c">+998 93 081 91 40</span> raqamiga kod
        yuborildi
      </AppText>
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

        <div class="mt-30 mb-30 text-center d-flex">
          <AppButton
            theme="white"
            :font-size="isMobile ? 14 : 16"
            :sides="isMobile ? 10 : 30"
            @click="$router.push({ path: '/' })"
            class="w-100 mr-10 mb-10"
          >
            Orqaga qaytish
          </AppButton>
          <AppButton
            theme="main"
            :font-size="isMobile ? 14 : 16"
            :sides="isMobile ? 10 : 30"
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
    <div class="auth__form" v-if="true">
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
        <block-wrap
          :count="isMobile ? 1 : 2"
          offset-x="12"
          offset-y="12"
          class="mb-20"
        >
          <el-form-item label="Ismingiz" prop="firstname">
            <el-input placeholder="Ismingiz" v-model="form.firstName" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="Familiyangiz" prop="lastname">
            <el-input
              placeholder="Familiyangiz"
              v-model="form.lastname"
              clearable
            >
            </el-input>
          </el-form-item>
          <el-form-item label="Viloyatni tanlang">
            <el-select
              v-model="form.region"
              placeholder="Viloyatni tanlang"
              class="w-100"
            >
              <el-option label="Barchasi" value="all" />
              <el-option
                v-for="(item, i) in list"
                :label="item.name"
                :value="item.soato"
                :key="i"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Tumanni tanlang">
            <el-select
              v-model="form.city"
              placeholder="Tumanni tanlang"
              class="w-100"
              disabled
            >
              <el-option
                v-for="(item, i) in list"
                :label="item.name"
                :value="item.soato"
                :key="i"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Maktabni tanlang">
            <el-select
              v-model="form.school"
              placeholder="Maktabni tanlang"
              class="w-100"
            >
              <el-option
                v-for="(item, i) in list"
                :label="item.name"
                :value="item.soato"
                :key="i"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Parol" prop="password">
            <el-input id="password1" type="password" v-model="form.password">
              <template slot="append">
                <img
                  src="/icons/eye.svg"
                  style="cursor: pointer; vertical-align: inherit"
                  @click="passwordSee"
                  v-if="passwordField"
                />
                <img
                  src="/icons/eye-closed2.svg"
                  style="cursor: pointer; vertical-align: inherit"
                  @click="passwordSee"
                  v-if="!passwordField"
                />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="Parolni takrorlang" prop="passwordConfirmation">
            <el-input
              id="password2"
              type="password"
              v-model="form.passwordConfirmation"
            >
              <template slot="append">
                <img
                  src="/icons/eye.svg"
                  style="cursor: pointer; vertical-align: inherit"
                  @click="confirmationSee"
                  v-if="passwordConfirmationField"
                />
                <img
                  src="/icons/eye-closed2.svg"
                  style="cursor: pointer; vertical-align: inherit"
                  @click="confirmationSee"
                  v-if="!passwordConfirmationField"
                />
              </template>
            </el-input>
          </el-form-item>
        </block-wrap>

        <div class="mt-30 mb-30 text-center">
          <AppButton
            theme="main"
            :font-size="isMobile ? 14 : 16"
            :sides="isMobile ? 20 : 30"
            @click="$router.push({ path: '/' })"
            class=""
          >
            Ma'lumotlarni saqlash
          </AppButton>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
import AppButton from "../../shared-components/AppButton.vue";

export default {
  name: "AppRegister",
  components: {
    AppButton,
    BlockWrap,
  },
  data() {
    return {
      telefon: { phone: "" },
      codeVerify: { code: "" },
      form: {
        lastName: "",
        firstName: "",
        login: "",
        region: "all",
        city: "",
        school: "",
        password: "",
        passwordConfirmation: "",
      },
      list: [
        {
          id: 3606,
          name: "Toshkent viloyati",
          soato: 1727,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3719,
          name: "Xorazm viloyati",
          soato: 1733,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3759,
          name: "Qoraqalpog‘iston Respublikasi",
          soato: 1735,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3560,
          name: "Sirdaryo viloyati",
          soato: 1724,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3319,
          name: "Jizzax viloyati",
          soato: 1708,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3476,
          name: "Samarqand viloyati",
          soato: 1718,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3661,
          name: "Farg‘ona viloyati",
          soato: 1730,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3273,
          name: "Buxoro viloyati",
          soato: 1706,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3357,
          name: "Qashqadaryo viloyati",
          soato: 1710,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3432,
          name: "Namangan viloyati",
          soato: 1714,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3519,
          name: "Surxondaryo viloyati",
          soato: 1722,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3403,
          name: "Navoiy viloyati",
          soato: 1712,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3573,
          name: "Toshkent shahri",
          soato: 1726,
          parent: 3235,
          parent_soato: 17,
        },
        {
          id: 3236,
          name: "Andijon viloyati",
          soato: 1703,
          parent: 3235,
          parent_soato: 17,
        },
      ],
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
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background: #fff;
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
