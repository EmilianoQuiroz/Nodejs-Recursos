/**
 * Callbacks en Javascript
 */

/**
 * Una función de callback es una función que se pasa a otra función 
 * como un argumento, que luego se invoca dentro de la función externa 
 * para completar algún tipo de rutina o acción.
 */

/**
 * La funcion setTimeout recibe como parametro una funcion que imprime
 * por consola un Hola mundo, como segundo parametro recibe el tiempo
 * que debe esperar para ejecutar el primer parametro, este es un ejemplo
 * sencillo de callback
 */

// setTimeout(function(){
//     console.log('Hola mundo');
// }, 3000);

const getUsuarioById = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Santiago'
    }

    setInterval(() => {
        callback(usuario)
    }, 1500)

}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})