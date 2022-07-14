import winston from "winston"

test("create new logger with console transport", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports:[
            new winston.transports.Console({})
        ]
    });

    logger.log({ level: "error", message: "Error Message"});
    logger.log({ level: "warn", message: "Warn Message"});
    logger.log({ level: "info", message: "Info Message"});
    logger.log({ level: "http", message: "HTTP Message"});
    logger.log({ level: "verbose", message: "Verbose Message"});
    logger.log({ level: "debug", message: "Debug Message"});
    logger.log({ level: "silly", message: "Silly Message"});
});

test("logging with shortcut function", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports:[
            new winston.transports.Console({})
        ]
    });

    logger.error("Error shortcut");
    logger.warn("Warn shortcut");
    logger.info("Info shortcut");
    logger.http("HTTP shortcut");
    logger.verbose("Verbose shortcut");
    logger.debug("Debug shortcut");
    logger.silly("Silly shortcut");
})