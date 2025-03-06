import {
  title,
  description,
  titlePlan,
  pricePlan,
  linkPlan,
  paymentThanks,
  paymentSuccess,
  btnPayment,
  btnClose,
} from "../util/const.js";

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

  title.textContent = t.title;
  description.textContent = t.description;
  titlePlan.textContent = t.titlePlan;
  pricePlan.textContent = t.pricePlan;
  linkPlan.textContent = t.linkPlan;
  paymentThanks.textContent = t.paymentThanks;
  paymentSuccess.textContent = t.paymentSuccess;
  btnPayment.textContent = t.btnPayment;
  btnClose.textContent = t.btnClose;
  document.querySelector(".text-links").innerHTML = t.footerLinks;
  document.querySelector(".text-saludo").innerHTML = t.footerSaludo;
}
