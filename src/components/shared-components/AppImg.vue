<template>
  <img v-bind="$attrs" />
</template>

<script>
  export default {
    name: "AppImg"
  }
</script>

<style scoped>

  img {
    width: 100%;
    object-fit: contain;
  }

</style>
