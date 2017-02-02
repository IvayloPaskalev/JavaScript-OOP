/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function solve() {
    return function sum(array) {
        let len = array.length,
            sum = 0,
            i,
            currentSymbol;

        if (len === 0) {
            return null;
        }
        if (typeof array === 'undefined') {
            throw Error('Parameter is not passed');
        }

        for (i = 0; i < len; i += 1) {
            currentSymbol = array[i];
            if (typeof currentSymbol === 'string') {
                if (isNaN(currentSymbol)) {
                    throw Error('Current symbol is not convertible to Number');
                }
                currentSymbol = currentSymbol * 1;
            }
            sum = sum + currentSymbol;
        }
        return sum;
    }
}

module.exports = solve;