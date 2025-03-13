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
