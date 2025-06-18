let form = document.getElementById('compraFormulario');
let lista = document.getElementById('listaCompras');

function mostrarCompras() {
  lista.innerHTML = '';
  const compras = JSON.parse(localStorage.getItem('compras')) || [];
  compras.forEach((compra, index) => {
    const li = document.createElement('li');
    li.className = 'lista-grupo-item';
    li.textContent = `${compra.nombre} (${compra.correo}) compró: ${compra.producto}`;
    lista.appendChild(li);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const producto = document.getElementById('producto').value;

  const nuevaCompra = { nombre, correo, producto };

  const compras = JSON.parse(localStorage.getItem('compras')) || [];
  compras.push(nuevaCompra);
  localStorage.setItem('compras', JSON.stringify(compras));
  form.reset();
  mostrarCompras();
});

window.onload = mostrarCompras;