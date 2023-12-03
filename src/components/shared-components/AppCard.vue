<template>
  <div class="course">
    <div class="course-card">
      <div class="course-card-header">
        <div class="d-flex justify-space-between align-center mb-10">
          <AppText
            size="14"
            line-height="20"
            weight="600"
            class="color-green-2"
          >
            {{ modules_count }} modullar | {{ lessons_count }} darslar
          </AppText>
          <div class="course-icons-hover d-flex align-center gap-10">
            <span class="icon" @click="addToCart">
              <svg
                class="mx-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_455_5967)">
                  <path
                    d="M7.5 22.5C8.32843 22.5 9 21.8284 9 21C9 20.1716 8.32843 19.5 7.5 19.5C6.67157 19.5 6 20.1716 6 21C6 21.8284 6.67157 22.5 7.5 22.5Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M18 22.5C18.8284 22.5 19.5 21.8284 19.5 21C19.5 20.1716 18.8284 19.5 18 19.5C17.1716 19.5 16.5 20.1716 16.5 21C16.5 21.8284 17.1716 22.5 18 22.5Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M21 5.24991H4.365L3.75 2.09991C3.71494 1.92795 3.62068 1.77374 3.48364 1.6641C3.3466 1.55447 3.17546 1.49637 3 1.49991H0V2.99991H2.385L5.25 17.3999C5.28506 17.5719 5.37932 17.7261 5.51636 17.8357C5.6534 17.9453 5.82454 18.0034 6 17.9999H19.5V16.4999H6.615L6 13.4999H19.5C19.6734 13.5041 19.8429 13.4482 19.9796 13.3415C20.1163 13.2348 20.2119 13.0841 20.25 12.9149L21.75 6.16491C21.7751 6.05363 21.7745 5.93808 21.7483 5.82706C21.722 5.71604 21.6708 5.61247 21.5985 5.52424C21.5261 5.436 21.4347 5.36543 21.3309 5.3179C21.2272 5.27036 21.114 5.24711 21 5.24991ZM18.9 11.9999H5.715L4.665 6.74991H20.0625L18.9 11.9999Z"
                    fill="#fff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_455_5967">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span class="icon" @click="addToFavourite">
              <svg
                class="like-icon"
                :class="isFavourite ? 'active' : ''"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8375 1.5C16.3836 1.49954 16.9242 1.6081 17.4278 1.81931C17.9313 2.03052 18.3877 2.34014 18.77 2.73C19.5578 3.52979 19.9994 4.60737 19.9994 5.73C19.9994 6.85264 19.5578 7.93022 18.77 8.73L11 16.5975L3.23001 8.73C2.4422 7.93022 2.00061 6.85264 2.00061 5.73C2.00061 4.60737 2.4422 3.52979 3.23001 2.73C3.61258 2.34042 4.06895 2.03096 4.57245 1.81972C5.07595 1.60848 5.6165 1.49968 6.16251 1.49968C6.70853 1.49968 7.24908 1.60848 7.75258 1.81972C8.25608 2.03096 8.71245 2.34042 9.09501 2.73L11 4.68L12.8975 2.745C13.2787 2.35049 13.7355 2.0369 14.2407 1.82298C14.7458 1.60906 15.2889 1.49921 15.8375 1.5ZM15.8375 2.01214e-06C15.0917 -0.000630028 14.3533 0.147643 13.6656 0.436128C12.9779 0.724614 12.3547 1.1475 11.8325 1.68L11 2.52L10.1675 1.68C9.64473 1.14846 9.02136 0.726309 8.33376 0.438145C7.64615 0.149981 6.90806 0.00157307 6.16251 0.00157307C5.41697 0.00157307 4.67888 0.149981 3.99127 0.438145C3.30367 0.726309 2.6803 1.14846 2.15751 1.68C1.09392 2.76272 0.497986 4.21977 0.497986 5.7375C0.497986 7.25523 1.09392 8.71228 2.15751 9.795L11 18.75L19.8425 9.795C20.9061 8.71228 21.502 7.25523 21.502 5.7375C21.502 4.21977 20.9061 2.76272 19.8425 1.68C19.3199 1.14818 18.6966 0.725734 18.0089 0.437298C17.3213 0.148862 16.5832 0.000207074 15.8375 2.01214e-06Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="course-card-photo mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
          >
            <path
              d="M75.1753 75C75.1753 61.193 86.3682 50.0001 100.175 50.0001C113.982 50.0001 125.175 61.1933 125.175 75C125.175 88.8073 113.982 99.9999 100.175 99.9999C86.3679 99.9999 75.1753 88.807 75.1753 75Z"
              fill="#00BCFF"
            />
            <path
              d="M25.1753 125C25.1753 111.193 36.3682 100 50.1752 100L63.498 92.9663L75.1751 100V125C75.1751 138.807 63.9822 150 50.1752 150C36.3682 150 25.1753 138.807 25.1753 125Z"
              fill="#00CF7F"
            />
            <path
              d="M75.1755 0L61.5718 23.6338L75.1755 49.9998H99.8247C113.632 49.9998 124.825 38.8069 124.825 24.9999C124.825 11.1929 113.632 0 99.8247 0H75.1755Z"
              fill="#FF7361"
            />
            <path
              d="M24.8242 24.9999C24.8242 38.8069 36.0171 49.9998 49.8241 49.9998L63.0859 55.1221L75.1747 49.9998V0H49.8238C36.0171 0 24.8242 11.1929 24.8242 24.9999Z"
              fill="#FF4D12"
            />
            <path
              d="M25.1753 75C25.1753 88.8073 36.3682 99.9999 50.1752 99.9999H75.1751V49.9998H50.1752C36.3682 49.9998 25.1753 61.193 25.1753 75Z"
              fill="#B659FF"
            />
          </svg>
        </div>
        <div>
          <AppText
            size="14"
            line-height="20"
            weight="500"
            class="color-green-2"
          >
            Ta'lim tili
          </AppText>
          <AppText
            size="16"
            line-height="24"
            weight="600"
            class="color-green-2"
          >
            {{ language }}
          </AppText>
        </div>
      </div>
      <div class="course-card-body">
        <AppText
          class="color-green-2 pointer"
          :size="isMobileSmall ? 18 : isMobile ? 20 : 22"
          :class="isMobileSmall ? 'mb-5' : 'mb-10'"
          weight="700"
          @click="goToLink(i)"
        >
          {{ title }}
        </AppText>
        <div>
          <div class="d-flex align-center mb-10">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-5"
            >
              <path
                d="M9.45478 13.25C12.2016 13.25 14.6035 14.4313 15.9101 16.1935L14.5286 16.847C13.4653 15.5868 11.5903 14.75 9.45478 14.75C7.3192 14.75 5.44423 15.5868 4.38093 16.847L3 16.1929C4.30665 14.431 6.70831 13.25 9.45478 13.25ZM9.45478 2C11.5258 2 13.2048 3.67894 13.2048 5.75V8C13.2048 10.0166 11.6131 11.6614 9.61745 11.7466L9.45478 11.75C7.38369 11.75 5.70476 10.071 5.70476 8V5.75C5.70476 3.73344 7.29649 2.08864 9.2921 2.00347L9.45478 2ZM9.45478 3.5C8.2565 3.5 7.27701 4.43669 7.20857 5.6178L7.20475 5.75V8C7.20475 9.24267 8.2121 10.25 9.45478 10.25C10.6531 10.25 11.6325 9.31332 11.701 8.13223L11.7048 8V5.75C11.7048 4.50736 10.6974 3.5 9.45478 3.5Z"
                fill="#222"
              />
            </svg>
            <AppText size="14" line-height="20" weight="600">
              <span style="color: #222"> {{ student_count }} o'quvchi</span>
            </AppText>
          </div>
          <AppText
            :size="isMobileSmall ? '16' : '18'"
            :line-height="isMobileSmall ? '22' : '24'"
            :class="isMobileSmall ? 'mb-10' : 'mb-20'"
            weight="600"
            class="color-green-2 mb-5"
          >
            {{ teacher }}
          </AppText>
          <AppText
            :size="isMobileSmall ? '16' : '18'"
            :line-height="isMobileSmall ? '24' : '26'"
            weight="600"
            class="color-orange mb-20"
          >
            {{ currencyFormat(price) }}
          </AppText>
          <AppButton
            theme="green"
            :font-size="16"
            :sides="20"
            :height="45"
            :radius="50"
            weight="500"
            class="d-flex align-center justify-content-center"
            :disabled="trailerBtn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              class="mr-10"
            >
              <path
                d="M16.6665 4.16669C17.2418 4.16669 17.7082 4.63306 17.7082 5.20835V9.58335L23.1387 5.78201C23.3743 5.61705 23.6991 5.67436 23.864 5.91002C23.9253 5.99756 23.9582 6.10183 23.9582 6.2087V18.7914C23.9582 19.079 23.7249 19.3122 23.4373 19.3122C23.3305 19.3122 23.2262 19.2793 23.1387 19.218L17.7082 15.4167V19.7917C17.7082 20.367 17.2418 20.8334 16.6665 20.8334H2.08317C1.50788 20.8334 1.0415 20.367 1.0415 19.7917V5.20835C1.0415 4.63306 1.50788 4.16669 2.08317 4.16669H16.6665ZM15.6248 6.25002H3.12484V18.75H15.6248V6.25002ZM7.70817 9.19655C7.78741 9.19655 7.86501 9.21915 7.93187 9.26169L12.4683 12.1485C12.6624 12.272 12.7196 12.5296 12.5961 12.7238C12.5634 12.7751 12.5197 12.8188 12.4683 12.8516L7.93187 15.7384C7.73772 15.8619 7.48019 15.8047 7.35665 15.6105C7.3141 15.5437 7.2915 15.4661 7.2915 15.3868V9.61322C7.2915 9.3831 7.47806 9.19655 7.70817 9.19655ZM21.8748 9.20972L17.7082 12.1261V12.874L21.8748 15.7903V9.20972Z"
                fill="white"
              />
            </svg>
            Treylerni ko'rish
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import "../../assets/styles/components/app-card.scss";
import AppButton from "./AppButton.vue";

export default {
  name: "AppCard",
  components: { AppButton },
  props: {
    courseId: Number,
    title: String,
    modules_count: Number,
    lessons_count: Number,
    image: String,
    language: String,
    trailer: String,
    student_count: {
      type: Number,
      default: 0,
    },
    teacher: String,
    trailerBtn: Boolean,
    level: String,
    isFree: Boolean,
    price: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    inBasket() {
      return this.isCourseInBasketSolid(this.courseId);
    },
    isFavourite() {
      return this.isCourseInFavouritesList(this.courseId);
    },
  },
  methods: {
    ...mapMutations([
      "setCoursesOnBasket",
      "setFavouriteCourses",
      "removeCoursesOnBasket",
      "removefavouriteCourses",
    ]),
    goToLink() {
      this.$router.push({
        name: "detailed-page",
        params: { course_id: this.courseId },
      });
    },
    addToCart() {
      if (this.inBasket) {
        this.removeCoursesOnBasket(this.courseId);
        this.warningNotification("Kurs savatdan o'chirildi");
      } else {
        const courseData = {
          id: this.courseId,
          title: this.title,
          modules_count: this.modules_count,
          lessons_count: this.lessons_count,
          language: this.language,
          teacher: this.teacher,
          trailer: this.trailer,
          image: this.image,
          price: this.price,
        };
        this.setCoursesOnBasket({
          courseId: this.courseId,
          data: courseData,
        });
        this.successNotification("Kurs savatga qo'shildi");
      }
    },
    addToFavourite() {
      if (this.isFavourite) {
        this.removefavouriteCourses(this.courseId);
        this.warningNotification("Kurs sevimlilardan o'chirildi");
      } else {
        const courseData = {
          id: this.courseId,
          title: this.title,
          modules_count: this.modules_count,
          lessons_count: this.lessons_count,
          language: this.language,
          teacher: this.teacher,
          trailer: this.trailer,
          image: this.image,
          price: this.price,
        };
        this.setFavouriteCourses({
          courseId: this.courseId,
          data: courseData,
        });
        this.successNotification("Kurs sevimlilarga qo'shildi");
      }
    },
  },
};
</script>

<style scoped></style>
