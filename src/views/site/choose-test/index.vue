<template>
  <section class="section py-30">
    <loader v-if="isLoading" />
    <div class="container">
      <div class="section__top mb-30">
        <div class="section__top-left">
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mb-10"
          >
            Abiturientlar va maktab o'quvchilar uchun test topshirish tizimi
          </app-text>
          <app-text
            :size="isMobileSmall ? 12 : 14"
            :line-height="isMobileSmall ? 16 : 26"
            weight="500"
          >
            Davlat standarti asosida tuzilgan testlardan foydalanib ,
            bilimingizni sinab ko'ring
          </app-text>
        </div>
      </div>
      <BlockWrap
        :count="isMobile ? 1 : isDesktopSmall ? 2 : 3"
        :offset-y="isMobileSmall ? 15 : 25"
        :offset-x="isMobileSmall ? 15 : 25"
      >
        <div class="block__item" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/online-exams.svg" alt="icon" />
              </div>
              <app-text
                size="18"
                line-height="24"
                weight="700"
                class="color-info"
              >
                Onlayn testlar
              </app-text>
            </BlockWrap>
            <AppText
              size="14"
              line-height="20"
              class="color-text mb-20"
              weight="500"
            >
              Siz ushbu bo'limda qabul test tizimi talablari asosida onlayn
              imtihon topshirasiz. Test varianti DTM talablari asosida
              shakllantirilgan. Savollar 40 000 savol ichidan tanlab beriladi.
              Testni boshlash uchun boshlash tugmachasini bosing
            </AppText>
          </div>

          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              @click="closeModal"
              theme="info"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
            >
              Testni boshlash
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
            >
              Hisobni to'ldirish
            </AppButton>
          </div>
        </div>
        <div class="block__item" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/block-exams.svg" alt="icon" />
              </div>

              <app-text
                size="18"
                line-height="24"
                weight="700"
                class="color-orange"
              >
                Blokli testlar
              </app-text>
            </BlockWrap>
            <AppText
              size="14"
              line-height="20"
              class="color-text mb-20"
              weight="500"
            >
              Bu qismda tanlagan faningiz bo'yicha 30 ta savoldan iborat
              testlarni yechasiz. 10 marta blokli test topshirish tekin. Testni
              boshlash uchun boshlash tugmachasini bosing
            </AppText>
          </div>

          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              @click="startBlockTest"
              theme="orange"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
            >
              Testni boshlash
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
            >
              Hisobni to'ldirish
            </AppButton>
          </div>
        </div>
        <div class="block__item" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
          <div>
            <block-wrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/school-exams.svg" alt="icon" />
              </div>
              <app-text
                size="18"
                line-height="24"
                weight="700"
                class="color-puple"
              >
                Maktab o'quvchilari uchun
              </app-text>
            </block-wrap>
            <AppText
              size="14"
              line-height="20"
              class="color-text mb-20"
              weight="500"
            >
              Ushbu bo'limda maktab o'quvchilari uchun tanlangan fan va undagi
              mavzular ro'yxatidan bir nechta mavzuni tanlab olish va ular
              asosida ko'rsatilgan sondagi testlarni yechish imkoniga ega
              bo'lasiz.
            </AppText>
          </div>
          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              @click="startClassTest"
              theme="purple"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
            >
              Testni boshlash
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
            >
              Hisobni to'ldirish
            </AppButton>
          </div>
        </div>
        <div class="block__item" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
          <div>
            <block-wrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/school-exams.svg" alt="icon" />
              </div>
              <app-text
                size="18"
                line-height="24"
                weight="700"
                class="color-green"
              >
                Prezident maktabi testlari
              </app-text>
            </block-wrap>
            <AppText
              size="14"
              line-height="20"
              class="color-text mb-20"
              weight="500"
            >
              Ushbu bo'limda maktab o'quvchilari uchun tanlangan fan va undagi
              mavzular ro'yxatidan bir nechta mavzuni tanlab olish va ular
              asosida ko'rsatilgan sondagi testlarni yechish imkoniga ega
              bo'lasiz.
            </AppText>
          </div>

          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              @click="startPresidentTest"
              theme="green"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
              :disabled="true"
            >
              Jarayonda...
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
              :weight="600"
              :disabled="true"
            >
              Hisobni to'ldirish
            </AppButton>
          </div>
        </div>
        <div class="block__item" :class="isMobileSmall ? 'pa-15' : 'pa-30'">
          <div>
            <block-wrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/school-exams.svg" alt="icon" />
              </div>
              <app-text
                size="18"
                line-height="24"
                weight="700"
                class="color-pumpkin"
              >
                Attestatsiya testlari
              </app-text>
            </block-wrap>
            <AppText
              size="14"
              line-height="20"
              class="color-text mb-20"
              weight="500"
            >
              Ushbu bo'limda maktab o'quvchilari uchun tanlangan fan va undagi
              mavzular ro'yxatidan bir nechta mavzuni tanlab olish va ular
              asosida ko'rsatilgan sondagi testlarni yechish imkoniga ega
              bo'lasiz.
            </AppText>
          </div>

          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              @click="startAttestatsiyaTest"
              theme="pumpkin"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
              :disabled="true"
            >
              Jarayonda...
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 45"
              :class="isMobile ? 'w-100' : ''"
              :weight="600"
              :disabled="true"
            >
              Hisobni to'ldirish
            </AppButton>
          </div>
        </div>
      </BlockWrap>
      <AppModal :value="chooseTestModal" @close="closeModal">
        <template #body>
          <BaseSelect
            :append="true"
            placeholder="Yo'nalishni tanlang"
            :options-prop="specList"
            v-model="selectedDirection"
            @itemSelected="directionChange"
            :disabled="isLoading"
            :autofocus="selectedDirectionId"
            :hideDetails="true"
          >
            <template #append>
              <svg
                class="Dropdown_self__FtxaI"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="height: 1rem; width: 1rem"
              >
                <path
                  d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668"
                  stroke="rgb(51, 54, 57)"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </template>
          </BaseSelect>

          <AppText
            size="14"
            line-height="24"
            weight="700"
            class="color-main mb-10 mt-10"
          >
            Majburiy fanlar:
          </AppText>
          <BlockWrap
            class="align-center mb-10"
            :count="1"
            offset-y="10"
            v-for="(item, index) in directionMandatorySubjects"
            :key="index + 'mandatory'"
          >
            <base-input hideDetails="" v-model="item.science" disabled />
          </BlockWrap>
          <BaseInput
            label="Birinchi fan"
            placeholder="Birinchi fan"
            v-if="directionMandatorySubjects.length <= 0"
            :disabled="true"
          />
          <BaseInput
            label="Ikkinchi fan"
            placeholder="Ikkinchi fan"
            v-if="directionMandatorySubjects.length <= 0"
            :disabled="true"
          />
          <BaseInput
            label="Uchinchi fan"
            placeholder="Uchinchi fan"
            v-if="directionMandatorySubjects.length <= 0"
            :disabled="true"
          />
          <AppText
            size="14"
            line-height="24"
            weight="700"
            class="color-main mb-10"
          >
            Asosiy fanlar:
          </AppText>
          <BlockWrap
            class="align-center mb-10"
            :count="1"
            offset-y="10"
            v-for="(item, i) in directionMainSubjects"
            :key="i"
          >
            <base-input hideDetails="" v-model="item.science" disabled />
          </BlockWrap>
          <BaseInput
            label="Birinchi fan"
            placeholder="Birinchi fan"
            v-if="directionMainSubjects.length <= 0"
            :disabled="true"
          />
          <BaseInput
            label="Ikkinchi fan"
            placeholder="Ikkinchi fan"
            v-if="directionMainSubjects.length <= 0"
            :disabled="true"
          />
          <BlockWrap
            :count="isMobileSmall ? 1 : 2"
            offset-y="10"
            offset-x="20"
            width-auto
          >
            <AppText size="14" line-height="24" weight="700">
              Umumiy vaqti:
            </AppText>
            <AppText size="16" line-height="24" weight="700" class="color-gray">
              {{ examsOverAllTime }} min
            </AppText>
          </BlockWrap>
          <BlockWrap
            :count="isMobileSmall ? 1 : 2"
            offset-y="10"
            offset-x="20"
            width-auto
            class="mb-20"
          >
            <AppText size="14" line-height="24" weight="700">
              Maksimum ball:
            </AppText>

            <AppText size="16" line-height="24" weight="700" class="color-main">
              {{ examsOverAllBall }} ball
            </AppText>
          </BlockWrap>
          <AppButton
            theme="light-green"
            @click="startOnlineTest"
            :sides="isMobileSmall ? 10 : 20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 45"
            style="width: 100%"
            :disabled="
              startTestButtonState || (!startTestButtonState && isLoading),
            "
          >
            Testni boshlash
          </AppButton>
        </template>
      </AppModal>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
import AppModal from "@/components/shared-components/AppModal.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import test from "../../../constants/test";
import { mapActions, mapGetters, mapMutations } from "vuex";
import Loader from "@/components/shared-components/Loader.vue";
export default {
  name: "AppTests",
  components: { AppButton, BlockWrap, AppModal, BaseSelect, BaseInput, Loader },
  data() {
    return {
      isLoading: false,
      chooseTestModal: true,
      selectedDirection: null,
      selectedDirectionId: null,
      directionMandatorySubjects: [],
      directionMainSubjects: [],
      subjectLabels: ["Birinchi fan", "Ikkinchi fan", "Uchinchi fan"],
      examsOverAllTime: 0,
      examsOverAllBall: 0,
      subjectsListForStartingTest: [],
      selectedSubjectsForOnlineTest: [],
      firstSubjectId: null,
      startTestButtonState: true,
    };
  },
  methods: {
    ...mapActions(["getSpecList"]),
    ...mapMutations(["setTestType"]),

    directionChange(item) {
      if (!this.selectedDirection) {
        this.startTestButtonState = true;
        this.directionMainSubjects = [];
        this.directionMandatorySubjects = [];
        this.examsOverAllTime = 0;
        this.examsOverAllBall = 0;
        return;
      }
      this.getSubjectsByDirectionId(item.id);
    },
    getSubjectsByDirectionId(directionId) {
      this.isLoading = true;
      this.$http
        .get("tests/exam-tests/?spec_id=" + directionId)
        .then((res) => {
          if (res.length > 0) {
            this.directionMainSubjects = [];
            this.directionMandatorySubjects = [];
            this.examsOverAllTime = 0;
            this.examsOverAllBall = 0;
            res.forEach((item) => {
              if (item.type === "compulsory") {
                this.directionMandatorySubjects.push(item);
              } else {
                this.directionMainSubjects.push(item);
              }
              this.examsOverAllBall += item.total_ball;
              this.examsOverAllTime += item.duration_time;
            });
            this.startTestButtonState = false;
            this.selectedDirectionId = false;
          } else {
            this.directionMainSubjects = [];
            this.directionMandatorySubjects = [];
            this.examsOverAllTime = 0;
            this.examsOverAllBall = 0;
            this.startTestButtonState = true;
          }
        })
        .catch(() => {
          //
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    startBlockTest() {
      this.$router.push({ path: "/choose-subject" });
    },
    startClassTest() {
      this.$router.push({ path: "/choose-subject-school" });
    },
    startOnlineTest() {
      this.storeTestTimeToStorage(this.examsOverAllTime * 60);
      this.directionMandatorySubjects.forEach((s) => {
        this.selectedSubjectsForOnlineTest.push(s.id);
      });
      this.directionMainSubjects.forEach((s) => {
        this.selectedSubjectsForOnlineTest.push(s.id);
      });
      this.setTestType(test.TYPE_ONLINE);
      this.setTestTypeToStorage(test.TYPE_ONLINE);
      this.isLoading = true;
      this.$http
        .post("tests/exam-tests/start/", {
          exam_ids: this.selectedSubjectsForOnlineTest,
          started_time: new Date(),
        })
        .then((res) => {
          if (res) {
            localStorage.setItem("questions", JSON.stringify(res));
            this.$router.push({ name: "test" });
          } else {
            //
          }
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const detail = err.response.data.detail;
            const message = err.response.data.message;
            if (detail) {
              this.errorNotification(detail);
            } else {
              this.errorNotification(message);
            }
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    startPresidentTest() {
      this.$router.push({ path: "/President-school-test" });
    },
    startAttestatsiyaTest() {
      this.$router.push({ path: "/Attestatsiya-test" });
    },
    closeModal() {
      this.chooseTestModal = !this.chooseTestModal;
    },
  },
  computed: {
    ...mapGetters(["specList"]),
  },
  mounted() {},
  watch: {},
  created() {
    this.getSpecList();
  },
};
</script>
<style lang="scss" scoped>
.block__item:nth-child(1) {
  background-color: #f2f7ff;
}
.block__item:nth-child(2) {
  background-color: #fef9e6;
}
.block__item:nth-child(3) {
  background-color: #f7f0fe;
}
.block__item:nth-child(4) {
  background-color: #e9fcf6;
}
.block__item:nth-child(5) {
  background-color: #fff2f9;
}
.section {
  background-color: #fff;
}
@media (max-width: 991px) {
}
@media (max-width: 576px) {
}
</style>
