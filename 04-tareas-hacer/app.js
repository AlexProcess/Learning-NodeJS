const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
require("colors");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

const main = async () => {
  console.log("Hola Mundo");

  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //create options
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;

      case "2":
        console.log(tareas._listado);
        break;
    }

    const tareas = new Tareas();
    const tarea = new Tarea("Comprar comida");
    tareas._listado[tarea.id] = tarea;

    // if(opt !== '0') await pausa();

    await pausa();
  } while (opt !== "0");

  // pausa()
};

main();
