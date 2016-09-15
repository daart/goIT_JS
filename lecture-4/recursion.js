function echo(data) {
	return console.log(data);
}

// return sum in range from 1 to N

// recursively 

// sumTo(5) = 5 + sumTo(5 - 1) -> N:4
// sumTo(4) = 4 + sumTo(4 - 1) -> N:3
// sumTo(3) = 3 + sumTo(3 - 1) -> N:2
// sumTo(2) = 2 + sumTo(2 - 1) -> N:1
// sumTo(1) = 1

function sumTo(N) {
	if(N > 1) {
		return N + sumTo(N - 1);
	} else {
		return 1;
	}
}

var sum = sumTo(5);
// console.log(sum);

// via loop

function sumLoop1(N) {
	var res = 0;
	for(N = 8; N > 0; N--) {
		res += N
	}
	return res;
}
var sumLoop1Result = sumLoop1(8);
// console.log(sumLoop1Result);

function sumLoop2(n) {
	var res = 0;

	for(var i = 1; i <= n; i++) {
		res += i;
	}

	return res;
}

var sumLoop2Result = sumLoop2(7);
// console.log(sumLoop2Result);


// task function !n Factorial
// !n = n * (n - 1) * (n - 2) * ... * 1


function factorial1(n) {
	return n === 0 ? 0 :
		n >= 2 ? n * factorial1(n - 1) : 1;
}

/*
	n = 5; // 	5 * factorial2(5 - 1) 	// step : 1
	n = 4; //  	4 * factorial2(4 - 1) 	// step : 2
	n = 3; //	3 * factorial2(3 - 1)   // step : 3
	n = 2; //	2 * factorial2(2 - 1) 	// step : 4
	n = 1; //	1 						// step : 5
*/

var func2 = function factorial2(n) {
	return n === 0 ? 0 :
		n >= 2 ? n * factorial2(n - 1) : 1;
};

// var emptyRef = factorial1;
// factorial1 = null;

var emptyRef = func2;
func2 = null;
 
var factorRes = emptyRef(5);
// echo(factorRes);
