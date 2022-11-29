const Header = {
  onLoad() {
    this._initCartToggle();
    this._showHelper();
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
