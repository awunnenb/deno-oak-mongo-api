import { Application } from './deps.ts';
import { spielerRouter } from './routes/spieler.ts';

const port = 8888;
const app = new Application();

app.use(spielerRouter.routes());
app.use(spielerRouter.allowedMethods());

await app.listen({port});
