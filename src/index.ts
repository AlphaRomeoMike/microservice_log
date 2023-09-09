import express, { Application } from 'express'
import { config } from './config/index.config';
import { middlwares } from './middlewares/index.middleware'; 
import router from './routes/index.routes';

// Destructuring
const { env } = config;
const { log_middlware } = middlwares;

const app: Application = express();

app.use(express.json());
app.use(log_middlware);
app.use(router);

app.listen(env.PORT || 3001, () => {
  console.info(`App listening on port ${env.PORT || 3001}`);
})