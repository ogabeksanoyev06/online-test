<template>
  <div class="my-60">
    <div class="container">
      <div class="cta__banner" :class="{ 'order-reversed': orderingFlex }">
        <div class="cta__banner-content" :class="isMobile ? 'py-20' : 'py-30'">
          <app-text
            :size="isMobile ? '16' : '20'"
            :line-height="isMobile ? '24' : '28'"
            :weight="500"
            class="color-green text-uppercase mb-15"
          >
            {{ name }}
          </app-text>
          <app-text
            :size="isMobile ? '22' : '32'"
            :line-height="isMobile ? '30' : '40'"
            :weight="600"
            class="mb-20"
          >
            {{ title }}
          </app-text>
          <app-text
            v-if="textIsActive"
            :size="isMobile ? '14' : '16'"
            :line-height="isMobile ? '22' : '24'"
            class="mb-15"
          >
            {{ text }}
          </app-text>
          <ul class="list" v-if="listIsActive">
            <li class="list-item"></li>
          </ul>
        </div>
        <div
          class="cta__banner-photo"
          :style="orderingFlex ? 'margin-right:auto;margin-left:inherit' : ''"
        >
          <img src="https://boshqar.com/img/mahsulotlar.294d37f6.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtaBanner",
  components: {},
  props: {
    name: String,
    title: String,
    text: String,
    list: String,
    photo: String,
    listIsActive: {
      type: Boolean,
      default: false,
    },
    textIsActive: {
      type: Boolean,
      default: false,
    },
    orderingFlex: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.cta__banner {
  display: flex;
  align-items: center;
  &-content,
  &-photo {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 50%;
    width: 100%;
  }
  &-photo {
    justify-content: center;
    overflow: hidden;
    max-width: 40%;
    margin-left: auto;

    img {
      max-width: 100%;
      border-radius: 20px;
    }
  }
  &.order-reversed {
    flex-direction: row-reverse;
  }
}

@media (max-width: 768px) {
  .cta__banner {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    &-content,
    &-photo {
      flex: none;
      display: flex;
      flex-direction: column;
      max-width: unset;
      width: 100%;
    }
    &-photo {
      justify-content: center;
      overflow: hidden;
      max-width: unset;
      img {
        max-width: 100%;
        border-radius: 0px;
      }
    }
    &.order-reversed {
      flex-direction: column-reverse !important;
    }
  }
}

@media (max-width: 650px) {
}
</style>
