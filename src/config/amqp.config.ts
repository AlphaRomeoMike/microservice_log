import * as amqplib from 'amqplib';
import { config } from './index.config';


const connect = async () => {
  const { env } = config
  return await amqplib.connect(env.AMQP_URL!);
}

export default connect;