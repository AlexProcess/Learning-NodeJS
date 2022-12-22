const fs = require('fs');

const guardarDB = (data) => {
  const file = './db/data.json';

  // Si data es una array, conviértela a una cadena de texto en formato JSON
  if (Array.isArray(data)) {
    data = JSON.stringify(data);
  }

  fs.writeFileSync(`${file},`, data);
};

const leerDB = () =>{

    if(fs.existsSync(file)){
        return null;
    }

    const info = fs.readFileSync(file , {encoding: 'utf-8'});
    console.log(data);
    
    const data = JSON.parse(info);
    
    return null;
    
    

}


module.exports = {
  guardarDB, leerDB
};