# Frontend Mentor - Social links profile solution

> Esta es mi solución al desafío Social Links Profile de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

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

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **Social links profile**. Muestra la vista de escritorio del componente, con un diseño limpio. Muestra la vista de mobile del componente, con un diseño responsive en todos los dispositivos.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/Frontend-Challenges/tree/main/Newbie/Free/04-social-links-profile-main)
- Live Site URL: [**Sitio en Vivo**](https://component-profile.netlify.app/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica del componente.

- **_CSS:_** Estilos avanzados con Flexbox y hovers interactivos.

- **_JavaScript:_** Uso de Fetch API para cargar los idiomas y evento de click para cambiar el idioma a Ingles o Español.
  Ademas cargamos los datos dinamicamente.

- **_Google Fonts:_** Fuente Inter para un diseño moderno.

### Lo que Aprendi

1. _Diseño responsive: Usé media queries y un enfoque mobile-first para adaptar el diseño a diferentes dispositivos._

2. _Manipulación del DOM: Aprendi a manipular el DOM para cargar los datos dinámicos desde un archivo JSON._

3. _Proceso De Pedido: Aprendi a crear un proceso de pedido con un modal._

4. _Cambio de idioma: aprendi a altenar el idioma al hacer click en un boton._

```html
<figure class="card__image"></figure>
<article class="card__content">
  <div class="card__content--titles">
    <h1 class="card__content--name"></h1>
    <h2 class="card__content--location"></h2>
  </div>
  <h3 class="card__content--profesion"></h3>
  <div class="card__content--links">
    <a href="https://github.com/ImBenja" class="card__link github"></a>
    <a
      href="https://www.frontendmentor.io/profile/ImBenja"
      class="card__link frontendmentor"
    ></a>
    <a
      href="https://www.linkedin.com/in/benjam%C3%ADn-ju%C3%A1rez-b712592b8/"
      class="card__link linkedin"
    ></a>
    <a href="https://x.com/benjajuarez_2" class="card__link twitter"></a>
    <a
      href="https://www.instagram.com/benjajuarez1_/?hl=es"
      class="card__link instagram"
    ></a>
  </div>
</article>
```

```js
// main.js
import { loadData } from "./components/data.js";
import { loadTranslations, toggleLanguage } from "./components/languaje.js";

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
  nameTitle,
  locationTitle,
  profesionTitle,
  linkGithub,
  linkFrontendMentor,
  linkLinkedin,
  linkTwitter,
  linkInstagram,
  containerImage,
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
      const img = document.createElement("img");
      img.src = data.profileCard.profileImg;
      img.alt = data.profileCard.name;
      img.classList.add("card__image--profile");

      containerImage.appendChild(img);
      nameTitle.textContent = data.profileCard.name;
      locationTitle.textContent = data.profileCard.location;
      profesionTitle.innerHTML = '"' + data.profileCard.profesion + '."';
      linkGithub.textContent = data.profileCard.contactSocial.linkGithub;
      linkFrontendMentor.textContent =
        data.profileCard.contactSocial.linkMentor;
      linkLinkedin.textContent = data.profileCard.contactSocial.linkLinkedin;
      linkTwitter.textContent = data.profileCard.contactSocial.linkX;
      linkInstagram.textContent = data.profileCard.contactSocial.linkIG;
    });
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
