import { Router } from '../deps.ts';
import { getSpieler, getSpielerById } from '../controller/spieler.ts';

const spielerRouter = new Router();

spielerRouter
    .get('/api/v1/spieler', getSpieler)
    .get('/api/v1/spieler/:id', getSpielerById);

export { spielerRouter }