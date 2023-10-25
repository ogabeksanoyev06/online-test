<template>
  <div class="modal" :class="{ visible: !hidden }">
    <div class="modal__wrap" :class="{ visible: !hidden }">
      <slot name="body" />
    </div>
    <div class="overlay" :class="{ visible: !hidden }" @click="close"></div>
  </div>
</template>
<script>
import "../../assets/styles/components/app-modal.scss";

export default {
  name: "AppModal",
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hidden: true,
    };
  },
  methods: {
    close() {
      this.hidden = true;
      this.$emit("close");
    },
  },
  watch: {
    value(newVal) {
      this.hidden = newVal;
    },
  },
};
</script>

<style scoped></style>
