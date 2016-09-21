var arr1 = ['apple', 'peach', 'plum', 'berry'];
var arr2 = ['apple', 'orange'];
var arr3 = [5, 7, 4, 8, 3, 0];

// task 1: function that takes an array and returns it's last element;
function returnLastElem(arr) {
	return arr[arr.length - 1];
}

var res1 = returnLastElem(arr1);
// console.log(res1);

// task2: function that takes 2 params an array and elem(of any type), which should be pushed to that array;
function updateArray(arr, newElement) {
	arr.push(newElement);
	return console.log(arr, arr[arr.length - 1]);
} 

// var res2 = updateArray(arr1, 'pineapple');

// task3: 1) create new array (arr2); 2) add new elem to the end; 
// 3) replcae the second from the end element on 'pear';
// 4) delete the first elem and console.log it's value;
// 5) add 'appricot' and 'peach' in the beggining of an array;

arr2.push('kiwi');
arr2[arr2.length - 2] = 'pear';

// console.log( arr2.shift() );

arr2.unshift('appricot', 'peach');

// console.log(arr2);

// task4: function that takes an array, and returns a random value of one of it's element
function getRandomValue(arr) {
	var rand = Math.floor( Math.random() * arr.length );

	return arr[rand];
}

var random1 = getRandomValue(arr2);
// console.log(random1);

// task5: funcition filterRange, that takes 3 params - array, minValue and maxValue, and returns a new array 
// of elements within that range;
function filterRange(arr, minValue, maxValue) {
	var newArr = [];

	for(var index = 0; index < arr.length; index++) {
		if(arr[index] >= minValue && arr[index] <= maxValue) {
			newArr.push(arr[index]);
		}
	}

	return newArr;
}

var task5_Result1 = filterRange(arr3, 0, 5);
console.log(task5_Result1);