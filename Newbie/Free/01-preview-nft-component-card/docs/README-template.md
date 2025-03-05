# Frontend Mentor - NFT preview card component solution

> Esta es mi solución al desafío NFT Previer Card Component de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

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

2. Ver los datos dinamicamente almacenados en el archivo data.json

3. Ver los diseños de Flexbox y los efectos de hover.

> **Bonus:** Use datos de dos archivos .JSON para alternar un cambio de idiomas ya sea Español o Ingles.

### Screenshot

#### Vista de escritorio

![](./design/results/Desktop-Result.png)

#### Vista móvil

![](./design/results/Mobile-Result.png)

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **NFT Preview Card Component**. Muestra la vista de escritorio del componente, con un diseño limpio. Muestra la vista de mobile del componente, con un diseño responsive en todos los dispositivos.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/NFT-Preview-Component)
- Live Site URL: [**Sitio en Vivo**](https://challengebentogrid.netlify.app/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica del componente.

- **_CSS:_** Estilos avanzados con Flexbox y hovers interactivos.

- **_JavaScript:_** Uso de Fetch API para cargar los idiomas y evento de click para cambiar el idioma a Ingles o Español.
  Ademas cargamos los datos dinamicamente.

- **_Google Fonts:_** Fuente Outfit para un diseño moderno.

- [**_Styled Components_**](https://styled-components.com/) - For styles

### Lo que Aprendi

1. _Diseño responsive: Usé media queries y un enfoque mobile-first para adaptar el diseño a diferentes dispositivos._

2. _Manipulación del DOM: Aprendí a cargar datos dinámicos desde dos archivo JSON._

3. _Cambio de idioma: aprendi a altenar el idioma al hacer click en un boton._

```html
<h1 class="card__title"></h1>
<p class="card__description"></p>
<div class="card__info--container">
  <div class="card__info--contai price">
    <p class="card__info--text price"></p>
  </div>
  <div class="card__info--contai time">
    <p class="card__info--text time"></p>
  </div>
</div>
<hr />
<div class="card__profile">
  <p class="card__profile--author">
    Creation of <span class="card__profile--name"></span>
  </p>
</div>
<div class="language-switcher">
  <button onclick="toggleLanguage()" id="langBtn">ES</button>
</div>
```

```js
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
```

```js
// data.js
export function loadData() {
  fetch("assets/locales/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const { LogotypeETH, Amount, Currency } = data[0].Price;
        const { Logotype, TimeRemaining } = data[0].LogoTime;
        const { Name, ProfileImage } = data[0].Creator;

        nameNFT.textContent = data[0].Name;
        descriptionNFT.textContent = data[0].Description;
        priceNFT.textContent = `${Amount} ${Currency}`;
        timeNFT.textContent = `${TimeRemaining}`;

        // Logo de ETH
        const imgLogoPrice = document.createElement("img");
        imgLogoPrice.src = LogotypeETH;
        imgLogoPrice.alt = "Icon ETH";
        contaiPrice.insertBefore(imgLogoPrice, priceNFT);

        // Logo de tiempo
        const imgLogoTime = document.createElement("img");
        imgLogoTime.src = Logotype;
        imgLogoTime.alt = "Icon Time";
        contaiTime.insertBefore(imgLogoTime, timeNFT);

        // Imagen de perfil del autor
        const img = document.createElement("img");
        img.classList.add("card__img");
        img.src = ProfileImage;
        img.alt = Name;
        profileAuthorNFT.insertBefore(img, infoAuthorNFT);
        nameAuthorNFT.textContent = Name;
      } else {
        console.error("Error: JSON vacío o mal estructurado.");
      }
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
}
```

```js
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
  updateContent();
}

export function updateContent() {
  const t = translations[currentLang];
  if (!t) return;

  nameNFT.textContent = t.title;
  descriptionNFT.textContent = t.description;
  priceNFT.textContent = t.price;
  timeNFT.textContent = t.time;
  infoAuthorNFT.textContent = t.infoAuthor;
  nameAuthorNFT.textContent = t.nameAuthor;
  document.querySelector(".text-links").innerHTML = t.footerLinks;
  document.querySelector(".text-saludo").innerHTML = t.footerSaludo;
}
```

## 👨‍💻 Autor

- GitHub - [ImBenja](https://github.com/ImBenja)
- Frontend Mentor - [@ImBenja](https://www.frontendmentor.io/profile/ImBenja)
- Instagram - [@benjajuarez1\_](https://www.instagram.com/benjajuarez1_/?hl=es)

## 🙏 Agradecimientos

> Agradezco a Frontend Mentor por proporcionar este desafío y a la comunidad por su apoyo y feedback.
