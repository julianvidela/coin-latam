import colors from 'colors';
import server from "./config/server";
// import mongoDB from "./config/mongoDB/connection";
// import test from './src/test';
import mongoDB from './database/mongo/connection';
import { envs } from './config/plugin/env-var';
const initialDropDB = envs.INITIALDROPDB;


const PORT = envs.PORT;
const connectDB = envs.CONNECTDB;


// fetch('https://api.ipify.org?format=json')
//   .then(respuesta => respuesta.json())
//   .then(datos => {
//     console.log('La dirección IP pública del usuario es:', datos.ip);
//   })
//   .catch(error => console.error('Error al obtener la dirección IP:', error));


//$ SERVER START:
const upServer = () => {
  server.listen(PORT, () => { console.log(colors.italic(`Server listening on port ${PORT}`)) })

}

connectDB ? mongoDB(upServer, initialDropDB) : upServer();