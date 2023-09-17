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
      <div class="input__block-label">
        <span v-if="label" class="input__block-title">{{ label }}</span>
        <div class="input__block-wrap">
          <div class="input__block-prepend" v-if="prepend">
            <slot name="prepend"></slot>
          </div>
          <div class="input__block-append" v-if="append">
            <slot name="append"></slot>
          </div>
          <input
            ref="input"
            :disabled="disabled"
            :value="value"
            @input="inputValue"
            @keypress="keyPressValue"
            @keyup.enter="enterKey"
            v-bind="$attrs"
            :type="type"
            :maxlength="maxlength"
            :placeholder="placeholder"
            class="input__block-input"
            autocomplete="off"
            :class="[
              errors[0] ? 'error' : isValid && value !== null ? 'valid' : '',
              append ? 'append' : '',
              prepend ? 'prepend' : '',
            ]"
          />
        </div>
        <div class="input__details" v-if="!hideDetails">
          <span v-if="errors[0]" id="error"> {{ errors[0] }}</span>
        </div>
      </div>
    </div>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider, extend } from "vee-validate";
import { required, min, confirmed, email } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "{_field_}ni kiritish majburiy",
});
extend("min", {
  ...min,
  message: "Belgilar soni kamida 9 ta bo'lishi kerak",
});
extend("email", {
  ...email,
  message: "Email formatda kiriting",
});
extend("confirmed", {
  ...confirmed,
  message: "Parollar mos tushmayapti",
});
import "../../assets/styles/components/base-input.scss";

export default {
  name: "BaseInput",
  components: { ValidationProvider },
  data() {
    return {
      isValid: false,
    };
  },
  props: {
    masked: {
      default: false,
    },
    value: {
      default: "",
    },
    label: {
      type: String,
    },
    type: {},
    hideDetails: {
      type: Boolean,
    },
    placeholder: {},
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
    prepend: Boolean,
    autofocus: Boolean,
  },
  methods: {
    inputValue(event) {
      this.$emit("input", event.target.value);
    },
    keyPressValue(event) {
      this.$emit("keypress", event);
    },
    enterKey(event) {
      this.$emit("keyup", event);
    },
    focus() {
      this.$refs.input.focus();
    },
  },
  watch: {
    value() {
      if (!this.$refs.validationInput.errors[0]) {
        this.isValid = true;
      }
    },
  },
  mounted() {
    if (this.autofocus) {
      this.focus();
    }
  },
};
</script>
