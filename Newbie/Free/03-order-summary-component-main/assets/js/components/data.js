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
