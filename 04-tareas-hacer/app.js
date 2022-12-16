const { inquirerMenu, pausa } = require('./helpers/inquirer')
require ('colors')
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

 
const main = async () => {   
    console.log('Hola Mundo');
 
    let opt = '';
 
    do {
        opt = await inquirerMenu();
        console.log({opt});
        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');
        tareas._listado[tarea.id] = tarea; 
        console.log(tareas);

        // if(opt !== '0') await pausa();
        await pausa();
    } while (opt !== '0');
 
    // pausa()
}
 
main(); 