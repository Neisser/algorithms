/* eslint-disable max-len */
/**
 * Convert a Roman numeral to an integer.
 * @param {string} s - The Roman numeral as a string.
 * @return {number} The integer representation of the Roman numeral.
 */
const romanToInt = (s) => {
  // Define a dictionary for Roman numeral characters and their corresponding values.
  const dic = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };

  // Split the input string into an array of characters, then map each character to its corresponding value.
  return s
    .split('')
    .map((i) => dic[i]) // Map each Roman numeral character to its numeric value.
    .map((x, y, z) => {
      // Calculate the actual value of each Roman numeral based on its position and neighboring numerals.
      if (x < z[y + 1]) return x * -1; // If the current numeral is smaller than the next one, subtract its value.
      return x; // Otherwise, add the numeral's value.
    })
    .reduce((a, b) => a + b); // Sum up the values of all numerals to get the final integer representation.
};

module.exports = {
  romanToInt,
};
