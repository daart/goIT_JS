let chai = require('chai');
let assert = require('assert');
let moduleRemoveClass = require('./removeClass');
chai.config.includeStack = true;

describe("removeClass", () => {
	it("does nothing if no match found with the 2nd argument", () => {
		var obj = {
			className: 'open menu'
		};

		chai.expect( moduleRemoveClass.removeClass(obj, 'new') ).to.eql({className: "open menu"});
	});

	it("doesn't change an empty prop", () => {
		var obj = {
			className: ''
		};

		chai.expect( moduleRemoveClass.removeClass(obj, '') ).to.eql({className: ""});
	});

	it("removes a class without empty spaces left", () => {
		var obj = {
			className: 'open menu'
		}; 

		chai.expect( moduleRemoveClass.removeClass(obj, 'open') ).to.eql({className: 'menu'});
	});

	it("if only one class exists and it is deleted, result is an empty string", () => {
		var obj = {
			className: 'open'
		};

		chai.expect( moduleRemoveClass.removeClass(obj, 'open') ).to.eql({className: ""});
	});

	it("remvoes a class from a mid part of a string", () => {
		var obj = {
			className: 'open new menu'
		};

		chai.expect( moduleRemoveClass.removeClass(obj, 'new') ).to.eql({className: "open menu"});
	});

	it("removes a repeated class from a mid part of a string", () => {
		var obj = {
			className: 'open menu menu zero'
		};

		chai.expect( moduleRemoveClass.removeClass(obj, 'menu') ).to.eql({className: "open zero"}); 
	});

});