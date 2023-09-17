<template>
  <div class="detailed-page">
    <div class="detailed-page__header py-30">
      <div class="container">
        <div class="detailed-page__wrap">
          <AppText
            :size="isMobile ? 26 : 38"
            :line-height="isMobile ? 30 : 46"
            weight="700"
            class="mb-20"
          >
            Python Development
          </AppText>
          <AppText
            size="16"
            line-height="24"
            class="mb-20"
            weight="500"
            maxWidth="700"
          >
            Dasturlash sohasiga kirish uchun siz uchun eng to'g'ri tanlov. Ushbu
            kursda siz kodlashtirasiz, veb-saytlar va veb-ilovalarning orqa
            qismini ishlab chiqasiz.
          </AppText>
          <app-button
            theme="main"
            :font-size="16"
            :sides="20"
            :height="isDesktopSmall ? '40' : '50'"
            weight="500"
            :class="isDesktopSmall ? 'w-100 mb-10' : 'mr-10'"
          >
            Kursni sotib olish
          </app-button>
          <app-button
            theme="secondary"
            :font-size="16"
            :sides="20"
            :height="isDesktopSmall ? '40' : '50'"
            weight="500"
            :class="isDesktopSmall ? 'w-100' : ''"
          >
            Treylerni ko'rish
          </app-button>
        </div>
      </div>
    </div>

    <div
      class="detailed-page__body py-30"
      :class="isMobileMedium ? 'pb-30' : 'pb-60'"
    >
      <div class="container">
        <div class="course-includes">
          <AppText
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 30 : 36"
            weight="700"
            class="mb-30"
          >
            Kurs davomida quyidagilarni o'rganamiz:
          </AppText>
          <div class="benefits mb-30">
            <div class="benefits__item" v-for="(item, index) in 6" :key="index">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-10"
              >
                <path
                  d="M19.9995 39.3628C9.32277 39.3628 0.636719 30.6767 0.636719 20C0.636719 17.4919 1.10881 15.0512 2.04137 12.7453C3.47044 9.21046 5.89369 6.19651 9.04835 4.02907C12.2786 1.81046 16.0658 0.637207 19.9995 0.637207C30.6763 0.637207 39.3623 9.32325 39.3623 20C39.3623 30.6767 30.6763 39.3628 19.9995 39.3628ZM19.9995 2.10232C12.6646 2.10232 6.14835 6.49535 3.39951 13.2953C2.53788 15.4256 2.10184 17.6814 2.10184 20C2.10184 29.8686 10.1309 37.8977 19.9995 37.8977C29.8681 37.8977 37.8972 29.8686 37.8972 20C37.8972 10.1314 29.8681 2.10232 19.9995 2.10232Z"
                  fill="#045140"
                ></path>
                <path
                  d="M15.527 28.8371C15.348 28.8371 15.1677 28.7697 15.0294 28.6348C14.9956 28.6022 11.6468 25.3464 8.35261 22.065C8.07354 21.7871 8.07238 21.3348 8.35028 21.0557C8.62819 20.7766 9.08052 20.7755 9.35959 21.0534C11.9084 23.5917 14.4898 26.1162 15.5375 27.1371C17.7712 25.0534 26.9514 16.4592 31.334 11.8731C31.3503 11.8557 31.3689 11.8359 31.3875 11.8162C31.6526 11.5243 32.1038 11.5022 32.3956 11.7673C32.6875 12.0324 32.7096 12.4836 32.4445 12.7755C32.4201 12.8022 32.3945 12.8301 32.3689 12.8569C27.3514 18.1069 16.1259 28.5406 16.0131 28.6452C15.8759 28.7731 15.7014 28.8371 15.527 28.8371Z"
                  fill="#045140"
                ></path>
              </svg>

              <div style="flex: 1">
                <h4>Python</h4>
                <p>
                  Ushbu modul Python dasturlash tili va uning sintaksisi haqida
                  kerakli bilimlarni beradi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="course-program-card">
          <AppText
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 30 : 36"
            weight="700"
            class="mb-30"
          >
            Kurs rejasi
          </AppText>
          <block-wrap
            :count="isDesktopSmall ? 1 : 2"
            offset-y="20"
            offset-x="20"
            class="mb-30"
          >
            <block-wrap
              :count="isDesktopSmall ? 1 : 2"
              offset-y="20"
              offset-x="20"
              class="mb-30"
            >
              <AppText
                :size="isMobile ? 16 : 20"
                :line-height="isMobile ? 20 : 24"
                weight="500"
              >
                <span class="bold-text color-secondary">6 ta</span> Modullar
                soni
              </AppText>
              <AppText
                :size="isMobile ? 16 : 20"
                :line-height="isMobile ? 20 : 24"
                weight="500"
                class=""
              >
                <span class="bold-text color-secondary">150 ta</span> Video
                darslar soni
              </AppText>
            </block-wrap>
            <block-wrap
              :count="isDesktopSmall ? 1 : 2"
              offset-y="20"
              offset-x="20"
              class="mb-30"
            >
              <div>
                <AppText
                  :size="isMobile ? 24 : 30"
                  :line-height="isMobile ? 30 : 36"
                  weight="700"
                  class="mb-10"
                >
                  Nazariya
                </AppText>
                <AppText
                  :size="isMobile ? 14 : 16"
                  :line-height="isMobile ? 20 : 24"
                  weight="500"
                >
                  Nazariy bilim har qanday soha uchun muhimdir. Siz tanlagan
                  soha bo'yicha nazariyani o'zlashtirasiz va olingan bilimlarni
                  mustahkamlaysiz.
                </AppText>
              </div>
              <div>
                <AppText
                  :size="isMobile ? 24 : 30"
                  :line-height="isMobile ? 30 : 36"
                  weight="700"
                  class="mb-10"
                >
                  Amaliyot
                </AppText>
                <AppText
                  :size="isMobile ? 14 : 16"
                  :line-height="isMobile ? 20 : 24"
                  weight="500"
                >
                  Kursning asosiy qismi amaliyotga qaratilgan. Har bir bosqichda
                  siz haqiqiy ish bilimiga ega bo'lasiz.
                </AppText>
              </div>
            </block-wrap>
          </block-wrap>
          <div class="course-accordion">
            <Accordion :active-prop="activeAccordionIndex">
              <AccordionItem
                :class="sectionContentId === sectionContent.id ? 'active' : ''"
                v-for="(sectionContent, sectionContentIndex) in sections"
                :key="sectionContentIndex"
              >
                <template slot="accordion-trigger">
                  <div class="course__accordion-header">
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
                  </div>
                </template>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div class="author__info mb-30">
          <div class="author__photo mr-30">
            <img src="/images/author.jpg" alt="" />
          </div>
          <div class="author__content">
            <AppText
              size="14"
              line-height="16"
              weight="700"
              class="mb-10 color-text"
            >
              Teacher
            </AppText>

            <AppText size="18" line-height="20" weight="700" class="mb-10">
              {{
                teacher.firstName +
                " " +
                teacher.middleName +
                " " +
                teacher.lastName
              }}
            </AppText>

            <AppText size="14" line-height="22" weight="500" class="mb-10">
              E-mail: {{ teacher.email }}
            </AppText>

            <AppText size="14" line-height="26" weight="500" class="mb-10">
              Phone: {{ teacher.telefon }}
            </AppText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../assets/styles/pages/detailed-page.scss";
import AppButton from "../../../components/shared-components/AppButton";
import AppText from "../../../components/shared-components/AppText";
import Accordion from "../../../components/shared-components/Accordion";
import AccordionItem from "../../../components/shared-components/AccordionItem";

import { mapGetters } from "vuex";
import BlockWrap from "@/components/shared-components/BlockWrap.vue";

export default {
  name: "AppVideoCourse",
  components: { AppButton, AppText, BlockWrap, Accordion, AccordionItem },
  data() {
    return {
      certificates: [],
      courseId: null,
      course: {
        authorFullName: null,
        authorId: null,
        avgStar: null,
        boughtCount: null,
        categoryId: null,
        description: null,
        durationHour: 14,
        durationMinute: 15,
        id: null,
        isActive: null,
        isFree: null,
        isPayed: null,
        languageId: null,
        languageName: null,
        levelId: null,
        levelName: null,
        name: null,
        pictureLarge: null,
        pictureSmall: null,
        price: 499000,
        releasedDate: null,
        shortName: null,
        subjectId: null,
        subjectName: null,
        videoCount: null,
        visitCount: null,
      },
      courseFiles: [
        {
          courseFileName: null,
          courseFilePlace: null,
          courseId: null,
          id: null,
        },
      ],
      teacher: {
        email: null,
        firstName: "Og`abek",
        id: null,
        isTeacher: null,
        lastName: "Sanoyev",
        middleName: "Otabek o`g`li",
        photo: null,
        telefon: null,
        userName: null,
      },
      similarCourses: [
        {
          authorFullName: null,
          authorId: null,
          avgStar: null,
          boughtCount: null,
          categoryId: null,
          description: null,
          durationHour: null,
          durationMinute: null,
          id: null,
          isActive: null,
          isFree: null,
          isPayed: null,
          languageId: null,
          languageName: null,
          levelId: null,
          levelName: null,
          name: null,
          pictureLarge: null,
          pictureSmall: null,
          price: null,
          releasedDate: null,
          shortName: null,
          subjectId: null,
          subjectName: null,
          videoCount: null,
          visitCount: null,
        },
      ],
      sections: [
        {
          id: 1,
          name: "Birinchi bo'lim",
          contentList: [
            {
              id: 1,
              name: "Birinchi bo'limning birinchi kontenti",
              files: [
                {
                  name: "Fayl 1",
                  link: "http://example.com/file1.pdf",
                },
                {
                  name: "Fayl 2",
                  link: "http://example.com/file2.pdf",
                },
              ],
            },
            {
              id: 2,
              name: "Birinchi bo'limning ikkinchi kontenti",
              files: [
                {
                  name: "Fayl 3",
                  link: "http://example.com/file3.pdf",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Ikkinchi bo'lim",
          contentList: [
            {
              id: 3,
              name: "Ikkinchi bo'limning birinchi kontenti",
              files: [
                {
                  name: "Fayl 4",
                  link: "http://example.com/file4.pdf",
                },
              ],
            },
          ],
        },
        // Yana boshqa bo'limlar qo'shishingiz mumkin...
      ],
      comments: [],
    };
  },
  computed: {
    ...mapGetters(["coursesOnBasket", "favouriteCourses"]),
    isFavourite() {
      return this.isCourseInFavouritesList(this.courseId);
    },
    inBasket() {
      return this.isCourseInBasketSolid(this.courseId);
    },
  },
  methods: {
    startCourse() {
      this.$router.push({
        name: "course-page",
        params: { course_id: this.courseId },
      });
    },
  },
  mounted() {
    this.courseId = this.$route.params.course_id;
  },
  watch: {
    $route() {},
  },
};
</script>

<style lang="scss">
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
          border: 1px solid #000;
          font-size: 12px;
          font-weight: 700;
          color: #000;
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
      color: #000;
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
    background-color: #000;
    color: #000;
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
    &:nth-child(3n) {
      margin-bottom: 0;
    }
  }
}
</style>
