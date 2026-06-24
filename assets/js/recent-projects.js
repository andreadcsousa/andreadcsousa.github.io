export function initRecentProjects() {
  const container = document.getElementById("dynamic-projects-container");
  if (!container) return;

  fetch("projects.html")
    .then((response) => {
      if (!response.ok) throw new Error("Erro ao carregar projetos.");
      return response.text();
    })
    .then((htmlText) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");
      const allProjects = Array.from(
        doc.querySelectorAll(".project-flip-container"),
      );
      const recentProjects = allProjects.slice(0, 3);

      container.innerHTML = "";

      recentProjects.forEach((project) => {
        const title =
          project.querySelector(".mini-project-title")?.innerText.trim() ||
          project.querySelector(".project-header-back h3")?.innerText.trim();

        const contextParagraphs =
          project.querySelectorAll(".project-context p");
        const situacao = contextParagraphs[0]?.innerText.trim() || "";
        const acao = contextParagraphs[1]?.innerText.trim() || "";
        const resultado = contextParagraphs[2]?.innerText.trim() || "";

        const imgSrc =
          project.getAttribute("data-image") || "assets/image/default.jpg";
        const githubLink =
          project
            .querySelector(".project-footer-back a")
            ?.getAttribute("href") || "#";

        const tagsElements = project.querySelectorAll(".project-tags span");
        const tagsHtml = Array.from(tagsElements)
          .map((tag) => tag.outerHTML)
          .join(" ");

        const projectCard = document.createElement("article");
        projectCard.className = "project-card";

        // Aqui já integramos a estrutura HTML com as classes corretas de texto para o CSS abaixo:
        projectCard.innerHTML = `
          <div class="project-img-wrapper">
            <img src="${imgSrc}" alt="${title}" />
          </div>
          <div class="project-card-content">
            <h3>${title}</h3>
            
            <div class="project-business-context">
              <p><span class="context-label">Situação:</span> ${situacao}</p>
              <p><span class="context-label">Ação:</span> ${acao}</p>
              <p><span class="context-label">Resultado:</span> ${resultado}</p>
            </div>

            <div class="project-tags">
              ${tagsHtml}
            </div>
            <a href="${githubLink}" target="_blank" class="project-link">
              <i class="fab fa-github"></i> Ver no GitHub
            </a>
          </div>
        `;
        container.appendChild(projectCard);
      });
    })
    .catch((error) => {
      console.error("Erro na carga dinâmica dos projetos:", error);
      container.innerHTML =
        "<p>Não foi possível carregar os projetos recentes.</p>";
    });
}
