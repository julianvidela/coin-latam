import { IRouter, Router } from "express";

import { firstAuthenticate, logoutGet, secondAuthenticate, unauthorizedGet } from "../../controller/auth/auth.controller";


const route: IRouter = Router();

route.get("/auth/google", firstAuthenticate);

route.get("/auth/google/callback", secondAuthenticate);

route.get("/auth/google/unauthorized",unauthorizedGet );

route.get('/logout', logoutGet );



export { route as authRoute }
