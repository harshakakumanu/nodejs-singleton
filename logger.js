var colors = require('colors');

var Logger = (function () {
	// Instance stores a reference to the Logger
	var instance;
	function init() {
		// Logger
		// Private methods and variables
		return {
			// Public methods and variables

			log:function(string){
				return colors.blue(string);
			},
			info:function(string){
				return colors.green(string);
			},
			error:function(string){
				return colors.red(string);
			}
		};
	};
	return {
		// Get the Logger instance if one exists
		// or create one if it doesn't
		getInstance: function () {
			if ( !instance ) {
				instance = init();
			}
			return instance;
		}
	};
})();
module.exports = Logger;