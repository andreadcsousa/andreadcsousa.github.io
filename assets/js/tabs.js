/**
 * ==========================================================================
 * ALTERNÂNCIA DE ABAS DO PAINEL BROWSER
 * ==========================================================================
 */
export function changeSectionTab(evt, paneId) {
  const panes = document.querySelectorAll(".browser-pane");

  panes.forEach((pane) => {
    pane.style.display = "none";
    pane.classList.remove("active");
  });

  const tabs = document.querySelectorAll(".browser-tab-btn");

  tabs.forEach((tab) => tab.classList.remove("active"));

  const activePane = document.getElementById(paneId);

  if (activePane) {
    activePane.style.display = "flex";
    activePane.classList.add("active");
  }

  if (evt.currentTarget && evt.currentTarget.classList) {
    evt.currentTarget.classList.add("active");
  }
}
