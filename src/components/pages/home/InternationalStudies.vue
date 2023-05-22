<template>
  <section class="section py-30" :class="isMobile ? 'mt-30' : 'mt-60'">
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
            Lorem ipsum dolor sit amet.
          </app-text>
        </div>

        <div class="section__top-details">
          <router-link class="section__top-link" to="/internation-studies">
            <span> Barcha tadqiqotlar</span>
          </router-link>
        </div>
      </div>
      <div class="items">
        <AppCard photo="/images/cta-banner.jpg" v-for="item in 4" :key="item" />
      </div>
    </div>
  </section>
</template>
<script>
import AppCard from "../../shared-components/AppCard.vue";
export default {
  name: "AppInternationalStudies",
  components: { AppCard },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.section {
  background: #f8fbff url("https://stesting.uz/aboutbg.png") no-repeat;
  background-position: 100% 100%;
}
.items {
  //   background-color: #f5f5f5;
  //   padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}

@media (max-width: 1200px) {
  .items {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 876px) {
  .items {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 500px) {
  .items {
    grid-template-columns: 1fr;
  }
}
</style>
