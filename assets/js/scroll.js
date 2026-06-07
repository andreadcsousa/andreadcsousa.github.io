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
