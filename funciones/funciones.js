/* [[[FUNCIONES]]]*/
/* HECHO POR ECORTES.CL */

// declarar una funcion simple
function miPrimeraFuncion() {
    console.log('¡Hola a todos!');
}

// Llamar la funcion 
miPrimeraFuncion();


// declarar una variable y enviar un dato

function miSegundaFuncion(valor) {
    console.log(`Hola ${valor}.`)

}

// llamar la funcion y enviar un valor
miSegundaFuncion('Esteban Cortes')


// declarar una funcion de expresion en este caso declaramos dentro de un const la funcion sin necesidad de inicializar con un function
const Sumados = function sumaDos(valor) {
        // tomamos el valor y le sumamos 2
        return valor + 2
    }
    // llamamos la funcion con un valor dentro de un console.log
console.log(Sumados(5))

// declarar una funcion de flecha
const saluda = (nombre) => {
    return `Hola ${nombre}`;
}
console.log(saluda('Esteban Cortes'))

// Vamos a compactar un poco más el código.
const saluda2 = (nombre) => `Hola ${nombre}`;
console.log(saluda2('Esteban Cortes')); // => Hola Victor