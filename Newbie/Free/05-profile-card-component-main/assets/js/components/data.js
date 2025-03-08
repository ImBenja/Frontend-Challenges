import {
  avatarImg,
  name,
  age,
  city,
  followersNumber,
  likesNumber,
  photosNumber,
} from "../util/const.js";

export function loadData() {
  fetch("assets/locales/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка HTTP: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      const img = document.createElement("img");
      img.src = data.ProfileCard.avatarImg;
      img.alt = name;
      avatarImg.appendChild(img);

      name.textContent = data.ProfileCard.name;
      age.textContent = data.ProfileCard.age;
      city.textContent = data.ProfileCard.city;
      followersNumber.textContent = data.ProfileCard.statsProfile.followers;
      likesNumber.textContent = data.ProfileCard.statsProfile.likes;
      photosNumber.textContent = data.ProfileCard.statsProfile.photos;
    });
}
