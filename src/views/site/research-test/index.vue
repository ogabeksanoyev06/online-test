<template>
  <div style="background-color: rgb(242 242 242)">
    <loader v-if="loading" />
    <div class="container">
      <section class="py-40">
        <div class="section__top" :class="isMobile ? 'mb-10' : 'mb-20'">
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mb-10"
          >
            {{ researchData?.title }} testlariga tayyorlanish uchun kategoriyani
            tanlang
          </app-text>
        </div>
        <div class="bg-white radius" :class="isMobileSmall ? 'pa-10' : 'pa-20'">
          <block-wrap
            :count="isMobileSmall ? 1 : isMobile ? 2 : 3"
            offset-x="24"
            offset-y="24"
            class="pTest"
          >
            <div
              class="pTest-item"
              v-for="(item, i) in researchData?.specifications"
              :key="i"
              :class="item.id === specification_id ? 'active' : ''"
              @click="selectedSpecId(item.id)"
            >
              <p>{{ item.name }}</p>
              <span> Umumiy vaqt: {{ questionTotalTime }} daqiqa </span>
            </div>
          </block-wrap>
        </div>
        <div
          class="bg-white radius w-100 mt-20"
          :class="isMobileSmall ? 'pa-10' : 'pa-20'"
        >
          <div class="test__details mb-20">
            <base-select
              v-model="questionsCount"
              label="Savollar sonini"
              placeholder="Savollar sonini tanlang"
              :options-prop="questionsCountSelect"
              @itemSelected="selectedCountValue"
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
            </base-select>
          </div>
          <AppButton
            theme="green"
            sides="20"
            :disabled="!specification_id"
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
import AppButton from "@/components/shared-components/AppButton.vue";
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import test from "../../../constants/test";
import Loader from "@/components/shared-components/Loader.vue";
import { mapMutations } from "vuex";
export default {
  name: "Pirls-test",
  components: { AppButton, BlockWrap, BaseSelect, Loader },
  data() {
    return {
      researchId: null,
      researchData: null,
      specification_id: null,
      questionsCount: 5,
      questionTime: 1,
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
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["setTestType"]),
    getResearchId() {
      this.loading = true;
      this.$http
        .get(`tests/researches/${this.researchId}`)
        .then((res) => {
          this.researchData = res;
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    selectedCountValue(item) {
      this.questionsCount = item.id;
    },
    selectedSpecId(specification_id) {
      this.specification_id = specification_id;
    },
    getQuestionBySelectedParameters() {
      let paramtersModel = {};
      paramtersModel.specification_id = this.specification_id;
      paramtersModel.question_count = this.questionsCount;
      localStorage.setItem("specification_id", this.specification_id);
      this.$http
        .post(`tests/researches/${this.researchId}/StartTest/`, paramtersModel)
        .then((res) => {
          if (res) {
            this.setTestType(test.TYPE_RESEARCH);
            this.setTestTypeToStorage(test.TYPE_RESEARCH);
            localStorage.setItem("questions", JSON.stringify(res));
            this.$router.push({ name: "test" });
          } else {
            //
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getResearchId();
  },
  watch: {
    questionsCount() {
      this.questionTotalTime = this.questionTime * this.questionsCount;
    },
  },
  created() {
    this.researchId = this.$route.params.research_id;
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
}
.pTest {
  &-item {
    $self: &;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    max-width: 320px !important;
    min-height: 100px;
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    transition: all 0.5s;
    background-color: #daab00;
    &.active {
      background-color: #0066ff;
    }

    p {
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 10px;
    }
    span {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>
