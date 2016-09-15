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
console.log(sumLoop2Result);


// task function !n Factorial
// !n = n * (n - 1) * (n - 2) * ... * 1


