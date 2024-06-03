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
const getGeoInfo = async (apiKey: string) => {
    const address = await getAddressIp(); // Espera a que getAddressIp() se resuelva
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
        ip: await getAddressIp(), // Espera a que getAddressIp() se resuelva
        geo: geoInfo || 'No se pudo determinar la ubicación de la IP'
    });
});

export { route as testRoute };
