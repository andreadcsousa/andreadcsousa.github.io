/**
 * ==========================================================================
 * FILTRO DINÂMICO DA GALERIA DE PROJETOS
 * ==========================================================================
 */
export function filterProjects(type, evt) {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn) => btn.classList.remove("active"));

  evt.currentTarget.classList.add("active");

  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const cardType = card.getAttribute("data-type");

    if (type === "all" || cardType === type) {
      card.style.display = "flex";

      card.style.opacity = "0";

      setTimeout(() => {
        card.style.opacity = "1";
      }, 10);
    } else {
      card.style.display = "none";
    }
  });
}
