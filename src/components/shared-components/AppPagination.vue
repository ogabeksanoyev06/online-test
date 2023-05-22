<template>
  <ul class="pagination">
    <li class="pagination__item">
      <router-link to="/" class="pagination__link" @click.prevent="">Oldingi</router-link>
    </li>
    <li class="pagination__item">
      <router-link to="/" class="pagination__link">1</router-link>
    </li>

    <li class="pagination__item active">
      <router-link to="/" class="pagination__link">2</router-link>
    </li>

    <li class="pagination__item">
      <router-link to="/" class="pagination__link">3</router-link>
    </li>

    <li class="pagination__item disabled">
      <router-link to="/" class="pagination__link">...</router-link>
    </li>

    <li class="pagination__item">
      <router-link tag="a" to="/" class="pagination__link">5</router-link>
    </li>
    <li class="pagination__item disabled">
      <router-link tag="a" to="/" class="pagination__link">Keyingi</router-link>
    </li>
  </ul>
</template>

<script>
import "../../assets/styles/components/app-pagination.scss";

export default {
  name: "AppPagination"
};
</script>

<style scoped></style>
