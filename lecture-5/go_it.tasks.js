/*
	task 1
	Write a function, that takes an object as a parameter,
	and returnes a key with the biggest value. 
 */
var tasksCompleted = {
	'Anna': 29,
	'Serg': 35,
	'Elena': 1,
	'Artya': 99,
	'Katya': 155
};

var image = {
	widht: 100,
	height: 400,
	title: 'Cool Image'
}

function getTheMostSuccessful(obj) {
	var maxTasksCompleted = 0;
	var theSmartestStudent = '';

	for (var student in obj) {
		if(tasksCompleted[student] > maxTasksCompleted) {
			maxTasksCompleted = tasksCompleted[student];
			theSmartestStudent = student;
		}
	}

	return theSmartestStudent;
}

var taks1_result = getTheMostSuccessful(tasksCompleted);
// console.log(taks1_result);

/*
	task 2
	Write a function multiplyNumeric, that takes an object as a parameter,
	and returns an object in which, all of the numeric values are multiplied by 2
 */

function isNumeric(n) {
	return !isNaN(parseFloat(n) && isFinite(n));
}

function multiplyNumeric(obj) {
	for (var numeric in obj) {
		obj[numeric] = isNumeric( obj[numeric] ) ? obj[numeric] * 2 : obj[numeric];
	}

	return obj;
}

var task2_result = multiplyNumeric(image);
// console.log(task2_result);

/*
	task 3
	Create a calculator that:
	1) asks a user to enter numeric values sequntially via prompt, and store them in an array;
	2) to end input only if a user has entered an empty string, NaN or hit 'cancel' button;
	3) 0 doesn't have to end an input, becasue it's a valid number;
	4) returnes a sum of all of the entered numbers, after an input had finished;
 */
var endResult = 0;
var number = null;

do {
	number = prompt('Please enter a number : ', '');
	endResult = isNumeric(number) ? calculateSum(number) : alert(" You've entered non numeric value!, so before the termination the sum was equal to : " + endResult ) ;
} while ( isNumeric(number) ) {

} 

function calculateSum(num) {
	return endResult += +num;
}

