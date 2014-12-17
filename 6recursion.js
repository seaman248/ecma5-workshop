module.exports = //function reReduce (wordsArr, reduceFunc, init) {
// 	var endArr = function red (index, val) {
// 		if (index > arr.length - 1) return val;
// 		return red(index+1, fn(val, arr[index], index, arr));
// 	}
// 	return endArr(0, init);
// }



function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}





//ХУЙНЯ КАКАЯ-ТО!!!!!