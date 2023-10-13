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
            Xalqaro tadqiqotlar
          </app-text>
          <app-text size="16" line-height="18" weight="500" class="color-text">
            Bizning testga marhamat
          </app-text>
        </div>
      </div>
      <BlockWrap
        :count="isMobileSmall ? 1 : isMobile ? 2 : 3"
        :offset-y="isMobileSmall ? 15 : 20"
        :offset-x="isMobileSmall ? 15 : 20"
      >
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/online-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
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

          <AppButton
            theme="info"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
            @click="startPirlsTest"
          >
            Testni boshlash
          </AppButton>
        </div>
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/block-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
                TIMSS tadqiqoti
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Bu qismda tanlagan faningiz bo'yicha 30 ta savoldan iborat
              testlarni yechasiz. 10 marta blokli test topshirish tekin. Testni
              boshlash uchun boshlash tugmachasini bosing
            </AppText>
          </div>

          <app-button
            theme="orange"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
            @click="startTimssTest"
          >
            Testni boshlash
          </app-button>
        </div>
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <block-wrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/school-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
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

          <AppButton
            theme="purple"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
            @click="startPisaTest"
          >
            Testni boshlash
          </AppButton>
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
<style lang="scss" scoped></style>
