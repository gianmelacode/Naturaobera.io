
  javascript
const botonesAgregar = document.querySelectorAll('.agregar');
const carrito = document.querySelector('#carrito');
const total = document.querySelector('#total');

let precioTotal = 0;

botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', () => {
    const nombreProducto = boton.getAttribute('data-producto');
    const precioProducto = Math.floor(Math.random() * 100 + 1);
    precioTotal += precioProducto;

    const li = document.createElement('li');
    li.innerHTML = `${nombreProducto} - $${precioProducto.toFixed(2)} <button class="borrar">X</button>`;
    carrito.appendChild(li);

    const botonesBorrar = document.querySelectorAll('.borrar');
    botonesBorrar.forEach((botonBorrar) => {
      botonBorrar.addEventListener('click', () => {
        const precioProductoBorrado = parseFloat(botonBorrar.parentNode.textContent.split(' ')[3].substring(1));
        precioTotal -= precioProductoBorrado;
        total.innerHTML = `Total: $${precioTotal.toFixed(2)}`;
        botonBorrar.parentNode.remove();
      });
    });

    total.innerHTML = `Total: $${precioTotal.toFixed(2)}`;
  });
});
