<template>
  <div class="detailed-page">
    <div class="detailed-page__header py-30">
      <div class="container">
        <div class="detailed-page__wrap">
          <AppText
            :size="isMobile ? 24 : 30"
            :line-height="isMobile ? 30 : 36"
            weight="700"
            class="mb-20"
          >
            Lorem ipsum dolor sit amet.
          </AppText>
          <AppText size="16" line-height="24" class="mb-20" weight="500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui nam
            voluptates tempore dignissimos soluta consectetur mollitia sapiente
            nostrum fugiat, culpa beatae maiores aut error nisi sit iure ducimus
            quae.
          </AppText>

          <div class="d-flex flex-wrap">
            <button class="custom__btn mr-15 mb-20">
              <svg
                width="24"
                style="margin-right: 10px"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4578 3.59133C19.9691 3.08683 19.3889 2.68663 18.7503 2.41358C18.1117 2.14054 17.4272 2 16.7359 2C16.0446 2 15.3601 2.14054 14.7215 2.41358C14.0829 2.68663 13.5026 3.08683 13.0139 3.59133L11.9997 4.63785L10.9855 3.59133C9.99842 2.57276 8.6596 2.00053 7.26361 2.00053C5.86761 2.00053 4.52879 2.57276 3.54168 3.59133C2.55456 4.6099 2 5.99139 2 7.43187C2 8.87235 2.55456 10.2538 3.54168 11.2724L4.55588 12.3189L11.9997 20L19.4436 12.3189L20.4578 11.2724C20.9467 10.7681 21.3346 10.1694 21.5992 9.51045C21.8638 8.85148 22 8.14517 22 7.43187C22 6.71857 21.8638 6.01225 21.5992 5.35328C21.3346 4.69431 20.9467 4.09559 20.4578 3.59133V3.59133Z"
                  :stroke="isFavourite ? '#FF5454' : '#95ABC6'"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ isFavourite ? "Tanlangan kurs" : `Tanlanganlarga qoshish` }}
            </button>

            <button class="custom__btn mb-20">
              <svg
                width="24"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                style="margin-right: 12px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12H15.44C16.1087 12 16.7582 11.7767 17.2854 11.3654C17.8126 10.9542 18.1873 10.3786 18.35 9.73L20 3.24C20.0375 3.09241 20.0407 2.93821 20.0095 2.78917C19.9783 2.64013 19.9135 2.50018 19.82 2.38C19.7227 2.25673 19.5978 2.1581 19.4554 2.09208C19.3129 2.02606 19.1569 1.99452 19 2H4.76C4.55369 1.41645 4.17193 0.910998 3.66707 0.552938C3.1622 0.194879 2.55894 0.00173951 1.94 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H1.94C2.16843 1.99334 2.39226 2.06513 2.57421 2.20341C2.75615 2.34169 2.88525 2.53812 2.94 2.76L3 3.24L4.73 10C3.93435 10.0358 3.18551 10.3862 2.64822 10.9741C2.11093 11.5621 1.8292 12.3394 1.865 13.135C1.9008 13.9306 2.25121 14.6795 2.83914 15.2168C3.42707 15.7541 4.20435 16.0358 5 16H5.18C5.01554 16.4531 4.96269 16.9392 5.02593 17.4171C5.08917 17.895 5.26665 18.3506 5.54332 18.7454C5.81999 19.1401 6.18772 19.4624 6.61535 19.6849C7.04299 19.9074 7.51795 20.0235 8 20.0235C8.48205 20.0235 8.95701 19.9074 9.38465 19.6849C9.81228 19.4624 10.18 19.1401 10.4567 18.7454C10.7334 18.3506 10.9108 17.895 10.9741 17.4171C11.0373 16.9392 10.9845 16.4531 10.82 16H13.18C13.0155 16.4531 12.9627 16.9392 13.0259 17.4171C13.0892 17.895 13.2666 18.3506 13.5433 18.7454C13.82 19.1401 14.1877 19.4624 14.6154 19.6849C15.043 19.9074 15.5179 20.0235 16 20.0235C16.4821 20.0235 16.957 19.9074 17.3846 19.6849C17.8123 19.4624 18.18 19.1401 18.4567 18.7454C18.7334 18.3506 18.9108 17.895 18.9741 17.4171C19.0373 16.9392 18.9845 16.4531 18.82 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15C20 14.7348 19.8946 14.4804 19.7071 14.2929C19.5196 14.1054 19.2652 14 19 14ZM17.72 4L16.41 9.24C16.3552 9.46188 16.2262 9.65831 16.0442 9.79659C15.8623 9.93487 15.6384 10.0067 15.41 10H6.78L5.28 4H17.72ZM8 18C7.80222 18 7.60888 17.9414 7.44443 17.8315C7.27998 17.7216 7.15181 17.5654 7.07612 17.3827C7.00043 17.2 6.98063 16.9989 7.01921 16.8049C7.0578 16.6109 7.15304 16.4327 7.29289 16.2929C7.43275 16.153 7.61093 16.0578 7.80491 16.0192C7.99889 15.9806 8.19996 16.0004 8.38268 16.0761C8.56541 16.1518 8.72159 16.28 8.83147 16.4444C8.94135 16.6089 9 16.8022 9 17C9 17.2652 8.89464 17.5196 8.70711 17.7071C8.51957 17.8946 8.26522 18 8 18ZM16 18C15.8022 18 15.6089 17.9414 15.4444 17.8315C15.28 17.7216 15.1518 17.5654 15.0761 17.3827C15.0004 17.2 14.9806 16.9989 15.0192 16.8049C15.0578 16.6109 15.153 16.4327 15.2929 16.2929C15.4327 16.153 15.6109 16.0578 15.8049 16.0192C15.9989 15.9806 16.2 16.0004 16.3827 16.0761C16.5654 16.1518 16.7216 16.28 16.8315 16.4444C16.9414 16.6089 17 16.8022 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18Z"
                  :fill="inBasket ? '#008AE4' : '#95ABC6'"
                />
              </svg>
              {{ inBasket ? `Savatchaga qo'shilgan` : `Savatchaga qo'shish` }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="detailed-page__body py-30"
      :class="isMobileMedium ? 'pb-30' : 'pb-60'"
    >
      <div class="container">
        <div class="content">
          <div class="content__main" :class="isDesktop ? 'mr-30' : 'mb-40'">
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
                v-for="(item, index) in 6"
                :key="index"
              >
                <img src="/svg/check-round.svg" class="mr-15" alt="" />

                <AppText
                  :size="isMobileSmall ? 14 : 16"
                  :line-height="isMobileSmall ? 18 : 24"
                >
                  Lorem, ipsum dolor.
                </AppText>
              </div>
            </div>

            <AppText
              :size="isMobile ? 24 : 30"
              :line-height="isMobile ? 30 : 36"
              weight="700"
              class="mb-30"
            >
              Kurs fayllari
            </AppText>

            <BlockWrap
              :count="isMobileSmall ? 1 : isDesktopMedium ? 2 : 3"
              class="mb-40"
            >
              <a
                :href="`${baseURL}${item.courseFilePlace}`"
                class="files__item pa-20"
                v-for="(item, index) in courseFiles"
                :key="index"
                target="_blank"
              >
                <div class="d-flex mr-10">
                  <img
                    src="/icons/files-pdf.svg"
                    :class="isMobile ? 'mr-10' : 'mr-20'"
                    alt=""
                  />
                  <AppText size="14" line-height="14" weight="500">
                    {{ item.courseFileName }}
                  </AppText>
                </div>
                <img src="/icons/download.svg" class="mla" alt="" />
              </a>
            </BlockWrap>

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

          <div class="sidebar">
            <div class="card mb-40">
              <div class="card__photo">
                <img src="/images/post.jpg" alt="" />

                <button class="card__play">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 11 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 6.13397C11.1667 6.51888 11.1667 7.48112 10.5 7.86602L1.5 13.0622C0.833332 13.4471 3.43203e-07 12.966 3.76852e-07 12.1962L8.31114e-07 1.80385C8.64763e-07 1.03405 0.833334 0.552922 1.5 0.937822L10.5 6.13397Z"
                      fill="#00D06C"
                    />
                  </svg>
                </button>
              </div>

              <div class="card__content">
                <AppText size="14" line-height="16" class="mb-10" weight="600">
                  O'qituvchi:
                  {{
                    teacher.firstName +
                    " " +
                    teacher.lastName +
                    " " +
                    teacher.middleName
                  }}
                </AppText>

                <AppText class="color-text" size="14" line-height="24">
                  {{ course.durationHour }} soat.
                  {{ course.durationMinute }} daqiqa
                </AppText>

                <div
                  class="d-flex justify-space-between flex-wrap align-center"
                >
                  <AppText
                    weight="700"
                    :size="isMobileSmall ? 16 : 18"
                    class="mr-20 mt-20"
                    line-height="21"
                  >
                    {{ this.currencyFormat(course.price) }} so'm
                  </AppText>

                  <AppButton
                    :sides="isDesktopSmall ? 10 : 20"
                    :font-size="isMobileSmall ? 14 : 16"
                    :height="isMobileSmall ? 40 : '50'"
                    theme="main"
                    class="mt-20"
                    @click="startCourse"
                  >
                    Kursni boshlash
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AppText size="16" line-height="24" class="mb-20" weight="500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui nam
          voluptates tempore dignissimos soluta consectetur mollitia sapiente
          nostrum fugiat, culpa beatae maiores aut error nisi sit iure ducimus
          quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          officia optio, officiis, ipsam pariatur perspiciatis velit excepturi
          laboriosam maiores similique voluptatibus. Sunt dicta accusantium
          inventore vero. Quia aspernatur ea error.
        </AppText>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../assets/styles/pages/detailed-page.scss";
import BlockWrap from "../../../components/shared-components/BlockWrap";
import AppButton from "../../../components/shared-components/AppButton";
import AppText from "../../../components/shared-components/AppText";
import { mapGetters } from "vuex";

export default {
  name: "AppVideoCourse",
  components: { AppButton, BlockWrap, AppText },
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
          contentList: [],
          id: 121,
          name: "Kirish",
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

<style lang="scss" scoped>
.detailed-page {
  .content__main {
    overflow: visible;
  }
}

.files__item:hover {
  border: 1px solid #00ea79;
  cursor: pointer;
}
</style>
