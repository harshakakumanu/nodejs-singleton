var colors = require('colors');



function Logger(){
	this.num = 0;

	this.log = function(string) {
		return colors.blue(string);
	};

	this.info = function(string) {
		return colors.green(string);
	};
	this.error = function(string) {
		return colors.red(string);
	};
}

var logger = new Logger();
module.exports = {

	getLogger: function(){
		if (logger instanceof Logger) {
			return logger
		} else {
			this.num++;
			return new Logger()
		}
	}
};
