import express from 'express';
import { config } from '../config';
import middlewares from '../middlewares';
import MainRouter from '../routers';

export default class Server {
    static async start() {
        const port = config.port;
        const app = express();
        app.use(middlewares());
        app.use('/', MainRouter.generateRouter());
        app.listen(port, () => {
            console.log(`Application listening for requests at port ${port}`);
        });
    }
}
