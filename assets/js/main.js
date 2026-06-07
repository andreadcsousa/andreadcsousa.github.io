/**
 * ===========================================================
 * PORTFÓLIO - SCRIPTS CENTRAIS (ORQUESTRADOR)
 * =========================================================== */

import { initNav } from "./nav.js";
import { changeSectionTab } from "./tabs.js";
import { filterProjects } from "./projects.js";
import {
  openExpModal,
  closeExpModal,
  closeModalOnOutsideClick,
} from "./modals.js";
import { initStackInspector } from "./stack.js";
import { scrollToTop } from "./scroll.js";

// disponibiliza funções para o HTML
window.changeSectionTab = changeSectionTab;
window.openExpModal = openExpModal;
window.closeExpModal = closeExpModal;
window.closeModalOnOutsideClick = closeModalOnOutsideClick;
window.filterProjects = filterProjects;
window.scrollToTop = scrollToTop;

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initStackInspector();
});
