document.addEventListener("DOMContentLoaded", function () {
  // Agora garantimos que o script só rode quando o DOM estiver pronto
  const hero = document.querySelector("#hero");
  const downButton = hero ? hero.querySelector("#hero .hero-cta .hero-cta-down-button .down-arrow-icon") : null;

  if (downButton && hero) {
    downButton.addEventListener("click", function () {
      window.scrollTo({
        top: hero.offsetTop + hero.offsetHeight,
        behavior: "smooth",
      });
    });
  } else {
    console.error("Erro: botão ou primeira div não encontrados.");
  }
});
