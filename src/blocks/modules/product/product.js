const product = document.querySelector(".product");

if (product) {
  const openBtn = product.querySelector(".product__btn");
  const closeBtn = product.querySelector(".close-btn");
  const popup = product.querySelector(".details-popup");

  const onWindowClick = (evt) => {
    if (!evt.target.matches(".details-popup, .details-popup *")) {
      closePopup();
      document.removeEventListener("click", onWindowClick);
    }
  };

  const closePopup = () => {
    popup.classList.remove("details-popup_opened");
  };

  const openPopup = (e) => {
    e.stopPropagation();
    document.querySelector(".site-modal").classList.remove("site-modal_opened");
    popup.classList.add("details-popup_opened");
    document.addEventListener("click", onWindowClick);
  };

  openBtn.addEventListener("click", openPopup);
  closeBtn.addEventListener("click", closePopup);
}
