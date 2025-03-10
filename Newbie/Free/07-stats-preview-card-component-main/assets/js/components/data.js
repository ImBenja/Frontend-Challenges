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
