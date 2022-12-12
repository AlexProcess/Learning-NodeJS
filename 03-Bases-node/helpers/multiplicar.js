const fs = require("fs");

const createFile = async (number = 5, listar = false) => {
  try {
    let salida = "";
    let range = 10;

    for (let i = 1; i <= range; i++) {
      const result = i * number;
      salida += `${number} X ${i} = ${result}\n`;
    }

    if (listar) {
      console.log(`=====================`);
      console.log("Tabla del", number);
      console.log(`======================`);
      console.log(salida);
    }

    fs.writeFileSync(`tabla-${number}.txt`, salida);

    return `Tabla-${number}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
