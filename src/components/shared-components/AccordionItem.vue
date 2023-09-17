<template>
  <li class="accordion__item" v-on="listeners">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content" v-show="visible">
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    clicked: Boolean,
  },
  inject: ["Accordion"],
  data() {
    return {
      index: null,
      type: {
        id: 0,
        test: "test",
        name: "sasasa",
      },
    };
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active;
    },
    listeners() {
      if (this.disabled) return {};

      return {
        click: (event) => this.$emit("click", event),
      };
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style lang="scss" scoped>
.accordion__item {
  padding: 20px 25px;
  border-radius: 4px;
  background-color: #fff;
  color: #212529;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid #eaeaeb !important;
  &:nth-child(2n) {
    margin: 0 0 15px;
  }
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
