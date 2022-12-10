const fs = require("fs");

const createFile = async(number = 5) => {
    
  return new Promise((resolve, reject) => {

    console.log(`=====================`);
    console.log("Tabla del", number);
    console.log(`======================`);

    let salida = "";
    let range = 10;

    for (let i = 1; i <= range; i++) {
      const result = i * number;
      salida += `${number} X ${i} = ${result}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${number}.txt`, salida);
      return(`Tabla-${number}.txt creada!,`);
  });
};

module.exports = {
  createFile,
};
