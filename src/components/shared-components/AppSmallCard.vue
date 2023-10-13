<template>
  <!--  Add active class to app small card in order to show green borders in card-->
  <div class="app-small-card" @click="clickMe" :class="active ? 'active' : ''">
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
    active: Boolean,
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
  &.active {
    background-color: #e9fcf6;
    color: #119c75;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    color: #222;
    width: max-content;
  }

  &.active {
    border-color: #119c75;
    p {
      color: #119c75;
    }
  }
}

.app-small-card:hover {
  border-color: #119c75;
  background-color: #e9fcf6;
  p {
    color: #119c75;
  }
}
</style>
