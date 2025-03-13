const title = document.querySelectorAll(".card__title");
const description = document.querySelectorAll(".card__description");
const icon = document.querySelectorAll(".card__image");

export function loadData() {
  fetch("assets/locales/data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < title.length; i++) {
        title[i].innerHTML = data[i].title;
        description[i].innerHTML = data[i].description;
        const img = document.createElement("img");
        img.src = data[i].icon;
        img.alt = data[i].title;
        icon[i].appendChild(img);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
