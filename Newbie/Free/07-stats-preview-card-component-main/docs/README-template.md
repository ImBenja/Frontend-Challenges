# Frontend Mentor - Stats preview card component solution

> Esta es mi solución al desafío Stats preview card component solution de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

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

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **Stats preview card component solution**. Muestra la vista de escritorio del componente, con un diseño limpio. Muestra la vista de mobile del componente, con un diseño responsive en todos los dispositivos.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/Frontend-Challenges/tree/main/Newbie/Free/07-stats-preview-card-component-main)
- Live Site URL: [**Sitio en Vivo**](https://stats-preview-componente.netlify.app/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica del componente.

- **_CSS:_** Estilos avanzados con Flexbox.

- **_JavaScript:_** Uso de Fetch API para cargar los idiomas y evento de click para cambiar el idioma a Ingles o Español.
  Ademas cargamos los datos dinamicamente.

- **_Google Fonts:_** Fuente Lexend-Deca e Inter para un diseño moderno.

### Lo que Aprendi

1. _Diseño responsive: Usé media queries y un enfoque mobile-first para adaptar el diseño a diferentes dispositivos._

2. _Manipulación del DOM: Aprendi a manipular el DOM para cargar los datos dinámicos desde un archivo JSON._

3. _Cambio de idioma: aprendi a altenar el idioma al hacer click en un boton._

```html
<article class="card__content">
  <h1 class="card__content--title"></h1>
  <p class="card__content--description"></p>
  <div class="card__content--stats">
    <div class="card__content--stats__item">
      <h2 class="card__content--stats__item--number"></h2>
      <p class="card__content--stats__item--description"></p>
    </div>
    <div class="card__content--stats__item">
      <h2 class="card__content--stats__item--number"></h2>
      <p class="card__content--stats__item--description"></p>
    </div>
    <div class="card__content--stats__item">
      <h2 class="card__content--stats__item--number"></h2>
      <p class="card__content--stats__item--description"></p>
    </div>
  </div>
</article>
```

```js
// data.js
import {
  title,
  description,
  titleStats,
  descriptionStats,
} from "../util/const.js";

export function loadData() {
  fetch("assets/locales/data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      return res.json();
    })
    .then((data) => {
      // Reemplazar la palabra entre [ ] por un <span>
      const formattedTitle = data.previewStats.title.replace(
        /\[(.*?)\]/,
        "<span>$1</span>"
      );

      // Asignar el título y la descripción principal con innerHTML
      title.innerHTML = formattedTitle;
      description.textContent = data.previewStats.description;

      // Obtener los valores de stats correctamente
      const statsArray = Object.values(data.previewStats.stats);

      // Recorrer los elementos de las estadísticas
      statsArray.forEach((stat, index) => {
        titleStats[index].textContent = stat.title;
        descriptionStats[index].textContent = stat.description;
      });
    })
    .catch((error) => console.error(error));
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
