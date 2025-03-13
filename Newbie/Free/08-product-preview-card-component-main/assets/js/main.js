import { loadData } from "./components/data.js";

document.addEventListener("DOMContentLoaded", () => {
  loadData();
});

const btn = document.querySelector(".card__button");
const modalCart = document.querySelector(".cart-add");

btn.addEventListener("click", () => {
  modalCart.classList.add("cart-add--show");
  setTimeout(() => {
    modalCart.classList.remove("cart-add--show");
  }, 2000);
});
