<template>
  <div class="home-page">
    <HeroBanner />
    <cta-banner
      title="Stesting loyihasi haqida"
      content="STesting – bu o‘quvchilarni xalqaro PISA, TIMSS, PIRLS tadqiqotlariga tayyorgarlik ko‘rishi uchun sinov platformasidir. “STesting”platformasi xalqaro tadqiqotlardan muvaffaqiyatli o'tishga yordam beradi. Topshiriqlar formati bilan tanishing, ularni bajaring, bilimlaringizni sinang va charxlang! “STesting” sizning doimiy do‘stingiz! U bilan siz yuqori natijalarga erishasiz!"
      buttonText="Batafsil"
    />
    <ContentBanner />
    <Tests />
    <ContentBanner />
    <InternationalStudies />
    <VideoCourceBanner />
    <Counts />
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

<style scoped></style>
