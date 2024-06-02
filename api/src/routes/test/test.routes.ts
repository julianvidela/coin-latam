import express, { IRouter, Request, Response } from "express";
import axios from "axios";
import requestIp from "request-ip";
import { envs } from "../../config/plugin/env-var";

const route: IRouter = express.Router();

// Función para obtener información de geolocalización desde ipdata.co
async function getGeoInfo(ip: string, apiKey: string) {
    const url = `https://api.ipdata.co/${ip}?api-key=${apiKey}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching geolocation: ${error}`);
        return null;
    }
}

route.get('/test', async (req: Request, res: Response) => {
    const clientIp = requestIp.getClientIp(req);

    // Usar una IP pública para pruebas si la IP es de loopback
    const ipToLookup:any = (clientIp === '::1' || clientIp === '127.0.0.1') ? '8.8.8.8' : clientIp;

    // Reemplaza 'TU_API_KEY_DE_IPDATA_CO' con tu API key obtenida de ipdata.co
    const apiKey = envs.IPDATA_KEY
    const geoInfo = await getGeoInfo(ipToLookup, apiKey);

    res.json({
        ip: clientIp,
        geo: geoInfo || 'No se pudo determinar la ubicación de la IP'
    });
});

export { route as testRoute };
