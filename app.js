var Logger = require("./logger").getInstance();
//console.log(Logger.getInstance());
console.log('log:',Logger.log("log"));

console.log('info:', Logger.info("info"));

console.log('error:',Logger.error("error"));
//
//var logger2 = Logger();
//
//console.log('log:',logger2.log("log-instance"));
//
//console.log('info:', logger2.info("info-instance"));
//
//console.log('error:',logger2.error("error-instance"));
