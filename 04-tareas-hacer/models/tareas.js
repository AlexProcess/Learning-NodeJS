// Importamos la clase Tarea
const Tarea = require("./tarea.js");

// Definimos la clase ListadoTareas
class ListadoTareas {
  // Inicializamos el listado de tareas en un objeto vacío

  listadoArr() {
    const listado = [];
    //obtenemos el listado de tareas mediante objetc.key y añadimos cada key al array listado
    Object.keys(this._listado).forEach(key =>{
      const tarea = this._listado[key];+
      listado.push(tarea);
      console.log(key)
    })
  
    return listado;
  }
  // Creamos el constructor de la clase
  constructor() {
    this._listado = {};
  }

  // Creamos un método para crear una nueva tarea
  crearTarea(desc = "") {
    // Creamos una nueva tarea con la descripción proporcionada
    const tarea = new Tarea(desc);

    // Añadimos la tarea al listado de tareas
    this._listado[tarea.id] = tarea;
  }
}

// Exportamos la clase ListadoTareas
module.exports = ListadoTareas;