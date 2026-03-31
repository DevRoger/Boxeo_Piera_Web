// Seleccionamos los elementos del DOM
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const enlacesMenu = document.querySelectorAll(".nav-links li a");

// Función centralizada para abrir/cerrar el menú
function toggleMobileMenu() {
  navLinks.classList.toggle("active"); // Abre/cierra el menú
  menuToggle.classList.toggle("open"); // Activa/desactiva la animación del botón (X)
}

// Función centralizada para CERRAR forzosamente el menú
function closeMobileMenu() {
  navLinks.classList.remove("active");
  menuToggle.classList.remove("open");
}

// 1. Abrir/cerrar menú al hacer clic en el botón
menuToggle.addEventListener("click", () => {
  toggleMobileMenu();
});

// 2. Cerrar automáticamente al hacer clic en un enlace del menú
enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    closeMobileMenu();
  });
});

// 3. Cerrar si se hace clic fuera del menú abierto
// Escuchamos clics en todo el documento
document.addEventListener("click", (evento) => {
  // Verificamos si el menú móvil está actualmente abierto
  const isMenuOpen = navLinks.classList.contains("active");

  // Verificamos si el clic ocurrió dentro del menú o dentro del botón toggle
  // .closest() busca si el elemento clickeado o sus padres tienen esa clase
  const clicInsideMenu = evento.target.closest(".nav-links");
  const clicInsideToggle = evento.target.closest(".menu-toggle");

  // Si el menú está abierto Y el clic NO fue dentro del menú Y NO fue en el botón...
  if (isMenuOpen && !clicInsideMenu && !clicInsideToggle) {
    closeMobileMenu();
  }
});
