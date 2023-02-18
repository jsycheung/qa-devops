const { shuffleArray } = require("./utils");

const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8];

describe("shuffleArray should", () => {
  test("return an array", () => {
    const result = shuffleArray(sampleArray);
    expect(result).toBeInstanceOf(Array);
  });
  
  test("return an array of the same length as the argument sent in", () => {
    const result = shuffleArray(sampleArray);
    expect(result.length).toEqual(sampleArray.length);
  });

  test("return an array with all the same items in the input array", () => {
    const result = shuffleArray(sampleArray);
    result.sort()
    sampleArray.sort()
    expect(result).toEqual(sampleArray);
  });

  test("return an array where the items have been shuffled around", () => {
    const result = shuffleArray(sampleArray);
    expect(result).not.toEqual(sampleArray);
  });
});

