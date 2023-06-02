<template>
  <div class="course-page py-30">
    <div class="container">
      <div class="content">
        <div class="content__main mr-30">
          <div class="video-player-wrap mb-20">
            <!-- <video-player
              :options="videoOptions"
              @player-state-changed="playerStateChanged"
              ref="myPlayer"
              style="width: 100%; object-fit: contain"
            /> -->
          </div>
          <div class="tab__main mb-30">
            <div class="section__top">
              <div class="section__top-left">
                <div class="tab px-10">
                  <button class="tab__item active">Dars haqida</button>
                  <button class="tab__item">Dars fayllari</button>
                </div>
              </div>
            </div>
            <div class="tab__body">
              <AppText size="14" line-height="20" weight="500" class="">
                {{ playingContent.content }}
              </AppText>
            </div>
          </div>
        </div>
        <div class="sidebar">
          <div class="course__accordion bordered radius">
            <AppText
              size="14"
              line-height="17"
              weight="700"
              class="pa-15 border-bottom"
            >
              Lorem ipsum dolor sit amet.
            </AppText>
            <AppDivider style="margin: 0" />
            <Accordion :active-prop="activeAccordionIndex">
              <AccordionItem
                class="m-15 bordered radius"
                :class="sectionContentId === sectionContent.id ? 'active' : ''"
                v-for="(sectionContent, sectionContentIndex) in 10"
                :key="sectionContentIndex"
              >
                <template slot="accordion-trigger">
                  <div class="course__accordion-header">
                    <div
                      class="course__accordion-numb"
                      :class="isDesktopSmall ? 'mr-10' : 'mr-20'"
                    >
                      {{ sectionContentIndex + 1 }}
                    </div>
                    <h4 class="course__accordion-text">
                      {{ sectionContent.name }}
                    </h4>
                  </div>
                </template>
                <template slot="accordion-content">
                  <div
                    style="padding: 0 15px 15px"
                    v-for="(
                      content, contentIndex
                    ) in sectionContent.contentList"
                    :key="contentIndex"
                    @click="selectContent(sectionContent.id, content.id)"
                  >
                    <div
                      class="course__accordion-item radius bordered pa-10 mb-10"
                      :class="contentId === content.id ? 'active' : ''"
                    >
                      <div class="course__accordion-icon mr-20">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 6.13397C11.1667 6.51888 11.1667 7.48112 10.5 7.86602L1.5 13.0622C0.833332 13.4471 3.43203e-07 12.966 3.76852e-07 12.1962L8.31114e-07 1.80385C8.64763e-07 1.03405 0.833334 0.552922 1.5 0.937822L10.5 6.13397Z"
                            fill="#008AE4"
                          />
                        </svg>
                      </div>
                      <h4 class="course__accordion-text">
                        {{ content.name }}
                      </h4>
                    </div>
                    <a
                      href="#!"
                      target="_blank"
                      class="course__accordion-item mb-10 radius bordered pa-10"
                      v-for="(file, fileIndex) in content.files"
                      :key="fileIndex"
                    >
                      <div class="course__accordion-icon mr-20">
                        <img src="/icons/document.svg" alt="" />
                      </div>
                      <h4 class="course__accordion-text">
                        What Matters In This Section?
                      </h4>
                    </a>
                  </div>
                </template>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../assets/styles/pages/detailed-page.scss";
import Accordion from "../../../components/shared-components/Accordion";
import AppDivider from "../../../components/shared-components/AppDivider";
import AccordionItem from "../../../components/shared-components/AccordionItem";
import AppText from "../../../components/shared-components/AppText";
// import { videoPlayer } from "vue-vjs-hls";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AppCoursePage",
  components: {
    AccordionItem,
    AppDivider,
    Accordion,
    // videoPlayer,
    AppText,
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        start: 0,
        source: {
          src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8",
          type: "application/x-mpegURL",
        },
        language: "ru-Ru",
        playbackRates: [0.7, 1.0, 1.3, 1.5, 1.7],
        poster:
          "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg",
      },
      courseId: null,
      contentId: null,
      sectionContentId: null,
      sectionContentTree: {
        contentList: [
          {
            id: 359,
            name: "Kirish",
            durationMin: 4,
            durationSek: 3,
            testQuestionCount: 0,
            isActive: true,
            isWatched: false,
            watchedTime: 0,
            files: [
              {
                fileName: null,
                fileRoot: null,
              },
            ],
          },
        ],
        durationMin: 4,
        durationSek: 3,
        id: 121,
        name: "Kirish",
      },
      playingContent: {
        content: null,
        contentName: null,
        courseId: null,
        displayOrder: null,
        durationMin: null,
        durationSek: null,
        id: null,
        picture: null,
        sectionId: null,
        vFileName: null,
        transcriptList: [
          {
            beginTime: null,
            contentId: null,
            id: null,
            positionNumber: null,
            transcriptText: null,
          },
        ],
      },
      course: {
        authorFullName: null,
        description: null,
        id: null,
        isActive: null,
        isFree: null,
        isPayed: null,
        languageId: null,
        languageName: null,
        levelId: null,
        levelName: null,
        name: null,
        shortName: null,
      },
      activeAccordionIndex: 5,
    };
  },
  computed: {
    ...mapGetters([]),
    sectionContentIdComputed() {
      return this.sectionContentId;
    },
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["setCourseContentId"]),

    // getCourse(courseId) {
    //   try {
    //     this.$api.get(`Main/Course/${courseId}`).then((res) => {
    //       if (!res.error) {
    //         this.course = res.result;
    //       }
    //     });
    //   } catch (e) {
    //     this.errorNotification(e.response.data.error.message);
    //   }
    // },
    // async getSectionTree() {
    //   try {
    //     this.$api
    //       .get(`Main/Course/SectionContentTree?courseId=${this.courseId}`)
    //       .then((res) => {
    //         if (!res.error) {
    //           this.sectionContentTree = res.result;
    //           if (
    //             this.sectionContentTree &&
    //             this.sectionContentTree[0] &&
    //             this.sectionContentTree[0].contentList &&
    //             this.sectionContentTree[0].contentList[0]
    //           ) {
    //             let firstSectionContent = this.sectionContentTree[0];
    //             let firstContent = this.sectionContentTree[0].contentList[0];
    //             if (!this.sectionContentId) {
    //               this.sectionContentId = firstSectionContent.id;
    //               this.contentId = firstContent.id;
    //               this.setCourseContentId(this.contentId);
    //             }
    //             this.getActiveAccordionIndex();
    //             this.getContent();
    //           }
    //         }
    //       });
    //   } catch (e) {
    //     this.errorNotification(e.response.data.error.message);
    //   }
    // },
    // getContent() {
    //   this.$api.get(`Main/Course/GetContent/${this.contentId}`).then((res) => {
    //     if (!res.error) {
    //       this.playingContent = res.result.content;
    //       this.playingContent.transcriptList = res.result.transcriptList;
    //       this.videoOptions.source.src = `${this.baseURL}coursevideos/${res.result.content.id}/index.m3u8`;
    //     }
    //   });
    // },
    // playerStateChanged() {
    //   //console.log(event)
    // },
    // selectContent(sectionContentId, contentId) {
    //   this.sectionContentId = sectionContentId;
    //   this.contentId = contentId;
    //   this.routeReplace();
    //   this.setCourseContentId(this.contentId);
    // },
    // routeReplace() {
    //   this.$router.replace(
    //     `/course-page/${this.courseId}/${this.sectionContentId}/${this.contentId}`
    //   );
    // },
    // getActiveAccordionIndex() {
    //   let index = this.sectionContentTree.findIndex(
    //     (s) => s.id === parseInt(this.sectionContentId)
    //   );
    //   if (index !== -1) {
    //     this.activeAccordionIndex = index + 5;
    //   }
    // },
  },
  mounted() {
    this.courseId = this.$route.params.course_id;
    this.contentId = this.$route.params.content_id;
    this.sectionContentId = this.$route.params.section_content_id;
    // this.getSectionTree();
    // this.getCourse(this.courseId);
  },
  watch: {
    $route() {
      // this.getContent();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/abstracts/variables";

.course__accordion {
  .accordion__content {
    padding: 15px 30px 15px;
  }

  transition: 0.3s;

  .accordion {
    transition: 0.3s !important;
    height: 100%;

    &__item {
      &.active {
        background-color: #f5f9fd;

        .course__accordion-numb {
          background-color: white;
          border: 1px solid $border-color;
          font-size: 12px;
          font-weight: 700;
          font-family: "Gilroy", sans-serif;
          color: $text-color-default;
        }
      }

      &.background_changed {
        background-color: #f5f9fd;
      }

      &:hover {
        background-color: #f5f9fd;
      }
    }

    .course__accordion-numb {
      font-weight: 700;
      color: $text-color-default;
    }
  }

  &-header {
    padding: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  &-wrap {
    padding: 15px 30px 15px 30px;
  }

  &-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      min-width: 18px;
    }
  }

  &-numb {
    background-color: $border-color;
    color: $color-text;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    min-width: 24px;
    min-height: 24px;
    font-size: 12px;
    line-height: 14px;
  }

  &-item {
    display: flex;
    width: 100%;
    background: white;
    padding: 10px 20px;

    &.active {
      background-color: #0467a71c;
    }

    &:hover {
      background-color: #0467a71c;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.tab__main {
  border: 1px solid $border-color;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;

  .tab {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    &__item {
      padding: 20px 0;
      margin: 0 15px;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: $color-text;
      cursor: pointer;
      background-color: transparent;

      &.active {
        color: $text-color-default;
        border-bottom: 2px solid $color-main;
      }
    }

    &__body {
      padding: 0 20px 20px;
      border-top: 1px solid $border-color;
      padding-top: 30px;
    }
  }

  .app-slider {
    &__button {
      &-previous {
        left: -15px !important;
      }

      &-next {
        right: -15px !important;
      }
    }
  }
}

@media (max-width: 1140px) {
  .tab__main {
    .tab__item {
      font-size: 14px;
      padding: 10px 0;
    }
  }

  .section__top {
    padding: 10px;
    justify-content: center;
    text-align: center;

    .section__top-details {
      margin: auto;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 991px) {
  .course__accordion {
    &-header {
      padding: 10px 15px;
      align-items: center;
    }
  }

  .sidebar {
    max-width: 280px;
  }

  .content__main {
    max-width: calc(100% - 310px);
  }

  .course__accordion-text {
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .tab__main {
    .tab__item {
      width: 100%;
    }
  }

  .section__top-details {
    margin-top: 20px !important;
  }
}
</style>
