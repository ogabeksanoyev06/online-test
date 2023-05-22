<template>
  <footer class="footer" :class="isDesktopSmall ? 'py-30' : 'py-60'">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__left">
          <router-link to="/" class="footer__logo">
            <img src="/icons/Vector (1).svg" alt="" />
          </router-link>
          <div class="footer__details">
            <div class="footer__details-item">
              <app-text
                :size="isMobile ? 16 : 18"
                :line-height="isMobile ? 18 : 21"
                weight="600"
                class="mb-20"
              >
                Bog'laning
              </app-text>

              <div class="footer__contacts-item">
                <div class="footer__contacts-icon">
                  <img src="/icons/phone.svg" alt="" />
                </div>

                <a href="tel: +998 91 123-45-67">
                  <app-text size="14" line-height="17" weight="600">
                    +998 91 123-45-67
                  </app-text>
                </a>
              </div>

              <div class="footer__contacts-item">
                <div class="footer__contacts-icon">
                  <img src="/icons/location.svg" alt="" />
                </div>

                <app-text size="14" line-height="17" weight="600">
                  <a
                    href="https://maps.google.com/?q=Toshkent shahri, Chilonzor tumani, Muqimiy ko'chasi 1 uy"
                    target="_blank"
                    >Toshkent shahri, Chilonzor tumani Muqimiy ko'chasi 1 uy</a
                  >
                </app-text>
              </div>
            </div>
            <div class="footer__details-item">
              <app-text
                :size="isMobile ? 16 : 18"
                :line-height="isMobile ? 18 : 21"
                weight="600"
                class="mb-20"
              >
                Linklar
              </app-text>

              <div class="footer__links">
                <router-link to="/guide" tag="a">Yo'riqnoma</router-link>
                <router-link to="/publication" tag="a">Nashrlar</router-link>
                <router-link to="/tests" tag="a">Testlar</router-link>
                <router-link to="/internation-studies" tag="a">
                  Tadqiqotlar
                </router-link>
                <router-link to="/video-course" tag="a">
                  Videokurslar
                </router-link>
                <router-link to="/library" tag="a">Kutubxona</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__right">
          <div class="footer__socials">
            <app-text
              weight="600"
              :size="isMobile ? 16 : 18"
              line-height="21"
              class="mb-20"
            >
              Ijtimoiy tarmoqlar
            </app-text>

            <div class="footer__socials-wrap">
              <a href="#" target="_blank" class="footer__socials-item">
                <img src="/icons/facebook.svg" alt="" />
              </a>

              <a href="#" class="footer__socials-item" target="_blank">
                <img src="/icons/youtube.svg" alt="" />
              </a>

              <a href="#" class="footer__socials-item" target="_blank">
                <img src="/icons/instagram.svg" alt="" />
              </a>

              <a href="#" class="footer__socials-item" target="_blank">
                <img src="/icons/telegram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom"></div>
    </div>
  </footer>
</template>

<script>
import "./footer.scss";

export default {
  name: "AppFooter",
};
</script>

<style scoped></style>
