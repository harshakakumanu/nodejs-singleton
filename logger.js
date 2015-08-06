var colors = require('colors');



function Logger(){
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
	getLogger: function(){
		return new Logger()
	}
};
