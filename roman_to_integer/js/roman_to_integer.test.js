const { romanToInt } = require('./roman_to_integer');

describe('romanToInt', () => {
  it('converts simple Roman numerals to integers', () => {
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('LVIII')).toBe(58);
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
