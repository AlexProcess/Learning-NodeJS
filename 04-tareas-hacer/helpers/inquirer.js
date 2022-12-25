const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${'1.'.green} Crear tarea`,
      },

      {
        value: "2",
        name: `${'2.'.green} Listar una tarea`,
      },

      {
        value: "3",
        name: `${'3.'.green} Listar tareas completadas`,
      },

      {
        value: "4",
        name: `${'4.'.green} Listar tareas pendientes`,
      },

      {
        value: "5",
        name: `${'5.'.green} Completar tarea(s)`,
      },

      {
        value: "6",
        name: `${'6.'.green} Borras una tarea`,
      },

      {
        value: "0",
        name: `${'0.'.green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=======================".green);
  console.log(" Seleccione una opción ".white);
  console.log("=======================\n".green);
  const { opcion } = await inquirer.prompt(questions);

  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: "Press enter",
    },
  ];
  console.log(".\n");
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        console.log(value);
        if (value.lenght === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const ListadoTareasBorrar = async (tareas = [] ) => {
  const choices = tareas.map( tarea, i =>  {
    const idx = `${1 + i }`.green;
    
    return {
      value: 'hola',
      name: idx 
    }
  })
  console.log(choices);
  //   value: tarea.id,
  //   name: `${'1.'.green} Crear tarea`,
  // }
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  ListadoTareasBorrar
};
