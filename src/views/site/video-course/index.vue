<template>
  <section class="section py-30">
    <div class="container">
      <div class="section__top mb-30">
        <div>
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mb-10"
          >
            Videodarslar
          </app-text>
        </div>
      </div>
      <loader v-if="loading" />
      <div class="tab__main" v-else>
        <div class="section__top">
          <div class="section__top-left">
            <div class="tab">
              <button
                class="tab__item"
                v-for="(item, index) in skillTree"
                :class="item.id === activeCategoryId ? 'active' : ''"
                @click="selectCategory(item.id)"
                :key="index"
              >
                <span class="d-flex align-center">
                  <div class="image">
                    <img src="/images/ux-ui.webp" alt="" />
                  </div>
                  {{ item.name }}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="tab__body">
          <AppText
            v-if="courseNotFound"
            size="16"
            line-height="20"
            weight="500"
            class="mb-20 text-center"
          >
            Tanlangan yo'nalish bo'yicha kurs mavjud emas!
          </AppText>
          <BlockWrap
            :count="isMobileSmall ? 1 : 2"
            offset-x="24"
            offset-y="24"
            class="mb-20"
          >
            <AppCard
              v-for="item in list"
              :key="item.id"
              :courseId="item.id"
              :title="item.title"
              :modules_count="item.modules_count"
              :lessons_count="item.lessons_count"
              :language="item.language"
              :teacher="item.teacher"
              :trailer="item.trailer"
              :image="item.image"
              :price="item.price"
              :trailerBtn="true"
            />
          </BlockWrap>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AppCard from "@/components/shared-components/AppCard.vue";
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
import Loader from "@/components/shared-components/Loader.vue";
export default {
  name: "VideoCourse",
  components: { AppCard, BlockWrap, Loader },
  data() {
    return {
      list: [],
      courseNotFound: false,
      activeCategoryId: null,
      categoryNotFound: null,
    };
  },
  methods: {
    ...mapActions(["getSkillTree", "getCoursesBySubjectId"]),
    setSubjectId() {
      if (this.skillTree && this.skillTree[0]) {
        this.selectCategory(this.skillTree[0].id);
        this.categoryNotFound = false;
      } else {
        this.categoryNotFound = true;
      }
    },
    async selectCategory(categoryId) {
      await this.getCoursesBySubjectId(categoryId);
      this.activeCategoryId = categoryId;
    },
    async prepareCoursesBySubjectId() {
      this.courseNotFound = false;
      this.list = [];
      if (!this.coursesBySubjectId || this.coursesBySubjectId.length <= 0) {
        this.courseNotFound = true;
        return;
      }
      this.coursesBySubjectId.forEach((c) => {
        let courseModel = {
          id: c.id,
          title: c.title,
          modules_count: c.modules_count,
          lessons_count: c.lessons_count,
          language: c.language,
          teacher: c.teacher,
          trailer: c.trailer,
          image: c && c.image ? c.image : "/images/post.jpg",
          price: c.price + " so'm",
          link: "detailed-page/" + c.id,
        };
        this.list.push(courseModel);
      });
    },
  },
  computed: {
    ...mapGetters(["skillTree", "coursesBySubjectId", "loading"]),
  },
  async mounted() {
    await this.getSkillTree();
    this.setSubjectId();
  },
  watch: {
    coursesBySubjectId() {
      this.prepareCoursesBySubjectId();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/abstracts/variables";
.tab__main {
  border: 1px solid $border-color;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  padding-top: 10px;
  .tab {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 24px;
    &__item {
      display: inline-block;
      border: 1px solid #e3e1e1;
      padding: 13px 30px 13px 33px;
      margin-right: 16px;
      margin-bottom: 16px;
      border-radius: 100px;
      transition: 0.1s;
      cursor: pointer;
      &:hover {
        background-color: #3e78ff;
        color: rgb(255, 255, 255);
        border: 1px solid transparent;
        span {
          color: #fff;
        }
        .image {
          img {
            filter: invert(100%);
          }
        }
      }
      &.active {
        background-color: #3e78ff;
        color: rgb(255, 255, 255);
        border: 1px solid transparent;
        span {
          color: #fff;
        }
        .image {
          img {
            filter: invert(100%);
          }
        }
      }
      span {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #222;
        width: max-content;
      }
      .image {
        margin-right: 10px;
        position: relative;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        img {
          max-width: 100%;
          object-fit: contain;
          transition: 0.1s;
        }
      }
    }
    &__body {
      padding: 0 20px 20px;
      border-top: 1px solid $border-color;
      padding-top: 30px;
    }
  }
}
</style>
