const buttons = document.querySelectorAll(".card__button");
const card = document.querySelector(".card");
const cardThanks = document.querySelector(".card.card--hidden");
const submit = document.querySelector(".card__submit");
const submitAgain = document.querySelector(".card__submit.again");
const rating = document.querySelector(".card__paragraph--selected-value");
const error = document.querySelector(".container__false");
let ratingValue = 0;
cardThanks.classList.add("hidden");
error.classList.add("hidden");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingValue = button.getAttribute("data-value");
    button.classList.add("card__button--selected");
    buttons.forEach((btn) => {
      if (btn !== button) {
        btn.classList.remove("card__button--selected");
      }
    });
  });
});

submit.addEventListener("click", () => {
  if (ratingValue > 0) {
    rating.textContent = ratingValue;
    card.classList.add("hidden");
    error.classList.add("hidden");
    cardThanks.classList.remove("hidden");
  } else {
    error.classList.remove("hidden");
    setTimeout(() => {
      error.classList.add("hidden");
    }, 2000);
  }
});

submitAgain.addEventListener("click", () => {
  card.classList.remove("hidden");
  cardThanks.classList.add("hidden");
  ratingValue = 0;
  buttons.forEach((button) => {
    button.classList.remove("card__button--selected");
  });
  rating.textContent = ratingValue;
});
