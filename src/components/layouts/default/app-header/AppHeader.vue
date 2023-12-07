<template>
  <div>
    <header
      class="header"
      :class="{
        _scroll: scrolled,
        header__shadow: $route.path !== '/',
      }"
    >
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="menu"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              v-if="isDesktopMedium"
              @click="showNavigationDrawer"
            >
              <path
                d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
              ></path>
            </svg>
            <router-link to="/" class="logo">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                height="32"
                width="32"
                alt="logo"
              />
              <span>iTestify</span>
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
            <!-- <router-link
              to="/my-favourites"
              class="header__favourite"
              v-if="!isMobileSmall"
            >
              <span class="header__favourite-icon">
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8375 1.5C16.3836 1.49954 16.9242 1.6081 17.4278 1.81931C17.9313 2.03052 18.3877 2.34014 18.77 2.73C19.5578 3.52979 19.9994 4.60737 19.9994 5.73C19.9994 6.85264 19.5578 7.93022 18.77 8.73L11 16.5975L3.23001 8.73C2.4422 7.93022 2.00061 6.85264 2.00061 5.73C2.00061 4.60737 2.4422 3.52979 3.23001 2.73C3.61258 2.34042 4.06895 2.03096 4.57245 1.81972C5.07595 1.60848 5.6165 1.49968 6.16251 1.49968C6.70853 1.49968 7.24908 1.60848 7.75258 1.81972C8.25608 2.03096 8.71245 2.34042 9.09501 2.73L11 4.68L12.8975 2.745C13.2787 2.35049 13.7355 2.0369 14.2407 1.82298C14.7458 1.60906 15.2889 1.49921 15.8375 1.5ZM15.8375 2.01214e-06C15.0917 -0.000630028 14.3533 0.147643 13.6656 0.436128C12.9779 0.724614 12.3547 1.1475 11.8325 1.68L11 2.52L10.1675 1.68C9.64473 1.14846 9.02136 0.726309 8.33376 0.438145C7.64615 0.149981 6.90806 0.00157307 6.16251 0.00157307C5.41697 0.00157307 4.67888 0.149981 3.99127 0.438145C3.30367 0.726309 2.6803 1.14846 2.15751 1.68C1.09392 2.76272 0.497986 4.21977 0.497986 5.7375C0.497986 7.25523 1.09392 8.71228 2.15751 9.795L11 18.75L19.8425 9.795C20.9061 8.71228 21.502 7.25523 21.502 5.7375C21.502 4.21977 20.9061 2.76272 19.8425 1.68C19.3199 1.14818 18.6966 0.725734 18.0089 0.437298C17.3213 0.148862 16.5832 0.000207074 15.8375 2.01214e-06Z"
                    fill="#8A8A8A"
                  ></path>
                </svg>
                <span class="header__favourite-notification">
                  {{ favouriteCourses.length }}
                </span>
              </span>
            </router-link>
            <router-link
              to="/my-cart"
              class="header__basket"
              v-if="!isMobileSmall"
            >
              <span class="header__basket-icon">
                <svg
                  class="mx-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_455_5967)">
                    <path
                      d="M7.5 22.5C8.32843 22.5 9 21.8284 9 21C9 20.1716 8.32843 19.5 7.5 19.5C6.67157 19.5 6 20.1716 6 21C6 21.8284 6.67157 22.5 7.5 22.5Z"
                      fill="#8A8A8A"
                    ></path>
                    <path
                      d="M18 22.5C18.8284 22.5 19.5 21.8284 19.5 21C19.5 20.1716 18.8284 19.5 18 19.5C17.1716 19.5 16.5 20.1716 16.5 21C16.5 21.8284 17.1716 22.5 18 22.5Z"
                      fill="#8A8A8A"
                    ></path>
                    <path
                      d="M21 5.24991H4.365L3.75 2.09991C3.71494 1.92795 3.62068 1.77374 3.48364 1.6641C3.3466 1.55447 3.17546 1.49637 3 1.49991H0V2.99991H2.385L5.25 17.3999C5.28506 17.5719 5.37932 17.7261 5.51636 17.8357C5.6534 17.9453 5.82454 18.0034 6 17.9999H19.5V16.4999H6.615L6 13.4999H19.5C19.6734 13.5041 19.8429 13.4482 19.9796 13.3415C20.1163 13.2348 20.2119 13.0841 20.25 12.9149L21.75 6.16491C21.7751 6.05363 21.7745 5.93808 21.7483 5.82706C21.722 5.71604 21.6708 5.61247 21.5985 5.52424C21.5261 5.436 21.4347 5.36543 21.3309 5.3179C21.2272 5.27036 21.114 5.24711 21 5.24991ZM18.9 11.9999H5.715L4.665 6.74991H20.0625L18.9 11.9999Z"
                      fill="#8A8A8A"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_455_5967">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span class="header__basket-notification">
                  {{ coursesOnBasket.length }}
                </span>
              </span>
            </router-link> -->
            <!-- <div
              class="header__language"
              @click="languageDropdown = !languageDropdown"
              v-on-click-outside:excludedClass="hideLanguageDropdown"
              v-if="!isMobileSmall"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0.5C8.9233 0.5 6.89323 1.11581 5.16652 2.26957C3.4398 3.42332 2.09399 5.0632 1.29927 6.98182C0.504549 8.90045 0.296614 11.0116 0.701759 13.0484C1.1069 15.0852 2.10693 16.9562 3.57538 18.4246C5.04383 19.8931 6.91476 20.8931 8.95156 21.2982C10.9884 21.7034 13.0996 21.4955 15.0182 20.7007C16.9368 19.906 18.5767 18.5602 19.7304 16.8335C20.8842 15.1068 21.5 13.0767 21.5 11C21.5 8.21523 20.3938 5.54451 18.4246 3.57538C16.4555 1.60625 13.7848 0.5 11 0.5ZM20 10.25H15.5C15.4125 7.48781 14.6969 4.78186 13.4075 2.3375C15.1839 2.82342 16.7685 3.84263 17.9474 5.25757C19.1263 6.6725 19.8427 8.41504 20 10.25ZM11 20C10.8327 20.0112 10.6648 20.0112 10.4975 20C8.94372 17.5221 8.08139 14.6736 8 11.75H14C13.9254 14.6715 13.0709 17.5199 11.525 20C11.3502 20.0123 11.1748 20.0123 11 20ZM8 10.25C8.07462 7.32851 8.92914 4.48012 10.475 2C10.809 1.96247 11.1461 1.96247 11.48 2C13.0417 4.4756 13.9119 7.3243 14 10.25H8ZM8.57001 2.3375C7.28848 4.78373 6.5806 7.48959 6.5 10.25H2C2.15728 8.41504 2.87371 6.6725 4.0526 5.25757C5.23149 3.84263 6.81608 2.82342 8.5925 2.3375H8.57001ZM2.0375 11.75H6.53751C6.61577 14.5098 7.32108 17.2156 8.60001 19.6625C6.82915 19.1714 5.25109 18.1499 4.07792 16.7354C2.90475 15.3209 2.19271 13.5811 2.0375 11.75ZM13.4075 19.6625C14.6969 17.2181 15.4125 14.5122 15.5 11.75H20C19.8427 13.585 19.1263 15.3275 17.9474 16.7424C16.7685 18.1574 15.1839 19.1766 13.4075 19.6625Z"
                  fill="#8A8A8A"
                ></path>
              </svg>
              <div class="dropdown">
                <transition name="dropdown">
                  <ul class="dropdown__menu" v-if="languageDropdown">
                    <li class="dropdown__menu-item active">
                      <span>O'zbekcha</span>
                    </li>
                    <li class="dropdown__menu-item"><span>Ruscha</span></li>
                    <li class="dropdown__menu-item"><span>Inglizcha</span></li>
                  </ul>
                </transition>
              </div>
            </div> -->
            <div class="header__auth" v-if="!userIsLoggedOn">
              <AppButton
                theme="green"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? '20' : '30'"
                :height="isMobileSmall ? '40' : '50'"
                weight="500"
                class="header__login mr-10"
                v-if="!isMobileSmall"
                @click="$router.push({ path: '/sign-in' })"
              >
                Kirish
              </AppButton>
              <AppButton
                theme="orange"
                @click="$router.push({ path: '/sign-up' })"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? '20' : '30'"
                :height="isMobileSmall ? '40' : '50'"
                weight="500"
                class="header__register"
                v-if="!isMobileSmall"
              >
                Ro'yxatdan o'tish
              </AppButton>
            </div>
            <div class="header__account" v-if="!isMobileSmall">
              <AppButton
                v-if="userIsLoggedOn"
                theme="green"
                :font-size="16"
                :sides="isMobileSmall ? '20' : '30'"
                :height="isMobileSmall ? '40' : '50'"
                weight="500"
                class="header__login"
                @click="$router.push({ path: '/cabinet' })"
              >
                Kabinet
              </AppButton>
            </div>
            <span
              v-if="isMobileSmall && userIsLoggedOn"
              class="d-flex align-center justify-content-center pointer"
              style="
                width: 36px;
                height: 36px;
                line-height: 36px;
                font-size: 18px;
                background-color: rgb(4, 81, 64);
                border-radius: 50%;
              "
              @click="$router.push({ path: '/cabinet' })"
            >
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="vertical-align: baseline"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 12.2243C12 14.7124 8.57576 15 6.00076 15L5.81649 14.9998C4.17591 14.9959 0 14.8927 0 12.2092C0 9.77182 3.28663 9.44608 5.84203 9.4338L6.18502 9.43359C7.82549 9.43756 12 9.54077 12 12.2243ZM6.00076 10.5658C2.77273 10.5658 1.13636 11.1183 1.13636 12.2092C1.13636 13.3098 2.77273 13.8677 6.00076 13.8677C9.22803 13.8677 10.8636 13.3151 10.8636 12.2243C10.8636 11.1236 9.22803 10.5658 6.00076 10.5658ZM6.00076 0C8.21894 0 10.0227 1.79815 10.0227 4.00847C10.0227 6.2188 8.21894 8.0162 6.00076 8.0162H5.97651C3.76288 8.0094 1.9697 6.21049 1.97725 4.00621C1.97725 1.79815 3.78182 0 6.00076 0ZM6.00076 1.07799C4.37879 1.07799 3.05908 2.39225 3.05908 4.00847C3.05379 5.61941 4.36364 6.93293 5.97879 6.93896L6.00076 7.47796V6.93896C7.62197 6.93896 8.94091 5.62394 8.94091 4.00847C8.94091 2.39225 7.62197 1.07799 6.00076 1.07799Z"
                  fill="white"
                ></path>
              </svg>
            </span>
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
    <div
      class=""
      :class="navigationDrawer ? 'visible' : ''"
      @click="close"
    ></div>
  </div>
</template>

<script>
import "./header.scss";
import NavigationDrawer from "./NavigationDrawer";
import AppButton from "../../../shared-components/AppButton";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "AppHeader",
  components: { AppButton, NavigationDrawer },
  data() {
    return {
      scrolled: false,
      activeId: null,
      subActiveId: null,
      menu: [
        // {
        //   id: 2,
        //   title: "Nashrlar",
        //   link: "/publication",
        // },
        {
          id: 3,
          title: "Testlar",
          link: "/choose-test",
        },
        {
          id: 4,
          title: "Tadqiqotlar",
          link: "/research",
        },
        {
          id: 1,
          title: "Yoʻriqnoma",
          link: "/guide",
        },
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
    ...mapGetters([
      "isLoggedOn",
      "user",
      "coursesOnBasket",
      "favouriteCourses",
    ]),
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    ...mapActions(["getUser", "loadCoursesOnBasket", "loadfavouriteCourses"]),
    closeDrawer() {
      this.navigationDrawer = false;
    },
    close() {
      this.navigationDrawer = false;
    },
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
    setToken() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  async mounted() {
    if (this.userIsLoggedOn) {
      await this.getUser();
    }
    this.loadCoursesOnBasket();
    this.loadfavouriteCourses();
  },
  created() {},
  watch: {
    async isLoggedOn() {
      if (this.userIsLoggedOn) {
        await this.getUser();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1),
    transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  transform-origin: top left;
}
.dropdown-enter,
.dropdown-leave-active {
  opacity: 0;
  transform: scale(0);
}
</style>
