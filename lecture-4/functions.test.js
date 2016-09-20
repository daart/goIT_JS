var chai = require('chai');
chai.Assertion.includeStack = true;

let module4 = require('./functions.js');

describe('module 4 functions', () => {
	it('fibo should return fibbonacci sequence value of a given number', () => {
		chai.expect( module4.fibo(7) ).to.eql(13) ;
	});
});