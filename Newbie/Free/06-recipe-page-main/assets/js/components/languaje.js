import {
  title,
  description,
  listTime,
  listIngredients,
  listInstructions,
  tableNutrition,
  titleNutrition,
  descriptionNutrition,
} from "../util/const.js";

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

  // Actualiza título y descripción
  title.textContent = t.title;
  description.textContent = t.description;

  // Actualiza tiempos de preparación
  listTime.innerHTML = `
    <li><p><strong>Total:</strong> ${t.preparation_time.total}</p></li>
    <li><p><strong>${
      currentLang === "en" ? "Preparation" : "Preparación"
    }:</strong> ${t.preparation_time.preparation}</p></li>
    <li><p><strong>${currentLang === "en" ? "Cooking" : "Cocción"}:</strong> ${
    t.preparation_time.cooking
  }</p></li>
  `;

  // Actualiza ingredientes
  listIngredients.innerHTML = t.ingredients
    .map((ingredient) => `<li><p>${ingredient}</p></li>`)
    .join("");

  // Actualiza instrucciones
  listInstructions.innerHTML = t.instructions
    .map(
      (instruction) =>
        `<li><p><strong>${instruction.title}:</strong> ${instruction.description}</p></li>`
    )
    .join("");

  titleNutrition.textContent = t.titleNutritional;
  descriptionNutrition.textContent = t.descriptionNutritional;
  document.querySelector(".text-links").innerHTML = t.footerLinks;
  document.querySelector(".text-saludo").innerHTML = t.footerSaludo;
}
