document.addEventListener("DOMContentLoaded", () => {
  /**
   * ==========================================================================
   * 1. CONTROLE DO MENU HAMBÚRGUER (MOBILE)
   * ==========================================================================
   */
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list a");

  if (hamburger && navList) {
    // Alterna o estado aberto/fechado do menu ao clicar
    hamburger.addEventListener("click", () => {
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !isExpanded);
      hamburger.classList.toggle("active");
      navList.classList.toggle("active");
    });

    // Fecha o menu automaticamente ao clicar em qualquer link de ancoragem
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  }

  /**
   * ==========================================================================
   * 2. ALTERNÂNCIA DE ABAS INTERATIVAS (MOCKUP DO BROWSER - SOBRE MIM)
   * ==========================================================================
   */
  const tabButtons = document.querySelectorAll(".browser-tab-btn");
  const panes = document.querySelectorAll(".browser-pane");

  if (tabButtons.length > 0 && panes.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", (evt) => {
        const targetPaneId = button.getAttribute("onclick")
          ? button.getAttribute("onclick").match(/'([^']+)'/)[1]
          : null;

        if (targetPaneId) {
          evt.preventDefault();

          // 1. Desativa todas as abas e esconde todos os painéis
          tabButtons.forEach((tab) => tab.classList.remove("active"));
          panes.forEach((pane) => {
            pane.classList.remove("active");
            pane.style.display = "none";
          });

          // 2. Ativa a aba clicada
          button.classList.add("active");

          // 3. Mostra o painel correspondente com animação
          const activePane = document.getElementById(targetPaneId);
          if (activePane) {
            activePane.style.display = "flex";
            // Timeout sutil para garantir o gatilho da animação CSS fadeIn
            setTimeout(() => {
              activePane.classList.add("active");
            }, 10);
          }
        }
      });
    });
  }

  /**
   * ==========================================================================
   * 3. INSPETOR DINÂMICO DA TECH STACK & FERRAMENTAS
   * ==========================================================================
   */
  const stackItems = document.querySelectorAll(".stack-item");
  const panelTitle = document.getElementById("tech-title");
  const panelDesc = document.getElementById("tech-desc");

  // Dicionário de fallback caso queira centralizar os textos ou adicionar novos metadados
  const techDataFallback = {
    python: {
      title: "Python",
      desc: "Linguagem utilizada para automação de processos, engenharia de dados (ETL), criação de scripts de raspagem de dados (Web Scraping) e análises estatísticas robustas usando Pandas e NumPy.",
    },
    sql: {
      title: "Banco de Dados & SQL",
      desc: "Domínio técnico na administração, consulta e manipulação de estruturas de dados modernas. Experiência prática consolidada na arquitetura de bancos de dados relacionais e NoSQL, garantindo integridade, otimização de queries, indexação e segurança.",
    },
    powerbi: {
      title: "Power BI & Analytics",
      desc: "Construção de dashboards executivos de alto impacto voltados para o negócio, aplicando modelagem dimensional avançada (Star Schema), cálculos complexos em DAX e conceitos rigorosos de Data Storytelling.",
    },
    databricks: {
      title: "Databricks & Big Data",
      desc: "Processamento de dados em larga escala de forma distribuída. Criação de notebooks analíticos e pipelines otimizados integrando ecossistemas de computação em nuvem com PySpark.",
    },
    api: {
      title: "Integrações & APIs",
      desc: "Desenvolvimento e consumo de APIs RESTful para ingestão automatizada de dados brutos de plataformas externas para data lakes ou armazéns centrais.",
    },
    excel: {
      title: "Planilhas Avançadas",
      desc: "Modelagem rápida de dados, prototipagem de indicadores chave de performance (KPIs) e suporte tático a áreas de negócio que dependem de estruturas tradicionais.",
    },
    scrum: {
      title: "Metodologias Ágeis",
      desc: "Gestão técnica de projetos utilizando frameworks como Scrum e Kanban, garantindo entregas incrementais contínuas, alinhamento com stakeholders e eficiência operacional.",
    },
  };

  function updateInspector(item) {
    // Remove o destaque visual de todos os cards do grid e aplica no atual
    stackItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    // Tenta ler do atributo do HTML (data-name/data-desc) ou busca do dicionário acima
    const techKey = item.getAttribute("data-tech");
    const attrName = item.getAttribute("data-name");
    const attrDesc = item.getAttribute("data-desc");

    if (panelTitle && panelDesc) {
      if (attrName && attrDesc) {
        panelTitle.textContent = attrName;
        panelDesc.textContent = attrDesc;
      } else if (techKey && techDataFallback[techKey]) {
        panelTitle.textContent = techDataFallback[techKey].title;
        panelDesc.textContent = techDataFallback[techKey].desc;
      }
    }
  }

  if (stackItems.length > 0) {
    stackItems.forEach((item) => {
      // Evento de passar o rato (Desktop)
      item.addEventListener("mouseenter", () => updateInspector(item));

      // Evento de toque/clique (Essencial para acessibilidade e Mobile)
      item.addEventListener("click", () => updateInspector(item));
    });
  }
});

/**
 * ==========================================================================
 * 4. ROLAGEM SUAVE ATÉ O TOPO (BACK TO TOP)
 * ==========================================================================
 */
function scrollToTop(evt) {
  if (evt) evt.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
