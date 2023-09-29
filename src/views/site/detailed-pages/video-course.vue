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
                class="active"
              >
                <template slot="accordion-trigger">
                  <div class="course__accordion-header">
                    <div
                      class="course__accordion-numb"
                      :class="isDesktopSmall ? 'mr-10' : 'mr-20'"
                    >
                      {{ sectionContentIndex + 1 }}-modul
                    </div>
                    <h4 class="course__accordion-text">
                      {{ sectionContent.name }}
                    </h4>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="#024033"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    />
                  </svg>
                </template>
                <template slot="accordion-content">
                  <li
                    v-for="(
                      content, contentIndex
                    ) in sectionContent.contentList"
                    :key="contentIndex"
                    @click="selectContent(sectionContent.id, content.id)"
                    class="d-flex align-center justify-space-between"
                  >
                    Introduction to Programming
                    <div class="d-flex align-center">
                      <span>
                        <svg
                          width="78"
                          height="78"
                          viewBox="0 0 78 78"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style="
                            width: 25px;
                            height: 25px;
                            margin-right: 15px;
                            cursor: pointer;
                          "
                        >
                          <circle
                            cx="39"
                            cy="39"
                            r="39"
                            fill="#A0E82F"
                          ></circle>
                          <g clip-path="url(#clip0_91_11352)">
                            <path
                              d="M30 51.0001C29.7348 51.0001 29.4804 50.8947 29.2929 50.7072C29.1054 50.5196 29 50.2653 29 50.0001V28.0001C29 27.8263 29.0453 27.6555 29.1314 27.5046C29.2175 27.3536 29.3414 27.2277 29.491 27.1392C29.6406 27.0508 29.8106 27.0028 29.9844 27.0001C30.1582 26.9974 30.3296 27.04 30.4819 27.1238L50.4819 38.1238C50.6388 38.2101 50.7697 38.3369 50.8608 38.491C50.952 38.6452 51 38.821 51 39C51 39.1791 50.952 39.3549 50.8608 39.509C50.7697 39.6632 50.6388 39.79 50.4819 39.8763L30.4819 50.8763C30.3343 50.9575 30.1685 51 30 51.0001Z"
                              fill="#045140"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_91_11352">
                              <rect
                                width="32"
                                height="32"
                                fill="white"
                                transform="translate(23 23)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <svg
                        fill="none"
                        width="25"
                        height="25"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        style="color: rgb(130, 211, 0); margin-right: 15px"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                      <span class="lesson-duration">16 : 44</span>
                    </div>
                  </li>
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
.accordion__content {
  ul {
    li {
      font-weight: 500;
      font-size: 18px;
      line-height: 156%;
      letter-spacing: -0.02em;
      color: #000;
      opacity: 0.8;
      padding: 24px 0;
      position: relative;
      border-bottom: 1.5px solid #eaeaea;
      .lesson-duration {
        width: 50px;
        font-size: 16px;
        white-space: nowrap;
      }
      &:hover {
        background-color: #eaeaea;
      }
    }
  }
}
.accordion {
  border: 1px solid #eaeaea;
}
.accordion__item {
  border-bottom: 1px solid #d9d9d9;
}
.course__accordion {
  &-header {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  &-text {
    font-weight: 500;
    font-size: 32px;
    line-height: 143%;
    color: #024033;
  }
  &-wrap {
    padding: 15px 30px 15px 30px;
  }

  &-numb {
    background-color: #024033;
    color: #fff;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    min-width: 24px;
    min-height: 24px;
    font-size: 14px;
    line-height: 14px;
    padding: 0 10px;
    white-space: nowrap;
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
@media (max-width: 992px) {
  .accordion__content {
    ul {
      li {
        font-size: 16px;
        padding: 18px 0;
      }
    }
  }
  .course__accordion {
    &-text {
      font-weight: 500;
      font-size: 28px;
      line-height: 143%;
      color: #024033;
    }
  }
}
@media (max-width: 768px) {
  .accordion__content {
    ul {
      li {
        font-size: 12px;
        padding: 15px 0;
      }
    }
  }
  .course__accordion {
    &-text {
      font-weight: 500;
      font-size: 20px;
      line-height: 143%;
      color: #024033;
    }
    &-numb {
      font-size: 11px;
      padding: 4px 12px;
    }
  }
}
</style>
