const { inquirerMenu, pausa, leerInput, } = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/saveFile");
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
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
