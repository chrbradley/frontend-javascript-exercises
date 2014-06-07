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

module.exports.addIndex = function(array) {
	var strings = [];
	for ( i = 0; i < array.length; i++ ) {
		strings[i] = i + " is " + array[i];
	}

	return strings;

};
