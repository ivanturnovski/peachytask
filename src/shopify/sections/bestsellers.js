import Swiper, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/pagination";

const BestSellers = {
  onLoad() {
    this._init();
    this._addToCart();
  },

  _init() {
    this.sliderWrapper = this.container.querySelector(".ivan");
    if (!this.sliderWrapper) return;

    if (!window.matchMedia(Shopify.theme.media.sm).matches) {
      this.slider = new Swiper(this.sliderWrapper, {

        pagination: {
          el: ".swiper-pagination"
        },
        slidesPerView: 1,
        autoplay: true,
        modules: [Autoplay, Pagination],
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

  _addToCart() {
    const addToCart = document.querySelectorAll(".add-to-cart");
    if (addToCart != null) {
      addToCart.forEach(function (el) {
        el.addEventListener("click", function () {

          console.log(el.previousElementSibling.value);
          const variantId = el.previousElementSibling.value;
          // eslint-disable-next-line no-undef
          CartJS.addItem(variantId);
        })
      })
    }
  }
};

export default BestSellers;
