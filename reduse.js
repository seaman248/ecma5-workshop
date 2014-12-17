module.exports = function countWords (inputWords) {
	return inputWords.reduce(function (previousValue, inputWord) {
		previousValue[inputWord] = ++previousValue[inputWord] || 1;
		return previousValue;
	}, {});
}
