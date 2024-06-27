import express from 'express'
import cors from 'cors'
import morgan from 'morgan';

export default class Server {
    constructor(_port) {
        this.port = _port;
        this.crosOptions = null;
        const app = express();
        let rout = express.Router();
        rout.get('/', (req, res) => {
            res.send("Respondiendo el puerto: " + this.port);
        });

        this.routers = [{
            dir: '/api/',
            router: rout
        }];

        this.GetApi = () => {
            return app;
        }
    }

    InitiateServer = () => {
        const api = this.ConfigAPI();
        api.get('/', (req, res) => {
            res.json({ message: 'conection' })
        })
        api.listen(this.port, () => {
            console.log('iniciar servidor ')
        })
    }

    SetConfigCros(_configCros) {
        this.crosOptions = _configCros;
    }

    SetRouters(_routers) {
        this.routers = _routers;
    }

    ConfigAPI() {
        const api = this.GetApi();
        if (this.SetConfigCros == null) {
            api.use(cors());
        } else {
            api.use(cors(this.crosOptions));
        }
        api.use(morgan("dev"));

        for (const data of this.routers) {
            api.use('/api' + data.dir, data.router);
        }

        return api;
    }
}


