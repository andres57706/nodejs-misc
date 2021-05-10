/**
 * returns how to sum the numbers to obtain the target sum value
 * @param {number} targetSum target sum value
 * @param {number[]} numbers numbers array
 * @param {*} memo 
 * @returns {number[] | null}
 */
const howSum = (targetSum, numbers, memo = {}) => {

  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);

    if (remainderResult) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};



console.log(howSum(38, [6, 5])); // [ 5, 5 ]
console.log(howSum(300, [7, 14])); // null
