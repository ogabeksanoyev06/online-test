<template>
  <kinesis-container>
    <div class="hero-banner">
      <div class="container">
        <div class="hero-banner__inner">
          <div class="hero-banner__content">
            <app-text
              :size="isMobileMedium ? '24' : '50'"
              :line-height="isMobileMedium ? '32' : '60'"
              max-width="768"
              weight="700"
              class="color-white text-center mb-20"
            >
              O’z kelajagingizni iTestify bilan birga quring!
            </app-text>

            <app-text
              :size="isMobileMedium ? '16' : '18'"
              :line-height="isMobileMedium ? '24' : '26'"
              weight="500"
              max-width="600"
              class="color-white text-center mb-30"
            >
              Ijodkorlik va bilim muhim omillardir muvaffaqiyat va o'z-o'zini
              rivojlantirish
            </app-text>
          </div>
          <div class="hero-banner__photo">
            <kinesis-element class="layer" :strength="10">
              <img
                src="https://topskill.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain_slider.af41b9be.png&w=3840&q=75"
                alt=""
              />
            </kinesis-element>
          </div>
        </div>
        <!-- <div class="swiper-container" style="border-radius: 12px">
          <swiper :effect="'fade'" ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="n in 5" :key="n">
              <div class="swiper-content">
                <div class="swiper-content__info">
                  <p class="swiper-content__info-title">
                    Onlayn ta'lim platformasi
                  </p>
                  <p class="swiper-content__info-text">
                    Mutaxassislardan eng yaxshi zamonaviy kasblar nazariy
                    bilimlar va amaliy mashg'ulotlar yordamida o'rganiladi
                  </p>
                </div>
                <div class="swiper-content__photo">
                  <img
                    src="https://topskill.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain_slider.af41b9be.png&w=3840&q=75"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div> -->
      </div>
    </div>
  </kinesis-container>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import "swiper/css/swiper.css";
export default {
  name: "HeroBanner",
  components: {
    // Swiper,
    // SwiperSlide,
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
  },
  data() {
    return {
      search: "",
      mySwiper: null, // Swiper o'zgaruvchisi
      swiperOptions: {
        autoplay: {
          delay: 4000, // ms dan keyinroq autoplayni to'xtatish uchun
          disableOnInteraction: false, // foydalanuvchi ro'yxatdan o'tganida autoplayni to'xtatish
        },
        loop: true, // sliderda loop yoqish
        speed: 500, // o'tish tezligi
        slidesPerView: 1, // slaydlarning soni
        spaceBetween: 30, // slaydlar orasidagi masofa
      },
    };
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.hero-banner {
  background-color: #024033;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(100vh - 90px);
    width: 100%;
  }
  &__content {
    max-width: calc(50% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
}
.swiper-container {
  border-radius: 12px;
}
.swiper-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(4, 81, 64);
  border-radius: 12px;
  padding: 0 30px;
  min-height: calc(100vh - 105px);
  width: 100%;
  &__info {
    max-width: calc(60% - 20px);
    &-title {
      font-weight: 700;
      font-size: 40px;
      line-height: 118%;
      letter-spacing: -0.03em;
      color: #fff;
    }
    &-text {
      font-weight: 400;
      font-size: 22px;
      line-height: 140%;
      letter-spacing: -0.02em;
      color: #fff;
      margin-top: 32px;
    }
  }
  &__photo {
    max-width: calc(40% - 20px);
    img {
      max-width: 530px;
      width: 100%;
      -o-object-fit: contain;
      object-fit: contain;
      margin-left: auto;
    }
  }
}

@media (max-width: 991px) {
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
  .hero-banner__photo {
    margin-left: auto;
    margin-right: auto;
    order: 1;
    max-width: 100%;
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
