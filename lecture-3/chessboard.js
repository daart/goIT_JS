function echo(anyshit) {
	return console.log(anyshit);
}


function drawChessBoard(rows, cols) {
	var result = '';

	for(var i = 0; i < rows; i++) {
		for(var j = 0; j < cols * 2; j++) {
			result += (i % 2 === j % 2 ) ? '#' : ' ';
		}
		result += '\n';
	}
	return result;
}

var chessBoard = drawChessBoard(8, 5);
// echo(chessBoard);

function powTo(x, n) {
	return n === 0 ? 1 :
		n < 0 ? (1 / powTo(x, ( Math.abs(n) ) ) ) :
			n > 1 ? x * powTo(x, n - 1) : x
}

var toThree = powTo(2, 4);
// echo(toThree);

