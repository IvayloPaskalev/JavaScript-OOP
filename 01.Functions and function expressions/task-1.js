/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(array) {
	 var i,
             len,
	     currentNumber,
             sum = 0;

	if(array.length === 0){
		return null;
	}
	
        for (i = 0, len = array.length; i < len; i+=1) {
		currentNumber = array[i];

		if(typeof currentNumber === 'string') {
			if(isNaN(currentNumber)) {
				throw 'Error';
			}
			currentNumber = currentNumber * 1;
		}
            sum = sum + currentNumber;
        }
        return sum;
}

module.exports = sum;
