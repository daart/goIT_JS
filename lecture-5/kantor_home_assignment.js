/*
	task 4 
	Write a function find(arr, value), that searches values in arr and returns it's index if found
	if not - returnes -1
 */
var arr1 = ['test', 2, 1.3, false];

function find(arr, value) {
	/* first method */
	// for(var item = 0, len = arr.length; item < len; item++) {
	// 	if (arr[item] === value) {
	// 		return item;
	// 	}
	// }

	// return -1;
	
	/* second method */
	if ( arr.indexOf() ) {
		return arr.indexOf(value);
	}
}

var find_res_1 = find(arr1, "test");
var find_res_2 = find(arr1, 2);
var find_res_3 = find(arr1, 1.5);
var find_res_4 = find(arr1, 1.3);

// console.log(find_res_1, find_res_2, find_res_3, find_res_4);

/*
	task subArray of the sequnce biggest sum
	write a function getMaxSubSum(arr), that takes an array as an argument and returnes
	the biggest sum of consequtive numbers
 */

function getMaxSubSum(arr) {
	var sum = 0;
	var max = 0;

	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];

		if(sum <= 0) {
			sum = 0;
			continue;
		}

		if(sum > max) {
			max = sum;
		}

	}

	return max;
}

var subSum1 = getMaxSubSum([-1, 2, 3, -9]);
var subSum2 = getMaxSubSum([2, -1, 2, 3, -9]);
var subSum3 = getMaxSubSum([-1, 2, 3, -9, 11]);
var subSum4 = getMaxSubSum([-2, -1, 1, 2]);
var subSum5 = getMaxSubSum([100, -9, 2, -3, 5]);
var subSum6 = getMaxSubSum([1, 2, 3]);

console.log(subSum1, subSum2, subSum3, subSum4, subSum5, subSum6);