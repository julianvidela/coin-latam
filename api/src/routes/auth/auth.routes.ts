import { IRouter, Request, Response, NextFunction } from "express";
import Router from "express";
import passport from "passport";
import axios from "axios";
import { envs } from "../../config/plugin/env-var";
import requestIp from 'request-ip';
import { addressIp } from "../../middleware/request-ip/request-ip.middleware"
import { firstAuthenticate, logoutGet, secondAuthenticate, unauthorizedGet } from "../../controller/auth/auth.controller";


const route: IRouter = Router();

route.get("/auth/google", firstAuthenticate);

route.get("/auth/google/callback", secondAuthenticate);

route.get("/auth/google/unauthorized",unauthorizedGet );

route.get('/logout', logoutGet );



export { route as authRoute }
