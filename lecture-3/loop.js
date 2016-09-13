function echo(anyshit) {
	console.log(anyshit);
}

var i = 0;
var k = '';
var l = 3;

while(i < 10) {
	i += 2;
	// console.log(i);
}

while(k.length < 7) {
	k += '#';
	// echo(k);
}

var j = 0;

while(j < 3) {
	// echo(j);
	j++;
}

// task 1 

// do {
// 	var targetNum = +prompt('Please enter a number that is > than 100 : ', '103');
// } while(targetNum <= 100 && targetNum !== null) {

// }

// echo(targetNum);


// task 2 output sequence of Simple Finite numbers
nextPrime:
for(var row = 2; row < 10; row++) {
	echo('current row ---- ' + row);
	for(var col = 2; col < row; col++) {
		echo('current col ---- ' + col);

		if(row % col == 0) {
			continue nextPrime;
		}
	}

	// echo(row);
}



