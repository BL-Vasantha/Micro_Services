const pino = require("pino")
/*
1. pino :
   it is a node logging library
    which is used to log the information
     in the console and also in the file
2. npm install pino --save
 --------------Without using pino----------------
    no timeestamp
    no log level
    hard to search
    bad for production








*/
module.exports = pino({
    /*
    const logger = pino()
    module.exports = logger




    */
    level:process.env.LOG_LEVEL || "info"

    /*
    Use LOG_LEVEL
    
    otherwise
    use ifo


    */
})
