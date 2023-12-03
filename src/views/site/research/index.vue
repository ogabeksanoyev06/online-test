<template>
  <section class="section py-30">
    <loader v-if="loading" />
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
        <div
          class="block__item"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
          v-for="researche in researches"
          :key="researche.id"
        >
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <app-text size="18" line-height="24" weight="700">
                {{ researche.title }}
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              {{ researche.description }}
            </AppText>
          </div>
          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              @click="goToResearch(researche.title, researche.id)"
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
      </BlockWrap>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
import Loader from "@/components/shared-components/Loader.vue";
export default {
  name: "AppInternationStudies",
  components: { AppButton, BlockWrap, Loader },
  data() {
    return {
      researches: [],
      loading: false,
    };
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
    getResearch() {
      this.loading = true;
      this.$http
        .get("tests/researches")
        .then((res) => {
          this.researches = res;
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    goToResearch(name, id) {
      this.$router.push({
        name: "research-test",
        params: { research_name: name, research_id: id },
      });
      localStorage.setItem("research_id", id);
    },
  },
  mounted() {},
  created() {
    this.getResearch();
  },
};
</script>
<style lang="scss" scoped></style>
