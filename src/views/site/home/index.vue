<template>
  <div class="home-page">
    <HeroBanner />
    <cta-banner
      title="iTestify loyihasi haqida"
      content="iTestify – bu o‘quvchilarni xalqaro PISA, TIMSS, PIRLS tadqiqotlariga tayyorgarlik ko‘rish ,dtm, maktab o'quvchilari va o'qituvchilari  uchun sinov platformasidir. iTestify xalqaro tadqiqotlardan muvaffaqiyatli o'tishga, barcha yo'nalishlarda o'z bilimingizni sinab ko'rishga yordam beradi. Topshiriqlar formati bilan tanishing, ularni bajaring, bilimlaringizni sinang va charxlang! iTestify sizning doimiy do‘stingiz! U bilan siz yuqori natijalarga erishasiz!"
      buttonText="Batafsil"
    />
    <ContentBanner />
    <Tests />
    <ContentBanner />
    <InternationalStudies />
    <VideoCourceBanner />
    <Counts />
    <section class="section py-30">
      <div class="container">
        <div class="items">
          <div class="item">
            <span>01</span>
            <h4>Ro'yhatdan o'ting</h4>
            <p>
              Kabinetga kirish tugmasini bosib formani to'dirib ro'yhatdan
              o'ting
            </p>
          </div>
          <div class="item">
            <span>02</span>
            <h4>Balansingizni to'ldiring</h4>
            <p>Pul o'tkazish platformalaridan qulay tarzda pul o'tkazing.</p>
          </div>
          <div class="item">
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
import Tests from "@/components/pages/home/Tests.vue";
import InternationalStudies from "@/components/pages/home/InternationalStudies.vue";
import VideoCourceBanner from "@/components/pages/home/VideoCourceBanner.vue";
import Counts from "@/components/pages/home/Counts.vue";
import ContentBanner from "@/components/pages/home/ContentBanner.vue";

export default {
  name: "AppHome",
  components: {
    HeroBanner,
    CtaBanner,
    Tests,
    InternationalStudies,
    VideoCourceBanner,
    Counts,
    ContentBanner,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  .item {
    padding: 50px 30px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    transition: all ease-in-out 0.3s;
    &:hover {
      background: #3165cb;
      padding: 30px 30px 70px 30px;
      box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);
      span,
      p,
      h4 {
        color: #fff;
      }
    }
    span {
      display: block;
      font-size: 28px;
      font-weight: 700;
      color: #3165cb;
    }
    h4 {
      font-size: 24px;
      font-weight: 600;
      padding: 0;
      margin: 20px 0;
      color: #434175;
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
