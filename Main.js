import dotenv from 'dotenv'
import Server from './src/Server.js'
import Routers from './src/Routers/AllRouters.js'
import FireBase from './src/Controllers/ConnectionFireBase.js';

function Main() {
    dotenv.config()
    const API_REST = new Server(process.env.PORT);
    API_REST.SetRouters(Routers.Routers);
    API_REST.InitiateServer();
}

Main();