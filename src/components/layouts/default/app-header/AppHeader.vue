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
            <AppButton
              v-if="isDesktopMedium"
              theme="transparent"
              sides="10"
              class="hamburger__menu"
              @click="showNavigationDrawer"
            >
              <img src="/icons/hamburger.svg" alt="" />
            </AppButton>
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
            <div class="header__auth" v-if="!userIsLoggedOn">
              <AppButton
                theme="main"
                :font-size="isMobileSmall ? 14 : 16"
                :sides="isMobileSmall ? 20 : 30"
                :height="isMobileSmall ? '40' : '50'"
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
                <span v-if="!isMobileSmall"> Kabinetga kirish</span>
              </AppButton>
            </div>

            <router-link
              to="/my-favourites"
              class="header__favourite mr-10"
              v-if="false"
            >
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

            <router-link
              to="/my-cart"
              class="header__basket mr-10"
              v-if="false"
            >
              <span class="header__basket-icon">
                <span class="header__basket-notification"> 4 </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="icon icon__cart"
                >
                  <path
                    d="M5.625 18.75C6.48795 18.75 7.1875 18.0504 7.1875 17.1875C7.1875 16.3246 6.48795 15.625 5.625 15.625C4.76206 15.625 4.0625 16.3246 4.0625 17.1875C4.0625 18.0504 4.76206 18.75 5.625 18.75Z"
                  ></path>
                  <path
                    d="M15 18.75C15.8629 18.75 16.5625 18.0504 16.5625 17.1875C16.5625 16.3246 15.8629 15.625 15 15.625C14.1371 15.625 13.4375 16.3246 13.4375 17.1875C13.4375 18.0504 14.1371 18.75 15 18.75Z"
                  ></path>
                  <path
                    d="M3.125 5H16.7512C16.8427 5 16.9332 5.02011 17.0161 5.0589C17.099 5.0977 17.1724 5.15423 17.231 5.22451C17.2897 5.29479 17.3322 5.37709 17.3555 5.4656C17.3789 5.55412 17.3825 5.64668 17.3661 5.73674L16.0601 12.9242C16.0339 13.0683 15.958 13.1985 15.8456 13.2923C15.7332 13.3861 15.5915 13.4375 15.4451 13.4375H5.18665C5.04034 13.4375 4.89866 13.3862 4.78631 13.2924C4.67395 13.1987 4.59804 13.0686 4.57179 12.9246L2.65034 2.38788C2.6241 2.24394 2.54818 2.11377 2.43583 2.02005C2.32347 1.92633 2.1818 1.875 2.03548 1.875H0.9375"
                    stroke="currentColor"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </router-link>

            <div
              class="header__account"
              @click="accountDropdown = !accountDropdown"
              v-on-click-outside:excludedClass="hideAccountDropdown"
              v-if="false"
            >
              <div class="header__account-photo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon icon__user"
                >
                  <path
                    d="M15.71 12.71C16.6904 11.9387 17.406 10.8809 17.7572 9.68394C18.1085 8.48697 18.0779 7.21027 17.6698
                                  6.03147C17.2617 4.85267 16.4963 3.83039 15.4801 3.10686C14.4639 2.38332 13.2474 1.99451 12 1.99451C10.7525
                                  1.99451 9.53611 2.38332 8.51993 3.10686C7.50374 3.83039 6.73834 4.85267 6.33021 6.03147C5.92208 7.21027
                                  5.89151 8.48697 6.24276 9.68394C6.59401 10.8809 7.3096 11.9387 8.29 12.71C6.61007 13.383 5.14428 14.4994
                                  4.04889 15.9399C2.95349 17.3805 2.26956 19.0913 2.07 20.89C2.05555 21.0213 2.06711 21.1542 2.10402 21.2811C2.14093
                                  21.4079 2.20246 21.5263 2.28511 21.6293C2.45202 21.8375 2.69478 21.9708 2.96 22C3.22521 22.0292 3.49116 21.9518
                                  3.69932 21.7849C3.90749 21.618 4.04082 21.3752 4.07 21.11C4.28958 19.1552 5.22168 17.3498 6.68822 16.0388C8.15475
                                  14.7278 10.0529 14.003 12.02 14.003C13.9871 14.003 15.8852 14.7278 17.3518 16.0388C18.8183 17.3498 19.7504
                                  19.1552 19.97 21.11C19.9972 21.3557 20.1144 21.5827 20.2991 21.747C20.4838 21.9114 20.7228 22.0015 20.97
                                  22H21.08C21.3421 21.9698 21.5817 21.8373 21.7466 21.6313C21.9114 21.4252 21.9881 21.1624 21.96 20.9C21.7595
                                  19.0962 21.0719 17.381 19.9708 15.9382C18.8698 14.4954 17.3969 13.3795 15.71 12.71ZM12 12C11.2089 12 10.4355
                                  11.7654 9.77772 11.3259C9.11992 10.8864 8.60723 10.2616 8.30448 9.53074C8.00173 8.79983 7.92251 7.99557 8.07686
                                  7.21964C8.2312 6.44372 8.61216 5.73099 9.17157 5.17158C9.73098 4.61217 10.4437 4.2312 11.2196 4.07686C11.9956
                                  3.92252 12.7998 4.00173 13.5307 4.30448C14.2616 4.60724 14.8863 5.11993 15.3259 5.77772C15.7654 6.43552 16
                                  7.20888 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12Z"
                  ></path>
                </svg>
              </div>

              <transition name="slide">
                <div class="header__dropdown" v-if="accountDropdown">
                  <ul
                    class="header__dropdown-wrap bordered shadowed radius overflow"
                  >
                    <li class="header__dropdown-item">
                      <router-link
                        to="/cabinet"
                        class="header__dropdown-link pa-10"
                      >
                        <AppText size="14" line-height="18" weight="700">
                          Mening profilim
                        </AppText>
                      </router-link>
                    </li>

                    <li class="header__dropdown-item" @click.prevent="logout">
                      <router-link to="/" class="header__dropdown-link pa-10">
                        <AppText size="14" line-height="18" weight="700">
                          Chiqish
                        </AppText>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </transition>
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
import AppText from "../../../shared-components/AppText";
import TokenService from "../../../../service/TokenService";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AppHeader",
  components: { AppButton, NavigationDrawer, AppText },
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
