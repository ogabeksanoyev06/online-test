<template>
  <component class="checkbox" :class="[
      prefixedThemes,
      'checkbox--theme-' + theme,
     ]" :style="{'--size': size + 'px'}" :is="tag" @click="onClick">
    <input :type="type" :value="val" v-model="model" class="checkbox__input" @change="$emit('change')">
    <div class="checkbox__title">
      <div class="checkbox__text" v-if="title" v-html="title"></div>
    </div>
  </component>
</template>
<script>
import '../../assets/styles/components/checkbox.scss';

export default {
  name: "BaseCheckbox",
  props: {
    type: {
      type: String,
      default: "checkbox"
    },
    value: {
      type: [String, Boolean, Array, Number]
    },
    val: {
      type: [String, Number, Boolean]
    },
    title: {
      type: String
    },
    themes: {
      type: Array,
      default: () => []
    },
    theme: {
      type: String,
      default: 'default'
    },
    size: {
      type: [String, Number],
      default: 14
    },
    reset: {
      type: Boolean
    },
    comment: {
      type: String
    },
  },
  computed: {
    prefixedThemes() {
      if (this.themes) {
        return this.themes.map(item => 'checkbox--' + item);
      } else {
        return [];
      }
    },
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
    tag() {
      return this.reset && this.type === 'radio' ? 'div' : 'label';
    }
  },
  methods: {
    onClick() {
      if (!this.reset || this.type !== 'radio') {
        return
      }

      let value = this.val;
      if (this.reset && (this.value === this.val || (typeof this.value === 'object' && this.compare(this.value, value)))) {
        value = null;
      }
      this.$emit('click');
      this.model = value;
    }
  }
}
</script>
