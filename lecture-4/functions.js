function echo(anyData) {
	return console.log(anyData);
}

// task 1 : function that returns sum of number's sequence, up to the given one;

function sumToGiven(n) {
	return n < 0 ? -1 :
		n === 0 ? 0 :
			n > 1 ? n + sumToGiven(n - 1) : 1;
}

var sum1 = sumToGiven(10);
// echo(sum1);

function sumToGivenLoop(n) {
	var res = 0;
	for(var i = 1; i <= n; i++) {
		res += i;
		// echo('res: ' + res + ' ' + ' i :' + i);
	}
	return res;
}

var sum2 = sumToGivenLoop(10);
// echo(sum2);

function progression(lastMember, diff) {
	var res = 0;
	var progressionMember = (lastMember + 1) + (lastMember - 1) / 2;
	 return lastMember % diff === 0 ? res = (diff + lastMember) / 2 * lastMember / diff : 'This is not a progression';
	return res;
}

var sum3 = progression(24, 4);
// echo(sum3);

// task 2 factorial

function findFactorial(n) {
	return n === 0 ? 0 :
		n >= 2 ? n * findFactorial(n - 1) : 1;
}

var factResult = findFactorial(7);
// echo(factResult);


// task 3 Fibbonacci sequence

function fibo(n) {
	return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
}

var fiboRes = fibo(3);
echo(fiboRes);
