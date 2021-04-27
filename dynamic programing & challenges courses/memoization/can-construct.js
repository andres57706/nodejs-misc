
/**
 * returns true if can construct the target work using the workBank
 * @param {string} target 
 * @param {string[]} wordBank 
 */
const canConstruct = (target, wordBank, memo = {}) => {


  if (target in memo) return memo['target']
  if (target === '') return true;

  for (const word of wordBank) {

    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }


  memo[target] = false;
  return false;
};



console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('abcdefghijklmnopqrst', ['ab', 'abc', 'cd', 'def', 'abcd'])); // false
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
  [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'])); // false