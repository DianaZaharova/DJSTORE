const header = document.querySelector(".header");

if (header) {
  const links = header.querySelectorAll(".header__link");
  const items = header.querySelectorAll(".header__item");
  const burgerBtn = header.querySelector(".header__nav-button");
  const navWrapper = header.querySelector(".header__inner-wrap");
  const body = document.querySelector("body");

  window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY) {
      header.classList.add("header_fixed");
      body.classList.add("padding");
    } else {
      header.classList.remove("header_fixed");
      body.classList.remove("padding");
    }
    this.oldScroll = this.scrollY;
  };

  const closeActive = () => {
    items.forEach((item) => {
      item.classList.remove("header__item_active");
    });
  };

  links.forEach((link) =>
    link.addEventListener("click", (event) => {
      event.stopPropagation();
      const closestItem = link.closest(".header__item");
      if (closestItem.classList.contains("header__item_active")) {
        closestItem.classList.remove("header__item_active");
      } else {
        closeActive();
        closestItem.classList.add("header__item_active");
      }
    })
  );

  burgerBtn.addEventListener("click", () => {
    navWrapper.classList.toggle("header__inner-wrap_opened");
    burgerBtn.classList.toggle("header__nav-button_cross");
    body.classList.toggle("no-scroll");
  });
}
