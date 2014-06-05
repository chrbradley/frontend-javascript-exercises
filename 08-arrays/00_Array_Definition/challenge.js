module.exports.newArray = function(a,b,c,d) {
	var array = [a,b,c,d];
	return array;
};

module.exports.firstAndLast = function(a) {
	var b = [];
	b.push(a[0]);
	b.push(a[a.length-1]);
	return b;
};