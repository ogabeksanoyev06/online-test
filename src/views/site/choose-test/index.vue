<template>
  <section class="section py-30">
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
        :count="isMobileSmall ? 1 : isMobile ? 2 : 3"
        :offset-y="isMobileSmall ? 15 : 20"
        :offset-x="isMobileSmall ? 15 : 20"
      >
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/online-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
                Onlayn testlar
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Siz ushbu bo'limda qabul test tizimi talablari asosida onlayn
              imtihon topshirasiz. Test varianti DTM talablari asosida
              shakllantirilgan. Savollar 40 000 savol ichidan tanlab beriladi.
              Testni boshlash uchun boshlash tugmachasini bosing
            </AppText>
          </div>

          <AppButton
            @click="chooseTest"
            theme="main"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
          >
            Testni boshlash
          </AppButton>
        </div>
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/block-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
                Blokli testlar
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Bu qismda tanlagan faningiz bo'yicha 30 ta savoldan iborat
              testlarni yechasiz. 10 marta blokli test topshirish tekin. Testni
              boshlash uchun boshlash tugmachasini bosing
            </AppText>
          </div>

          <app-button
            @click="startBlockTest"
            theme="main"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
          >
            Testni boshlash
          </app-button>
        </div>
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <block-wrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/school-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
                Maktab o'quvchilari uchun
              </app-text>
            </block-wrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Ushbu bo'limda maktab o'quvchilari uchun tanlangan fan va undagi
              mavzular ro'yxatidan bir nechta mavzuni tanlab olish va ular
              asosida ko'rsatilgan sondagi testlarni yechish imkoniga ega
              bo'lasiz.
            </AppText>
          </div>

          <AppButton
            @click="startClassTest"
            theme="main"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
          >
            Testni boshlash
          </AppButton>
        </div>
      </BlockWrap>
      <AppModal
        @close="closeModal"
        :class="{ visible: chooseTestModal }"
        :width="500"
      >
        <template #modalHeader> Online Test </template>
        <template #modalBody>
          <BaseSelect
            :append="true"
            placeholder="Yo'nalishni tanlang"
            :options-prop="specList"
            v-model="selectedDirection"
            @itemSelected="directionChange"
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
            class="color-main mb-10"
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
            <AppText
              size="16"
              line-height="24"
              weight="700"
              class="color-secondary"
            >
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
            theme="main"
            @click="startOnlineTest"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
            style="width: 100%"
            :disabled="startTestButtonState"
          >
            Testni boshlash
          </AppButton>
        </template>
      </AppModal>
      <div
        class="overlay"
        :class="{ visible: chooseTestModal }"
        @close="closeModal"
      ></div>
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
export default {
  name: "AppTests",
  components: { AppButton, BlockWrap, AppModal, BaseSelect, BaseInput },
  data() {
    return {
      chooseTestModal: false,
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
      this.selectedDirectionId = item.id;
      localStorage.setItem("directionId", item.id);
      this.getSubjectsByDirectionId(this.selectedDirectionId);
    },
    getSubjectsByDirectionId(directionId) {
      try {
        this.$http
          .get("tests/exam-tests/?spec_id=" + directionId)
          .then((res) => {
            if (res) {
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
                this.examsOverAllBall += item.quesCount * item.quesBall;
                this.examsOverAllTime += item.duration_time;
              });
            }
            this.startTestButtonState = false;
          });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
    chooseTest() {
      this.chooseTestModal = true;
      document.body.style.overflowY = "hidden";
      document.body.style.overflowX = "hidden";
    },
    startBlockTest() {
      this.$router.push({ path: "/choose-subject" });
    },
    startClassTest() {
      console.log("aa");
    },
    startOnlineTest() {
      this.clearTestPropertiesFromLocalStorage();
      this.storeTestTimeToStorage(this.examsOverAllTime);
      this.directionMandatorySubjects.forEach((s) => {
        this.selectedSubjectsForOnlineTest.push(s.id);
      });
      this.directionMainSubjects.forEach((s) => {
        this.selectedSubjectsForOnlineTest.push(s.id);
      });
      this.setTestType(test.TYPE_ONLINE);
      this.setTestTypeToStorage(test.TYPE_ONLINE);
      try {
        this.$http
          .post("tests/exam-tests/start/", {
            exam_ids: this.selectedSubjectsForOnlineTest,
            started_time: new Date(),
          })
          .then((res) => {
            if (res) {
              localStorage.setItem("questions", JSON.stringify(res));
              this.$router.push({ name: "test" });
            }
          })
          .catch((err) => {
            this.errorNotification(err.response.data);
          });
      } catch (e) {
        // this.errorNotification(e.response.data.error.message);
      }
    },
    closeModal() {
      this.chooseTestModal = false;
      document.body.style.overflowY = "auto";
    },
  },
  computed: {
    ...mapGetters(["specList"]),
  },
  mounted() {},
  created() {
    this.getSpecList();
    this.removeTestAttributesFromStorage();
  },
};
</script>
<style lang="scss" scoped>
.section {
  background-color: #f6f7fa;
}
@media (max-width: 991px) {
}
@media (max-width: 576px) {
}
</style>
