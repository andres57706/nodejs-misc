/**
 * 
 * 
 * @param {number} target 
 * @param {number[]} coins 
 * @return {number[][]} 
 */
const getWays = (target, coins, memo = {}) => {

	if (target in memo) return memo[target];
	if (target == 0) return [[]];
	if (target < 0) return null;

	// let totalWays = 0;
	let result = [];

	for (let coin of coins) {

		const remainder = target - coin;
		const coinWays = getWays(remainder, coins, memo);
		if (coinWays) {
			// totalWays += 1;
			const targetWays = coinWays.map(way => [...way, coin].sort((a, b) => a - b))

			if (result.indexOf(targetWays) === -1) {
				result.push(...targetWays);
			}
		}
	}

	// memo[target] = totalWays;
	memo[target] = result;
	// return totalWays;
	return result;
}

console.log(getWays(4, [1, 2, 3]));
console.log(getWays(10, [2, 5, 3, 6]));

/** n= 4, m = [,1,2,3]
 *												4
 *
*		1 (3)-------------------------------			2(2)------------			3(1)
		|					|				|			|		|		|			|
		|									|			|		|		|			|
		1 (2)---			2 (1)---		3(0)		1(1)	2(0)	3(-1)		1(0)	2(-1)	3(-2)
		|		|			|		|					|
		|		|			|		|					|
		1 (1)	2(0)		1 (0)	2(-1)				1(0)
		|
		|
		1 (0)

		1,1,1,1
		1,1,2
		1,2,1 (repetido)
		1,3
		2,1,1(repetido)
		2,2
		3,1 (repetido)



 */