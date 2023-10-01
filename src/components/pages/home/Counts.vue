<template>
  <section class="section py-30" :class="isMobile ? 'mt-30' : 'mt-60'">
    <div class="counts py-60">
      <div class="container">
        <div class="items">
          <div class="item">
            <div class="icon"></div>
            <span class="purecounter"> 150000 </span>
            <span class="">+</span>
            <p>Foydalanuvchilar soni</p>
          </div>
          <div class="item">
            <div class="icon"></div>
            <span class="purecounter"> 1000 </span>
            <span class="">+</span>
            <p>Maktablar soni</p>
          </div>
          <div class="item">
            <div class="icon"></div>
            <span class="purecounter"> 250000 </span>
            <span class="">+</span>
            <p>Testlar soni</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AppCounts",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.counts {
  background-color: #eeeef5;
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  .item {
    padding: 30px 30px 25px 30px;
    width: 100%;
    position: relative;
    text-align: center;
    background: #fff;
    border-radius: 0.5rem;
    .icon {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 24px;
      background: #3165cb;
      color: #fff;
      border-radius: 50px;
      width: 48px;
      height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 36px;
      display: inline;
      font-weight: 600;
      color: #3165cb;
    }
    p {
      font-size: 14px;
      font-weight: 600;
      color: #95abc6;
    }
  }
}
@media (max-width: 876px) {
  .items {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }
}
@media (max-width: 500px) {
  .items {
    grid-template-columns: 1fr;
  }
}
</style>
