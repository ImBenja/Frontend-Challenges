let currentLang = "en";
let translations = {};

async function loadTranslations() {
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

function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";
  const btn = document.getElementById("langBtn");
  btn.textContent = currentLang === "en" ? "ES" : "EN";
  updateContent();
}

function updateContent() {
  const t = translations[currentLang];
  if (!t) return;

  document.querySelector(".stars .box__title").innerHTML = t.title;
  document.querySelector(".stars .box__text").textContent = t.reviews;
  document.querySelector(".platforms .box__title").textContent = t.platforms;
  document.querySelector(".schedule .box__title").textContent = t.schedule;
  document.querySelector(".schedule-post .box__title").textContent =
    t.schedulePost;
  document.querySelector(".schedule-post .box__text").textContent =
    t.optimizePost;
  document.querySelector(".followers .box__title").textContent = t.followers;
  document.querySelector(".audience .box__text").textContent = t.audienceGrowth;
  document.querySelector(".create-post .box__title").innerHTML = t.createPost;
  document.querySelector(".IA .box__title").textContent = t.writeContent;
  document.querySelector(".text-links").innerHTML = t.footerLinks;
  document.querySelector(".text-saludo").innerHTML = t.footerSaludo;
}

document.addEventListener("DOMContentLoaded", loadTranslations);
