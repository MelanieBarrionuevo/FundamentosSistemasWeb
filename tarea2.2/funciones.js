document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinksPrimary = document.querySelector('.primary.nav-links');
  const navLinksSecondary = document.querySelector('.secondary.nav-links');
  if (toggle && navLinksPrimary && navLinksSecondary) {
    toggle.addEventListener("click", () => {
      navLinksPrimary.classList.toggle("active");
      navLinksSecondary.classList.toggle("active");
    });
  }
});

function determinarPaquete() {
  const dinero = parseFloat(document.getElementById("dinero").value);
  const resultado = document.getElementById("paquete");

  if (isNaN(dinero) || dinero < 0) {
    resultado.textContent = "Por favor ingresa una cantidad válida.";
    return;
  }

  let mensaje = "";

  if (dinero >= 50000) {
    mensaje = "Paquete A: Televisión, un modular, tres pares de zapatos, cinco camisas y cinco pantalones.";
  } else if (dinero >= 20000) {
    mensaje = "Paquete B: Grabadora, tres pares de zapatos, cinco camisas y cinco pantalones.";
  } else if (dinero >= 10000) {
    mensaje = "Paquete C: Dos pares de zapatos, tres camisas y tres pantalones.";
  } else {
    mensaje = "Paquete D: Un par de zapatos, dos camisas y dos pantalones.";
  }

  resultado.textContent = mensaje;
}
