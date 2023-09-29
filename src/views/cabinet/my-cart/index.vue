<template>
  <div class="my-cart py-30">
    <div class="container">
      <div class="section__top mb-20">
        <app-text
          :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
          :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
          weight="700"
        >
          Mening savatcham
        </app-text>
        <app-button></app-button>
      </div>
      <div class="basket-space">
        <div>
          <div class="basket-course-cards-wrapper">
            <div class="basket-card" v-for="item in 1" :key="item">
              <div class="basket-card-content">
                <div class="position-relative d-flex align-center flex-wrap">
                  <div class="basket-card-image">
                    <img
                      src="https://topskill.uz/_next/image?url=https%3A%2F%2Ftopskill-bucket2.s3.ap-south-1.amazonaws.com%2Fcourses%2Fbanner_files%2F01885c1e-e3d2-7b85-86c0-8db7f864ecdd.png&w=2048&q=75"
                      class="bg-video"
                    />
                  </div>
                  <div v-if="isDesktopMedium">
                    <h3 class="basket-course-title">Scratch</h3>
                    <p class="basket-course-author">Javokhir Komiljonov</p>
                  </div>
                </div>
                <div>
                  <div class="d-flex justify-space-between">
                    <div v-if="!isDesktopMedium">
                      <h3 class="basket-course-title">Scratch</h3>
                      <p class="basket-course-author">Javokhir Komiljonov</p>
                    </div>
                    <div class="card-right">
                      <div class="card-right-item">
                        <p class="basket-modules">7 modullar | 39 darslar</p>
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1026_2106)">
                            <path
                              d="M7.47205 4.23023C9.40433 2.93913 11.6761 2.25 14 2.25C17.1163 2.25 20.105 3.48794 22.3085 5.6915C24.5121 7.89505 25.75 10.8837 25.75 14C25.75 16.3239 25.0609 18.5957 23.7698 20.5279C22.4787 22.4602 20.6436 23.9663 18.4965 24.8556C16.3495 25.7449 13.987 25.9776 11.7077 25.5242C9.42842 25.0709 7.33477 23.9518 5.6915 22.3085C4.04823 20.6652 2.92915 18.5716 2.47578 16.2923C2.0224 14.013 2.25509 11.6505 3.14442 9.50347C4.03375 7.35644 5.53978 5.52134 7.47205 4.23023Z"
                              stroke="#045140"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1026_2106">
                              <rect width="28" height="28" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <!-- <svg
                          class="mb-auto"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1026_2121)">
                            <path
                              d="M14 1.75C11.5772 1.75 9.20877 2.46845 7.19427 3.8145C5.17977 5.16054 3.60965 7.07373 2.68248 9.31213C1.75531 11.5505 1.51272 14.0136 1.98539 16.3899C2.45805 18.7661 3.62475 20.9489 5.33795 22.6621C7.05114 24.3752 9.23388 25.542 11.6101 26.0146C13.9864 26.4873 16.4495 26.2447 18.6879 25.3175C20.9263 24.3904 22.8395 22.8202 24.1855 20.8057C25.5316 18.7912 26.25 16.4228 26.25 14C26.25 10.7511 24.9594 7.63526 22.6621 5.33794C20.3647 3.04062 17.2489 1.75 14 1.75ZM12.25 18.8919L7.87501 14.5169L9.26678 13.125L12.25 16.1081L18.7338 9.625L20.13 11.0127L12.25 18.8919Z"
                              fill="#82D300"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1026_2121">
                              <rect width="28" height="28" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg> -->
                      </div>
                      <div class="card-right-item">
                        <app-button
                          theme="main"
                          :font-size="14"
                          :sides="10"
                          :height="40"
                          weight="500"
                          class="d-flex align-center"
                        >
                          <svg
                            class="mr-5"
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.125 13.25H1.5C1.16848 13.25 0.850537 13.1183 0.616116 12.8839C0.381696 12.6495 0.25 12.3315 0.25 12V2C0.25 1.66848 0.381696 1.35054 0.616116 1.11612C0.850537 0.881696 1.16848 0.75 1.5 0.75H12.125C12.4565 0.75 12.7745 0.881696 13.0089 1.11612C13.2433 1.35054 13.375 1.66848 13.375 2V4.5375L16.7625 2.11875C16.8558 2.05233 16.9655 2.01282 17.0797 2.00452C17.1939 1.99623 17.3082 2.01947 17.4101 2.07171C17.512 2.12395 17.5976 2.20318 17.6576 2.30075C17.7175 2.39833 17.7495 2.51049 17.75 2.625V11.375C17.7495 11.4895 17.7175 11.6017 17.6576 11.6992C17.5976 11.7968 17.512 11.8761 17.4101 11.9283C17.3082 11.9805 17.1939 12.0038 17.0797 11.9955C16.9655 11.9872 16.8558 11.9477 16.7625 11.8812L13.375 9.4625V12C13.375 12.3315 13.2433 12.6495 13.0089 12.8839C12.7745 13.1183 12.4565 13.25 12.125 13.25ZM1.5 2V12H12.125V8.25C12.1255 8.13549 12.1575 8.02333 12.2174 7.92575C12.2774 7.82818 12.363 7.74895 12.4649 7.69671C12.5668 7.64447 12.6811 7.62123 12.7953 7.62952C12.9095 7.63782 13.0192 7.67733 13.1125 7.74375L16.5 10.1625V3.8375L13.1125 6.25625C13.0192 6.32267 12.9095 6.36218 12.7953 6.37048C12.6811 6.37877 12.5668 6.35553 12.4649 6.30329C12.363 6.25105 12.2774 6.17182 12.2174 6.07425C12.1575 5.97667 12.1255 5.86451 12.125 5.75V2H1.5Z"
                              fill="#A0E82F"
                            ></path>
                          </svg>
                          Treylerni ko'rish
                        </app-button>
                        <span class="pointer">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_1026_2196)">
                              <path d="M10.5 9H9V18H10.5V9Z" fill="#000"></path>
                              <path d="M15 9H13.5V18H15V9Z" fill="#000"></path>
                              <path
                                d="M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6Z"
                                fill="#000"
                              ></path>
                              <path d="M15 1.5H9V3H15V1.5Z" fill="#000"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1026_2196">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="basket-card">
              <div class="basket-card-content">
                <div class="position-relative d-flex align-center flex-wrap">
                  <div class="basket-card-image">
                    <img
                      src="https://topskill.uz/_next/image?url=https%3A%2F%2Ftopskill-bucket2.s3.ap-south-1.amazonaws.com%2Fcourses%2Fbanner_files%2F01885c1e-e3d2-7b85-86c0-8db7f864ecdd.png&w=2048&q=75"
                      class="bg-video"
                    />
                  </div>
                  <div v-if="isDesktopMedium">
                    <h3 class="basket-course-title">Scratch</h3>
                    <p class="basket-course-author">Javokhir Komiljonov</p>
                  </div>
                </div>
                <div>
                  <div class="d-flex justify-space-between">
                    <div v-if="!isDesktopMedium">
                      <h3 class="basket-course-title">Scratch</h3>
                      <p class="basket-course-author">Javokhir Komiljonov</p>
                    </div>
                    <div class="card-right">
                      <div class="card-right-item">
                        <p class="basket-modules">7 modullar | 39 darslar</p>

                        <svg
                          class="mb-auto"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1026_2121)">
                            <path
                              d="M14 1.75C11.5772 1.75 9.20877 2.46845 7.19427 3.8145C5.17977 5.16054 3.60965 7.07373 2.68248 9.31213C1.75531 11.5505 1.51272 14.0136 1.98539 16.3899C2.45805 18.7661 3.62475 20.9489 5.33795 22.6621C7.05114 24.3752 9.23388 25.542 11.6101 26.0146C13.9864 26.4873 16.4495 26.2447 18.6879 25.3175C20.9263 24.3904 22.8395 22.8202 24.1855 20.8057C25.5316 18.7912 26.25 16.4228 26.25 14C26.25 10.7511 24.9594 7.63526 22.6621 5.33794C20.3647 3.04062 17.2489 1.75 14 1.75ZM12.25 18.8919L7.87501 14.5169L9.26678 13.125L12.25 16.1081L18.7338 9.625L20.13 11.0127L12.25 18.8919Z"
                              fill="#82D300"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1026_2121">
                              <rect width="28" height="28" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div class="card-right-item">
                        <app-button
                          theme="main"
                          :font-size="14"
                          :sides="10"
                          :height="40"
                          weight="500"
                          class="d-flex align-center"
                        >
                          <svg
                            class="mr-5"
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.125 13.25H1.5C1.16848 13.25 0.850537 13.1183 0.616116 12.8839C0.381696 12.6495 0.25 12.3315 0.25 12V2C0.25 1.66848 0.381696 1.35054 0.616116 1.11612C0.850537 0.881696 1.16848 0.75 1.5 0.75H12.125C12.4565 0.75 12.7745 0.881696 13.0089 1.11612C13.2433 1.35054 13.375 1.66848 13.375 2V4.5375L16.7625 2.11875C16.8558 2.05233 16.9655 2.01282 17.0797 2.00452C17.1939 1.99623 17.3082 2.01947 17.4101 2.07171C17.512 2.12395 17.5976 2.20318 17.6576 2.30075C17.7175 2.39833 17.7495 2.51049 17.75 2.625V11.375C17.7495 11.4895 17.7175 11.6017 17.6576 11.6992C17.5976 11.7968 17.512 11.8761 17.4101 11.9283C17.3082 11.9805 17.1939 12.0038 17.0797 11.9955C16.9655 11.9872 16.8558 11.9477 16.7625 11.8812L13.375 9.4625V12C13.375 12.3315 13.2433 12.6495 13.0089 12.8839C12.7745 13.1183 12.4565 13.25 12.125 13.25ZM1.5 2V12H12.125V8.25C12.1255 8.13549 12.1575 8.02333 12.2174 7.92575C12.2774 7.82818 12.363 7.74895 12.4649 7.69671C12.5668 7.64447 12.6811 7.62123 12.7953 7.62952C12.9095 7.63782 13.0192 7.67733 13.1125 7.74375L16.5 10.1625V3.8375L13.1125 6.25625C13.0192 6.32267 12.9095 6.36218 12.7953 6.37048C12.6811 6.37877 12.5668 6.35553 12.4649 6.30329C12.363 6.25105 12.2774 6.17182 12.2174 6.07425C12.1575 5.97667 12.1255 5.86451 12.125 5.75V2H1.5Z"
                              fill="#A0E82F"
                            ></path>
                          </svg>
                          Treylerni ko'rish
                        </app-button>
                        <span class="pointer">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_1026_2196)">
                              <path d="M10.5 9H9V18H10.5V9Z" fill="#000"></path>
                              <path d="M15 9H13.5V18H15V9Z" fill="#000"></path>
                              <path
                                d="M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6Z"
                                fill="#000"
                              ></path>
                              <path d="M15 1.5H9V3H15V1.5Z" fill="#000"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1026_2196">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar">
          <div class="sidebar-sticky">
            <div class="sidebar-form__detail-list">
              <div class="sidebar-form__detail-row">
                <span>Qiymati:</span><span>19 054 000 so'm</span>
              </div>
              <div class="sidebar-form__detail-row">
                <span>Promokod:</span><span>0 so'm</span>
              </div>
              <div class="sidebar-form__detail-row">
                <span>Ishlatilgan bonus:</span><span>0 so'm</span>
              </div>
              <div class="sidebar-form__detail-row">
                <span>Naqd pul to'lash uchun komissiya miqdori:</span
                ><span>0 %</span>
              </div>
              <div class="sidebar-form__detail-row">
                <span>Yetkazib berish summasi:</span><span>0 so'm</span>
              </div>
            </div>
            <hr
              style="
                background-color: #e8e8e8;
                height: 1px;
                margin: 16px 0;
                width: 100%;
              "
            />
            <div class="sidebar-form__detail-list mb-20">
              <div class="sidebar-form__detail-row">
                <span>To'lov turi:</span><span>19 054 000 so'm</span>
              </div>
              <div class="sidebar-form__detail-row">
                <span>Buyurtma turi:</span><span><b>To'liq to'lash</b></span>
              </div>
            </div>
            <div class="sidebar-form__bottom">
              <AppButton
                theme="secondary"
                :font-size="16"
                :sides="20"
                :radius="15"
                :height="isMobile ? '40' : '50'"
                weight="500"
                class="w-100"
                @click="$router.push({ path: '/' })"
              >
                Sotib olish
              </AppButton>
              <div class="sidebar-form__bottom-offer">
                "Buyurtma berish" tugmasi bosish orqali
                <a href="#" class=""> ommaviy taklif shartnomasiga </a>
                roziman
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="empty-page">
        <div class="text-center center-content">
          <img src="/images/cart.webp" alt="" />
          <p class="title">Savat bo‘sh</p>
          <p class="desc">
            Kurslarni tanlash yoki qidiruvda kerakli narsani topish uchun asosiy
            sahifaga qarang
          </p>
          <AppButton
            theme="main"
            radius="10"
            :font-size="16"
            :sides="20"
            :height="45"
            weight="500"
          >
            Asosiy sahifaga o'ting
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../assets/styles/pages/cabinet.scss";
import { mapGetters, mapMutations } from "vuex";
import AppButton from "@/components/shared-components/AppButton.vue";

export default {
  name: "MyCart",
  components: { AppButton },
  data() {
    return {
      coursesListInBasket: [
        {
          courseName: null,
          courseDescription: null,
          coursePrice: null,
        },
      ],
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters(["coursesOnBasket"]),
  },
  methods: {
    ...mapMutations(["setCoursesOnBasket"]),
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.my-cart {
  background: rgb(249, 249, 249);
}
.basket-space {
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-gap: 24px;
}
.sidebar {
  max-width: 450px;
  width: 100%;
  position: relative;
  &-sticky {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.06);
    border-radius: 15px;
    padding: 24px;
    background-color: #fff;
    position: sticky !important;
    top: 100px;
  }
  &-form__detail-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &-form__detail-row {
    align-items: flex-start;
    display: flex;
    gap: 24px;
    justify-content: space-between;
    span {
      color: #111;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      max-width: 50%;
      text-align: right;
    }
    span:first-child {
      font-weight: 700;
      text-align: left;
    }
  }
  &-form__bottom {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &-form__bottom-offer {
    color: #999;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
}
.basket-course-cards-wrapper {
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  padding: 24px;
  background-color: #fff;
}
.basket-card {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 24px;
  margin-bottom: 24px;
  &-content {
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-gap: 0 24px;
  }
  &-image {
    width: 15rem;
    border-radius: 10px;
    overflow: hidden;
    img {
      display: block;
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }
}
.basket-course-title {
  max-width: 229px;
  font-weight: 800;
  font-size: 25px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #222;
}
.basket-course-author {
  font-weight: 500;
  font-size: 18px;
  line-height: 156%;
  letter-spacing: -0.02em;
  color: #222;
  opacity: 0.4;
  margin: 10px 0 8px;
}
.card-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
}
.basket-modules {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #000;
  margin-right: 10px;
}
.empty-page {
  display: flex;
  justify-content: center;
  align-items: center;
  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 370px;
    width: 100%;
    text-align: center;
  }
  img {
    width: 100%;
    height: auto;
  }
  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.167619px;
  }
  .desc {
    font-weight: 400;
    font-size: 17.6px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.167619px;
    margin: 20px 0 29px;
  }
}
@media (max-width: 1200px) {
  .basket-card {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 24px;
    margin-bottom: 24px;
    &-content {
      display: grid;
      grid-template-columns: 1fr;
    }
    &-image {
      width: 10rem;
    }
  }
  .basket-course-title {
    display: inline-block;
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -0.02em;
    color: #222;
    margin-left: 10px;
  }
  .basket-course-author {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.02em;
    color: #222;
    opacity: 0.4;
    margin: 5px 0;
    margin-left: 10px;
  }
  .card-right {
    width: 100%;
    margin-top: 20px;
    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
  }
}
@media (max-width: 991px) {
  .basket-space {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }

  .basket-card {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 24px;
    margin-bottom: 24px;
    &-content {
      display: grid;
      grid-template-columns: 1fr;
    }
    &-image {
      width: 6.75rem;
    }
  }
  .basket-course-title {
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: #222;
    margin-left: 10px;
  }
  .basket-course-author {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #222;
    opacity: 0.4;
    margin: 0px 0;
    margin-left: 10px;
  }
}
</style>
