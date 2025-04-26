document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Cambia el texto del botón según el tema actual
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Cambiar a modo claro';
    } else {
        this.textContent = 'Cambiar a modo oscuro';
    }
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  