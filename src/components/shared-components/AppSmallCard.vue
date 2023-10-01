<template>
  <!--  Add active class to app small card in order to show green borders in card-->
  <div class="app-small-card" @click="clickMe">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "AppSmallCard",
  components: {},
  props: {
    title: String,
    photo: String,
  },
  methods: {
    clickMe(event) {
      this.$emit("click", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/abstracts/variables";

.app-small-card {
  display: inline-block;
  border: 1px solid #e3e1e1;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 0.5rem;
  transition: 0.1s;
  cursor: pointer;
  p {
    font-weight: 500;
    font-size: 16px;
    color: #222;
    width: max-content;
  }

  &.active {
    border-color: transparent;
    background-color: $color-main;
    p {
      color: #fff;
    }
  }
}

.app-small-card:hover {
  border-color: transparent;
  background-color: $color-main;
  p {
    color: #fff;
  }
}
</style>
