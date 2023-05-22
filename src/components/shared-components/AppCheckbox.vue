<template>
  <label class="app-checkbox">
    <base-radio class="app-checkbox__input" :value="value" :val="val" :tabindex="tabindex" v-on="listeners" v-bind="$attrs" tag="div"/>
    <app-text :class="{'color-trans-04': !selected}" size="20" line-height="27" weight="500">
      <slot/>
    </app-text>
  </label>
</template>
<script>
  import BaseRadio from './BaseRadio';
  export default {
    name: 'AppCheckbox',
    components: { BaseRadio },
    props: {
      value: {
        type: [String, Boolean, Number],
        default: ''
      },
      val: {
        type: String,
        default: ''
      },
      tabindex: {
        type: String,
      }
    },
    data() {
      return {
        listeners: {
          input: $event => this.$emit('input', $event)
        }
      }
    },
    computed: {
      selected() {
        return this.value === this.val;
      },
    }
  };
</script>
<style lang="scss">
  .app-checkbox {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    &:before {
      display: block;
      content: '';
      position: absolute;
      top: -6px;
      right: -6px;
      bottom: -6px;
      left: -6px;
    }
    &__input {
      margin-right: 12px;
    }
  }
</style>
