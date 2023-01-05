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
            res.json({
                msg: 'Get API'
            })
        });

        this.app.put('/api', (req, res) =>{
            res.status(500).json({
                msg: 'put API'
            })
            
        });
        this.app.post('/api', (req, res) =>{
            res.status(201).json({
                msg: 'post API'
            })
            
        });

        this.app.patch('/api', (req, res) =>{
            res.json({
                msg: 'delete API'
            })
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