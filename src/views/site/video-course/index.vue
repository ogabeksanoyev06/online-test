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
      </div>
      <div class="tab__main">
        <div class="section__top">
          <div class="section__top-left">
            <div class="tab">
              <button
                class="tab__item"
                v-for="(subject, index) in subjectTree"
                @click="selectSubject(subject.id)"
                :key="index"
              >
                {{ subject.name }}
              </button>
              <button class="tab__item active">3D dizayner</button>
            </div>
          </div>
        </div>
        <div class="tab__body">
          <AppText size="16" line-height="24" weight="500" class="mb-30">
            Veb-saytlar va dasturlarni yaratishning har bir yo'nalishi o'ziga
            xos ko'nikmalar to'plamini talab qiladi. Sizni zamonaviy zamonaviy,
            tezkor va to'liq stack veb-ishlab chiqarish amaliyoti va
            ko'nikmalarini tezlashtirishga yo'naltirish uchun ko'plab kurslarni
            taklif etamiz.
          </AppText>

          <AppText size="16" line-height="20" weight="500" class="mb-30">
            Tanlangan fan bo'yicha kurs mavjud emas!
          </AppText>
          <div class="course">
            <div class="course-card" v-for="(item, i) in 8" :key="i">
              <div class="course-card-header">
                <img
                  src="https://topskill.uz/_next/image?url=https%3A%2F%2Ftopskill-bucket2.s3.ap-south-1.amazonaws.com%2Fcourses%2Fbanner_files%2F0188580d-c10f-78bf-a7c0-5c8a77ecfc21.jpeg&w=3840&q=75"
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    inset: 0px;
                    color: transparent;
                  "
                />
                <div class="d-flex justify-space-between align-center">
                  <p class="mb-0">7 modullar | 134 darslar</p>
                  <div class="course-icons-hover d-flex align-center">
                    <span>
                      <svg
                        class="mx-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
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
                    <svg
                      class="like-icon"
                      width="22"
                      height="19"
                      viewBox="0 0 22 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style="margin-left: 10px"
                    >
                      <path
                        d="M15.8375 1.5C16.3836 1.49954 16.9242 1.6081 17.4278 1.81931C17.9313 2.03052 18.3877 2.34014 18.77 2.73C19.5578 3.52979 19.9994 4.60737 19.9994 5.73C19.9994 6.85264 19.5578 7.93022 18.77 8.73L11 16.5975L3.23001 8.73C2.4422 7.93022 2.00061 6.85264 2.00061 5.73C2.00061 4.60737 2.4422 3.52979 3.23001 2.73C3.61258 2.34042 4.06895 2.03096 4.57245 1.81972C5.07595 1.60848 5.6165 1.49968 6.16251 1.49968C6.70853 1.49968 7.24908 1.60848 7.75258 1.81972C8.25608 2.03096 8.71245 2.34042 9.09501 2.73L11 4.68L12.8975 2.745C13.2787 2.35049 13.7355 2.0369 14.2407 1.82298C14.7458 1.60906 15.2889 1.49921 15.8375 1.5ZM15.8375 2.01214e-06C15.0917 -0.000630028 14.3533 0.147643 13.6656 0.436128C12.9779 0.724614 12.3547 1.1475 11.8325 1.68L11 2.52L10.1675 1.68C9.64473 1.14846 9.02136 0.726309 8.33376 0.438145C7.64615 0.149981 6.90806 0.00157307 6.16251 0.00157307C5.41697 0.00157307 4.67888 0.149981 3.99127 0.438145C3.30367 0.726309 2.6803 1.14846 2.15751 1.68C1.09392 2.76272 0.497986 4.21977 0.497986 5.7375C0.497986 7.25523 1.09392 8.71228 2.15751 9.795L11 18.75L19.8425 9.795C20.9061 8.71228 21.502 7.25523 21.502 5.7375C21.502 4.21977 20.9061 2.76272 19.8425 1.68C19.3199 1.14818 18.6966 0.725734 18.0089 0.437298C17.3213 0.148862 16.5832 0.000207074 15.8375 2.01214e-06Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="course__lang">
                  Ta'lim tili <br />
                  <span class="course__lang-title">O'zbekcha</span>
                </p>
              </div>
              <div class="course-card-body">
                <h3 class="course-card-body-title">UX/UI Design</h3>
                <div>
                  <div class="d-flex align-center course-card-body-count">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-10"
                    >
                      <path
                        d="M8.00033 7.99992C9.84127 7.99992 11.3337 6.50753 11.3337 4.66658C11.3337 2.82564 9.84127 1.33325 8.00033 1.33325C6.15938 1.33325 4.66699 2.82564 4.66699 4.66658C4.66699 6.50753 6.15938 7.99992 8.00033 7.99992Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M8.00043 9.66675C4.66043 9.66675 1.94043 11.9067 1.94043 14.6667C1.94043 14.8534 2.0871 15.0001 2.27376 15.0001H13.7271C13.9138 15.0001 14.0604 14.8534 14.0604 14.6667C14.0604 11.9067 11.3404 9.66675 8.00043 9.66675Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p>257 o'quvchi</p>
                  </div>
                  <p class="course-card-body-name">Muhammad Jumayev</p>
                  <p class="course-card-body-price">247 000 so'm</p>
                  <app-button
                    @click="goToLink(i)"
                    theme="secondary"
                    :font-size="16"
                    :sides="20"
                    :height="40"
                    weight="500"
                    :radius="50"
                    class="d-flex align-center disabled"
                  >
                    <svg
                      class="mr-10"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.125 13.25H1.5C1.16848 13.25 0.850537 13.1183 0.616116 12.8839C0.381696 12.6495 0.25 12.3315 0.25 12V2C0.25 1.66848 0.381696 1.35054 0.616116 1.11612C0.850537 0.881696 1.16848 0.75 1.5 0.75H12.125C12.4565 0.75 12.7745 0.881696 13.0089 1.11612C13.2433 1.35054 13.375 1.66848 13.375 2V4.5375L16.7625 2.11875C16.8558 2.05233 16.9655 2.01282 17.0797 2.00452C17.1939 1.99623 17.3082 2.01947 17.4101 2.07171C17.512 2.12395 17.5976 2.20318 17.6576 2.30075C17.7175 2.39833 17.7495 2.51049 17.75 2.625V11.375C17.7495 11.4895 17.7175 11.6017 17.6576 11.6992C17.5976 11.7968 17.512 11.8761 17.4101 11.9283C17.3082 11.9805 17.1939 12.0038 17.0797 11.9955C16.9655 11.9872 16.8558 11.9477 16.7625 11.8812L13.375 9.4625V12C13.375 12.3315 13.2433 12.6495 13.0089 12.8839C12.7745 13.1183 12.4565 13.25 12.125 13.25ZM1.5 2V12H12.125V8.25C12.1255 8.13549 12.1575 8.02333 12.2174 7.92575C12.2774 7.82818 12.363 7.74895 12.4649 7.69671C12.5668 7.64447 12.6811 7.62123 12.7953 7.62952C12.9095 7.63782 13.0192 7.67733 13.1125 7.74375L16.5 10.1625V3.8375L13.1125 6.25625C13.0192 6.32267 12.9095 6.36218 12.7953 6.37048C12.6811 6.37877 12.5668 6.35553 12.4649 6.30329C12.363 6.25105 12.2774 6.17182 12.2174 6.07425C12.1575 5.97667 12.1255 5.86451 12.125 5.75V2H1.5Z"
                        fill="#fff"
                      ></path></svg
                    >Treylerni ko'rish
                  </app-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "VideoCourse",
  components: { AppButton },
  data() {
    return {
      course: "",
      subjectTree: [
        { id: 1, name: "Web dizayner" },
        { id: 2, name: "Frontend" },
        { id: 3, name: "Backend" },
        { id: 4, name: "Network administrator" },
      ],
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
    justify-content: center;
    &__item {
      border: 1px solid #024033;
      border-radius: 100px;
      padding: 9px 12px;
      font-size: 14px;
      line-height: 20px;
      margin: 0px 5px 10px;
      cursor: pointer;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      font-family: inherit;
      width: max-content;
      white-space: nowrap;
      &:hover {
        background-color: #024033;
        color: rgb(255, 255, 255);
        border: 1px solid transparent;
      }
      &.active {
        background-color: #024033;
        color: rgb(255, 255, 255);
        border: 1px solid transparent;
      }
    }
    &__body {
      padding: 0 20px 20px;
      border-top: 1px solid $border-color;
      padding-top: 30px;
    }
  }
}
.course {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
  .course-card {
    height: 100%;
    border: 1px solid #e8e8e8;
    border-radius: 15px;
    overflow: hidden;
    transition: 0.2s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    &:hover {
      box-shadow: 2px 2px 10px 0 #ececec;
      transform: translateY(-4px);
    }
  }
  .course-card-header {
    padding: 23px 20px 16px;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .course-icons-hover {
      opacity: 0;
      z-index: 1;
      transform: translateX(100%);
      transition: all 0.5s;
    }
    &:hover {
      .course-icons-hover {
        opacity: 1;
        transform: translateX(0%);
      }
    }
    p {
      font-weight: 400;
      font-size: 14px;
      letter-spacing: -0.02em;
      color: #fff;
      z-index: 1;
    }
    .course__lang .course__lang-title {
      font-weight: 700;
    }
  }
  .course-card-body {
    display: flex;
    height: calc(100% - 220px);
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px 30px;
    .course-card-body-title {
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      letter-spacing: -0.02em;
      color: #222;
      margin-bottom: 8px;
    }
    .course-card-body-name {
      font-weight: 500;
      font-size: 18px;
      line-height: 156%;
      letter-spacing: -0.02em;
      color: #222;
      opacity: 0.4;
      margin-bottom: 5px;
    }
    .course-card-body-count {
      font-weight: 500;
      font-size: 14px;
      line-height: 156%;
      color: #222;
      opacity: 0.4;
      margin-bottom: 5px;
    }
    .course-card-body-price {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.125rem;
      letter-spacing: -0.01em;
      color: #18a058;
      margin-bottom: 15px;
    }
  }
}
@media (max-width: 1200px) {
  .course {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
  }
}
@media (max-width: 876px) {
  .course {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }
}
@media (max-width: 576px) {
  .course {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
}
</style>
