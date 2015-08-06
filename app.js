var logger = require("./logger.js").getLogger();

console.log('log:',logger.log("log"));

console.log('info:', logger.info("info"));

console.log('error:',logger.error("error"));
