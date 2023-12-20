<template>
  <section class="section py-30">
    <loader v-if="loading" />
    <div class="container">
      <div class="section__top mb-40">
        <div class="section__top-left text-center mx-auto">
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
        :count="isMobileMedium ? 1 : 2"
        :offset-y="isMobileSmall ? 8 : 16"
        :offset-x="isMobileSmall ? 8 : 16"
      >
        <div
          class="block__item"
          :class="isMobileSmall ? 'pa-20' : 'pa-20'"
          v-for="item in testTypesResearch"
          :key="item.id"
        >
          <app-text
            :size="isMobileSmall ? '24' : isMobileMedium ? '27' : '30'"
            line-height="167%"
            weight="700"
          >
            {{ item.title }}
          </app-text>
          <AppText size="14" line-height="20" class="mt-10 mb-30" weight="400">
            {{ item.short_description }}
          </AppText>
          <app-text :size="14" weight="700" class="mb-30 color-white">
            <span
              style="
                background-color: #ffa800;
                padding: 5px 10px;
                border-radius: 4px;
              "
            >
              {{ item.price }} so'm
            </span>
          </app-text>
          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              v-if="item.bought"
              theme="green"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 50"
              :class="isMobile ? 'w-100' : ''"
              :weight="500"
            >
              Testni boshlash
            </AppButton>
            <AppButton
              v-if="!item.bought"
              @click="buyExams(item.id)"
              theme="green"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 50"
              :class="isMobile ? 'w-100' : ''"
              :weight="500"
            >
              Testni sotib olish
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 50"
              :class="isMobile ? 'w-100' : ''"
              :weight="500"
              @click="$router.push({ path: 'top-up-balance' })"
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
      testTypesResearch: [],
      loading: false,
    };
  },
  methods: {
    getTestTypes() {
      this.isLoading = true;
      this.$http
        .get("tests/test-types/?category_type=research")
        .then((res) => {
          this.testTypesResearch = res.sort((a, b) => a.id - b.id);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    buyExams(test_type) {
      this.isLoading = true;
      this.$http
        .post("tests/buy-exams/", {
          test_type: test_type,
        })
        .then((res) => {
          this.successNotification(res.message);
          this.getTestTypes();
        })
        .catch(() => {
          this.errorNotification("Balansingizda mablag' yetarli emas");
        })
        .finally(() => {
          this.isLoading = false;
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
    this.getTestTypes();
  },
};
</script>
<style lang="scss" scoped>
.section {
  background-color: #f9f9f9;
}
</style>
