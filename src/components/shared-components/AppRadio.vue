<template>
  <component
    :is="horizontal ? 'span' : 'div'"
    class="app-radio custom-radio "
    :class="{ 'd-inline-block mr-2': horizontal }"
  >
    <label
      :for="uuid"
      v-if="label"
      class="app-radio-wrap"
      :class="{ radio_button__white: white }"
    >
      <span class="app-radio-option">
        {{ label }}
      </span>
      <!--      :checked='value === radioValue'-->
      <input
        class="app-radio-input"
        :id="uuid"
        type="radio"
        :checked="checkedOption"
        :value="radioValue"
        v-bind="$attrs"
        @change="$emit('change', $event)"
      />
      <span class="app-radio-title" v-html="string"></span>
      <img v-if="imgPath" class="app-radio-img" :src="imgPath" :alt="imgPath" />
    </label>
  </component>
</template>
<script>
import uniqueId from "../../utils/uniqueId";

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
      uuid: uniqueId().getId(),
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
  border: 1px solid $border-color;
  border-radius: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &-wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    cursor: pointer !important;
  }

  &-option {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: $color-text;
    padding: 15px 20px;
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
      border: 2px solid $color-secondary;
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
      background: linear-gradient(278.92deg, #00d06c -7.77%, #a6ffdf 158.52%);
      display: inline-block;
      visibility: visible;
      border: 2px solid white;
    }
  }

  &-title {
    font-weight: 700;
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
