# Frontend Mentor - Order Summary

> Esta es mi solución al desafío Order Summary Card Component de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

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

4. Ver el pedido realizado.

> **Bonus:** Use datos de dos archivos .JSON para alternar un cambio de idiomas ya sea Español o Ingles.

### Screenshot

#### Vista de escritorio

![](./design/results/Desktop-Results.png)

#### Vista móvil

![](./design/results/Mobile-Result.png)

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **Order Summary Card Component**. Muestra la vista de escritorio del componente, con un diseño limpio. Muestra la vista de mobile del componente, con un diseño responsive en todos los dispositivos.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/Frontend-Challenges/tree/main/Newbie/Free/03-order-summary-component-card)
- Live Site URL: [**Sitio en Vivo**](https://component-order-summaryt.netlify.app/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica del componente.

- **_CSS:_** Estilos avanzados con Flexbox y hovers interactivos.

- **_JavaScript:_** Uso de Fetch API para cargar los idiomas y evento de click para cambiar el idioma a Ingles o Español.
  Ademas cargamos los datos dinamicamente.

- **_Google Fonts:_** Fuente Red Hat Display para un diseño moderno.

- [**_Styled Components_**](https://styled-components.com/) - For styles

### Lo que Aprendi

1. _Diseño responsive: Usé media queries y un enfoque mobile-first para adaptar el diseño a diferentes dispositivos._

2. _Manipulación del DOM: Aprendi a manipular el DOM para cargar los datos dinámicos desde un archivo JSON._

3. _Proceso De Pedido: Aprendi a crear un proceso de pedido con un modal._

4. _Cambio de idioma: aprendi a altenar el idioma al hacer click en un boton._

```html
<div class="payment-success">
  <p class="payment-thanks__text">Thank you for your purchase! 🙌</p>
  <p class="payment-success__text">Tu pedido ha sido procesado con éxito✅</p>
</div>
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

const btnPayment = document.querySelector(".card__button--payment");
const modalPaymentSuccess = document.querySelector(".payment-success");

btnPayment.addEventListener("click", () => {
  modalPaymentSuccess.classList.add("payment-success--show");
  setTimeout(() => {
    modalPaymentSuccess.classList.remove("payment-success--show");
  }, 3000);
});
```

```js
// data.js
import {
  title,
  description,
  titlePlan,
  pricePlan,
  linkPlan,
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
      title.textContent = data.orderSummary.title;
      description.textContent = data.orderSummary.description;
      titlePlan.textContent = data.orderSummary.annualPlan.title;
      pricePlan.textContent = data.orderSummary.annualPlan.price;
      linkPlan.textContent = data.orderSummary.annualPlan.link;
    });
}
```

## 👨‍💻 Autor

- GitHub - [ImBenja](https://github.com/ImBenja)
- Frontend Mentor - [@ImBenja](https://www.frontendmentor.io/profile/ImBenja)
- Instagram - [@benjajuarez1\_](https://www.instagram.com/benjajuarez1_/?hl=es)

## 🙏 Agradecimientos

> Agradezco a Frontend Mentor por proporcionar este desafío y a la comunidad por su apoyo y feedback.
