/**
 * @description
 *
 * fucnction unique takes 1 argument: an array of strings, and it should checks are there any anagrams
 * in that array. If such were found, they should be kicked out of the array and a new filtered array
 * should be returned. Otherwise an array without any changes should be returned.
 * 
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function unique(arr) {
	var storage = {};

	for (var i = 0, len = arr.length; i < len; i++) {
		var key = arr[i];

		if(key === storage[key]) {
			continue;
		}

		storage[key] = key;

	}

	return Object.keys(storage);
}

var array = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];
var unique1 = unique(array);

// console.log(unique1);

function stringSort(str) {
	return str.toLowerCase().split('').sort().join('');
}

function isAnagram(test, original) {
	test = stringSort(test);
	original = stringSort(original);

	return test === original ? true : false;
}

var isAn1 = isAnagram('maragav', 'vagaram');
var isAn2 = isAnagram('foefeT ', 'tofFeE');
var isAn3 = isAnagram('duMble ', 'bumBle');
var isAn4 = isAnagram('Buckethead ', 'DeathCubeK');

// console.log(isAn1);
// console.log(isAn2);
// console.log(isAn3);
// console.log(isAn4);