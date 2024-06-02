import express, { IRouter, Request, Response } from "express";
import axios from "axios";
import { envs } from "../../config/plugin/env-var";
import requestIp from "request-ip";
import { lookup } from "geoip-lite"


const route: IRouter = express.Router();

// Función para obtener información de geolocalización desde ipdata.co
async function getGeoInfo() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip; // Retorna solo la IP, no todo el objeto de respuesta
    } catch (error) {
        console.error(`Error fetching IP address: ${error}`);
        return null;
    }
}


route.get('/test', async (req: Request, res: Response) => {
    try {
        const ipAddress = await getGeoInfo(); 
        const geoIp = lookup(ipAddress); 

        res.json({
            ip: ipAddress,
            geo: geoIp || 'No se pudo determinar la ubicación de la IP'
        });
    } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
        res.status(500).json({ error: 'Error en la solicitud' });
    }
});




export { route as testRoute };
