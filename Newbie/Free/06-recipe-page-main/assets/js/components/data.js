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
          <td>${data.nutrition.protein}</td>
          <td>${data.nutrition.fat}</td>
          <td>${data.nutrition.carbs}</td>
        </tr>
      `;
    });
}
