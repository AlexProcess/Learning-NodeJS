// Importamos la clase Tarea
const Tarea = require("./tarea.js");

// Definimos la clase ListadoTareas
class ListadoTareas {
  _listado = {
    'abc': 123
  };
  // Inicializamos el listado de tareas en un objeto vacío
  // Creamos el constructor de la clase
  constructor() {
    this._listado = {};
  }
  

  
  get listadoArr() {
    const listado = [];
    //obtenemos el listado de tareas mediante objetc.key y añadimos cada key al array listado
    Object.keys(this._listado).forEach(key =>{
      const tarea = this._listado[key];
      listado.push(tarea);
    })
  
    return listado;
  }

  cargarTareasFromArray( tareas = [] ) {

    tareas.forEach( tarea => {
      this._listado[tarea.id ] = tarea
    })
  }

  // Creamos un método para crear una nueva tarea
  crearTarea(desc = '') {
    // Creamos una nueva tarea con la descripción proporcionada
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
    // Añadimos la tarea al listado de tareas

  }
  listadoCompleto() {
        
    console.log();
    this.listadoArr.forEach( (tarea, i) => {

        const idx = `${i + 1}`.green;
        const { desc, completadoEn } = tarea;
        const estado = ( completadoEn ) ? 'Completada'.green : 'Pendiente'.red;

        console.log(`${ idx } ${ desc } :: ${ estado }`);

    });         
}
  
}

// Exportamos la clase ListadoTareas
module.exports = ListadoTareas;