module.exports.formLetter = function(firstName, senderName, message) {
	// console.log("Hello "+firstName+",\n\n"+message+"\n\nSincerly,\n"+senderNxame);
	return "Hello "+firstName+",\n\n"+message+"\n\nSincerely,\n"+senderName;

};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	var sliceA = bigString.substring(startA, endA);
	var sliceB = bigString.substring(startB, endB);
	var combineIt = sliceA+sliceB;
	// console.log(combineIt);
	return combineIt;


};

module.exports.findFirstMatch = function(text, searchString) {
	return text.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {
	return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
	var start = text.indexOf(searchString) + searchString.length;
	var end = text.lastIndexOf(searchString);
	// console.log("This is the start index: " + start);
	// console.log("This is the end index: " + end);
	return text.substring(start, end);
};