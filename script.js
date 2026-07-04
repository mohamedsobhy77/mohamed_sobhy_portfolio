function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

const mediaQuery = window.matchMedia("(min-width: 1201px)");
function handleLayoutChange(e) {
  if (e.matches) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu && menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
      icon.setAttribute("aria-expanded", "false");
    }
  }
}
mediaQuery.addEventListener("change", handleLayoutChange);
