/**
 * Promesas en Javascript
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

const salarios =[

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

// Obtenemos el nombre y el id del empleado 
const getEmpleados = ( id ) => {
    
    return new Promise((resolve, reject) => {
        
        const empleado = empleados.find(e => e.id === id)?.nombre
        
        (empleado) ? resolve( empleado ) : reject(`No existe el empleado con ID ${id}`)
        
    });

}

// Obtenemos el salario del empleado
const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        
        const salario = salarios.find(s => s.id === id)?.salario

        (salario) ? resolve(salario) : reject(`No existe un salario con el ID ${id}`)
    })

}

const id = 5

getEmpleados(id)
    .then(empleado => console.log(empleado))
    .catch( err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));