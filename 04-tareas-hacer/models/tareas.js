// Importamos la clase Tarea
const Tarea = require("./tarea.js");

// Definimos la clase ListadoTareas
class ListadoTareas {
  _listado = {
    abc: 123,
  };

  // Inicializamos el listado de tareas en un objeto vacío
  // Creamos el constructor de la clase
  constructor() {
    this._listado = {};
  }

  borrarTareas(id = ''){
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  get listadoArr() {
    const listado = [];
    //obtenemos el listado de tareas mediante objetc.key y añadimos cada key al array listado
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  // Creamos un método para crear una nueva tarea
  crearTarea(desc = "") {
    // Creamos una nueva tarea con la descripción proporcionada
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
    // Añadimos la tarea al listado de tareas
  }
  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletas(completadas = true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Compltada".green : "Pendiente".red;
      if (completadas) {
        //mostrar completadas
        if (completadoEn) {
          contador += 1;
          console.log(
            `${(contador + ".").green} ${desc} :: ${completadoEn.green} green`
          );
        }
      } else {
        //mostrar pendientes
        if (!completadoEn) {
          contador += 1;
          console.log(`${(contador + ".").green} ${desc} :: ${estado} `);
        }
      }
    });
  }
  toggleCompletadas( ids = [] ) {

    ids.forEach(id => {

      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString()
      }
    })
    this.listadoArr.forEach( tarea => {

      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }

    });
  }
}

// Exportamos la clase ListadoTareas
module.exports = ListadoTareas;
