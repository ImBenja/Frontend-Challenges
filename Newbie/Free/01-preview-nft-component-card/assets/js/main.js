// main.js
import { loadData } from "./components/data.js";
import {
  loadTranslations,
  toggleLanguage,
  updateContent,
} from "./components/languaje.js";

document.addEventListener("DOMContentLoaded", () => {
  loadData();
  loadTranslations();

  // Botón de cambio de idioma
  const langBtn = document.getElementById("langBtn");
  langBtn.addEventListener("click", toggleLanguage);
});
