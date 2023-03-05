/**
 * Problemas comunes con los callbacks
*/

const empleados =[

    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Pepe'
    },
    {
        id: 3,
        nombre: 'Luis'
    }
];

const salario =[

    {
        id: 1,
        salario: 2000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 1000
    }
];

const getEmpleados = ( id, callback ) => {
    
    const empleado = empleados.find(e => e.id === id)
    
    if (empleado) {
        callback( null, empleado );
    }else {
        callback(`Empleado ${ id } no existe`)
    }

}
 
getEmpleados(2, (err, empleado) => {
    if (err) {
        console.log('Error!');
        return console.log(err);
    }

    console.log('Empleado existe');
    console.log(empleado);

});