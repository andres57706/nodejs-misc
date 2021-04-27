/**
 * n      : 1, 2, 3, 4, 5, 6, 7,  8,  9,  ... 
 * fib(n) : 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 */

/**
 * Calculates the n number of fibonacci series
 * fib(n)
 * @param {number} n 
 * @return {number}
 */
const fib = (n, memo = {}) => { // 2n- (n+1)

    if (n in memo) return memo[n];

    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
};

for (let i = 1; i <= 50; i++) {
    const result = fib(i);
    console.log(`fib(${i}) = ${result}`);
}
