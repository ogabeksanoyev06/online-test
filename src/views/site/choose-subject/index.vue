<template>
  <div class="container">
    <section class="py-40">
      <div class="section__top" :class="isMobile ? 'mb-10' : 'mb-30'">
        <app-text
          :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
          :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
          weight="700"
          class="mb-10"
        >
          Test olinadigan fanni tanlang
        </app-text>
      </div>

      <AppSmallCard
        v-for="(item, idx) in 4"
        :key="idx"
        :title="item.name + '(' + item.allQuestionCount + ')'"
        :photo="item.photo"
        style="cursor: pointer"
        :class="selectedSubject.subject.id === item.id ? '' : ''"
        @click="selectSubject(item)"
      />

      <div class="shadowed bordered radius pa-30 w-100">
        <AppText
          :size="isMobileSmall ? 16 : 20"
          :line-height="isMobileSmall ? 20 : 24"
          weight="700"
          class="mb-30"
        >
          Fan mavzularini tanlang
        </AppText>

        <div class="choose-test-topics mb-30">
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

        <div class="test__details mb-30">
          <BlockWrap
            width-auto
            class="align-center test__details-item"
            :count="isMobileSmall ? 2 : 1"
            offset-x="15"
            offset-y="15"
          >
            <AppText size="16" weight="700"> Savollar soni: </AppText>
            <BaseSelect
              v-model="questionsCount"
              :options-prop="questionsCountSelect"
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
                </svg> </template
            ></BaseSelect>
          </BlockWrap>

          <BlockWrap
            width-auto
            class="align-center test__details-item"
            :count="isMobileSmall ? 2 : 1"
            offset-x="15"
            offset-y="15"
          >
            <AppText size="16" weight="700"> Umumiy vaqt </AppText>
            <BaseInput
              v-model="questionTotalTime"
              hide-details=""
              disabled
            ></BaseInput>
          </BlockWrap>
          <BlockWrap
            width-auto
            class="align-center test__details-item"
            :count="isMobileSmall ? 2 : 1"
            offset-x="15"
            offset-y="15"
          >
            <AppText size="16" weight="700"> Darajasi </AppText>

            <BaseSelect
              :options-prop="questionLevelList"
              v-model="questionSelectedLevel"
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
          </BlockWrap>
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
</template>

<script>
import BlockWrap from "../../../components/shared-components/BlockWrap";
import AppSmallCard from "../../../components/shared-components/AppSmallCard";
import AppText from "../../../components/shared-components/AppText";
import BaseSelect from "../../../components/shared-components/BaseSelect";
import AppButton from "../../../components/shared-components/AppButton";
import BaseInput from "../../../components/shared-components/BaseInput";
import test from "../../../constants/test";
import { mapMutations } from "vuex";

export default {
  name: "AppIndex",
  components: {
    BaseInput,
    AppButton,
    BaseSelect,
    AppSmallCard,
    BlockWrap,
    AppText,
  },
  data() {
    return {
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
      subjectSectionList: [
        {
          id: null,
          name: null,
        },
      ],
      selectedSubjectSections: [],
      questionLevelList: [],
      questionSelectedLevel: 1,
      questionTotalTime: 0,
      questionsCount: 5,
      questionsCountSelect: [
        {
          id: 5,
          name: 5,
        },
        {
          id: 10,
          name: 10,
        },
        {
          id: 15,
          name: 15,
        },
        {
          id: 20,
          name: 20,
        },
        {
          id: 25,
          name: 25,
        },
        {
          id: 30,
          name: 30,
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
      this.questionMinute(this.selectedSubject.subject.id);
    },
    getSubjects() {
      try {
        this.$api.get(`main/Home/Test/SubjectList`).then((res) => {
          if (!res.error) {
            this.subjects = res.result;
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
        this.$api
          .get(`main/Home/Test/SubjectSectionList?subjectId=` + subjectId)
          .then((res) => {
            if (!res.error) {
              this.subjectSectionList = res.result;
              this.subjectSectionList.forEach((s) => {
                s.name = s.name.replaceAll("_x000d_", "");
                s.name = s.name.replaceAll(".", ".<br>");
              });
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
    testLevelList() {
      try {
        this.$api.get(`main/Home/Test/LevelList`).then((res) => {
          if (!res.error) {
            this.questionLevelList = res.result;
          }
        });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
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
  },
  created() {
    this.getSubjects();
    this.testLevelList();
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
  width: 100%;

  &-item {
    margin-right: 30px;
    margin-bottom: 20px;
  }
}
</style>
