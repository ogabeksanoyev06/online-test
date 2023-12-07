<template>
  <section class="section py-30">
    <loader v-if="isLoading" />
    <div class="container">
      <div class="section__top mb-40">
        <div class="section__top-left text-center mx-auto">
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
        :count="isMobileMedium ? 1 : 2"
        :offset-y="isMobileSmall ? 8 : 16"
        :offset-x="isMobileSmall ? 8 : 16"
      >
        <div
          class="block__item"
          :class="isMobileSmall ? 'pa-20' : 'pa-20'"
          v-for="item in testTypesTest"
          :key="item.id"
        >
          <app-text
            :size="isMobileSmall ? '22' : isMobileMedium ? '24' : '28'"
            line-height="167%"
            weight="700"
            :max-width="376"
          >
            {{ item.title }}
          </app-text>
          <AppText size="14" line-height="20" class="mt-10 mb-30" weight="400">
            {{ item.short_description }}
          </AppText>
          <app-text :size="14" weight="700" class="mb-30 color-white">
            <span
              style="
                background-color: #ffa800;
                padding: 5px 10px;
                border-radius: 4px;
              "
            >
              {{ item.price }} so'm
            </span>
          </app-text>

          <div class="d-flex flex-wrap justify-space-between gap-5">
            <AppButton
              v-if="item.bought"
              @click="selectedTestType(item.name)"
              theme="green"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 50"
              :class="isMobile ? 'w-100' : ''"
              :weight="500"
            >
              Testni boshlash
            </AppButton>
            <AppButton
              v-if="!item.bought"
              @click="buyExams(item.id)"
              theme="green"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 50"
              :class="isMobile ? 'w-100' : ''"
              :weight="500"
            >
              Testni sotib olish
            </AppButton>
            <AppButton
              theme="gray"
              :sides="isMobileSmall ? 10 : 20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 50"
              :class="isMobile ? 'w-100' : ''"
              :weight="500"
              @click="$router.push({ path: 'top-up-balance' })"
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
      examsOverAllTime: 0,
      examsOverAllBall: 0,
      selectedSubjectsForOnlineTest: [],
      startTestButtonState: true,
      testTypesTest: [],
    };
  },
  methods: {
    ...mapActions(["getSpecList"]),
    ...mapMutations(["setTestType"]),
    getTestTypes() {
      this.isLoading = true;
      this.$http
        .get("tests/test-types/?category_type=test")
        .then((res) => {
          this.testTypesTest = res.sort((a, b) => a.id - b.id);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    buyExams(test_type) {
      this.isLoading = true;
      this.$http
        .post("tests/buy-exams/", {
          test_type: test_type,
        })
        .then((res) => {
          this.setTestType(res.name);
          this.getTestTypes();
        })
        .catch(() => {
          this.errorNotification("Balansingizda mablag' yetarli emas");
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    selectedTestType(testType) {
      switch (testType) {
        case test.TYPE_ONLINE:
          this.closeModal();
          break;

        case test.TYPE_BLOCK:
          this.startBlockTest();
          break;

        case test.TYPE_SCHOOL:
          this.startSchoolTest();
          break;

        default:
          return null;
      }
    },

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
    startSchoolTest() {
      this.$router.push({ path: "/choose-subject-school" });
    },
    startOnlineTest() {
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
        })
        .then((res) => {
          if (res) {
            localStorage.setItem("questions", JSON.stringify(res));
            this.storeTestStartedTimeToStorage(new Date());
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

    closeModal() {
      this.chooseTestModal = !this.chooseTestModal;
    },
  },
  computed: {
    ...mapGetters(["specList", "testType"]),
  },
  mounted() {},
  watch: {},
  created() {
    this.getTestTypes();
    this.getSpecList();
  },
};
</script>
<style lang="scss" scoped>
.section {
  background-color: #f9f9f9;
}
@media (max-width: 991px) {
}
@media (max-width: 576px) {
}
</style>
