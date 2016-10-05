var numbersArr = [5, 2, 1, -10, 8];
var strArr = ["HTML", "CSS", "JavaScript"];

function mapAndSort(arr) {
	var newArr = arr.map( function(n) {
		return n;
	} ).sort();
	return newArr;
}


function reverseFilter(arr) {

	var sortedArray = arr.sort(function(a, b) {
		return b - a;
	});

	return sortedArray;
}

function filterInRandomOrder(arr) {
	var randArray = arr.sort( function(a, b) {
		return Math.random() - 0.5;
	});

	return randArray;
} 

// var res1 = reverseFilter(numbersArr);
// var res2 = mapAndSort(strArr);
var res3 = filterInRandomOrder(numbersArr);

// console.log(res1);
// console.log(res2);
console.log(res3);