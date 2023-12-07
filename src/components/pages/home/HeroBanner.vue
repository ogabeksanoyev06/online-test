<template>
  <kinesis-container>
    <div class="hero-banner">
      <div class="container">
        <div class="hero-banner__inner">
          <div class="hero-banner__content">
            <app-text
              :size="isMobileMedium ? '24' : '42'"
              :line-height="isMobileMedium ? '32' : '52'"
              max-width="700"
              weight="700"
              class="mb-20"
            >
              O’z kelajagingizni iTestify bilan birga quring!
            </app-text>

            <app-text
              :size="isMobileMedium ? '14' : '16'"
              :line-height="isMobileMedium ? '22' : '24'"
              weight="500"
              max-width="500"
              class="mb-30"
            >
              Ijodkorlik va bilim muhim omillardir, muvaffaqiyat va o'z-o'zini
              rivojlantirish
            </app-text>
            <app-button
              theme="green"
              :font-size="16"
              :sides="isMobileSmall ? '20' : '30'"
              :height="isMobileSmall ? '40' : '50'"
              weight="500"
              @click="$router.push({ path: '/choose-test' })"
              style="width: max-content"
            >
              Test boshlash
            </app-button>
          </div>
          <div class="hero-banner__photo">
            <kinesis-element class="layer" :strength="10">
              <img src="/images/pic.png" alt="" />
            </kinesis-element>
          </div>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  name: "HeroBanner",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
    AppButton,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.hero-banner {
  position: relative;
  background: #f9f9f9;
  transition: all 0.3s ease 0s;
  z-index: 1;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(100vh - 70px);
    width: 100%;
  }
  &__content {
    max-width: calc(50% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__photo {
    max-width: calc(50% - 20px);
    img {
      max-width: 530px;
      width: 100%;
      object-fit: contain;
      margin-left: auto;
    }
  }
}

@media (max-width: 991px) {
  .hero-banner__inner {
    flex-wrap: wrap;
    justify-content: unset;
  }

  .hero-banner__content {
    max-width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    order: 2;
    align-items: center;
  }
  .hero-banner__photo {
    margin-left: auto;
    margin-right: auto;
    order: 1;
    max-width: 100%;
    margin-bottom: 30px;
  }
}
@media (max-width: 500px) {
  .swiper-content {
    flex-wrap: wrap;
    padding: 20px 10px;
    min-height: calc(100vh - 350px);
    justify-content: unset;
    &__info {
      max-width: 100%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      order: 2;
      &-title {
        font-weight: 700;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: -0.03em;
      }
      &-text {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.02em;
        margin-top: 20px;
      }
    }
    &__photo {
      margin-left: auto;
      margin-right: auto;
      order: 1;
      max-width: 80%;
      margin-bottom: 20px;
      img {
        max-width: 530px;
        width: 100%;
        -o-object-fit: contain;
        object-fit: contain;
        margin-left: auto;
      }
    }
  }
}
</style>
