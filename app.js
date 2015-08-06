var Logger = new require("./logger.js");
var logger1 = Logger.getLogger();

console.log('log:',logger1.log("log"));

console.log('info:', logger1.info("info"));

console.log('error:',logger1.error("error"));

var logger2 = Logger.getLogger();

console.log('log:',logger2.log("log-instance"));

console.log('info:', logger2.info("info-instance"));

console.log('error:',logger2.error("error-instance"));
