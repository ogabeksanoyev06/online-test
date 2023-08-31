<template>
  <div>
    <header
      class="header"
      :class="{
        header__shadow: $route.path !== '/',
        hidden: isHeaderHidden,
      }"
    >
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <!-- <AppButton
              v-if="isDesktopMedium"
              theme="transparent"
              sides="10"
              class="hamburger__menu"
              @click="showNavigationDrawer"
            >
              <img src="/icons/hamburger.svg" alt="" />
            </AppButton> -->
            <router-link to="/" class="logo">
              <img src="/svg/logo1.svg" alt="logo" />
            </router-link>

            <ul class="header__menu" v-if="!isDesktopMedium">
              <li
                class="header__menu-item"
                v-for="(item, index) in menu"
                :key="index"
              >
                <router-link :to="item.link" class="header__menu-link">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>

          <div class="header__right">
            <router-link to="/my-favourites" class="header__favourite mr-10">
              <span class="header__favourite-icon">
                <span class="header__favourite-notification">
                  {{ favouriteCourses.length }}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon icon__favorites"
                >
                  <path
                    d="M21.2913 4.61183C20.7805 4.10083 20.1741 3.69547 19.5066 3.41891C18.8392 3.14235 18.1238 3 17.4013 3C16.6788 3 15.9634 3.14235 15.2959 3.41891C14.6285 3.69547 14.022 4.10083 13.5113 4.61183L12.4513 5.67183L11.3913 4.61183C10.3596 3.58013 8.96032 3.00053 7.50129 3.00053C6.04226 3.00053 4.64298 3.58013 3.61129 4.61183C2.5796 5.64352 2 7.04279 2 8.50183C2 9.96086 2.5796 11.3601 3.61129 12.3918L4.67129 13.4518L12.4513 21.2318L20.2313 13.4518L21.2913 12.3918C21.8023 11.8811 22.2076 11.2746 22.4842 10.6072C22.7608 9.93972 22.9031 9.22431 22.9031 8.50183C22.9031 7.77934 22.7608 7.06393 22.4842 6.39647C22.2076 5.72901 21.8023 5.12258 21.2913 4.61183V4.61183Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </router-link>
            <router-link to="/my-cart" class="header__basket active mr-10">
              <span class="header__basket-icon">
                <span class="header__basket-notification"> 2 </span>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12H15.44C16.1087 12 16.7582 11.7767 17.2854 11.3654C17.8126 10.9542 18.1873 10.3786 18.35 9.73L20 3.24C20.0375 3.09241 20.0407 2.93821 20.0095 2.78917C19.9783 2.64013 19.9135 2.50018 19.82 2.38C19.7227 2.25673 19.5978 2.1581 19.4554 2.09208C19.3129 2.02606 19.1569 1.99452 19 2H4.76C4.55369 1.41645 4.17193 0.910998 3.66707 0.552938C3.1622 0.194879 2.55894 0.00173951 1.94 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H1.94C2.16843 1.99334 2.39226 2.06513 2.57421 2.20341C2.75615 2.34169 2.88525 2.53812 2.94 2.76L3 3.24L4.73 10C3.93435 10.0358 3.18551 10.3862 2.64822 10.9741C2.11093 11.5621 1.8292 12.3394 1.865 13.135C1.9008 13.9306 2.25121 14.6795 2.83914 15.2168C3.42707 15.7541 4.20435 16.0358 5 16H5.18C5.01554 16.4531 4.96269 16.9392 5.02593 17.4171C5.08917 17.895 5.26665 18.3506 5.54332 18.7454C5.81999 19.1401 6.18772 19.4624 6.61535 19.6849C7.04299 19.9074 7.51795 20.0235 8 20.0235C8.48205 20.0235 8.95701 19.9074 9.38465 19.6849C9.81228 19.4624 10.18 19.1401 10.4567 18.7454C10.7334 18.3506 10.9108 17.895 10.9741 17.4171C11.0373 16.9392 10.9845 16.4531 10.82 16H13.18C13.0155 16.4531 12.9627 16.9392 13.0259 17.4171C13.0892 17.895 13.2666 18.3506 13.5433 18.7454C13.82 19.1401 14.1877 19.4624 14.6154 19.6849C15.043 19.9074 15.5179 20.0235 16 20.0235C16.4821 20.0235 16.957 19.9074 17.3846 19.6849C17.8123 19.4624 18.18 19.1401 18.4567 18.7454C18.7334 18.3506 18.9108 17.895 18.9741 17.4171C19.0373 16.9392 18.9845 16.4531 18.82 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15C20 14.7348 19.8946 14.4804 19.7071 14.2929C19.5196 14.1054 19.2652 14 19 14ZM17.72 4L16.41 9.24C16.3552 9.46188 16.2262 9.65831 16.0442 9.79659C15.8623 9.93487 15.6384 10.0067 15.41 10H6.78L5.28 4H17.72ZM8 18C7.80222 18 7.60888 17.9414 7.44443 17.8315C7.27998 17.7216 7.15181 17.5654 7.07612 17.3827C7.00043 17.2 6.98063 16.9989 7.01921 16.8049C7.0578 16.6109 7.15304 16.4327 7.29289 16.2929C7.43275 16.153 7.61093 16.0578 7.80491 16.0192C7.99889 15.9806 8.19996 16.0004 8.38268 16.0761C8.56541 16.1518 8.72159 16.28 8.83147 16.4444C8.94135 16.6089 9 16.8022 9 17C9 17.2652 8.89464 17.5196 8.70711 17.7071C8.51957 17.8946 8.26522 18 8 18ZM16 18C15.8022 18 15.6089 17.9414 15.4444 17.8315C15.28 17.7216 15.1518 17.5654 15.0761 17.3827C15.0004 17.2 14.9806 16.9989 15.0192 16.8049C15.0578 16.6109 15.153 16.4327 15.2929 16.2929C15.4327 16.153 15.6109 16.0578 15.8049 16.0192C15.9989 15.9806 16.2 16.0004 16.3827 16.0761C16.5654 16.1518 16.7216 16.28 16.8315 16.4444C16.9414 16.6089 17 16.8022 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18Z"
                    fill="#95ABC6"
                  />
                </svg>
              </span>
            </router-link>
            <div class="header__language">
              <AppButton
                theme="grey"
                :sides="20"
                :height="40"
                class="d-flex align-center mr-10"
                @click="$router.push({ path: '/' })"
              >
                <img
                  src="https://domtut.uz/resources/uploads/lang/uz.jpg"
                  alt="Uz"
                />
              </AppButton>
            </div>
            <div class="header__auth" v-if="!userIsLoggedOn">
              <AppButton
                theme="main"
                :font-size="16"
                :sides="20"
                :height="40"
                weight="500"
                class="header__login d-flex align-center"
                @click="$router.push({ path: '/sign-in' })"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  :class="isMobileSmall ? '' : 'mr-10'"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.96484 11.4712C7.41934 11.4541 7.80169 11.8086 7.81885 12.2631C7.85753 13.2877 7.91186 14.0356 7.96527 14.5718C8.01787 15.0998 8.33665 15.4175 8.78101 15.4718C9.30498 15.5359 10.0441 15.5883 11.0584 15.5883C12.0728 15.5883 12.8119 15.5359 13.3359 15.4718C13.78 15.4175 14.099 15.0997 14.1516 14.5715C14.2507 13.5762 14.3525 11.8567 14.3525 9.00006C14.3525 6.14339 14.2507 4.42388 14.1516 3.42862C14.099 2.90045 13.78 2.5826 13.3359 2.5283C12.8119 2.46425 12.0728 2.41183 11.0584 2.41183C10.0441 2.41183 9.30498 2.46425 8.78101 2.5283C8.33665 2.58262 8.01787 2.90033 7.96527 3.42837C7.91186 3.96455 7.85753 4.71239 7.81885 5.73701C7.80169 6.19151 7.41934 6.54605 6.96484 6.52889C6.51034 6.51173 6.1558 6.12938 6.17296 5.67488C6.21266 4.6232 6.26895 3.841 6.32632 3.2651C6.44694 2.05437 7.29106 1.05111 8.58116 0.89341C9.18169 0.820001 9.98852 0.76477 11.0584 0.76477C12.1284 0.76477 12.9352 0.820004 13.5357 0.893418C14.826 1.05114 15.6699 2.05487 15.7905 3.26536C15.8967 4.33121 15.9996 6.10822 15.9996 9.00006C15.9996 11.8919 15.8967 13.6689 15.7905 14.7348C15.6699 15.9453 14.826 16.949 13.5357 17.1067C12.9352 17.1801 12.1284 17.2354 11.0584 17.2354C9.98852 17.2354 9.18169 17.1801 8.58116 17.1067C7.29106 16.949 6.44694 15.9457 6.32632 14.735C6.26895 14.1591 6.21266 13.3769 6.17296 12.3252C6.1558 11.8707 6.51034 11.4884 6.96484 11.4712Z"
                    fill="#fff"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.24109 11.3001C8.91949 11.6217 8.91949 12.1431 9.24109 12.4647C9.5627 12.7864 10.0841 12.7864 10.4057 12.4647L13.2881 9.58239C13.6097 9.26078 13.6097 8.73935 13.2881 8.41775L10.4057 5.5354C10.0841 5.21379 9.5627 5.21379 9.24109 5.5354C8.91949 5.857 8.91949 6.37843 9.24109 6.70004L10.7176 8.17654H2.82342C2.3686 8.17654 1.99989 8.54525 1.99989 9.00007C1.99989 9.45489 2.3686 9.8236 2.82342 9.8236L10.7176 9.8236L9.24109 11.3001Z"
                    fill="#fff"
                  ></path>
                </svg>
                <!-- <i class="fas fa-user"></i> -->
                <span v-if="!isMobileSmall"> Tizimga kirish</span>
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </header>
    <transition name="slide-right">
      <NavigationDrawer
        v-if="navigationDrawer"
        @closeNavigationDrawer="closeDrawer"
      />
    </transition>
  </div>
</template>

<script>
import "./header.scss";
import NavigationDrawer from "./NavigationDrawer";
import AppButton from "../../../shared-components/AppButton";
import TokenService from "../../../../service/TokenService";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AppHeader",
  components: { AppButton, NavigationDrawer },
  data() {
    return {
      activeId: null,
      subActiveId: null,
      menu: [
        {
          id: 1,
          title: "Yoʻriqnoma",
          link: "/guide",
        },
        {
          id: 2,
          title: "Nashrlar",
          link: "/publication",
        },
        {
          id: 3,
          title: "Testlar",
          link: "/choose-tests",
        },
        {
          id: 4,
          title: "Tadqiqotlar",
          link: "/internation-studies",
        },
        {
          id: 5,
          title: "Videodarslar",
          link: "/video-course",
        },
        // {
        //   id: 6,
        //   title: "Kutubxona",
        //   link: "/library",
        // },
      ],
      search: "",
      searchPackage: [],
      navigationDrawer: false,
      showDropdown: false,
      accountDropdown: false,
      languageDropdown: false,
      isHeaderHidden: false,
      scrollY: 0,
    };
  },
  props: {
    headerShadow: {
      type: Boolean,
      default: false,
    },
    headerGreyBg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["windowHeight"]),
  },
  methods: {
    closeDrawer() {
      this.navigationDrawer = false;
    },
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    ...mapActions([]),
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },

    logout() {
      this.$api
        .delete(
          "auth/Login/logout?refreshtoken=" + TokenService.getRefreshToken()
        )
        .then((data) => {
          if (data.statusCode === 200) {
            TokenService.removeToken();
            TokenService.removeRefreshToken();
            localStorage.clear();
            this.setToken();
          }
        })
        .catch((error) => {
          console.log(error, " error");
        });
    },
    setToken() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
    },
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
  async mounted() {
    if (this.userIsLoggedOn) {
      await this.getUser();
    }
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    async isLoggedOn() {
      if (this.userIsLoggedOn) {
        await this.getUser();
      }
    },
    scrollY(newScrollY) {
      // Your logic here based on newScrollY and headerHeight
      this.isHeaderHidden = newScrollY > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff96;
  z-index: 49;
}
</style>
