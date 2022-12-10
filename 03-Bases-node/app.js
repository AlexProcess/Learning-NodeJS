const { createFile } = require("./helpers/multiplicar");

console.clear();
console.log(process.argv);

const [, , arg3 = 'number=5'] = process.argv;
const [, number] = arg3.split('=')
console.log(number);

//const number = 5;

createFile(number)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
