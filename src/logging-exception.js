import winston from "winston"

const logger = winston.createLogger({
    transports:[
        new winston.transports.Console({}),
        new winston.transports.File({
            handleExceptions: true,
            filename: "exception.log"
        })
    ]
});

logger.info("hello world");
logger.info("hello world");
logger.info("hello world");
logger.info("hello world");

hello();