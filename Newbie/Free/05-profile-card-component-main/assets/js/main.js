import { loadData } from "./components/data.js";
import { loadTranslations, toggleLanguage } from "./components/languaje.js";
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  loadTranslations();

  // Botón de cambio de idioma
  const langBtn = document.getElementById("langBtn");
  langBtn.addEventListener("click", toggleLanguage);
});

const menuBtn = document.querySelector("#attribution-btn");
const menu = document.querySelector("#attribution-menu");
menu.classList.remove("attribution-menu--active");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("attribution-menu--active");
});
