<template>
  <div class="edu-types">
    <div class="container">
      <div class="edu-types-wrapper mb-5">
        <h2 class="main-title">Platformaning xususiyatlari</h2>
        <div class="slider_buttons">
          <button class="slider_button-left">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_907_1552)">
                <path
                  d="M7.5 12L15 4.5L16.05 5.55L9.6 12L16.05 18.45L15 19.5L7.5 12Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_907_1552">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
          <button class="slider_button-right">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_907_1552)">
                <path
                  d="M7.5 12L15 4.5L16.05 5.55L9.6 12L16.05 18.45L15 19.5L7.5 12Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_907_1552">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <swiper>
          <swiper-slide>
            <div class="edu-types-card">
              <div class="d-flex justify-content-between align-center">
                <h3 class="text-white">Uyga vazifalar</h3>
                <div class="display-desctop">
                  <lord-icon
                    src="https://cdn.lordicon.com/zczmziog.json"
                    target=".screens"
                    trigger="loop"
                    colors="primary: #fff,secondary:#A0E82F"
                    style="width: 100px; height: 100px"
                  >
                  </lord-icon>
                </div>
              </div>
              <p class="text-white">
                Kurslarda olgan bilimlaringizni mustahkamlashga yordam beradi
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
