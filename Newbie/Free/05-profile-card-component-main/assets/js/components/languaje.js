// language.js
let currentLang = "en";
let translations = {};

export async function loadTranslations() {
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
  }, 500);
}

export function updateContent() {
  const t = translations[currentLang];
  if (!t) return;

  document.querySelector(
    ".card__content--info--stats--text.followers"
  ).textContent = t.titleFollowers;
  document.querySelector(
    ".card__content--info--stats--text.likes"
  ).textContent = t.titleLikes;
  document.querySelector(
    ".card__content--info--stats--text.photos"
  ).textContent = t.titlePhotos;
  document.querySelector(".card__content--city").textContent = t.city;
}
