/**
 * Get the best combination for sum numbers in order to get the target sum 
 * @param {number} targetSum target sum value
 * @param {number[]} numbers numbers array
 * @param {*} memo 
 * @returns {number[] | null}
 */
const bestSum = (targetSum, numbers, memo = {}) => {

  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (const num of numbers) {

    const remainder = targetSum - num;

    const remainderCombination = bestSum(remainder, numbers, memo);

    if (remainderCombination) {
      const combination = [...remainderCombination, num];

      // if combination is shorter than current shortest
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination
  return memo[targetSum];
};


console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(bestSum(8, [2, 3, 5])); // [ 5, 3 ]
console.log(bestSum(8, [1, 4, 5])); // [ 4, 4 ]
console.log(bestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]
