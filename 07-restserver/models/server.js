const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../Database/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            categorias: '/api/categorias',
            productos: '/api/productos',
            usuarios: '/api/usuarios'
        }
        
        //Conectar a la base de datos
        this.conectarDB();

        //middlewares
        this.middlewares();
        //routes from my app
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        //CORS 
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());
        

        //directory public
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use( this.paths.auth, require('../routes/auth'));
        this.app.use( this.paths.categorias, require('../routes/categorias'));
        this.app.use( this.paths.usuarios, require('../routes/usuarios'));
        this.app.use( this.paths.productos, require('../routes/productos'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server listening on port`, this.port
            

            );
        });
    }

}


module.exports = Server;