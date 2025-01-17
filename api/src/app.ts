import colors from 'colors';
import server from "./config/server";
import mongoDB from './database/mongo/connection';
import { envs } from './config/plugin/env-var';

const initialDropDB = envs.INITIALDROPDB;
const PORT = envs.PORT;
const connectDB = envs.CONNECTDB;


//$ SERVER START:
const upServer = () => {
  server.listen(PORT, () => {
    console.log(colors.italic(`Server listening on port ${PORT}`))
  })

}
connectDB ? mongoDB(upServer, initialDropDB) : upServer();
