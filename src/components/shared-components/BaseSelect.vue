<template>
  <ValidationProvider tag="div"
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
          <select ref="input" :disabled="disabled"
                  :value="value"
                  @input="inputValue"
                  @change="changeValue"
                  v-bind="$attrs"
                  :type="type"
                  :maxlength="maxlength"
                  :placeholder="placeholder"
                  class="input__block-input"
          >
<!--            <option value="">{{ placeholder }}</option>-->
            <option :value="item.id" v-for="(item, index) in selectOptions" :key="index">{{ item.name }}</option>
          </select>
          <div class="input__details" v-if="!hideDetails">
            <span v-if="errors[0]" id="error">{{ errors[0] }}</span>
          </div>
        </div>
      </label>
    </div>

  </ValidationProvider>

</template>
<script>
import {ValidationProvider} from 'vee-validate';
import "../../assets/styles/components/base-input.scss"

export default {
  name: 'BaseSelect',
  components: {ValidationProvider},
  props: {
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
    placeholder: {
      type: String,
    },
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
    optionsProp: {
      type: Array,
      default: () => [
        {
          name: 'Something',
          id: 0
        }
      ]
    }
  },
  data() {
    return {
      selectOptions: []
    }
  },
  computed: {},
  methods: {
    inputValue(event) {
      this.$emit('input', event.target.value)
    },
    changeValue(event) {
      this.$emit('change', event.target.value)
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
    }
  },
  mounted() {
    this.selectOptions = this.optionsProp;
    if (this.autofocus) {
      this.focus()
    }
  },
  watch: {
    optionsProp() {
      this.selectOptions = [];
      this.selectOptions = this.optionsProp;
    }
  }
}
</script>
