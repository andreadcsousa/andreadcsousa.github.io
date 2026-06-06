document.addEventListener("DOMContentLoaded", () => {
  /**
   * ==========================================================================
   * 1. LOGÍSTICA DO MENU HAMBÚRGUER (MOBILE)
   * ==========================================================================
   */
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list a");

  // Alterna o estado das classes ativas ao clicar no botão hambúrguer
  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navList.classList.toggle("active");
    });

    // Fecha o menu automaticamente quando o usuário clica em algum link âncora
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  }

  /**
   * ==========================================================================
   * 2. INSPETOR DINÂMICO DE TECNOLOGIAS (HARD SKILLS)
   * ==========================================================================
   */
  const stackItems = document.querySelectorAll(".stack-item");
  const defBlock = document.getElementById("inspector-default");
  const contentBlock = document.getElementById("inspector-content");
  const titleTarget = document.getElementById("tech-title");
  const descTarget = document.getElementById("tech-description");

  function activateInspector(item) {
    // Remove o destaque visual ativo de todos os cards e insere no atual
    stackItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    // Coleta as strings inseridas nos atributos meta-data do HTML
    const name = item.getAttribute("data-name");
    const desc = item.getAttribute("data-desc");

    // Injeta os textos no painel direito e altera a exibição de blocos
    titleTarget.textContent = name;
    descTarget.textContent = desc;

    if (defBlock && contentBlock) {
      defBlock.style.display = "none";
      contentBlock.style.display = "flex";
    }
  }

  // Mapeia os listeners de ativação em cada item do grid vetorial
  stackItems.forEach((item) => {
    // Ativação por Hover (Desktop)
    item.addEventListener("mouseenter", () => activateInspector(item));

    // Ativação por Clique (Essencial para acessibilidade e telas Mobile)
    item.addEventListener("click", () => activateInspector(item));
  });
});

/**
 * ==========================================================================
 * 3. ALTERNÂNCIA DE ABAS DO MOCKUP DO BROWSER (SOBRE MIM)
 * ==========================================================================
 * Nota: Esta função fica fora do DOMContentLoaded porque é instanciada
 * diretamente via atributo inline 'onclick' na marcação do HTML.
 */
function changeSectionTab(evt, paneId) {
  // Oculta todos os blocos de texto internos do container do browser
  const panes = document.querySelectorAll(".browser-pane");
  panes.forEach((pane) => {
    pane.style.display = "none";
    pane.classList.remove("active");
  });

  // Remove a classe de realce ativo de todos os botões seletores superiores
  const tabs = document.querySelectorAll(".browser-tab-btn");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Mostra apenas o bloco requisitado e adiciona a borda inferior ativa no botão atual
  const selectedPane = document.getElementById(paneId);
  if (selectedPane) {
    selectedPane.style.display = "flex";
    // Pequeno atraso para engatilhar perfeitamente a animação do CSS @keyframes
    setTimeout(() => {
      selectedPane.classList.add("active");
    }, 10);
  }
  evt.currentTarget.classList.add("active");
}

/**
 * ==========================================================================
 * 4. ROLAGEM SUAVE ATÉ O TOPO DA PÁGINA (BACK TO TOP)
 * ==========================================================================
 */
function scrollToTop(evt) {
  evt.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
