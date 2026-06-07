/**
 * ==========================================================================
 * MENU MOBILE HAMBURGUER (LÓGICA INTERNA)
 * ==========================================================================
 */
export function initNav() {
  const hamburger =
    document.querySelector(".hamburger") ||
    document.querySelector(".mobile-menu");

  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list a");

  if (!hamburger || !navList) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
    });
  });
}
