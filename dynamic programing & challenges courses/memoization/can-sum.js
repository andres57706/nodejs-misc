
/**
 * Returns true if it's possible to generate the target sum
 * with all the numbers from the second parameter
 * @param {number} targetSum 
 * @param {number[]} numbers 
 * @param {*} memo memo var
 * @return {boolean}
 */
const canSum = (targetSum, numbers, memo = {}) => {

	// base cases
	if (targetSum in memo) return memo[targetSum]; // memoized
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	// tree logic
	for (const num of numbers) {

		const remainder = targetSum - num;

		if (canSum(remainder, numbers, memo) === true) {
			memo[targetSum] = true;
			return true;
		}
	}

	memo[targetSum] = false;
	return false
};


console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
