# Frontend Mentor - Blog Preview Card Component solution

> Esta es mi solución al desafío Blog Preview Card Component de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

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

# 📖 Descripción general

### El desafío

Los usuarios deben poder:

1. Ver el diseño óptimo según el tamaño de pantalla de su dispositivo.

2. Ver los datos dinamicamente almacenados en el archivo data.json

3. Ver los diseños de Flexbox y los efectos de hover.

> **Bonus:** Use datos de dos archivos .JSON para alternar un cambio de idiomas ya sea Español o Ingles.

### Screenshot

#### Vista de escritorio

![](../design/results/Desktop-Result.png)

#### Vista móvil

![](../design/results/Mobile-Result.png)

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **Blog Preview Card Component**. Muestra la vista de escritorio del componente, con un diseño limpio. Muestra la vista de mobile del componente, con un diseño responsive en todos los dispositivos.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/Frontend-Challenges/tree/main/Newbie/Free-Plus/01-preview-blog-card-main)
- Live Site URL: [**Sitio en Vivo**](https://challengebentogrid.netlify.app/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica del componente.

- **_CSS:_** Estilos avanzados con Flexbox y hovers interactivos.

- **_JavaScript:_** Uso de Fetch API para cargar los idiomas y evento de click para cambiar el idioma a Ingles o Español.
  Ademas cargamos los datos dinamicamente.

- **_Google Fonts:_** Fuente Figtree para un diseño moderno.

## Lo que Aprendi

1. _Diseño responsive: Usé media queries y un enfoque mobile-first para adaptar el diseño a diferentes dispositivos._

2. _Manipulación del DOM: Aprendí a cargar datos dinámicos desde dos archivo JSON._

3. _Cambio de idioma: aprendi a altenar el idioma al hacer click en un boton._

```html
<article class="card__content">
  <span class="card__content--category"></span>
  <p class="card__content--published"></p>
  <h1 class="card__content--title"></h1>
  <p class="card__content--description"></p>
  <div class="card__content--author">
    <p class="card__content--author-name"></p>
  </div>
</article>
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
import {
  category,
  publication,
  title,
  description,
  containerAuthor,
  nameAuthor,
} from "../util/const.js";

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
        const { Name, ProfileImage } = data[0].Creator;

        category.textContent = data[0].Category;
        publication.textContent = data[0].PublicationDate;
        title.textContent = data[0].Title;
        description.textContent = data[0].Description;
        nameAuthor.textContent = Name;

        const img = document.createElement("img");
        img.src = ProfileImage;
        img.alt = Name;
        img.classList.add("card__content--author--image");

        containerAuthor.insertBefore(img, nameAuthor);
      } else {
        console.error("El archivo JSON no contiene datos válidos.");
      }
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
}
```

```js
// language.js
import { category, publication, title, description } from "../util/const.js";

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
```

## 👨‍💻 Autor

- GitHub - [ImBenja](https://github.com/ImBenja)
- Frontend Mentor - [@ImBenja](https://www.frontendmentor.io/profile/ImBenja)
- Instagram - [@benjajuarez1\_](https://www.instagram.com/benjajuarez1_/?hl=es)
- Twitter - [@benjajuarez_2](https://x.com/benjajuarez_2)
- Linkedin - [Benjamim Juarez](https://www.linkedin.com/in/benjam%C3%ADn-ju%C3%A1rez-b712592b8/)

## 🙏 Agradecimientos

> Agradezco a Frontend Mentor por proporcionar este desafío y a la comunidad por su apoyo y feedback.
