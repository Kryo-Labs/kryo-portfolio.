"use strict";

// Sem suporte ou com movimento reduzido, todo o conteúdo continua visível.
const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
if ("IntersectionObserver" in window && !movimentoReduzido.matches) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".projeto-cartao, #sobre, #contato").forEach((elemento) => {
    observador.observe(elemento);
    elemento.classList.add("revelar");
  });
}
