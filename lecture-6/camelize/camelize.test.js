let chai = require('chai');
let assert = require('assert');
let moduleCamelize = require('./camelize');
chai.config.includeStack = true;

describe("camelize", () => {

	it("leaves an empry line as is", () => {
		chai.expect( moduleCamelize.camelize('') ).to.eql(''); 
	});

	it("camelizes a string with a hyphens", () => {

		chai.expect( moduleCamelize.camelize('background-color') ).to.eql('backgroundColor')
	});

	it("if a first character is a hyphen, camelizes a second char", () => {

		chai.expect( moduleCamelize.camelize('-webkit-transition') ).to.eql('WebkitTransition');
	});

});