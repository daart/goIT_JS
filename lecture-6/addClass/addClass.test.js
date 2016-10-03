let chai = require('chai');
chai.config.includeStack = true;
let assert = require('assert');

let addClass = require('./addClass.js');

describe("addClass", function() {
	it("adds a new class to an object porperty, if wasn't found", function() {
		var obj1 = {
			className: 'open menu'
		};

		addClass.addClass(obj1, 'new');

		assert.deepEqual(obj1, {
			className: 'open menu new'
		});
	});

	it("doesn't add a new class to an object porperty, if was found", function() {
		var obj1 = {
			className: 'open menu'
		};

		addClass.addClass(obj1, 'open');

		assert.deepEqual(obj1, {
			className: 'open menu'
		});
	});

	it("doesn't add new spaces, if such were found ", function() {
		var obj1 = {
			className: ''
		};

		addClass.addClass(obj1, 'closed');

		assert.deepEqual(obj1, {
			className: 'closed'
		});
	});

});