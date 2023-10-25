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
            Prezident maktabiga tayyorlanish uchun kategoriyani tanlang
          </app-text>
        </div>
        <div class="bg-white radius" :class="isMobileSmall ? 'pa-10' : 'pa-20'">
          <div class="pTest">
            <div class="pTest-item">
              <p>Matematika</p>
              <span>Matematika fanidan 30 ta topshiriqdan iborat test.</span>
            </div>
            <div class="pTest-item">
              <p>Tanqidiy fikrlash</p>
              <span>
                matematika fanidan tanqidiy fikrlash va muammoni yechish
                bo‘yicha 40 ta test
              </span>
            </div>
            <div class="pTest-item">
              <p>Ingliz tili</p>
              <span>
                ingliz tili fanidan grammatika (Grammar component) va matn bilan
                ishlash (Reading component) bo‘yicha 40 test
              </span>
            </div>
          </div>
        </div>
        <div
          class="bg-white radius w-100 mt-20"
          :class="isMobileSmall ? 'pa-10' : 'pa-20'"
        >
          <div class="test__details mb-20">
            <base-input
              v-model="questionTotalTime"
              hide-details=""
              label="Savollar soni"
              disabled
            >
            </base-input>
            <base-input
              v-model="questionTotalTime"
              hide-details=""
              label="Umumiy vaqt"
              disabled
            >
            </base-input>
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
import BaseInput from "@/components/shared-components/BaseInput.vue";
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "President-test",
  components: { BaseInput, AppButton },
  data() {
    return {
      questionsCount: 0,
      questionTotalTime: 0,
    };
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
.pTest {
  display: flex;
  gap: 20px;
  &-item {
    $self: &;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    border: 1px solid;
    min-height: 150px;
    max-width: 300px;
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    transition: all 0.5s;
    &.active {
      &:nth-child(1) {
        background-color: #0067fb;
        border-color: transparent;
        p,
        span {
          color: #fff;
        }
      }
      &:nth-child(2) {
        background-color: #daab00;
        border-color: transparent;
        p,
        span {
          color: #fff;
        }
      }
      &:nth-child(3) {
        background-color: #802fde;
        border-color: transparent;
        p,
        span {
          color: #fff;
        }
      }
    }
    &:hover {
      &:nth-child(1) {
        background-color: #0067fb;
        border-color: transparent;
        p,
        span {
          color: #fff;
        }
      }
      &:nth-child(2) {
        background-color: #daab00;
        border-color: transparent;
        p,
        span {
          color: #fff;
        }
      }
      &:nth-child(3) {
        background-color: #802fde;
        border-color: transparent;
        p,
        span {
          color: #fff;
        }
      }
    }

    &:nth-child(1) {
      background-color: #f2f7ff;
      border-color: #0067fb;
      p,
      span {
        color: #0067fb;
      }
    }
    &:nth-child(2) {
      background-color: #fef9e6;
      border-color: #daab00;
      p,
      span {
        color: #daab00;
      }
    }
    &:nth-child(3) {
      background-color: #f7f0fe;
      border-color: #802fde;
      p,
      span {
        color: #802fde;
      }
    }
    p {
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.88);
      margin-bottom: 10px;
    }
    span {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.88);
      margin-bottom: 10px;
    }
  }
}
</style>
