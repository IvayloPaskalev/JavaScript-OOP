/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(start, end) {
	var arrayOfPrimes = [],
		currentNumber;

	if(arguments.length !== 2) {
		throw '';
	}

	for (currentNumber = start; currentNumber <= end; currentNumber += 1) {
		if (typeof currentNumber === 'string') {
			if (isNaN(currentNumber)) {
				throw 'Error';
			}
			currentNumber = currentNumber * 1;
		}

		if (isPrime(currentNumber)) {
			arrayOfPrimes.push(currentNumber);
		}
	}
	return arrayOfPrimes;
}

function isPrime(n) {
	if (n < 2) {
		return false;
	}

	var q = Math.floor(Math.sqrt(n));

	for (var i = 2; i <= q; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}

module.exports = findPrimes;
