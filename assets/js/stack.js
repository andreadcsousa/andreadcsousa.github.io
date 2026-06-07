/**
 * ==========================================================================
 * INSPETOR DA NUVEM DE FERRAMENTAS (TECH STACK)
 * ==========================================================================
 */
export function initStackInspector() {
  const stackItems = document.querySelectorAll(".stack-item");

  const defBlock = document.getElementById("inspector-default");
  const contentBlock = document.getElementById("inspector-content");

  const titleTarget = document.getElementById("tech-title");
  const descTarget = document.getElementById("tech-description");

  function activateInspector(item) {
    stackItems.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");

    const name = item.getAttribute("data-name");
    const desc = item.getAttribute("data-desc");

    titleTarget.textContent = name;
    descTarget.textContent = desc;

    defBlock.style.display = "none";
    contentBlock.style.display = "flex";
  }

  stackItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      activateInspector(item);
    });

    item.addEventListener("click", () => {
      activateInspector(item);
    });
  });
}
