
module.exports = function() {

	var fs = require('fs');

	this.Given(/^I have a logfile called "([^"]*)"$/, function (arg1, callback) {
		fileName = arg1;
		if ( fs.existsSync( fileName ) ) {
			callback();
		} else {
			callback.fail( new Error("Expected to have a file: " + arg1 ) );
		}
		
	});

	this.When(/^I open it$/, function (callback) {
		// empty
		callback();
	});

	this.Then(/^I should see the content of the file$/, function (callback) {
		var filedata = require('../../src/filtervotes.js').filedata;

		if ( filedata( fileName ) ) {
			callback();
		} else {
			callback.fail( new Error("Expected to read file: " + fileName ) );
		}
	});


	this.Given(/^I have data from that file$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^I should see the array of recipe data$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});


};
