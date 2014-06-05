module.exports.createCourse = function(title, duration, students) {
	var course = new Object();
	course.title = title;
	course.duration =  duration;
	course.students = students;
	return course;
};

module.exports.addProperty = function(object, newProp, newValue) {
	if (object.hasOwnProperty(newProp)) {
		return object;
	}
	else {
		object[newProp] = newValue;
		return object
	}
};

module.exports.formLetter = function(letter) {
	
	return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;

};

module.exports.canIGet = function(item,price){
	var priceTable = {
		'MacBook Air': 999,
		'MacBook Pro': 1299,
		'Mac Pro': 2499,
		'Apple Sticker': 1
	};

	if (priceTable.hasOwnProperty(item)) {
		return price >= priceTable[item];
	}
	else {
		return false;
	}

};