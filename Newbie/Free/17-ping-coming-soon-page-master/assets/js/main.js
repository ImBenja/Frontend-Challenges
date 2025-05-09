document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".subscription-form");
  const emailInput = document.querySelector("input");
  const errorText = document.querySelector(".error-message");
  const submitButton = document.querySelector(".submit-btn");
  const successContainer = document.querySelector(".container-sucess");
  const successEmail = document.querySelector(".text-email-submit");

  let timeout;

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|ar|info)$/i;

  function showError(message) {
    errorText.textContent = message;
    emailInput.classList.add("error");
  }

  function removeError() {
    errorText.textContent = "";
    emailInput.classList.remove("error");
  }

  // Mostrar mensaje de éxito
  function showSuccessMessage(email) {
    successEmail.textContent = email;
    successContainer.classList.add("show");

    // Ocultar después de 5 segundos
    setTimeout(() => {
      successContainer.classList.remove("show");
    }, 5000);
  }

  function validateEmail(email) {
    if (!email) return { isValid: false, message: "Email is required" };
    if (!email.includes("@"))
      return { isValid: false, message: "Missing @ symbol" };
    if (email.split("@").length > 2)
      return { isValid: false, message: "Only one @ allowed" };
    if (!email.split("@")[1].includes("."))
      return { isValid: false, message: "Missing domain and . after @" };
    if (!emailRegex.test(email))
      return {
        isValid: false,
        message: "Please provide a valid email address",
      };

    return { isValid: true, message: "" };
  }

  emailInput.addEventListener("input", function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      const email = emailInput.value.trim();
      const validationResult = validateEmail(email);
      if (email === "") {
        removeError();
        submitButton.classList.remove("success");
        emailInput.classList.remove("success");
      } else if (!validationResult.isValid) {
        showError(validationResult.message);
        submitButton.classList.add("success");
        emailInput.classList.remove("success");
      } else {
        removeError();
        submitButton.classList.remove("success");
        emailInput.classList.add("success");
      }
    }, 500);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    const validationResult = validateEmail(emailValue);

    if (!validationResult.isValid) {
      showError(validationResult.message);
      submitButton.classList.add("success");
    } else {
      removeError();
      showSuccessMessage(emailValue);
      submitButton.classList.remove("success");
      emailInput.classList.remove("success");
      form.reset();
    }
  });
});
