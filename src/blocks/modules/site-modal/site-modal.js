const modal = document.querySelector(".site-modal");

if (modal) {
  const checkbox = modal.querySelector(".site-modal__checkbox");
  const submit = modal.querySelector(".site-modal__submit");
  const form = modal.querySelector(".site-modal__form");
  const closeBtn = modal.querySelector(".close-btn");

  const closeModal = () => {
    modal.classList.remove("site-modal_opened");
  };

  closeBtn.addEventListener("click", closeModal);

  checkbox.addEventListener("change", (e) => {
    submit.disabled = !e.target.checked;
    submit.classList.toggle("site-button_disabled");
  });

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("mail.php", {
      method: "POST",
      body: new FormData(form),
    }).then(() => {
      closeModal();
    });
  });
}
