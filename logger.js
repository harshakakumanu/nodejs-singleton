var colors = require('colors');

var Logger = {

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
		return Logger;
	}
};
