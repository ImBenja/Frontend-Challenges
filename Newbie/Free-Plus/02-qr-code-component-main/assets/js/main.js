// main.js
import { loadTranslations, toggleLanguage } from "./components/languaje.js";

document.addEventListener("DOMContentLoaded", () => {
  loadTranslations();

  // Botón de cambio de idioma
  const langBtn = document.getElementById("langBtn");
  langBtn.addEventListener("click", toggleLanguage);
});
