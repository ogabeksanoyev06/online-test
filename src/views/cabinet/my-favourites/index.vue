<template>
  <div class="my-favourite py-30">
    <div class="container">
      <div class="section__top mb-20">
        <app-text
          :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
          :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
          weight="700"
        >
          Sevimlilar
        </app-text>
      </div>
      <BlockWrap
        :count="isMobileSmall ? 1 : isMobile ? 2 : isDesktopMedium ? 3 : 4"
        offset-x="24"
        offset-y="24"
        class="mb-20"
        v-if="favouriteCourses && favouriteCourses.length > 0"
      >
        <AppCard
          v-for="item in favouriteCourses"
          :key="item.id"
          :courseId="item.id"
          :title="item.title"
          :modules_count="item.modules_count"
          :lessons_count="item.lessons_count"
          :language="item.language"
          :teacher="item.teacher"
          :trailer="item.trailer"
          :image="item.image"
          :price="item.price"
          :trailerBtn="item.trailer ? true : false"
        />
      </BlockWrap>
      <div class="empty-page" v-else>
        <div class="text-center center-content">
          <img src="/images/favourite.webp" alt="" />
          <p class="title">Hali sotib olishga tayyor emasmisiz</p>
          <p class="desc">
            Bosing ♡ va bu erga o'zingiz yoqtirgan narsani qo'shing va agar
            ushbu kurslarning narxi tushib qolsa, biz sizga yozamiz.
          </p>
          <AppButton
            theme="info"
            radius="10"
            :font-size="16"
            :sides="20"
            :height="45"
            weight="500"
            @click="$router.push({ name: 'home' })"
          >
            Asosiy sahifaga o'ting
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
import AppCard from "@/components/shared-components/AppCard.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { AppButton, BlockWrap, AppCard },
  name: "MyFavourite",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["loadfavouriteCourses"]),
  },
  computed: {
    ...mapGetters(["favouriteCourses"]),
  },
  created() {
    this.loadfavouriteCourses();
  },
};
</script>

<style lang="scss" scoped>
.empty-page {
  display: flex;
  justify-content: center;
  align-items: center;
  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 370px;
    width: 100%;
    text-align: center;
  }
  img {
    width: 100%;
    height: auto;
  }
  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.167619px;
  }
  .desc {
    font-weight: 400;
    font-size: 17.6px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.167619px;
    margin: 20px 0 29px;
  }
}
</style>
