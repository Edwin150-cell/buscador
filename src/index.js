// Importamos la librería de alertas y el archivo CSS
import Swal from 'sweetalert2';
import './styles.css';

// Guardamos los elementos de la página en variables con nombres sencillos
const texto = document.getElementById('cajaTexto');
const buscar = document.getElementById('palabraBuscar');
const btnBuscar = document.getElementById('btnBuscar');
const btnLimpiar = document.getElementById('btnLimpiar');
const contador = document.getElementById('contador');
const resultado = document.getElementById('textoResaltado');

// Botón de Buscar
btnBuscar.addEventListener('click', () => {
    const contenido = texto.value;
    const palabra = buscar.value;

    // Alerta de advertencia si algún campo está vacío
    if (contenido === '' || palabra === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'Debes escribir un texto y la palabra a buscar'
        });
        return;
    }

    // Regla para buscar sin importar mayúsculas o minúsculas ('gi')
    const regla = new RegExp(palabra, 'gi');

    // Contar cuántas veces aparece
    const coincidencias = contenido.match(regla);
    const total = coincidencias ? coincidencias.length : 0;

    // Mostrar el número en la pantalla
    contador.textContent = total;

    // Envolver la palabra encontrada en la etiqueta <mark> para resaltarla
    const textoResaltado = contenido.replace(regla, (encontrado) => {
        return `<mark>${encontrado}</mark>`;
    });

    // Colocar el texto con el resaltado en pantalla
    resultado.innerHTML = textoResaltado;

    // Alerta bonita de éxito
    Swal.fire({
        icon: 'success',
        title: 'Búsqueda lista',
        text: `La palabra se encontró ${total} veces`,
        timer: 1800,
        showConfirmButton: false
    });
});

// Botón de Limpiar
btnLimpiar.addEventListener('click', () => {
    texto.value = '';
    buscar.value = '';
    contador.textContent = '0';
    resultado.innerHTML = '';

    Swal.fire({
        icon: 'info',
        title: 'Pantalla limpia',
        text: 'Se borró todo el contenido',
        timer: 1200,
        showConfirmButton: false
    });
});