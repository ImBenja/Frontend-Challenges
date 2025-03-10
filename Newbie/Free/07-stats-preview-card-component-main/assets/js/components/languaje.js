import {
  title,
  description,
  titleStats,
  descriptionStats,
} from "../util/const.js";

let currentLang = "en";
let translations = {};

export async function loadTranslations() {
  try {
    const [enResponse, esResponse] = await Promise.all([
      fetch("assets/locales/data.json"),
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
  const formattedTitle = t.previewStats.title.replace(
    /\[(.*?)\]/,
    "<span>$1</span>"
  );

  // Asignar el título y la descripción principal con innerHTML
  title.innerHTML = formattedTitle;
  description.textContent = t.previewStats.description;
  const statsArray = Object.values(t.previewStats.stats); // Convierte el objeto en array

  // Recorrer los elementos de las estadísticas
  statsArray.forEach((stat, index) => {
    titleStats[index].textContent = stat.title;
    descriptionStats[index].textContent = stat.description;
  });
  document.querySelector(".text-links").innerHTML = t.footerLinks;
  document.querySelector(".text-saludo").innerHTML = t.footerSaludo;
}
