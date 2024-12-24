// Referencias a los elementos del formulario
const formulario = document.getElementById('formulario');
const cantidadPescadoInput = document.getElementById('cantidadPescado');
const precioPescadoInput = document.getElementById('precioPescado');
const gastoTotalInput = document.getElementById('gastoTotal');
const tripulantesSelect = document.getElementById('tripulantes');
const totalPescadoInput = document.getElementById('totalPescado');
const resultadoInput = document.getElementById('resultado');
const resetButton = document.getElementById('resetButton');

// Función para calcular el total (cantidad × precio)
function calcularTotalPescado() {
    const cantidadPescado = parseFloat(cantidadPescadoInput.value);
    const precioPescado = parseFloat(precioPescadoInput.value);



    const totalPescado = cantidadPescado * precioPescado;
    totalPescadoInput.value = totalPescado.toFixed(2); // Mostrar con 2 decimales
}

// Función para calcular el resultado final
function calcularResultado(event) {
    event.preventDefault(); // Prevenir que la página se recargue

    const totalPescado = parseFloat(totalPescadoInput.value);
    const gastoTotal = parseFloat(gastoTotalInput.value);
    const tripulantes = parseInt(tripulantesSelect.value);

    if (isNaN(totalPescado) || isNaN(gastoTotal) || isNaN(tripulantes)) {
        alert('Por favor, ingrese todos los valores necesarios para realizar el cálculo.');
        return;
    }

    const resultado = (totalPescado - gastoTotal) / tripulantes;
    resultadoInput.value = resultado.toFixed(2); // Mostrar con 2 decimales
}

// Función para reiniciar todos los campos
function reiniciarCampos() {
    formulario.reset(); // Reiniciar el formulario
    totalPescadoInput.value = ''; // Limpiar el campo calculado
    resultadoInput.value = ''; // Limpiar el campo resultado
}

// Agregar eventos
cantidadPescadoInput.addEventListener('input', calcularTotalPescado);
precioPescadoInput.addEventListener('input', calcularTotalPescado);
formulario.addEventListener('submit', calcularResultado);
resetButton.addEventListener('click', reiniciarCampos);
