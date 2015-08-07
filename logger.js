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

module.exports = {
	logger: new Logger(),
	getLogger: function(){
		if (this.logger instanceof Logger) {

			console.log("old",this.logger.num);
			return this.logger
		} else {
			console.log("new");
			return new Logger()
		}
	}
};
