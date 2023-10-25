<template>
  <div class="cta__banner mt-30">
    <div class="container">
      <div class="cta__banner-content" :class="isMobile ? 'py-30' : 'py-60'">
        <div data-aos="fade-up" data-aos-duration="200">
          <app-text
            :size="isMobile ? 26 : 28"
            :line-height="isMobile ? 30 : 36"
            weight="600"
            class="color-main mb-10"
          >
            {{ title }}
          </app-text>
        </div>
        <div data-aos="fade-up" data-aos-duration="400">
          <app-text class="mb-20" size="16" line-height="24">
            {{ content }}
          </app-text>
        </div>
        <div data-aos="fade-up" data-aos-duration="600">
          <app-button theme="info" sides="30" font-size="16">
            {{ buttonText }}
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../../shared-components/AppButton";
export default {
  name: "CtaBanner",
  components: { AppButton },
  props: {
    title: String,
    content: String,
    photo: String,
    link: String,
    buttonText: String,
  },
};
</script>

<style lang="scss" scoped>
.cta__banner {
  // display: flex;
  // border-radius: 10px;
  // overflow: hidden;
  // background: #f5f9fd;
  background: url("https://stesting.uz/stestinglandingbg.png") no-repeat 50%;
  background-size: cover;
  &-content {
  }
}

@media (max-width: 991px) {
  .cta__banner-photo {
    max-width: 40%;
  }

  .cta__banner-content {
    // width: calc(100% - 40%);
  }
}

@media (max-width: 650px) {
  .cta__banner {
    flex-direction: column;
    width: 100%;
    align-items: center;

    &-photo {
      max-width: 100%;
    }

    &-content {
      width: 100%;
    }
  }
}
</style>
