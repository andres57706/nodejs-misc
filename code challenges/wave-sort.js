
/**
 * sort the input arr into a wave form
 * 
 * example:
 *   
 * in:   [1, 2, 6, 19, 12, 3, 1]
 * out:  [19, 1, 12, 1, 6, 2, 3] 
 * 
 * @param {number[]} arr input array 
 */
const waveSort = (arr) => {

  // ordenado inversamente
  const reverse = Array.from(arr).sort((a, b) => b - a);

  let result = []
  for (let i = 0; i < reverse.length / 2; i++) {
    result.push(reverse[i]);

    if (i <= (reverse.length / 2) - 1)
      result.push(reverse[reverse.length - 1 - i]);

  }

  return result;

};


console.log(waveSort([1, 2, 6, 19, 12, 3])); // [19,1,12,1,6,2,3]
