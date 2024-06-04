import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { envs } from "../../config/plugin/env-var";
import { addressIp, getGeoInfo } from "../../middleware/request-ip/request-ip.middleware"
import { IUser } from "../../database/mongo/model/User.model";


export const ipGet = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const apiKey = envs.IPDATA_KEY;
        const geoInfo = await getGeoInfo(req, apiKey);

        res.json({
            ip: addressIp(req), // Espera a que getAddressIp() se resuelva
            geo: geoInfo || 'No se pudo determinar la ubicación de la IP'
        });
        next()

    } catch (error) {
        throw (error)
    }
};

export const logoutGet = (req: Request, res: Response, next: NextFunction) => {
    req.logout(err => {
        if (err) { return next(err); }
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });

    });
}

export const unauthorizedGet = (req: Request, res: Response) => {
    res.status(401).send("unauthorized user");
}

export const secondAuthenticate = () => {
    passport.authenticate('google', {
        failureRedirect: '/auth/google/unauthorized',
        successRedirect: '/protected',
    })
}

export const firstAuthenticate =  () => {
    passport.authenticate("google", { scope: ['email', 'profile'] })
}  

export const isLoggedGet =  async(req: Request, res: Response) => {
    const user = req.user as IUser; // Hacemos una conversión de tipo

    if (!user || !user.photos || !user.photos.length || !user.emails || !user.emails.length) {
      return res.status(400).send('User profile is incomplete.');
    }
   
    res.send(`
      <img width=80 src="${user.photos[0].value}" />
      <h1>Hello ${user.displayName}</h1>
      <h4>Your email: ${user.emails[0].value}</h4>
      <a href="/logout">Logout</a>
    `);
  }