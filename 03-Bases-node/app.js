const argv = require("./config/yargs");
const { createFile } = require("./helpers/multiplicar");


console.clear();

console.log(argv);

console.log("base: yargs", argv.base);

createFile(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));


