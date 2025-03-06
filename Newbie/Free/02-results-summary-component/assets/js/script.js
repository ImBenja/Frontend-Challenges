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
