/**
 * ==========================================================================
 * SISTEMA COMPORTAMENTAL DOS MODAIS DE DETALHES
 * ==========================================================================
 */
export function openExpModal(modalId) {
  const targetModal = document.getElementById(modalId);

  if (targetModal) {
    targetModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

export function closeExpModal(modalId) {
  const targetModal = document.getElementById(modalId);

  if (targetModal) {
    targetModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

export function closeModalOnOutsideClick(evt, modalId) {
  if (evt.target.id === modalId) {
    closeExpModal(modalId);
  }
}
