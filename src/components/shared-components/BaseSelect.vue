<template>
  <ValidationProvider
    tag="div"
    ref="validationInput"
    class="input__holder"
    :rules="rules"
    :name="label ? label : placeholder"
    :vid="vid"
    v-slot="{ errors }"
    :hideDetails="hideDetails"
  >
    <div class="input__block" :class="disabled ? 'disabled' : ''">
      <label class="input__block-label">
        <span v-if="label" class="input__block-title">{{ label }}</span>
        <div
          class="input__block-wrap"
          :class="errors[0] ? 'error' : ''"
          @click.prevent="dropdownVisible = !dropdownVisible"
          v-on-click-outside:excludedClass="hideSelectDropdown"
        >
          <div
            class="input__block-append"
            :class="{ active: dropdownVisible }"
            v-if="append"
          >
            <slot name="append"></slot>
          </div>
          <input
            style="cursor: pointer !important"
            ref="input"
            readonly="readonly"
            :disabled="disabled"
            :value="value"
            @input="inputValue"
            v-bind="$attrs"
            :type="type"
            :maxlength="maxlength"
            :placeholder="placeholder"
            class="input__block-input"
            :class="append ? 'append' : ''"
          />
          <transition name="slide">
            <div class="dropdown" v-if="dropdownVisible">
              <div class="dropdown-wrap">
                <div
                  v-for="item in selectOptions"
                  :key="item.id"
                  @click="selectItem(item)"
                  class="dropdown-item"
                  :class="
                    item.name === value || item.number === value ? 'active' : ''
                  "
                >
                  {{ selectType === "classes" ? item.number : item.name }}
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div class="input__details" v-if="!hideDetails">
          <span v-if="errors[0]" id="error">{{ errors[0] }}</span>
        </div>
      </label>
    </div>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import "../../assets/styles/components/base-input.scss";
extend("required", {
  ...required,
  message: "{_field_}ni kiritish majburiy",
});
export default {
  name: "BaseSelect",
  components: { ValidationProvider },
  props: {
    value: {
      default: "",
    },
    label: {
      type: String,
    },
    type: {},
    selectType: {
      type: String,
    },
    hideDetails: {
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
    rules: {},
    vid: {},
    maxlength: {
      default: null,
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    append: Boolean,
    autofocus: Boolean,
    optionsProp: {
      type: Array,
      default: () => [
        {
          name: "Something",
          id: 0,
        },
      ],
    },
  },
  data() {
    return {
      selectOptions: [],
      dropdownVisible: false,
    };
  },
  computed: {},
  methods: {
    inputValue(event) {
      this.$emit("input", event.target.value);
    },

    focus() {
      this.$refs.input.focus();
    },
    hideSelectDropdown() {
      this.dropdownVisible = false;
    },
    selectItem(item) {
      this.$emit("input", item.name);
      this.$emit("change", item.name);
      this.$emit("itemSelected", item);
    },
  },
  mounted() {
    this.selectOptions = this.optionsProp;
    if (this.autofocus) {
      this.focus();
    }
  },
  watch: {
    optionsProp() {
      this.selectOptions = [];
      this.selectOptions = this.optionsProp;
    },
  },
};
</script>
<style scoped lang="scss">
.dropdown {
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  z-index: 99999;

  &-wrap {
    width: 100%;
    padding: 4px 0;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 2px;
    outline: none;
    box-shadow: 0 2px 8px #00000026;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    max-height: 300px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.dropdown-item {
  padding: 0 32px 0 20px;
  color: #606266;
  font-weight: 400;
  font-size: 14px;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #f5f7fa;
  }
  &.active {
    background-color: #f5f7fa;
  }
}
.input__block-append.active {
  transform: translateY(-50%) rotate(180deg);
}
.slide-enter-active,
.slide-leave-active {
  animation-duration: 0.2s;
}

.slide-enter,
.slide-enter-active {
  animation-name: antSlideUpIn;
}

.slide-leave,
.slide-leave-active {
  animation-name: antSlideUpOut;
}

@keyframes antSlideUpIn {
  0% {
    opacity: 0;
    transform-origin: 0 0;
    transform: scaleY(0.8);
  }
  100% {
    opacity: 1;
    transform-origin: 0 0;
    transform: scaleY(1);
  }
}

@keyframes antSlideUpOut {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0 0;
    transform: scaleY(0.8);
  }
}
</style>
