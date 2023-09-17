import { config } from './config/index.config';
import { handlers } from './handlers/index.handler'

const { log } = handlers
const main = async () => {
  await log();
}

main().then(() => {
  console.log(`Awaiting message parsing on queues`);
}).catch((err) => {
  console.error(`Something crashed`, {
    data: err,
    message: 'error'
  });
});