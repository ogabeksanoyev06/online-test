import Vue from "vue";
import { mapGetters } from "vuex";

function mediaHelper(width, desiredWidth) {
  return width && width <= desiredWidth;
}

Vue.mixin({
  computed: {
    ...mapGetters(["windowWidth"]),
    isDesktop() {
      return this.windowWidth && this.windowWidth > 991;
    },
    isDesktopMedium() {
      return mediaHelper(this.windowWidth, 1240);
    },
    isDesktopSmall() {
      return mediaHelper(this.windowWidth, 1024);
    },
    isMobile() {
      return mediaHelper(this.windowWidth, 991);
    },
    isMobileMedium() {
      return mediaHelper(this.windowWidth, 768);
    },
    isMobileSmall() {
      return mediaHelper(this.windowWidth, 576);
    },
  },
});
