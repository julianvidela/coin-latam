export const getGeoInfo = async(req: Request, apiKey: any, res:Response) => {
    const user = req
    const ipClient: any = requestIp.getClientIp(user)
    const address = requestIp.getClientIp(ipClient);
    const url = `https://api.ipdata.co/${address}?api-key=${apiKey}`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        res.status(200).json(data)
    } catch (error) {
        throw error
        
    }
}