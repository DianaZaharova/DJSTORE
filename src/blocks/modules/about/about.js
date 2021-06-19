import Swiper from "swiper/bundle";

const swiper = new Swiper(".about__description-slider", {
  allowTouchMove: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "about__slider-btn_disabled",
  },
  breakpoints: {
    200: {
      allowTouchMove: true,
    },
    1050: {
      allowTouchMove: false,
    },
  },
});

const swiper2 = new Swiper(".about__advantages-slider", {
  allowTouchMove: false,
  spaceBetween: 38,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: ".about__slider-btn_disabled",
  },
});

const about = document.querySelector(".about");

if (about) {
  const modal = document.querySelector(".site-modal");
  const openModal = about.querySelectorAll(".site-button_empty");

  const onWindowClick = (evt) => {
    if (!evt.target.matches(".site-modal, .site-modal *")) {
      closeModal();
      document.removeEventListener("click", onWindowClick);
    }
  };

  const closeModal = () => {
    modal.classList.remove("site-modal_opened");
  };

  openModal.forEach((button) =>
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      document
        .querySelector(".details-popup")
        .classList.remove("details-popup_opened");
      modal.classList.add("site-modal_opened");
      document.addEventListener("click", onWindowClick);
    })
  );
}
