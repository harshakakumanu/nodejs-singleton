var Logger = new require("./logger.js").getLogger();

console.log('log:',Logger.log("log"));

console.log('info:', Logger.info("info"));

console.log('error:',Logger.error("error"));


var Logger2 = new require("./logger.js").getLogger();

console.log('log:',Logger2.log("log-instance"));

console.log('info:', Logger2.info("info-instance"));

console.log('error:',Logger2.error("error-instance"));
