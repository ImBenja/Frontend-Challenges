import {
  nameNFT,
  descriptionNFT,
  contaiPrice,
  contaiTime,
  priceNFT,
  timeNFT,
  profileAuthorNFT,
  infoAuthorNFT,
  nameAuthorNFT,
} from "../util/const.js";

// data.js
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
        const { LogotypeETH, Amount, Currency } = data[0].Price;
        const { Logotype, TimeRemaining } = data[0].LogoTime;
        const { Name, ProfileImage } = data[0].Creator;

        nameNFT.textContent = data[0].Name;
        descriptionNFT.textContent = data[0].Description;
        priceNFT.textContent = `${Amount} ${Currency}`;
        timeNFT.textContent = `${TimeRemaining}`;

        // Logo de ETH
        const imgLogoPrice = document.createElement("img");
        imgLogoPrice.src = LogotypeETH;
        imgLogoPrice.alt = "Icon ETH";
        contaiPrice.insertBefore(imgLogoPrice, priceNFT);

        // Logo de tiempo
        const imgLogoTime = document.createElement("img");
        imgLogoTime.src = Logotype;
        imgLogoTime.alt = "Icon Time";
        contaiTime.insertBefore(imgLogoTime, timeNFT);

        // Imagen de perfil del autor
        const img = document.createElement("img");
        img.classList.add("card__img");
        img.src = ProfileImage;
        img.alt = Name;
        profileAuthorNFT.insertBefore(img, infoAuthorNFT);
        nameAuthorNFT.textContent = Name;
      } else {
        console.error("Error: JSON vacío o mal estructurado.");
      }
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
}
