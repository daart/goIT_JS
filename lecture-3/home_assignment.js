function echo(data) {
	return console.log(data);
}

function sequence1to100() {

	for(var i = 0; i < 100; i++ ) {

		if(i % 5 === 0 && i % 3 === 0 ) {
			echo('FizzzBuzzz : ' + i);
		} else if(i % 5 === 0) {
			echo('Buzzz : ' + i);
		} else if(i % 3 === 0) {
			echo('Fizzz : ' + i);
		} else {
			echo('Simple num : ' + i);
		}
	}
}

// sequence1to100();

// my decision
function drawChessBoard() {
	var res = '';

	for(var i = 0; i < 8; i++) {
		if(i % 2 !== 0) {
			res += ' ';	
		} 
		for(var j = 0; j < 8; j++) {
			res += '#';
		}
		res += '\n';
	}

	echo(res);
}

// drawChessBoard();

// shorter way

function drawHashes() {
	var result = '';
	for(var row = 1; row <= 8; row++) {
		for(var cell = 1; cell <= 8; cell++) {
			// echo('Curent row : ' + row + ' % 2 === ' + (row % 2) );
			// echo('Current cell : ' + cell + ' % 2 === ' + (cell % 2) );
			result += (row % 2 == cell % 2) ? "#" : ' ';

		}
		result += '\n';
	}

	echo(result);
}

// drawHashes();

// function power

function pow(x, n) {
	return (n === 0) ? 1 : 
		(n !== 0) ? x * pow(x, n - 1) : x
}

var res = pow(12, 1);
echo(res);
