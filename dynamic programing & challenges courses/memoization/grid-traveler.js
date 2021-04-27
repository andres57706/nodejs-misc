/**
 * Get how many ways has a traveler from up left position start 
 * to right down position on a grind
 * 
 * @param {number} m grid rows
 * @param {number} n grid columns
 * @param {*} memo memo var
 * @returns {number}
 */
const gridTraveler = (m, n, memo = {}) => {

  // get keys
  const key = `${m},${n}`;
  const reverseKey = `${n},${m}`;

  // check if value has been stored previously
  if (memo[key] in memo || memo[reverseKey]) return memo[key];

  // base cases
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  // store value in memo var
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  // store reverse value
  if (m !== n) memo[reverseKey] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  return memo[key];
};


console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(18, 18)); // 2333606220
