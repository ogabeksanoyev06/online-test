<template>
  <section class="section py-30">
    <div class="container">
      <div class="section__top mb-30">
        <div>
          <app-text
            :size="isMobile ? 18 : 28"
            :line-height="isMobile ? 28 : 36"
            weight="700"
          >
            Nashrlar
          </app-text>
          <app-text size="16" line-height="18" weight="500" class="color-text">
            Lorem ipsum dolor sit amet.
          </app-text>
        </div>
      </div>
      <div class="publication">
        <div class="publication__item">
          <div class="publication__item-image">
            <img
              src="https://qlapi.stesting.uz/media/publication-pic/cover.jpeg"
            />
          </div>
          <div class="publication__item-content">
            <AppText
              :size="isMobileSmall ? 18 : 22"
              :line-height="isMobileSmall ? 24 : 28"
              weight="600"
              class="mb-10"
            >
              PISA, PIRLS va TIMSS xаlqаro tаdqiqotlаr tаlаblаri аsosidа
              o‘tkаzilgаn bаholаsh nаtijаlаri
            </AppText>
            <AppText
              :size="isMobileSmall ? 14 : 16"
              :line-height="isMobileSmall ? 18 : 20"
              weight="500"
              class="mb-10"
            >
              Oʻquv dasturining maqsadi ta’lim olayotgan oʻqituvchi va oʻquvchi
              zamonaviy jamiyatda toʻlaqonli faoliyat yuritishi uchun zarur
              boʻlgan bilim va koʻnikmalarga ega boʻlishi, ya’ni inson
              faoliyati, aloqa va ijtimoiy munosabatlarning turli sohalarida
              keng koʻlamli vazifalarni hal qila olishiga qaratilgan. Ustuvor
              maqsadlarga erishishda Tayanch maktablari va ular orqali barcha
              umumta’lim muassasalariga uslubiy yordam koʻrsatish maqsadlari
              bayon etilgan.
            </AppText>

            <div class="header__auth mr-20" v-if="!userIsLoggedOn">
              <AppButton
                theme="main"
                :font-size="isMobileSmall ? 14 : 16"
                :sides="isMobileSmall ? 20 : 30"
                class=""
                >Yuklab olish
              </AppButton>
            </div>
          </div>
        </div>
        <div class="publication__item">
          <div class="publication__item-image">
            <img
              src="https://qlapi.stesting.uz/media/publication-pic/cover.jpeg"
            />
          </div>
          <div class="publication__item-content">
            <AppText
              :size="isMobileSmall ? 18 : 22"
              :line-height="isMobileSmall ? 24 : 28"
              weight="600"
              class="mb-10"
            >
              PISA, PIRLS va TIMSS xаlqаro tаdqiqotlаr tаlаblаri аsosidа
              o‘tkаzilgаn bаholаsh nаtijаlаri
            </AppText>
            <AppText
              :size="isMobileSmall ? 14 : 16"
              :line-height="isMobileSmall ? 18 : 20"
              weight="500"
              class="mb-10"
            >
              Oʻquv dasturining maqsadi ta’lim olayotgan oʻqituvchi va oʻquvchi
              zamonaviy jamiyatda toʻlaqonli faoliyat yuritishi uchun zarur
              boʻlgan bilim va koʻnikmalarga ega boʻlishi, ya’ni inson
              faoliyati, aloqa va ijtimoiy munosabatlarning turli sohalarida
              keng koʻlamli vazifalarni hal qila olishiga qaratilgan. Ustuvor
              maqsadlarga erishishda Tayanch maktablari va ular orqali barcha
              umumta’lim muassasalariga uslubiy yordam koʻrsatish maqsadlari
              bayon etilgan.
            </AppText>

            <div class="header__auth mr-20" v-if="!userIsLoggedOn">
              <AppButton
                theme="main"
                :font-size="isMobileSmall ? 14 : 16"
                :sides="isMobileSmall ? 20 : 30"
                class=""
                >Yuklab olish
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "AppPublication",
  components: { AppButton },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.publication {
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-gap: 20px;
  &__item {
    border-radius: 10px;
    border: 1px solid #e5ecf5;
    padding: 30px;
    margin-bottom: 25px;
    transition: all 0.35s;
    display: flex;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    &-image {
      max-width: 250px;
      width: 100%;
      height: 250px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      margin-right: 30px;
      transition: all 0.2s ease-out;
      img {
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
    }
  }
}
@media (max-width: 991px) {
  .publication {
    &__item {
      flex-direction: column;
      align-items: center;
      padding: 12px;
      &-image {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
