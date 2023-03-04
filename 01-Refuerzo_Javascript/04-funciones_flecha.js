/**
 * Funciones flecha en Javascript
 */

// Funciones tradicionales
function sumar1 (a,b){
    return a + b;
}

// Funcionflecha
const sumar2 = (c,d) => {
    return c + d;
}

console.log(sumar1(2,3));
console.log(sumar2(20,30));

/**
 * Si el return de nuestra funcion flecha es solo uno podemos 
 * simplicarla de la siguiente manera
 */

// Funcion sin simplificar
const saludar1 = () => {
    return 'Hola mundo';
}

// Funcion simplificada
const saludar2 = () => 'Hola mundo 2';

console.log(saludar1());
console.log(saludar2());
