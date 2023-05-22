<template>
  <div class="app-card" :class="{ 'news-card--medium': medium }">
    <div class="app-card__photo">
      <img :src="photo" :alt="title" />
    </div>
    <div class="app-card__content">
      <app-text
        :size="isMobile ? 16 : 18"
        class="app-card__title mb-10"
        max-lines="2"
        line-height="24"
        weight="700"
        tag="h3"
        @click="goToLink()"
      >
        <span class="hover-title">Lorem, ipsum dolor.</span>
      </app-text>
      <app-text
        class="color-trans-04"
        size="14"
        line-height="20"
        weight="500"
        max-lines="4"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
        recusandae numquam sequi quia maiores voluptas a. Cum unde numquam a.
      </app-text>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/components/app-card.scss";

export default {
  name: "AppCard",
  components: {},
  props: {
    id: Number,
    link: String,
    title: String,
    subtitle: String,
    photo: String,
    medium: Boolean,
    value: null,
    price: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    goToLink() {
      this.$router.push({
        name: "detailed-page",
        params: { course_id: this.id },
      });
    },
  },
};
</script>

<style scoped>
.hover-title:hover {
  cursor: pointer;
}
</style>
