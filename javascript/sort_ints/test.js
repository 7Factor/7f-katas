const sorter = require('./solution');

describe('The Integer Sorting Kata', () => {
  test('should return empty array with null input', () => {
    let actual = sorter.sort(null);
    expect(actual).toEqual([]);
  });
});
