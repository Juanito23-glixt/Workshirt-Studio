
const productos = [
  { id: 1, nombre: "Camisa Skull", precio: 300, img: "https://via.placeholder.com/200x200?text=Skull" },
  { id: 2, nombre: "Camisa Graffiti", precio: 320, img: "https://via.placeholder.com/200x200?text=Graffiti" },
  { id: 3, nombre: "Camisa Arte Urbano", precio: 290, img: "https://via.placeholder.com/200x200?text=Arte+Urbano" },
  { id: 4, nombre: "Camisa Minimal", precio: 280, img: "https://via.placeholder.com/200x200?text=Minimal" },
  { id: 5, nombre: "Camisa Retro", precio: 310, img: "https://via.placeholder.com/200x200?text=Retro" }
];

const lista = document.getElementById('lista-productos');

productos.forEach(p => {
  const div = document.createElement('div');
  div.className = 'producto';
  div.innerHTML = `
    <img src="${p.img}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p>Precio: $${p.precio} por docena</p>
    <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
  `;
  lista.appendChild(div);
});

function agregarAlCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const prod = productos.find(p => p.id === id);
  carrito.push(prod);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert("Producto agregado al carrito");
}
