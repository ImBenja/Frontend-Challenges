import {
  nameTitle,
  locationTitle,
  profesionTitle,
  linkGithub,
  linkFrontendMentor,
  linkLinkedin,
  linkTwitter,
  linkInstagram,
  containerImage,
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
      const img = document.createElement("img");
      img.src = data.profileCard.profileImg;
      img.alt = data.profileCard.name;
      img.classList.add("card__image--profile");

      containerImage.appendChild(img);
      nameTitle.textContent = data.profileCard.name;
      locationTitle.textContent = data.profileCard.location;
      profesionTitle.innerHTML = '"' + data.profileCard.profesion + '."';
      linkGithub.textContent = data.profileCard.contactSocial.linkGithub;
      linkFrontendMentor.textContent =
        data.profileCard.contactSocial.linkMentor;
      linkLinkedin.textContent = data.profileCard.contactSocial.linkLinkedin;
      linkTwitter.textContent = data.profileCard.contactSocial.linkX;
      linkInstagram.textContent = data.profileCard.contactSocial.linkIG;
    });
}
