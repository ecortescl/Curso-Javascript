/* [[[VARIABLES]]]*/
/* HECHO POR ECORTES.CL */

// forma tradicional de declarar variables
var valorA;

// añadimos un valor
valorA = 15

// mostramos por consola el valor
console.log(valorA)

// se puede inicializar sin datos y posteriormente modificar
let valorB;

valorB = 'Hola Mundo'

console.log(valorB)

// debe declararse con algun valor inicial 
const valorC = 'Hola Juan'

console.log(valorC)


/* [[[PASAR DATOS A VARIABLES EN FUNCIONES]]]*/

// inicializo un variable antes de la funcion
const valor = 'Esteban Cortes'

//creo una funcion donde envio un dato y lo imprimo por consola
function holaMundo(dato) {
    // imprimo el dato recibido
    console.log(dato)
}

// llamo la funcion y envio el valor de la const valor "esteban cortes"
holaMundo(valor);