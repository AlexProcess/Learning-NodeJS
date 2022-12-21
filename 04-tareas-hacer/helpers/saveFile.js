const fs = require('fs');

const guardarDB = (data) => {
  const file = './db/data.json';

  // Si data es una array, conviértela a una cadena de texto en formato JSON
  if (Array.isArray(data)) {
    data = JSON.stringify(data);
  }

  fs.writeFileSync(`${file},`, data);
};

module.exports = {
  guardarDB
};