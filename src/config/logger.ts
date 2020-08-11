import winston from 'winston';
import Sentry from 'winston-transport-sentry-node';
import dotenv from 'dotenv';

dotenv.config();

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.cli(),
  ),
  transports: [
    new winston.transports.Console({ handleExceptions: true }),
    // Todo: Disabled sentry for now.
    /*new Sentry({
      sentry: {
        dsn: process.env.SENTRY_DSN,
      },
      handleExceptions: true,
    }),
    */  
  ],
});

export { logger };
