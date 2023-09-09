import { NextFunction, Request, Response } from "express";
import { config } from '../config/index.config'

const logger = (_request: Request, _response: Response, next: NextFunction) => {
  const { log } = config;
  log.log(`info`, `[\u2713]Headers: ${JSON.stringify(_request.headers)}`,)
  log.log(`info`, `[\u2713]Params:  ${JSON.stringify(_request.query)}`,) 
  log.log(`info`, `[\u2713]Path:    ${JSON.stringify(_request.path)}`)
  log.log(`info`, `[\u2713]Method:  ${JSON.stringify(_request.method)}`,)
  log.log(`info`, `[\u2713]Body:    ${JSON.stringify(_request.body)}`,)
  console.log(`Request Completed!\n\n`);
  
  next();
}

export default logger