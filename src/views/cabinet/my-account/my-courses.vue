<template>
  <div class="my-courses">
    <AppText size="14" line-height="26" weight="700" class="color-text mb-20">
      My courses
    </AppText>

    <div class="cabinet__content">
      <div class="course__item pa-20" v-for="(item, index) in 10" :key="index">
        <div class="course__item-photo mr-30">
          <img src="/images/cta-banner.jpg" alt="" />
        </div>

        <div class="course__item-content">
          <AppText
            :size="isMobileSmall ? 14 : 18"
            :line-height="isMobileSmall ? 18 : 24"
            weight="700"
            class="mb-10"
            max-lines="2"
          >
            2021 Complete Python Bootcamp From Zero to Hero in Python
          </AppText>

          <AppText
            :size="isMobileSmall ? 12 : 14"
            :line-height="isMobileSmall ? 16 : 20"
            class="color-text mb-10"
            max-lines="2"
          >
            Learn Python like a Professional Start from the basics and go all
            the way to creating your own applications and games
          </AppText>

          <BlockWrap
            width-auto=""
            offset-x="20"
            offset-y="10"
            class="align-center"
          >
            <div class="course__item-price">Purchased</div>
          </BlockWrap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockWrap from "../../../components/shared-components/BlockWrap";
import "../../../assets/styles/pages/course.scss";

export default {
  name: "my-courses",
  components: { BlockWrap },
  data() {
    return {
      userBoughtCourses: {
        data: [
          {
            avgStar: null,
            boughtCount: null,
            description: null,
            durationHour: null,
            durationMinute: null,
            id: null,
            name: null,
            pictureLarge: null,
            pictureSmall: null,
            price: null,
            videoCount: null,
            visitCount: null,
          },
        ],
        total: 0,
      },
    };
  },
  methods: {
    getBoughtCourses() {
      try {
        this.$api.get("main/User/BoughtCourses?skip=0&take=100").then((res) => {
          if (!res.error) {
            this.userBoughtCourses = res.result;
          }
        });
      } catch (e) {
        this.errorNotification(e.response.data.error.message);
      }
    },
  },
  mounted() {
    // this.getBoughtCourses();
  },
};
</script>

<style lang="scss" scoped>
.my-courses {
  .course__item-photo {
    max-height: 144px;
    max-width: 225px;
  }
}
</style>
