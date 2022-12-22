const { inquirerMenu, pausa, leerInput, } = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/saveFile");
require("colors");
const Tarea = require("./models/tarea.js");
const ListadoTareas = require("./models/tareas.js");
const main = async () => {
  
  let opt = "";
  const tareas = new ListadoTareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    //ESTABLECER LAS TAREAS
  }
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción: ");

        tareas.crearTarea(desc);
        break;

      case "2":
        console.log(tareas.listadoArr());
        break;
    }

    guardarDB(tareas.listadoArr())

    if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
