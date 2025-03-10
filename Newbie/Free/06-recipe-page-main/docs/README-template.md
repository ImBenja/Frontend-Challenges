# Frontend Mentor - Recipe page solution

> Esta es mi solución al desafío Recipe page component solution de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

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

![](../design/results/Desktop-Result-Top.png)
![](../design/results/Desktop-Result-Bottom.png)

#### Vista móvil

![](../design/results/Mobile-Result-Top.png)
![](../design/results/Mobile-Result-Mid.png)
![](../design/results/Mobile-Result-Bottom.png)

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **Recipe page**. Muestra la vista de escritorio del componente, con un diseño limpio. Muestra la vista de mobile del componente, con un diseño responsive en todos los dispositivos.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/Frontend-Challenges/tree/main/Newbie/Free/06-recipe-page-main)
- Live Site URL: [**Sitio en Vivo**](https://recete-omelette.netlify.app/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica del componente.

- **_CSS:_** Estilos avanzados con Flexbox.

- **_JavaScript:_** Uso de Fetch API para cargar los idiomas y evento de click para cambiar el idioma a Ingles o Español.
  Ademas cargamos los datos dinamicamente.

- **_Google Fonts:_** Fuente Young Serif y Outfit para un diseño moderno.

### Lo que Aprendi

1. _Diseño responsive: Usé media queries y un enfoque mobile-first para adaptar el diseño a diferentes dispositivos._

2. _Manipulación del DOM: Aprendi a manipular el DOM para cargar los datos dinámicos desde un archivo JSON._

3. _Cambio de idioma: aprendi a altenar el idioma al hacer click en un boton._

```html
<section class="card__content">
  <h1 class="card__content--title"></h1>
  <p class="card__content--description"></p>

  <article class="card__content--preparation">
    <h2 class="card__content--preparation-title">Preparation time</h2>
    <ul class="card__content--preparation-list"></ul>
  </article>
  <article class="card__content--ingredients">
    <h2 class="card__content--ingredients-title">Ingredients</h2>
    <ul class="card__content--ingredients-list"></ul>
  </article>
  <hr />
  <article class="card__content--instructions">
    <h2 class="card__content--instructions-title">Instructions</h2>
    <ol class="card__content--instructions-list"></ol>
  </article>
  <hr />
  <article class="card__content--nutrition">
    <h2 class="card__content--nutrition-title">Nutrition</h2>
    <p class="card__content--nutrition-description">
      The table below shows nutritional values per serving without the
      additional fillings.
    </p>
    <table class="card__content--nutrition-table">
      <tbody></tbody>
    </table>
  </article>
</section>
```

```js
// data.js
import {
  title,
  description,
  listTime,
  listIngredients,
  listInstructions,
  tableNutrition,
} from "../util/const.js";

export function loadData() {
  fetch("assets/locales/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados");
      }
      return response.json();
    })
    .then((data) => {
      title.textContent = data.title;
      description.textContent = data.description;

      listTime.innerHTML = `
        <li><p><strong>Total:</strong> ${data.preparation_time.total}</p></li>
        <li><p><strong>Preparation:</strong> ${data.preparation_time.preparation}</p></li>
        <li><p><strong>Cooking:</strong> ${data.preparation_time.cooking}</p></li>
      `;
      listIngredients.innerHTML = data.ingredients
        .map((ingredient) => {
          return `<li><p>${ingredient}</p></li>`;
        })
        .join("");
      listInstructions.innerHTML = data.instructions
        .map((instruction) => {
          return `<li><p><strong>${instruction.title}:</strong> ${instruction.description}</p></li>`;
        })
        .join("");
      tableNutrition.innerHTML = `
        <tr>
          <th>Calories</th>
          <th>Protein</th>
          <th>Fat</th>
          <th>Carbohydrate</th>
        </tr>
        <tr>
          <td>${data.nutrition.calories}</td>
          <td>${data.nutrition.carbs}</td>
          <td>${data.nutrition.protein}</td>
          <td>${data.nutrition.fat}</td>
        </tr>
      `;
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
