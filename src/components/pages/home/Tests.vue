<template>
  <section class="section py-30" :class="isMobile ? 'mt-30' : 'mt-60'">
    <div class="container">
      <div class="section__top mb-30">
        <div class="section__top-details">
          <router-link class="section__top-link" to="/choose-test">
            <span> Testlar </span>
          </router-link>
        </div>
      </div>
      <div class="items">
        <AppCard photo="/images/cta-banner.jpg" v-for="item in 8" :key="item" />
      </div>
    </div>
  </section>
</template>
<script>
import AppCard from "../../shared-components/AppCard.vue";
export default {
  name: "AppTests",
  components: { AppCard },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.section {
  background: #f8fbff
    url("https://stesting.uz/_nuxt/img/news-bg-item.fcbfd23.png") no-repeat;
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
