import Swiper, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";

const Header = {
  onLoad() {
    this._init();
    this._initCartToggle();
    this._showHelper();
  },

  _init() {
    // this.sliderWrapper = this.container.querySelector(".swiper");
    // if (!this.sliderWrapper) return;

    // if (!window.matchMedia(Shopify.theme.media.sm).matches) {
    //   this.slider = new Swiper(this.sliderWrapper, {
    //     slidesPerView: 1,
    //     autoplay: true,
    //     modules: [Autoplay],
    //   });
    // } else {
    //   this.slider = new Swiper(this.sliderWrapper, {
    //     slidesPerView: 3,
    //     grid: {
    //       rows: 2,
    //       loop: false,
    //     },
    //   });
    //   this.slider.disable();
    // }

    this.sliderWrapper = this.container.querySelector(".ivan");
    if (!this.sliderWrapper) return;

    if (!window.matchMedia(Shopify.theme.media.sm).matches) {
      this.slider = new Swiper(this.sliderWrapper, {
        slidesPerView: 1,
        autoplay: true,
        modules: [Autoplay],
      });
    } else {
      this.slider = new Swiper(this.sliderWrapper, {
        slidesPerView: 4,

        grid: {
          rows: 2,
          loop: false,
        },
      });
      this.slider.disable();
    }
  },

  _initCartToggle() {
    this.cartToggle = this.container.querySelector("[data-cart-open-close]");
    this.cartBody = this.container.querySelector("[data-cart-view]");

    if (!this.cartToggle || !this.cartBody) return;

    this.cartToggle.addEventListener("click", () => {
      this.cartBody.classList.toggle("active");
    });
  },

  _showHelper() {
    this.media = window.matchMedia(Shopify.theme.media.md);
    this.media.addEventListener("change", (ev) =>
      ev.matches ? console.log("Desktop") : console.log("Mobile")
    );
  },
};

export default Header;
