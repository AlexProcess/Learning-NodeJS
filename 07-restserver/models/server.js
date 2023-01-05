const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //middlewares
        this.middlewares();
        //routes from my app
        this.routes();
    }

    middlewares() {
        //pubclic directorie
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.get('/api', (req, res) =>{
            res.send('Hello World')
          });
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server listening on port`, this.port
            

            );
        });
    }

}




module.exports = Server;