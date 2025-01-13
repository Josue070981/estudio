// Referencias a elementos
const cantidadPescadoInput = document.getElementById('cantidadPescado');
const precioPescadoInput = document.getElementById('precioPescado');
const totalPescadoInput = document.getElementById('totalPescado');
const productoInput = document.getElementById('producto');
const precioProductoInput = document.getElementById('precioProducto');
const cantidadProductoInput = document.getElementById('cantidadProducto');
const tablaProductosBody = document.querySelector('#tablaProductos tbody');
const gastoTotalInput = document.getElementById('gastoTotal');
const agregarProductoButton = document.getElementById('agregarProducto');
const formulario = document.getElementById('formulario');
const resultadoInput = document.getElementById('resultado');
const tripulantesSelect = document.getElementById('tripulantes');

// Variables
let productos = [];

// Calcular total de pescado
function calcularTotalPescado() {
    const cantidad = parseFloat(cantidadPescadoInput.value);
    const precio = parseFloat(precioPescadoInput.value);

    if (!isNaN(cantidad) && !isNaN(precio)) {
        totalPescadoInput.value = (cantidad * precio).toFixed(2);
        calcularGastoTotal();
    } else {
        totalPescadoInput.value = '';
    }
}

// Agregar productos adicionales
function agregarProducto() {
    const producto = productoInput.value.trim();
    const precio = parseFloat(precioProductoInput.value);
    const cantidad = parseInt(cantidadProductoInput.value);

    if (producto && !isNaN(precio) && !isNaN(cantidad)) {
        productos.push({ producto, precio, cantidad, subtotal: precio * cantidad });
        actualizarTabla();
        calcularGastoTotal();
        productoInput.value = '';
        precioProductoInput.value = '';
        cantidadProductoInput.value = '';
    } else {
        alert('Datos inválidos.');
    }
}

// Actualizar tabla
function actualizarTabla() {
    tablaProductosBody.innerHTML = '';
    productos.forEach(item => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.producto}</td>
            <td>${item.precio.toFixed(2)}</td>
            <td>${item.cantidad}</td>
            <td>${item.subtotal.toFixed(2)}</td>
        `;
        tablaProductosBody.appendChild(fila);
    });
}

// Calcular gasto total
function calcularGastoTotal() {
    const totalProductos = productos.reduce((acc, item) => acc + item.subtotal, 0);
    const totalPescado = parseFloat(totalPescadoInput.value) || 0;
    gastoTotalInput.value = (totalProductos + totalPescado).toFixed(2);
}

// Calcular resultado final
function calcularResultado(event) {
    event.preventDefault();
    const gastoTotal = parseFloat(gastoTotalInput.value);
    const tripulantes = parseInt(tripulantesSelect.value);

    if (!isNaN(gastoTotal) && tripulantes > 0) {
        resultadoInput.value = (gastoTotal / tripulantes).toFixed(2);
    } else {
        alert('Error en los datos.');
    }
}

// Eventos
cantidadPescadoInput.addEventListener('input', calcularTotalPescado);
precioPescadoInput.addEventListener('input', calcularTotalPescado);
agregarProductoButton.addEventListener('click', agregarProducto);
formulario.addEventListener('submit', calcularResultado);
