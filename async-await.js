
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
    });
}

const getInfoUsuario = async() => {
    try {
        
        
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        
        return `El salario del empleado : ${empleado} es de ${salario}`; 
    } catch (error) {
        throw error;
    }
    
}


getInfoUsuario( id )
    .then(msg => {
        console.log(msg)
        console.log('Todo correcto =)')})
    .catch(err => {
        console.log('Todo mal =(')
        console.log(err)});
