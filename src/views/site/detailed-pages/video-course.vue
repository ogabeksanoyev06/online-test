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
            {{ course.title }}
          </AppText>
          <AppText
            size="16"
            line-height="24"
            class="mb-20"
            weight="500"
            maxWidth="700"
          >
            {{ course.description }}
          </AppText>
          <app-button
            theme="info"
            :font-size="16"
            :sides="20"
            :height="isDesktopSmall ? '40' : '50'"
            weight="500"
            :class="isDesktopSmall ? 'w-100 mb-10' : 'mr-10'"
          >
            Kursni sotib olish
          </app-button>
          <app-button
            theme="orange"
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
            <div
              class="benefits__item"
              v-for="(item, index) in benefits"
              :key="index"
            >
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
                <h4>{{ item.name }}</h4>
                <p>
                  {{ item.description }}
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
                <span class="bold-text color-secondary">
                  {{ course.modules_count }} ta
                </span>
                Modullar soni
              </AppText>
              <AppText
                :size="isMobile ? 16 : 20"
                :line-height="isMobile ? 20 : 24"
                weight="500"
                class=""
              >
                <span class="bold-text color-secondary">
                  {{ course.lessons_count }} ta
                </span>
                Video darslar soni
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
            <Accordion>
              <AccordionItem
                v-for="(sectionContent, index) in sections"
                :key="index"
                :name="sectionContent.name"
                :moduleIndex="index + 1"
                class="active"
              >
                <template slot="accordion-content">
                  <li
                    v-for="(content, i) in sectionContent.lessons"
                    :key="i"
                    @click="selectContent(sectionContent.id, content.id)"
                    class="d-flex align-center justify-space-between"
                  >
                    {{ content.name }}
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
            <img :src="teacher.photo" alt="" />
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
                teacher.first_name +
                " " +
                teacher.last_name +
                " " +
                teacher.father_name
              }}
            </AppText>

            <AppText size="14" line-height="22" weight="500" class="mb-10">
              E-mail: {{ teacher.email }}
            </AppText>

            <AppText size="14" line-height="26" weight="500" class="mb-10">
              Phone: {{ teacher.phone }}
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
import Accordion from "../../../components/shared-components/Accordion";
import AccordionItem from "../../../components/shared-components/AccordionItem";
import BlockWrap from "@/components/shared-components/BlockWrap.vue";

import { mapGetters } from "vuex";

export default {
  name: "AppVideoCourse",
  components: { AppButton, BlockWrap, Accordion, AccordionItem },
  data() {
    return {
      courseId: null,
      sections: [
        {
          contentList: [],
          id: 1,
          name: "Kirish",
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
      benefits: [
        {
          id: 0,
          name: "Python",
          description:
            "Ushbu modul Python dasturlash tili va uning sintaksisi haqida kerakli bilimlarni beradi.",
        },
      ],
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
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    getCourse(courseId) {
      try {
        this.$http.get(`courses/${courseId}/`).then((res) => {
          if (res) {
            this.course = res;
            this.sections = res.modules;
            this.teacher = res.teacher;
            this.benefits = res.planed_skills;
          }
        });
      } catch (e) {
        //something
      }
    },
    whenCourseIdChanged() {
      this.courseId = this.$route.params.course_id;
      if (this.courseId === null) return;
      this.getCourse(this.courseId);
    },
  },
  mounted() {
    this.whenCourseIdChanged();
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
      padding: 16px;
      position: relative;
      border-bottom: 1.5px solid #eaeaea;
      .lesson-duration {
        width: 50px;
        white-space: nowrap;
      }
    }
  }
}

@media (max-width: 992px) {
  .accordion__content {
    ul {
      li {
        font-size: 16px;
        padding: 18px;
      }
    }
  }
}
@media (max-width: 768px) {
  .accordion__content {
    ul {
      li {
        font-size: 14px;
        padding: 10px;
      }
    }
  }
}
</style>
