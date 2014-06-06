module.exports.copy = function(object) {

	var newObject = {};

	for (var key in object) {
		newObject[key] = object[key];
	}

	return newObject;

};

module.exports.extend = function(source, destination) {

	for ( var key in source) {
		if (!destination.hasOwnProperty(key))
		destination[key] = source[key];
	}

	return destination;

};

module.exports.hasElems = function(object, keys) {
	
	console.log(keys.sort().toString());
	console.log(Object.getOwnPropertyNames(object).sort().toString());
	console.log(Object.getOwnPropertyNames(object).sort().toString() == keys.sort().toString());

	if (keys.length === 0) {
		return true;
	}

	else if ( Object.getOwnPropertyNames(object).sort().toString() == keys.sort().toString() ) {
		return true;
	}

	else {
		return false;
	}

};
