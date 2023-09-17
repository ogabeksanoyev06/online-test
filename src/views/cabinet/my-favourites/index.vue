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
        :count="
          isMobileSmall ? 1 : isMobile ? 2 : isDesktopMedium ? 3 : 4
        "
        offset-x="24"
        offset-y="24"
        class="mb-20"
      >
        <AppCard v-for="item in 5" :key="item" />
      </BlockWrap>
      <div class="empty-page">
        <div class="text-center center-content">
          <img src="/images/favourite.webp" alt="" />
          <p class="title">Hali sotib olishga tayyor emasmisiz</p>
          <p class="desc">
            Bosing ♡ va bu erga o'zingiz yoqtirgan narsani qo'shing va agar
            ushbu kurslarning narxi tushib qolsa, biz sizga yozamiz.
          </p>
          <AppButton
            theme="main"
            radius="10"
            :font-size="16"
            :sides="20"
            :height="45"
            weight="500"
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
export default {
  components: { AppButton, BlockWrap, AppCard },
  name: "MyFavourite",
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
