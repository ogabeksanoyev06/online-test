<template>
  <div class="home-page">
    <HeroBanner />
    <cta-banner
      title="iTestify loyihasi haqida"
      content="iTestify – bu o‘quvchilarni xalqaro PISA, TIMSS, PIRLS tadqiqotlariga tayyorgarlik ko‘rish ,dtm, maktab o'quvchilari va o'qituvchilari  uchun sinov platformasidir. iTestify xalqaro tadqiqotlardan muvaffaqiyatli o'tishga, barcha yo'nalishlarda o'z bilimingizni sinab ko'rishga yordam beradi. Topshiriqlar formati bilan tanishing, ularni bajaring, bilimlaringizni sinang va charxlang! iTestify sizning doimiy do‘stingiz! U bilan siz yuqori natijalarga erishasiz!"
      buttonText="Batafsil"
    />
    <section
      :class="isMobile ? 'py-30' : 'py-60'"
      style="position: relative; background: #f5f8ff; transition: all 0.3s"
    >
      <div class="container">
        <div data-aos="zoom-in">
          <AppText
            :size="isMobileSmall ? 20 : isMobile ? 24 : 28"
            :line-height="isMobileSmall ? 28 : isMobile ? 32 : 36"
            :class="isMobile ? 'mb-20' : 'mb-40'"
            weight="600"
            class="mx-auto text-center"
            max-width="400"
          >
            Bizda mavjud test yo'nalishlari
          </AppText>
        </div>

        <div class="category">
          <div
            class="category_item"
            v-for="(item, i) in testCategory"
            :key="i"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 100"
          >
            <div
              class="d-flex flex-column align-center justify-content-center gap-10 text-center"
            >
              <img
                src="https://api.mentalaba.uz/assets/files/test_gallery/60782ce4-2fac-4301-b2f7-0775145c5fd6.png"
                style="max-width: 100%"
              />
              <AppText
                :size="isMobileSmall ? 14 : 16"
                :line-height="isMobileSmall ? 22 : 24"
                weight="600"
              >
                {{ item.name }}
              </AppText>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section :class="isMobile ? 'py-30' : 'py-60'">
      <VideoCourceBanner />
    </section>
    <section :class="isMobile ? 'py-30' : 'py-60'">
      <Counts />
    </section>
    <section :class="isMobile ? 'py-30' : 'py-60'">
      <div class="container">
        <div class="items">
          <div class="items_item" data-aos="fade-up" data-aos-duration="200">
            <span>01</span>
            <h4>Ro'yhatdan o'ting</h4>
            <p>
              Kabinetga kirish tugmasini bosib formani to'dirib ro'yhatdan
              o'ting
            </p>
          </div>
          <div class="items_item" data-aos="fade-up" data-aos-duration="400">
            <span>02</span>
            <h4>Balansingizni to'ldiring</h4>
            <p>Pul o'tkazish platformalaridan qulay tarzda pul o'tkazing.</p>
          </div>
          <div class="items_item" data-aos="fade-up" data-aos-duration="600">
            <span>03</span>
            <h4>Testni ishlang</h4>
            <p>O'zingiz xohlagan yo'nalishni tanlang va testni ishlang.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CtaBanner from "@/components/pages/home/CtaBanner.vue";
import HeroBanner from "../../../components/pages/home/HeroBanner";
import VideoCourceBanner from "@/components/pages/home/VideoCourceBanner.vue";
import Counts from "@/components/pages/home/Counts.vue";

export default {
  name: "AppHome",
  components: {
    HeroBanner,
    CtaBanner,
    VideoCourceBanner,
    Counts,
  },
  data() {
    return {
      testCategory: [
        {
          id: 0,
          name: "Online testlar",
          link: "/",
          icon: "",
        },
        {
          id: 1,
          name: "Block testlar",
          link: "/",
          icon: "",
        },
        {
          id: 2,
          name: "Maktab o'quvchilari uchun testlar",
          link: "/",
          icon: "",
        },
        {
          id: 3,
          name: "Prezident maktabi testlari",
          link: "/",
          icon: "",
        },
        {
          id: 4,
          name: "Attestatsiya testlari",
          link: "/",
          icon: "",
        },
        {
          id: 5,
          name: "PISA testlari",
          link: "/",
          icon: "",
        },
        {
          id: 6,
          name: "PIRLS testlari",
          link: "/",
          icon: "",
        },
        {
          id: 7,
          name: "TIIMS testlari",
          link: "/",
          icon: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  &_item {
    max-width: 300px;
    min-height: 180px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #f0f0f0;
    cursor: pointer;
    transition: all 0.5s;
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.02);
    position: relative;

    img {
      max-width: 60px;
      max-height: 60px;
    }
    &:hover {
      box-shadow: 0 6px 16px -8px #00000014, 0 9px 28px #0000000d,
        0 12px 48px 16px #00000008;
      border-color: transparent;
    }
  }
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  &_item {
    padding: 50px 30px;
    transition: all ease-in-out 0.3s;
    &:hover {
      padding: 30px 30px 70px 30px;
      box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);
      &:nth-child(1) {
        background-color: #119c75;
        span,
        h4,
        p {
          color: #fff;
        }
      }
      &:nth-child(2) {
        background-color: #daab00;
        span,
        h4,
        p {
          color: #fff;
        }
      }
      &:nth-child(3) {
        background-color: #802fde;
        span,
        h4,
        p {
          color: #fff;
        }
      }
    }
    &:nth-child(1) {
      background-color: #e9fcf6;
      span,
      h4 {
        color: #119c75;
      }
    }
    &:nth-child(2) {
      background-color: #fef9e6;
      span,
      h4 {
        color: #daab00;
      }
    }
    &:nth-child(3) {
      background-color: #f7f0fe;
      span,
      h4 {
        color: #802fde;
      }
    }
    span {
      display: block;
      font-size: 28px;
      font-weight: 700;
    }
    h4 {
      font-size: 24px;
      font-weight: 600;
      padding: 0;
      margin: 20px 0;
    }
    p {
      color: #aaaaaa;
      font-size: 15px;
      margin: 0;
      padding: 0;
    }
  }
}
@media (max-width: 991px) {
  .items {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .items {
    grid-template-columns: 1fr;
  }
}
</style>
