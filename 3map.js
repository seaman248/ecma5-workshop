module.exports = function doubleAll (numbers) {
	numx2 = numbers.map(function (num) {
		return num*2;
	});
	return numx2;
}