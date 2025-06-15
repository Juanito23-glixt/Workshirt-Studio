
function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const div = document.getElementById('carrito');
  if (carrito.length === 0) {
    div.innerHTML = "<p>No hay productos en el carrito.</p>";
    return;
  }
  let html = "<ul>";
  let total = 0;
  carrito.forEach(p => {
    html += `<li>${p.nombre} - $${p.precio}</li>`;
    total += p.precio;
  });
  html += `</ul><p><strong>Total: $${total}</strong></p>`;
  div.innerHTML = html;
}

function ordenarWhatsApp() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  let mensaje = "Hola, quiero ordenar estas camisas:%0A";
  carrito.forEach(p => {
    mensaje += `- ${p.nombre} ($${p.precio})%0A`;
  });
  const url = `https://wa.me/5210000000000?text=${mensaje}`;
  window.open(url, "_blank");
}

mostrarCarrito();
