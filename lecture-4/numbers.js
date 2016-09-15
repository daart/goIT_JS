function echo(data) {
	return console.log(data);
}

// task 1 : create function that returns a random integer in range 0 - max;
function randToMax(max) {
	var result = Math.round((Math.random() * max ));
	return result;
}

var res1 = randToMax(45);
// echo(res1);

// task 2 : create function that returns a random integer in range min - max;
function randomizeInRange(min, max) {
	var diff = max - min;
	var randMultiplier = Math.random();
	var result = Math.round(min + randMultiplier * diff);
	echo( 'Min number : ' + min + ' +' + ' Random num : ' + randMultiplier + ' * (multiplyed by ) : ' + diff + ' Max num - Min num'); 
	return result;
}

var res2 = randomizeInRange(3, 51);
echo(res2);