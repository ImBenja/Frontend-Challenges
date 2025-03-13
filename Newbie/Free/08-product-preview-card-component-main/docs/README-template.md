# Frontend Mentor - Product preview card component solution

> Esta es mi solución al desafío Product preview card component solution de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

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

2. Ver los datos dinamicamente almacenados en el archivo data.json.

3. Ver los diseños de Flexbox y los efectos de hover.

### Screenshot

#### Vista de escritorio

![](../design/results/Desktop-Result.png)

#### Vista móvil

![](../design/results/Mobile-Result.png)

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **Product preview card component solutionn**. Muestra la vista de escritorio del componente, con un diseño limpio. Muestra la vista de mobile del componente, con un diseño responsive en todos los dispositivos.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/Frontend-Challenges/tree/main/Newbie/Free/08-product-preview-card-component-main)
- Live Site URL: [**Sitio en Vivo**](https://component-product.netlify.app/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica del componente.

- **_CSS:_** Estilos avanzados con Flexbox.

- **_JavaScript:_** Uso de Fetch API para cargar los datos Dinamicamente.

- **_Google Fonts:_** Fuente Montserrat y Frounces para un diseño moderno.

### Lo que Aprendi

1. _Diseño responsive: Usé media queries y un enfoque mobile-first para adaptar el diseño a diferentes dispositivos._

2. _Manipulación del DOM: Aprendi a manipular el DOM para cargar los datos dinámicos desde un archivo JSON y ademas hacer una animacion al hacer click en el boton add to cart._

```html
<article class="card__content">
  <span class="card__category"></span>
  <h1 class="card__title"></h1>
  <p class="card__description"></p>
  <div class="card__price">
    <span class="card__price--current"></span>
    <span class="card__price--old"></span>
  </div>
  <button class="card__button">
    <img src="images/icon-cart.svg" alt="Cart" />
    Add to Cart
  </button>
</article>
```

```js
// data.js
import {
  productCategory,
  productTitle,
  productDescription,
  productPrice,
  productPreviusPrice,
} from "../util/const.js";

export function loadData() {
  fetch("assets/locales/data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al cargar el archivo");
      }
      return res.json();
    })
    .then((data) => {
      productCategory.textContent = data.productPreview.category;
      productTitle.textContent = data.productPreview.title;
      productDescription.textContent = data.productPreview.description;
      productPrice.innerHTML =
        "$" + data.productPreview.productPrice.currentPrice;
      productPreviusPrice.innerHTML =
        "$" + data.productPreview.productPrice.previousPrice;
    })
    .catch((error) => {
      console.error("Error:", error);
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
