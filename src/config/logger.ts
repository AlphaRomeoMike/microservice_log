import  winston, { format, transports, } from 'winston'

const colorizer = winston.format.colorize();

const logger = winston.createLogger({
  level: 'debug',
  format: format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
    winston.format.printf(msg => 
      colorizer.colorize(msg.level, `${msg.timestamp} - ${msg.level}: ${msg.message}`)
    )
  ),
  transports: [
    new transports.Console(),
  ]

});

export default logger;