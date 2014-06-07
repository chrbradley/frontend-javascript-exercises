module.exports.sumNumbers = function(array) {
	var sum = 0;
	for ( i = 0 ; i < array.length; i++ ) {
		sum += array[i]
	}
	return sum;
	};

module.exports.splitAndLowerCaseString = function(string) {
	var arrayOfStrings = string.split(",");
	for ( i = 0; i < arrayOfStrings.length; i++ ) {
		arrayOfStrings[i] = arrayOfStrings[i].toLowerCase();
	}
	return arrayOfStrings;
};

<<<<<<< HEAD
module.exports.addIndex = function(array) {
	var strings = [];
	for ( i = 0; i < array.length; i++ ) {
		strings[i] = i + " is " + array[i];
	}

	return strings;

};
=======
module.exports.addIndex = undefined;
>>>>>>> d0c750f9fc60fd2531aff34644f40d9e91173012
