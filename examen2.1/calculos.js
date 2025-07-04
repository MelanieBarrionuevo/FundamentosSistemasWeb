function calcularPrecios() {
  // Playa (Ecuador)
  document.getElementById('precio-santaelena').textContent = '$' + (1200 * 1.15).toFixed(2);
  document.getElementById('precio-carmen').textContent = '$' + (900 * 1.16).toFixed(2);
  // Montaña (Ecuador y Perú)
  document.getElementById('precio-cotopaxi').textContent = '$' + (700 * 1.15).toFixed(2); // Ecuador
  document.getElementById('precio-machu').textContent = '$' + (1500 * 1.18).toFixed(2); // Perú
  // Ciudad (Chile y Argentina)
  document.getElementById('precio-chile').textContent = '$' + (500 * 1.19).toFixed(2); // Chile
  document.getElementById('precio-baires').textContent = '$' + (1100 * 1.21).toFixed(2); // Argentina
}

function obtenerPrecio(destino) {
  switch(destino) {
    case 'Playa Montañita': return {precio: 1200, impuesto: 1.15};
    case 'Playa del Carmen': return {precio: 900, impuesto: 1.16};
    case 'Cotopaxi': return {precio: 700, impuesto: 1.15};
    case 'Machu Picchu': return {precio: 1500, impuesto: 1.18};
    case 'Santiago de Chile': return {precio: 500, impuesto: 1.19};
    case 'Buenos Aires': return {precio: 1100, impuesto: 1.21};
    default: return {precio: 0, impuesto: 1};
  }
}

let ultimaReserva = null;

function validarReserva() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const destino = document.getElementById('destino').value;
  const fechas = document.getElementById('fechas').value;
  const mensaje = document.getElementById('mensajeReserva');

  if (!nombre || !email || !destino || !fechas) {
    mensaje.innerHTML = '<div class="alert alert-danger">Todos los campos son obligatorios.</div>';
    return false;
  }
  if (/\d/.test(nombre)) {
    mensaje.innerHTML = '<div class="alert alert-danger">El nombre no debe contener números.</div>';
    return false;
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    mensaje.innerHTML = '<div class="alert alert-danger">Email no válido.</div>';
    return false;
  }
  const {precio, impuesto} = obtenerPrecio(destino);
  const precioFinal = (precio * impuesto).toFixed(2);
  ultimaReserva = {nombre, email, destino, fechas, precioFinal};
  mensaje.innerHTML = `<div class='alert alert-success'>¡Reserva realizada con éxito!</div>
    <div class='mt-2 alert alert-success'><strong>Datos de la reserva:</strong><br>
    Nombre: ${nombre}<br>
    Email: ${email}<br>
    Destino: ${destino}<br>
    Fecha: ${fechas}<br>
    Precio final: $${precioFinal}</div>
    <button class='btn btn-danger mt-3' onclick='cancelarReserva()'>Cancelar Reserva</button>`;
  return false;
}

function cancelarReserva() {
  const mensaje = document.getElementById('mensajeReserva');
  if (ultimaReserva) {
    mensaje.innerHTML = `<div class='alert alert-warning'>Reserva cancelada con éxito.</div>
      <div class='mt-2 alert alert-warning'><strong>Reserva cancelada:</strong><br>
      Nombre: ${ultimaReserva.nombre}<br>
      Email: ${ultimaReserva.email}<br>
      Destino: ${ultimaReserva.destino}<br>
      Fecha: ${ultimaReserva.fechas}<br>
      Precio final: $${ultimaReserva.precioFinal}</div>`;
    ultimaReserva = null;
  } else {
    mensaje.innerHTML = '<div class="alert alert-info">No hay reserva activa para cancelar.</div>';
  }
}

function limpiarMensajeReserva() {
  document.getElementById('mensajeReserva').innerHTML = '';
}
