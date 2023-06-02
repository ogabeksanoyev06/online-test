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
            Testlar
          </app-text>
          <app-text size="16" line-height="18" weight="500" class="color-text">
            Bizning testga marhamat
          </app-text>
        </div>
      </div>
      <div class="tests">
        <div class="tests__item" v-for="item in 9" :key="item">
          <div class="tests__item-image">
            <img src="/images/cta-banner.jpg" alt="" />
          </div>
          <div class="tests__item-content">
            <div>
              <p>Maktab o'quvchilari uchun testlar</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda ducimus labore ea ipsum eaque iure culpa aspernatur
                velit iusto, hic harum expedita nulla voluptatem eum? Molestiae
                repellendus hic et optio?
              </span>
            </div>
          </div>
          <div class="tests__item-contents">
            <p>Maktab o'quvchilari uchun testlar</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AppTests",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.tests {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  &__item {
    background-color: #fff;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &-image {
      max-width: 450px;
      width: 100%;
      position: relative;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    &-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      -webkit-backdrop-filter: blur(13px);
      backdrop-filter: blur(13px);
      padding: 10px;
      transform: translateY(100%);
      transition: 0.3s;
      p {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        text-align: center;
        margin-bottom: 10px;
      }
      span {
        font-size: 14px;
        color: #fff;
        text-align: center;
      }
    }
    &-contents {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      transform: translateY(0%);
      transition: 0.3s;
      p {
        font-size: 22px;
        font-weight: 600;
        color: #fff;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
}
.tests__item:hover .tests__item-content {
  transform: translateY(0%);
}
.tests__item:hover .tests__item-contents {
  transform: translateY(-100%);
}
@media (max-width: 991px) {
  .tests {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 576px) {
  .tests {
    grid-template-columns: 1fr;
  }
}
</style>
