<template>
  <component
    :is="horizontal ? 'span' : 'div'"
    class="app-radio custom-radio"
    :class="checkedOption ? 'active' : ''"
  >
    <label v-if="label" class="app-radio-wrap">
      <input
        class="app-radio-input"
        type="radio"
        :checked="checkedOption"
        :value="radioValue"
        v-bind="$attrs"
        @change="$emit('change', $event)"
      />
      <span class="app-radio-option"> {{ label + "." }}</span>
      <span class="app-radio-title" v-html="string"></span>
    </label>
  </component>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number, Boolean],
      default: "",
    },

    horizontal: {
      type: Boolean,
      default: false,
    },

    white: {
      type: Boolean,
      default: false,
    },

    radioValue: {
      type: [String, Number, Boolean],
      required: true,
    },

    label: {
      type: String,
      default: "",
    },

    string: {
      type: String,
      default: "",
    },

    imgPath: {
      type: String,
      default: "",
    },
    classes: {
      type: String,
      default: "",
    },
    checkedProp: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkedOption: false,
    };
  },
  mounted() {
    //this.setMathPlugin();
    this.checkedOption = this.checkedProp;
  },
  updated() {
    //this.setMathPlugin();
  },
  watch: {
    checkedProp() {
      this.checkedOption = this.checkedProp;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/abstracts/variables";

.app-radio {
  $self: &;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: rgb(245 247 249);
  padding: 0.75rem 1rem;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:last-child {
    margin-bottom: 0;
  }

  &-wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    cursor: pointer !important;
    padding: 0 10px;
    &.active {
    }
  }
  &-option {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #4f4f4f;
    margin-right: 0.5rem;
  }

  &-input {
    margin-right: 20px;
    position: relative;
    display: none;
  }

  &-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
  }

  &-img {
    max-width: 200px;
    width: 100%;
    max-height: 100px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
  &:hover {
    background-color: rgba(2, 64, 51, 0.3);
    #{$self}-option {
    }
  }
  &.active {
    background-color: #024033;
    color: #fff;
    z-index: 99;
    #{$self}-option {
      color: #fff;
    }
  }
}
</style>
