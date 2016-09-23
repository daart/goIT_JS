// Objects: properties search
var obj1 = {
	alarmTime: '8:30'
}

var obj2 = {
	"Vasya": 100,
	"Petya": 300,
	"Dashiki": 200
}

/*
	task1
	Function that checks whether an object is empty
 */
function isObjEmpty(obj) {
	for(var prop in obj) {
		return false;
	}

	return true;
}

var isObjEmpty_result = isObjEmpty(obj1);
// console.log(isObjEmpty_result);

/*
	task 2 
	function that takes an object with salaries of employees as a parameter
	and returnes an employee with the biggest payroll
 */
function getTheHighestSalary(obj) {
	var max = 0;
	var luckiest = '';

	for (var dude in obj) {
		if (obj[dude] > max) {
			max = obj[dude];
			luckiest = dude;
		}
	}

	return luckiest;
}

obj2['Mityay'] = 500;

var dudeWithTheBiggestPayroll = getTheHighestSalary(obj2);
// console.log(dudeWithTheBiggestPayroll);



