<!--todo: доделать фокус-->
<template>
  <block-wrap width-auto offset-x="12" mod-style="align-center" :tag="tag">
    <app-input :value="value" :autofocus="autofocus" tag="div" width="60" :tabindex="tabindex" :options="options" v-bind="$attrs" v-on="listeners"/>
    <span :class="{'color-trans-04': !focused}"><slot/></span>
  </block-wrap>
</template>
<script>
  import BlockWrap from './BlockWrap';
  import AppInput from './AppInput';
  export default {
    name: 'InputWrap',
    components: { AppInput, BlockWrap },
    props: {
      value: {
        type: [String, Number]
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      tag: {
        type: String,
        default: 'label'
      },
      tabindex: {
        type: String,
      },
      options: {
        type: Object
      }
    },
    data() {
      return {
        focused: false
      }
    },
    computed: {
      listeners() {
        return {
          input: $event => this.$emit('input', $event),
          focused: this.onFocus,
          blur: this.onBlur
        };
      }
    },
    methods: {
      onFocus() {
        this.focused = true;
      },
      onBlur() {
        this.focused = false;
      }
    }
  };
</script>
