import { Request, Response } from "express"
import requestIp from "request-ip"
import axios from "axios"


export const addressIp = (req:Request) => {
    const ip = requestIp.getClientIp(req)
    return ip
}

export const getGeoInfo = async (req:Request, apiKey: any) => {
     

    const address: any = requestIp.getClientIp(req);
    const url = `https://api.ipdata.co/${address}?api-key=${apiKey}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching geolocation: ${error}`);
        return null;
    }
}