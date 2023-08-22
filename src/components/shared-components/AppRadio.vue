<template>
  <component :is="horizontal ? 'span' : 'div'" class="app-radio custom-radio">
    <label
      v-if="label"
      class="app-radio-wrap"
      :class="checkedOption ? 'active' : ''"
    >
      <input
        class="app-radio-input"
        type="radio"
        :checked="checkedOption"
        :value="radioValue"
        v-bind="$attrs"
        @change="$emit('change', $event)"
      />
      <span class="app-radio-option"> {{ label + ")" }} </span>
      <!--:checked='value === radioValue'-->

      <span class="app-radio-title" v-html="string"></span>
      <!-- <img v-if="imgPath" class="app-radio-img" :src="imgPath" :alt="imgPath" /> -->
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
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid $border-color;

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
    font-size: 16px;
    line-height: 26px;
    color: #4f4f4f;
  }

  &-input {
    margin-right: 20px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 17px;
      height: 17px;
      z-index: 1;
      display: inline-block;
      visibility: visible;
      border-radius: 50%;
      background-color: white;
      border: 2px solid $border-color;
    }

    &:checked::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 17px;
      height: 17px;
      z-index: 1;
      display: inline-block;
      visibility: visible;
      border-radius: 50%;
      border: 2px solid #3165cb;
    }

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 15px;
      height: 15px;
      border-radius: 15px;
      background: #3165cb;
      display: inline-block;
      visibility: visible;
      border: 3px solid white;
    }
  }

  &-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    padding: 15px 20px 15px 10px;
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
}
</style>
