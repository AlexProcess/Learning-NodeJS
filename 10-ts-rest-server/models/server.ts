import cors  from 'cors';
import express, { Application } from 'express';
import userRoutes from '../routes/usuario';

export class Server {

    private app: express.Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //METODOS INICIALES
        this.middlewares();
        this.routes();
    }

    //CONECTAR BASE DE DATOS SQL

    middlewares() {
        //Cors
        this.app.use(cors());
        //lectura del body
        this.app.use(express.json());
        // carpeta puiblica
        this.app.use( express.static('public') );
    }
    

    routes() {
        this.app.use( this.apiPaths.usuarios , userRoutes)
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto' + this.port);
        })
    }
    

}


export default Server;