
// function concatenate(arr1, arr2) {
// 	return arr1.concat(arr2); 
// }

// function sorted(arr) {
	 
// }

function mergearrays(arr1, arr2) {
	// var arr3 = concatenate(arr1, arr2);
	// return sorted(arr3);
	var arr3 = [];
	var length = arr1.length;
	var i = 0, j = 0;

	while (i < length || j < length) {
		if (arr1[i] < arr2[j]) {
			arr3.push(arr1[i]);
			i++;
		} else {
			arr3.push(arr2[j]);
			j++;
		}
	}
	return arr3;
}


module.exports.mergearrays = mergearrays;
// module.exports.concatenate = concatenate;
