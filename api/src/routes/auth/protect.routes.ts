import { IRouter, Router } from 'express';
import { isLoggedIn } from "../../middleware/isLoggedIn";
import { logoutGet } from '../../controller/auth/auth.controller';


const router:IRouter = Router();

router.get('/protected', isLoggedIn, logoutGet );

export { router as protectedRouter };
