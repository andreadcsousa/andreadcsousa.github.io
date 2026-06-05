/**
 * ==========================================================================
 * INTERNA ALTERNÂNCIA DE ABAS DO PAINEL BROWSER
 * ==========================================================================
 */
function changeSectionTab(evt, paneId) {
  // 1. Oculta todos os blocos de conteúdo internos
  const panes = document.querySelectorAll(".browser-pane");
  panes.forEach((pane) => {
    pane.style.display = "none";
    pane.classList.remove("active");
  });

  // 2. Desativa a classe active visual de todos os botões seletores
  const tabs = document.querySelectorAll(".browser-tab-btn");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // 3. Mostra o bloco selecionado e adiciona classe ativa
  const activePane = document.getElementById(paneId);
  if (activePane) {
    // Alinhamento flexivel mantido para as seções internas
    activePane.style.display = "flex";
    activePane.classList.add("active");
  }
  evt.currentTarget.classList.add("active");
}

/**
 * ==========================================================================
 * SISTEMA COMPORTAMENTAL DOS MODAIS DE DETALHES
 * ==========================================================================
 */
function openExpModal(modalId) {
  const targetModal = document.getElementById(modalId);
  if (targetModal) {
    targetModal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Trava scroll da página de fundo
  }
}

function closeExpModal(modalId) {
  const targetModal = document.getElementById(modalId);
  if (targetModal) {
    targetModal.style.display = "none";
    document.body.style.overflow = "auto"; // Reativa rolagem da viewport
  }
}

// Fecha modal caso ocorra clique fora da caixa de diálogo interna
function closeModalOnOutsideClick(evt, modalId) {
  if (evt.target.id === modalId) {
    closeExpModal(modalId);
  }
}

/**
 * ==========================================================================
 * ATIVAÇÃO MENU TOGGLE MOBILE HAMBURGUER
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");

  if (mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener("click", () => {
      navList.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
    });
  }
});

/**
 * ==========================================================================\
 * FILTRO DINÂMICO DA GALERIA DE PROJETOS
 * ==========================================================================
 */
function filterProjects(type, evt) {
  // 1. Atualiza o estado ativo nos botões de filtro
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => btn.classList.remove("active"));
  evt.currentTarget.classList.add("active");

  // 2. Filtra os cards baseado no atributo data-type
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const cardType = card.getAttribute("data-type");

    if (type === "all" || cardType === type) {
      card.style.display = "flex";
      // Pequeno efeito fade-in ao reexibir
      card.style.opacity = "0";
      setTimeout(() => {
        card.style.opacity = "1";
      }, 10);
    } else {
      card.style.display = "none";
    }
  });
}

/**
 * ==========================================================================\
 * MECANISMO DE INSPEÇÃO DA NUVEM DE FERRAMENTAS (TECH STACK)
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  const stackItems = document.querySelectorAll(".stack-item");
  const defBlock = document.getElementById("inspector-default");
  const contentBlock = document.getElementById("inspector-content");
  const titleTarget = document.getElementById("tech-title");
  const descTarget = document.getElementById("tech-description");

  function activateInspector(item) {
    // Remove classe ativa de todos e adiciona no atual
    stackItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    // Coleta os metadados dos atributos do HTML
    const name = item.getAttribute("data-name");
    const desc = item.getAttribute("data-desc");

    // Injeta os dados no painel e alterna a exibição
    titleTarget.textContent = name;
    descTarget.textContent = desc;

    defBlock.style.display = "none";
    contentBlock.style.display = "flex";
  }

  stackItems.forEach((item) => {
    // Ativa ao passar o mouse (desktop)
    item.addEventListener("mouseenter", () => activateInspector(item));

    // Ativa ao clicar (essencial para acessibilidade e mobile)
    item.addEventListener("click", () => activateInspector(item));
  });
});

/**
 * ==========================================================================\
 * ROLAGEM SUAVE ATÉ O TOPO DA PÁGINA
 * ==========================================================================
 */
function scrollToTop(evt) {
  evt.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
