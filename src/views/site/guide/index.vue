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
            Yo'riqnoma
          </app-text>
          <app-text size="16" line-height="18" weight="500" class="color-text">
            Loyihada test topshirish boʻyicha qo‘llanma
          </app-text>
        </div>
      </div>
      <div class="guide"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AppGuide",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.guide {
  box-shadow: 0 4px 12px rgba(22, 28, 39, 0.06);
  margin-top: 60px;
}
</style>
