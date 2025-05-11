# Frontend - Intro component with sign up form solution

> Esta es mi solución al desafío **Intro component with sign up form solution** de Frontend Mentor. Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de codificación mediante la construcción de proyectos realistas.

# 📖 Descripción general

### El desafío

Los usuarios deben poder:

1. Ver el diseño óptimo según el tamaño de pantalla de su dispositivo.

2. Ver los diseños flex-box y su estructura.

3. Ver la pagina con un mensaje de agradecimiento una vez enviado el formulario.

4. Ver los mensajes de errores para poder guiarse en el formulario si algo se produce.

5. Ver en tiempo real cada mensaje de error.

6. Ver el campo de contraseña para poder ocultar o mostrarla.

### Screenshot

#### Vista de escritorio

![](../design/Results/Desktop-Result.png)
![](../design/Results/Desktop-Result-Error.png)
![](../design/Results/Desktop-Result-Sucess.png)

**Descripción**: Esta son las captura de pantalla de mi solución al desafío **Intro component with sign up form solution**. Muestra la vista de escritorio de el componente, con un diseño limpio.

### Links

- Solution URL: [**Solucion**](https://github.com/ImBenja/Frontend-Challenges/tree/main/Newbie/Free/18-intro-component-with-signup-form-master)
- Live Site URL: [**Sitio en Vivo**](https://intro-component-formf.netlify.app/)

## 🛠️ Mi proceso

### Tecnologias utilizadas

- **_HTML:_** Estructura semántica de toda la informacion y el formulario.

- **_CSS:_** Estilos avanzados con flex-box.

- **_JavaScript:_** Funcionalidad para los inputs y detalles extras.

- **_Google Fonts:_** Fuente Poppins para un diseño moderno.

### Lo que Aprendi

1. _Manejo de Formulario_: Aprendi a manejar multiples inputs y validarlos.

2. _Validacion de Formularios_: Aprendi a validar formularios y mostrar mensajes de error.

3. _Debounce_: Aprendi a usar debounce para evitar que se envien multiples peticiones al servidor.

4. _Validacion de Emails_: Aprendi a validar emails y mostrar mensajes de error.

```js
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
```

## 👨‍💻 Autor

- GitHub - [ImBenja](https://github.com/ImBenja)
- Frontend Mentor - [@ImBenja](https://www.frontendmentor.io/profile/ImBenja)
- Instagram - [@benjajuarez1\_](https://www.instagram.com/benjajuarez1_/?hl=es)
- Twitter - [@benjajuarez_2](https://x.com/benjajuarez_2)
- Linkedin - [Benjamim Juarez](https://www.linkedin.com/in/benjam%C3%ADn-ju%C3%A1rez-b712592b8/)

## 🙏 Agradecimientos

> Agradezco a Frontend Mentor por proporcionar este desafío y a la comunidad por su apoyo y feedback.
