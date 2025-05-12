const accordionHeaders = document.querySelectorAll(".accordion__header");
const panels = document.querySelectorAll(".panel");

// Inicializar el primer panel como abierto
panels[0].style.maxHeight = panels[0].scrollHeight + "px";
accordionHeaders[0].querySelector(".plus").style.display = "none";
accordionHeaders[0].querySelector(".minus").style.display = "block";

accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    const panel = panels[index];
    const plusIcon = header.querySelector(".plus");
    const minusIcon = header.querySelector(".minus");

    // Alternar el panel
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }

    // Cerrar otros paneles
    panels.forEach((otherPanel, otherIndex) => {
      if (otherIndex !== index) {
        otherPanel.style.maxHeight = null;
        accordionHeaders[otherIndex].querySelector(".plus").style.display =
          "block";
        accordionHeaders[otherIndex].querySelector(".minus").style.display =
          "none";
      }
    });
  });
});
