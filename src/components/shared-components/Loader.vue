<template>
  <div class="main-loading">
    <div class="container">
      <div class="loader">
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-loading",
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.main-loading {
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container {
  height: 100vh;
  width: 100vw;
  font-family: Helvetica;
}

.loader {
  height: 20px;
  width: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.loader--dot {
  animation-name: loader;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  border: 2px solid white;
}
.loader--dot:first-child {
  background-color: #059669;
  animation-delay: 0.5s;
}
.loader--dot:nth-child(2) {
  background-color: #059669;
  animation-delay: 0.4s;
}
.loader--dot:nth-child(3) {
  background-color: #059669;
  animation-delay: 0.3s;
}
.loader--dot:nth-child(4) {
  background-color: #059669;
  animation-delay: 0.2s;
}
.loader--dot:nth-child(5) {
  background-color: #059669;
  animation-delay: 0.1s;
}
.loader--dot:nth-child(6) {
  background-color: #059669;
  animation-delay: 0s;
}
.loader--text {
  position: absolute;
  top: 200%;
  left: 0;
  right: 0;
  width: 4rem;
  margin: auto;
  color: #059669;
}
.loader--text:after {
  content: "Loading";
  font-weight: bold;
  animation-name: loading-text;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@keyframes loader {
  15% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(230px);
  }
  65% {
    transform: translateX(230px);
  }
  95% {
    transform: translateX(0);
  }
}
@keyframes loading-text {
  0% {
    content: "Loading";
  }
  25% {
    content: "Loading.";
  }
  50% {
    content: "Loading..";
  }
  75% {
    content: "Loading...";
  }
}
</style>
