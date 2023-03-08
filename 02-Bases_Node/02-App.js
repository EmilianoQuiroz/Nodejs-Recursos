/**
 * Imprimir la tabla en un archivo de texto
 */

/**
 * Llamamos a la libreria de node para escribir archivos
 */
const fs = require('fs');

/**
 * Limpiar consola 
 */
console.clear();

/**
 * Mostrar por consola la tabla del 5
 */

// Base a multiplicar
const base = 3;
let salida = ''; 

// Ciclo for para generar la tabla que se va a mostrar por pantalla
for(let i = 1; i <= 10; i++){
   
    salida += `${base} x ${i} = ${base * i}\n`;

}

/**
 * Imprimimos el valor de la salida
 */
console.log(salida);

/**
 * Con la funcion fs podemos imprimir nuestra tabla en un archivo de texto
 */

fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
    if (err) throw err;

    console.log(` Archivo tabla-${ base }.txt creado `);
})