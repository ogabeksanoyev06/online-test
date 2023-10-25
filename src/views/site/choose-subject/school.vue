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
        <div class="bg-white radius" :class="isMobileSmall ? 'pa-10' : 'pa-20'">
          <AppSmallCard
            v-for="(item, idx) in science"
            :key="idx"
            :title="item.name"
            style="cursor: pointer"
            :active="selectedScience.science.id === item.id"
            @click="selectScience(item)"
          />
        </div>
        <div
          class="bg-white radius w-100 mt-20"
          :class="isMobileSmall ? 'pa-10' : 'pa-20'"
        >
          <div class="test__details mb-20">
            <BaseSelect
              v-model="questionsCount"
              label="Savollar soni"
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
                </svg>
              </template>
            </BaseSelect>
            <BaseSelect
              v-model="selectedClass"
              label="Sinfni tanlang"
              :options-prop="classes"
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
            <BaseSelect
              label="Darajani tanlang"
              :options-prop="levelList"
              v-model="questionSelectedLevel"
              @itemSelected="selectedLevelValue"
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
          <AppButton
            theme="light-green"
            sides="20"
            @click="getQuestionBySelectedParameters"
          >
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
import BaseInput from "../../../components/shared-components/BaseInput";
import test from "../../../constants/test";
import { mapMutations } from "vuex";

export default {
  name: "choose-subject-school",
  components: {
    BaseInput,
    AppButton,
    BaseSelect,
    AppSmallCard,
    AppText,
  },
  data() {
    return {
      science: [
        {
          name: "Maths",
          photo: "/icons/sciences.svg",
        },
      ],
      selectedScience: {
        selected: false,
        science: {
          name: null,
        },
      },
      questionLevelList: [],
      questionSelectedLevel: "beginner",
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
      questionTime: 1,
      classes: [
        {
          id: 5,
          name: 5,
        },
        {
          id: 6,
          name: 6,
        },
        {
          id: 7,
          name: 7,
        },
        {
          id: 8,
          name: 8,
        },
        {
          id: 9,
          name: 9,
        },
        {
          id: 10,
          name: 10,
        },
        {
          id: 11,
          name: 11,
        },
      ],
      selectedClass: 5,
      levelList: [
        {
          id: "beginner",
          name: "Oson",
        },
        {
          id: "medium",
          name: "O'rta",
        },
        {
          id: "advanced",
          name: "Qiyin",
        },
      ],
    };
  },

  methods: {
    ...mapMutations(["setTestType"]),
    getScience() {
      try {
        this.$http
          .get(`tests/sciences/`)
          .then((res) => {
            if (res) {
              this.science = res;
              this.science.forEach((s) => {
                s.photo = "/icons/sciences.svg";
              });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
    selectScience(science) {
      this.selectedScience.selected = true;
      this.selectedScience.science = science;
    },
    selectedLevelValue(item) {
      this.questionSelectedLevel = item.id;
    },

    getQuestionBySelectedParameters() {
      let paramtersModel = {};
      paramtersModel.science_id = this.selectedScience.science.id;
      paramtersModel.class_id = this.selectedClass;
      paramtersModel.test_count = this.questionsCount;
      paramtersModel.test_score = this.questionSelectedLevel;
      paramtersModel.started_time = new Date();
      this.storeTestTimeToStorage(this.questionTotalTime);
      try {
        this.$http
          .post(`tests/school-tests/start/`, paramtersModel)
          .then((res) => {
            if (!res.error) {
              this.setTestType(test.TYPE_SCHOOL);
              this.setTestTypeToStorage(test.TYPE_SCHOOL);
              let rawQuestions = [];
              rawQuestions.push(res.result);
              localStorage.setItem("questions", JSON.stringify(rawQuestions));
              this.$router.push("test");
            } else {
              this.errorNotification(res.error.message);
            }
          })
          .catch((e) => {
            this.errorNotification(e.response.data.error);
          });
      } catch (e) {
        this.errorNotification(e.response.data.error);
      }
    },
  },
  watch: {
    questionsCount() {
      this.questionTotalTime = this.questionTime * this.questionsCount;
    },
  },
  created() {
    this.removeTestAttributesFromStorage();
    this.getScience();
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
