/**
 * Calculate the number of ways that the target
 * can be constructed by concatenating the wordBank elements
 * @param {string} target 
 * @param {string[]} wordBank 
 * @return {number}
 */
const countConstruct = (target, wordBank, memo = {}) => {

  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalWays = 0;

  for (const word of wordBank) {

    if (target.indexOf(word) === 0) {
      const ways = countConstruct(target.slice(word.length), wordBank, memo);
      totalWays += ways;
    }
  }

  memo[target] = totalWays;
  return totalWays;
};


console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
  [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'f'
  ])); // 686207649902314800000