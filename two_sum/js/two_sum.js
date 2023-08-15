/**
 * Finds two numbers in an array that add up to a given target.
 *
 * @param {number[]} nums - The input array of numbers.
 * @param {number} target - The target sum to achieve.
 * @returns {number[]} - An array containing the indices of the two numbers that add up to the target.
 * @throws {Error} - If no such pair is found.
 */
const twoSum = (nums, target) => {
  /**
   * A hash table to store the indices of numbers along with their complements.
   * @type {Object<number, number>}
   */
  const ht = {};

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    if (typeof ht[num] !== "undefined") {
      return [ht[num], index];
    }

    const inverse = target - num;
    ht[inverse] = index;
  }

  throw new Error("No solution found");
};

module.exports = {
  twoSum,
};
