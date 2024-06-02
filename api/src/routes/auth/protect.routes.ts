import { Request, Response, Router } from 'express';
import { Profile } from 'passport';
import { isLoggedIn } from "../../middleware/isLoggedIn";
import { IUser } from '../../database/mongo/model/User.model';


const router = Router();

router.get(
  '/protected',
  isLoggedIn,
  async(req: Request, res: Response) => {
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
  },
);

export { router as protectedRouter };
