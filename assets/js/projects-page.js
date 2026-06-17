/**
 * ==========================================================================
 * FILTRO DINÂMICO DOS PROJETOS (EXCLUSIVO DA PÁGINA DE PROJETOS)
 * ==========================================================================
 */

// Armazena o estado ativo de cada categoria de filtro
const activeFilters = {
  category: "all",
  type: "all",
  area: "all",
  tool: "all",
  business: "all",
  year: "all",
};

/**
 * Função global disparada pelo clique nas opções do menu dropdown do HTML
 */
window.setDropdownFilter = function (category, value, defaultLabel, event) {
  // Evita comportamento de link se houver evento
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // 1. Atualiza o estado global do filtro correspondente
  if (category in activeFilters) {
    activeFilters[category] = value;
  }

  // 2. Atualiza visualmente o texto do botão do menu pai para mostrar o que foi selecionado
  // Procura o elemento <li> pai mais próximo que segura o dropdown
  const clickedElement = event ? event.target : null;
  if (clickedElement) {
    const parentLi = clickedElement.closest(
      ".portfolio-dropdown-menu > ul > li",
    );
    if (parentLi) {
      const labelSpan = parentLi.querySelector("span");
      if (labelSpan) {
        if (value === "all") {
          labelSpan.textContent = defaultLabel;
          parentLi.style.borderColor = ""; // Reseta a borda se voltar ao "Todos"
        } else {
          labelSpan.textContent = clickedElement.textContent.trim();
          parentLi.style.borderColor = "#51e5ff"; // Destaca o menu que tem filtro ativo
        }
      }
    }
  }

  // 3. Executa a filtragem dos cards na tela
  applyFiltersToCards();
};

/**
 * Faz a varredura em todos os cards e aplica as regras cruzadas de display
 */
function applyFiltersToCards() {
  // Seleciona os containers de perspectiva dos cards (sua lista real de projetos)
  const containers = document.querySelectorAll(".project-flip-container");

  containers.forEach((container) => {
    // Procura o elemento de card real dentro dele para extrair os data-attributes
    const card = container.querySelector(".project-card") || container;

    // Coleta as tags de metadados salvas no HTML do card
    const cardCategory = (card.getAttribute("data-category") || "").trim();
    const cardType = (card.getAttribute("data-type") || "").trim();
    const cardArea = (card.getAttribute("data-area") || "").trim();
    const cardTool = (card.getAttribute("data-tool") || "").trim();
    const cardBusiness = (card.getAttribute("data-business") || "").trim();
    const cardYear = (card.getAttribute("data-year") || "").trim();

    // Validações individuais (se for 'all', a condição é automaticamente verdadeira)
    const matchesCategory =
      activeFilters.category === "all" ||
      cardCategory.includes(activeFilters.category);
    const matchesType =
      activeFilters.type === "all" || cardType.includes(activeFilters.type);
    const matchesArea =
      activeFilters.area === "all" || cardArea.includes(activeFilters.area);
    const matchesTool =
      activeFilters.tool === "all" || cardTool.includes(activeFilters.tool);
    const matchesBusiness =
      activeFilters.business === "all" ||
      cardBusiness.includes(activeFilters.business);
    const matchesYear =
      activeFilters.year === "all" || cardYear === activeFilters.year;

    // O projeto só se mantém visível se passar em ABSOLUTAMENTE TODOS os filtros ativos
    if (
      matchesCategory &&
      matchesType &&
      matchesArea &&
      matchesTool &&
      matchesBusiness &&
      matchesYear
    ) {
      container.style.display = "block";
      setTimeout(() => {
        container.style.opacity = "1";
        container.style.transform = "scale(1)";
      }, 10);
    } else {
      container.style.opacity = "0";
      container.style.transform = "scale(0.98)";
      setTimeout(() => {
        container.style.display = "none";
      }, 250);
    }
  });
}

hljs.highlightAll();

/**
 * ==========================================================================
 * ROLAGEM SUAVE ATÉ O TOPO DA PÁGINA
 * ==========================================================================
 */
export function scrollToTop(evt) {
  evt.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.scrollToTop = scrollToTop;
