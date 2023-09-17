import connect from "./amqp.config";
import environment from "./config";
import prisma from "./db.config";
import logger from "./logger";


export const config = {
  env: environment,
  log: logger,
  amqp: connect,
  prisma: prisma
}