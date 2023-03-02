/**
 *  Let, Const y var
 */

// Let
/**
 * Let colo funciona en el ambito de la funcion en la que es llamada
 * es decir, funcionan de manera local, con lo cual, podemos crear
 * variables con el mismo nombre en distintos scoup dentro del mismo programa
 */

//* Scoup: Ambito en el que se crea la variable
let nombre = 'Juan';

if(true){
    let nombre = 'Pepe';
    console.log(nombre);
} 

console.log(nombre);


/**
 * Var
 */
/**
 * Var funciona de manera global, solo podemos crear un nombre por variable
 * dentro del mismo codigo
 */

var apellido = 'Perez';

/**
 * Const
 */

/**
 * Las constantes no cambian su valor a lo largo de todo el programa
 */

const PI = 3.14;
