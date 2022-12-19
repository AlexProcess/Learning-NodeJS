const colors = require("colors")

const showMenu = () => {
  
  return new Promise((resolve) => {
    console.clear();
    console.log("================================================".green);
    console.log("             Seleccione un opcion".green);
    console.log("================================================\n".green);

    console.log(`${"1".green}. Crear una tarea `);
    console.log(`${"2".green}. Listar tareas `);
    console.log(`${"3".green}. Listar tareas completadas `);
    console.log(`${"4".green}. Listar tareas pendientes `);
    console.log(`${"5".green}. Completar tareas `);
    console.log(`${"6".green}. Borrar una tarea `);
    console.log(`${"0".green}. Salir \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Seleccione una opcion: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`\presione ${"ENTER".green} para continuar `, (opt) => {
      console.log({ opt });
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
