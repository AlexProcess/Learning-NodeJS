const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
require("colors");
const Tarea = require("./models/tarea.js");
const ListadoTareas = require("./models/tareas.js");

const main = async () => {
  let opt = "";

  const tareas = new ListadoTareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción: ");

        tareas.crearTarea(desc);
        break;

      case "2":
        console.log(tareas._listado);
        break;
    }
    if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
