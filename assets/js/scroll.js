/**
 * ==========================================================================
 * ROLAGEM SUAVE CONTROLADA PARA LINKS INTERNOS
 * ==========================================================================
 */
export function initSmoothScroll() {
  // Seleciona todos os links que apontam para um ID interno (ex: #s-about)
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();

      const id = this.getAttribute("href");

      // Se for apenas "#", rola para o topo da página
      if (id === "#") {
        customScrollTo(0, 1000); // 1000ms = 1 segundo de duração
        return;
      }

      const targetSection = document.querySelector(id);

      if (targetSection) {
        // Pega a posição do elemento em relação ao topo do site
        const targetPosition = targetSection.offsetTop;

        // Se o seu header for fixo no topo, mude o 0 abaixo para a altura dele (ex: 80)
        const headerOffset = 0;
        const finalPosition = targetPosition - headerOffset;

        customScrollTo(finalPosition, 1000); // Rola em 1 segundo de forma controlada
      }
    });
  });
}

// Função matemática para suavizar o movimento (suave no início e no fim)
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

// Executa a animação frame por frame controlando o relógio
function customScrollTo(to, duration) {
  const start = window.scrollY || window.pageYOffset;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;

  function animateScroll() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  }
  animateScroll();
}
