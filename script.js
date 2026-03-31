// Seleccionamos los elementos del DOM que vamos a utilizar
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const enlacesMenu = document.querySelectorAll(".nav-links li a");

// 1. Abrir y cerrar el menú móvil al hacer clic en el botón "hamburguesa"
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 2. Cerrar el menú automáticamente cuando se hace clic en un enlace (solo afecta en móvil)
enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Opcional: Cambiar el fondo del header al hacer scroll (para que destaque más al bajar)
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#0a0a0a"; // Fondo más oscuro
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.8)";
  } else {
    header.style.backgroundColor = "#121212"; // Fondo original
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  }
});
