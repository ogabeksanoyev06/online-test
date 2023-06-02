<template>
  <section class="section py-30">
    <div class="container">
      <div class="section__top mb-30">
        <div>
          <app-text
            :size="isMobile ? 18 : 28"
            :line-height="isMobile ? 28 : 36"
            weight="700"
          >
            Videodarslar
          </app-text>
          <app-text size="16" line-height="18" weight="500" class="color-text">
            Biz bilan barchasi qulay
          </app-text>
        </div>
        <div class="section__top-details filter">
          <el-input
            placeholder="Kurs nomini yoizng..."
            v-model="course"
            style="width: 100%"
          ></el-input>
        </div>
      </div>

      <div class="items">
        <div class="item" v-for="(item, i) in 8" :key="i" @click="goToLink(i)">
          <div class="item__image">
            <img
              src="	https://new.soliqservis.uz/static/media/opp3.0988b4f40d264fde7171afbff6aaa768.svg"
            />
          </div>
          <p class="item__title">Vue Js Frontend</p>
          <p class="item__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            consequatur, vel qui ullam quos architecto sed hic illo accusantium
            reiciendis quis maxime quae repudiandae labore id? Impedit ducimus
            harum eligendi!
          </p>
          <div class="item__footer">
            <p></p>
            <p class="price"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "VideoCourse",
  components: {},
  data() {
    return {
      course: "",
    };
  },
  methods: {
    goToLink(id) {
      this.$router.push({
        name: "detailed-page",
        params: { course_id: id },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.filter {
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
  .item {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
    padding: 24px;
    transition: all 0.2s linear;
    min-height: 350px;
    // max-width: 300px;
    // width: 100%;
    cursor: pointer;
    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
    &__image {
      text-align: center;
      img {
        width: auto;
        max-width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
      }
    }
    &__title {
      color: rgba(0, 0, 0, 0.8);
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.38px;
      line-height: 24px;
      margin-top: 24px;
      padding-bottom: 8px;
    }
    &__text {
      color: rgba(0, 0, 0, 0.639);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
    &__footer {
    }
  }
}

@media (max-width: 991px) {
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
  }
}
@media (max-width: 768px) {
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }
}
@media (max-width: 576px) {
  .items {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
}
</style>
