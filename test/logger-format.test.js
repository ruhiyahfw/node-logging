import winston from "winston"

test("logging with format", () => {
    const logger = winston.createLogger({
        // format: winston.format.json(), --> {"level":"info","message":"Hello logging"} 
        // format: winston.format.simple(),  --> info: Hello logging 
        format: winston.format.logstash(),
        transports:[
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level: "info",
        message: "Hello logging"
    })
});

test("logging with printf format", () => {
    const logger = winston.createLogger({
        format: winston.format.printf(log => {
            return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`
        }),
        transports:[
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level: "info",
        message: "Hello logging"
    })
})