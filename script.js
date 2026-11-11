(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      nav.classList.toggle("open", open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
      nav.classList.remove("open");
    }));
  }

  const progress = document.querySelector(".scroll-progress");
  let ticking = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = percent + "%";
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();

  const revealTargets = document.querySelectorAll(".section-head,.discipline-card,.featured-project,.project-foot,.video-feature,.story-copy,.community-panel,.intro-heading,.intro-copy");
  revealTargets.forEach(el => el.classList.add("reveal"));
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add("is-visible"));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();