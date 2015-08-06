var colors = require('colors');

var logger = {

	log: function(string) {
		return colors.blue(string);
	},
	info: function(string) {
		return colors.green(string)
	},

	error: function(string) {
		return colors.red(string)
	}
};

module.exports = {
	getLogger: function(){
		return logger;
	}
};
