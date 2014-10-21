
function calculator(str) {
	if (str == "") {
		return 0;
	} 

	var sum = 0;
	var del = ',';

	if (str[0] == "\\" && str[1] == "\\" ) {
		del = str[2];
	}

	var nums = str.split(/,|\n/);

	for (var i = 0; i < nums.length; i++ ) {
		sum += parseInt(nums[i]);
	}

	return sum;
}
module.exports.calculator = calculator
