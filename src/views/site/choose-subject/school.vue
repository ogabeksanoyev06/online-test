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
            :active="selectedSubject.science.id === item.id"
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
              label="Sinfni tanlang"
              :options-prop="classes"
              hideDetails
              :append="true"
              :selectType="'classes'"
              v-model="selectedClassValue"
              @itemSelected="selectedClassesValue"
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
              :options-prop="questionLevelList"
              v-model="questionSelectedValue"
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
          </div>
          <AppButton
            theme="light-green"
            sides="20"
            :disabled="!selectedSubject.selected"
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
import test from "../../../constants/test";
import { mapMutations } from "vuex";

export default {
  name: "choose-subject-school",
  components: {
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
      selectedSubject: {
        selected: false,
        science: {
          name: null,
        },
      },
      questionLevelList: [
        {
          id: "beginner",
          name: "Oson",
        },
        // {
        //   id: "medium",
        //   name: "O'rta",
        // },
        // {
        //   id: "advanced",
        //   name: "Qiyin",
        // },
      ],
      questionSelectedLevel: "beginner",
      questionSelectedValue: "Oson",
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
        // {
        //   id: 20,
        //   name: 20,
        // },
        // {
        //   id: 25,
        //   name: 25,
        // },
        // {
        //   id: 30,
        //   name: 30,
        // },
      ],
      classes: [],
      selectedClass: null,
      selectedClassValue: "",
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
    testClassesList() {
      try {
        this.$http.get(`tests/classes`).then((res) => {
          if (!res.error) {
            this.classes = res;
            if (this.classes.length > 0) {
              this.selectedClass = this.classes[0].id;
              this.selectedClassValue = this.classes[0].number;
            }
          }
        });
      } catch (e) {
        //
      }
    },
    selectScience(science) {
      this.selectedSubject.selected = true;
      this.selectedSubject.science = science;
    },
    selectedLevelValue(item) {
      this.questionSelectedLevel = item.id;
      this.questionSelectedValue = item.name;
    },
    selectedClassesValue(item) {
      this.selectedClass = item.id;
      this.selectedClassValue = item.number;
    },
    getQuestionBySelectedParameters() {
      let paramtersModel = {};
      paramtersModel.science_id = this.selectedSubject.science.id;
      paramtersModel.class_id = this.selectedClass;
      paramtersModel.test_count = this.questionsCount;
      paramtersModel.test_score = this.questionSelectedLevel;
      try {
        this.$http
          .post(`tests/school-tests/start/`, paramtersModel)
          .then((res) => {
            if (res) {
              this.setTestType(test.TYPE_SCHOOL);
              this.setTestTypeToStorage(test.TYPE_SCHOOL);
              const testDetails = {
                test_type: test.TYPE_SCHOOL,
                started_time: this.$moment(
                  res.interval_time.started_time
                ).format("YYYY-MM-DD HH:mm:ss"),
                test_id: res.interval_time.id,
              };
              this.storeTestDetailsToStorage(testDetails);
              let rawQuestions = [];
              rawQuestions.push(res);
              localStorage.setItem("questions", JSON.stringify(res));
              localStorage.setItem(
                "science_id",
                this.selectedSubject.science.id
              );
              localStorage.setItem("class_id", this.selectedClass);
              this.$router.push({ name: "test" });
            } else {
              this.errorNotification(res.error.message);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
  watch: {
    questionsCount() {
      this.questionTotalTime = this.questionTime * this.questionsCount;
    },
  },
  mounted() {},
  created() {
    this.getScience();
    this.testClassesList();
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
