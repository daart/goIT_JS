
/**
 * @description 
 *
 * Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order 
 * and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] 
 * produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even.
 *  The output must have the original numbers!
 *  
 * @param  {array} arr [description]
 * @return {array}     [description]
 */
function sortItOut(arr) {
	return arr.filter((cur) => {return Math.floor(cur) % 2 !== 0})
		.sort( (a, b) => {return a - b})
			.concat(arr.filter((cur) => {return Math.floor(cur) % 2 === 0})
				.sort((a, b) => {return b - a}));
}

// second variant 
function sortItOut2(arr) {
	let odd = [];
	let even = [];

	for(var i = 0, len = arr.length; i < len; i++) {
		if(Math.floor(arr[i]) % 2 !== 0) {
			odd.push(arr[i]);
		} else {
			even.push(arr[i]);
		}
	}

	return odd.sort(function(a, b) {return a - b}).concat(even.sort(function(a, b) {return b - a}));
}



var arr1 = [11,22,33,44,55,55,90.4,4,78];
var arr2 = [26,243,52,2,432414,1,11,46,32];
var arr3 = [19,65,88,112,60,14,33,49,88];
var arr4 = [68,25,99,50,10,67,2,5,8,34,67];
var res1 = sortItOut(arr1);
console.log(res1);

module.exports = {sortItOut};


