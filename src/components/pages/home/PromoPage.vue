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
        <div class="list-item" v-for="(item, i) in testTypeList" :key="i">
          <app-text size="16" line-height="24" weight="600" class="text-center">
            {{ item.title }}
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
  data() {
    return {
      testTypeList: [
        {
          title: "Online test",
          img: "",
        },
        {
          title: "Blog test",
          img: "",
        },
        {
          title: "Maktab o'quvchilari uchun test",
          img: "",
        },
        {
          title: "PISA test",
          img: "",
        },
        {
          title: "PIRLS test",
          img: "",
        },
        {
          title: "TIMSS test",
          img: "",
        },
      ],
    };
  },
  methods: {
    getTestTypes() {
      this.$http.get("tests/test-types/").then((res) => {
        this.testTypeList = res;
      });
    },
  },
  created() {
    this.getTestTypes();
  },
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
  padding: 10px;
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
