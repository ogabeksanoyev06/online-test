<template>
  <div class="counts py-60">
    <div class="container">
      <div class="items">
        <div class="items_item" data-aos="fade-up" data-aos-duration="200">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
              ></path>
            </svg>
          </div>
          <span class="purecounter"> 150000 </span>
          <span class="">+</span>
          <p>Foydalanuvchilar soni</p>
        </div>
        <div class="items_item" data-aos="fade-up" data-aos-duration="400">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M12 0.585938L18 6.58594V9.00024H22V19.0002H23V21.0002H1V19.0002H2V9.00024H6V6.58594L12 0.585938ZM18 19.0002H20V11.0002H18V19.0002ZM6 11.0002H4V19.0002H6V11.0002ZM8 7.41436V19.0002H11V12.0002H13V19.0002H16V7.41436L12 3.41436L8 7.41436Z"
              ></path>
            </svg>
          </div>
          <span class="purecounter"> 1000 </span>
          <span class="">+</span>
          <p>Maktablar soni</p>
        </div>
        <div class="items_item" data-aos="fade-up" data-aos-duration="600">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
              ></path>
            </svg>
          </div>
          <span class="purecounter"> 250000 </span>
          <span class="">+</span>
          <p>Testlar soni</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppCounts",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.counts {
  background-color: #eeeef5;
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  &_item {
    padding: 40px 10px;
    width: 100%;
    position: relative;
    text-align: center;
    background: #fff;
    border-radius: 0.5rem;
    .icon {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 24px;
      background: #3165cb;
      color: #fff;
      border-radius: 50px;
      width: 48px;
      height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    span {
      font-size: 36px;
      display: inline;
      font-weight: 600;
      color: #3165cb;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      color: #000;
    }
  }
}
@media (max-width: 876px) {
  .items {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }
}
@media (max-width: 500px) {
  .items {
    grid-template-columns: 1fr;
  }
}
</style>
