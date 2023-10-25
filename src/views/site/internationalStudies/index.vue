<template>
  <section class="section py-30">
    <div class="container">
      <div class="section__top mb-30">
        <div>
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mb-10"
          >
            Xalqaro tadqiqotlar
          </app-text>
          <app-text
            :size="isMobileSmall ? 12 : 14"
            :line-height="isMobileSmall ? 16 : 26"
            weight="500"
          >
            Bizning testga marhamat
          </app-text>
        </div>
      </div>
      <BlockWrap
        :count="isMobileSmall ? 1 : isMobile ? 2 : 3"
        :offset-y="isMobileSmall ? 15 : 20"
        :offset-x="isMobileSmall ? 15 : 20"
      >
        <div class="block__item" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/online-exams.svg" alt="icon" />
              </div>
              <app-text
                size="18"
                line-height="24"
                weight="700"
                class="color-info"
              >
                PIRLS tadqiqoti
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat a
              tenetur inventore maxime ab explicabo nostrum iusto totam vero
              autem! Sapiente nesciunt voluptates praesentium deleniti
              doloremque velit, iure ea. Unde.
            </AppText>
          </div>
          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              @click="startPirlsTest"
              theme="info"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
            >
              Testni boshlash
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
              :weight="600"
            >
              Hisobni to'ldirish
            </AppButton>
          </div>
        </div>
        <div class="block__item" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/block-exams.svg" alt="icon" />
              </div>
              <app-text
                size="18"
                line-height="24"
                weight="700"
                class="color-orange"
              >
                TIMSS tadqiqoti
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Bu qismda tanlagan faningiz bo'yicha 30 ta savoldan iborat
              testlarni yechasiz. 10 marta blokli test topshirish tekin. Testni
              boshlash uchun boshlash tugmachasini bosing
            </AppText>
          </div>
          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              @click="startTimssTest"
              theme="orange"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
            >
              Testni boshlash
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
              :weight="600"
            >
              Hisobni to'ldirish
            </AppButton>
          </div>
        </div>
        <div class="block__item" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
          <div>
            <block-wrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/school-exams.svg" alt="icon" />
              </div>
              <app-text
                size="18"
                line-height="24"
                weight="700"
                class="color-pumpkin"
              >
                PISA tadqiqoti
              </app-text>
            </block-wrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              O'quvchilar uchun 5-, 7-, 8-, 9-, 10-, 11- sinflar uchun
              matematika fanidan PISA savollar to'plami. Mazkur PISA testlar
              o'quvchilarning PISA savollar haqidagi tasavvurlarini
              shakllantirishda namuna vazifasini o'taydi.
            </AppText>
          </div>

          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              @click="startPisaTest"
              theme="pumpkin"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
            >
              Testni boshlash
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
              :weight="600"
            >
              Hisobni to'ldirish
            </AppButton>
          </div>
        </div>
      </BlockWrap>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
export default {
  name: "AppInternationStudies",
  components: { AppButton, BlockWrap },
  data() {
    return {};
  },
  methods: {
    startPisaTest() {
      this.$router.push({ path: "/Pisa-test" });
    },
    startPirlsTest() {
      this.$router.push({ path: "/Pirls-test" });
    },
    startTimssTest() {
      this.$router.push({ path: "/Timss-test" });
    },
  },
};
</script>
<style lang="scss" scoped>
.block__item:nth-child(1) {
  background-color: #f2f7ff;
}
.block__item:nth-child(2) {
  background-color: #fef9e6;
}
.block__item:nth-child(3) {
  background-color: #f7f0fe;
}
</style>
