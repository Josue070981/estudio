document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir que la página se recargue al enviar el formulario

    // Obtener los valores de los campos
    const cantidadPescado = parseFloat(document.querySelector('#cantidadPescado').value);
    const precioPescado = parseFloat(document.querySelector('#precioPescado').value);
    const gastoTotal = parseFloat(document.querySelector('#gastoTotal').value);
    const tripulantes = parseInt(document.querySelector('#tripulantes').value);

    // Validar que los valores sean números
    if (isNaN(cantidadPescado) || isNaN(precioPescado) || isNaN(gastoTotal) || isNaN(tripulantes)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    // Realizar los cálculos
    const total = cantidadPescado * precioPescado;
    const resultado = (total - gastoTotal) / tripulantes;

    // Mostrar el resultado en el campo de entrada
    const resultadoInput = document.querySelector('#resultado');
    resultadoInput.value = resultado.toFixed(2); // Mostrar con 2 decimales
});

// Lógica para reiniciar los campos del formulario
document.querySelector('#resetButton').addEventListener('click', function () {
    // Obtener el formulario y reiniciarlo
    const formulario = document.querySelector('#formulario');
    formulario.reset();

    // También borrar el campo de resultado si no se reinicia automáticamente
    document.querySelector('#resultado').value = '';
});
