/**
 * Created by harshavardhan on 15-08-06.
 */
var expect    = require("chai").expect;
var logger = require("./logger");
var colors = require('colors');

describe("Module interface & Logger interface test", function() {
	describe("Module interface test", function() {
		it("loads the module", function() {
			var loggerTest   = logger.getLogger();
			expect(loggerTest.hasOwnProperty("log")).to.equal(true);
		});
	});
	describe("Logger interface test", function() {
		it("Checks the color", function() {
			var loggerTest   = logger.getLogger();
			expect(loggerTest.log("log")).to.equal(colors.blue("log"));
		});
	});

	describe("Logger Instance test", function() {
		it("Checks the instance is old", function() {
			var logger1 = logger.getLogger();
			var logger2 = logger.getLogger();
			expect(logger2.num).to.equal(0);
		});
	});

});