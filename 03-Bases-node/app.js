const { createFile } = require("./helpers/multiplicar");

console.clear();

const number = 5;

createFile(number)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
