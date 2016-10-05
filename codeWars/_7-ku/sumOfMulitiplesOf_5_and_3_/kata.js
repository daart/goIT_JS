/**
 * @description 
 *
 *function findSum takes 1 argument: a number, which represents a last number of a sequence from 1 to n
 *increment value = 1. It should calculate and return a sum of all numbers that are devided by 3 and 5 
 *within that sequence 
 * 
 * @param  {Numner} n [description]
 * @return {Number}   [description]
 */
function findSum(n) {
	var result = 0;

	for(var i = 3; i <= n; i++) {

		if(i % 3 === 0 || i % 5 === 0) {
			result += i;
		}
	}

	return result;
}

var res = findSum(2);
console.log(res);

module.exports = {
	findSum
};