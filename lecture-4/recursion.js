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

function sumLoop(N) {
	var res = 0;
	for(N = 8; N > 0; N--) {
		res += N
	}
	console.log(res);
}
sumLoop(8);
