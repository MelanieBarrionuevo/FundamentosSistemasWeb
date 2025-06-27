document.addEventListener("DOMContentLoaded", () => {
  // --- Menú hamburguesa (unificado) ---
  const toggle = document.getElementById("menu-toggle") || document.getElementById("menuToggle");
  const menu = document.querySelector(".primary.nav-links") || document.getElementById("mainMenu");
  const secondaryMenu = document.querySelector(".secondary.nav-links");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      if (secondaryMenu) secondaryMenu.classList.toggle("active");
    });

    // Opcional: cerrar menú al hacer click en un enlace (solo en móvil)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          menu.classList.remove('active');
          if (secondaryMenu) secondaryMenu.classList.remove('active');
        }
      });
    });
  }

  // --- Validación del formulario de login ---
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username.length >= 3 && password.length >= 4) {
        window.location.href = "contactos.html";
      } else {
        alert("Por favor, ingresa un usuario y contraseña válidos.");
      }
    });
  }

  // --- Funcionalidad "Olvidé mi password" ---
  const olvideLink = document.querySelector('a[href="#"]');
  if (olvideLink) {
    olvideLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "recuperar.html";
    });
  }

  // --- Login con proveedores (simulado) ---
  const providers = {
    google: document.querySelector(".google-provider"),
    facebook: document.querySelector(".facebook-provider"),
    twitter: document.querySelector(".twitter-provider"),
  };

  Object.entries(providers).forEach(([name, button]) => {
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Iniciando sesión con ${name.toUpperCase()}...`);
        window.location.href = "perfil.html";
      });
    }
  });

  // --- Filtro de tarjetas (solo en index.html) ---
  const input = document.querySelector(".search-bar input");
  const cards = document.querySelectorAll(".card");
  if (input && cards.length > 0) {
    input.addEventListener("input", () => {
      const query = input.value.toLowerCase();
      cards.forEach((card) => {
        const title = card.querySelector(".title").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        const matches = title.includes(query) || description.includes(query);
        card.style.display = matches ? "block" : "none";
      });
    });
  }

  // --- Progress calculation based on filled fields ---
  const progressForm = document.querySelector('form');
  if (progressForm) {
    const fields = Array.from(progressForm.querySelectorAll('input, textarea'));
    const progressText = document.getElementById('progress-text');
    const progressCircle = document.getElementById('progress-circle');
    if (progressText && progressCircle && fields.length > 0) {
      const total = fields.length;
      const circumference = 2 * Math.PI * 80; // r=80

      function updateProgress() {
        const filled = fields.filter(f => f.value.trim() !== '').length;
        const percent = Math.round((filled / total) * 100);
        progressText.textContent = percent + '%';
        const offset = circumference - (percent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
      }

      fields.forEach(field => {
        field.addEventListener('input', updateProgress);
      });

      progressCircle.style.strokeDasharray = circumference;
      progressCircle.style.strokeDashoffset = circumference;
      updateProgress();
    }
  }
});
