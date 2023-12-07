<template>
  <div class="my-60">
    <div class="container">
      <app-text
        :size="isMobileMedium ? '24' : '40'"
        :line-height="isMobileMedium ? '32' : '48'"
        weight="600"
        class="text-center mb-20"
      >
        O'z bilimingizni Itestify bilan sinab ko'ring.
      </app-text>
      <app-text
        :size="isMobileMedium ? '14' : '16'"
        :line-height="isMobileMedium ? '22' : '24'"
        :max-width="'650'"
        weight="500"
        class="text-center mx-auto mb-40"
      >
        Itestify sizning bilim talablaringizga qarab moslasha oladi, bu xoh
        tabiiy fanlar bo'lsin, xoh aniq fanlar.
      </app-text>
      <block-wrap
        :count="isMobileSmall ? 1 : isMobileMedium ? 2 : isMobile ? 3 : 4"
        :offset-y="isMobileSmall ? 12 : 24"
        :offset-x="isMobileSmall ? 12 : 24"
        class="list"
      >
        <div class="list-item" v-for="(item, i) in 6" :key="i">
          <svg
            width="34"
            height="28"
            viewBox="0 0 34 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.955 10.3085H32.045C33.1234 10.3085 34 9.42262 34 8.33271C34 7.94077 33.8831 7.55957 33.6706 7.23743L29.6544 1.14897C29.1816 0.429521 28.39 0 27.5347 0H6.46531C5.61531 0 4.81844 0.429521 4.34563 1.14897L0.329375 7.23206C0.116875 7.55957 0 7.94077 0 8.32734C0 9.42262 0.876563 10.3085 1.955 10.3085ZM3.4 12.0266V20.617V24.9122C3.4 26.335 4.54219 27.4894 5.95 27.4894H17.85C19.2578 27.4894 20.4 26.335 20.4 24.9122V20.617V12.0266H17V20.617H6.8V12.0266H3.4ZM27.2 12.0266V25.7713C27.2 26.7216 27.9597 27.4894 28.9 27.4894C29.8403 27.4894 30.6 26.7216 30.6 25.7713V12.0266H27.2Z"
              fill="#A0A0A0"
            ></path>
          </svg>
          <app-text size="16" weight="500" class="ml-10">
            Online testlar
          </app-text>
        </div>
      </block-wrap>
      <div class="list"></div>
    </div>
  </div>
</template>

<script>
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
export default {
  components: { BlockWrap },
  name: "PromoPage",
};
</script>

<style lang="scss" scoped>
.list {
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease-out;
  height: 130px;
  svg {
    overflow: hidden;
  }
  path {
    transition: all 0.3s ease-out;
  }
  &:hover {
    border-color: #119c75;
    color: #119c75;

    transform: translateY(-10px);
    path {
      fill: #119c75 !important;
    }
  }
}
</style>
