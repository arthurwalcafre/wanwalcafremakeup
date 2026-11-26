// Fecha o menu mobile automaticamente ao clicar em qualquer link
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});