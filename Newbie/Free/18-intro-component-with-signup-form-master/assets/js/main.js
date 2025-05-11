document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input:not([type='checkbox'])");
  const email = document.querySelector("#email");
  const name = document.querySelector("#firstname");
  const lastName = document.querySelector("#lastname");
  const password = document.querySelector("#password");
  const terms = document.querySelector("#terms");
  const errorEmailText = document.querySelector(".error__message.email");
  const errorNameText = document.querySelector(".error__message.name");
  const errorLastNameText = document.querySelector(".error__message.lastname");
  const errorPasswordText = document.querySelector(".error__message.password");
  const errorTermsText = document.querySelector(".error__message.terms");
  const form = document.querySelector("form");
  const btn = document.querySelector(".submit-btn");
  const sucessBtn = document.querySelector("#successBtn");
  const toggle = document.querySelector(".toggle-password");
  const containerSuccess = document.querySelector(".container");
  const successEmailText = document.querySelector("#email-span");
  const successNameText = document.querySelector("#name-span");
  const main = document.querySelector("main");

  // Expresión regular para validar el formato del correo electrónico
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|ar|info)$/i;

  // Variable para almacenar el temporizador
  let timeout;

  // Evento para mostrar/ocultar la contraseña
  toggle.addEventListener("click", () => {
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    if (toggle.textContent === "👁️") toggle.textContent = "🙉";
    else toggle.textContent = "👁️";
  });

  // Función para mostrar el mensaje de éxito
  function showSuccessMessage(name, email) {
    successNameText.textContent = name;
    successEmailText.textContent = email;
    containerSuccess.classList.add("show");
    main.style.display = "none"; // Oculta el formulario
  }

  // Función para ocultar el mensaje de éxito
  function hideSuccessMessage() {
    containerSuccess.classList.remove("show");
    if (main) main.style.display = "flex";
  }

  // Función para mostrar el mensaje de error
  function showError(input, icon, text, message = "") {
    input.classList.add("error");
    if (icon) icon.classList.add("show");
    text.classList.add("show");
    if (
      message ||
      text.classList.contains("email") ||
      text.classList.contains("terms")
    ) {
      text.textContent =
        message ||
        (input === terms
          ? "You must accept the terms"
          : "This field is required");
    }
  }

  // Función para ocultar el mensaje de error
  function hideError(input, icon, text) {
    input.classList.remove("error");
    if (icon) icon.classList.remove("show");
    text.classList.remove("show");
  }

  // Función para validar el correo electrónico
  function validateEmail(emailValue) {
    // Validar el correo electrónico
    if (!emailValue) return { isValid: false, message: "Email is required" };
    // Validar el formato del correo electrónico
    if (emailValue.split("@").length > 2)
      return { isValid: false, message: "Only one @ allowed" };
    // Validar el dominio del correo electrónico
    if (!emailRegex.test(emailValue))
      return { isValid: false, message: "Please enter a valid email address" };
    return { isValid: true, message: "" };
  }

  // Función para validar el nombre
  function validateName(nameValue) {
    // Validar el nombre
    if (!nameValue) return { isValid: false, message: "Name is required" };
    // Validar la longitud del nombre
    if (nameValue.length < 3)
      return { isValid: false, message: "Name must be at least 3 characters" };
    if (nameValue.length > 30)
      return { isValid: false, message: "Name must be at most 30 characters" };
    // Validar que solo contenga letras
    if (!/^[a-zA-Z]+$/.test(nameValue))
      return { isValid: false, message: "Name must contain only letters" };
    return { isValid: true, message: "" };
  }

  // Función para validar el apellido
  function validateLastName(lastNameValue) {
    // Validar el apellido
    if (!lastNameValue)
      return { isValid: false, message: "Last name is required" };
    // Validar la longitud del apellido
    if (lastNameValue.length < 3)
      return {
        isValid: false,
        message: "Last name must be at least 3 characters",
      };
    if (lastNameValue.length > 30)
      return {
        isValid: false,
        message: "Last name must be at most 30 characters",
      };
    // Validar que solo contenga letras
    if (!/^[a-zA-Z]+$/.test(lastNameValue))
      return { isValid: false, message: "Last name must contain only letters" };
    return { isValid: true, message: "" };
  }

  // Función para validar la contraseña
  function validatePassword(passwordValue) {
    // Validar la contraseña
    if (!passwordValue)
      return { isValid: false, message: "Password is required" };
    // Validar la longitud de la contraseña
    if (passwordValue.length < 8)
      return {
        isValid: false,
        message: "Password must be at least 8 characters",
      };
    if (passwordValue.length > 20)
      return {
        isValid: false,
        message: "Password must be at most 20 characters",
      };
    // Validar que contenga al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
    if (!/[A-Z]/.test(passwordValue))
      return {
        isValid: false,
        message: "Password must contain at least one uppercase letter",
      };
    if (!/[a-z]/.test(passwordValue))
      return {
        isValid: false,
        message: "Password must contain at least one lowercase letter",
      };
    if (!/\d/.test(passwordValue))
      return {
        isValid: false,
        message: "Password must contain at least one number",
      };
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(passwordValue))
      return {
        isValid: false,
        message: "Password must contain at least one special character",
      };
    return { isValid: true, message: "" };
  }

  // Función para validar el campo de correo electrónico
  function validateEmailField() {
    const errorIcon = email.nextElementSibling;
    const validationResult = validateEmail(email.value);

    if (!validationResult.isValid) {
      showError(email, errorIcon, errorEmailText, validationResult.message);
      return false;
    }
    hideError(email, errorIcon, errorEmailText);
    return true;
  }

  // Función para validar el campo de nombre
  function validateNameField() {
    const errorIcon = name.nextElementSibling;
    const validationResult = validateName(name.value);

    if (!validationResult.isValid) {
      showError(name, errorIcon, errorNameText, validationResult.message);
      return false;
    }
    hideError(name, errorIcon, errorNameText);
    return true;
  }

  // Función para validar el campo de apellido
  function validateLastNameField() {
    const errorIcon = lastName.nextElementSibling;
    const validationResult = validateLastName(lastName.value);

    if (!validationResult.isValid) {
      showError(
        lastName,
        errorIcon,
        errorLastNameText,
        validationResult.message
      );
      return false;
    }
    hideError(lastName, errorIcon, errorLastNameText);
    return true;
  }

  // Función para validar el campo de contraseña
  function validatePasswordField() {
    const errorIcon = password.nextElementSibling;
    const validationResult = validatePassword(password.value);

    if (!validationResult.isValid) {
      showError(
        password,
        errorIcon,
        errorPasswordText,
        validationResult.message
      );
      return false;
    }
    hideError(password, errorIcon, errorPasswordText);
    return true;
  }

  // Función para validar el campo de términos y condiciones
  function validateTerms() {
    if (!terms.checked) {
      showError(terms, null, errorTermsText, "You must accept the terms");
      return false;
    }
    hideError(terms, null, errorTermsText);
    return true;
  }

  // Eventos de validación en tiempo real
  inputs.forEach((input) => {
    // Validar al escribir
    input.addEventListener("input", () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (input === email) validateEmailField();
        else if (input === name) validateNameField();
        else if (input === lastName) validateLastNameField();
        else if (input === password) validatePasswordField();
      }, 500);
    });

    // Validar al perder el foco
    input.addEventListener("blur", () => {
      if (input === email) validateEmailField();
      else if (input === name) validateNameField();
      else if (input === lastName) validateLastNameField();
      else if (input === password) validatePasswordField();
    });
  });

  // Validar al cambiar el estado del checkbox de términos y condiciones
  terms.addEventListener("change", validateTerms);

  // Validar al enviar el formulario
  form.addEventListener("submit", (e) => {
    // Evitar que el formulario se envíe
    e.preventDefault();
    let isValid = true;

    // Validar todos los campos
    isValid &= validateEmailField();
    isValid &= validateNameField();
    isValid &= validateLastNameField();
    isValid &= validatePasswordField();
    isValid &= validateTerms();

    // Si todos los campos son válidos, mostrar el mensaje de éxito
    if (isValid) {
      btn.textContent = "Sending...";
      const userEmail = email.value;
      const userName = name.value;
      setTimeout(() => {
        form.reset();
        containerSuccess.classList.add("show");
        showSuccessMessage(userName, userEmail);
        main.style.display = "none";
        btn.textContent = "Claim your free trial";
        toggle.textContent = "👁️";
        hideError(terms, null, errorTermsText);
      }, 1500);
    }
  });

  // Evento para ocultar el mensaje de éxito
  sucessBtn.addEventListener("click", () => {
    hideSuccessMessage();
  });
});
