<template>
  <li class="accordion__item" v-on="listeners">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <div class="accordion__header">
        <div class="d-flex align-center">
          <div class="accordion__expand-icon" :class="{ active: visible }">
            <span class="accordion-arrow">
              <svg
                viewBox="64 64 896 896"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <path
                  d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                ></path>
              </svg>
            </span>
          </div>
          <p class="accordion__title">{{ name }}</p>
        </div>
        <p class="accordion__extra">{{ moduleIndex }}-modul</p>
      </div>
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
    name: {
      type: String,
      default: "Kirish",
    },
    moduleIndex: Number,
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
.accordion {
  &__item {
    border-bottom: 1px solid #d9d9d9;
  }
  &__trigger {
    cursor: pointer;
    position: relative;
    transition: all 0.3s, visibility 0s;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 24px 16px;
    color: rgba(0, 0, 0, 0.88);
  }
  &__title {
    color: rgba(0, 0, 0, 0.88);
    font-size: 24px;
    line-height: normal;
    font-weight: 500;
  }
  &__extra {
    padding: 0.2em 0.4em;
    font-size: 0.9em;
    background: #fef9e6;
    color: #daab00;
    border: 1px solid rgba(5, 5, 5, 0.06);
    border-radius: 3px;
  }
  &__expand-icon {
    padding-inline-end: 12px;
    &.active {
      .accordion-arrow {
        svg {
          transition: transform 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
          transform: rotate(90deg);
        }
      }
    }
    .accordion-arrow {
      font-size: 16px;
      svg {
        transition: transform 0.3s;
        transform: rotate(0deg);
      }
    }
  }
  &__content {
    color: rgba(0, 0, 0, 0.88);
    background-color: #ffffff;
    border-top: 1px solid #d9d9d9;
    ul {
      li {
        padding: 16px 16px;
      }
    }
  }
}

.accordion .accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.25s cubic-bezier(0.55, 0, 0.55, 0.2),
    opacity 0.25s cubic-bezier(0.55, 0, 0.55, 0.2);
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 1;
}
</style>
