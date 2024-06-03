import { IRouter, Request, Response, NextFunction } from "express";
import Router from "express";
import passport from "passport";

const route: IRouter = Router();

route.get("/auth/google", 
    passport.authenticate("google", { scope: ['email', 'profile'] }), 
);

route.get("/auth/google/callback",
    passport.authenticate('google', {
        failureRedirect: '/auth/google/unauthorized',
        successRedirect: '/protected',
    }),
);

route.get("/auth/google/unauthorized",
    (req: Request, res: Response) => {
        res.status(401).send("unauthorized user");
    }
);

route.get(
    '/logout',
    (req: Request, res: Response, next: NextFunction) => {
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
);



export { route as authRoute }
