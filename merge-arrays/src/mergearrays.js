
function mergearrays(arr1, arr2) {
	var arr3 = concatenate(arr1, arr2);
	return sorted(arr3);
}

function concatenate(arr1, arr2) {
	return arr1.concat(arr2); 
}

module.exports.mergearrays = mergearrays;
module.exports.concatenate = concatenate;
