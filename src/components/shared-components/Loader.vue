<template>
  <div class="lds-ring">
    <span class="ant-spin-dot ant-spin-dot-spin">
      <i class="ant-spin-dot-item"></i>
      <i class="ant-spin-dot-item"></i>
      <i class="ant-spin-dot-item"></i>
      <i class="ant-spin-dot-item"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "AppLoader",
};
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
}
.ant-spin-dot {
  position: relative;
  display: inline-block;
  font-size: 20px;
  width: 1em;
  height: 1em;

  transform: rotate(45deg);
  animation-name: css-pr0fja-antRotate;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.ant-spin-dot-item {
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: #1677ff;
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
  animation-name: css-pr0fja-antSpinMove;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.ant-spin-dot-item:nth-child(1) {
  top: 0;
  inset-inline-start: 0;
}

.ant-spin-dot-item:nth-child(2) {
  top: 0;
  inset-inline-end: 0;
  animation-delay: 0.4s;
}

.ant-spin-dot-item:nth-child(3) {
  inset-inline-end: 0;
  bottom: 0;
  animation-delay: 0.8s;
}
.ant-spin-dot-item:nth-child(4) {
  bottom: 0;
  inset-inline-start: 0;
  animation-delay: 1.2s;
}

@keyframes css-pr0fja-antSpinMove {
  100% {
    opacity: 1;
  }
}
@keyframes css-pr0fja-antRotate {
  100% {
    transform: rotate(405deg);
  }
}
</style>
