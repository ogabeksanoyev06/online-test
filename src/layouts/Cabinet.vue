<template>
  <div>
    <AppHeader />
    <div class="page__wrap py-30" style="background-color: #f5f5f5">
      <div class="container">
        <div class="section__top mb-30">
          <app-text
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 28 : 36"
            weight="700"
          >
            Mening profilim
          </app-text>
        </div>
        <div class="content">
          <div class="sidebar mr-30">
            <div class="account__details text-center">
              <div class="account__photo mb-20">
                <div class="account__photo-wrap">
                  <transition name="fade">
                    <div class="account__photo-empty" v-if="!hasImage">
                      <img :src="user.photo" alt="" />
                    </div>
                  </transition>
                  <transition name="fade">
                    <image-uploader
                      :preview="true"
                      :className="[
                        'fileinput',
                        { 'fileinput--loaded': hasImage },
                      ]"
                      capture="environment"
                      :debug="1"
                      doNotResize="gif"
                      :autoRotate="true"
                      outputFormat="file"
                      @change="changePhoto"
                    >
                      <label for="fileInput" slot="upload-label">
                        <span class="upload-caption">
                          <img src="/icons/edit.svg" alt="" />
                        </span>
                      </label>
                    </image-uploader>
                  </transition>
                </div>
              </div>
              <AppText
                :size="isMobileSmall ? 14 : 16"
                :line-height="isMobileSmall ? 18 : 24"
                weight="700"
                class="mb-10"
              >
                {{ user.first_name + " " + user.last_name }}
              </AppText>
              <AppText
                :size="isMobileSmall ? 14 : 16"
                :line-height="isMobileSmall ? 18 : 20"
                weight="700"
                class="color-secondary mb-10"
              >
                Umumiy ball: 120
              </AppText>
              <AppText
                :size="isMobileSmall ? 14 : 16"
                :line-height="isMobileSmall ? 18 : 24"
                weight="700"
                class="color-secondary mb-10"
              >
                Hisobim: {{ user.balance / 100 }}
              </AppText>
              <app-button
                theme="red"
                radius="10"
                :font-size="16"
                :sides="20"
                :height="45"
                weight="500"
                @click="logOut"
              >
                Chiqish
              </app-button>
            </div>
          </div>
          <div class="content__main">
            <div class="sidebar__menu">
              <button
                class="sidebar__menu-item"
                :class="
                  currentRouteName === item.path.replace('/', '')
                    ? 'active'
                    : ''
                "
                v-for="(item, idx) in sidebarMenu"
                :key="idx"
                @click="$router.push({ path: `${item.path}` })"
              >
                {{ item.title }}
              </button>
            </div>
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "../components/layouts/default/app-header/AppHeader";
import TokenService from "../service/TokenService";
import "../assets/styles/pages/cabinet.scss";
import ImageUploader from "vue-image-upload-resize";
import { mapActions, mapGetters, mapMutations } from "vuex";
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "MyCabinet",
  components: { ImageUploader, AppHeader, AppFooter, AppButton },
  data() {
    return {
      hasImage: false,
      image: null,
      sidebarMenu: [
        {
          title: "Asosiy malumotlar",
          path: "/cabinet",
        },
        {
          title: "Hisobni to`ldirish",
          path: "/top-up-balance",
        },
        {
          title: "To`lovlar tarixi",
          path: "/payment-history",
        },
        {
          title: "Mening kurslarim",
          path: "/my-courses",
        },
        {
          title: "Test natijalari",
          path: "/tests-results",
        },
      ],
      userBalance: {
        balance: 0,
      },
      userRating: {
        examBall: 0,
        examCount: 0,
        position: 0,
      },
    };
  },
  computed: {
    ...mapGetters(["user"]),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions(["getUser"]),
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
    getUserBalance() {
      this.$http
        .get("/")
        .then((data) => {
          if (!data.error) {
            this.userBalance = data.result;
          }
        })
        .catch((error) => {
          this.errorMes = error.response.data.error.message;
        });
    },
    getUserRating() {
      this.$http
        .get("/")
        .then((data) => {
          if (!data.error) {
            this.userBalance = data.result;
          }
        })
        .catch((error) => {
          this.errorMes = error.response.data.error.message;
        });
    },
    updateProfile() {
      let form = new FormData();
      form.append("first_name", this.user.first_name);
      form.append("last_name", this.user.last_name);
      form.append("father_name", this.user.father_name);
      form.append("email", this.user.email);
      form.append("phone", this.user.phone);
      form.append("photo", this.user.photo);
      form.append("districtsId", this.user.districtsId);
      this.$http.patch("users/profile/", form).then((res) => {
        this.user = res;
        this.successNotification("Saqlandi");
      });
    },
    changePhoto(file) {
      this.user.photo = file;
      this.updateProfile();
      console.log(file);
    },
    logOut() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
      localStorage.clear();
      this.warningNotification("Tizimdan chiqildi");
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.getUser();
    this.setToken();
    // this.getUserBalance();
    // this.getUserRating();
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>

<style lang="scss" scoped>
.page {
  &__wrap {
    min-height: calc(100vh - 402px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.slide-enter {
  opacity: 0;
  transform: translateY(-20px);
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.slide-enter-to {
  opacity: 1;
  transform: translateY(0px);
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  transition: transform 0.2s ease, opacity 0.2s ease;
}
</style>
