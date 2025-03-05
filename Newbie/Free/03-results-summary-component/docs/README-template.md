# Frontend Mentor - Solución del componente de resumen de resultados

> Esta es mi solución al desafío Results summary component de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

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

2. Ver los estados de hover y focus en los elementos interactivos.

> **Bonus:** Usar datos de un archivo JSON para cargar el contenido dinámicamente.

### Screenshot

#### Vista de escritorio

![](./design/results/Desktop-Result.png)

#### Vista móvil

![](./design/results/Mobile-Result.png)

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **Results Summary Component**. Muestra la vista de escritorio del componente, con un diseño limpio. Muestra la vista de mobile del componente, con un diseño responsive en todos los dispositivos.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/Resumen-De-Resultados)
- Live Site URL: [**Sitio en Vivo**](https://imbenja.github.io/Resumen-De-Resultados.github.io/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica del componente.

- **_CSS:_** Estilos avanzados con Flexbox y gradientes.

- **_JavaScript:_** Uso de Fetch API para cargar datos dinámicos.

- **_Google Fonts:_** Fuente Hanken Grotesk para un diseño moderno.

- [**_Styled Components_**](https://styled-components.com/) - For styles

### Lo que Aprendi

1. _Diseño responsive: Usé media queries y un enfoque mobile-first para adaptar el diseño a diferentes dispositivos._

2. _Manipulación del DOM: Aprendí a cargar datos dinámicos desde un archivo JSON._

To see how you can add code snippets, see below:

```html
<div class="card light-red">
  <div class="card__info">
    <p class="card__text--title light-red"></p>
  </div>
  <div class="card__text">
    <p class="card__text--result"></p>
    <span class="card__text--objetivo">/ 100</span>
  </div>
</div>
```

```js
const categories = document.querySelectorAll(".card__text--title");
const results = document.querySelectorAll(".card__text--result");
const cardInfos = document.querySelectorAll(".card__info");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item, index) => {
      if (categories[index] && results[index] && cardInfos[index]) {
        const img = document.createElement("img");
        img.src = item.icon;
        img.alt = item.category;

        cardInfos[index].insertBefore(img, categories[index]);

        categories[index].textContent = item.category;
        results[index].textContent = item.score;
      }
    });
  })
  .catch((error) => console.error("Error:", error));
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Desarrollo futuro

En futuros proyectos, me gustaría profundizar en:

1. Accesibilidad: Mejorar la compatibilidad con lectores de pantalla y cumplir con WCAG.

2. Animaciones CSS: Añadir transiciones y efectos para mejorar la experiencia del usuario.

3. Testing: Implementar pruebas unitarias y de integración.

4. Optimización: Minificar y comprimir los archivos para mejorar el rendimiento.

## 👨‍💻 Autor

- GitHub - [ImBenja](https://github.com/ImBenja)
- Frontend Mentor - [@ImBenja](https://www.frontendmentor.io/profile/ImBenja)
- Instagram - [@benjajuarez1\_](https://www.instagram.com/benjajuarez1_/?hl=es)

## 🙏 Agradecimientos

> Agradezco a Frontend Mentor por proporcionar este desafío y a la comunidad por su apoyo y feedback.
