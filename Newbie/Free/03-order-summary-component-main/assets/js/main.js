import { loadData } from "./components/data.js";
import { loadTranslations, toggleLanguage } from "./components/languaje.js";

document.addEventListener("DOMContentLoaded", () => {
  loadData();
  loadTranslations();

  // Botón de cambio de idioma
  const langBtn = document.getElementById("langBtn");
  langBtn.addEventListener("click", toggleLanguage);
});

const btnPayment = document.querySelector(".card__button--payment");
const modalPaymentSuccess = document.querySelector(".payment-success");

btnPayment.addEventListener("click", () => {
  modalPaymentSuccess.classList.add("payment-success--show");
  setTimeout(() => {
    modalPaymentSuccess.classList.remove("payment-success--show");
  }, 3000);
});
