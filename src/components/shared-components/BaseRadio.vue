<template>
  <component class="base-radio" :class="{'base-radio--selected': selected, 'base-radio--focused': focused}" :is="tag">
    <input v-model="model" :value="val" class="base-radio__input" type="radio" :tabindex="tabindex"
           @focus="focused = true" @blur="focused = false">
  </component>
</template>
<script>
  import '../../assets/styles/components/base-radio.scss';
  export default {
    name: 'BaseRadio',
    props: {
      tag: {
        type: String,
        default: 'label'
      },
      value: {
        type: String,
        default: ''
      },
      val: {
        type: String,
        default: ''
      },
      tabindex: String
    },
    data() {
      return {
        focused: false
      }
    },
    computed: {
      selected() {
        return this.value === this.val;
      },
      model: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    }
  }
</script>
