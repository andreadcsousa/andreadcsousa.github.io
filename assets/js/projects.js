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
    // 1. Pegamos a string de categorias e limpamos espaços nas pontas com .trim()
    const cardCategoriesStr = (card.getAttribute("data-category") || "").trim();

    // 2. Criamos o array dividindo por qualquer sequência de espaços ou quebras de linha (\s+)
    const cardCategoriesArray = cardCategoriesStr.split(/\s+/);

    // 3. Checamos se a categoria clicada está presente no array limpo
    const hasCategory = cardCategoriesArray.includes(type);

    if (type === "all" || hasCategory) {
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
