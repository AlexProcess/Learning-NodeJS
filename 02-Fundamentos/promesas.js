const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Alex'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = ( id, callback ) => {

    
    return new Promise((resolve, reject) => {
        
        const empleado = empleados.find( e => e.id === id )?.nombre;

             ( empleado )
             ? resolve( empleado )
             : reject(`No existe empleado con id ${id}`);
    });
}


const id = 3;

getEmpleado(id)
    .then( empleado => console.log(empleado) )
    .catch( err => console.log(err) );


const getSalario = ( id ) => {

    const salario = salarios.find( s => s.id === id)?.salario;
    
    return new Promise ((resolve, reject)=> {
        (salario)
        ? resolve(salario)
        : reject(`No existe el salario del empleado con id ${id}`);
    })
}

 //getEmpleado(id)
     //.then( empleado => console.log( empleado ) )
     //.catch( err => console.log(err) );


//getSalario(id)
     //.then( salario => console.log( salario ) )
     //.catch( err => console.log(err) );


    let nombre;
    
     getEmpleado(id)
     .then(empleado =>{
        nombre = empleado;
        return getSalario( id )
    })
     .then(salario => console.log(`El empleado:`, nombre, 'tiene un salario de :', salario))
     .catch(err => console.log( err ));