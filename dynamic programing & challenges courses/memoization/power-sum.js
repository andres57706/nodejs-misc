/*
 * Complete the 'powerSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER X
 *  2. INTEGER N
 */
/**
 * 
 * @param {number} target 
 * @param {number} N 
 */
function powerSum(target, N, visited = []) {
    // Write your code here
    if (target === 0) return 1;
    if (target < 0) return null;

    let ways = 0;

    for (let i = 1; i < target; i++) {
        if (visited.includes(i)) continue;

        const remainder = target - i ** N;
        visited.push(i);

        const remainderWay = powerSum(remainder, N, visited);

        if (remainderWay) ways += 1;
        
        visited = [];
    }

    return ways;
}

/**
 *                   13
 *       ----------------------------------
         |                 |              |  
*       1(12)------------ 2(9)-----------4(-3) 
 *       |                 | 
 *        -- 2(8)          3 (0) 
 *       |
 *        -- 3 (-1)          
 */

console.log(powerSum(13, 2)); // 1
// console.log(powerSum(100, 3)); // 1
