 module.exports = function fun (func, num) {
 	num = 0;
	return func(num++);
}