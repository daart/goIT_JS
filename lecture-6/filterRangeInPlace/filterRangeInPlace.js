var arr = [1, 8, 5, 3];

/**
 * @description
 *
 * function that takes 3 arguments, 1st is an array of integers, the other 2 are numbers (a:from; b:to)
 * that represents limit for a new array that should be returned.
 * Array.prototype.filter() method is used here
 * 
 * @param  {array} arr [description]
 * @param  {number} a   [description]
 * @param  {number} b   [description]
 * @return {array}  filterd array in range from a to b included   [description]
 */
function filterRangeWithFilter(arr, a, b) {
	return arr.filter(function(cur) {
		return cur >= a && cur <= b;
	});
}

/**
 * @description 
 *
 * function that takes 3 arguments, 1st is an array of integers, the other 2 are numbers (a:from; b:to)
 * that represents limit for a new array that should be returned.
 * Array.prototype.splice()
 *
 *
 * @param  {array} arr [description]
 * @param  {number} a  [description]
 * @param  {number} b  [description]
 * @return {array}     [description]
 */
function filterRangeWithSplice(arr, a, b) {
	
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < a || arr[i] > b) {
			arr.splice(i--, 1);			
		} 
	}

	return arr;
}


var res1 = filterRangeWithFilter(arr, 1, 4);
var res2 = filterRangeWithSplice(arr, 1, 4);
// console.log(res1);
// console.log(res2);


module.exports = {
	filterRangeWithFilter,
	filterRangeWithSplice
};
