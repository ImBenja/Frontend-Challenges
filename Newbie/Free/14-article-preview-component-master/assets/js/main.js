const btn = document.querySelector(".card__profile--share");
const containerShare = document.querySelector(".card__share");

btn.addEventListener("click", () => {
  if (containerShare.classList.contains("card__share--active")) {
    containerShare.classList.remove("card__share--active");
  } else {
    containerShare.classList.add("card__share--active");
  }
});

document
  .querySelector(".card__profile--share")
  .addEventListener("click", function () {
    this.classList.toggle("active");
  });
