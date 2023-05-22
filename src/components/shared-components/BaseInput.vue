<template>
  <ValidationProvider tag="div"
                      ref="validationInput"
                      class="input__holder"
                      :rules="rules"
                      :name="label ? label : placeholder"
                      :vid="vid"
                      v-slot="{ errors }"
                      :hideDetails="hideDetails"
  >
    <div class="input__block" :class="disabled ? 'disabled' : '' ">
      <label class="input__block-label">

        <span v-if="label" class="input__block-title">{{ label }}</span>

        <div class="input__block-wrap" :class="errors[0] ? 'error' : '' ">
          <div class="input__block-prepend">
            <slot name="prepend"></slot>
          </div>
          <div class="input__block-append">
            <slot name="append"></slot>
          </div>

          <div class="input__block-append hide-password" @click="showPassword">
            <slot name="hidePassword"></slot>
          </div>

          <input ref="input" :disabled="disabled"
                 :value="value"
                 @input="inputValue"
                 @keypress="keyPressValue"
                 @keyup.enter="enterKey"
                 v-bind="$attrs"
                 :type="type"
                 :maxlength="maxlength"
                 :placeholder="placeholder"
                 class="input__block-input"
          >

        </div>
        <div class="input__details" v-if="!hideDetails">
          <span v-if="errors[0]" id="error"> {{ errors[0] }}</span>
        </div>

      </label>
    </div>

  </ValidationProvider>

</template>
<script>
import {ValidationProvider} from 'vee-validate';
import "../../assets/styles/components/base-input.scss"

export default {
  name: 'BaseInput',
  components: {ValidationProvider},
  props: {
    masked: {
      default: false,
    },
    value: {
      default: ''
    },
    label: {
      type: String
    },
    type: {},
    hideDetails: {
      type: Boolean
    },
    placeholder: {},
    rules: {},
    vid: {},
    maxlength: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    autofocus: Boolean,
  },
  methods: {
    inputValue(event) {
      this.$emit('input', event.target.value)
    },
    keyPressValue(event) {
      this.$emit('keypress', event)
    },
    enterKey(event){
      this.$emit('keyup', event);
    },
    focus() {
      this.$refs.input.focus();
    },
    showPassword() {
      if (this.type === 'password') {
        this.type = 'text'
        this.btnText = 'Hide Password'
      } else {
        this.type = 'password'
        this.btnText = 'Show Password'
      }
    },
  },
  mounted() {
    if (this.autofocus) {
      this.focus()
    }
  },
}
</script>
