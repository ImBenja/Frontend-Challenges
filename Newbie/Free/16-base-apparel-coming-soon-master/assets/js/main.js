document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM
  const form = document.querySelector(".hero__form");
  const input = document.getElementById("email");
  const errorText = document.querySelector(".error-text");
  const errorIcon = document.querySelector(".error-icon");
  const submitButton = document.querySelector(".hero__button");
  const containerSubmit = document.querySelector(".container-submit");
  const textSubmit = document.querySelector(".text-email-submit");

  // Expresión regular mejorada para emails
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|ar|info)$/i;

  const allowedTLDs = ["com", "org", "net", "edu", "gov", "ar", "info"];
  // Función para validar el TLD
  function isValidTLD(tld) {
    return allowedTLDs.includes(tld);
  }

  // Variables para debounce
  let timeout;

  // Mostrar errores
  function showError(message) {
    errorText.textContent = message;
    errorText.classList.add("show");
    errorIcon.classList.add("show");
    input.classList.add("error");
    input.setAttribute("aria-invalid", "true");
  }

  // Resetear errores
  function resetErrors() {
    errorText.classList.remove("show");
    errorIcon.classList.remove("show");
    input.classList.remove("error");
    input.setAttribute("aria-invalid", "false");
  }

  // Validación del email
  function validateEmail(email) {
    if (!email) return { isValid: false, message: "Email cannot be empty" };
    if (!email.includes("@"))
      return { isValid: false, message: "Missing @ symbol" };
    if (email.split("@").length > 2)
      return { isValid: false, message: "Only one @ allowed" };
    if (!email.split("@")[1].includes("."))
      return { isValid: false, message: "Invalid domain format" };
    const tld = email.split(".")[1];
    if (!isValidTLD(tld)) return { isValid: false, message: "Invalid domain" };
    if (!emailRegex.test(email))
      return { isValid: false, message: "Please provide a valid email" };

    return { isValid: true, message: "" };
  }

  // Validación en tiempo real con debounce
  input.addEventListener("input", function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const emailValue = input.value.trim();
      const validation = validateEmail(emailValue);

      if (emailValue === "") {
        resetErrors();
      } else if (!validation.isValid) {
        showError(validation.message);
      } else {
        resetErrors();
      }
    }, 500);
  });

  // Envío del formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = input.value.trim();
    const validation = validateEmail(emailValue);

    if (!validation.isValid) {
      showError(validation.message);
      input.focus();
    } else {
      resetErrors();

      setTimeout(() => {
        containerSubmit.classList.add("show");
        textSubmit.textContent = emailValue;

        // Ocultar después de 5 segundos
        setTimeout(() => {
          containerSubmit.classList.remove("show");
        }, 5000);
      }, 500);

      form.reset();
    }
  });
});
