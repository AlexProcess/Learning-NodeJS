const { guardarDB, leerDB } = require("./helpers/saveFile");
const { inquirerMenu, 
  pausa,
  leerInput,
  listadoTareasBorrar} = require("./helpers/inquirer.js");
require("colors");
const Tarea = require("./models/tarea.js");
const ListadoTareas  = require("./models/tareas.js");

const main = async () => {
  
  let opt = "";
  const tareas = new ListadoTareas();

  const tareasDB = leerDB();

  if (tareasDB) {//Cargar tareas

    tareas.cargarTareasFromArray(tareasDB)
  }

  do {
    //imprime menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crea la opcion
        const desc = await leerInput("Descripción: ");

        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listadoCompleto();
        break;

      case '3':
        tareas.listarPendientesCompletas(true);
      break;

      case '4':
        tareas.listarPendientesCompletas(false);
      break;
      
      // case '5':
      //   tareas.listarPendientesCompletas(false);
      // break;

      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr);
        console.log({id});
      break;



    }

    guardarDB(tareas.listadoArr);

    
    await pausa();
  } while (opt !== "0");
};

main();
