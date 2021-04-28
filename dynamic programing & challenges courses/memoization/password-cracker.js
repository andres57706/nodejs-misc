/*
 * Complete the 'passwordCracker' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY passwords
 *  2. STRING loginAttempt
 */
/**
 * @param {string[]} passwords
 * @param {string} loginAttempt
 */
function passwordCracker(passwords, loginAttempt, memo = {}) {
  // Write your code here

  if (loginAttempt in memo) return memo[loginAttempt];
  if (loginAttempt.length === 0) return '';

  for (const pass of passwords) {
    if (loginAttempt.indexOf(pass) === 0) {
      const suffix = loginAttempt.slice(pass.length);
      const suffixAttempt = passwordCracker(passwords, suffix, memo);
      if (suffixAttempt !== 'WRONG PASSWORD') {
        memo[loginAttempt] = suffixAttempt + pass;
        return suffixAttempt + pass;
      }
    }
  }

  return 'WRONG PASSWORD';
}

console.log(passwordCracker('because can do must we what'.split(' '), 'wedowhatwemustbecausewecan'));