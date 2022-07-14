import winston from "winston"

const logger = winston.createLogger({
    transports:[
        new winston.transports.Console({}),
        new winston.transports.File({
            handleRejections: true,
            filename: "rejections.log"
        })
    ]
});

async function callAsync(){
    return Promise.reject("ups");
}

callAsync();