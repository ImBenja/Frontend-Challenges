const adviceId = document.querySelector(".advice__id");
const adviveText = document.querySelector(".text__advice");
const btn = document.querySelector(".btn__advice");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      adviceId.textContent = ` #${data.slip.id}`;
      adviveText.textContent = `"${data.slip.advice}"`;
      adviveText.style.color = "hsl(193, 38%, 86%)";
    })
    .catch((err) => {
      adviveText.textContent = err.message;
    });
}

btn.addEventListener("click", getAdvice);
