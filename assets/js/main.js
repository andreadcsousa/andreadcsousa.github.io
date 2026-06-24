/**
 * ===========================================================
 * PORTFÓLIO - SCRIPTS CENTRAIS (ORQUESTRADOR)
 * =========================================================== */

// Caminhos corrigidos de forma relativa para o GitHub Pages encontrar os arquivos na mesma pasta
import { initNav } from "./nav.js";
import { changeSectionTab } from "./tabs.js";
import { filterProjects } from "./projects.js";
import {
  openExpModal,
  closeExpModal,
  closeModalOnOutsideClick,
} from "./modals.js";
import { initStackInspector } from "./stack.js";
import { initSmoothScroll } from "./scroll.js";
import { initRecentProjects } from "./recent-projects.js";

// Disponibiliza as funções para o HTML conseguir chamá-las no onclick
window.changeSectionTab = changeSectionTab;
window.openExpModal = openExpModal;
window.closeExpModal = closeExpModal;
window.closeModalOnOutsideClick = closeModalOnOutsideClick;
window.filterProjects = filterProjects;

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initStackInspector();
  initRecentProjects();
  initSmoothScroll();
});
