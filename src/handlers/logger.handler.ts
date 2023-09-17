import { config } from "../config/index.config";

const LogHandler = async () => {
  const { prisma } = config;
  const channel = (await config.amqp()).createChannel();
  const exchange = 'logs';
  (await channel).assertExchange(exchange, 'fanout');
  (await channel).assertQueue('q-logs');
  (await channel).bindQueue('q-logs', exchange, '');
  (await channel).consume('q-logs', async (message: any) => {
    let msg = Buffer.from(message);
    const data = JSON.parse(JSON.stringify(msg));
    console.log('\u2713', {
      data: data,
      message: 'Logs received'
    });

    await prisma.logs.create({
      data: data
    });
  });
}

export default LogHandler