<template>
  <div style="background-color: rgb(242 242 242)">
    <div class="container">
      <section class="py-40">
        <div class="section__top" :class="isMobile ? 'mb-10' : 'mb-20'">
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mb-10"
          >
            Test olinadigan fanni tanlang
          </app-text>
        </div>
        <span class="d-flex justify-content-center mb-20" v-if="false">
          <loader />
        </span>
        <div class="bg-white radius" :class="isMobileSmall ? 'pa-10' : 'pa-20'">
          <AppSmallCard
            v-for="(item, idx) in subjects"
            :key="idx"
            :title="item.name"
            style="cursor: pointer"
            :active="selectedSubject.subject.id === item.id"
            @click="selectSubject(item)"
          />
        </div>
        <div
          class="bg-white radius w-100 mt-20"
          :class="isMobileSmall ? 'pa-10' : 'pa-20'"
        >
          <div class="test__details mb-20">
            <BaseSelect
              v-model="selectedLevelValue"
              label="Darajani tanlang"
              placeholder="Darajani tanlang"
              :options-prop="questionLevelList"
              @itemSelected="selectedClassValue"
              hideDetails
              :append="true"
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
            <BaseInput
              v-model="questionTotalTime"
              hide-details=""
              label="Umumiy vaqt"
              disabled
            >
            </BaseInput>
          </div>
          <AppText
            :size="isMobileSmall ? 16 : 20"
            :line-height="isMobileSmall ? 20 : 24"
            weight="700"
            class="mb-30"
          >
            Fan mavzularini tanlang
          </AppText>
          <div class="choose-test-topics mb-20">
            <BaseCheckbox
              size="18"
              v-for="(item, index) in subjectSectionList"
              :title="item.name"
              class="mb-20"
              :key="index"
              style="display: flex"
              @change="sectionChanged(item.id)"
              :checked="!selectedSubjectSections.includes(item.id)"
            />
          </div>
          <AppButton
            theme="secondary"
            sides="20"
            @click="getQuestionBySelectedParameters"
          >
            <img src="/icons/play.svg" alt="" style="margin-right: 10px" />
            Testni boshlash
          </AppButton>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AppSmallCard from "../../../components/shared-components/AppSmallCard";
import AppText from "../../../components/shared-components/AppText";
import BaseSelect from "../../../components/shared-components/BaseSelect";
import AppButton from "../../../components/shared-components/AppButton";
import test from "../../../constants/test";
import { mapMutations } from "vuex";
import BaseCheckbox from "@/components/shared-components/BaseCheckbox.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import Loader from "@/components/shared-components/Loader.vue";

export default {
  name: "AppIndex",
  components: {
    AppButton,
    BaseSelect,
    AppSmallCard,
    AppText,
    BaseCheckbox,
    BaseInput,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      subjects: [
        {
          name: "Maths",
          photo: "/icons/sciences.svg",
        },
      ],
      selectedSubject: {
        selected: false,
        subject: {
          name: null,
        },
      },
      subject_id: 1,
      selectedLevelValue: "beginner",
      subjectSectionList: [
        {
          id: null,
          name: null,
        },
      ],
      selectedSubjectSections: [],
      questionTotalTime: 0,
      questionsCount: 1,
      questionLevelList: [
        {
          id: 0,
          valeu: "beginner",
          name: "beginner",
        },
        {
          id: 1,
          valeu: "medium",
          name: "bedium",
        },
        {
          id: 2,
          valeu: "advanced",
          name: "advanced",
        },
      ],
      questionTime: 0,
    };
  },
  methods: {
    ...mapMutations(["setTestType"]),
    selectSubject(subject) {
      this.selectedSubject.selected = true;
      this.selectedSubject.subject = subject;
      this.getSubjectSectionList(this.selectedSubject.subject.id);
    },
    getSubjects() {
      try {
        this.$http.get(`tests/sciences/`).then((res) => {
          if (res) {
            this.subjects = res;
            this.subjects.forEach((s) => {
              s.photo = "/icons/sciences.svg";
            });
          }
        });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
    getSubjectSectionList(subjectId) {
      try {
        this.$http
          .get(`tests/subjects/?science_id=` + subjectId)
          .then((res) => {
            if (res) {
              this.subjectSectionList = res;
            }
          });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
    sectionChanged(sectionId) {
      let index = this.selectedSubjectSections.findIndex(
        (s) => s === sectionId
      );
      if (index === -1) {
        this.selectedSubjectSections.push(sectionId);
      } else {
        this.selectedSubjectSections.splice(index, 1);
      }
    },
    questionMinute(subjectId) {
      try {
        this.$api
          .get(`main/Home/Test/QuestionMinute?subjectId=` + subjectId)
          .then((res) => {
            if (!res.error) {
              this.questionTime = res.result.questionMinute;
            }
          });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
    getQuestionBySelectedParameters() {
      let paramtersModel = {};
      paramtersModel.subjectId = this.selectedSubject.subject.id;
      paramtersModel.sectionList = this.selectedSubjectSections;
      paramtersModel.testCount = this.questionsCount;
      paramtersModel.testLevel = this.questionSelectedLevel;
      this.storeTestTimeToStorage(this.questionTotalTime);
      try {
        this.$api
          .post(`main/BlockTest/TestList`, paramtersModel)
          .then((res) => {
            if (!res.error) {
              this.setTestType(test.TYPE_BLOCK);
              this.setTestTypeToStorage(test.TYPE_BLOCK);
              let rawQuestions = [];
              rawQuestions.push(res.result);
              localStorage.setItem("questions", JSON.stringify(rawQuestions));
              this.$router.push("test");
            } else {
              this.errorNotification(res.error.message);
            }
          })
          .catch((e) => {
            this.errorNotification(e.response.data.error.message);
          });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
    selectedClassValue(item) {
      this.selectedLevelValue = item.name;
    },
  },
  created() {
    this.getSubjects();
    this.removeTestAttributesFromStorage();
  },
  watch: {
    questionTime() {
      this.questionTotalTime = this.questionTime * this.questionsCount;
    },
    questionsCount() {
      this.questionTotalTime = this.questionTime * this.questionsCount;
    },
  },
};
</script>

<style lang="scss" scoped>
.test__details {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  &-item {
    margin-right: 30px;
    margin-bottom: 20px;
  }
}
</style>
