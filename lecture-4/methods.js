var num1 = +prompt('Please enter a first number : ', '');
var num2 = +prompt('Please enter the seciond number : ', '');

function isNumeric(n) {
	return !isNaN(parseFloat(n) && isFinite(n));
}

function sumOfTwo(number1, number2) {
	if( isNumeric(number1) && isNumeric(number2) ) {
		return number1 + number2;
	} 

	return 'One of the entered values or both are not numbers, please enter a number';
}

function getDeciamal(num) {
	return +(num % (num ^ 0) ).toFixed(3); 
}

console.log(getDeciamal(1.2));

// var sum1 = sumOfTwo(num1, num2);
// console.log(sum1);
