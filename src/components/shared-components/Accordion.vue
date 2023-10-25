<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "AppAccordion",
  props: {
    activeProp: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    };
  },
  created() {
    this.Accordion.active = this.activeProp;
  },
  provide() {
    return { Accordion: this.Accordion };
  },
  watch: {
    activeProp() {
      this.Accordion.active = this.activeProp;
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  overflow: hidden;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
