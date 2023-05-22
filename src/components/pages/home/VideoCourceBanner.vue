<template>
  <section class="section py-30" :class="isMobile ? 'mt-30' : 'mt-60'">
    <div class="v-tutorial">
      <div class="container">
        <div class="v-tutorial__content">
          <div class="v-tutorial__player">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/TggjL2itDvk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </div>
          <div class="v-tutorial__info" :class="isMobile ? 'pa-30' : 'pa-60'">
            <p class="title" :class="isMobile ? 'mb-20' : 'mb-30'">
              Videokurslar
            </p>
            <p class="text" :class="isMobile ? 'mb-20' : 'mb-30'">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates pariatur labore, ipsam nulla nostrum magni earum
              sapiente illum quo nesciunt libero possimus maxime, consequatur
              nisi laudantium ratione, esse expedita quibusdam!
            </p>
            <app-button theme="main" sides="30" font-size="16">
              Barcha videokurslar
            </app-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "VideoCourceBanner",
  components: { AppButton },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/abstracts/variables.scss";

.v-tutorial {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background: #f8fbff url("https://stesting.uz/playerbg.png") no-repeat;
    // background-position: 100% 100%;
  }
  &__player {
    max-width: 50%;
    width: 100%;
  }
  &__info {
    max-width: 50%;
    width: 100%;
    .title {
      font-weight: 700;
      font-size: 22px;
      text-transform: uppercase;
      color: #161c27;
    }
    .text {
      font-size: 16px;
      line-height: 24px;
      color: $color-text;
    }
  }
}
@media (max-width: 991px) {
  .v-tutorial {
    &__content {
      flex-direction: column;
    }
    &__player {
      max-width: unset;
      width: unset;
      margin-bottom: 30px;
    }
    &__info {
      max-width: unset;
      width: unset;
      padding: 10px;
    }
  }
}
</style>
