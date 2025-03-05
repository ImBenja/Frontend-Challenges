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
