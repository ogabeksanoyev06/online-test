<template>
  <section class="section py-30" :class="isMobile ? 'mt-30' : 'mt-60'">
    <div class="">
      <div class="container">
        <div class="inner">
          <div class="inner__left">
            <AppText
              :size="isMobileSmall ? 24 : isMobile ? 28 : 42"
              :line-height="isMobileSmall ? 28 : isMobile ? 34 : 46"
              weight="700"
              class="mb-30 color-main"
            >
              Biz bilan DTM imtihoniga tayyorlaning
            </AppText>
          </div>
          <div class="inner__right">
            <AppText
              :size="isMobileSmall ? 16 : 18"
              :line-height="isMobileSmall ? 20 : 24"
              weight="500"
              class="mb-30"
            >
              Har qanday qurilma orqali, hoxlagan joydan turib, bizning
              platforma orqali bizning kuchli mutahassislar tomonidan tuzilgan
              testni ishlang va quyidagi qulaylilarga ega bo'ling:
            </AppText>

            <ul>
              <li class="d-flex">
                <img src="/svg/check-round.svg" class="mr-10" alt="" />
                <AppText
                  :size="isMobileSmall ? 14 : 16"
                  line-height="24"
                  weight="500"
                >
                  To'gri va xato ishlagan testlaringizni tahrir qiling
                </AppText>
              </li>
              <li class="d-flex">
                <img src="/svg/check-round.svg" class="mr-10" alt="" />
                <AppText
                  :size="isMobileSmall ? 14 : 16"
                  line-height="24"
                  weight="500"
                >
                  O'tgan yilgi DTM ga kirish ballariga nisbatan o'zingizni
                  ballingizni solishtiring
                </AppText>
              </li>
              <li class="d-flex">
                <img src="/svg/check-round.svg" class="mr-10" alt="" />
                <AppText
                  :size="isMobileSmall ? 14 : 16"
                  line-height="24"
                  weight="500"
                >
                  Qaysi fan va mavzudan kamchiligingiz borligini bilib oling va
                  bartaraf qiling
                </AppText>
              </li>
              <li class="d-flex">
                <img src="/svg/check-round.svg" class="mr-10" alt="" />
                <AppText
                  :size="isMobileSmall ? 14 : 16"
                  line-height="24"
                  weight="500"
                >
                  O'tgan yilgi DTM ga kirish ballariga nisbatan o'zingizni
                  ballingizni solishtiring
                </AppText>
              </li>
              <li class="d-flex">
                <img src="/svg/check-round.svg" class="mr-10" alt="" />
                <AppText
                  :size="isMobileSmall ? 14 : 16"
                  line-height="24"
                  weight="500"
                >
                  Qaysi fan va mavzudan kamchiligingiz borligini bilib oling va
                  bartaraf qiling
                </AppText>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContentBanner",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.inner {
  display: flex;
  &__left {
    max-width: 550px;
    width: 100%;
    padding-right: 30px;
  }
  &__right {
    width: calc(100% - 550px);
    padding-right: 30px;
    ul {
      li {
        margin-bottom: 10px;
      }
    }
  }
}
@media (max-width: 991px) {
  .inner {
    flex-direction: column;
    &__left {
      max-width: 100%;
      padding-right: 0;
    }
    &__right {
      width: 100%;
    }
  }
}
</style>
