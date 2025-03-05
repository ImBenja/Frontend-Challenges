import { category, publication, title, description } from "../util/const.js";

// language.js
let currentLang = "en";
let translations = {};

export async function loadTranslations() {
  console.log("Intentando cargar:", window.location.origin + "/en.json");
  console.log("Intentando cargar:", window.location.origin + "/es.json");

  try {
    const [enResponse, esResponse] = await Promise.all([
      fetch("assets/locales/en.json"),
      fetch("assets/locales/es.json"),
    ]);

    translations = {
      en: await enResponse.json(),
      es: await esResponse.json(),
    };

    updateContent();
  } catch (error) {
    console.error("Error loading translations:", error);
  }
}

export function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";
  const btn = document.getElementById("langBtn");
  btn.textContent = currentLang === "en" ? "ES" : "EN";
  setTimeout(() => {
    updateContent();
  }, 200);
}

export function updateContent() {
  const t = translations[currentLang];
  if (!t) return;

  category.textContent = t.category;
  publication.textContent = t.publicationDate;
  title.textContent = t.title;
  description.textContent = t.description;
  document.querySelector(".text-links").innerHTML = t.footerLinks;
  document.querySelector(".text-saludo").innerHTML = t.footerSaludo;
}
