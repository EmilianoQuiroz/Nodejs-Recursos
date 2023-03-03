/**
 * Destructuracion de objetos
 */

const ironman = {
    nombre: 'Tony',
    apellido: 'Stark',
    poder: 'Armadura',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = ironman.nombre;
// const apellido = ironman.apellido;
// const poder = ironman.poder;


/**
 * Para acceder a las propiedades del objetos podemos
 * desesctructurarlo para asi evitar hacer mas complejo el codigo
 */

//Asi podemos acceder a todas las propiedades de nuestro objeto
//desestructurandolo dentro de una funcion pasando las propiedades
//de nuestro objeto como parametros de la funcion
//Tambien podemos crear nuevas propiedades para nuestro objeto
//Como por ejemplo "edad"

function imprimirHeroe({nombre, apellido, poder, edad = 40}){

console.log(nombre, apellido, poder, edad);

}

//LLamamos a nuestro objeto 
imprimirHeroe( ironman );