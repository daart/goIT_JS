// first task: function that checks whether an object is empty and returns true, if empty, or false if not.
function isObjectEmpty(obj) {
	return Object.keys(obj).length ? false : true;
}

var obj1 = {};
var obj2 = {name : 'sfsdf'};
delete obj2.name;
obj2.age = 32;

// console.log( isObjectEmpty(obj1));

// task2: function that returnes sum of a whole salaries fond.
function getSalariesFondValue(obj) {
	var sum = 0;
	for(var salary in obj) {
		sum += obj[salary];
	}

	return sum;
}

var salaries = {
	'junior': 1000,
	'middle': 2000,
	'senior': 3500,
	'lead': 5000
}

var sum1 = getSalariesFondValue(salaries);
// console.log(sum1);