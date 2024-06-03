import express, { IRouter, Request, Response } from "express";
import axios from "axios";
import { envs } from "../../config/plugin/env-var";


const route: IRouter = express.Router();

const getAddressIp = async () => {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip; // Retorna solo la IP, no todo el objeto de respuesta
    } catch (error) {
        console.error(`Error fetching IP address: ${error}`);
        return null;
    }
}

// Función para obtener información de geolocalización desde ipdata.co
const getGeoInfo = async (apiKey:any) => {
    // const address = "10.240.2.131"; // Espera a que getAddressIp() se resuelva
    const address:any = "181.20.171.239"
    const url = `https://api.ipdata.co/${address}?api-key=${apiKey}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching geolocation: ${error}`);
        return null;
    }
}
 
route.get('/test', async (req: Request, res: Response) => {
    const apiKey = envs.IPDATA_KEY;
    const geoInfo = await getGeoInfo(apiKey);

    res.json({
        ip: getAddressIp(), // Espera a que getAddressIp() se resuelva
        geo: geoInfo || 'No se pudo determinar la ubicación de la IP'
    });
});

route.get("/testip", (req:Request, res:Response ) => {
    const clientIp = req.clientIp;
    res.send(`Tu IP es: ${clientIp}`);
})

export { route as testRoute };
