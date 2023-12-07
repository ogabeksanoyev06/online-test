<template>
  <div class="home-page">
    <HeroBanner />
    <PromoPage />
    <CtaBanner
      name="Online test"
      title="Sizning vaqtingizga qarab moslashadi."
      text="Online test bo'limida siz xohlagan yo'nalishni tanlang va Testni Boshlash tugmasi bilan jarayonni ishga tushuring."
      :textIsActive="true"
    />
    <CtaBanner
      name="Blog test"
      title="Ummumiy shakllangan ko'nikmalar sinovdan o'tkaziladi."
      text="Bo'limda qaysi fan yuzasidan test ishlamoqchi bo'lganingizni tanlang, testlar miqdorini belgilang va o'z darajangizni tekshiring."
      :textIsActive="true"
      :orderingFlex="true"
    />
    <CtaBanner
      name="Maktab o'quvchilari uchun test"
      title="O'quvchilar uchun maxsus testlar."
      text="Bu bo'limda o'quvchilar olgan bilim va ko'nikmalarini amalda mustahkamlab olishadi. O'rganing va bazadan foydalanib mustahkamlang."
      :textIsActive="true"
    />
    <CtaBanner
      name="Xalqaro tadqiqot testlari"
      title="Bu b'limda xalqaro darajada o'z o'rningizni egallang."
      text="Xalqaro tadqiqotlar bo'limi o'quvchi yoshlarni har 5 yilda PISA, PIRLSS, TIMSS testlaridan o'z bilimini tekshirish imkoniyatini beradi."
      :textIsActive="true"
      :orderingFlex="true"
    />
  </div>
</template>

<script>
import PromoPage from "@/components/pages/home/PromoPage.vue";
import HeroBanner from "../../../components/pages/home/HeroBanner";
import CtaBanner from "@/components/pages/home/CtaBanner.vue";

export default {
  name: "AppHome",
  components: {
    HeroBanner,
    PromoPage,
    CtaBanner,
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

<style lang="scss" scoped></style>
