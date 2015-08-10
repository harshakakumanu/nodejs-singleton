
var Logger = function() {

	this.log = function(string) {
		return colors.blue(string);
	};

	this.info = function(string) {
		return colors.green(string);
	};
	this.error = function(string) {
		return colors.red(string);
	};
};

var LoggerModule = (function(module) {
	var logInstance = null;

	module.getLogger = function() {
		if (logInstance === null) {
			logInstance = new Logger();
		}
		return logInstance;
	}
})(LoggerModule || {});

module.exports = LoggerModule;
