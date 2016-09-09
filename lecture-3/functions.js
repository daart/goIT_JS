function echo(data) {
	console.log(data)
}

/**
 * [Function that checks if an argument is an integer] 
 * @param  {[Number]}  n [description]
 * @return {Boolean}   [description]
 */
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}


// task 1 function that returns sum of 2 numbers

function sumOfTwo(num1, num2) {
	if(isNumeric(num1) && isNumeric(num2)) {
		return +num1 + +num2;
	} else {
		return 'Wrong type fucker!';
	}
}

// task 2 function that takes two numbers and returns a smaller one

function smallestNumber(num1, num2) {
	if(isNumeric(num1) && isNumeric(num2)) {
		return +num1 < +num2 ? num1 : 
			+num2 < +num1 ? num2 : 'numbers are equal';
	}
}

var res = sumOfTwo('4', '5');
var smaller = smallestNumber(-1, 21);

// echo(res);

// echo(smaller);

// Codewars task 'Even or Odd'

function even_or_odd(number) {
	return +number % 2 === 0 ? 'even' : 'odd';
	
}