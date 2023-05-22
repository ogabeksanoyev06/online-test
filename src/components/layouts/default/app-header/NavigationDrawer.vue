<template>
  <div class="navigation-drawer">
    <BlockWrap
      :count="isMobileSmall ? 1 : 2"
      width-auto=""
      offset-y="20"
      offset-x="20"
      class="mb-20"
    >
      <div class="header__auth mb-20 mr-20">
        <AppButton
          theme="white"
          :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
          :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
          class="header__login mr-15"
          v-if="!isDesktop"
          @click="$router.push({ path: '/sign-in' })"
          >Kirish
        </AppButton>
        <AppButton
          theme="white"
          :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
          :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
          class="header__register"
          v-if="!isDesktop"
          @click="$router.push({ path: '/sign-up' })"
          >Ro'yxatdan o'tish
        </AppButton>
      </div>

      <div class="header__search mb-30" v-if="!isDesktop">
        <BaseSearch
          v-model="search"
          placeholder="Qidirish"
          inputStyle="border-radius: 28px;"
          buttonStyle=""
          imageStyle="filter: brightness(300%)"
        >
        </BaseSearch>
      </div>
    </BlockWrap>

    <BlockWrap
      :count="isMobileSmall ? 1 : 2"
      width-auto=""
      offset-y="20"
      offset-x="20"
      class="mobile__language-wrap pa-10 bordered radius mb-20"
    >
      <AppText size="16" weight="700" line-height="20" class="mr-20 color-main">
        Tilni tanlang:
      </AppText>
      <div class="d-flex align-center">
        <router-link to="/" class="mr-15">
          <AppText weight="700" size="14" line-height="18">Uzbek</AppText>
        </router-link>
        <router-link to="/">
          <AppText weight="700" size="14" line-height="18">Russian</AppText>
        </router-link>
      </div>
    </BlockWrap>

    <div class="">
      <AppText
        class="mb-20 mobile-menu__title"
        size="20"
        line-height="26"
        weight="700"
        >Menu
      </AppText>

      <ul
        class="mobile-menu-wrap"
        v-on-click-outside:excludedClass="hideMenus"
        v-for="(item, index) in menu"
        :key="index"
      >
        <router-link :to="item.link">
          <li class="mobile-menu__link">
            {{ item.title }}
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseSearch from "../../../shared-components/BaseSearch";
import AppButton from "../../../shared-components/AppButton";
import AppText from "../../../shared-components/AppText";
import BlockWrap from "../../../shared-components/BlockWrap";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavigationDrawer",
  components: { BlockWrap, AppButton, BaseSearch, AppText },
  data() {
    return {
      activeId: null,
      subActiveId: null,
      menu: [
        {
          id: 1,
          title: "Yo'nalishlar",
          link: "/categories",
        },
        {
          id: 2,
          title: "Fanlar",
          link: "/subjects",
        },
        {
          id: 3,
          title: "Konkurs natijalari",
          link: "/top-50",
        },
        {
          id: 4,
          title: "Testlar",
          link: "/choose-test",
        },
      ],
      search: "",
    };
  },
  computed: {
    ...mapGetters(["isLoggedOn", "skillTree", "subjectTree"]),
  },
  methods: {
    ...mapActions(["getSkillTree", "getSubjectTree", "getUser"]),
    clickMenu() {
      this.$emit("closeNavigationDrawer");
    },
    hideMenus() {
      this.activeId = false;
    },
    prepareSkillCourseTree(data, menu) {
      data.forEach((d) => {
        let parentMenuModel = {
          id: d.id,
          title: d.name,
          link: "",
          children: [],
        };
        let childrenMenus = [];
        if (d.courseList) {
          d.courseList.forEach((children) => {
            let childrenMenuModel = {
              id: children.id,
              title: children.name,
              link: "",
            };
            childrenMenus.push(childrenMenuModel);
          });
          parentMenuModel.children = childrenMenus;
        }
        menu.push(parentMenuModel);
      });
    },
  },
  async mounted() {
    if (this.userIsLoggedOn) {
      await this.getUser();
    }
  },
  watch: {
    skillTree() {
      this.menu[0].children = [];
      this.prepareSkillCourseTree(this.skillTree, this.menu[0].children);
    },
    subjectTree() {
      this.menu[1].children = [];
      this.prepareSkillCourseTree(this.subjectTree, this.menu[1].children);
    },
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
  position: fixed;
  top: 0;
  left: 0;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(279.37deg, #008ae4 0%, #a6dcff 158.68%);
  z-index: 50;
  overflow-y: auto;
  padding: 30px;

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
  .navigation-drawer {
    max-width: 75% !important;
  }
}
</style>
