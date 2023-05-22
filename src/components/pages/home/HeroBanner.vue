<template>
  <kinesis-container>
    <div class="hero-banner">
      <div class="container">
        <div class="hero-banner__inner">
          <div class="hero-banner__content">
            <h1 class="hero-banner__title mb-20">O‘z bilimingizni sinang!</h1>
            <app-text
              :size="isMobile ? 16 : 18"
              :line-height="isMobile ? 20 : 24"
              weight="500"
              class="color-white text-center"
            >
              Kasbiy maqsadlaringizga erishish uchun eng so'nggi ko'nikmalarni
              o'rganing.
            </app-text>
          </div>
          <div class="hero-banner__photo">
            <kinesis-element>
              <img src="/images/hero-banner.png" alt="" />
            </kinesis-element>
          </div>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "HeroBanner",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss">
.hero-banner {
  background-color: #1a68d3;
  background-image: radial-gradient(
      ellipse at bottom,
      #1a68d3 5%,
      transparent 60%
    ),
    linear-gradient(136deg, transparent, #71c7ee 290%),
    linear-gradient(115deg, #9d9af1, transparent 40%),
    linear-gradient(180deg, transparent 0, #1a68d3 70%),
    radial-gradient(ellipse at -70% -180%, transparent 80%, #71c7ee 0),
    radial-gradient(ellipse at bottom, #1a68d3 40%, transparent 80%),
    radial-gradient(ellipse at 5% 340%, transparent 80%, #bfc2f4 0);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(100vh - 100px);
    width: 100%;
    color: #fff;
  }

  &__title {
    font-weight: 700;
    font-size: 48px;
    text-align: center;
  }

  &__content {
    max-width: calc(50% - 20px);
  }

  &__photo {
    max-width: calc(50% - 20px);
    padding: 20px;

    img {
      max-width: 530px;
      width: 100%;
      object-fit: contain;
      margin-left: auto;
    }
  }

  &__cta {
    max-width: 500px;
    width: 100%;
    overflow: hidden;
    padding: 5px 0;

    .a-btn {
      min-height: 56px;
    }
  }
}

@media (max-width: 850px) {
  .hero-banner__inner {
    flex-wrap: wrap;
    padding: 50px 30px;
    justify-content: unset;
  }

  .hero-banner__content {
    max-width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    order: 2;
  }

  .hero-banner__cta {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-banner__photo {
    margin-left: auto;
    margin-right: auto;
    order: 1;
    max-width: 80%;
    margin-bottom: 20px;
  }
  @media (max-width: 991px) {
    .hero-banner {
      &__title {
        font-size: 32px;
        text-align: center;
      }
    }
  }
  @media (max-width: 500px) {
    .hero-banner {
      &__inner {
        min-height: calc(100vh - 90px);
        padding: 30px 10px;
      }
      &__photo {
        margin-bottom: 10px;
      }
      &__title {
        font-size: 24px;
      }
    }
  }
}
</style>
