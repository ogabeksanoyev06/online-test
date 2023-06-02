<template>
  <div class="navigation-drawer">
    <ul class="nav-open">
      <li v-for="(item, i) in menu" :key="i" class="nav__item">
        <router-link :to="item.link">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavigationDrawer",
  components: {},
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
          link: "/tests",
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
        {
          id: 6,
          title: "Kutubxona",
          link: "/library",
        },
      ],
      search: "",
    };
  },
  computed: {
    ...mapGetters(["isLoggedOn"]),
  },
  methods: {
    ...mapActions(["getUser"]),
    clickMenu() {
      this.$emit("closeNavigationDrawer");
    },
    hideMenus() {
      this.activeId = false;
    },
  },
  async mounted() {
    if (this.userIsLoggedOn) {
      await this.getUser();
    }
  },
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
@import "../../../../assets/styles/abstracts/variables";

.navigation-drawer {
  width: 100vw;
  height: 100%;
  z-index: 8;
  position: fixed;
  top: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(193, 218, 209, 0.1);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  .nav-open {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .nav__item {
    font-weight: 600;
    font-size: 16px;
    color: #26292e;
    transition: 0.3s ease-in-out;
    padding: 15px;
    text-align: center;
    cursor: pointer;
  }

  &__close {
    background-color: #00d06c;
  }

  .header__search {
    margin-right: 0;

    .input__holder {
      max-width: 100%;
    }
  }
}

.mobile-menu {
  &__link {
    background-color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 16px;
    font-family: "ProximaNova", sans-serif;
    font-weight: 700;
    display: flex;
    width: 100%;
    padding: 10px;
    transition: 0.3s;

    &:hover {
      color: $color-main;
    }
  }
}

@media (max-width: 768px) {
  // .navigation-drawer {
  //   max-width: 75% !important;
  // }
}
</style>
