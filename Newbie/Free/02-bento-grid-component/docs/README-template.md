# Frontend Mentor - Bento grid solution

> Esta es mi solución al desafío Bento Grid Component de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

## 📚 Tabla de contenidos

- [Descripción general](#Descripción-general)
  - [El desafío](#the-challenge)
  - [Captura de pantalla](#screenshot)
  - [Enlaces](#links)
- [Mi proceso](#my-process)
  - [Tecnologías utilizadas](#built-with)
  - [Lo que aprendí](#what-i-learned)
  - [Desarrollo futuro](#continued-development)
  - [Recursos útiles](#useful-resources)
- [Autor](#author)
- [Agradecimientos](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

# 📖 Descripción general

### El desafío

Los usuarios deben poder:

1. Ver el diseño óptimo según el tamaño de pantalla de su dispositivo.

2. Ver los diseños de Grid y los efectos de hover.

> **Bonus:** Use datos de dos archivos .JSON para alternar un cambio de idiomas ya sea Español o Ingles.

### Screenshot

#### Vista de escritorio

![](./design/results/Desktop-Result.png)

#### Vista móvil

![](./design/results/Mobile-Result.png)

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **Bento Grid Component**. Muestra la vista de escritorio del componente, con un diseño limpio. Muestra la vista de mobile del componente, con un diseño responsive en todos los dispositivos.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/Bento-Grid-Component)
- Live Site URL: [**Sitio en Vivo**](https://imbenja.github.io/Resumen-De-Resultados.github.io/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica del componente.

- **_CSS:_** Estilos avanzados con Flexbox y gradientes.

- **_JavaScript:_** Uso de Fetch API para cargar los idiomas y evento de click para cambiar el idioma a Ingles o Español.

- **_Google Fonts:_** Fuente Hanken Grotesk y DM Sans para un diseño moderno.

- [**_Styled Components_**](https://styled-components.com/) - For styles

### Lo que Aprendi

1. _Diseño responsive: Usé media queries y un enfoque mobile-first para adaptar el diseño a diferentes dispositivos._

2. _Manipulación del DOM: Aprendí a cargar datos dinámicos desde dos archivo JSON._

```html
<div class="language-switcher">
  <button onclick="toggleLanguage()" id="langBtn">ES</button>
</div>
```

```js
let currentLang = "en";
let translations = {};

async function loadTranslations() {
  try {
    const [enResponse, esResponse] = await Promise.all([
      fetch("/assets/locales/en.json"),
      fetch("/assets/locales/es.json"),
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
```

## 👨‍💻 Autor

- GitHub - [ImBenja](https://github.com/ImBenja)
- Frontend Mentor - [@ImBenja](https://www.frontendmentor.io/profile/ImBenja)
- Instagram - [@benjajuarez1\_](https://www.instagram.com/benjajuarez1_/?hl=es)

## 🙏 Agradecimientos

> Agradezco a Frontend Mentor por proporcionar este desafío y a la comunidad por su apoyo y feedback.
