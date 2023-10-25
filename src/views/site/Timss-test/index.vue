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
            TIMSS testlariga tayyorlanish uchun kategoriyani tanlang
          </app-text>
        </div>
        <div class="bg-white radius" :class="isMobileSmall ? 'pa-10' : 'pa-20'">
          <block-wrap
            :count="isMobileSmall ? 1 : isMobile ? 2 : 3"
            offset-x="24"
            offset-y="24"
            class="pTest"
          >
            <div class="pTest-item">
              <p>Tabiiy fanlar (4 - sinf)</p>
              <span> Umumiy vaqt: 40 daqiqa </span>
            </div>
            <div class="pTest-item">
              <p>Matematik (4 - sinf)</p>
              <span> Umumiy vaqt: 40 daqiqa </span>
            </div>
          </block-wrap>
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
          <AppButton theme="light-green" sides="20" disabled>
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
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
export default {
  name: "Timss-test",
  components: { BaseInput, AppButton, BlockWrap },
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
      background-color: #0067fb;
      p,
      span {
        color: #fff;
      }
    }
    &:nth-child(2) {
      background-color: #daab00;
      p,
      span {
        color: #fff;
      }
    }
    &:nth-child(3) {
      background-color: #802fde;
      p,
      span {
        color: #fff;
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
      font-weight: 500;
      color: rgba(0, 0, 0, 0.88);
    }
  }
}
</style>
