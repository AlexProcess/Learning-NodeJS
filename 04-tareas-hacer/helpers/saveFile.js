const fs = require('fs');

const guardarDB = (data) =>{

        const file = './db/data.txt';

        fs.writeFileSync(archivo, data );

}


module.exports = {
    guardarDB
}