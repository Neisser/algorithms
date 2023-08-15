const { twoSum } = require("./two_sum");

describe("twoSum", () => {
  it("return indices of the two numbers such that they add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    expect(twoSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150)).toEqual([6, 7]);
  });
});
