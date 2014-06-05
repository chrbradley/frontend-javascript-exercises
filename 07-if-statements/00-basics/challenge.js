module.exports.favoriteNumber = function(answer, guess) {
	if (guess < answer) {
		return "Too low";
	}

	else if (guess > answer) {
		return "Too high";
	}

	else {
		return "You got it!";
	}
};

module.exports.checkLock = function(a,b,c,d) {
	if ( ( ( a === 3 || a === 5) || a === 7) && (b === 2) && ( c >= 5 && c <= 100  ) && ( d < 9 || d > 100) ) {
		return "correct";
	}
	else {
		return "incorrect";
	}
};

module.exports.canIGet = function(item, money) {
	if ( item === "Apple Sticker" && money >= 1) {
		return true;
	}

	else if ( item === "MacBook Air" && money >= 999) {
		return true;
	}

	else if ( item === "MacBook Pro" && money >= 1299) {
		return true;
	}

	else if ( item === "Mac Pro" && money >= 2499) {
		return true;
	}

	else {
		return false;
	}
};