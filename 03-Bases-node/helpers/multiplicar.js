const colors = require("colors").colors
const fs = require("fs");

const createFile = async (number = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';
    let range = 10;

    for (let i = 1; i <= hasta; i++) {
      const result = i * number;
      //salida += `${number} X ${i} = ${result}\n`;
      consola += `${number} X ${i} = ${result}\n`;
    }

    if (listar) {
      console.log(`=====================`.rainbow);
      console.log("Tabla del", number .green);
      console.log(`======================`.rainbow);
      console.log(consola .blue);
    }

    fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);

    return `Tabla-${number}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
